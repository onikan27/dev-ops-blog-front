import { Flex, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

type PagenationType = {
  pathName: string
  totalCount: number
}

export const Pagenation = ({ pathName, totalCount }: PagenationType) => {
  const router = useRouter()
  const currentPage = Number(router?.query?.page ? router?.query?.page : 1)
  const PER_PAGE = 5

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <Flex>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <>
          {currentPage === number ? (
            <Box key={index} fontSize="20px" ml="16px" fontWeight="bold">
              <p>{number}</p>
            </Box>
          ) : (
            <Box
              key={index}
              color="link.blue"
              fontSize="20px"
              ml="16px"
              fontWeight="bold"
            >
              <Link href={`${pathName}?page=${number}`}>
                <a>{number}</a>
              </Link>
            </Box>
          )}
        </>
      ))}
    </Flex>
  )
}
