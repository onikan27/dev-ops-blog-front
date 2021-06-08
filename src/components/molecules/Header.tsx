import { Box, Text, Flex, Input } from '@chakra-ui/react'
import Logo from 'src/components/atoms/Logo'
import Link from 'next/link'

type headerType = {
  topics: string[]
}

export const Header: React.FC<headerType> = ({ topics }) => {
  return (
    <Box borderBottomWidth="1px" borderBottom="solid gray.gray200" pb="8px">
      <Flex pt="12px" maxW="1200px" mx="auto" flexDirection="column">
        {/* ロゴ・検索ボックス */}
        <Flex mb="16px" justifyContent="space-between">
          <Link href="/">
            <Box cursor="pointer">
              <Logo iconSize="28px" textSize="24px" />
            </Box>
          </Link>
          {/* TODO:検索ボックス修正。検索機能を作るときに実装。 */}
          <Box w="350px">
            <Input placeholder="記事を検索" />
          </Box>
        </Flex>
        {/* トピック */}
        <Flex
          w="400px"
          justifyContent="space-between"
          color="link.gray"
          fontWeight="bold"
        >
          {topics.map((el) => (
            <Box key={el} _hover={{ color: '#7d7d7d' }} fontSize="18px">
              <Link href={`/articles/${el}`}>{el}</Link>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}
