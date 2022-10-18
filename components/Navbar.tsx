import React, { useState } from "react";
import { Flex, Button, IconButton, Show, Hide } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
export default function NavBar() {
  const [display, setDisplay] = useState("none");

  return (
    <Flex>
      <Flex pos="fixed" top="1rem" right="1rem" align="center">
        <Hide below="md">
          <Flex>
            <Link href="/">
              <Button mx={5}>Home</Button>
            </Link>
            <Link href="/blogs">
              <Button mx={5}>Blogs</Button>
            </Link>
            <Link href="/logout">
              <Button mx={5}>Logout</Button>
            </Link>
          </Flex>
        </Hide>

        {/* Mobile */}
        <Show below="md">
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={<HamburgerIcon />}
            onClick={() => setDisplay("flex")}
          />
        </Show>
      </Flex>

      <Flex
        w="100vw"
        display={display}
        bgColor="gray.100"
        zIndex={30}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column">
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={4}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => setDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <Link href="/">
            <Button as="button" variant="ghost" aria-label="Home" my={5} w="100%" onClick={() => setDisplay("none")}>
              Home
            </Button>
          </Link>
          <Link href="/blogs">
            <Button as="button" variant="ghost" aria-label="Blogs" my={5} w="100%" onClick={() => setDisplay("none")}>
              Blogs
            </Button>
          </Link>
          <Link href="/logout">
            <Button
              as="button"
              variant="ghost"
              aria-label="Logout"
              my={5}
              w="100%"
              onClick={(e) => {
                e.preventDefault();
                setDisplay("none");
              }}>
              Logout{" "}
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
