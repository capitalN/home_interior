import Navbar from "@/components/Navbar";
import { store } from "@/reducer/store";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import theme from "../components/theme";
import Cart from "@/components/Cart";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
         <Navbar /> 
        <Component {...pageProps} />
         <Footer />  
      </ChakraProvider>
    </Provider>
  );
}
