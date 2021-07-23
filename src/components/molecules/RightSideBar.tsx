import { Box, Text, Flex, Grid, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { Profile } from 'src/components/page/RightSideBar/Profile'
import { Topics } from 'src/components/page/RightSideBar/Topics'
import { Tags } from 'src/components/page/RightSideBar/Tags'
import { TagType } from 'types'

const topics = [
  { name: 'App', count: 10 },
  { name: 'Infra', count: 9 },
  { name: 'DevOps', count: 12 },
  { name: 'Other', count: 5 },
]

type props = {
  tags: TagType[]
}

export const RightSideBar: React.FC<props> = ({ tags }) => {
  return (
    <Box maxW={{ sm: '100%', md: '100%', lg: '280px' }} w="100%">
      <Box
        mb="32px"
        boxShadow="0 1px 8px 0 rgb(0 0 0 / 15%)"
        _hover={{ boxShadow: '0 1px 8px 0 rgb(0 0 0 / 30%)' }}
        borderRadius="8px"
      >
        <Profile />
      </Box>
      <Box
        mb="32px"
        boxShadow="0 1px 8px 0 rgb(0 0 0 / 15%)"
        _hover={{ boxShadow: '0 1px 8px 0 rgb(0 0 0 / 30%)' }}
        borderRadius="8px"
      >
        <Topics topics={topics} />
      </Box>
      {/* タグ */}
      <Box
        boxShadow="0 1px 8px 0 rgb(0 0 0 / 15%)"
        mb={{ sm: '32px' }}
        _hover={{ boxShadow: '0 1px 8px 0 rgb(0 0 0 / 30%)' }}
        borderRadius="8px"
      >
        <Tags tags={tags} />
      </Box>
    </Box>
  )
}
