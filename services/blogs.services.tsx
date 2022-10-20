import { db } from "auth/config/firebase.config";
import { collection, addDoc } from "firebase/firestore";
import { BlogPost } from "types/types";

const blogsCollection = collection(db, "blogs");

export const addBlog = (newBlog: BlogPost) => {
  return addDoc(blogsCollection, newBlog);
};
