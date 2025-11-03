import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real Estate Services Oceanside | Ruben Real Estate San Diego',
  description: 'Helping Oceanside families, veterans, and investors make confident real estate moves backed by experience and North County insight.',
  alternates: {
    canonical: '/service-areas/oceanside',
  },
}

export default function OceansideLayout({ children }: { children: React.ReactNode }) {
  return children
}


