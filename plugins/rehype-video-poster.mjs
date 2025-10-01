import { visit } from 'unist-util-visit'

export default function rehypeVideoPoster({ overwrite = true, log = true } = {}) {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'video') return
      const src = node.properties?.src
      if (!src || typeof src !== 'string') return
      if (!/\.(mp4|mov)$/i.test(src)) return

      const autoPoster = src.replace(/\.(mp4|mov)$/i, '.poster.jpg')

      if (overwrite || !node.properties.poster) {
        node.properties.poster = autoPoster
        if (log) console.log(`[rehype-video-poster] ${src} -> ${autoPoster}`)
      }
      if (!('preload' in node.properties)) node.properties.preload = 'metadata'
      if (!('controls' in node.properties)) node.properties.controls = true
      if (!('playsinline' in node.properties)) node.properties.playsinline = true
    })
  }
}
