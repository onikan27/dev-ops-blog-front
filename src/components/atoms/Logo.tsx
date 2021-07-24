import { Box, Text, Flex } from '@chakra-ui/react'
// import { BsTerminal } from 'react-icons/Bs'

type LogoType = {
  iconSize: string
  textSize: string
}

const Logo = ({ iconSize, textSize }: LogoType) => {
  return (
    <Flex alignItems="center">
      {/* <Box fontSize={iconSize} mr="8px" color="brand.primary">
        <BsTerminal />
      </Box> */}
      <Text fontSize={textSize} fontWeight="bold">
        DevOni
      </Text>
    </Flex>
  )
}

export default Logo
