import { Text, Image, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { TagType } from 'types'

type props = {
  tag: TagType
}

const Tag: React.FC<props> = ({ tag }) => {
  return (
    <>
      {tag.tagName && tag.tagName[0] && (
        <Link href={`/tags/${tag.tagName[0].toLowerCase()}`}>
          <Box
            w={{ sm: '40px', md: '35px' }}
            cursor="pointer"
            _hover={{ opacity: 0.7 }}
          >
            <Image src={`/Icon/${tag.tagName[0]}.svg`} />
          </Box>
        </Link>
      )}
    </>
  )
}

export default Tag
