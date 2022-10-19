import { db } from "auth/config/firebase.config";
import { collection, addDoc } from "firebase/firestore";

const blogsCollection = collection(db, "blogs");

export const addBlog = (newBlog: object) => {
  return addDoc(blogsCollection, newBlog);
};
