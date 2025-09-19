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
  themeColor: '#ffffff',
  icons: {
    icon: [
      { url: '/logo/favicon.ico', sizes: 'any' },
      { url: '/logo/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/logo/favicon.ico',
    apple: '/logo/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Ruben Real Estate | San Diego Real Estate Expert',
    description: 'Expert real estate services in San Diego County. Specializing in Veterans, Investors, and Growing Families.',
    type: 'website',
    locale: 'en_US',
    url: 'https://rubenrealestate.com',
    siteName: 'Ruben Real Estate',
    images: [
      {
        url: '/logo/openGraphs.jpg',
        width: 1200,
        height: 630,
        alt: 'Ruben Real Estate - San Diego Real Estate Expert',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ruben Real Estate | San Diego Real Estate Expert',
    description: 'Expert real estate services in San Diego County. Specializing in Veterans, Investors, and Growing Families.',
    images: ['/logo/openGraphs.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
