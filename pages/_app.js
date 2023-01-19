import Navbar from "@/components/Navbar";
import { store } from "@/reducer/store";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import theme from "./theme";
import Cart from "@/components/Cart";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
