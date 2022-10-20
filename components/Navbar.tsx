import React, { useState } from "react";
import { Flex, Button, IconButton, Show, Hide, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import AlertModal from "./AlertModal";
export default function NavBar() {
  const [display, setDisplay] = useState("none");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex zIndex="50">
      <Flex pos="fixed" top="1rem" right="1rem" align="center">
        <Hide below="md">
          <Flex>
            <Link href="/">
              <Button mx={5}>Home</Button>
            </Link>
            <Link href="/blogs">
              <Button mx={5}>Blogs</Button>
            </Link>
            <Button mx={5} onClick={onOpen}>
              Logout
            </Button>
            <AlertModal onClose={onClose} isOpen={isOpen} />
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
          <Button as="button" variant="ghost" aria-label="Logout" my={5} w="100%" onClick={onOpen}>
            {" "}
            Logout{" "}
          </Button>
          <AlertModal onClose={onClose} isOpen={isOpen} />
        </Flex>
      </Flex>
    </Flex>
  );
}
