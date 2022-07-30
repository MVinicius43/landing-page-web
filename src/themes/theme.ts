
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    primary: {
      200: "#6357FF"
    }
  },
  fonts: {
    heading: `'Montserrat'`
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '50em',
    xl: '80em',
  }
})