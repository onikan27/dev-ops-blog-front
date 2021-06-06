import { NextPage } from 'next'
import Head from 'next/head'

type Article = {
  id: string
  title: string
  body: string
}

type props = {
  articles: Article[]
}

const Home: React.FC<props> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {articles.map((article) => (
        <div key={article.id}>
          <h1>{article.title}</h1>
          <p>{article.id}</p>
        </div>
      ))}
    </>
  )
}

export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY || '' },
  }

  const res = await fetch(`${process.env.API_ENDPOINT}/articles`, key)
  const data = await res.json()
  return {
    props: {
      articles: data.contents,
    },
  }
}

export default Home
