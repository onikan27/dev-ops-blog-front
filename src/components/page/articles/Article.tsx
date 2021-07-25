import { Box, Image, Flex, Text } from '@chakra-ui/react'
import Tag from 'src/components/atoms/Tag'
import Link from 'next/link'
import { ArticleType } from 'types'
import dayjs from 'dayjs'

type props = {
  article: ArticleType
}

export const Article: React.FC<props> = ({ article }) => {
  return (
    <Link href={`/articles/${article.id}`}>
      <Flex
        bg="white.white"
        w="100%"
        minH="238px"
        maxW={{ sm: '100%', md: '100%', lg: '750px' }}
        cursor="pointer"
        borderRadius="8px"
        boxShadow="0 1px 8px 0 rgb(0 0 0 / 15%)"
        _hover={{ boxShadow: '0 1px 8px 0 rgb(0 0 0 / 30%)' }}
        flexDirection={{ sm: 'column', md: 'row' }}
      >
        <Box w={{ sm: '100%', md: '35%' }}>
          <Image
            src={article?.thumbnail?.url}
            borderRadius="8px"
            w="100%"
            h={{ sm: '180px', md: '100%' }}
            objectFit="contain"
          />
        </Box>
        <Box p="16px" w={{ sm: '100%', md: '65%' }} position="relative">
          <Box mb="16px">
            <Text fontSize="24px" fontWeight="bold">
              {article?.title}
            </Text>
          </Box>
          <Box mb="16px" minH={{ sm: '100px', md: '50px' }}>
            <Text color="text.gray" fontSize="14px">
              {article.description}
            </Text>
          </Box>
          <Flex flexWrap="wrap" alignItems="center">
            {article?.tags?.map((tag, idx) => (
              <Box key={idx} mr="16px">
                <Tag tag={tag} />
              </Box>
            ))}
          </Flex>
          <Box position="absolute" right="16px" bottom="8px">
            <Text fontSize="12px" color="text.gray">
              {dayjs(article.updatedAt).format('YYYY/MM/DD (dd)  HH:mm')}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Link>
  )
}
