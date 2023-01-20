import React from "react";
import { Box, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function ShopByRoom() {
  const SHOP_BY_ROOM = [
    {
      name: "Shop Living Room",
      img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_1.jpg",
    },
    {
      name: "Shop Bedroom",
      img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_2.jpg",
    },
    {
      name: "Shop Dining Room",
      img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_3.jpg",
    },
    {
      name: "Shop Study Room",
      img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_4.jpg",
    },
  ];
  return (
    <Stack>
      <Heading>Shop By Room</Heading>
      <Grid
        gridTemplateColumns={{ base: "repeat(2,1fr)", lg: "repeat(4,1fr)" }}
        gap="5"
      >
        {SHOP_BY_ROOM.map((el) => (
          <Link href={"#"} key={el.name}>
            <Stack>
              <Image
                src={el.img}
                alt={el.name}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
              />
              <Text>{el.name}</Text>
            </Stack>
          </Link>
        ))}
      </Grid>
    </Stack>
  );
}
