import React, { useState, useEffect } from "react";
import { Box, Container, Flex, Text, Wrap, WrapItem, Center } from "@chakra-ui/react";
import { Private } from "auth/authRoute";
import InputModal from "components/InputModal";
import NavBar from "components/Navbar";
import { getAllBlogs } from "services/blogs.services";
import Feed from "components/Feed";
import { Blog } from "types/types";

function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const getBlogs = async () => {
    const data = await getAllBlogs();
    const blogData = data?.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setBlogs(blogData);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <NavBar />
      <Container maxW="100vw" mt="20" px={["20px", "20px", "50px", "50px"]}>
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
