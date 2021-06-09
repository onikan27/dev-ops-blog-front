import { Box, Text, Flex, Grid, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { Profile } from 'src/components/atoms/RightSideBar/Profile'
import { Topics } from 'src/components/atoms/RightSideBar/Topics'
import { Tags } from 'src/components/atoms/RightSideBar/Tags'

const topics = [
  { name: 'App', count: 10 },
  { name: 'Infra', count: 9 },
  { name: 'DevOps', count: 12 },
  { name: 'Other', count: 5 },
]

const tags = [
  { name: 'Rails' },
  { name: 'React' },
  { name: 'JavaScript' },
  { name: 'JavaScript' },
  { name: 'JavaScript' },
]

export const RightSideBar: React.FC = () => {
  return (
    <Box maxW="280px">
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
