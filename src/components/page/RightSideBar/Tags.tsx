import { Box, Text, Flex } from '@chakra-ui/react'
import Tag from 'src/components/atoms/Tag'
import { TagType } from 'types'

type tagsType = {
  tags: TagType[]
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
        {tags.map((tag) => (
          <Tag tag={tag} key={tag.id} />
        ))}
      </Flex>
    </Box>
  )
}
