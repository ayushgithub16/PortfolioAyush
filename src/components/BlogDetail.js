import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById, incrementBlogViews } from "../services/blogService";
import { designTokens } from "../styles/designTokens";
import { FiCalendar, FiClock, FiArrowLeft, FiTag, FiEye } from "react-icons/fi";
import { motion } from "framer-motion";
import styled from "styled-components";

const BlogDetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  min-height: calc(100vh - 160px);
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: transparent;
  color: ${designTokens.colors.text.secondary};
  border: 2px solid ${designTokens.colors.text.secondary};
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 40px;
  transition: all 0.3s ease;

  &:hover {
    background: ${designTokens.colors.text.secondary};
    color: white;
    transform: translateY(-2px);
  }

  svg {
    font-size: 1rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(-3px);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  font-size: 1.1rem;
  color: ${designTokens.colors.text.secondary};
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: 60px 20px;

  h2 {
    font-size: 2rem;
    color: ${designTokens.colors.text.primary};
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1rem;
    color: ${designTokens.colors.text.secondary};
    margin-bottom: 30px;
  }
`;

const BlogHeader = styled.div`
  margin-bottom: 40px;

  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: ${designTokens.colors.text.primary};
    line-height: 1.2;
    margin-bottom: 20px;
  }
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  padding: 20px;
  background: ${designTokens.colors.background.secondary};
  border-radius: 12px;
  border-left: 4px solid ${designTokens.colors.accent.primary};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${designTokens.colors.text.secondary};
  font-size: 0.9rem;
  font-weight: 500;

  svg {
    color: ${designTokens.colors.accent.primary};
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 30px 0;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: rgba(99, 102, 241, 0.1);
  color: ${designTokens.colors.accent.primary};
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(99, 102, 241, 0.2);
`;

const BlogContent = styled.div`
  line-height: 1.8;
  color: ${designTokens.colors.text.primary};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${designTokens.colors.text.primary};
    margin: 30px 0 15px 0;
    font-weight: 600;
  }

  h1 {
    font-size: 2.2rem;
  }
  h2 {
    font-size: 1.8rem;
  }
  h3 {
    font-size: 1.4rem;
  }

  p {
    margin-bottom: 20px;
    font-size: 1.05rem;
  }

  code {
    background: ${designTokens.colors.background.secondary};
    padding: 2px 6px;
    border-radius: 4px;
    font-family: "Fira Code", monospace;
    font-size: 0.9em;
    color: ${designTokens.colors.accent.primary};
  }

  pre {
    background: ${designTokens.colors.background.secondary};
    padding: 20px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 20px 0;
    border-left: 4px solid ${designTokens.colors.accent.primary};

    code {
      background: none;
      padding: 0;
      color: ${designTokens.colors.text.primary};
    }
  }

  blockquote {
    border-left: 4px solid ${designTokens.colors.accent.primary};
    padding-left: 20px;
    margin: 20px 0;
    font-style: italic;
    color: ${designTokens.colors.text.secondary};
    background: ${designTokens.colors.background.secondary};
    padding: 20px;
    border-radius: 0 8px 8px 0;
  }

  ul,
  ol {
    margin: 20px 0;
    padding-left: 30px;

    li {
      margin-bottom: 8px;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 20px 0;
  }

  a {
    color: ${designTokens.colors.accent.primary};
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-bottom-color 0.3s ease;

    &:hover {
      border-bottom-color: ${designTokens.colors.accent.primary};
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);
        const blogData = await getBlogById(id);
        setBlog(blogData);
        // Increment view count
        await incrementBlogViews(id);
      } catch (err) {
        setError(err.message || "Blog not found");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  const formatDate = (dateString) => {
    if (!dateString) return "No date";

    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return "Invalid date";
    }
  };

  const estimateReadTime = (content) => {
    if (!content) return "1 min";

    const wordsPerMinute = 200;
    const text = content.replace(/<[^>]*>/g, ""); // Remove HTML tags
    const wordCount = text.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);

    return `${readTime} min read`;
  };

  const handleBack = () => {
    navigate("/blogs");
  };

  // Convert markdown-style content to HTML-like formatting for better display
  const formatContent = (content) => {
    if (!content) return "";

    return content
      .split("\n")
      .map((line) => {
        // Handle headers
        if (line.startsWith("# ")) {
          return `<h1>${line.substring(2)}</h1>`;
        } else if (line.startsWith("## ")) {
          return `<h2>${line.substring(3)}</h2>`;
        } else if (line.startsWith("### ")) {
          return `<h3>${line.substring(4)}</h3>`;
        }
        // Handle code blocks
        else if (line.startsWith("```")) {
          return line.includes("```") ? "<pre><code>" : "</code></pre>";
        }
        // Handle regular paragraphs
        else if (line.trim()) {
          return `<p>${line}</p>`;
        }
        return "<br>";
      })
      .join("\n");
  };

  if (loading) {
    return (
      <BlogDetailContainer>
        <BackButton onClick={handleBack}>
          <FiArrowLeft />
          Back to Blogs
        </BackButton>
        <LoadingContainer>
          <div>Loading blog post...</div>
        </LoadingContainer>
      </BlogDetailContainer>
    );
  }

  if (error || !blog) {
    return (
      <BlogDetailContainer>
        <BackButton onClick={handleBack}>
          <FiArrowLeft />
          Back to Blogs
        </BackButton>
        <ErrorContainer>
          <h2>Blog Post Not Found</h2>
          <p>{error || "The blog post you're looking for doesn't exist."}</p>
          <BackButton onClick={handleBack}>
            <FiArrowLeft />
            Return to Blog List
          </BackButton>
        </ErrorContainer>
      </BlogDetailContainer>
    );
  }

  return (
    <BlogDetailContainer>
      <BackButton onClick={handleBack}>
        <FiArrowLeft />
        Back to Blogs
      </BackButton>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BlogHeader>
          <h1>{blog.title}</h1>

          <BlogMeta>
            <MetaItem>
              <FiCalendar />
              {formatDate(blog.createdAt || blog.publishedAt)}
            </MetaItem>
            <MetaItem>
              <FiClock />
              {estimateReadTime(blog.content)}
            </MetaItem>
            {blog.views && (
              <MetaItem>
                <FiEye />
                {blog.views.toLocaleString()} views
              </MetaItem>
            )}
          </BlogMeta>

          {blog.tags && blog.tags.length > 0 && (
            <TagsContainer>
              {blog.tags.map((tag, index) => (
                <Tag key={index}>
                  <FiTag size={12} />
                  {tag}
                </Tag>
              ))}
            </TagsContainer>
          )}
        </BlogHeader>

        <BlogContent>
          {blog.content ? (
            <div
              dangerouslySetInnerHTML={{ __html: formatContent(blog.content) }}
            />
          ) : (
            <p>No content available for this blog post.</p>
          )}
        </BlogContent>
      </motion.div>
    </BlogDetailContainer>
  );
};

export default BlogDetail;
