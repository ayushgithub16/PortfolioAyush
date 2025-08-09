import React from "react";
import { useNavigate } from "react-router-dom";
import { designTokens } from "../styles/designTokens";
import { FiCalendar, FiClock, FiArrowRight, FiTag } from "react-icons/fi";
import { motion } from "framer-motion";
import styled from "styled-components";

const BlogCard = styled(motion.article)`
  background: ${designTokens.colors.background.secondary};
  border-radius: 15px;
  padding: 25px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: ${designTokens.colors.primary.main};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${designTokens.colors.primary.main},
      ${designTokens.colors.secondary.main}
    );
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const BlogTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${designTokens.colors.text.primary};
  margin-bottom: 12px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BlogExcerpt = styled.p`
  color: ${designTokens.colors.text.secondary};
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${designTokens.colors.text.secondary};
  font-size: 0.85rem;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: rgba(99, 102, 241, 0.1);
  color: ${designTokens.colors.primary.main};
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const ReadMoreButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${designTokens.colors.primary.main};
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  .arrow {
    transition: transform 0.3s ease;
  }

  ${BlogCard}:hover & {
    color: ${designTokens.colors.secondary.main};

    .arrow {
      transform: translateX(5px);
    }
  }
`;

const StatusBadge = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: ${(props) =>
    props.status === "published"
      ? "rgba(34, 197, 94, 0.1)"
      : "rgba(251, 146, 60, 0.1)"};
  color: ${(props) => (props.status === "published" ? "#22c55e" : "#fb923c")};
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const BlogItem = ({ blog }) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    if (!dateString) return "No date";

    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
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

    return `${readTime} min`;
  };

  const handleClick = () => {
    navigate(`/blog/${blog.id}`);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <BlogCard
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
    >
      {blog.status && (
        <StatusBadge status={blog.status}>{blog.status}</StatusBadge>
      )}

      <BlogTitle>{blog.title}</BlogTitle>

      <BlogMeta>
        <MetaItem>
          <FiCalendar />
          {formatDate(blog.createdAt || blog.publishedAt)}
        </MetaItem>
        <MetaItem>
          <FiClock />
          {estimateReadTime(blog.content)}
        </MetaItem>
      </BlogMeta>

      {blog.excerpt && <BlogExcerpt>{blog.excerpt}</BlogExcerpt>}

      {blog.tags && blog.tags.length > 0 && (
        <TagsContainer>
          {blog.tags.slice(0, 3).map((tag, index) => (
            <Tag key={index}>
              <FiTag size={10} />
              {tag}
            </Tag>
          ))}
          {blog.tags.length > 3 && <Tag>+{blog.tags.length - 3} more</Tag>}
        </TagsContainer>
      )}

      <ReadMoreButton>
        Read More
        <FiArrowRight className="arrow" />
      </ReadMoreButton>
    </BlogCard>
  );
};

export default BlogItem;
