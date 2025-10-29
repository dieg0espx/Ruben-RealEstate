import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buy, Sell & Invest in North County Real Estate | Ruben Real Estate',
  description: 'Trusted North County experts helping families, veterans, and investors with local insight and proven results.',
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return children
}


