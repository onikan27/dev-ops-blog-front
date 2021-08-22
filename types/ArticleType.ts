export type ArticleType = {
  id: string
  title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  body: string
  description: string
  thumbnail: {
    url: string
    height: number
    width: number
  }
  tags: string[]
}
