import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getBlogs } from "../services/blogService";
import { Link } from "react-router-dom";
import { FiCalendar, FiSearch, FiEye, FiHeart, FiUser } from "react-icons/fi";
import "./BlogList.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogData = await getBlogs();
        setBlogs(blogData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortBlogs = (blogs, sortType) => {
    const sorted = [...blogs];
    switch (sortType) {
      case "latest":
        return sorted.sort(
          (a, b) =>
            new Date(b.createdAt.seconds * 1000) -
            new Date(a.createdAt.seconds * 1000)
        );
      case "views":
        return sorted.sort((a, b) => (b.views || 0) - (a.views || 0));
      case "likes":
        return sorted.sort((a, b) => (b.likes || 0) - (a.likes || 0));
      default:
        return sorted;
    }
  };

  const sortedAndFilteredBlogs = sortBlogs(filteredBlogs, sortBy);

  const categories = [...new Set(blogs.map((blog) => blog.category))];

  if (loading) {
    return (
      <div className="blog-loading-container">
        <div className="blog-loading-spinner"></div>
        <p>Loading blogs...</p>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <div className="blog-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="blog-header"
        >
          <h1 className="blog-title">Blog</h1>
          <p className="blog-subtitle">
            Insights, experiences, and thoughts on technology, leadership, and
            innovation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="blog-filters"
        >
          <div className="search-container">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="category-select"
          >
            <option value="latest">Latest</option>
            <option value="views">Most Views</option>
            <option value="likes">Most Likes</option>
          </select>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="blog-grid"
        >
          {sortedAndFilteredBlogs.length === 0 ? (
            <div className="no-blogs">
              <h3>No articles found</h3>
              <p>Try adjusting your search or category filter.</p>
            </div>
          ) : (
            sortedAndFilteredBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="blog-card"
              >
                <Link to={`/blog/${blog.id}`} className="blog-card-link">
                  <div className="blog-card-content">
                    <div className="blog-card-header">
                      <span className="blog-category">{blog.category}</span>
                      <div className="blog-meta">
                        <div className="blog-meta-item">
                          <FiUser size={14} />
                          <span>{blog.author || "Ayush"}</span>
                        </div>
                        <div className="blog-meta-item">
                          <FiCalendar size={14} />
                          <span>
                            {blog.createdAt?.seconds
                              ? new Date(
                                  blog.createdAt.seconds * 1000
                                ).toLocaleDateString()
                              : blog.createdAt instanceof Date
                              ? blog.createdAt.toLocaleDateString()
                              : new Date(blog.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="blog-meta-item">
                          <FiEye size={14} />
                          <span>{blog.views || 0} views</span>
                        </div>
                        <div className="blog-meta-item">
                          <FiHeart size={14} />
                          <span>{blog.likes || 0} likes</span>
                        </div>
                      </div>
                    </div>

                    <h2 className="blog-card-title">{blog.title}</h2>
                  </div>
                </Link>
              </motion.article>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogList;
