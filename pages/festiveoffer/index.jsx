import React from 'react';
import Link from "next/link";
import style from "../furniture/furniture.module.css";
import {
    Box,
    Text,
    Flex,
    Image,
    SimpleGrid,
    Divider,
    RadioGroup,
    Checkbox,
    Radio,
    Button
  } from "@chakra-ui/react";
  
  let BestDelas = [
    {
      name: "Family Mealtime",
      offer: "50+ Modern Dining Sets",
      img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Furniture_deal_web_20122022_1.jpg",
      link:'sofa'
    },
    {
      name: "Comfy Bean Bags",
      offer: "50+ Bean Bags",
      img: "https://ii3.pepperfry.com/media/wysiwyg/banners/Furniture_section4_web_05122022_2.jpg",
      link:'wingchair'
    },
    {
      name: "Budget Buys For Nerds",
      offer: "40+ Modern Book Shelves",
      img: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_deal_web_20122022_3.jpg",
      link:'sofa'
    },
    {
      name: "Chic Dressers",
      offer: "50+ Dressers",
      img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Furniture_section4_web_05122022_4.jpg",
      link:'sofa'
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

const Page = () => {
  return (
   <Box>
    <Box bg='black' color='white' textAlign='center' p='5px' m='2px'>
      <Text as='b'>Silly Wali Holi Sale -
         Get Upto 70% off | Extra 20% Cashback
      </Text>
    </Box>
      <Box w='90%' m='auto'>
       <Link href=''>
       <Image w='100%' src='https://ii2.pepperfry.com/assets/e2fba1ef-8533-43c1-aea5-a53bb775d574.jpg' alt='HappyHoli' />
       </Link>
      </Box>
      <Flex w='90%' m='auto' alignItems='center' gap='1px' mt='10px' >
      <Image w='50%' src='https://ii1.pepperfry.com/assets/1688bf_1676353201481_Hp_1280_section2_13feb_1.jpg' alt='HappyHoli' />
      <Image w='50%' src='https://ii1.pepperfry.com/assets/1688bf_1676353201481_Hp_1280_section2_13feb_1.jpg' alt='HappyHoli' />
      </Flex>

      <Box mt="50px" w='90%' m='auto'>
        <Text
          as="b"
          fontSize={{ base: "xl", md: "3xl" }}
          className={style.heading}
        >
          It's A Big Deal
        </Text>
        <Flex 
        gap="20px" 
        mt="5px" 
        className={style.scroll}>
          {BestDelas.map((ele, i) => (
            <Box 
            key={i} 
             className={style.scrollcard}>
              <Link href={`/furniture/products/${ele.link}`}>
              <Image 
              w="100%" 
              m="auto" 
              src={ele.img} 
              alt={ele.name} />
              <Text 
              fontSize={{ base: "md", md: "xl" }}>
                {ele.name}
              </Text>
              <Text 
              color="gray" 
              fontSize={{ base: "sm", md: "lg" }}>
                {ele.offer}
              </Text>
              </Link>
            </Box>
          ))}
        </Flex>
      </Box>
      
      

        <Box mt={{base:'20px',md:'40px'}}>
          <Flex w='80%' m='auto' justifyContent='space-between' gap='30px'  flexDirection={{base:'column',md:'row'}}> 
            <Box w={{base:'100%',md:'50%'}}>
            <Image w='100%' src='https://ak1.ostkcdn.com/img/mxc/12292022_WINTER2023_FURNITURE_688x444_BG02.jpg?imwidth=1024' alt='HappyHoli' />
            </Box>
            <Box w={{base:'100%',md:'50%'}}>
           
             <Text
             as="b"
             fontSize={{ base: "xl", md: "3xl" }}
             className={style.heading}
             >
                Multifunctional Furniture for Small Spaces
              </Text>
              <Text mt={{base:'18px',md:'20px'}}>
                For a fresh start to the new year, consider multifunctional furniture to get more utility from your space.
                With furniture that can serve multiple purposes, you don't have to fill every inch of your room, and your
                home will feel more tidy and productive. Use this list of multipurpose furniture pieces to find out how 
                you can make the most of your precious space.
              </Text>

             <Link href={`/furniture/products/sofa`}>
             <Button mt='15px' >
              See More
            </Button>
            </Link>

            </Box>
          </Flex>
        </Box>

        
        <Box mt={{base:'20px',md:'40px'}}>
          <Flex w='80%' m='auto' justifyContent='space-between' gap='30px'  flexDirection={{base:'column',md:'row'}}> 
           
            <Box w={{base:'100%',md:'50%'}}>
           
             <Text
             as="b"
             fontSize={{ base: "xl", md: "3xl" }}
             className={style.heading}
             >
               Check Out These Collections 
              </Text>
              <Text mt={{base:'18px',md:'20px'}}>
              The Danish concept of Hygge means creating a warm, simple environment that's both comfortable and secure. 
              You can start the year right by being truly present in your space and connecting to those around you in
               meaningful ways. This season, learn how embrace soft lighting, plush textures, and natural materials to 
               incorporate Hygge into your home.
              </Text>

             <Link href={`/furniture/products/sofa`}>
             <Button mt='15px' >
              See More
            </Button>
            </Link>

            </Box>

            <Box w={{base:'100%',md:'50%'}}>
            <Image w='70%' src='https://ii2.pepperfry.com/media/catalog/product/s/i/494x544/siramika-solid-wood-coffee-table-in-honey-oak-finish-by-mudramark-siramika-solid-wood-coffee-table-i-x7zyhj.jpg' alt='HappyHoli' />
            </Box>

          </Flex>
        </Box>


        <Box mt={{base:'20px',md:'40px'}}>
          <Flex w='80%' m='auto' justifyContent='space-between' gap='30px'  flexDirection={{base:'column',md:'row'}}> 
            <Box w={{base:'100%',md:'50%'}}>
            <Image w='80%' m='auto' src='https://ii2.pepperfry.com/media/catalog/product/p/a/1600x1760/panas-wing-chair-in-orange-by-febonic-panas-wing-chair-in-orange-by-febonic-mh2hrp.jpg' alt='HappyHoli' />
            </Box>
            <Box w={{base:'100%',md:'50%'}}>
           
             <Text
             as="b"
             fontSize={{ base: "xl", md: "3xl" }}
             className={style.heading}
             >
               Biophilic Design: How to Restore Nature to Your Home
              </Text>
              <Text mt={{base:'18px',md:'20px'}}>
              Need a centering breath to build yourself back up? Biophilic design connects you to your space by 
              blurring the lines between indoors and outdoors. When you mimic natural elements like lush greenery
               and calming hues around your home, you experience the same calm and clarity you'd find in the wilderness.
                Here are 10 easy, impactful ways to refresh your interior with life-loving pieces and restore your sense 
                of wellness.
              </Text>

             <Link href={`/furniture/products/wingchair`}>
             <Button mt='15px' >
              See More
            </Button>
            </Link>

            </Box>
          </Flex>
        </Box>

        <Box w='90%' 
        m='auto' 
        mt="50px" 
        mb="30px">
        <Text
          as="b"
          fontSize={{ base: "xl", md: "3xl" }}
          className={style.heading}
        >
          Need Help Buying ?
        </Text>
        <Flex gap="20px" 
        mt="10px" 
        className={style.scroll}>
          {Help.map((ele, i) => (
            <Box key={i} 
            className={style.scrollcard}>
              <Image 
              w="100%" 
              m="auto" 
              src={ele.img} alt={ele.name} />
              <Text fontSize="md" mt="10px">
                {ele.name}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
   
   </Box>
  )
}

export default Page
