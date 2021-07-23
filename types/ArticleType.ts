export type ArticleType = {
  id: string
  title: string
  createdAt: string
  updatedAt: string
  body: string
  description: string
  thumbnail: {
    url: string
    height: number
    width: number
  }
  tags: {
    id: string
    createdAt: string
    updatedAt: string
    tagName: string
  }[]
}
