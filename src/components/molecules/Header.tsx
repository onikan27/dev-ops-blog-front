import { Box, Text, Flex, Input } from '@chakra-ui/react'
import Logo from 'src/components/atoms/Logo'
import Link from 'next/link'

type headerType = {
  topics: string[]
}

export const Header: React.FC<headerType> = ({ topics }) => {
  return (
    <Box
      borderBottomWidth="1px"
      borderBottom="solid gray.gray200"
      pb="8px"
      px={{ sm: '16px' }}
    >
      <Flex pt="12px" maxW="1200px" mx="auto" flexDirection="column">
        {/* ロゴ・検索ボックス */}
        <Flex mb="16px" justifyContent="space-between">
          <Link href="/">
            <Box cursor="pointer">
              <Logo iconSize="28px" textSize="24px" />
            </Box>
          </Link>
        </Flex>
        {/* トピック */}
        <Flex
          w={{ sm: '100%', md: '400px' }}
          justifyContent="space-between"
          color="link.gray"
          fontWeight="bold"
        >
          <Box
            _hover={{ color: '#7d7d7d' }}
            fontSize={{ sm: '14px', md: '18px' }}
          >
            <Link href={`/topics/app`}>App</Link>
          </Box>
          <Box
            _hover={{ color: '#7d7d7d' }}
            fontSize={{ sm: '14px', md: '18px' }}
          >
            <Link href={`/topics/infra`}>Infra</Link>
          </Box>
          <Box
            _hover={{ color: '#7d7d7d' }}
            fontSize={{ sm: '14px', md: '18px' }}
          >
            <Link href={`/topics/devops`}>DevOps</Link>
          </Box>
          <Box
            _hover={{ color: '#7d7d7d' }}
            fontSize={{ sm: '14px', md: '18px' }}
          >
            <Link href={`/topics/other`}>Other</Link>
          </Box>
          {/* onikan.comリンク */}
          <Box
            _hover={{ color: '#7d7d7d' }}
            fontSize={{ sm: '14px', md: '18px' }}
          >
            <Link href="https://onikan.com/">MyProfile</Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
