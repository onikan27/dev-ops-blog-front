import { extendTheme } from '@chakra-ui/react'
import { colors } from 'src/styles/theme/foundations/colors'

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        h: '100%',
        bg: 'white',
        padding: 0,
        margin: 0,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        overflow: 'hidden',
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      '*': {
        boxSizing: 'border-box',
      },
      p: {
        color: '#3c3b37',
      },
    },
  },
  colors,
  components: {},
})
