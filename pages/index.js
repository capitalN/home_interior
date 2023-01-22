import FryDeals from "@/components/homeComponents/FryDeals";
import GetInspired from "@/components/homeComponents/GetInspired";
import MainCarousel from "@/components/homeComponents/MainCarousel";
import ShopByRoom from "@/components/homeComponents/ShopByRoom";
import TopBrands from "@/components/homeComponents/TopBrands";
import WinterEdit from "@/components/homeComponents/WinterEdit";

import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Hide,
  Stack,
  Text,
} from "@chakra-ui/react";

//import LoginModal from "@/components/loginModal";
//import SignupModal from "@/components/signupModal";

import LoginModal from "@/components/login_signup/loginModal";
import SignupModal from "@/components/login_signup/signupModal";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Help from "@/components/homeComponents/Help";

import MyComponent from "@/components/login_signup/authModals";
import AuthModals from "@/components/login_signup/authModals";

export default function Home() {
  return (
    <>
    

      <Box p={{ base: "15px", md: "55px" }}>
        <Stack gap={10}>
          <Flex gap={5}>
            <MainCarousel />
            <Hide below="sm">
              <Image
                src={
                  "https://ii2.pepperfry.com/media/wysiwyg/banners/RHS-WEB_2x_1301_16-jan.jpg"
                }
                width={0}
                height={0}
                sizes="100vw"
                alt="image"
                style={{ width: "22%", height: "auto", paddingBottom: "6px" }}
              />
            </Hide>
          </Flex>

          <Hide below="sm">
            <Link href={"#"}>
              <Image
                src="https://ii3.pepperfry.com/media/wysiwyg/banners/2021_web_regBanner1x_2712.jpg"
                width={0}
                height={0}
                sizes="100vw"
                alt="image"
                style={{ width: "100vw", height: "auto" }}
              />
            </Link>
          </Hide>

          <ShopByRoom />

          <FryDeals />

          <GetInspired />

          <TopBrands />

          <WinterEdit />

          <Help />
        </Stack>
      </Box>
    </>
  );
}
