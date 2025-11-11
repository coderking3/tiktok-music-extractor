const tiktokConfig = {
  headers: {
    'Accept-Language':
      'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
    Referer: 'https://www.douyin.com',
    // douyin.com;
    Cookie:
      'device_web_cpu_core=10; device_web_memory_size=8; xg_device_score=7.737467479353454; enter_pc_once=1; UIFID_TEMP=9f119777b70db29e092f16dc2972b95ccc9df01a979ae01132052c40ee3e10baf3258f79da61967cf592d5826a2a4eff69f88ad66fe9bc26b4fa9521f51a33594ae0502c9de421b22d0faeb12af2972b; x-web-secsdk-uid=7e08f709-2545-4066-820e-6a2e2a4a8b5d; s_v_web_id=verify_mhtx56ot_qyPlZ3kX_BXlV_4Gnz_8iCi_HQa2AR5xxpyU; hevc_supported=true; dy_swidth=1512; dy_sheight=982; volume_info=%7B%22isUserMute%22%3Afalse%2C%22isMute%22%3Atrue%2C%22volume%22%3A0.5%7D; strategyABtestKey=%221762826099.165%22; fpk1=U2FsdGVkX1/GiwgErvFgMYm/OdHGHqFqu/31UrLp7PygvkqwyVVSFsmEwsFtAGkzyEMKqvsm8OBNMEj4ms45Rg==; fpk2=d6dcc0a6def5582f8d3a9f7f2addb88b; passport_csrf_token=cf52aadff07269d7c9707625df32b4f1; passport_csrf_token_default=cf52aadff07269d7c9707625df32b4f1; bd_ticket_guard_client_web_domain=2; UIFID=9f119777b70db29e092f16dc2972b95ccc9df01a979ae01132052c40ee3e10baf3258f79da61967cf592d5826a2a4effb9a5ebe400f5fecf1066de24e916f808d73fb1b298ebfe305b9c22d16954c2f5e405ff9e382bdd664a8864daeb04a9db76f79cd6d1519855fd2f1048df113cfbbff872512e3f72db026f23fe4f8920c55d73f8a048b19b0d6d0b4041f692d60222dc1f10ba039fa103af1e4ebe828065; is_dash_user=1; xgplayer_user_id=978679977221; _bd_ticket_crypt_cookie=3f21f43c563ccbd422c38140066f59f0; __security_server_data_status=1; login_time=1762846326597; SelfTabRedDotControl=%5B%5D; FOLLOW_NUMBER_YELLOW_POINT_INFO=%22MS4wLjABAAAAnJqBkO7J-VCBxle9KtQr32yHe-i3dTeLPTfWTYpShW8EA0q05LXessyvbDafQOiN%2F1762876800000%2F0%2F1762846328853%2F0%22; download_guide=%223%2F20251111%2F0%22; WallpaperGuide=%7B%22showTime%22%3A1762846665191%2C%22closeTime%22%3A0%2C%22showCount%22%3A1%2C%22cursor1%22%3A8%2C%22cursor2%22%3A2%7D; publish_badge_show_info=%220%2C0%2C0%2C1762846832726%22; __security_mc_1_s_sdk_crypt_sdk=4ef42573-4cec-a5b2; __security_mc_1_s_sdk_cert_key=81ec631b-406d-a10c; __security_mc_1_s_sdk_sign_data_key_web_protect=7f61111a-4727-ac8b; __ac_signature=_02B4Z6wo00f01aw4dSgAAIDAhTzrVuW0C.GsGHGAAAId35; douyin.com; device_web_cpu_core=10; device_web_memory_size=8; stream_recommend_feed_params=%22%7B%5C%22cookie_enabled%5C%22%3Atrue%2C%5C%22screen_width%5C%22%3A1512%2C%5C%22screen_height%5C%22%3A982%2C%5C%22browser_online%5C%22%3Atrue%2C%5C%22cpu_core_num%5C%22%3A10%2C%5C%22device_memory%5C%22%3A8%2C%5C%22downlink%5C%22%3A10%2C%5C%22effective_type%5C%22%3A%5C%224g%5C%22%2C%5C%22round_trip_time%5C%22%3A100%7D%22; xg_device_score=7.737467479353454; home_can_add_dy_2_desktop=%221%22; bd_ticket_guard_client_data=eyJiZC10aWNrZXQtZ3VhcmQtdmVyc2lvbiI6MiwiYmQtdGlja2V0LWd1YXJkLWl0ZXJhdGlvbi12ZXJzaW9uIjoxLCJiZC10aWNrZXQtZ3VhcmQtcmVlLXB1YmxpYy1rZXkiOiJCRTVKbFFtcFZVK2I3QVBYTDZ2Zmoxb1NPYk00V0hxblFtSit5ZlRLb0w0dk81cmI3VXl2K2ZRNGhCaytVYytWN3Q4U2h4UVplRGpqSy9sVUxjeFZvRWc9IiwiYmQtdGlja2V0LWd1YXJkLXdlYi12ZXJzaW9uIjoyfQ%3D%3D; stream_player_status_params=%22%7B%5C%22is_auto_play%5C%22%3A0%2C%5C%22is_full_screen%5C%22%3A0%2C%5C%22is_full_webscreen%5C%22%3A0%2C%5C%22is_mute%5C%22%3A1%2C%5C%22is_speed%5C%22%3A1%2C%5C%22is_visible%5C%22%3A0%7D%22; bd_ticket_guard_client_data_v2=eyJyZWVfcHVibGljX2tleSI6IkJFNUpsUW1wVlUrYjdBUFhMNnZmajFvU09iTTRXSHFuUW1KK3lmVEtvTDR2TzVyYjdVeXYrZlE0aEJrK1VjK1Y3dDhTaHhRWmVEampLL2xVTGN4Vm9FZz0iLCJ0c19zaWduIjoidHMuMi5hYjBiNjQyNDY3MGYyZDMwOWFjY2E4N2UwMzEyNGUyODZjZDEyYTJlZTk5YTU2YjQzMGMxYTNlNTNhYjhjNTAwYzRmYmU4N2QyMzE5Y2YwNTMxODYyNGNlZGExNDkxMWNhNDA2ZGVkYmViZWRkYjJlMzBmY2U4ZDRmYTAyNTc1ZCIsInJlcV9jb250ZW50Ijoic2VjX3RzIiwicmVxX3NpZ24iOiJva3pFNTRBODJUT0c5blMrUjNhWDhwNWdRbFNvZ04rRFJXRmdhZ1FtVWR3PSIsInNlY190cyI6IiNHa09VVmxsMzlIUStHMkx0dmVIdk5sbWN5TFRJaHFUUEN2cDh5VFFDL2tZNkZ1QTdOZzA2bm1HaitFNzMifQ%3D%3D; IsDouyinActive=true; gulu_source_res=eyJwX2luIjoiMmJkMzcyNDZkMGEwMTFjMWNhNDFlMmYwM2I3NTQzNTljZjlkMTExY2U3N2UxMTIxODgxNmNiNDg0N2Q1Y2FhNCJ9; sdk_source_info=7e276470716a68645a606960273f276364697660272927676c715a6d6069756077273f276364697660272927666d776a68605a607d71606b766c6a6b5a7666776c7571273f275e58272927666a6b766a69605a696c6061273f27636469766027292762696a6764695a7364776c6467696076273f275e582729277672715a646971273f2763646976602729277f6b5a666475273f2763646976602729276d6a6e5a6b6a716c273f2763646976602729276c6b6f5a7f6367273f27636469766027292771273f27303c363d353630303d37333234272927676c715a75776a716a666a69273f2763646976602778; bit_env=urfwDMY0DvddRkPDzCrZNfuKC-Ios_aoQeegqqzJHWhRY1xlPZXmLjHIVy6XCihtZlTOhItyhhI7qJHIThLaZaZks4M7ggrCEcJ2lmVrjfY6T9DYsm3Tl5SLJG0vC8-gYlzvnK1YHbUFqNUDDAvC1PijgTsDUPJn-mHunU4PADnezv4zkq2IrwhZb5NkgUdRGxl-5fep4pTLuzgoNiS2ySGnGTvdx6g7Yj1Rb8U3VEF67EpQOeVapm6A8XHuSp-AZS0O-b0XndBjmoWh3qE3wWmK5RCvnkOb_bBQXQ77lClrt86WdumQ3vQUu6XKZR492vqio1IX2LG6HpVa4vrusvI6-d7PtWmmMh01yY6wJajyLWFee7kH5Iym84pw0no5ZGDnT3-__yDhhKDqlx_zX0pCJFoFbc97GQPz6T6jOX1HjyTR2dZOxSMTdyYsvGtuDrb5_tZJomPheFmDbl5eBKEjLhKl17beHb-_HRsXoNhKYkhsW-V9g1gNDj87x_I12rA1XN3LxYc7Ek917NtPPyAzDc6GJYJ6ZqVydHSJWWQ%3D; passport_auth_mix_state=gfoekyo4kfnmxkdc3mm5uup8mwrodmleca0u8izee0zg1wjb; biz_trace_id=8be2c4c0'
  }
}

