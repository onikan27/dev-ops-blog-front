import { Text, Box } from '@chakra-ui/react'
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
      >
        <Box>
          <h1>記事タイトル（h1）</h1>
        </Box>
        <div
          className={styles.article_body}
          dangerouslySetInnerHTML={{ __html: article.body }}
        ></div>
      </Box>
    </>
  )
}
