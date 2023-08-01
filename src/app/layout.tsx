import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pexi Infinity',
  description: 'LP Burnt & Renounced, Tax 1-1',
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