/**
 * 获取重定向后的URL
 * @param shortUrl 短链接
 */
export function extractValidShareUrl(shortUrl: string): string | null {
  if (!shortUrl || typeof shortUrl !== 'string') {
    return null
  }

  // 匹配抖音短链接的多种模式
  const patterns = [
    // 标准 v.douyin.com 短链接 (带或不带协议)
    /https?:\/\/v\.douyin\.com\/[A-Z0-9]+\/?/i,
    // 没有协议的短链接
    /v\.douyin\.com\/[A-Z0-9]+\/?/i
  ]

  for (const pattern of patterns) {
    const match = shortUrl.match(pattern)
    if (match) {
      let url = match[0]

      // 如果没有协议，添加 https://
      if (!url.startsWith('http')) {
        url = `https://${url}`
      }

      return url
    }
  }

  return null
}

export async function getVideoId(url: string): Promise<string> {
  if (typeof url !== 'string') {
    throw new TypeError('参数必须是字符串类型')
  }

  // 预编译正则表达式
  const TIKTOK_SHARE_URL_PATTERN = /slides\/(\d+)\//

  try {
    // 使用 fetch 重定向到完整链接
    const response = await fetch(url, {
      redirect: 'manual',
      headers: {
        ...tiktokConfig.headers
      }
    })

    const shareUrl = response.headers.get('location') as string
    const match = shareUrl.match(TIKTOK_SHARE_URL_PATTERN)
    if (match && match[1]) {
      return match[1]
    }

    throw new Error('未在响应的地址中找到 videoId, 检查 url 是否为视频分享链接')
  } catch (error: any) {
    if (error.name === 'TypeError') {
      throw new Error(
        `请求端点失败，请检查当前网络环境。链接：${url}，异常详细信息：${error.message}`
      )
    }
    throw error
  }
}

