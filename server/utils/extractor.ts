import type { TiktokAPIResponse, TiktokMusicResult } from '../types'

/**
 * 获取重定向后的URL
 * @param shortUrl 短链接
 */
export async function getRedirectUrl(shortUrl: string): Promise<string | null> {
  try {
    const response = await fetch(shortUrl, {
      method: 'GET',
      redirect: 'manual', // 关键：不自动跟随重定向
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        // 'User-Agent':
        //   'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36',
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8'
      }
    })

    // 从响应头中获取 Location（重定向地址）
    const location = response.headers.get('location')
    return location
  } catch (error) {
    console.error('获取重定向链接失败:', error)
    return null
  }
}

/**
 * 获取抖音视频背景音乐
 * @param url 抖音分享链接（如：https://v.douyin.com/xxx/）
 */
export async function getTiktokMusic(url: string): Promise<TiktokMusicResult> {
  try {
    // 1. 请求短链接，获取重定向后的真实链接
    const redirectUrl = await getRedirectUrl(url)
    console.log(`🚀 ~ redirectUrl:`, redirectUrl)

    if (!redirectUrl) {
      return { code: -1, msg: '获取重定向链接失败' }
    }

    // 2. 从真实链接中提取视频ID
    const itemIdMatch = redirectUrl.match(/video\/(\w+)\//)
    if (!itemIdMatch || !itemIdMatch[1]) {
      return { code: -1, msg: '解析链接失败' }
    }

    const itemId = itemIdMatch[1]

    // 3. 调用抖音API获取视频详细信息
    const apiUrl = `https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids=${itemId}`
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Referer: 'https://www.douyin.com/',
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8'
      }
    })

    if (!response.ok) {
      return { code: -1, msg: `请求失败: ${response.status}` }
    }

    const data: TiktokAPIResponse = await response.json()
    const itemList = data?.item_list?.[0]

    if (!itemList) {
      return { code: -1, msg: '获取详细信息失败' }
    }

    // 4. 提取所需信息
    const { author, desc, music } = itemList

    return {
      code: 1,
      nickname: author.nickname,
      unique_id: author.unique_id,
      desc,
      author_tx: author.avatar_larger.url_list[0],
      music_url: music.play_url.uri
    }
  } catch (error) {
    console.error('解析抖音视频失败:', error)
    return {
      code: -1,
      msg: error instanceof Error ? error.message : '未知错误'
    }
  }
}
