const { extendTheme, withDefaultColorScheme, withDefaultVariant } = require("@chakra-ui/react");

const theme = extendTheme({
    colors: {
      brand: {
        100: "#FF9235",
        200: "#FF8B35",
        300: "#FF8435",
        400: "#FF7D35",
        500: "#FF7735",
        600: "#FF7035",
        700: "#FF6935",
        800: "#FF6335",
        900: "#FF5C35",
      }
    }
  },
  withDefaultColorScheme({
    colorScheme: "brand",
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input"]
  }));

  export default theme;