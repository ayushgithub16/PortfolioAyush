// Image upload service for blog posts
// This is a simple implementation that converts images to base64
// In production, you would want to upload to a cloud service like Cloudinary, AWS S3, etc.

export const uploadImage = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = () => {
      reject(new Error("Failed to read file"));
    };

    reader.readAsDataURL(file);
  });
};

export const handleImageUpload = (blobInfo, success, failure) => {
  const file = blobInfo.blob();

  // Check file size (limit to 5MB)
  if (file.size > 5 * 1024 * 1024) {
    failure("Image size must be less than 5MB");
    return;
  }

  // Check file type
  if (!file.type.startsWith("image/")) {
    failure("Please select a valid image file");
    return;
  }

  // Use the uploadImage function directly
  const reader = new FileReader();

  reader.onload = () => {
    success(reader.result);
  };

  reader.onerror = () => {
    failure("Failed to upload image");
  };

  reader.readAsDataURL(file);
};

// Clean HTML content for better display
export const cleanHtmlContent = (html) => {
  if (!html) return "";

  // Remove any remaining Google Docs artifacts
  let cleaned = html;

  // Remove empty paragraphs
  cleaned = cleaned.replace(/<p><\/p>/g, "");
  cleaned = cleaned.replace(/<p>\s*<\/p>/g, "");

  // Remove extra spaces and line breaks (but preserve formatting)
  cleaned = cleaned.replace(/\s{2,}/g, " ");
  cleaned = cleaned.trim();

  return cleaned;
};
