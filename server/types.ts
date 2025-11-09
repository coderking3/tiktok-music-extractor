interface TiktokMusicResult {
  code: number
  msg?: string
  nickname?: string
  unique_id?: string
  desc?: string
  author_tx?: string
  music_url?: string
}

interface TiktokAPIResponse {
  item_list: Array<{
    author: {
      nickname: string
      unique_id: string
      avatar_larger: {
        url_list: string[]
      }
    }
    desc: string
    music: {
      play_url: {
        uri: string
      }
    }
  }>
}

export type { TiktokAPIResponse, TiktokMusicResult }
