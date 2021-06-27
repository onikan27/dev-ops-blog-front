import { Text, Box } from '@chakra-ui/react'
import { ArticleType } from 'types'

type props = {
  article: ArticleType
}

export const Contents: React.FC<props> = ({ article }) => {
  return (
    <>
      <Box bg="white.white" w="100%" maxW="750px">
        <Text>
          ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        </Text>
        <div dangerouslySetInnerHTML={{ __html: article.body }}></div>
      </Box>
    </>
  )
}
