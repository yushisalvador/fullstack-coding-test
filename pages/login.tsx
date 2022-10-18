import React from "react";
import { Container, Text, FormControl, Input, FormLabel, Button } from "@chakra-ui/react";
import { Public } from "auth/authRoute";

function Login() {
  return (
    <Container mt="20px" w="100vw" h="100vh">
      <Text fontSize="25px">Login to your account. </Text>
      <form>
        <FormControl mt="20px">
          <FormLabel>Email address</FormLabel>
          <Input type="email" isRequired />
          <FormLabel>Password</FormLabel>
          <Input type="password" isRequired />
        </FormControl>
        <Button type="submit" mt="20px" float="right">
          Login{" "}
        </Button>
      </form>
      <Button type="submit" mt="20px" mr="10px" float="right">
        Login with Google Account{" "}
      </Button>
    </Container>
  );
}

export default Public(Login);
