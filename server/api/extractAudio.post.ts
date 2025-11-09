import { isTiktokUrl } from '../utils/typed'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { link } = body

  if (!isTiktokUrl(link)) return false

  return { link }
})
