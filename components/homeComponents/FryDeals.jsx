import { Box, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FryDeals() {
  const FRY_DEALS = [
    {
      discount: "For ₹219 at 73% off",
      name: "SS Side Plates Set of 4",
      img: "https://ii3.pepperfry.com/media/wysiwyg/banners/Home_Deal16_web_16012023_2.jpg",
    },
    {
      discount: "For ₹89 at 74% off",
      name: "Floral Bedding",
      img: "https://ii3.pepperfry.com/media/wysiwyg/banners/Home_Deal16_web_16012023_1.jpg",
    },
    {
      discount: "For ₹179 at 83% off",
      name: "Stripped Floor Runner",
      img: "https://ii3.pepperfry.com/media/wysiwyg/banners/Home_Deal16_web_16012023_3.jpg",
    },
    {
      discount: "For ₹59 at 53% off",
      name: "Money Plant With Pot",
      img: "https://ii3.pepperfry.com/media/wysiwyg/banners/Home_Deal16_web_16012023_4.jpg",
    },
  ];

  return (
    <Stack>
      <Heading>What The Fry Deals</Heading>
      <Grid
        gridTemplateColumns={{ md: "repeat(2,1fr)", lg: "repeat(4,1fr)" }}
        gap="5"
      >
        {FRY_DEALS.map((el) => (
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
              <Heading size={"md"}>{el.discount}</Heading>
              <Text>{el.name}</Text>
            </Stack>
          </Link>
        ))}
      </Grid>
    </Stack>
  );
}
