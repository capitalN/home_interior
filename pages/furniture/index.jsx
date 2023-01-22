import React, { useState } from "react";

import { Box, Text, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import style from "./furniture.module.css";
import Link from "next/link";

let options = [
  "Sofas",
  "Recliners",
  "Sofa Chairs",
  "Office Chairs",
  "Gaming Chairs",
  "Bean Bags",
  "Chairs",
  "Seating",
  "Centre Tables",
  "Entertainment Units",
  "Shoe Racks",
  "Dining Chairs",
  "Dining Tables",
  "Console Tables",
  "Bar Furniture",
  "Beds",
  "Bedside Tables",
  "Dressing Tables",
  "Wardrobes",
  "Cabinetry",
  "Study Tables",
  "Outdoor",
  "Kids and Teens",
  "Furniture Care",
];

let Bestsellers = [
  {
    name: "2 Door Wardrobes",
    img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Furnitureclp_Section3_large_1.jpg",
  },
  {
    name: "Modern Writing Ta...",
    img: "https://ii3.pepperfry.com/media/wysiwyg/banners/Furnitureclp_Section3_large_2.jpg",
  },
  {
    name: "Queen Size Stora...",
    img: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furnitureclp_Section3_large_3.jpg",
  },
  {
    name: "Gaming Chairs",
    img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Furniture_section3_web_05122022_4.jpg",
  },
  {
    name: "Shoe Cabinets",
    img: "https://ii3.pepperfry.com/media/wysiwyg/banners/Furnitureclp_Section3_large_5.jpg",
  },
  {
    name: "Rectangular Coffee...",
    img: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furnitureclp_Section3_large_6.jpg",
  },
];

let BestDelas = [
  {
    name: "Family Mealtime",
    offer: "50+ Modern Dining Sets",
    img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Furniture_deal_web_20122022_1.jpg",
  },
  {
    name: "Comfy Bean Bags",
    offer: "50+ Bean Bags",
    img: "https://ii3.pepperfry.com/media/wysiwyg/banners/Furniture_section4_web_05122022_2.jpg",
  },
  {
    name: "Budget Buys For Nerds",
    offer: "40+ Modern Book Shelves",
    img: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_deal_web_20122022_3.jpg",
  },
  {
    name: "Chic Dressers",
    offer: "50+ Dressers",
    img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Furniture_section4_web_05122022_4.jpg",
  },
];

let Trending = [
  {
    name: "Me-Time Nook",
    link: "wingchair",
    offer: "40+ Printed Wing Chairs",
    img: "https://ii3.pepperfry.com/media/wysiwyg/banners/Furnitureclp_Section5_large_1.jpg",
  },
  {
    name: "Sofa cum Bed",
    link: "sofa",
    offer: "15+ Inovative Designs",
    img: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_section5_web_05122022_2.jpg",
  },
  {
    name: "Magestic Marble",
    link: "table",
    offer: "20+ Marble Top End Tables",
    img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Furnitureclp_Section5_large_3.jpg",
  },
  {
    name: "The Binge Corner ",
    link: "tvunit",
    offer: "120+ TV Units",
    img: "https://ii3.pepperfry.com/media/wysiwyg/banners/Furnitureclp_Section5_large_4.jpg",
  },
];

let newLaunces = [
  {
    name: "Classic: Sheraton Range",
    offer: "Imported Latin Teak Furniture",
    img: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_section6_web_05122022_1.jpg",
  },
  {
    name: "Smartsters",
    offer: "Spaces For Children To Blossom",
    img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Furniture_section6_web_05122022_2.jpg",
  },
  {
    name: "Neudot",
    offer: "Smart Home Furniture Solutions",
    img: "https://ii3.pepperfry.com/media/wysiwyg/banners/Furniture_section6_web_05122022_3.jpg",
  },
  {
    name: "Woodbuzz",
    offer: "For Modern & Colourful Homes",
    img: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_section6_web_05122022_4.jpg",
  },
];

let Choose = [
  {
    img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Furnitureclp_Section7_large_1.jpg",
  },
  {
    img: "https://ii3.pepperfry.com/media/wysiwyg/banners/Furnitureclp_Section7_large_2.jpg",
  },
  {
    img: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furnitureclp_Section7_large_3.jpg",
  },
];

let Brands = [
  {
    name: "2150+ Options",
    offer: "Popular For Dining",
    img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Furnitureclp_Section_large_1.jpg",
  },
  {
    name: "900+ Options",
    offer: "Popular For Sofas",
    img: "https://ii3.pepperfry.com/media/wysiwyg/banners/Furnitureclp_Section_large_2.jpg",
  },
  {
    name: "600+ Options",
    offer: "Popular For Wardrobes",
    img: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furnitureclp_Section_large_3.jpg",
  },
  {
    name: "200+ Options",
    offer: "Popular For Entertainment Units",
    img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Furniture_section7_web_05122022_1.jpg",
  },
  {
    name: "150+ Options",
    offer: "Popular For Sideboards",
    img: "https://ii3.pepperfry.com/media/wysiwyg/banners/Furniture_section7_web_05122022_2.jpg",
  },
  {
    name: "150+ Options",
    offer: "Popular For Recliners",
    img: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_section7_web_05122022_3.jpg",
  },
];

let Customers = [
  {
    img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_7.jpg",
    name: "Bought these two grey puffy stools from pepperfry. Found them to be surprisingly strong! Blends",
    offer: "Suman Senapatia",
    place: "Visakhapatnam",
  },
  {
    img: "https://ii1.pepperfry.com/media/wysiwyg/banners/happy_customer_block_2_2906_0222.png",
    name: "I purchased Candy Study Chair in Pink Colour by Alex Daisy from pepperfry looks awesome and My",
    offer: "Satya Madhana",
    place: "Secunderabad",
  },
  {
    img: "https://ii3.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_9.jpg",
    name: "Purchased an ergonomic chair, I thought it would not be fitting for me but once it got delivered, got it",
    offer: "Baba Kattubadi",
    place: "Hyderabad",
  },
];

let Help = [
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

const optimg = [
  "https://ii1.pepperfry.com/media/catalog/product/1640158185_carousel_ba450ea581a2a78f09ba3d39c62b8782.jpg",
  "https://ii1.pepperfry.com/media/catalog/product/1670264520_carousel_52449e412e9d462bd73e88715e581dc8.jpg",
  "https://ii1.pepperfry.com/media/catalog/product/1670264521_carousel_2c51da24496e3dd2332010582f3b15ff.jpg",
  "https://ii1.pepperfry.com/media/catalog/product/1670264522_carousel_d548700cd150ab87e665d48ab8ccd129.jpg",
  "https://ii1.pepperfry.com/media/catalog/product/1670264523_carousel_1dfd06a3fe84b96f2066db542bbad421.jpg",
  "https://ii1.pepperfry.com/media/catalog/product/1670264523_carousel_ae80c1f60aabe8c0405230862a396b41.jpg",
  "https://ii1.pepperfry.com/media/catalog/product/1670264524_carousel_c341da29ea1bcdc4be145b6d57c863bb.jpg",
  "https://ii1.pepperfry.com/media/catalog/product/1670264525_carousel_43b3f852dce63f42729d5e28c1228cf3.jpg",
  "https://ii1.pepperfry.com/media/catalog/product/1670264526_carousel_cabb5fd8f8216fd5f1d3e51825970cf3.jpg",
  "https://ii1.pepperfry.com/media/catalog/product/1670264527_carousel_90e19aecb26d88be5c9166cfce247c98.jpg",
  "https://ii1.pepperfry.com/media/catalog/product/1670264528_carousel_8efdea8605db75a52bbac89244f9d191.jpg",
  "https://ii1.pepperfry.com/media/catalog/product/1670264528_carousel_b83f931240512f31bd655c7e576c68bb.jpg",
  "https://ii1.pepperfry.com/media/catalog/product/1670264529_carousel_267e57e1e67805c0a9c7064a5d370dcb.jpg",
  "https://ii1.pepperfry.com/media/catalog/product/1670264530_carousel_0ab6545e3d5350355f4ca04a177fbad0.jpg",
  "https://ii1.pepperfry.com/media/catalog/product/1670264531_carousel_632c70466f4005da8035f462787be516.jpg",
  "https://ii1.pepperfry.com/media/catalog/product/1670264531_carousel_0382d9661260d1485d96297339628a0b.jpg",
  "https://ii1.pepperfry.com/media/catalog/product/1670264532_carousel_b99c161420af5146dcc497233e2ef980.jpg",
  "https://ii1.pepperfry.com/media/catalog/product/1670264533_carousel_bd40d74fd75d48bc3a57aae46f417822.jpg",
  "https://ii1.pepperfry.com/media/catalog/product/1670264534_carousel_71c763549a323596e71b677674db4053.jpg",
  "https://ii1.pepperfry.com/media/catalog/product/1670264535_carousel_933701916180879b504304ba6075b9c9.jpg",
];

const Page = () => {
  const [more, setMore] = useState(false);

  return (
    <Box p={{ base: "15px", md: "55px" }}>
      <Flex gap="20px" mb="50px">
        <Box
          w="15%"
          display={{ base: "none", md: "block" }}
          className={style.scrollbar}
        >
          <Text as="b" fontSize="25px">
            Furniture
          </Text>
          <Box p="10px" h="300px" fontWeight="bold" overflowY="scroll">
            {options.map((ele, i) => (
              <Text mb="6px" key={i}>
                {ele}
              </Text>
            ))}
          </Box>
        </Box>
        <Box w={{ base: "100%", md: "85%" }}>
          <Image
            w="100%"
            display={{ base: "none", md: "block" }}
            h="100%"
            src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Furniture_Banner_2x_06Dec.jpg"
            alt="furniture shop now"
          />
          <Image
            w="100%"
            display={{ base: "block", md: "none" }}
            h="100%"
            src="https://ii1.pepperfry.com/media/catalog/product/1670324817_carousel_f28c238c21f0c3d728791327984263bd.jpg"
            alt="furniture shop now"
          />
        </Box>
      </Flex>

      <Box display={{ base: "block", md: "none" }}>
        <SimpleGrid columns={2} spacing="20px" m="auto">
          {optimg.map((ele, i) => (
            <Box key={i}>
              <Image w="100%" src={ele} alt={ele} />
              <Text color="#4f4e38">{options[i]}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box mt="10px">
        <Text
          as="b"
          fontSize={{ base: "xl", md: "3xl" }}
          className={style.heading}
        >
          Meet The Bestsellers
        </Text>
        <Flex gap="20px" mt="10px" className={style.scroll}>
          {Bestsellers.map((ele, i) => (
            <Box key={i} className={style.scrollcard}>
              <Image w="100%" m="auto" src={ele.img} alt={ele.name} />
              <Text fontSize={{ base: "md", md: "xl" }}>{ele.name}</Text>
              <Text color="gray" fontSize={{ base: "md", md: "lg" }}>
                50+ Options
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>

      <Box mt="50px">
        <Text
          as="b"
          fontSize={{ base: "xl", md: "3xl" }}
          className={style.heading}
        >
          It's A Big Deal
        </Text>
        <Flex gap="20px" mt="10px" className={style.scroll}>
          {BestDelas.map((ele, i) => (
            <Box key={i} className={style.scrollcard}>
              <Image w="100%" m="auto" src={ele.img} alt={ele.name} />
              <Text fontSize={{ base: "md", md: "xl" }}>{ele.name}</Text>
              <Text color="gray" fontSize={{ base: "sm", md: "lg" }}>
                {ele.offer}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>

      <Box mt="50px">
        <Text
          as="b"
          fontSize={{ base: "xl", md: "3xl" }}
          className={style.heading}
        >
          What's #Trending?
        </Text>
        <Flex gap="20px" mt="10px" className={style.scroll}>
          {Trending.map((ele, i) => (
            <Link href={`/furniture/products/${ele.link}`}>
              <Box key={i} className={style.scrollcard}>
                <Image w="100%" m="auto" src={ele.img} alt={ele.name} />
                <Text fontSize={{ base: "md", md: "xl" }}>{ele.name}</Text>
                <Text color="gray" fontSize={{ base: "sm", md: "lg" }}>
                  {ele.offer}
                </Text>
              </Box>
            </Link>
          ))}
        </Flex>
      </Box>

      <Box mt="50px">
        <Text
          as="b"
          fontSize={{ base: "xl", md: "3xl" }}
          className={style.heading}
        >
          Discover New Launches
        </Text>
        <Flex gap="20px" mt="10px" className={style.scroll}>
          {newLaunces.map((ele, i) => (
            <Box key={i} className={style.scrollcard}>
              <Image w="100%" m="auto" src={ele.img} alt={ele.name} />
              <Text fontSize={{ base: "md", md: "xl" }}>{ele.name}</Text>
              <Text color="gray" fontSize={{ base: "sm", md: "lg" }}>
                {ele.offer}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>

      <Box mt="50px">
        <Text
          as="b"
          fontSize={{ base: "xl", md: "3xl" }}
          className={style.heading}
        >
          Your Style Chooses You
        </Text>
        <Flex gap="20px" mt="10px" className={style.scroll}>
          {Choose.map((ele, i) => (
            <Box minW="230px" key={i} className={style.scrollcard}>
              <Image w="100%" m="auto" src={ele.img} alt={ele.name} />
            </Box>
          ))}
        </Flex>
      </Box>

      <Box mt="50px">
        <Text
          as="b"
          fontSize={{ base: "xl", md: "3xl" }}
          className={style.heading}
        >
          Top Brands To Choose From
        </Text>
        <Flex gap="20px" mt="10px" className={style.scroll}>
          {Brands.map((ele, i) => (
            <Box key={i} className={style.scrollcard}>
              <Image w="100%" m="auto" src={ele.img} alt={ele.name} />
              <Text fontSize={{ base: "md", md: "lg" }}>{ele.name}</Text>
              <Text color="gray" fontSize={{ base: "sm", md: "lg" }}>
                {ele.offer}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>

      <Box mt="50px">
        <Text
          as="b"
          fontSize={{ base: "xl", md: "3xl" }}
          className={style.heading}
        >
          Customers Speak
        </Text>
        <Flex gap="20px" mt="10px" className={style.scroll}>
          {Customers.map((ele, i) => (
            <Box m="auto" key={i} className={style.scrollcard}>
              <Image w="100%" m="auto" src={ele.img} alt={ele.name} />
              <Text mb="10px" mt="20px" fontSize={{ base: "md", md: "xl" }}>
                {ele.name}...
              </Text>
              <Text fontSize={{ base: "sm", md: "lg" }}>{ele.offer}</Text>
              <Text color="gray" fontSize={{ base: "sm", md: "lg" }}>
                {ele.place}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>

      <Box mt="50px" mb="30px">
        <Text
          as="b"
          fontSize={{ base: "xl", md: "3xl" }}
          className={style.heading}
        >
          Need Help Buying ?
        </Text>
        <Flex gap="20px" mt="10px" className={style.scroll}>
          {Help.map((ele, i) => (
            <Box key={i} className={style.scrollcard}>
              <Image w="100%" m="auto" src={ele.img} alt={ele.name} />
              <Text fontSize="md" mt="10px">
                {ele.name}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>

      <Box mt="20px" color="#4f4e38">
        <Text as="b" mt="10px" mb="10px">
          Buy Wooden Furniture Online
        </Text>
        <Text mt="10px" mb="10px">
          Buy furniture online @ Pepperfry - India's largest home shopping
          destination offering a wide range of home and office furniture online.
          Choosing the right furniture for your home online will add elegance
          and functionality to your interior decor, while it will also be cost
          effective and long lasting at the same time. Enjoy fast shipping as
          well as cash on delivery at our online store.
        </Text>
        <Box display={{ base: "none", md: "block" }}>
          <Text as="b" mt="10px" mb="10px">
            Things to Consider Before Buying Furniture
          </Text>
          <Text mt="10px" mb="10px">
            There are so many furniture designs available nowadays. Looking at
            these, you may end up in a confusion of which one to buy. However,
            you must understand your requirements before purchasing the
            furniture. Here is a list of common factors that can help you
            understand your needs better:
          </Text>
          <Text>
            Size of the area where the furniture will be placed Size of the
            furniture Purpose of the furniture, whether bed, sofa, or cabinet
            Features of the furniture Its material, design, and color Your
            budget
          </Text>
          <Text mb="10px">
            Who said furniture should only fulfill its purpose? You can go a
            mile extra with your creativity skills by mixing and matching
            different furniture designs to beautify your home dcor. For example,
            you can set up quirky benches as a seating arrangement instead of
            sofas in the living area and amp up the liveliness of your home.
            Similarly, your bedroom furniture design reflects your personality,
            so it is all in the way you style it, then be it a modular wardrobe
            or a loft bed with storage and desk functionality.
          </Text>
          <Text as="b" mt="10px" mb="10px">
            Exclusive Range of Furniture Online
          </Text>
          <Text mt="10px" mb="10px">
            Pepperfry.com is the best place to buy metal as well as wooden
            furniture online in India. Here at Pepperfry, we are committed to
            offering our customers the widest range in home furniture like{" "}
            <Link color="orange" href="/">
              tables, sofas
            </Link>
            , chairs for living room as well as{" "}
            <Link color="orange" href="/">
              beds, sofa set,
            </Link>{" "}
            wardrobes, side tables, dressing tables for bedroom and crockery
            cabinets, chest of drawers for kitchen especially in solid wood and
            sheesham{" "}
            <Link color="orange" href="/">
              furniture designs,
            </Link>{" "}
            , so that it is easy and hassle free to buy furniture online. Our
            furniture is intelligently designed to give both comfort and
            functionality; while we also go to great lengths to ensure that we
            source only the highest quality raw materials and use the latest
            technologies to manufacture each individual piece.
          </Text>
          <Text as="b" mt="10px" mb="10px">
            Wooden Furniture in Solid Wood & Sheesham Designs
          </Text>
          <Text mt="10px" mb="10px">
            Our exhaustive range offers multiple options in solid, mango, teak,
            rubber, acacia, ply, engineered and sheesham wood furniture pieces,
            while all our wooden furniture can also be customized to suit the
            individual needs of our customers. We also offer solid wood
            furniture in beds, dining tables, shoe racks, storage and reception
            cabinets at our online marketplace. See various{" "}
            <Link color="orange" href="/">
              {" "}
              sofa designs side by side, compare prices and finishes and find
              exclusive modular furniture pieces that you would not find at
              local furniture stores.
            </Link>
          </Text>
          <Text as="b" mt="10px" mb="10px">
            Browse Furniture by Room Type -
          </Text>
          <Text mt="15px">
            {" "}
            <Link color="orange" href="/">
              Living Room Furniture{" "}
            </Link>{" "}
            Living room consists of your stylish and trending sofas, chairs and
            tables. They should be exquisitely designed and comfortable to sit
            on. These furniture pieces escalate the aesthetic appeal of your
            home.
          </Text>
          <Text mt="15px">
            {" "}
            <Link color="orange" href="/">
              Dining Room Furniture
            </Link>{" "}
            Apart from looking good, dining room furniture should also be
            efficient and robust, these include tables, chairs and cabinets.
            Always remember to emphasize on quality over quantity when it comes
            to dining room furniture.
          </Text>
          <Text mt="15px">
            {" "}
            <Link color="orange" href="/">
              Kids Room Furniture{" "}
            </Link>{" "}
            A kids room requires colorful, safe and robust furniture pieces.
            Kids room consists of beds, bedside and study tables, cradles, sofas
            and book shelves. Do not compromise on quality while grabbing
            furniture for your kids room.
          </Text>
          <Text mt="15px">
            {" "}
            <Link color="orange" href="/">
              Outdoor Furniture{" "}
            </Link>
            Needless to say these furniture pieces do not have the comfort of
            being installed inside of your home, so they have to be sturdy and
            robust to handle the changing weather conditions. Outdoor furniture
            consist of chairs, swings, loungers, dining sets and tables. Grab
            these manufactured by reputed brands.
          </Text>
          <Text mb="20px">
            You can also avail discounts & offers on wide range of Decor,
            Modular Kitchen, Carpets, Mattress, Kitchenware and Home Utilities
            products, that suit your need. So go ahead now and take a good look
            at{" "}
            <Link fontWeight="bold" href="/">
              our online furniture shopping store.
            </Link>
          </Text>
          <Text mt="20px" as="b">
            Frequently Asked Questions
          </Text>
          <br />
          <br />
          <Text mt="20px" as="b">
            What is the most popular furniture style?
          </Text>
          <Text mt="10px" mb="10px">
            The most popular furniture styles include rustic farmhouse, modern,
            glam, and traditional. The chances of these furniture styles going
            out of trend are minimal.
          </Text>
          <Text as="b" mt="10px" mb="10px">
            What are the latest trends in furniture?
          </Text>
          <Text mt="10px" mb="10px">
            The latest trends in furniture include bamboo furniture, denim,
            jungle prints and neutral palette upholstered furniture,
            multi-functional furniture, unique metal furniture, and
            artisan-inspired furniture.
          </Text>
          <Text as="b" mt="10px" mb="10px">
            What wood is best for furniture?
          </Text>
          <Text mt="10px" mb="10px">
            Hardwoods such as maple, oak, teak, mahogany, walnut, ash, acacia
            are some of the most commonly used wood types that are best for
            furniture.
          </Text>
          <Text
            display={{ base: "block", md: "none" }}
            as="b"
            color="orange"
            onClick={() => setMore(!more)}
          >
            ShowLess
          </Text>
        </Box>

        {more ? (
          <Box display={{ base: "block", md: "none" }}>
            <Text as="b" mt="10px" mb="10px">
              Things to Consider Before Buying Furniture
            </Text>
            <Text mt="10px" mb="10px">
              There are so many furniture designs available nowadays. Looking at
              these, you may end up in a confusion of which one to buy. However,
              you must understand your requirements before purchasing the
              furniture. Here is a list of common factors that can help you
              understand your needs better:
            </Text>
            <Text>
              Size of the area where the furniture will be placed Size of the
              furniture Purpose of the furniture, whether bed, sofa, or cabinet
              Features of the furniture Its material, design, and color Your
              budget
            </Text>
            <Text mb="10px">
              Who said furniture should only fulfill its purpose? You can go a
              mile extra with your creativity skills by mixing and matching
              different furniture designs to beautify your home dcor. For
              example, you can set up quirky benches as a seating arrangement
              instead of sofas in the living area and amp up the liveliness of
              your home. Similarly, your bedroom furniture design reflects your
              personality, so it is all in the way you style it, then be it a
              modular wardrobe or a loft bed with storage and desk
              functionality.
            </Text>
            <Text as="b" mt="10px" mb="10px">
              Exclusive Range of Furniture Online
            </Text>
            <Text mt="10px" mb="10px">
              Pepperfry.com is the best place to buy metal as well as wooden
              furniture online in India. Here at Pepperfry, we are committed to
              offering our customers the widest range in home furniture like{" "}
              <Link color="orange" href="/">
                tables, sofas
              </Link>
              , chairs for living room as well as{" "}
              <Link color="orange" href="/">
                beds, sofa set,
              </Link>{" "}
              wardrobes, side tables, dressing tables for bedroom and crockery
              cabinets, chest of drawers for kitchen especially in solid wood
              and sheesham{" "}
              <Link color="orange" href="/">
                furniture designs,
              </Link>{" "}
              , so that it is easy and hassle free to buy furniture online. Our
              furniture is intelligently designed to give both comfort and
              functionality; while we also go to great lengths to ensure that we
              source only the highest quality raw materials and use the latest
              technologies to manufacture each individual piece.
            </Text>
            <Text as="b" mt="10px" mb="10px">
              Wooden Furniture in Solid Wood & Sheesham Designs
            </Text>
            <Text mt="10px" mb="10px">
              Our exhaustive range offers multiple options in solid, mango,
              teak, rubber, acacia, ply, engineered and sheesham wood furniture
              pieces, while all our wooden furniture can also be customized to
              suit the individual needs of our customers. We also offer solid
              wood furniture in beds, dining tables, shoe racks, storage and
              reception cabinets at our online marketplace. See various{" "}
              <Link color="orange" href="/">
                {" "}
                sofa designs side by side, compare prices and finishes and find
                exclusive modular furniture pieces that you would not find at
                local furniture stores.
              </Link>
            </Text>
            <Text as="b" mt="10px" mb="10px">
              Browse Furniture by Room Type -
            </Text>
            <Text mt="15px">
              {" "}
              <Link color="orange" href="/">
                Living Room Furniture{" "}
              </Link>{" "}
              Living room consists of your stylish and trending sofas, chairs
              and tables. They should be exquisitely designed and comfortable to
              sit on. These furniture pieces escalate the aesthetic appeal of
              your home.
            </Text>
            <Text mt="15px">
              {" "}
              <Link color="orange" href="/">
                Dining Room Furniture
              </Link>{" "}
              Apart from looking good, dining room furniture should also be
              efficient and robust, these include tables, chairs and cabinets.
              Always remember to emphasize on quality over quantity when it
              comes to dining room furniture.
            </Text>
            <Text mt="15px">
              {" "}
              <Link color="orange" href="/">
                Kids Room Furniture{" "}
              </Link>{" "}
              A kids room requires colorful, safe and robust furniture pieces.
              Kids room consists of beds, bedside and study tables, cradles,
              sofas and book shelves. Do not compromise on quality while
              grabbing furniture for your kids room.
            </Text>
            <Text mt="15px">
              {" "}
              <Link color="orange" href="/">
                Outdoor Furniture{" "}
              </Link>
              Needless to say these furniture pieces do not have the comfort of
              being installed inside of your home, so they have to be sturdy and
              robust to handle the changing weather conditions. Outdoor
              furniture consist of chairs, swings, loungers, dining sets and
              tables. Grab these manufactured by reputed brands.
            </Text>
            <Text mb="20px">
              You can also avail discounts & offers on wide range of Decor,
              Modular Kitchen, Carpets, Mattress, Kitchenware and Home Utilities
              products, that suit your need. So go ahead now and take a good
              look at{" "}
              <Link fontWeight="bold" href="/">
                our online furniture shopping store.
              </Link>
            </Text>
            <Text mt="20px" as="b">
              Frequently Asked Questions
            </Text>
            <br />
            <br />
            <Text mt="20px" as="b">
              What is the most popular furniture style?
            </Text>
            <Text mt="10px" mb="10px">
              The most popular furniture styles include rustic farmhouse,
              modern, glam, and traditional. The chances of these furniture
              styles going out of trend are minimal.
            </Text>
            <Text as="b" mt="10px" mb="10px">
              What are the latest trends in furniture?
            </Text>
            <Text mt="10px" mb="10px">
              The latest trends in furniture include bamboo furniture, denim,
              jungle prints and neutral palette upholstered furniture,
              multi-functional furniture, unique metal furniture, and
              artisan-inspired furniture.
            </Text>
            <Text as="b" mt="10px" mb="10px">
              What wood is best for furniture?
            </Text>
            <Text mt="10px" mb="10px">
              Hardwoods such as maple, oak, teak, mahogany, walnut, ash, acacia
              are some of the most commonly used wood types that are best for
              furniture.
            </Text>
            <Text
              display={{ base: "block", md: "none" }}
              as="b"
              color="orange"
              onClick={() => setMore(!more)}
            >
              ShowLess
            </Text>
          </Box>
        ) : (
          <Text
            as="b"
            display={{ base: "block", md: "none" }}
            color="orange"
            onClick={() => setMore(!more)}
          >
            ShowMore
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default Page;
