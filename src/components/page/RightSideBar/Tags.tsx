import { Box, Text, Flex } from '@chakra-ui/react'
import Tag from 'src/components/atoms/Tag'
import { TagObjectType } from 'types'

type tagsType = {
  tags: TagObjectType[]
}

export const Tags: React.FC<tagsType> = ({ tags }) => {
  return (
    <Box bg="white.white" p="24px" borderRadius="8px">
      <Box mb="24px">
        <Text fontSize="20px" fontWeight="bold">
          Tags
        </Text>
      </Box>
      <Flex flexWrap="wrap" alignItems="center">
        {tags.map((tag, index) => {
          const tagName = tag.tagName
          return (
            <Box key={index} mr="8px" mb="8px">
              <Tag tag={tagName} />
            </Box>
          )
        })}
      </Flex>
    </Box>
  )
}
