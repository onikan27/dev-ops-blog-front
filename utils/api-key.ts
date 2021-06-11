export const ApiKey = () => {
  return {
    headers: {
      'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY || '',
    },
  }
}
