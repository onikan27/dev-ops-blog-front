import { Box } from '@chakra-ui/layout'
import { Header } from 'src/components/molecules/Header'

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Box minW="100vw" maxW="100vw" minH="100vh" maxH="100vh" overflow="scroll">
      <Box>
        <Header />
      </Box>
      {children}
    </Box>
  )
}
