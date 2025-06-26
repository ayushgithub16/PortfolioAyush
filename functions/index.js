const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Email transporter configuration
const transporter = nodemailer.createTransporter({
  service: "gmail",
  auth: {
    user: functions.config().email.user,
    pass: functions.config().email.pass,
  },
});

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

exports.sendContactEmail = functions.https.onCall(async (data, context) => {
  try {
    const { name, email, message, messageId } = data;

    // Validate input
    if (!name || !email || !message) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "Missing required fields: name, email, and message are required"
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "Invalid email format"
      );
    }

    // Sanitize inputs
    const sanitizedName = name.trim().substring(0, 100);
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedMessage = message.trim().substring(0, 2000);

    // Email content for you (notification)
    const mailOptionsToYou = {
      from: `"Portfolio Contact Form" <${functions.config().email.user}>`,
      to: functions.config().email.user,
      subject: `New Contact Form Message from ${sanitizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px;">
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
              📧 New Contact Form Message
            </h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #6366f1;">
              <p style="margin: 8px 0;"><strong>👤 Name:</strong> ${sanitizedName}</p>
              <p style="margin: 8px 0;"><strong>📧 Email:</strong> <a href="mailto:${sanitizedEmail}" style="color: #6366f1;">${sanitizedEmail}</a></p>
              <p style="margin: 8px 0;"><strong>🆔 Message ID:</strong> ${
                messageId || "N/A"
              }</p>
              <p style="margin: 8px 0;"><strong>📅 Date:</strong> ${new Date().toLocaleString()}</p>
            </div>
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #374151;">💬 Message:</h3>
              <div style="line-height: 1.6; color: #4b5563;">
                ${sanitizedMessage.replace(/\n/g, "<br>")}
              </div>
            </div>
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                This message was sent from your portfolio contact form at ${new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Email content for the sender (confirmation)
    const mailOptionsToSender = {
      from: `"Ayush Adhikari" <${functions.config().email.user}>`,
      to: sanitizedEmail,
      subject: "Thank you for your message - Ayush Adhikari",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px;">
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
              ✨ Thank you for reaching out!
            </h2>
            <p style="font-size: 16px; line-height: 1.6; color: #4b5563;">
              Dear <strong>${sanitizedName}</strong>,
            </p>
            <p style="font-size: 16px; line-height: 1.6; color: #4b5563;">
              Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.
            </p>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #6366f1;">
              <h3 style="margin-top: 0; color: #374151;">📝 Your Message:</h3>
              <div style="background: white; padding: 15px; border-radius: 5px; line-height: 1.6; color: #4b5563;">
                ${sanitizedMessage.replace(/\n/g, "<br>")}
              </div>
            </div>
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #bae6fd;">
              <p style="margin: 0; color: #0369a1; font-size: 14px;">
                <strong>💡 Tip:</strong> While you wait for my response, feel free to check out my latest projects and experience on my portfolio!
              </p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #4b5563;">
                Best regards,<br>
                <strong style="color: #1f2937;">Ayush Adhikari</strong>
              </p>
            </div>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px; text-align: center; margin: 0;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    const [notificationResult, confirmationResult] = await Promise.all([
      transporter.sendMail(mailOptionsToYou),
      transporter.sendMail(mailOptionsToSender),
    ]);

    console.log("Emails sent successfully:", {
      notification: notificationResult.messageId,
      confirmation: confirmationResult.messageId,
      sender: sanitizedEmail,
      timestamp: new Date().toISOString(),
    });

    return {
      success: true,
      message: "Emails sent successfully",
      messageId: notificationResult.messageId,
    };
  } catch (error) {
    console.error("Email sending error:", error);

    // Handle specific nodemailer errors
    if (error.code === "EAUTH") {
      throw new functions.https.HttpsError(
        "internal",
        "Email authentication failed. Please check your email configuration."
      );
    }

    if (error.code === "ECONNECTION") {
      throw new functions.https.HttpsError(
        "internal",
        "Failed to connect to email service. Please try again later."
      );
    }

    throw new functions.https.HttpsError(
      "internal",
      "Failed to send emails. Please try again later."
    );
  }
});
