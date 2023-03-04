import React, { useState } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

const settings = {
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function mainCarousel() {
  let [slider, setSlider] = useState(0);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      image:
        "https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section2_web_04012023_2.jpg",
    },
    {
      image:
        "https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section2_web_04012023_3.jpg",
    },
    {
      image:
        "https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Promo_2x_1601_ND.jpg",
    },
  ];

  return (
    <Box position={"relative"} width={"full"} overflow={"hidden"}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Slider */}
      <Link href="/furniture">
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Image
              key={index}
              src={card.image}
              width={0}
              height={0}
              alt="carausel img"
              sizes={"100vw"}
              style={{
                width: "auto",
                height: "auto",
                display: "block",
                verticalAlign: "bottom",
              }}
            />
          ))}
        </Slider>
      </Link>
    </Box>
  );
}
