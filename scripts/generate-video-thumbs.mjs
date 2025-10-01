import fg from 'fast-glob'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs/promises'
import ffmpeg from 'fluent-ffmpeg'
import ffmpegPath from 'ffmpeg-static'

ffmpeg.setFfmpegPath(ffmpegPath)

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

// 스캔할 루트: 필요시 추가 가능
const roots = [
  path.join(root, 'public', 'videos'),
  path.join(root, 'public', 'images'),
]

for (const base of roots) {
  try {
    const files = await fg('**/*.{mp4,mov,MOV}', { cwd: base })
    await Promise.all(files.map(async rel => {
      const abs = path.join(base, rel)
      const posterPath = abs.replace(/\.(mp4|mov)$/i, '.poster.jpg')
      try {
        await fs.stat(posterPath) // 있으면 스킵
        return
      } catch {}
      await new Promise((res, rej) => {
        ffmpeg(abs)
          .seekInput('00:00:01')
          .frames(1)
          .output(posterPath)
          .on('end', res)
          .on('error', rej)
          .run()
      })
      console.log('poster generated:', path.relative(root, posterPath))
    }))
  } catch {}
}
