import { Box, Image, Flex } from '@chakra-ui/react'
import { Article } from 'src/components/page/common/articles/Article'
import { ArticleType } from 'types'

type props = {
  articles: ArticleType[]
}

export const Articles: React.FC<props> = ({ articles }) => {
  return (
    <Box w="100%">
      {articles.map((el) => (
        <Box key={el.id}>
          <Article article={el} />
        </Box>
      ))}
    </Box>
  )
}
