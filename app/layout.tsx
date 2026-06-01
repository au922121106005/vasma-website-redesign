import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display, Crimson_Text } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })
const _playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})
const _crimson = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  title: 'VASMA | Premium Creative Agency',
  description:
    'Digitx, Events & Studio. Premium creative solutions for brands.',

  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}