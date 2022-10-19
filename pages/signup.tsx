import React, { useState } from "react";
import { Container, Text, FormControl, FormHelperText, Input, FormLabel, Button } from "@chakra-ui/react";
import { Public } from "auth/authRoute";
import useAuth from "auth/auth";
import { useRouter } from "next/router";

function Signup() {
  const { signup, errorMessage } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Container mt="20px" w="100vw" h="100vh">
      <Text>{errorMessage?.message}</Text>
      <Text fontSize="25px">Sign up now, and start writing blogs!</Text>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signup(email, password);
          router.push("/");
        }}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} isRequired />
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} isRequired />
          <FormHelperText>We'll never share your info.</FormHelperText>
        </FormControl>
        <Button type="submit" mt="20px" float="right">
          Signup
        </Button>
      </form>
    </Container>
  );
}

export default Public(Signup);
