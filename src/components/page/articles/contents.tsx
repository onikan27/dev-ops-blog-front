import { Text, Box, Image } from '@chakra-ui/react'
import { ArticleType } from 'types'
import styles from 'src/styles/components/page/articles/contents.module.scss'

type props = {
  article: ArticleType
}

export const Contents: React.FC<props> = ({ article }) => {
  return (
    <>
      <Box
        bg="white.white"
        maxW={{ sm: '100%', md: '100%', lg: '750px' }}
        w="100%"
        p="16px"
        borderRadius="8px"
      >
        <Box fontSize="25px" fontWeight="bold" mb="16px">
          <h1>{article.title}</h1>
        </Box>
        <Text color="text.gray">{article.description}</Text>
        {article?.thumbnail?.url && (
          <Box>
            <Image src={article?.thumbnail?.url} />
          </Box>
        )}
        <div
          className={styles.article_body}
          dangerouslySetInnerHTML={{ __html: article.body }}
        ></div>
      </Box>
    </>
  )
}
