import { useEffect } from 'react'
import hljs from 'highlight.js/lib/core'
import { Text, Box, Image } from '@chakra-ui/react'
import { ArticleType } from 'types'
import styles from 'src/styles/components/page/articles/contents.module.scss'
import javascript from 'highlight.js/lib/languages/javascript'

type props = {
  article: ArticleType
}

hljs.registerLanguage('javascript', javascript)

export const Contents: React.FC<props> = ({ article }) => {
  useEffect(() => {
    hljs.highlightAll()
  }, [hljs])
  return (
    <>
      <Box
        bg="white.white"
        maxW={{ sm: '100%', md: '100%', lg: '750px' }}
        w="100%"
        p="16px"
        borderRadius="8px"
      >
        <Box fontSize="28px" fontWeight="bold" mb="16px">
          <h1>{article?.title}</h1>
        </Box>
        <Box>
          <Text color="text.gray">{article.description}</Text>
        </Box>
        {article?.thumbnail?.url && (
          <Box mb="32px">
            <Image src={article?.thumbnail?.url} objectFit="fill" />
          </Box>
        )}
        <Box mt="16px" mx="16px">
          <div
            className={styles.article_body}
            dangerouslySetInnerHTML={{ __html: article.body }}
          ></div>
        </Box>
      </Box>
    </>
  )
}
