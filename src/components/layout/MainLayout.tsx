import { Box } from '@chakra-ui/layout'

export const MainLayout: React.FC = ({ children }) => {
  return (
    <Box minH="100vh" bgColor="bg.gray">
      {children}
    </Box>
  )
}
