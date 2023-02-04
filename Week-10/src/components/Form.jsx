import { useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
function Form({ setTodoData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  const date = new Date();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
    isComplete: false,
  });

  const handleChange = (event, key) => {
    setFormData((prev) => {
      return { ...prev, [key]: event.target.value };
    });
  };

  return (
    <>
      <Button mt={4} onClick={onOpen}>
        Add Todo
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Name"
              size="md"
              onChange={(e) => {
                handleChange(e, "title");
              }}
            />
            <Textarea
              mt={10}
              placeholder="Description"
              onChange={(e) => {
                handleChange(e, "description");
              }}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                setTodoData((prev) => {
                  return [...prev, { ...formData, id: Date.now() }];
                });
              }}
              colorScheme="blue"
              mr={3}
            >
              Submit
            </Button>
            <Button onClick={onClose} variant="ghost">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Form;
