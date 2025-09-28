import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InstaDownloader - Download Instagram Videos, Reels & Stories',
  description: 'Download Instagram videos, reels, stories, and profile pictures easily and quickly. Free, fast, and secure Instagram downloader.',
  keywords: 'instagram downloader, download instagram videos, instagram reels downloader, instagram stories downloader, instagram profile picture downloader',
  authors: [{ name: 'InstaDownloader Team' }],
  openGraph: {
    title: 'InstaDownloader - Download Instagram Content',
    description: 'Download Instagram videos, reels, stories, and profile pictures easily and quickly.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InstaDownloader - Download Instagram Content',
    description: 'Download Instagram videos, reels, stories, and profile pictures easily and quickly.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}