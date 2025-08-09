import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  limit,
  where,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/config";

const BLOGS_COLLECTION = "blogs";

// Get all blogs with pagination and filtering
export const getBlogs = async (limitCount = 10, category = null) => {
  try {
    let blogQuery = query(
      collection(db, BLOGS_COLLECTION),
      orderBy("createdAt", "desc")
    );

    if (category) {
      blogQuery = query(
        collection(db, BLOGS_COLLECTION),
        where("category", "==", category),
        orderBy("createdAt", "desc")
      );
    }

    if (limitCount) {
      blogQuery = query(blogQuery, limit(limitCount));
    }

    const querySnapshot = await getDocs(blogQuery);
    const blogs = [];

    querySnapshot.forEach((doc) => {
      blogs.push({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate(),
      });
    });

    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

// Get a single blog by ID
export const getBlogById = async (blogId) => {
  try {
    const docRef = doc(db, BLOGS_COLLECTION, blogId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        ...data,
        createdAt: data.createdAt?.toDate(),
        updatedAt: data.updatedAt?.toDate(),
      };
    } else {
      throw new Error("Blog not found");
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
};

// Create a new blog post
export const createBlog = async (blogData) => {
  try {
    const newBlog = {
      ...blogData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      views: 0,
      published: true,
    };

    const docRef = await addDoc(collection(db, BLOGS_COLLECTION), newBlog);
    return docRef.id;
  } catch (error) {
    console.error("Error creating blog:", error);
    throw error;
  }
};

// Update an existing blog post
export const updateBlog = async (blogId, blogData) => {
  try {
    const docRef = doc(db, BLOGS_COLLECTION, blogId);

    // Prepare update data with serverTimestamp for updatedAt
    const updateData = {
      ...blogData,
      updatedAt: serverTimestamp(),
    };

    await updateDoc(docRef, updateData);
    return true;
  } catch (error) {
    console.error("Error updating blog:", error);
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);
    throw error;
  }
};

// Delete a blog post
export const deleteBlog = async (blogId) => {
  try {
    const docRef = doc(db, BLOGS_COLLECTION, blogId);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting blog:", error);
    throw error;
  }
};

// Increment blog views
export const incrementBlogViews = async (blogId) => {
  try {
    const docRef = doc(db, BLOGS_COLLECTION, blogId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const currentViews = docSnap.data().views || 0;
      await updateDoc(docRef, {
        views: currentViews + 1,
      });
    }
  } catch (error) {
    console.error("Error incrementing views:", error);
  }
};

// Get blog categories
export const getBlogCategories = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, BLOGS_COLLECTION));
    const categories = new Set();

    querySnapshot.forEach((doc) => {
      const category = doc.data().category;
      if (category) {
        categories.add(category);
      }
    });

    return Array.from(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
