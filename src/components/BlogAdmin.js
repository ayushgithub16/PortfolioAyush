import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogs,
} from "../services/blogService";
import { useNavigate } from "react-router-dom";
import {
  FiSave,
  FiArrowLeft,
  FiEdit,
  FiTrash2,
  FiPlus,
  FiFilter,
  FiEye,
  FiHeart,
  FiCalendar,
  FiAlertTriangle,
  FiX,
  FiUser,
} from "react-icons/fi";
import "./BlogAdmin.css";

const BlogAdmin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    author: "Ayush",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [sortBy, setSortBy] = useState("latest");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const blogList = await getBlogs();
      setBlogs(blogList);
      setFilteredBlogs(blogList);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

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

  const handleSortChange = (sortType) => {
    setSortBy(sortType);
    const sorted = sortBlogs(blogs, sortType);
    setFilteredBlogs(sorted);
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog.id);
    setFormData({
      title: blog.title,
      content: blog.content,
      category: blog.category,
      author: blog.author,
    });
    // Scroll to top of form when editing
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (blog) => {
    setBlogToDelete(blog);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (blogToDelete) {
      try {
        await deleteBlog(blogToDelete.id);
        setSuccess("Blog post deleted successfully!");
        fetchBlogs();
        setShowDeleteModal(false);
        setBlogToDelete(null);
      } catch (error) {
        console.error("Error deleting blog:", error);
        setError("Failed to delete blog post.");
        setShowDeleteModal(false);
        setBlogToDelete(null);
      }
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setBlogToDelete(null);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      category: "",
      author: "Ayush",
    });
    setEditingBlog(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const blogData = {
        ...formData,
        views: 0,
        createdAt: editingBlog ? undefined : new Date(),
      };

      if (editingBlog) {
        await updateBlog(editingBlog, blogData);
        setSuccess("Blog post updated successfully!");
      } else {
        await createBlog(blogData);
        setSuccess("Blog post created successfully!");
      }

      // Reset form
      resetForm();
      fetchBlogs();

      // Navigate to blog list after success
      setTimeout(() => {
        navigate("/blog");
      }, 2000);
    } catch (error) {
      console.error("Error saving blog:", error);
      setError(
        editingBlog
          ? "Failed to update blog post. Please try again."
          : "Failed to create blog post. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="blog-admin-page">
      <div className="blog-admin-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="blog-admin-nav"
        >
          <button
            onClick={() => navigate("/blog")}
            className="admin-back-button"
          >
            <FiArrowLeft />
            Back to Blog
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="blog-admin-header"
        >
          <h1 className="admin-title">
            {editingBlog ? "Edit Blog Post" : "Create New Blog Post"}
          </h1>
          <p className="admin-subtitle">
            Share your insights and experiences with the world
          </p>
          {editingBlog && (
            <button
              onClick={resetForm}
              className="cancel-btn"
              style={{ marginTop: "16px" }}
            >
              <FiPlus /> Create New Post
            </button>
          )}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onSubmit={handleSubmit}
          className="blog-admin-form"
        >
          {error && <div className="form-message error">{error}</div>}

          {success && <div className="form-message success">{success}</div>}

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="title">Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Enter blog post title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="">Select Category</option>
                <option value="Technology">Technology</option>
                <option value="Leadership">Leadership</option>
                <option value="Career">Career</option>
                <option value="Innovation">Innovation</option>
                <option value="Personal">Personal</option>
                <option value="Business">Business</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="content">Content *</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              className="form-textarea content-textarea"
              rows="20"
              placeholder="Paste your blog content here (from Google Docs or write directly)"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="form-input"
                placeholder="Author name"
              />
            </div>
            <div className="form-group">
              {/* Empty column for layout balance */}
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" disabled={loading} className="submit-button">
              {loading ? (
                <>
                  <div className="button-spinner"></div>
                  {editingBlog ? "Updating..." : "Creating..."}
                </>
              ) : (
                <>
                  <FiSave />
                  {editingBlog ? "Update Blog Post" : "Create Blog Post"}
                </>
              )}
            </button>
            {editingBlog && (
              <button type="button" onClick={resetForm} className="cancel-btn">
                <FiX /> Cancel Edit
              </button>
            )}
          </div>
        </motion.form>

        {/* Blog List for Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="blog-list"
        >
          <div className="blog-list-header">
            <h3>Manage Blog Posts</h3>
            <div className="blog-filters">
              <FiFilter size={16} />
              <label htmlFor="sortBy">Sort by:</label>
              <select
                id="sortBy"
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="form-select"
              >
                <option value="latest">📅 Latest</option>
                <option value="views">👁 Most Views</option>
                <option value="likes">❤️ Most Likes</option>
              </select>
            </div>
          </div>
          {filteredBlogs.map((blog) => (
            <div key={blog.id} className="blog-item">
              <div className="blog-item-header">
                <h4>{blog.title}</h4>
                <div className="blog-item-stats">
                  <span className="stat">
                    <FiEye size={12} /> {blog.views || 0}
                  </span>
                  <span className="stat">
                    <FiHeart size={12} /> {blog.likes || 0}
                  </span>
                  <span className="stat">
                    <FiUser size={12} /> {blog.author || "Ayush"}
                  </span>
                  <span className="stat">
                    <FiCalendar size={12} />{" "}
                    {new Date(
                      blog.createdAt.seconds * 1000
                    ).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="blog-item-actions">
                <button onClick={() => handleEdit(blog)} className="edit-btn">
                  <FiEdit /> Edit
                </button>
                <button
                  onClick={() => handleDelete(blog)}
                  className="delete-item-btn"
                >
                  <FiTrash2 /> Delete
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="confirmation-overlay" onClick={cancelDelete}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="confirmation-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="confirmation-icon">
                <FiAlertTriangle size={24} />
              </div>
              <h3 className="confirmation-title">Delete Blog Post</h3>
              <p className="confirmation-message">
                Are you sure you want to delete{" "}
                <span className="confirmation-blog-title">
                  "{blogToDelete?.title}"
                </span>
                ? This action cannot be undone.
              </p>
              <div className="confirmation-actions">
                <button onClick={confirmDelete} className="confirm-delete-btn">
                  <FiTrash2 /> Delete
                </button>
                <button onClick={cancelDelete} className="cancel-delete-btn">
                  <FiX /> Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogAdmin;
