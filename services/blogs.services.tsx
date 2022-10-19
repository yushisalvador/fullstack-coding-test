import { db } from "auth/config/firebase.config";

import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const blogsCollection = collection(db, "blogs");

export const addBlog = (newBlog: object) => {
  return addDoc(blogsCollection, newBlog);
};

export const getAllBlogs = async () => {
  return await getDocs(blogsCollection);
};
