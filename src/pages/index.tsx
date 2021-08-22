import { NextPage, GetStaticProps } from 'next'
import { Box, Text, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { DefaultLayout } from 'src/components/layout/DefaultLayout'
import { MainLayout } from 'src/components/layout/MainLayout'
import { Articles } from 'src/components/page/articles/Articles'
import { ApiKey } from 'utils/api-key'
import { ArticleType } from 'types'
import { RightSideBar } from 'src/components/molecules/RightSideBar'
import { Pagenation } from 'src/components/atoms/pagenation'
import { TagType } from 'types'

const PER_PAGE = 5

type props = {
  articles: ArticleType[]
  tags: TagType[]
  topics: any
  totalArticlesCount: number
}

const Home: NextPage<props> = ({
  articles,
  tags,
  topics,
  totalArticlesCount,
}) => {
  return (
    <>
      <Head>
        <title>Onikan-Blog：New</title>
      </Head>
      <DefaultLayout>
        <MainLayout>
          <Flex flexDirection="column">
            <Box mb="32px" ml={{ sm: '8px', md: 0 }}>
              <Text fontSize="32px" fontWeight="bold">
                New
              </Text>
            </Box>
            <Articles articles={articles} />
            {totalArticlesCount > 5 && (
              <Box mx="auto" mb="16px">
                <Pagenation
                  totalCount={totalArticlesCount}
                  pathName={`/recent/`}
                />
              </Box>
            )}
          </Flex>
          <RightSideBar tags={tags} topics={topics} />
        </MainLayout>
      </DefaultLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const key = ApiKey()
  const resArticles = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/articles?limit=${PER_PAGE}`,
    key,
  )
  const articles = await resArticles.json()

  const resTags = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/tags`, key)
  const tags = await resTags.json()

  const resAllTopics = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/topics?fields=name,articles`,
    key,
  )

  const allTopics = await resAllTopics.json()

  return {
    props: {
      articles: articles.contents,
      tags: tags.contents,
      topics: allTopics.contents,
      totalArticlesCount: articles.totalCount,
    },
    revalidate: 60,
  }
}

export default Home
