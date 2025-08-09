import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBlogs, getBlogCategories } from '../services/blogService';
import { designTokens } from '../styles/designTokens';
import { FiCalendar, FiClock, FiTag, FiEye, FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const BlogListContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-size: ${designTokens.typography.fontSize['4xl']};
  font-weight: ${designTokens.typography.fontWeight.bold};
  color: ${designTokens.colors.text.primary};
  margin-bottom: 20px;
  font-family: ${designTokens.typography.fontFamily.primary};
`;

const Subtitle = styled.p`
  font-size: ${designTokens.typography.fontSize.lg};
  color: ${designTokens.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: ${designTokens.typography.lineHeight.relaxed};
`;

const FiltersContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${designTokens.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  min-width: 300px;

  @media (max-width: ${designTokens.breakpoints.md}) {
    min-width: 100%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 48px;
  border: 2px solid ${designTokens.colors.border.light};
  border-radius: ${designTokens.borderRadius.lg};
  font-size: ${designTokens.typography.fontSize.base};
  background: ${designTokens.colors.background.primary};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${designTokens.colors.primary.main};
    box-shadow: 0 0 0 3px ${designTokens.colors.primary.main}20;
  }

  &::placeholder {
    color: ${designTokens.colors.text.tertiary};
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${designTokens.colors.text.tertiary};
  font-size: 1.2rem;
`;

const CategoryFilter = styled.select`
  padding: 12px 16px;
  border: 2px solid ${designTokens.colors.border.light};
  border-radius: ${designTokens.borderRadius.lg};
  font-size: ${designTokens.typography.fontSize.base};
  background: ${designTokens.colors.background.primary};
  color: ${designTokens.colors.text.primary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${designTokens.colors.primary.main};
    box-shadow: 0 0 0 3px ${designTokens.colors.primary.main}20;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;

  @media (max-width: ${designTokens.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const BlogCard = styled(motion.article)`
  background: ${designTokens.colors.background.primary};
  border-radius: ${designTokens.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${designTokens.shadows.md};
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid ${designTokens.colors.border.light};

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${designTokens.shadows.xl};
    border-color: ${designTokens.colors.primary.main};
  }
`;

const BlogImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, ${designTokens.colors.primary.main}, ${designTokens.colors.primary.dark});
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" stroke-width="0.5" opacity="0.3"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  }
`;

const BlogImageText = styled.div`
  color: white;
  font-size: ${designTokens.typography.fontSize['2xl']};
  font-weight: ${designTokens.typography.fontWeight.bold};
  z-index: 1;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const BlogContent = styled.div`
  padding: 24px;
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: ${designTokens.typography.fontSize.sm};
  color: ${designTokens.colors.text.secondary};

  svg {
    font-size: 0.9rem;
  }
`;

const CategoryTag = styled.span`
  background: ${designTokens.colors.primary.main}20;
  color: ${designTokens.colors.primary.main};
  padding: 4px 12px;
  border-radius: ${designTokens.borderRadius.full};
  font-size: ${designTokens.typography.fontSize.xs};
  font-weight: ${designTokens.typography.fontWeight.medium};
`;

const BlogTitle = styled.h2`
  font-size: ${designTokens.typography.fontSize.xl};
  font-weight: ${designTokens.typography.fontWeight.semibold};
  color: ${designTokens.colors.text.primary};
  margin-bottom: 12px;
  line-height: ${designTokens.typography.lineHeight.tight};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BlogExcerpt = styled.p`
  color: ${designTokens.colors.text.secondary};
  line-height: ${designTokens.typography.lineHeight.relaxed};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 16px;
`;

const ReadMoreText = styled.span`
  color: ${designTokens.colors.primary.main};
  font-weight: ${designTokens.typography.fontWeight.medium};
  font-size: ${designTokens.typography.fontSize.sm};
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${designTokens.colors.border.light};
  border-top: 3px solid ${designTokens.colors.primary.main};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${designTokens.colors.text.secondary};
`;

const EmptyTitle = styled.h3`
  font-size: ${designTokens.typography.fontSize['2xl']};
  margin-bottom: 16px;
  color: ${designTokens.colors.text.primary};
`;

const EmptyText = styled.p`
  font-size: ${designTokens.typography.fontSize.lg};
`;

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
    fetchCategories();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const fetchedBlogs = await getBlogs(20);
      setBlogs(fetchedBlogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const fetchedCategories = await getBlogCategories();
      setCategories(fetchedCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const filterBlogs = useCallback(() => {
    let filtered = blogs;

    if (selectedCategory) {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBlogs(filtered);
  }, [blogs, selectedCategory, searchTerm]);

  useEffect(() => {
    filterBlogs();
  }, [filterBlogs]);

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  const getReadingTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    const readingTime = Math.ceil(words / wordsPerMinute);
    return `${readingTime} min read`;
  };

  if (loading) {
    return (
      <BlogListContainer>
        <LoadingContainer>
          <LoadingSpinner />
        </LoadingContainer>
      </BlogListContainer>
    );
  }

  return (
    <BlogListContainer>
      <Header>
        <Title>Blog</Title>
        <Subtitle>
          Thoughts, insights, and stories from my journey in technology and life.
        </Subtitle>
      </Header>

      <FiltersContainer>
        <SearchContainer>
          <SearchIcon />
          <SearchInput
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>

        <CategoryFilter
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </CategoryFilter>
      </FiltersContainer>

      {filteredBlogs.length === 0 ? (
        <EmptyState>
          <EmptyTitle>No articles found</EmptyTitle>
          <EmptyText>
            {searchTerm || selectedCategory
              ? 'Try adjusting your search or filter criteria.'
              : 'Check back soon for new content!'}
          </EmptyText>
        </EmptyState>
      ) : (
        <BlogGrid>
          {filteredBlogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleBlogClick(blog.id)}
            >
              <BlogImage>
                <BlogImageText>{blog.title.charAt(0)}</BlogImageText>
              </BlogImage>

              <BlogContent>
                <BlogMeta>
                  <MetaItem>
                    <FiCalendar />
                    <span>{formatDate(blog.createdAt)}</span>
                  </MetaItem>
                  <MetaItem>
                    <FiClock />
                    <span>{getReadingTime(blog.content)}</span>
                  </MetaItem>
                  {blog.views > 0 && (
                    <MetaItem>
                      <FiEye />
                      <span>{blog.views} views</span>
                    </MetaItem>
                  )}
                  {blog.category && (
                    <MetaItem>
                      <FiTag />
                      <CategoryTag>{blog.category}</CategoryTag>
                    </MetaItem>
                  )}
                </BlogMeta>

                <BlogTitle>{blog.title}</BlogTitle>
                <BlogExcerpt>
                  {blog.excerpt || blog.content.substring(0, 150) + '...'}
                </BlogExcerpt>
                <ReadMoreText>Read more →</ReadMoreText>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogGrid>
      )}
    </BlogListContainer>
  );
}
