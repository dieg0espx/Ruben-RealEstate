import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real Estate Services in North County San Diego | Ruben Real Estate',
  description: 'Expert real estate services across North County San Diego to help you buy, sell, or manage property with confidence.',
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}


