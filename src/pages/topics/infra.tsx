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

const Infra: NextPage<props> = ({ articles, tags, topics }) => {
  return (
    <>
      <Head>
        <title>Onikan-Blog：Infra</title>
      </Head>
      <DefaultLayout>
        <MainLayout>
          <Flex flexDirection="column">
            <Box mb="32px">
              <Text fontSize="32px" fontWeight="bold">
                Infra
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
  const page = Number(context?.query?.page ? context?.query?.page : 1)
  const key = ApiKey()
  const resTopics = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/topics?filters=name[contains]Infra`,
    key,
  )
  const topics = await resTopics.json()

  const articlesPages = topics?.contents[0]?.articles.slice(
    (page - 1) * 5,
    (page - 1) * 5 + 5,
  )

  const resTags = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/tags`, key)

  const tags = await resTags.json()

  const resAllTopics = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/topics?fields=name,articles`,
    key,
  )

  const allTopics = await resAllTopics.json()

  return {
    props: {
      articles: articlesPages,
      tags: tags.contents,
      topics: allTopics.contents,
    },
  }
}

export default Infra
