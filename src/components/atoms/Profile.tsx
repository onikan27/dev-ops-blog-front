import { Box, Text, Image } from '@chakra-ui/react'

export const Profile: React.FC = () => {
  return (
    <Box bg="white.white" p="16px">
      {/* プロフィール画像 */}
      <Box w="100px" h="100px" borderRadius="100%" mx="auto">
        <Image src="Image/golang.png" />
      </Box>
      {/* 名前 */}
      <Box>
        <Text>おにかん</Text>
      </Box>
      {/* 自己紹介（文章は仮置き） */}
      <Box>
        <Text>
          SaaSスタートアップのエンジニア,PM,執行役員。｜20歳｜スタートアップ←ベンチャー←休学←法政経済｜エンジニアリング,サービス開発,スタートアップについて呟きます。｜最近はRailsとNext.jsのSPA開発したり、React
          Nativeでアプリ開発したり、AWSでインフラ担当してます。｜DevOpsが好き。
        </Text>
      </Box>
    </Box>
  )
}
