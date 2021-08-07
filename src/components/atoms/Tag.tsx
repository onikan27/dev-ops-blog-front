import { Image, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { TagType } from 'types'

type props = {
  tag: TagType
}

const Tag: React.FC<props> = ({ tag }) => {
  return (
    <>
      {tag && (
        <Link href={`/tags/${tag}/1`}>
          <Box
            w={{ sm: '40px', md: '35px' }}
            cursor="pointer"
            _hover={{ opacity: 0.7 }}
          >
            <Image src={`/Icon/${tag}.svg`} />
          </Box>
        </Link>
      )}
    </>
  )
}

export default Tag
