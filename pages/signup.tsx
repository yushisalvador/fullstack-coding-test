import React from "react";
import { Container, Text, FormControl, FormHelperText, Input, FormLabel, Button } from "@chakra-ui/react";

export default function Signup() {
  return (
    <Container mt="20px" w="100vw" h="100vh">
      <Text fontSize="25px">Sign up now, and start writing blogs!</Text>
      <form>
        <FormControl>
          <FormLabel>Nickname</FormLabel>
          <Input type="Text" isRequired />
          <FormLabel>Email address</FormLabel>
          <Input type="email" isRequired />
          <FormLabel>Password</FormLabel>
          <Input type="password" isRequired />
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
