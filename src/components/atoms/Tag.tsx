import { Text, Image, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { TagType } from 'types'

type props = {
  tag: TagType
}

const Tag: React.FC<props> = ({ tag }) => {
  return (
    // TODO: Link設置
    <Link href="/">
      <Box w="30px">
        <Image src={`/Icon/${tag.tagName}.svg`} />
      </Box>
      {/* <Text
        borderRadius="32px"
        borderWidth="1px"
        backgroundColor="brand.secondary"
        borderColor="brand.secondary"
        fontSize="13px"
        px="8px"
        mb="8px"
        mr="8px"
        cursor="pointer"
        _hover={{ backgroundColor: '#b0f7cf' }}
      >
        {tag.tagName}
      </Text> */}
    </Link>
  )
}

export default Tag
