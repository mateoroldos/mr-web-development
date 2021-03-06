import { extendTheme } from "@chakra-ui/react"

const theme = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    default: {
      light: "#FFFFFF",
      dark: "#16181C",
    },
    primary: {
      100: "#7CEBB3",
      200: "#76DEAA",
      300: "#68C496",
      400: "#549E79",
      500: "#325E48",
    },
    secondary: {
      100: "#EBA171",
      200: "#DE996A",
      300: "#C4875E",
      400: "#9E6D4C",
      500: "#5E412D",
    },
  },
  fonts: {
    heading: "'Rubik', sans-serif",
    body: "'Rubik', sans-serif",
  },
}

export default extendTheme(theme)
