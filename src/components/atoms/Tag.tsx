import { Text } from '@chakra-ui/react'
import Link from 'next/link'

type TagType = {
  tag: {
    // TODO：enumにする。
    name: string
  }
}

const Tag = ({ tag }: TagType) => {
  return (
    // TODO: Link設置
    <Link href="/">
      <Text
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
        {tag.name}
      </Text>
    </Link>
  )
}

export default Tag
