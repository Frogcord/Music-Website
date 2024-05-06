---
sidebar_position: 2
---
# 指令大集
## 資訊指令

| 指令 | 描述 | 需要 DJ | 需要在頻道 | 需要正在播放 |
| ---- | ---- | :----: | :----: | :----: |
| [/help](info/help) | 顯示幫助指南 | ❎ | ❎ | ❎ |
| [/invite](info/invite) | 顯示邀請連結 | ❎ | ❎ | ❎ |
| [/ping](info/ping) | 查看機器人延遲 | ❎ | ❎ | ❎ |
| [/node](info/node) | 查看音樂節點資訊 | ❎ | ❎ | ❎ |

## 音樂指令
### 點播查找
| 指令 | 描述 | 需要 DJ | 需要在頻道 | 需要正在播放 |
| ---- | ---- | :----: | :----: | :----: |
| [/play](music/psearch/play) | 播放並查詢音樂 | ❎ | ✅ | ❎ |
| [/playnext](music/psearch/playnext) | 播放並查詢音樂且插入至下首 | ❎ | ✅ | ❎ |
| [/search](music/psearch/search) | 使用引擎搜尋歌曲 | ❎ | ✅ | ❎ |

### 媒體播放器
| 指令 | 描述 | 需要 DJ | 需要在頻道 | 需要正在播放 |
| ---- | ---- | :----: | :----: | :----: |
| [/pause](music/player/pause) | 暫停目前音樂播放器 | ❎ | ✅ | ✅ |
| [/resume](music/player/resume) | 繼續目前音樂播放器 | ❎ | ✅ | ✅ |
| [/loop](music/player/loop) | 設定播放器迴圈模式 | ❎ | ✅ | ✅ |
| [/shuffle](music/player/shuffle) | 隨機亂數播放清單 | ✅ | ✅ | ✅ |
| [/volume](music/player/volume) | 調整播放器音量 | ✅ | ✅ | ✅ |
| [/seek](music/player/seek) | 快轉至某些秒數 | ❎ | ✅ | ✅ |
| [/skip](music/player/skip) | 跳過至下首 | ✅ | ✅ | ✅ |
| [/skipto](music/player/skipto) | 跳過至指定歌曲 | ✅ | ✅ | ✅ |

### 播放清單
| 指令 | 描述 | 需要 DJ | 需要在頻道 | 需要正在播放 |
| ---- | ---- | :----: | :----: | :----: |
| [/nowplaying](music/queuea/nowplaying) | 顯示正在播放的歌曲 | ❎ | ✅ | ✅ |
| [/queue](music/queuea/queue) | 顯示播放清單 | ❎ | ✅ | ✅ |
| [/remove](music/queuea/remove) | 從播放清單中移除歌曲 | ✅ | ✅ | ✅ |
| [/clearqueue](music/queuea/clearqueue) | 清空播放清單 | ✅ | ✅ | ✅ |

### 進入退出頻道
| 指令 | 描述 | 需要 DJ | 需要在頻道 | 需要正在播放 |
| ---- | ---- | :----: | :----: | :----: |
| [/join](music/joinleave/join) | 加入語音頻道 | ❎ | ✅ | ❎ |
| [/leave](music/joinleave/leave) | 離開語音頻道 | ❎ | ✅ | ❎ |
| [/stop](music/joinleave/stop) | 停止音樂，並且清空播放清單 | ✅ | ✅ | ✅ |

### 自動推薦系統
| 指令 | 描述 | 需要 DJ | 需要在頻道 | 需要正在播放 |
| ---- | ---- | :----: | :----: | :----: |
| [/lofi](music/suggestion/lofi) | 播放來自 Lofi Girl 的電台歌曲 | ❎ | ✅ | ❎ |
| [/suggest](music/suggestion/suggest) | 播放來自 Spotify 的推薦音樂 | ❎ | ✅ | ❎ |
| [/autoplay](music/suggestion/autoplay) | 自動播放推薦歌曲 | ✅ | ✅ | ✅ |

### 查找系統
| 指令 | 描述 | 需要 DJ | 需要在頻道 | 需要正在播放 |
| ---- | ---- | :----: | :----: | :----: |
| [/grab](music/search/grab) | 收到私訊關於這首曲子 | ❎ | ✅ | ✅ |
| [/lyrics](music/search/lyrics) | 從API上取得正在播放的歌詞 | ❎ | ✅ | ✅ |

## 設置指令
| 指令 | 描述 | 需要 DJ | 需要在頻道 | 需要正在播放 |
| ---- | ---- | :----: | :----: | :----: |
| [/dj](settings/dj) | 開關設定DJ模式 | ❎ | ❎ | ❎ |
| [/247](settings/247) | 防止機器人離開頻道 | ❎ | ✅ | ❎ |
| [/setup](settings/setup) | 設定群組中的點播頻道 | ❎ | ❎ | ❎ |

## 其他指令
| 指令 | 描述 | 需要 DJ | 需要在頻道 | 需要正在播放 |
| ---- | ---- | :----: | :----: | :----: |
| [/filter](other/filter) | 開關設定過濾器 | ✅ | ✅ | ✅ |
| [/playlist](other/playlist) | 個人化播放清單 | ❎ | ❎ | ❎ |