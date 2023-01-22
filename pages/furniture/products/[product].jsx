import {
  Box,
  Text,
  Flex,
  Image,
  SimpleGrid,
  Divider,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import style from "./products.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SmallAddIcon } from "@chakra-ui/icons";
import { PostToCart } from "@/reducer/Cart/Cart.action";

import {
  GetProduct,
  GetfilterProduct,
  GetSortProduct,
  getfilterdata,
  GetfilterData,
  GetByType,
} from "@/reducer/Product/Product.action.js";
import Link from "next/link";

const Page = () => {
  let router = useRouter();
  let dispatch = useDispatch();

  let products = useSelector((store) => store.ProductManager.Data);
  let { loading } = useSelector((store) => store.ProductManager);

  useEffect(() => {
    dispatch(GetProduct(router.query.product));
  }, [router, dispatch]);

  return (
    <Box>
      {/* <Text>{router.query.product}</Text> */}
      <Box m={{ base: "10px", md: "50px" }} textAlign="center" bg="">
        <Text className={style.headtext} as="b">
          Shopping for Living Room
        </Text>
        <Flex className={style.header} mt="20px" gap="20px">
          <Link href="/furniture/products/sofa">
            {" "}
            <Box>
              <Image
                src="https://ii1.pepperfry.com/media/catalog/product/b/a/494x544/bali-2-seater-sofa-in-blue-colour-by-trevi-furniture-bali-2-seater-sofa-in-blue-colour-by-trevi-furn-xnwtwh.jpg"
                alt="Sofa"
              />
            </Box>
          </Link>
          <Link href="/furniture/products/wingchair">
            <Box>
              {" "}
              <Image
                src="https://ii1.pepperfry.com/media/catalog/product/p/a/800x880/panas-wing-chair-in-sea-green-by-febonic-panas-wing-chair-in-sea-green-by-febonic-wbf32h.jpg"
                alt="Chairs"
              ></Image>
            </Box>
          </Link>
          <Link href="/furniture/products/table">
            <Box>
              <Image
                src="https://ii2.pepperfry.com/media/catalog/product/s/i/494x544/siramika-solid-wood-coffee-table-in-honey-oak-finish-by-mudramark-siramika-solid-wood-coffee-table-i-x7zyhj.jpg"
                alt="table"
              />
            </Box>
          </Link>
          <Link href="/furniture/products/wingchair">
            <Box>
              <Image
                src="https://ii1.pepperfry.com/media/catalog/product/r/o/800x880/royal-luxurious-high-back-wing-chair-in-blue-color-by-dreamzz-furniture-royal-luxurious-high-back-wi-j2qhwy.jpg"
                alt="chairs"
              />
            </Box>
          </Link>
        </Flex>
      </Box>
      <Divider></Divider>
      <Box w={{ base: "99%", md: "90%" }} margin="auto">
        <Flex gap="20px">
          <Box className={style.sidebar} w="25%" pt="30px">
            <Box className={style.filterbox}>
              <Text as="b">Sort By</Text>
              <br />
              <Box m="5px">
                <Checkbox
                  size="lg"
                  colorScheme="orange"
                  value={"desc"}
                  onChange={(e) =>
                    dispatch(GetSortProduct(e, router.query.product))
                  }
                >
                  High Price First
                </Checkbox>
                <br />
                <Checkbox
                  size="lg"
                  colorScheme="orange"
                  value={"asc"}
                  onChange={(e) =>
                    dispatch(GetSortProduct(e, router.query.product))
                  }
                >
                  Low Price First
                </Checkbox>
                <br />
              </Box>
            </Box>

            <Box className={style.filterbox} pt="20px">
              <Text as="b">Material</Text>
              <br />
              <Checkbox
                size="lg"
                colorScheme="orange"
                value={"Solid"}
                onChange={(e) =>
                  dispatch(GetfilterData(e, router.query.product))
                }
              >
                Solid
              </Checkbox>
              <br />
              <Checkbox
                size="lg"
                colorScheme="orange"
                value={"Pattern"}
                onChange={(e) =>
                  dispatch(GetfilterData(e, router.query.product))
                }
              >
                Pattern
              </Checkbox>
              <br />
            </Box>

            <Box className={style.filterbox} pt="20px">
              <Text as="b">Price</Text>
              <br />

              <Checkbox
                size="lg"
                colorScheme="orange"
                value={200000}
                onChange={(e) =>
                  dispatch(GetfilterProduct(e, router.query.product))
                }
              >
                Over ₹ 2,00,000
              </Checkbox>
              <br />

              <Checkbox
                size="lg"
                colorScheme="orange"
                value={100000}
                onChange={(e) =>
                  dispatch(GetfilterProduct(e, router.query.product))
                }
              >
                ₹ 1,00,000 To ₹ 2,00,000
              </Checkbox>
              <br />

              <Checkbox
                size="lg"
                colorScheme="orange"
                value={50000}
                onChange={(e) =>
                  dispatch(GetfilterProduct(e, router.query.product))
                }
              >
                ₹ 50,000 To ₹ 1,00,000
              </Checkbox>
              <br />

              <Checkbox
                size="lg"
                colorScheme="orange"
                value={0}
                onChange={(e) =>
                  dispatch(GetfilterProduct(e, router.query.product))
                }
              >
                Under ₹ 50,000
              </Checkbox>
              <br />
            </Box>

            <Box>
              {router.query.product === "sofa" ? (
                <Box>
                  <Text as="b">Sofa Type</Text>
                  <br />
                  <Checkbox
                    size="lg"
                    colorScheme="orange"
                    value={"Living Room Furniture Sets"}
                    onChange={(e) =>
                      dispatch(GetByType(e, router.query.product))
                    }
                  >
                    Living Room Furniture Sets
                  </Checkbox>
                  <br />
                  <Checkbox
                    size="lg"
                    colorScheme="orange"
                    value={"Sectional Sofas"}
                    onChange={(e) =>
                      dispatch(GetByType(e, router.query.product))
                    }
                  >
                    Sectional Sofas
                  </Checkbox>
                  <br />
                  <Checkbox
                    size="lg"
                    colorScheme="orange"
                    value={"Sofas & Couches"}
                    onChange={(e) =>
                      dispatch(GetByType(e, router.query.product))
                    }
                  >
                    Sofas & Couches
                  </Checkbox>
                  <br />
                </Box>
              ) : (
                <Box />
              )}
            </Box>
          </Box>
          <Box className={style.productbar} w={{ base: "99%", md: "75%" }}>
            <SimpleGrid
              columns={{ base: 2, md: 3 }}
              spacing="12px"
              m="auto"
              mt="30px"
            >
              {products &&
                products.map((ele) => (
                  <Box key={ele.id} className={style.productcard} p="3px">
                    <Link
                      target="_blank"
                      href={`/furniture/products/productid/${ele.id}`}
                    >
                      <Box position="relative" className={style.cardimg}>
                        <Image w="100%" src={ele.image} />
                        <Button
                          position="absolute"
                          borderRadius="0px"
                          backgroundColor="#ff7035"
                          top="80%"
                          left="30%"
                          onClick={() => {
                            let count = 1;
                            let count1 = 1;
                            let obj = { ...ele, count: count, count1: count1 };
                            PostToCart(obj);
                          }}
                          disabled={true}
                          display={{ base: "none", md: "block" }}
                        >
                          Add To Cart
                        </Button>
                      </Box>
                    </Link>

                    <Box mt="15px">
                      <Text mb="10px" className={style.name}>
                        {ele.name}
                      </Text>
                      <Flex gap="10px" alignItems="center">
                        <Text
                          as="b"
                          color="orange"
                          fontSize={{ base: "sm", md: "xl" }}
                        >
                          ₹ {ele.price}
                        </Text>
                        <Text color="#2e2c2c" as="del">
                          ₹{" "}
                          {Math.floor(ele.price * (ele.discount * 0.01)) +
                            ele.price}
                        </Text>
                      </Flex>
                      <Text
                        fontSize={{ base: "sm", md: "xl" }}
                        color="#6cb061"
                        as="b"
                      >
                        {ele.discount}% off
                      </Text>
                      <Flex alignItems="center" gap="5px">
                        <Text fontSize="sm">Earn Cashback</Text>
                        <Text>
                          {Math.floor(ele.price * (ele.discount * 0.01))}
                        </Text>
                      </Flex>
                    </Box>
                  </Box>
                ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

// export async function getServerSideProps(context) {

//     let type = context.query.product;
//     let res = await getProductbyAPI()
//     let data = res.filter((ele)=> ele.type === type)

//     return {
//       props: {products:data}, // will be passed to the page component as props
//     }
//   }

export default Page;
