import { Box, Text, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { DefaultLayout } from 'src/components/layout/DefaultLayout'
import { MainLayout } from 'src/components/layout/MainLayout'
import { ApiKey } from 'utils/api-key'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { RightSideBar } from 'src/components/molecules/RightSideBar'
import { ArticleType, TagType } from 'types'
import { Articles } from 'src/components/page/articles/Articles'
import { Pagenation } from 'src/components/atoms/pagenation'

const PER_PAGE = 5

type props = {
  articles: ArticleType[]
  tags: TagType[]
  topics: any
  tagName: string
  totalArticlesCount: number
}

const App: NextPage<props> = ({
  articles,
  tags,
  topics,
  tagName,
  totalArticlesCount,
}) => {
  return (
    <>
      <Head>
        <title>Onikan-Blog：{tagName}</title>
        <meta property="og:site_name" content={`Onikan-Blog：${tagName}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@1027_onikan" />
        <meta name="twitter:title" content={`Onikan-Blog：${tagName}`} />
        <meta property="og:url" content="https://www.onikan-blog.com/" />
        <meta property="og:type" content="website" />
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
            {totalArticlesCount > 5 && (
              <Box mx="auto" mb="16px">
                <Pagenation
                  totalCount={totalArticlesCount}
                  pathName={`/tags/${tagName.toLowerCase()}/`}
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

export const getStaticProps: GetStaticProps = async (context) => {
  let tagName = context?.params?.slug as string
  const page = Number(context?.params?.page ? context?.params?.page : 1)
  tagName = tagName[0].toUpperCase() + tagName.slice(1)
  if (tagName === 'Aws') {
    tagName = 'AWS'
  } else if (tagName === 'Ts') {
    tagName = 'TS'
  } else if (tagName === 'Js') {
    tagName = 'JS'
  }

  const key = ApiKey()
  const resTagArticles = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/tags?filters=tagName[contains]${tagName}`,
    key,
  )

  const articles = await resTagArticles.json()
  const articlesAry = articles?.contents[0]?.articles

  articlesAry.sort((el: ArticleType, comparison: ArticleType) => {
    if (el.publishedAt < comparison.publishedAt) {
      return 1
    } else {
      return -1
    }
  })

  const articlesPages = articlesAry.slice((page - 1) * 5, (page - 1) * 5 + 5)

  const resTags = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/tags`, key)

  const tags = await resTags.json()

  const resAllTopics = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/topics?fields=name,articles`,
    key,
  )

  const allTopics = await resAllTopics.json()

  return {
    props: {
      articles: articlesPages ? articlesPages : null,
      tags: tags?.contents ? tags?.contents : null,
      topics: allTopics?.contents ? allTopics?.contents : null,
      tagName: articles?.contents[0]?.tagName[0]
        ? articles?.contents[0]?.tagName[0]
        : null,
      totalArticlesCount: articles?.contents[0]?.articles?.length,
    },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const key = ApiKey()
  const tags = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/tags`, key)

  const tags_json = await tags.json()

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  const paths: string[] = []

  tags_json.contents.map((tag: any) => {
    const elementPath = range(1, Math.ceil(tag.articles.length / PER_PAGE)).map(
      (page) => `/tags/${tag.tagName}/${page}`,
    )
    paths.push(...elementPath)
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export default App
