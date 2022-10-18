import React, { useState } from "react";
import { Container, Text, FormControl, FormHelperText, Input, FormLabel, Button } from "@chakra-ui/react";
import { Public } from "auth/authRoute";
import useAuth from "auth/auth";
import { useRouter } from "next/router";

function Signup() {
  const { signup } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<any>(null);

  async function handleSignUp(e) {
    e.preventDefault();
    if (password && email) {
      try {
        await signup(email, password);
        router.push("/");
      } catch (error) {
        setErrorMessage(error);
      }
    }
  }
  return (
    <Container mt="20px" w="100vw" h="100vh">
      <Text>{errorMessage}</Text>
      <Text fontSize="25px">Sign up now, and start writing blogs!</Text>
      <form onSubmit={handleSignUp}>
        <FormControl>
          {/* <FormLabel>Nickname</FormLabel>
          <Input type="Text" isRequired /> */}
          <FormLabel>Email address</FormLabel>
          <Input type="email" onChange={(e) => setEmail(e.target.value)} isRequired />
          <FormLabel>Password</FormLabel>
          <Input type="password" onChange={(e) => setPassword(e.target.value)} isRequired />
          <FormHelperText>We'll never share your info.</FormHelperText>
        </FormControl>
        <Button type="submit" mt="20px" float="right">
          Signup
        </Button>
      </form>
      <Button type="submit" mt="20px" mr="10px" float="right">
        Signup with Google{" "}
      </Button>
    </Container>
  );
}

export default Public(Signup);
