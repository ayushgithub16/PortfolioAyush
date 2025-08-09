// Image upload service for blog posts
// This is a simple implementation that converts images to base64
// In production, you would want to upload to a cloud service like Cloudinary, AWS S3, etc.

export const uploadImage = async (file) => {
  console.log("Starting file read for:", file.name, file.type, file.size);

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      console.log(
        "File read successful, data URL length:",
        reader.result.length
      );
      resolve(reader.result);
    };

    reader.onerror = () => {
      console.error("FileReader error:", reader.error);
      reject(new Error("Failed to read file"));
    };

    reader.readAsDataURL(file);
  });
};

export const handleImageUpload = (blobInfo, success, failure) => {
  console.log("Image upload started", {
    size: blobInfo.blob().size,
    type: blobInfo.blob().type,
  });

  const file = blobInfo.blob();

  // Check file size (limit to 5MB)
  if (file.size > 5 * 1024 * 1024) {
    console.error("Image too large:", file.size);
    failure("Image size must be less than 5MB");
    return;
  }

  // Check file type
  if (!file.type.startsWith("image/")) {
    console.error("Invalid file type:", file.type);
    failure("Please select a valid image file");
    return;
  }

  console.log("Image validation passed, uploading...");

  // Use the uploadImage function directly
  const reader = new FileReader();

  reader.onload = () => {
    console.log("Image upload successful");
    success(reader.result);
  };

  reader.onerror = () => {
    console.error("FileReader error:", reader.error);
    failure("Failed to upload image");
  };

  reader.readAsDataURL(file);
};

// Clean HTML content for better display
export const cleanHtmlContent = (html) => {
  console.log("Cleaning HTML content:", {
    originalLength: html?.length || 0,
    hasContent: !!html,
  });

  if (!html) return "";

  // Remove any remaining Google Docs artifacts
  let cleaned = html;

  // Remove empty paragraphs
  cleaned = cleaned.replace(/<p><\/p>/g, "");
  cleaned = cleaned.replace(/<p>\s*<\/p>/g, "");

  // Remove extra spaces and line breaks (but preserve formatting)
  cleaned = cleaned.replace(/\s{2,}/g, " ");
  cleaned = cleaned.trim();

  console.log("HTML content cleaned:", {
    cleanedLength: cleaned.length,
    preview: cleaned.substring(0, 100),
  });

  return cleaned;
};
