import Head from 'next/head'
import { Flex, Box } from '@chakra-ui/layout'
import { DefaultLayout } from 'src/components/layout/DefaultLayout'
import { MainLayout } from 'src/components/layout/MainLayout'
import { RightSideBar } from 'src/components/molecules/RightSideBar'

const Home: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <MainLayout>
          <Flex maxW="1000px" mx="auto" flexDirection="column">
            <Flex justifyContent="space-between" mt="32px">
              <Box>メインコンテンツ</Box>
              {/* {children} */}
              <RightSideBar />
            </Flex>
          </Flex>
        </MainLayout>
      </DefaultLayout>
    </>
  )
}

export default Home
