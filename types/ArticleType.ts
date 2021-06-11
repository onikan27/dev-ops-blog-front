export type ArticleType = {
  id: string
  title: string
  createdAt: string
  updatedAt: string
  body: string
  description: string
  tags: {
    id: string
    createdAt: string
    updatedAt: string
    tagName: string
  }[]
}
