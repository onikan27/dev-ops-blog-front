import { Box, Text, Image, Flex } from '@chakra-ui/react'
import { AiOutlineArrowRight } from 'react-icons/Ai'
import Link from 'next/link'

type topicsType = {
  topics: {
    name: string
    count: number
  }[]
}

export const Topics: React.FC<topicsType> = ({ topics }) => {
  return (
    <Box bg="white.white" p="24px">
      <Box mb="24px">
        <Text fontSize="20px" fontWeight="bold">
          Topics
        </Text>
      </Box>
      <Box color="link.gray" _hover={{ color: '#7d7d7d' }}>
        {topics.map((topic) => (
          <Box
            key={topic.name}
            mb="8px"
            pb="8px"
            borderBottomWidth="1px"
            borderBottomColor="border.gray"
            cursor="pointer"
          >
            <Text
              fontSize="18px"
              color="link.gray"
              fontWeight="bold"
              _hover={{ color: '#7d7d7d' }}
              key={topic.name}
            >
              {topic.name}（{topic.count}）
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
