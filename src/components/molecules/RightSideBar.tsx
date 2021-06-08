import { Box, Text, Flex, Grid, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { Profile } from 'src/components/atoms/Profile'

export const RightSideBar: React.FC = () => {
  return (
    <Box maxW="275px">
      <Profile />

      {/* トピック */}
      <Box>
        <Text>トピック</Text>
        <Text>App</Text>
        <Text>Infra</Text>
        <Text>DevOps</Text>
        <Text>Other</Text>
      </Box>
      {/* タグ */}
      <Box>
        <Text>タグ</Text>
        <Grid>
          <Text>Rails</Text>
          <Text>React</Text>
        </Grid>
      </Box>
    </Box>
  )
}
