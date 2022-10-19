import React, { useState, useEffect } from "react";
import { Box, Container, Flex, Text, Wrap, WrapItem, Center } from "@chakra-ui/react";
import { Private } from "auth/authRoute";
import InputModal from "components/InputModal";
import NavBar from "components/Navbar";
import { getAllBlogs } from "services/blogs.services";
import Feed from "components/Feed";

interface Blogs {
  id: string;
  title: string;
  content: string;
  imageURL: string;
}

function Blogs() {
  const [blogs, setBlogs] = useState<Blogs[]>([]);
  const [view, setView] = useState<string>("feed");

  const getBlogs = async () => {
    const data = await getAllBlogs();
    const blogData = data?.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setBlogs(blogData);
    console.log("blogs", blogs);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <NavBar />
      <Container maxW="90vw" mt="20">
        <InputModal />
        <Wrap>
          {blogs.map((blog) => (
            <Feed blog={blog} key={blog.id} />
          ))}
        </Wrap>
      </Container>
    </>
  );
}

export default Private(Blogs);
