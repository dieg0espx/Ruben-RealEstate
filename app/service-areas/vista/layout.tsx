import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real Estate Services Vista | Ruben Real Estate San Diego',
  description: 'Trusted Vista real estate expert helping families, veterans, and investors buy, sell, and invest with clear communication and care.',
}

export default function VistaLayout({ children }: { children: React.ReactNode }) {
  return children
}


