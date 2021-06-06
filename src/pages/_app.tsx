import { NextPage } from 'next'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
