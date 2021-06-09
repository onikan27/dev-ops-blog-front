import { Box, Image, Flex, Text } from '@chakra-ui/react'
import Tag from 'src/components/atoms/Tag'
import Link from 'next/link'

const tags = [
  { name: 'Rails' },
  { name: 'React' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
]

export const Article: React.FC = () => {
  return (
    <Link href="/">
      <Flex
        bg="white.white"
        w="100%"
        maxW="750px"
        h="200px"
        cursor="pointer"
        borderRadius="8px"
        boxShadow="0 1px 8px 0 rgb(0 0 0 / 15%)"
        _hover={{ boxShadow: '0 1px 8px 0 rgb(0 0 0 / 30%)' }}
      >
        <Box w="35%">
          <Image
            src="/Image/test.png"
            borderRadius="8px"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
        <Box p="16px" w="65%" position="relative">
          <Box mb="16px">
            <Text fontSize="24px" fontWeight="bold">
              タイトル
            </Text>
          </Box>
          <Box mb="16px">
            <Text color="text.gray" fontSize="14px">
              ディスクリプションディスクリプションディスクリプションディスクリプションディスクリプションディスクリプションディスクリプションディスクリプションディスクリプション
            </Text>
          </Box>
          <Flex flexWrap="wrap">
            {tags.map((tag) => (
              <Tag tag={tag} key={tag.name} />
            ))}
          </Flex>
          <Box position="absolute" right="8px" bottom="8px">
            <Text fontSize="12px" color="text.gray">
              2021年5月21日
            </Text>
          </Box>
        </Box>
      </Flex>
    </Link>
  )
}
