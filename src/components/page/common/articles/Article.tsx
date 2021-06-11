import { Box, Image, Flex, Text } from '@chakra-ui/react'
import Tag from 'src/components/atoms/Tag'
import Link from 'next/link'
import { ArticleType } from 'types'

type props = {
  article: ArticleType
}

export const Article: React.FC<props> = ({ article }) => {
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
              {article.title}
            </Text>
          </Box>
          <Box mb="16px">
            <Text color="text.gray" fontSize="14px">
              {article.description}
            </Text>
          </Box>
          <Flex flexWrap="wrap">
            {article.tags.map((tag) => (
              <Tag tag={tag} key={tag.id} />
            ))}
          </Flex>
          <Box position="absolute" right="16px" bottom="8px">
            <Text fontSize="12px" color="text.gray">
              {article.createdAt}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Link>
  )
}
