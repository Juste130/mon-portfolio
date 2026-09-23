import { ImageResponse } from 'next/og'
import { OgImageContent } from '@/lib/og-image-content'

export const runtime = 'edge'
export const alt = 'Juste HOUEZO — Frontend, Fullstack & Web3 Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(<OgImageContent />, { ...size })
}
