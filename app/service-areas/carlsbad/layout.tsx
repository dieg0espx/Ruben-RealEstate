import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real Estate Services Carlsbad | Ruben Real Estate San Diego',
  description: 'Your Carlsbad real estate partner helping families, veterans, and investors buy, sell, and invest with confidence and precision.',
  alternates: {
    canonical: '/service-areas/carlsbad',
  },
}

export default function CarlsbadLayout({ children }: { children: React.ReactNode }) {
  return children
}


