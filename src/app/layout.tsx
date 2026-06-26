import type { Metadata } from 'next'
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const ibmMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-mono',
})

const ibmSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-ibm-sans',
})

export const metadata: Metadata = {
  title: 'Muhammad Miftah Faridh — Physical AI Engineer',
  description:
    'Building intelligent systems at the intersection of AI, robotics, and edge computing.',
  openGraph: {
    title: 'Muhammad Miftah Faridh',
    description: 'Physical AI Engineer · orinu.ai · Seoul',
    url: 'https://miftahfaridh.com',
    siteName: 'miftahfaridh.com',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ibmMono.variable} ${ibmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
