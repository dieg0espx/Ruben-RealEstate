import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Ruben Real Estate | San Diego Real Estate Expert',
  description: 'Expert real estate services in San Diego County. Specializing in Veterans, Investors, and Growing Families. From healthcare to real estate - your trusted partner for home buying, selling, and investment opportunities.',
  keywords: 'San Diego real estate, veteran real estate, investment properties, first time home buyers, property management, Ruben Banuelos',
  authors: [{ name: 'Ruben Banuelos' }],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Ruben Real Estate | San Diego Real Estate Expert',
    description: 'Expert real estate services in San Diego County. Specializing in Veterans, Investors, and Growing Families.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
