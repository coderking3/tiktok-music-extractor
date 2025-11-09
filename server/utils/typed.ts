import { isString } from 'kedash'

const TIKTOK_VIDEO_HOST = 'v.douyin.com'

export function isTiktokUrl(str: unknown) {
  if (!isString(str)) return false

  try {
    const url = new URL(str)
    // 抖音短链接域名
    return url.hostname === TIKTOK_VIDEO_HOST
  } catch {
    return false
  }
}
