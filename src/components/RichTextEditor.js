import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { handleImageUpload } from "../services/imageService";
import "./RichTextEditor.css";

const RichTextEditor = ({
  value,
  onChange,
  placeholder = "Start writing your blog post...",
}) => {
  const editorRef = useRef(null);

  const handleEditorChange = (content, editor) => {
    console.log("Editor content changed:", {
      length: content?.length || 0,
      hasContent: !!content,
    });
    onChange(content);
  };

  return (
    <div className="rich-text-editor">
      <Editor
        ref={editorRef}
        apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
        value={value}
        onEditorChange={handleEditorChange}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
            "paste",
            "emoticons",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | link image | code | help",
          content_style: `
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
              font-size: 16px; 
              line-height: 1.6; 
              color: #374151;
              max-width: none;
              margin: 0;
              padding: 20px;
            }
            h1, h2, h3, h4, h5, h6 {
              color: #1a1a1a;
              font-weight: 600;
              margin-top: 24px;
              margin-bottom: 16px;
            }
            p {
              margin-bottom: 16px;
            }
            a {
              color: #3b82f6;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
            blockquote {
              border-left: 4px solid #3b82f6;
              background: #f8fafc;
              margin: 16px 0;
              padding: 16px 20px;
              font-style: italic;
            }
            code {
              background: #f1f5f9;
              color: #e11d48;
              padding: 2px 6px;
              border-radius: 4px;
              font-family: 'SF Mono', Monaco, Inconsolata, monospace;
              font-size: 0.9em;
            }
            pre {
              background: #1e293b;
              color: #e2e8f0;
              padding: 16px;
              border-radius: 8px;
              overflow-x: auto;
              font-family: 'SF Mono', Monaco, Inconsolata, monospace;
            }
            ul, ol {
              margin-bottom: 16px;
              padding-left: 24px;
            }
            li {
              margin-bottom: 8px;
            }
            img {
              max-width: 100%;
              height: auto;
              border-radius: 8px;
              margin: 16px 0;
            }
            table {
              border-collapse: collapse;
              width: 100%;
              margin: 16px 0;
            }
            table, th, td {
              border: 1px solid #e1e5e9;
            }
            th, td {
              padding: 12px;
              text-align: left;
            }
            th {
              background: #f8fafc;
              font-weight: 600;
            }
          `,
          paste_data_images: true,
          images_upload_handler: handleImageUpload,
          images_upload_url: false, // Disable automatic uploads, use our handler
          automatic_uploads: false, // Disable automatic uploads
          paste_preprocess: (plugin, args) => {
            // Clean up pasted content from Google Docs
            let content = args.content;

            // Remove Google Docs specific styles and classes
            content = content.replace(/class="[^"]*"/g, "");
            content = content.replace(/style="[^"]*"/g, "");
            content = content.replace(/<span[^>]*>/g, "");
            content = content.replace(/<\/span>/g, "");
            content = content.replace(/<o:p[^>]*>/g, "");
            content = content.replace(/<\/o:p>/g, "");

            args.content = content;
          },
          setup: (editor) => {
            // Custom setup for better Google Docs paste handling
            editor.on("paste", (e) => {
              // Additional paste processing if needed
            });
          },
          placeholder: placeholder,
          branding: false,
          promotion: false,
          skin: "oxide",
          content_css: "default",
          link_default_target: "_blank",
          link_title: false,
          target_list: false,
          link_context_toolbar: true,
        }}
      />
    </div>
  );
};

export default RichTextEditor;
