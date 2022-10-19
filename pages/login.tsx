import React, { useState } from "react";
import { Container, Text, FormControl, Input, FormLabel, Button } from "@chakra-ui/react";
import { Public } from "auth/authRoute";
import useAuth from "auth/auth";

function Login() {
  const auth = useAuth();
  const { login, errorMessage } = auth;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Container mt="20px" w="100vw" h="100vh">
      <Text fontSize="25px">Login to your account. </Text>
      <Text>{errorMessage?.message}</Text>
      <form>
        <FormControl mt="20px">
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            isRequired
          />
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            isRequired
          />
        </FormControl>
        <Button
          type="submit"
          mt="20px"
          float="right"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            login(email, password);
          }}>
          Login{" "}
        </Button>
      </form>
    </Container>
  );
}

export default Public(Login);
