import { Box, Text, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { DefaultLayout } from 'src/components/layout/DefaultLayout'
import { MainLayout } from 'src/components/layout/MainLayout'
import { ApiKey } from 'utils/api-key'
import { NextPage, GetServerSideProps } from 'next'
import { RightSideBar } from 'src/components/molecules/RightSideBar'
import { Contents } from 'src/components/page/articles/contents'
import { ArticleType, TagType } from 'types'
import { Articles } from 'src/components/page/articles/Articles'

type props = {
  articles: ArticleType[]
  tags: TagType[]
  topics: any
  tagName: string
}

const App: NextPage<props> = ({ articles, tags, topics, tagName }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <MainLayout>
          <Flex flexDirection="column">
            <Box mb="32px">
              <Text fontSize="32px" fontWeight="bold">
                {tagName}
              </Text>
            </Box>
            <Articles articles={articles} />
          </Flex>
          <RightSideBar tags={tags} topics={topics} />
        </MainLayout>
      </DefaultLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let tagName = context?.params?.slug as string
  tagName = tagName[0].toUpperCase() + tagName.slice(1)
  if (tagName === 'Aws') {
    tagName = 'AWS'
  }
  const key = ApiKey()
  const resTagArticles = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/tags?filters=tagName[contains]${tagName}`,
    key,
  )

  const articles = await resTagArticles.json()

  const resTags = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/tags`, key)

  const tags = await resTags.json()

  const resAllTopics = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/topics?fields=name,articles`,
    key,
  )

  const allTopics = await resAllTopics.json()

  return {
    props: {
      articles: articles?.contents[0]?.articles
        ? articles?.contents[0]?.articles
        : null,
      tags: tags?.contents ? tags?.contents : null,
      topics: allTopics?.contents ? allTopics?.contents : null,
      tagName: articles?.contents[0]?.tagName[0]
        ? articles?.contents[0]?.tagName[0]
        : null,
    },
  }
}

export default App
