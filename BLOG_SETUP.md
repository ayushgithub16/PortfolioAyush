# Blog Setup Instructions

## Overview

This blog system integrates with Firebase Firestore to store and manage blog posts. You can write your content in Google Docs and then copy-paste it into the admin interface.

## Firebase Setup

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name: `portfolio-ayush-blog`
4. Enable Google Analytics (optional)
5. Create the project

### 2. Set up Firestore Database

1. In your Firebase project, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location closest to your users
5. Click "Done"

### 3. Get Firebase Configuration

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click the web icon `</>`
4. Register your app with nickname: `portfolio-blog`
5. Copy the configuration object

### 4. Update Environment Variables

The Firebase configuration is already set in your `.env` file:

```
REACT_APP_FIREBASE_API_KEY=AIzaSyC4_y-Z5avek2_XzW_aEPiT0w4EPQCutw0
REACT_APP_FIREBASE_AUTH_DOMAIN=hip-transducer-468401-h2.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=hip-transducer-468401-h2
REACT_APP_FIREBASE_STORAGE_BUCKET=hip-transducer-468401-h2.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=989174107256
REACT_APP_FIREBASE_APP_ID=1:989174107256:web:a2b287682aa5e606ebf18d
```

## Using the Blog System

### 1. Creating a New Blog Post

1. Navigate to `/admin/blog` in your browser
2. Write your blog post in Google Docs with proper formatting
3. Copy the content from Google Docs
4. Fill in the blog admin form:
   - **Title**: Your blog post title
   - **Category**: Category like "Technology", "Personal", "Thoughts"
   - **Content**: Paste your Google Docs content here
   - **Excerpt** (optional): A brief summary
5. Click "Publish Blog"

### 2. Viewing Blog Posts

- All blog posts: Navigate to `/blog`
- Individual post: Click on any blog post or go to `/blog/{post-id}`

### 3. Blog Features

- ✅ Search functionality
- ✅ Category filtering
- ✅ View count tracking
- ✅ Responsive design
- ✅ Social sharing ready
- ✅ SEO optimized

## Blog Structure

Each blog post in Firestore has the following structure:

```javascript
{
  title: "Blog Post Title",
  content: "Full blog content...",
  excerpt: "Brief summary...",
  category: "Technology",
  author: "Ayush Adhikari",
  createdAt: Timestamp,
  updatedAt: Timestamp,
  views: 0,
  published: true
}
```

## Security Rules (Production)

For production, update your Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to published blogs
    match /blogs/{blogId} {
      allow read: if resource.data.published == true;
      allow write: if request.auth != null; // Only authenticated users can write
    }
  }
}
```

## Styling

The blog uses your existing design tokens and styled-components for consistent styling with your portfolio.

## Navigation

The blog link is added to your header navigation with an edit icon, styled with a gradient background that matches your design system.
