import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
  Flex,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import Link from "next/link";

const Links = [
  "https://e7.pngegg.com/pngimages/85/102/png-clipart-logo-mastercard-computer-icons-symbol-credit-card-mastercard-emblem-text.png",
  "https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mcbc_dla_ms-decal_105px.png",
  "data:image/png;base64,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",
  "https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png",
  "https://1000logos.net/wp-content/uploads/2021/05/Diners-Club-International-logo.png",
  //   'https://cdn-icons-png.flaticon.com/512/157/157180.png',
  "http://cdn.onlinewebfonts.com/svg/img_462182.png",
];

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={10}
      h={10}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("orange.400", "orange.400"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      fontSize="14px"
      fontWeight={100}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Useful Links</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Our Blog</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Corporate Governance</Link>
            <Link href={"#"}>Pepperfry In the News</Link>
            <Link href={"#"}>Find A Studio</Link>
            <Link href={"#"}>Gift Cards</Link>
            <Link href={"#"}>Brands</Link>
            <Link href={"#"}>Customer Reviews</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Partners</ListHeader>
            <Link href={"#"}>Sell With Us</Link>
            <Link href={"#"}>Become a Franchisee</Link>
            <Link href={"#"}>Become a Pep Homie</Link>
            <Link href={"#"}>Design For Us</Link>
            <Link href={"#"}>Pepperfry Marketplace Policies</Link>
            <Link href={"#"}>Login to Your Merchant Dashboard</Link>
            <Link href={"#"}>Important : GST and You</Link>
            <Link href={"#"}>Corporate Enquiries</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Need Help?</ListHeader>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Returns & Refund</Link>
            <Link href={"#"}>Track Your Order</Link>
            <Link href={"#"}>FAQs</Link>
            <Link href={"#"}>Buy on Phone</Link>
            <Link href={"/adminlogin"}>Admin</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Download App</ListHeader>
            <Image
              w="150px"
              borderRadius={5}
              src="https://w7.pngwing.com/pngs/91/37/png-transparent-google-play-android-app-store-android-text-logo-microsoft-store.png"
              alt=""
            />
            <Image
              w="150px"
              src="https://www.seekpng.com/png/full/22-227594_download-on-the-app-store-badge-available-on.png"
              alt=""
            />
          </Stack>
        </SimpleGrid>
      </Container>

      <Container as={Stack} maxW={"6xl"} py={5} cursor={"pointer"}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Popular Categories</ListHeader>
            <p href={"#"}>
              Queen Size Beds, King Size Beds, Coffee Tables, Dining Sets,
              Recliners, Sofa cum Beds, Rocking Chairs, Cabinets, Book Shelves,
              TV Unit, Wardrobes, Outdoor Furniture, Bar Cabinets, Wall Shelves,
              Photo Frames, Bed Sheets, Mattresses, Table Cloth, Living Room
              Furniture, Study Tables, Dining Room Furniture, Office Furniture,
              Bed Room Furniture, Dining Table, Beds, Sofas, Sofa Set, Trundle
              Bed
            </p>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Popular Brands</ListHeader>
            <p href={"#"}>
              Mintwud, Woodsworth, CasaCraft, Amberville, Mudramark, Bohemiana,
              Clouddio, Spacewood, Durian, Green Soul, Godrej Interio, Nilkamal,
              Orange Tree , HomeTown , Duroflex , Sleepyhead , Peps India ,
              NestAsia , Jaipur Rugs , Obettee , Eliante by Jainsons , @Home ,
              Bombay Dyeing , Kapoor E Illuminaton , Ellementry , Chumbak ,
              Philips , Jaipur Fabric , Maspar , India Circus by Krsnaa Mehta
            </p>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Cities we deliver to</ListHeader>
            <p href={"#"}>
              Bengaluru, Mumbai, Navi Mumbai, Delhi, Hyderabad, Pune, Chennai,
              Gurgaon, Kolkata, Noida, Goa, Ghaziabad, Ahmedabad, Coimbatore,
              Faridabad, Jaipur, Lucknow, Kochi, Visakhapatnam, Chandigarh,
              Vadodara, Nagpur, Thiruvananthapuram, Indore, Mysore, Bhopal,
              Surat, Jalandhar, Patna, Ludhiana, Nashik, Madurai, Kanpur,
              Aurangabad and many more
            </p>
          </Stack>
        </SimpleGrid>
      </Container>

      <Container
        as={Stack}
        maxW={"6xl"}
        py={5}
        borderTopWidth={1}
        borderStyle={"solid "}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing={10}>
          <Stack align={"flex-start"}>
            <ListHeader>We accept</ListHeader>
            <Flex flexWrap={"wrap"}>
              {/* <Image  w="300px" h="50px"  src="https://www.nicepng.com/png/detail/42-421696_visa-mastercard-amex-visa-mastercard-american-express-png.png" /> */}
              {Links.map((link,i) => (
                <Stack key={i} cursor={"pointer"} w="60px" alignItems={"center"}>
                  <Image key={link} src={link} w="95%" />
                </Stack>
              ))}
            </Flex>
          </Stack>

          <Stack marginLeft={12}>
            <ListHeader>
              Like what you see? You'll like us even more here
            </ListHeader>
            <Stack direction={"row"} spacing={15} align={"flex-end"}>
              <SocialButton label={"Facebook"} href={"#"}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={"Linkedin"} href={"#"}>
                <FaLinkedin />
              </SocialButton>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
