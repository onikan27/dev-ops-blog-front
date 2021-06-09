import Head from 'next/head'
import { Flex, Box } from '@chakra-ui/layout'
import { DefaultLayout } from 'src/components/layout/DefaultLayout'
import { MainLayout } from 'src/components/layout/MainLayout'
import { RightSideBar } from 'src/components/molecules/RightSideBar'
import { Articles } from 'src/components/page/common/articles/Articles'

const Home: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <MainLayout>
          <Flex maxW="1100px" mx="auto" flexDirection="column">
            <Flex justifyContent="space-around" mt="32px" mx="auto" w="100%">
              <Articles />
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
