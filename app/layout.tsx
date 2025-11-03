import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rubenrealestate.com'),
  title: 'Buy, Sell & Invest in North County Real Estate | Ruben Real Estate',
  description: 'Trusted North County experts helping families, veterans, and investors with local insight and proven results.',
  keywords: 'San Diego real estate, veteran real estate, investment properties, first time home buyers, property management, Ruben Banuelos',
  authors: [{ name: 'Ruben Banuelos' }],
  alternates: {
    canonical: '/',
  },
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

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Schema.org JSON-LD structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ruben Real Estate",
    "url": "https://rubenrealestate.com",
    "logo": "https://rubenrealestate.com/logo/ruben%20real%20estate_Horizontal.png",
    "description": "Trusted North County real estate experts helping families, veterans, and investors with local insight and proven results.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-541-602-1026",
      "contactType": "sales",
      "areaServed": "US-CA",
      "availableLanguage": ["English", "Spanish"]
    },
    "sameAs": [
      "https://www.facebook.com",
      "https://www.instagram.com",
      "https://www.linkedin.com",
      "https://www.youtube.com"
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Ruben Real Estate",
    "image": "https://rubenrealestate.com/logo/openGraphs.jpg",
    "description": "Expert real estate services in San Diego County. Specializing in Veterans, Investors, and Growing Families.",
    "url": "https://rubenrealestate.com",
    "telephone": "+1-541-602-1026",
    "email": "ruben.o.banuelos@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.1434",
      "longitude": "-117.1661"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "San Marcos",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "33.1434",
          "longitude": "-117.1661"
        }
      },
      {
        "@type": "City",
        "name": "Escondido",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "33.1192",
          "longitude": "-117.0864"
        }
      },
      {
        "@type": "City",
        "name": "Vista",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "33.2000",
          "longitude": "-117.2425"
        }
      },
      {
        "@type": "City",
        "name": "Carlsbad",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "33.1581",
          "longitude": "-117.3506"
        }
      },
      {
        "@type": "City",
        "name": "Oceanside",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "33.1959",
          "longitude": "-117.3795"
        }
      }
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-17:00",
    "founder": {
      "@type": "Person",
      "name": "Ruben Banuelos"
    },
    "knowsAbout": [
      "Real Estate",
      "VA Loans",
      "Property Management",
      "Real Estate Investment",
      "First Time Home Buyers",
      "Investment Properties"
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Real Estate Services",
    "description": "Expert real estate services for buying, selling, and investing in North County San Diego properties",
    "provider": {
      "@type": "RealEstateAgent",
      "name": "Ruben Real Estate"
    },
    "areaServed": {
      "@type": "State",
      "name": "California"
    },
    "serviceType": [
      "Real Estate Agent Services",
      "VA Loan Consulting",
      "Property Management",
      "Investment Property Consultation",
      "First Time Home Buyer Assistance"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Real Estate Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "VA Loan Expertise",
            "description": "Specialized knowledge to maximize veteran benefits and zero down payment options"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Investment Property Guidance",
            "description": "Strategic investment guidance with market analysis, property management, and portfolio optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Family-First Home Buying",
            "description": "Help families explore neighborhoods based on schools, parks, and community amenities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Property Management",
            "description": "NARPM-certified property management for rental properties"
          }
        }
      ]
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="google-site-verification" content="9AI8dhMD6CN_wMEbylAnXbLL_d6oTdFKaXNsN_UnCc4" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
        <div className="min-h-screen flex flex-col max-w-screen overflow-x-hidden">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
