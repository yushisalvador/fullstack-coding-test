import React, { useState } from "react";
import { Container, Text, FormControl, Input, FormLabel, Button } from "@chakra-ui/react";
import { Public } from "auth/authRoute";
import useAuth from "auth/auth";

function Login() {
  const auth = useAuth();
  const { login } = auth;
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <Container mt="20px" w="100vw" h="100vh">
      <Text fontSize="25px">Login to your account. </Text>
      <form>
        <FormControl mt="20px">
          <FormLabel>Email address</FormLabel>
          <Input type="email" onChange={(e) => setEmail(e.target.value)} isRequired />
          <FormLabel>Password</FormLabel>
          <Input type="password" onChange={(e) => setPassword(e.target.value)} isRequired />
        </FormControl>
        <Button
          type="submit"
          mt="20px"
          float="right"
          onClick={(e) => {
            e.preventDefault();
            login(email, password);
          }}>
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
