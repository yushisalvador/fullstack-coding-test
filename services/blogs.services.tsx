import { db } from "auth/config/firebase.config";
import { AllBlogs } from "types/types";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, QuerySnapshot } from "firebase/firestore";

const blogsCollection = collection(db, "blogs");

export const addBlog = (newBlog: object) => {
  return addDoc(blogsCollection, newBlog);
};

export async function getAllBlogs(): Promise<AllBlogs> {
  let allblogs = getDocs(blogsCollection) as unknown;
  return allblogs as AllBlogs;
}
