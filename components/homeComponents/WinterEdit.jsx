import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WinterEdit() {
  const WINTER_EDIT = [
    {
      desc: "Popular For Sofas",
      name: "600+ options",
      img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section8_web_04012023_1.jpg",
    },
    {
      desc: "Popular For Chairs",
      name: "40+ options",
      img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section8_web_04012023_2.jpg",
    },
    {
      desc: "Popular For Home Decor",
      name: "290+ options",
      img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section8_web_04012023_3.jpg",
    },
  ];

  return (
    <Stack>
      <Heading>Winter Edit</Heading>
      <Flex flexWrap={"wrap"} gap="5" align={"center"} justify="center">
        {WINTER_EDIT.map((el) => (
          <Link href="/furniture" key={el.name}>
            <Image src={el.img} width={360} height={360} alt="" />
          </Link>
        ))}
      </Flex>
    </Stack>
  );
}
