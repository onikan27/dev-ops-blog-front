import { NextPage, GetStaticProps } from 'next'
import { Box, Text, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { DefaultLayout } from 'src/components/layout/DefaultLayout'
import { MainLayout } from 'src/components/layout/MainLayout'
import { Articles } from 'src/components/page/common/articles/Articles'
import { ArticleType } from 'types'
import { TagType } from 'types'
import { ApiKey } from 'utils/api-key'
import { RightSideBar } from 'src/components/molecules/RightSideBar'

type props = {
  articles: ArticleType[]
  tags: TagType[]
}

const Develop: NextPage<props> = ({ articles, tags }) => {
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
                DevOps
              </Text>
            </Box>
            <Articles articles={articles} />
          </Flex>
          <RightSideBar tags={tags} />
        </MainLayout>
      </DefaultLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const key = ApiKey()
  const resArticles = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/articles`,
    key,
  )
  const articles = await resArticles.json()

  const resTags = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/tags`, key)
  const tags = await resTags.json()

  return {
    props: {
      articles: articles.contents,
      tags: tags.contents,
    },
  }
}

export default Develop
