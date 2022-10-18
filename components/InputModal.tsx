import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

export default function InputModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      <Button onClick={onOpen}>Add Blog</Button>

      <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add your blog</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb="10px">
            <form>
              <FormControl>
                <FormLabel> Title</FormLabel>
                <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <FormLabel> Content</FormLabel>
                <Textarea />
                <Input type="file" mt="10px" value={content} onChange={(e) => setContent(e.target.value)} />
                <Button float="right" mt="10px">
                  Post
                </Button>
              </FormControl>
            </form>
            <Button float="right" mt="10px" mr="10px" onClick={onClose}>
              Cancel
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
