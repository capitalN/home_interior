import React from "react";
import { Grid, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Help() {
  let HELP = [
    {
      name: "Here's How To Choose The Right Sofa",
      img: "https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_1.jpg",
    },
    {
      name: "How To Buy A Perfect Bed For Your Room",
      img: "https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_2.jpg",
    },
    {
      name: "Your Guide To Buy The Perfect Mattress",
      img: "https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_3.jpg",
    },
    {
      name: "Everything About Cabinets And Sideboards",
      img: "https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_4.jpg",
    },
    {
      name: "What To Look For While Buying A Chair",
      img: "https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_5.jpg",
    },
    {
      name: " ",
      img: "https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_6.jpg",
    },
  ];
  return (
    <Stack>
      <Heading>Need Help Buying?</Heading>
      <Grid
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(3,1fr)",
          lg: "repeat(6,1fr)",
        }}
        gap="5"
      >
        {HELP.map((el) => (
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
