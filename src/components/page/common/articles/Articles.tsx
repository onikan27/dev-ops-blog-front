import { Box, Image, Flex } from '@chakra-ui/react'
import { Article } from 'src/components/page/common/articles/Article'

export const Articles: React.FC = () => {
  return (
    <Box w="100%">
      <Box mb="32px">
        <Article />
      </Box>
      <Box mb="32px">
        <Article />
      </Box>
      <Box mb="32px">
        <Article />
      </Box>
      <Box mb="32px">
        <Article />
      </Box>
    </Box>
  )
}
