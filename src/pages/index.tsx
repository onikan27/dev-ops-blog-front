import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { ArticleType } from 'types'
import { TagType } from 'types'

type props = {
  articles: ArticleType[]
  tags: TagType[]
  topics: any
  totalArticlesCount: number
}

const Home: NextPage<props> = () => {
  return (
    <>
      <Head>
        <title>Onikan-Blog：Recent</title>
      </Head>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: '/recent/1',
    },
  }
}

export default Home
