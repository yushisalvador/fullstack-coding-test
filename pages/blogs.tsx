import React, { useState, useEffect } from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { Private } from "auth/authRoute";
import InputModal from "components/InputModal";
import NavBar from "components/Navbar";
import { getAllBlogs } from "services/blogs.services";

function Blogs() {
  const [blogs, setBlogs] = useState<any>([]);

  const getBlogs = async () => {
    const data = await getAllBlogs();
    setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log("blogs", blogs);
  };
  useEffect(() => {
    getBlogs();
  }, [setBlogs]);

  return (
    <Container mt="50">
      <NavBar />
      <InputModal />
      <Flex direction="column" mt="50">
        {blogs?.map((blog: any) => {
          <Text key={blog.id}>{blog.content}</Text>;
        })}
      </Flex>
    </Container>
  );
}

export default Private(Blogs);
