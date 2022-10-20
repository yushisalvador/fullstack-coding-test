import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Private } from "auth/authRoute";
import useAuth from "auth/auth";
function Logout() {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <Box>
      <Text>Logout??</Text>

      <Button
        onClick={() => {
          logout();
          router.push("/login");
        }}>
        Yes
      </Button>

      <Button
        onClick={() => {
          router.push("/");
        }}>
        Cancel
      </Button>
    </Box>
  );
}

export default Private(Logout);
