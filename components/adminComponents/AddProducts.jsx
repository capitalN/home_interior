import axios from "axios";
import { useState } from "react";
import {
  Button,
  Heading,
  Input,
  Stack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { add_to_shop } from "@/reducer/Admin/actions";
import { useToast } from "@chakra-ui/react";
let proobj = {
  name: "",
  image: "",
  img1: "",
  img2: "",
  img3: "",
  img4: "",
  img5: "",
  img6: "",
  img7: "",
  img8: "",
  img9: "",
  img10: "",
  categories: "",
  type: "",
  price: "",
  prints: "",
  discount: "",
  rating: "",
  clr1: "",
  clr2: "",
  specs: "",
  details: "",
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

  let {
    name,
    image,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    prints,
    categories,
    price,
    discount,
    rating,
    clr1,
    clr2,
    type,
    specs,
    details,
  } = prodata;

  return (
    <Stack boxShadow={"xl"} p="5">
      <Heading w={"250px"}>Add Product</Heading>
      <Input
        placeholder="product name"
        type="text"
        name="name"
        value={name}
        onChange={handelchange}
      />

      <Input
        placeholder="image url"
        type="link"
        name="image"
        value={image}
        onChange={handelchange}
      />

      <Input
        placeholder="img1"
        type="link"
        name="img1"
        value={img1}
        onChange={handelchange}
      />

      <Input
        placeholder="img2"
        type="link"
        name="img2"
        value={img2}
        onChange={handelchange}
      />

      <Input
        placeholder="img3"
        type="link"
        name="img3"
        value={img3}
        onChange={handelchange}
      />

      <Input
        placeholder="img4"
        type="link"
        name="img4"
        value={img4}
        onChange={handelchange}
      />

      <Input
        placeholder="img5"
        type="link"
        name="img5"
        value={img5}
        onChange={handelchange}
      />

      <Input
        placeholder="img6"
        type="link"
        name="img6"
        value={img6}
        onChange={handelchange}
      />

      <Input
        placeholder="img7"
        type="link"
        name="img7"
        value={img7}
        onChange={handelchange}
      />

      <Input
        placeholder="img8"
        type="link"
        name="img8"
        value={img8}
        onChange={handelchange}
      />

      <Input
        placeholder="img9"
        type="link"
        name="img9"
        value={img9}
        onChange={handelchange}
      />

      <Input
        placeholder="img10"
        type="link"
        name="img10"
        value={img10}
        onChange={handelchange}
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

      <Input
        placeholder="rating"
        type="number"
        name="rating"
        value={rating}
        onChange={handelchange}
      />

      <Input
        placeholder="Print/pattern/Solid"
        type="text"
        name="prints"
        value={prints}
        onChange={handelchange}
      />

      <Input
        placeholder="clr1"
        type="text"
        name="clr1"
        value={clr1}
        onChange={handelchange}
      />

      <Input
        placeholder="clr2"
        type="text"
        name="clr2"
        value={clr2}
        onChange={handelchange}
      />

      <Textarea
        name="specs"
        placeholder="specs"
        value={specs}
        size={"lg"}
        onChange={handelchange}
      ></Textarea>
      <Textarea
        name="details"
        placeholder="details"
        value={details}
        size={"lg"}
        onChange={handelchange}
      ></Textarea>

      <Button onClick={addproduct} colorScheme={"red"}>
        ADD PRODUCT
      </Button>
    </Stack>
  );
};

export default Admin;
