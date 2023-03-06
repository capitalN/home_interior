import {
  Box,
  Text,
  Flex,
  Image,
  SimpleGrid,
  Divider,
  RadioGroup,
  Checkbox,
  Radio
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import style from "./products.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  GetProduct,
  GetfilterProduct,
  GetSortProduct,
  GetfilterData,
  GetByType,
} from "@/reducer/Product/Product.action.js";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";
import { Pagination } from "@/components/ProductsComponents/Pagination";

const Page = () => {
  let router = useRouter();
  let dispatch = useDispatch();

  let products = useSelector((store) => store.ProductManager.Data);
  let { loading } = useSelector((store) => store.ProductManager);

  let arr = Array(18).fill(1);

  useEffect(() => {
    dispatch(GetProduct(router.query.product));
  }, [router, dispatch]);

  const handlePagination = (page = 1) => {
    dispatch(GetProduct(router.query.product, page));
  };

  return (
    <Box pb='50px' bg='EFF7F7'>
      <Box m={{ base: "1px", md: "1px" }} textAlign="center"  className={style.headerBox} >
        <Text className={style.headtext} as="b" bg='orange'>
          Shopping for Living Room
        </Text>
        <Flex className={style.header} mt="20px" gap="20px">
          <Link href="/furniture/products/sofa">
            {" "}
            <Box w={{base:'80px',md:'120px'}}>
              <Image
                src="https://ii1.pepperfry.com/media/catalog/product/b/a/494x544/bali-2-seater-sofa-in-blue-colour-by-trevi-furniture-bali-2-seater-sofa-in-blue-colour-by-trevi-furn-xnwtwh.jpg"
                alt="Sofa"
              />
              <Text as='b' color='white'>Sofa</Text>
            </Box>
          </Link>
          <Link href="/furniture/products/wingchair">
            <Box w={{base:'80px',md:'120px'}}>
              {" "}
              <Image
                src="https://ii1.pepperfry.com/media/catalog/product/p/a/800x880/panas-wing-chair-in-sea-green-by-febonic-panas-wing-chair-in-sea-green-by-febonic-wbf32h.jpg"
                alt="Chairs"
              ></Image>
               <Text as='b' color='white'>wingchair</Text>
            </Box>
          </Link>
          <Link href="/furniture/products/table">
            <Box w={{base:'80px',md:'120px'}}>
              <Image
                src="https://ii2.pepperfry.com/media/catalog/product/s/i/494x544/siramika-solid-wood-coffee-table-in-honey-oak-finish-by-mudramark-siramika-solid-wood-coffee-table-i-x7zyhj.jpg"
                alt="table"
              />
             <Text as='b' color='white'>Table</Text>
            </Box>
          </Link>
          <Link href="/furniture/products/wingchair">
            <Box w={{base:'80px',md:'120px'}}>
              <Image
                src="https://ii1.pepperfry.com/media/catalog/product/r/o/800x880/royal-luxurious-high-back-wing-chair-in-blue-color-by-dreamzz-furniture-royal-luxurious-high-back-wi-j2qhwy.jpg"
                alt="chairs"
              />
               <Text as='b' color='white'>Sofachair</Text>
            </Box>
          </Link>
        </Flex>
      </Box>

      <Divider bgColor="grey"></Divider>

      <Box w={{ base: "99%", md: "90%" }} margin="auto">
       
        <Flex gap="20px" position="relative" >
          <Box className={style.sidebar} w="25%" pt="30px" pb="4rem" >
            <Box className={style.filterbox} >
            <Text bg='orange' fontWeight='bold' p='5px' fontSize='18px' fontFamily='serif' mb='15px'>Filter</Text>
              <Text as="b">Sort By</Text>
              <br />
              <Box m="5px">
               <RadioGroup>
               <Radio
                  size="lg"
                  colorScheme="orange"
                  value={"desc"}
                  onChange={(e) =>
                    dispatch(GetSortProduct(e, router.query.product))
                  }
                >
                  High Price First
                </Radio>
               <br />
                <Radio
                  size="lg"
                  colorScheme="orange"
                  value={"asc"}
                  onChange={(e) =>
                    dispatch(GetSortProduct(e, router.query.product))
                  }
                >
                  Low Price First
                </Radio>
                <br />
               </RadioGroup>
              </Box>
            </Box>

            <Box className={style.filterbox} pt="20px">
              <Text as="b">Material</Text>
              <br />
              <RadioGroup>
              <Radio
                size="lg"
                colorScheme="orange"
                value={"Solid"}
                onChange={(e) =>
                  dispatch(GetfilterData(e, router.query.product))
                }
              >
                Solid
              </Radio>
              <br />
              <Radio
                size="lg"
                colorScheme="orange"
                value={"Pattern"}
                onChange={(e) =>
                  dispatch(GetfilterData(e, router.query.product))
                }
              >
                Pattern
              </Radio>
              <br />
              </RadioGroup>
             
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
          <Box pb="4rem" className={style.productbar} w={{ base: "99%", md: "75%" }}>
            <Pagination
              handlePagination={handlePagination}
              lastEl={products[products.length - 1]}
            />
            <SimpleGrid
              columns={{ base: 2, md: 3 }}
              spacing="5px"
              m="auto"
              mt="30px"
              
            >
              {loading
                ? arr.map((el, i) => (
                    <Box
                      border="1px solid grey"
                      width="100%"
                      height="10rem"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Loader />
                    </Box>
                  ))
                : products.map((ele) => (
                    <Box key={ele.id} p="5px" border={'2px solid #c6b38e'} rounded='sm'>
                      <Link href={`/furniture/products/productid/${ele.id}`}>
                        <Box position="relative" className={style.cardimg}>
                          <Image w="100%" src={ele.image} />
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
                      )
                  )}
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Page;
