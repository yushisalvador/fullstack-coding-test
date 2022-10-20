import React, { useState, useEffect } from "react";
import { Container, Wrap } from "@chakra-ui/react";
import { Private } from "auth/authRoute";
import InputModal from "components/InputModal";
import NavBar from "components/Navbar";
import Feed from "components/Feed";
import { Blog, BlogDoc } from "types/types";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "auth/config/firebase.config";
const blogCollection = collection(db, "blogs");

function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const getAllData = () => {
    onSnapshot(blogCollection, (snapshot: any) => {
      const blogData = snapshot.docs.map((doc: BlogDoc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBlogs(blogData);
    });
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <NavBar />
      <Container maxW="100vw" mt="20" px={["20px", "20px", "50px", "50px"]}>
        <InputModal />
        <Wrap>
          {blogs?.map((blog) => (
            <Feed blog={blog} key={blog.id} />
          ))}
        </Wrap>
      </Container>
    </>
  );
}

export default Private(Blogs);
