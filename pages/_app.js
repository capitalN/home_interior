import Navbar from "@/components/Navbar";
import { store } from "@/reducer/store";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import theme from "./theme";


export default function App({ Component, pageProps }) {
  
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
