import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function Feed({ blog }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box p="20px" borderWidth="1px" borderRadius="lg">
      <Box maxW="xs" borderWidth="1px" borderRadius="lg">
        <Image src={blog.image} alt="blog-image" w="300px" h="250px" />
        <Box p="6px" color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="sm" ml="2">
          <Text textTransform="uppercase"> {blog.title}</Text>
          <Text> By: {blog.user_email}</Text>
        </Box>
        <Button variant="ghost" float="right" type="button" onClick={onOpen}>
          See Content
        </Button>
      </Box>

      <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{blog.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="10px">
            <Image src={blog.image} alt="blog-image" w="sm" />
            <Text align="center" p="20px">
              {blog.content}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
