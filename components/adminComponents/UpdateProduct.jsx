import { update_shop } from "@/reducer/Admin/actions";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  VStack,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function UpdateProduct({ product }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputVal, setInputVal] = useState({ image: "", price: "" });
  const dispatch = useDispatch();

  let handleSubmit = (e) => {
    e.preventDefault();
    let updated = { ...product, image: inputVal.image, price: inputVal.price };
    dispatch(update_shop(updated));
    setInputVal({ image: "", price: "" });
  };

  let handleInput = (e) => {
    let { name, value } = e.target;
    setInputVal({ ...inputVal, [name]: value });
  };
  return (
    <>
      <Button onClick={onOpen} colorScheme={"red"}>
        Update This Product
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <VStack>
                <Input
                  type={"url"}
                  placeholder="enter image url to change"
                  name="image"
                  onChange={handleInput}
                  value={inputVal.image}
                  required
                />
                <Input
                  type={"number"}
                  placeholder="enter price to change"
                  name="price"
                  onChange={handleInput}
                  value={inputVal.price}
                  required
                />
                <Button type={"submit"} colorScheme="red" w={"100%"}>
                  Update
                </Button>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
