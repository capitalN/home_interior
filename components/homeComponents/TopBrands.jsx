import { Grid, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TopBrands() {
  const TOP_BRANDS = [
    {
      desc: "Popular For Sofas",
      name: "600+ options",
      img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section9_web_04012023_1.jpg",
    },
    {
      desc: "Popular For Chairs",
      name: "40+ options",
      img: "https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section9_web_04012023_2.jpg",
    },
    {
      desc: "Popular For Home Decor",
      name: "290+ options",
      img: "https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section9_web_04012023_3.jpg",
    },
    {
      desc: "Popular For Serveware",
      name: "120+ options",
      img: "https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section9_web_04012023_4.jpg",
    },
  ];

  return (
    <Stack>
      <Heading>Top Brands On Home Interior</Heading>
      <Grid
        gridTemplateColumns={{ md: "repeat(2,1fr)", lg: "repeat(4,1fr)" }}
        gap="5"
      >
        {TOP_BRANDS.map((el) => (
          <Link href="#" key={el.name}>
            <Stack>
              <Image
                src={el.img}
                alt={el.name}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
              />
              <Heading size={"md"}>{el.desc}</Heading>
              <Text>{el.name}</Text>
            </Stack>
          </Link>
        ))}
      </Grid>
    </Stack>
  );
}
