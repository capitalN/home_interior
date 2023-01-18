import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";
import { GrInstagram } from "react-icons/gr";

import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function GetInspired() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 520 },
      items: 3.5,
    },
    mobile: {
      breakpoint: { max: 519, min: 0 },
      items: 2.5,
    },
  };

  const GET_INSPIRED = [
    {
      id: 1,
      img: "https://cdn.taggbox.com/v7/https%3A%2F%2Fcloud.taggbox.com%2Fmedia%2F2022%2F07%2F183375%2Fimage_1389893079-1674040501.jpg?w=400&func=cover&ci_url_encoded=1",
    },
    {
      id: 2,
      img: "https://cdn.taggbox.com/v7/https%3A%2F%2Fcloud.taggbox.com%2Fmedia%2F2022%2F07%2F183375%2Fimage_1840183104-1674040262.webp?w=400&func=cover&ci_url_encoded=1",
    },
    {
      id: 3,
      img: "https://cdn.taggbox.com/v7/https%3A%2F%2Fcloud.taggbox.com%2Fmedia%2F2022%2F07%2F183375%2Fimage_1604055515-1674028244.jpg?w=400&func=cover&ci_url_encoded=1",
    },
    {
      id: 9,
      img: "https://cdn.taggbox.com/v7/https%3A%2F%2Fcloud.taggbox.com%2Fmedia%2F2022%2F07%2F183375%2Fimage_1975969130-1674040498.webp?w=400&func=cover&ci_url_encoded=1",
    },
    {
      id: 4,
      img: "https://cdn.taggbox.com/v7/https%3A%2F%2Fcloud.taggbox.com%2Fmedia%2F2022%2F07%2F183375%2Fimage_1046586843-1674028676.jpg?w=400&func=cover&ci_url_encoded=1",
    },
    {
      id: 5,
      img: "https://cdn.taggbox.com/v7/https%3A%2F%2Fcloud.taggbox.com%2Fmedia%2F2022%2F07%2F183375%2Fimage_1389893079-1674040501.jpg?w=400&func=cover&ci_url_encoded=1",
    },
    {
      id: 6,
      img: "https://cdn.taggbox.com/v7/https%3A%2F%2Fcloud.taggbox.com%2Fmedia%2F2022%2F07%2F183375%2Fimage_1840183104-1674040262.webp?w=400&func=cover&ci_url_encoded=1",
    },
    {
      id: 7,
      img: "https://cdn.taggbox.com/v7/https%3A%2F%2Fcloud.taggbox.com%2Fmedia%2F2022%2F07%2F183375%2Fimage_1604055515-1674028244.jpg?w=400&func=cover&ci_url_encoded=1",
    },
    {
      id: 8,
      img: "https://cdn.taggbox.com/v7/https%3A%2F%2Fcloud.taggbox.com%2Fmedia%2F2022%2F07%2F183375%2Fimage_1975969130-1674040498.webp?w=400&func=cover&ci_url_encoded=1",
    },
  ];

  return (
    <Stack>
      <Heading>Inspire and Get Inspired</Heading>

      <Carousel responsive={responsive} infinite={true} autoPlay={true}>
        {GET_INSPIRED.map((el) => (
          <Link href="#" key={el.name}>
            <Stack m="2" bg="gray.100" borderRadius="20px">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src={el.img}
                style={{
                  width: "auto",
                  height: "auto",
                  borderRadius: "20px",
                  margin: "10px",
                }}
              />
              <VStack p="20px">
                <Heading size={"md"}>Name</Heading>
                <Text>@user_name</Text>
                <GrInstagram color="#E1306C" size={20} />
              </VStack>
            </Stack>
          </Link>
        ))}
      </Carousel>
    </Stack>
  );
}
