import { extendTheme } from '@chakra-ui/react'
import { colors } from 'src/styles/theme/foundations/colors'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '1030px',
  xl: '1500px',
})

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        h: '100%',
        bg: 'white',
        padding: 0,
        margin: 0,
        fontFamily:
          '-apple-system,BlinkMacSystemFont,Helvetica Neue,Segoe UI,Hiragino Kaku Gothic ProN,Hiragino Sans,ヒラギノ角ゴ ProN W3,Arial,メイリオ,Meiryo,sans-serif',
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
  breakpoints,
})
