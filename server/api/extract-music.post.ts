import { isTiktokUrl } from '../utils/typed'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { link } = body

  if (!isTiktokUrl(link)) return false

  return { link }
})

// server/api/extract-music.post.ts
// export default defineEventHandler(async (event) => {
//   try {
//     const body = await readBody(event)
//     const { url } = body

//     if (!url) {
//       throw createError({
//         statusCode: 400,
//         message: '请提供 TikTok 链接'
//       })
//     }

//     // 这里替换成你的实际接口地址
//     const response = await $fetch('YOUR_API_ENDPOINT', {
//       method: 'POST',
//       body: { url },
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })

//     return response
//   } catch (error: any) {
//     throw createError({
//       statusCode: error.statusCode || 500,
//       message: error.message || '提取音乐失败'
//     })
//   }
// })
