import React, { useState } from 'react';
import { createBlog } from '../services/blogService';
import { designTokens } from '../styles/designTokens';
import { FiSave, FiEdit3, FiTag, FiType } from 'react-icons/fi';
import styled from 'styled-components';

const AdminContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: ${designTokens.typography.fontSize['3xl']};
  font-weight: ${designTokens.typography.fontWeight.bold};
  color: ${designTokens.colors.text.primary};
  margin-bottom: 40px;
  text-align: center;
`;

const Form = styled.form`
  background: ${designTokens.colors.background.primary};
  padding: 40px;
  border-radius: ${designTokens.borderRadius.xl};
  box-shadow: ${designTokens.shadows.lg};
  border: 2px solid ${designTokens.colors.border.light};
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: ${designTokens.typography.fontWeight.medium};
  color: ${designTokens.colors.text.primary};
  margin-bottom: 8px;
  font-size: ${designTokens.typography.fontSize.sm};
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
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

const TextArea = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 16px;
  border: 2px solid ${designTokens.colors.border.light};
  border-radius: ${designTokens.borderRadius.lg};
  font-size: ${designTokens.typography.fontSize.base};
  background: ${designTokens.colors.background.primary};
  resize: vertical;
  font-family: ${designTokens.typography.fontFamily.primary};
  line-height: ${designTokens.typography.lineHeight.relaxed};
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-top: 32px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: ${props => props.primary ? designTokens.colors.primary.main : 'transparent'};
  color: ${props => props.primary ? 'white' : designTokens.colors.text.secondary};
  border: 2px solid ${props => props.primary ? designTokens.colors.primary.main : designTokens.colors.border.medium};
  border-radius: ${designTokens.borderRadius.lg};
  font-size: ${designTokens.typography.fontSize.base};
  font-weight: ${designTokens.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.primary ? designTokens.colors.primary.dark : designTokens.colors.background.secondary};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  svg {
    font-size: 1rem;
  }
`;

const Message = styled.div`
  padding: 12px 16px;
  border-radius: ${designTokens.borderRadius.lg};
  margin-bottom: 20px;
  background: ${props => props.error ? designTokens.colors.error + '20' : designTokens.colors.success + '20'};
  color: ${props => props.error ? designTokens.colors.error : designTokens.colors.success};
  border: 1px solid ${props => props.error ? designTokens.colors.error : designTokens.colors.success};
`;

const Instructions = styled.div`
  background: ${designTokens.colors.background.secondary};
  padding: 20px;
  border-radius: ${designTokens.borderRadius.lg};
  margin-bottom: 32px;
  border-left: 4px solid ${designTokens.colors.primary.main};
`;

const InstructionsTitle = styled.h3`
  color: ${designTokens.colors.text.primary};
  margin-bottom: 12px;
  font-size: ${designTokens.typography.fontSize.lg};
`;

const InstructionsList = styled.ul`
  color: ${designTokens.colors.text.secondary};
  padding-left: 20px;
  line-height: ${designTokens.typography.lineHeight.relaxed};

  li {
    margin-bottom: 8px;
  }
`;

export default function BlogAdmin() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: '',
    author: 'Ayush Adhikari'
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', isError: false });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.content) {
      setMessage({ text: 'Title and content are required!', isError: true });
      return;
    }

    try {
      setLoading(true);
      setMessage({ text: '', isError: false });

      const blogData = {
        ...formData,
        excerpt: formData.excerpt || formData.content.substring(0, 150) + '...'
      };

      const blogId = await createBlog(blogData);
      setMessage({ text: `Blog post created successfully! ID: ${blogId}`, isError: false });
      
      // Reset form
      setFormData({
        title: '',
        content: '',
        excerpt: '',
        category: '',
        author: 'Ayush Adhikari'
      });
    } catch (error) {
      console.error('Error creating blog:', error);
      setMessage({ text: `Error creating blog: ${error.message}`, isError: true });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      title: '',
      content: '',
      excerpt: '',
      category: '',
      author: 'Ayush Adhikari'
    });
    setMessage({ text: '', isError: false });
  };

  return (
    <AdminContainer>
      <Title>Create New Blog Post</Title>
      
      <Instructions>
        <InstructionsTitle>Instructions for Google Docs Integration:</InstructionsTitle>
        <InstructionsList>
          <li>Write your blog post in Google Docs with proper formatting</li>
          <li>Copy the content and paste it into the content field below</li>
          <li>Add a compelling title and category</li>
          <li>Optionally add a custom excerpt (otherwise it will be auto-generated)</li>
          <li>Click save to publish your blog post to Firebase</li>
        </InstructionsList>
      </Instructions>

      {message.text && (
        <Message error={message.isError}>
          {message.text}
        </Message>
      )}

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>
            <FiType />
            Blog Title
          </Label>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter your blog title..."
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>
            <FiTag />
            Category
          </Label>
          <Input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            placeholder="e.g., Technology, Personal, Thoughts..."
          />
        </FormGroup>

        <FormGroup>
          <Label>
            <FiEdit3 />
            Content (paste from Google Docs)
          </Label>
          <TextArea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Paste your blog content from Google Docs here..."
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>
            <FiEdit3 />
            Excerpt (optional)
          </Label>
          <TextArea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleInputChange}
            placeholder="Brief summary of your blog post (optional - will be auto-generated if left empty)"
            style={{ minHeight: '100px' }}
          />
        </FormGroup>

        <ButtonGroup>
          <Button type="button" onClick={handleReset} disabled={loading}>
            Reset
          </Button>
          <Button type="submit" primary disabled={loading}>
            <FiSave />
            {loading ? 'Publishing...' : 'Publish Blog'}
          </Button>
        </ButtonGroup>
      </Form>
    </AdminContainer>
  );
}
