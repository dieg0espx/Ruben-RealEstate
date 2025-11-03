import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real Estate Services Escondido | Ruben Real Estate San Diego',
  description: 'Serving Escondido families, veterans, and investors with professional guidance, local expertise, and commitment to lasting results.',
}

export default function EscondidoLayout({ children }: { children: React.ReactNode }) {
  return children
}


