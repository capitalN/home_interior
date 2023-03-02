import { Center, Flex, Image } from "@chakra-ui/react";
import React from "react";

import style from "./loader.module.css";

const Loader = () => {
  return (
    <Flex
    
      position="relative"
      direction="column"
      justifyContent="center"
      alignItems="center"
      // width={{ base: "6rem", sm: "15rem", md: "20rem" }}
      w={"100vw"}
      h="100vh"
    >
      <Image
        mixBlendMode="multiply"
        position="absolute"
        top="0px"
        left={{ base: "0%", sm: "10%", md: "10%" }}
        w="20%"
        h="auto"
        className={style.div4}
        src="https://media.tenor.com/8klrp86awEYAAAAC/cart.gif"
      />
      <div
        style={{
          width: "80%",
          border: "1px solid grey",
          borderRadius: "1rem",
          boxSizing: "border-box",
        }}
        className={style.div5}
      >
        <div className={style.div}></div>
      </div>
      <h3 className={style.text}>Please wait...</h3>
      {/* <div style={{margin:"10rem", border:"2px solid grey", 
    borderRadius:"1rem", boxSizing:"border-box"}}>
       <div className={style.div1} style={{border:"2px solid orange", backgroundColor:"blue"}}></div>
    </div>
    <div style={{margin:"10rem", 
                //  border:"2px solid red",
                 borderRadius: "50%",
                 width: "11rem",
                 height: "11rem",
                 display:"flex",
                 justifyContent:"center",
                 alignItems:"center",
                 boxSizing:"border-box"}}
                 className={style.div3}>
       <div className={style.div2} style={{border:"2px solid orange", backgroundColor:"white"}}></div>
    </div> */}
    </Flex>
  );
};

export default Loader;
