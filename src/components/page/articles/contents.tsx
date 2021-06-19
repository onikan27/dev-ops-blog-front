import { Box, Image, Flex } from '@chakra-ui/react'
import { ArticleType } from 'types'
import Tag from 'src/components/atoms/Tag'

type props = {
  article: ArticleType
}

export const Contents: React.FC<props> = ({ article }) => {
  return (
    <>
      <Box bg="white.white" w="100%" maxW="750px">
        <Box fontSize="26px" fontWeight="bold" textColor="text.gray">
          <h1>{article.title}</h1>
        </Box>
        <Flex flexWrap="wrap">
          {article.tags.map((el) => (
            <Tag tag={el} key={el.id} />
          ))}
        </Flex>

        <Image src={article.thumbnail.url} />
        <div dangerouslySetInnerHTML={{ __html: article.body }}></div>
      </Box>
    </>
  )
}
