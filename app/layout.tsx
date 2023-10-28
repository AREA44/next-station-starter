import '@/app/globals.css'

import type { Metadata } from 'next'
import { GeistMono, GeistSans } from 'geist/font'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: siteConfig.name,
    card: 'summary_large_image',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          'dark min-h-screen bg-background font-sans antialiased',
          `${GeistSans.variable} ${GeistMono.variable}`,
        )}
      >
        {children}
      </body>
    </html>
  )
}