/**
 * 获取抖音视频背景音乐
 * @param url 抖音分享链接（如：https://v.douyin.com/xxx/）
 */
export async function getTiktokMusic(url: string): Promise<any> {
  try {
    // 1. 请求短链接，获取重定向后的视频id
    const videoId = await getVideoId(url)
    if (!videoId) {
      return { code: -1, msg: '获取 video id 失败' }
    }

    // https://www.iesdouyin.com/aweme/v1/web/aweme/detail/

    // 2. 调用API获取视频详细信息

    // 7567727203779548265
    const apiUrl = `https://www.douyin.com/aweme/v1/web/aweme/detail/?aweme_id=${videoId}`
    const response: any = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        ...tiktokConfig.headers
      }
    })
    // const apiUrl = `https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids=${videoId}`
    // const response: any = await fetch(apiUrl, {
    //   method: 'GET',
    //   headers: {
    //     ...tiktokConfig.headers
    //   }
    // })
    console.log(`🚀 ~ response:`, response)

    // if (!response.ok) {
    //   return { code: -1, msg: `请求失败: ${response.status}` }
    // }

    // console.log(`🚀 ~ getTiktokMusic-response:`, response)

    // console.log(`🚀 ~ response.body.toString():`, response.body.toString())

    // const data = await response.json()
    // console.log(`🚀 ~ data:`, data)

    return { code: 0 }

    // const itemList = data?.item_list?.[0]

    // if (!itemList) {
    //   return { code: -1, msg: '获取详细信息失败' }
    // }

    // // 3. 提取所需信息
    // const { author, desc, music } = itemList

    // return {
    //   code: 1,
    //   nickname: author.nickname,
    //   unique_id: author.unique_id,
    //   desc,
    //   author_tx: author.avatar_larger.url_list[0],
    //   music_url: music.play_url.uri
    // }
  } catch (error) {
    console.error('解析抖音视频失败:', error)
    return {
      code: -1,
      msg: error instanceof Error ? error.message : '未知错误'
    }
  }
}
