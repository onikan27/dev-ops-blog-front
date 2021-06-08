import Head from 'next/head'
import { Flex, Box } from '@chakra-ui/layout'
import { DefaultLayout } from 'src/components/layout/DefaultLayout'
import { RightSideBar } from 'src/components/molecules/RightSideBar'

const Home: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <Box bgColor="bg.gray">
          <Flex maxW="1000px" mx="auto" flexDirection="column">
            <Flex justifyContent="space-between">
              <Box>メインコンテンツ</Box>
              {/* {children} */}
              <RightSideBar />
            </Flex>
          </Flex>
        </Box>
      </DefaultLayout>
    </>
  )
}

export default Home
