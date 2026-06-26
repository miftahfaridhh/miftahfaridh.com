import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans, JetBrains_Mono, Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans-kr',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Muhammad Miftah Faridh — Physical AI Engineer',
  description:
    'Muhammad Miftah Faridh — Physical AI Engineer at orinu.ai. Specializing in LLM Fine-Tuning, Robotics (ROS 2), Deep Learning, IoT, and Edge AI. M.S. Electronics Engineering, Kookmin University.',
  icons: {
    icon: [
      { url: '/mf-logo-favicon.ico' },
      { url: '/mf-logo-favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/mf-logo-favicon-192x192.png' }],
  },
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
    <html
      lang="en"
      className={`${dmSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${notoSansKR.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
