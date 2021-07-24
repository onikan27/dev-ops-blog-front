import { NextPage, GetServerSideProps } from 'next'
import { Box, Text, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { DefaultLayout } from 'src/components/layout/DefaultLayout'
import { MainLayout } from 'src/components/layout/MainLayout'
import { Articles } from 'src/components/page/articles/Articles'
import { ArticleType } from 'types'
import { TagType } from 'types'
import { ApiKey } from 'utils/api-key'
import { RightSideBar } from 'src/components/molecules/RightSideBar'

type props = {
  articles: ArticleType[]
  tags: TagType[]
  topics: any
}

const App: NextPage<props> = ({ articles, tags, topics }) => {
  return (
    <>
      <Head>
        <title>Onikan-Blog：APP</title>
      </Head>
      <DefaultLayout>
        <MainLayout>
          <Flex flexDirection="column">
            <Box mb="32px">
              <Text fontSize="32px" fontWeight="bold">
                App
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

export const getServerSideProps: GetServerSideProps = async () => {
  const key = ApiKey()
  const resTopics = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/topics?filters=name[contains]APP`,
    key,
  )
  const topics = await resTopics.json()

  const resTags = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/tags`, key)

  const tags = await resTags.json()

  const resAllTopics = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/topics?fields=name,articles`,
    key,
  )

  const allTopics = await resAllTopics.json()

  return {
    props: {
      articles: topics?.contents[0].articles,
      tags: tags.contents,
      topics: allTopics.contents,
    },
  }
}

export default App
