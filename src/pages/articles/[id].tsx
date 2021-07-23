import cheerio from 'cheerio'
import hljs from 'highlight.js'
import { NextPage, GetServerSideProps } from 'next'
import { Box, Text, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { DefaultLayout } from 'src/components/layout/DefaultLayout'
import { MainLayout } from 'src/components/layout/MainLayout'
import { ArticleType } from 'types'
import { TagType } from 'types'
import { ApiKey } from 'utils/api-key'
import { RightSideBar } from 'src/components/molecules/RightSideBar'
import { Contents } from 'src/components/page/articles/contents'

type props = {
  article: ArticleType
  tags: TagType[]
  topics: any
}

const App: NextPage<props> = ({ article, tags, topics }) => {
  return (
    <>
      <Head>
        <title>Onikan-Blog：{article.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <MainLayout>
          <Flex flexDirection="column">
            <Contents article={article} />
          </Flex>
          <RightSideBar tags={tags} topics={topics} />
        </MainLayout>
      </DefaultLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const key = ApiKey()
  const id = context?.params?.id as string
  const resArticle = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/articles?filters=id[equals]${id}`,
    key,
  )

  const article = await resArticle.json()

  const $ = cheerio.load(article.contents[0].body)

  $('pre > code').each((i, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })

  const resTags = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/tags`, key)
  const tags = await resTags.json()

  const resAllTopics = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/topics?fields=name,articles`,
    key,
  )

  const allTopics = await resAllTopics.json()

  return {
    props: {
      article: article.contents[0],
      tags: tags.contents,
      topics: allTopics.contents,
    },
  }
}

export default App
