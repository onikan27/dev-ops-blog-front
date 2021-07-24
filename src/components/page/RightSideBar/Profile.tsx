import { Box, Text, Image, Flex } from '@chakra-ui/react'
// import { AiOutlineArrowRight } from 'react-icons/Ai'
import Link from 'next/link'

export const Profile: React.FC = () => {
  return (
    <Box bg="white.white" p="24px" borderRadius="8px">
      <Box w="100px" h="100px" borderRadius="100%" mx="auto">
        <Image src="/Image/golang.png" />
      </Box>
      <Box mb="8px" mt="16px">
        <Text fontSize="18px" fontWeight="bold">
          おにかん
        </Text>
      </Box>
      <Box mb="24px">
        <Text fontSize="14px" color="text.gray">
          SaaSスタートアップのエンジニアと執行役員をしています。｜スタートアップ←ベンチャー←休学←法政大学・経済学部｜最近はRailsとNext.jsのSPA開発したり、React
          Nativeでアプリ開発したり、AWSでインフラ担当してます。｜DevOpsが好き。｜
        </Text>
      </Box>
      <Link href="https://onikan.com/">
        <Flex
          alignItems="center"
          color="#69a9ff"
          cursor="pointer"
          _hover={{ color: '#3c84e6' }}
          justifyContent="flex-end"
        >
          <Text
            mr="4px"
            fontSize="12px"
            color="#69a9ff"
            _hover={{ color: '#3c84e6' }}
          >
            詳しいプロフィール
          </Text>
          {/* <AiOutlineArrowRight fontSize="12px" /> */}
        </Flex>
      </Link>
    </Box>
  )
}
