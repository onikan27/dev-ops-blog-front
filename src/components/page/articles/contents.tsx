import { useEffect } from 'react'
import hljs from 'highlight.js/lib/core'
import { Text, Box, Image, Flex } from '@chakra-ui/react'
import { ArticleType } from 'types'
import styles from 'src/styles/components/page/articles/contents.module.scss'
import javascript from 'highlight.js/lib/languages/javascript'
import Tag from 'src/components/atoms/Tag'

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
        px={{ sm: '8px', md: '16px' }}
        py="16px"
        borderRadius="8px"
      >
        <Box fontSize={{ sm: '24px', md: '28px' }} fontWeight="bold" mb="16px">
          <h1>{article?.title}</h1>
        </Box>
        <Box mb="16px">
          <Text color="text.gray">{article.description}</Text>
        </Box>
        <Flex flexWrap="wrap" alignItems="center">
          {article?.tags?.map((tag, idx) => (
            <Box key={idx} mr="16px">
              <Tag tag={tag} />
            </Box>
          ))}
        </Flex>
        {article?.thumbnail?.url && (
          <Box mb="32px">
            <Image src={article?.thumbnail?.url} objectFit="fill" />
          </Box>
        )}
        <Box mt="16px" mx={{ sm: '8px', md: '16px' }}>
          <div
            className={styles.article_body}
            dangerouslySetInnerHTML={{ __html: article.body }}
          ></div>
        </Box>
      </Box>
    </>
  )
}
