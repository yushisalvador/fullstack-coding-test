import React from "react";
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
                <Input type="text" />
                <FormLabel> Body</FormLabel>
                <Textarea />
                <Input type="file" mt="10px" />
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
