import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { Private } from "auth/authRoute";
import InputModal from "components/InputModal";
import NavBar from "components/Navbar";
import React from "react";

function Blogs() {
  return (
    <Container mt="50">
      <NavBar />
      <InputModal />{" "}
    </Container>
  );
}

export default Private(Blogs);
