'use client'

import { useEffect } from 'react'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  useEffect(() => {
    // Build breadcrumb schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    }

    // Create or update breadcrumb script
    let scriptId = 'breadcrumb-schema'
    let existingScript = document.getElementById(scriptId)
    
    if (existingScript) {
      existingScript.remove()
    }
    
    const script = document.createElement('script')
    script.id = scriptId
    script.type = 'application/ld+json'
    script.text = JSON.stringify(breadcrumbSchema)
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.getElementById(scriptId)
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [items])

  return null // This component doesn't render visible elements, only adds schema
}

