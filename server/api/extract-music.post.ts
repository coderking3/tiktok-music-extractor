import { extractValidShareUrl, getVideoId } from '../utils/extractor'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { link } = body

    if (!link) {
      throw createError({
        statusCode: 400,
        message: '请提供 TikTok 链接'
      })
    }

    const url = extractValidShareUrl(link) || ''

    const videoId = await getVideoId(url)
    console.log(`🚀 ~ videoId:`, videoId)

    const aaa = await getTiktokMusic(url)

    return { code: -1 }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || '提取音乐失败'
    })
  }
})

// server/api/extract-music.post.ts
// export default defineEventHandler(async (event) => {
// try {
//   const body = await readBody(event)
//   const { url } = body

// // 这里替换成你的实际接口地址
// const response = await getTiktokMusic(link)
// // console.log(`🚀 ~ response:`, response)

//   if (!url) {
//     throw createError({
//       statusCode: 400,
//       message: '请提供 TikTok 链接'
//     })
//   }

//   // 这里替换成你的实际接口地址
//   const response = await $fetch('YOUR_API_ENDPOINT', {
//     method: 'POST',
//     body: { url },
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })

//   return response
// } catch (error: any) {
//   throw createError({
//     statusCode: error.statusCode || 500,
//     message: error.message || '提取音乐失败'
//   })
// }
// })
