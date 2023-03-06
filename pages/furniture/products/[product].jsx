import {
  Box,
  Text,
  Flex,
  Image,
  SimpleGrid,
  Divider,
  Checkbox,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import style from "./products.module.css";
import React, { useEffect, useState ,useRef} from "react";
import { useDispatch, useSelector } from "react-redux";


import {
  GetProduct,
  GetSortProduct,
} from "@/reducer/Product/Product.action.js";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";
import { Pagination } from "@/components/ProductsComponents/Pagination";


const Page = () => {
  const [page,setPage] = useState(1)
  const [category,setCategory] = useState([])
  const ref = useRef()

  let router = useRouter();
  let dispatch = useDispatch();

  //console.log('routing',router.query.prints)

  const {
    query = 'all',
    print = 'all'
  } = router.query;

  let products = useSelector((store) => store.ProductManager.Data);
  let { loading } = useSelector((store) => store.ProductManager);
 
  const removeQueryParam = (param) => {
    const { pathname, query } = router;
    const params = new URLSearchParams(query);
    params.delete(param);
    router.replace(
        { pathname, query: params.toString() },
        undefined, 
        { shallow: true }
    );
};


  const filterSearch = ({prints,type,price,sort}) => {
    const { query } = router;
    if (prints) query.prints = prints;
    if (price) query.price = price;
    if(sort) query.sort = sort

    router.push({
      pathname: router.pathname,
      query: query
    });
     
    ref.current.focus()
  }

  const materialHandlear = (e) => {
    filterSearch({ prints: e.target.value });
  };
  const priceHandlear = (e) => {
    filterSearch({price: e.target.value})
  }
  const SortHandlear = (e) => {
    filterSearch({sort: e.target.value})
  }

  const handlePagination_vik = () => {
    setPage(page+1)
    console.log(page)
  }
 
  let arr = Array(18).fill(1);

  useEffect(() => {
    setCategory([router.query]) 
    if(router.query.product){
      dispatch(GetProduct(router.query));
    }
  }, [router]);

  const handlePagination = (page = 1) => {
    if(router.query.product){
      dispatch(GetProduct(router.query, page));
    }
  };

  // if(products.length === 0){
  //   return(
  //     <Text>Opps! No Product Folund</Text>
  //   )
  // }

  return (
    <Box pb='50px' bg='EFF7F7'>
      <Box m={{ base: "1px", md: "1px" }} textAlign="center"  className={style.headerBox} display='none'>
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
              <Checkbox
                size="lg"
                colorScheme="orange"
                value={'all'}
                onChange={()=>removeQueryParam('sort')}
                isChecked={ category[0] && category[0].prints==='all'?true:false}
              >
                Reset
              </Checkbox><br />
           
               <Checkbox
                  size="lg"
                  colorScheme="orange"
                  value={"desc"}
                  onChange={SortHandlear}
                  isChecked={ category[0] && category[0].sort==='desc'?true:false}
                >
                  High Price First
                </Checkbox>
               <br />
                <Checkbox
                  size="lg"
                  colorScheme="orange"
                  value={"asc"}
                  onChange={SortHandlear}
                  isChecked={ category[0] && category[0].sort==='asc'?true:false}
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
                value={'all'}
                onChange={()=>removeQueryParam('prints')}
                isChecked={ category[0] && category[0].prints==='all'?true:false}
              >
                Reset
              </Checkbox><br />
           
              <Checkbox
                size="lg"
                colorScheme="orange"
                value={"Solid"}
                onChange={materialHandlear}
                isChecked={ category[0] && category[0].prints==='Solid'?true:false}
              >
                Solid
              </Checkbox>
              <br />
              <Checkbox
                size="lg"
                colorScheme="orange"
                value={"Pattern"}
                onChange={materialHandlear}
                isChecked={ category[0] && category[0].prints==='Pattern'?true:false}
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
                value={'all'}
                onChange={()=>removeQueryParam('price')}
                isChecked={ category[0] && category[0].price===''?true:false}
              >
                Reset
              </Checkbox>
              <br />

              <Checkbox 
                
                size="lg"
                colorScheme="orange"
                value={'100000'}
                onChange={priceHandlear}
                isChecked={ category[0] && category[0].price==='100000'?true:false}
              >
                Over ₹ 1,00,000
              </Checkbox>
              <br />

              <Checkbox
                size="lg"
                colorScheme="orange"
                value={'50000-100000'}
              
                  onChange={priceHandlear}
                  isChecked={category[0] && category[0].price==='50000-100000'?true:false}
             
              >
                ₹ 50,000 To ₹ 1,00,000
              </Checkbox>
              <br />

              <Checkbox
                size="lg"
                colorScheme="orange"
                value={'25000-50000'}
              
                  onChange={priceHandlear}
                  isChecked={ category[0] && category[0].price==='25000-50000'?true:false}
              >
                ₹ 25,000 To ₹ 50,000
              </Checkbox>
              <br />

              <Checkbox
                size="lg"
                colorScheme="orange"
                value={'0-25000'}
               
                  onChange={priceHandlear}
                  isChecked={ category[0] && category[0].price==='0-25000'?true:false}
              >
                Under ₹ 25000
              </Checkbox>
              <br />
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
                    key={i}
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
                :products && products.map((ele) => (
                   ele && <Box key={ele && ele.id} p="5px" border={'2px solid #c6b38e'} rounded='sm'>
                      <Link   href={ ele ?`/furniture/products/productid/${ele.id}`:''}>
                        <Box position="relative" className={style.cardimg}>
                          <Image w="100%" src={ ele && ele.image} />
                        </Box>
                      </Link>

                      <Box mt="15px">
                        <Text mb="10px" className={style.name}>
                          {ele && ele.name}
                        </Text>
                        <Flex gap="10px" alignItems="center">
                          <Text
                            as="b"
                            color="orange"
                            fontSize={{ base: "sm", md: "xl" }}

                              >
                                ₹ {ele &&  ele.price}
                              </Text>
                              <Text color="#2e2c2c" as="del">
                                ₹{" "}
                                {Math.floor( ele && ele.price * (ele && ele.discount * 0.01)) +
                                 ele &&  ele.price}
                              </Text>
                            </Flex>
                            <Text
                              fontSize={{ base: "sm", md: "xl" }}
                              color="#6cb061"
                              as="b"
                            >
                              {ele && ele.discount}% off
                            </Text>
                            <Flex alignItems="center" gap="5px">
                              <Text fontSize="sm">Earn Cashback</Text>
                              <Text>
                                {Math.floor(ele && ele.price * (ele && ele.discount * 0.01))}
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
