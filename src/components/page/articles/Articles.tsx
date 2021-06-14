import { Box, Image, Flex } from '@chakra-ui/react'
import { Article } from 'src/components/page/articles/Article'
import { ArticleType } from 'types'
import Link from 'next/link'

type props = {
  articles: ArticleType[]
}

export const Articles: React.FC<props> = ({ articles }) => {
  return (
    <Box w="100%">
      {articles.map((el) => (
        <Link href={`/articles/${el.id}/`} key={el.id}>
          <Article article={el} />
        </Link>
      ))}
    </Box>
  )
}
