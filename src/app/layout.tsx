import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pexi Infinity',
  description: 'Next Level Gamefi | LP Burnt & Renounced, Tax 3-3',
  keywords: ['pexi', 'meme', 'web3', 'gamefi'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
