import { Box, Text, Flex, Grid, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { Profile } from 'src/components/page/common/RightSideBar/Profile'
import { Topics } from 'src/components/page/common/RightSideBar/Topics'
import { Tags } from 'src/components/page/common/RightSideBar/Tags'

const topics = [
  { name: 'App', count: 10 },
  { name: 'Infra', count: 9 },
  { name: 'DevOps', count: 12 },
  { name: 'Other', count: 5 },
]

const tags = [{ name: 'Rails' }, { name: 'React' }, { name: 'JavaScript' }]

export const RightSideBar: React.FC = () => {
  return (
    <Box maxW="280px" w="100%">
      <Box mb="32px">
        <Profile />
      </Box>
      <Box Box mb="32px">
        <Topics topics={topics} />
      </Box>
      {/* タグ */}
      <Box>
        <Tags tags={tags} />
      </Box>
    </Box>
  )
}
