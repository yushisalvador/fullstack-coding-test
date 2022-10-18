import { Box } from "@chakra-ui/react";
import { Private } from "auth/authRoute";
import React from "react";

function Blogs() {
  return <Box>Blogs</Box>;
}

export default Private(Blogs);
