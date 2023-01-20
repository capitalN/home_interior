import axios from "axios";
import { useState } from "react";
import { Button, Input, Stack, VStack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { add_to_shop } from "@/reducer/Admin/actions";
import { useToast } from "@chakra-ui/react";
let proobj = {
  name: "",
  image: "",
  categories: "",
  type: "",
  price: "",
  prints: "",
  discount: "",
};

let Admin = () => {
  let [prodata, setprodata] = useState(proobj);
  const dispatch = useDispatch();
  const toast = useToast();

  let handelchange = (e) => {
    let { name, value, type } = e.target;
    let valpro = type === "number" ? Number(value) : value;
    setprodata({ ...prodata, [name]: valpro });
  };

  let addproduct = () => {
    dispatch(add_to_shop(prodata));
    toast({
      title: prodata.name,
      description: prodata.type,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setprodata(proobj);
  };

  let { name, image, categories, price, discount, type } = prodata;
  return (
    <Stack boxShadow={"xl"} p="10">
      <Input
        placeholder="product name"
        type="text"
        name="name"
        value={name}
        onChange={handelchange}
        required
      />
      <Input
        placeholder="image url"
        type="link"
        name="image"
        value={image}
        onChange={handelchange}
        required
      />
      <Input
        placeholder="categories"
        type="text"
        name="categories"
        value={categories}
        onChange={handelchange}
      />
      <Input
        placeholder="type"
        type="text"
        name="type"
        value={type}
        onChange={handelchange}
      />
      <Input
        placeholder="price"
        type="number"
        name="price"
        value={price}
        onChange={handelchange}
      />
      <Input
        placeholder="discount"
        type="text"
        name="discount"
        value={discount}
        onChange={handelchange}
      />
      <Button onClick={addproduct} colorScheme={"red"}>
        ADD PRODUCT
      </Button>
    </Stack>
  );
};

export default Admin;
