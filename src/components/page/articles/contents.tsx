import { Text, Box } from '@chakra-ui/react'
import { ArticleType } from 'types'
import styles from 'src/styles/components/page/articles/contents.module.scss'

type props = {
  article: ArticleType
}

export const Contents: React.FC<props> = ({ article }) => {
  return (
    <>
      <Box bg="white.white" w="100%" maxW="750px">
        {/* タイトルにする */}
        <Text>
          ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        </Text>
        <div
          className={styles.article_body}
          dangerouslySetInnerHTML={{ __html: article.body }}
        ></div>
      </Box>
    </>
  )
}
