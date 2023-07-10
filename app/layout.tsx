import './global.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://next-valhalla-starter.netlify.app'),
  title: 'Next Valhalla Starter | AREA44',
  description: 'An image gallery starter built with Next.js',
  openGraph: {
    title: 'Next Valhalla Starter | AREA44',
    description: 'An image gallery starter built with Next.js',
    url: 'https://next-valhalla-starter.netlify.app',
    siteName: 'Next Valhalla Starter | AREA44',
    images: [
      {
        url: '/og-image.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next Valhalla Starter | AREA44',
    description: 'An image gallery starter built with Next.js',
    creator: '@torn4dom4n',
    images: ['/og-image.jpg'],
  },
  icons: {
    shortcut: '/favicon.svg',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black antialiased">{children}</body>
    </html>
  )
}
