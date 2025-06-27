# EmailJS Setup Guide for ayushadhikari2062@gmail.com

## Prerequisites ✅

- Email: ayushadhikari2062@gmail.com
- EmailJS account (free tier available)
- React app with EmailJS installed

## Step 1: Create EmailJS Account

1. **Go to EmailJS:**

   - Visit: https://www.emailjs.com/
   - Click "Sign Up" or "Get Started"

2. **Sign up with your email:**
   - Use: ayushadhikari2062@gmail.com
   - Create a password
   - Verify your email

## Step 2: Add Email Service

1. **In EmailJS Dashboard:**

   - Go to "Email Services"
   - Click "Add New Service"

2. **Choose Gmail:**

   - Select "Gmail"
   - Service name: "ayush_portfolio"
   - Click "Connect"

3. **Connect Gmail:**
   - Sign in with: ayushadhikari2062@gmail.com
   - Allow EmailJS to send emails
   - Copy the Service ID (you'll need this)

service_ojyd1k9

## Step 3: Create Email Template

1. **Go to Email Templates:**

   - Click "Email Templates"
   - Click "Create New Template"

2. **Template Configuration:**

   - Template name: "portfolio_contact"
   - Subject: "New Contact Form Message from {{name}}"
   - From name: "Ayush Portfolio"
   - From email: ayushadhikari2062@gmail.com
   - To email: ayushadhikari2062@gmail.com

3. **Email Content:**

```html
<div
  style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px;"
>
  <div
    style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);"
  >
    <h2
      style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #6366f1; padding-bottom: 10px;"
    >
      📧 New Contact Form Message
    </h2>
    <div
      style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #6366f1;"
    >
      <p style="margin: 8px 0;"><strong>👤 Name:</strong> {{name}}</p>
      <p style="margin: 8px 0;">
        <strong>📧 Email:</strong>
        <a href="mailto:{{email}}" style="color: #6366f1;">{{email}}</a>
      </p>
      <p style="margin: 8px 0;"><strong>📅 Date:</strong> {{date}}</p>
    </div>
    <div
      style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; margin: 20px 0;"
    >
      <h3 style="margin-top: 0; color: #374151;">💬 Message:</h3>
      <div style="line-height: 1.6; color: #4b5563;">{{message}}</div>
    </div>
    <div
      style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;"
    >
      <p style="color: #6b7280; font-size: 14px; margin: 0;">
        This message was sent from your portfolio contact form
      </p>
    </div>
  </div>
</div>
```

4. **Save Template:**
   - Click "Save"
   - Copy the Template ID (you'll need this)

## Step 4: Get Public Key

1. **In EmailJS Dashboard:**
   - Go to "Account" → "API Keys"
   - Copy your Public Key

## Step 5: Configure Environment Variables

Create `.env.local` file in your project root:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 6: Test the Setup

1. **Start your React app:**

```bash
npm start
```

2. **Test the contact form:**
   - Fill out the form
   - Submit a test message
   - Check ayushadhikari2062@gmail.com for the email

## EmailJS Configuration Details

### Service ID Format:

- Usually looks like: `service_xxxxxxx`

### Template ID Format:

- Usually looks like: `template_xxxxxxx`

### Public Key Format:

- Usually looks like: `xxxxxxxxxxxxxxxxxxxx`

## Template Variables

The template uses these variables:

- `{{name}}` - Sender's name
- `{{email}}` - Sender's email
- `{{message}}` - Sender's message
- `{{date}}` - Current date (optional)

## Free Tier Limits

- **EmailJS Free Tier:**
  - 200 emails per month
  - 2 email templates
  - 1 email service
  - Perfect for portfolio websites

## Troubleshooting

### Common Issues:

1. **"Service not found"**

   - Check your Service ID is correct
   - Verify the service is connected to Gmail

2. **"Template not found"**

   - Check your Template ID is correct
   - Verify the template is saved

3. **"Public key invalid"**

   - Check your Public Key is correct
   - Verify you're using the right key

4. **"Email not sending"**
   - Check Gmail connection
   - Verify template variables match form field names

### Testing Locally:

Make sure your environment variables are loaded:

```bash
# Check if variables are loaded
echo $REACT_APP_EMAILJS_SERVICE_ID
echo $REACT_APP_EMAILJS_TEMPLATE_ID
echo $REACT_APP_EMAILJS_PUBLIC_KEY
```

## Security Best Practices

1. **Never commit .env.local to version control**
2. **Use environment variables for all sensitive data**
3. **Regularly check your EmailJS usage**
4. **Monitor for spam or abuse**

## Cost Considerations

- **Free Tier**: 200 emails/month (perfect for portfolio)
- **Paid Plans**: Start at $15/month for 1,000 emails
- **No server costs**: EmailJS handles everything

## Support

- **EmailJS Documentation**: https://www.emailjs.com/docs/
- **EmailJS Support**: https://www.emailjs.com/support/
- **Community Forum**: https://community.emailjs.com/

## Next Steps

1. Complete the EmailJS setup
2. Test the contact form
3. Deploy your portfolio
4. Monitor email delivery
