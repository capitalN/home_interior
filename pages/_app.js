import { store } from "@/reducer/store";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import Cart from "@/components/Cart/cart";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Cart/>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
