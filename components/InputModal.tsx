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
  Text,
  Center,
  FormHelperText,
} from "@chakra-ui/react";
import { storage } from "auth/config/firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import useAuth from "auth/auth";
import { addBlog } from "services/blogs.services";

export default function InputModal() {
  const { user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [error, setError] = useState<any>(null);
  const [message, setMessage] = useState("");

  const metadata = {
    contentType: "image/jpeg",
  };

  //store the image in storage bucket, then convert it to string, store the string in the db
  const imgUpload = async (image: any) => {
    try {
      const imageRef = ref(storage, `blogs/${image?.name + v4()}`);
      setMessage("uploading...");
      const snapshot = await uploadBytes(imageRef, image, metadata);
      const url = await getDownloadURL(snapshot.ref);
      if (url) setMessage("Image uploaded successfully");
      setImageURL(url);
    } catch (error) {
      setError(error);
    }
  };

  const handlePost = async (event: any) => {
    event.preventDefault();
    const newPostObj = {
      user_email: user.email,
      title: title,
      content: content,
      image: imageURL,
    };
    await addBlog(newPostObj);
    onClose();
  };
  return (
    <>
      <Center>
        {" "}
        <Button type="button" onClick={onOpen} m="20px">
          Add Blog
        </Button>
      </Center>

      <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add your blog</ModalHeader>
          {error ? <Text>{error.message}</Text> : null}
          <ModalCloseButton />
          <ModalBody mb="10px">
            <form onSubmit={handlePost}>
              <FormControl>
                <FormLabel> Title</FormLabel>
                <Input
                  type="text"
                  value={title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                />
                <FormLabel>Photo (jpg, png) </FormLabel>
                <Input
                  type="file"
                  mt="10px"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    imgUpload(e.target.files[0]);
                  }}
                  isRequired
                />
                <Text>{message}</Text>

                <FormLabel mt="10px"> Content</FormLabel>
                <Textarea
                  value={content}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                />

                <Button float="right" mt="10px" type="submit">
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
