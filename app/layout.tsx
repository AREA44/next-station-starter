import '@/app/globals.css';
import type { Metadata } from 'next';

const title = 'Next Valhalla Starter';
const description = 'An image gallery starter built with Next.js';

export const metadata: Metadata = {
  title: title,
  description: description,
  icons: {
    icon: '/favicon.ico',
  },
};

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <head />
      <body className='bg-black antialiased'>{children}</body>
    </html>
  );
}
