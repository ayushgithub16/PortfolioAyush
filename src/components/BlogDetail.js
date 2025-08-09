import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getBlogById, incrementBlogViews } from "../services/blogService";
import {
  FiArrowLeft,
  FiCalendar,
  FiEye,
  FiClock,
  FiUser,
} from "react-icons/fi";
import "./BlogDetail.css";

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
        const blogData = await getBlogById(id);
        if (blogData) {
          setBlog(blogData);
          // Increment view count
          await incrementBlogViews(id);
        } else {
          setError("Blog post not found");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError("Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  const formatDate = (date) => {
    const dateObj = date instanceof Date ? date : new Date(date);
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.split(" ").length;
    return Math.ceil(words / wordsPerMinute);
  };

  if (loading) {
    return (
      <div className="blog-detail-loading">
        <div className="blog-detail-spinner"></div>
        <p>Loading article...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-detail-error">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => navigate("/blog")} className="back-button">
          Back to Blog
        </button>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="blog-detail-error">
        <h2>Blog not found</h2>
        <p>The blog post you're looking for doesn't exist.</p>
        <button onClick={() => navigate("/blog")} className="back-button">
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
      <div className="blog-detail-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="blog-detail-nav"
        >
          <button onClick={() => navigate("/blog")} className="back-button">
            <FiArrowLeft />
            Back to Blog
          </button>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="blog-detail-article"
        >
          <header className="blog-detail-header">
            <div className="blog-detail-meta">
              <span className="blog-detail-category">{blog.category}</span>
              <div className="blog-detail-meta-items">
                <div className="blog-detail-meta-item">
                  <FiUser size={16} />
                  <span>{blog.author || "Ayush"}</span>
                </div>
                <div className="blog-detail-meta-item">
                  <FiCalendar size={16} />
                  <span>{formatDate(blog.createdAt)}</span>
                </div>
                <div className="blog-detail-meta-item">
                  <FiClock size={16} />
                  <span>{calculateReadTime(blog.content)} min read</span>
                </div>
                <div className="blog-detail-meta-item">
                  <FiEye size={16} />
                  <span>{blog.views || 0} views</span>
                </div>
              </div>
            </div>

            <h1 className="blog-detail-title">{blog.title}</h1>
          </header>

          <div className="blog-detail-content-wrapper">
            <div
              className="blog-detail-content"
              dangerouslySetInnerHTML={{
                __html: blog.content.replace(/\n/g, "<br />"),
              }}
            />
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="blog-detail-footer"
        >
          <button
            onClick={() => navigate("/blog")}
            className="back-to-blog-button"
          >
            ← Back to All Articles
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetail;
