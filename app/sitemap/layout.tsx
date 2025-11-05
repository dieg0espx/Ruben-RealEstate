import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Site Map | Ruben Real Estate',
  description: 'Browse all pages and sections of Ruben Real Estate website. Find everything you need about North County real estate services.',
  alternates: {
    canonical: '/sitemap',
  },
}

export default function SitemapLayout({ children }: { children: React.ReactNode }) {
  return children
}

