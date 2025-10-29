"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Fix for default markers in Leaflet with Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
})

interface MapComponentProps {
  currentAreaIndex: number
  setCurrentAreaIndex: (index: number) => void
}

export default function MapComponent({ currentAreaIndex, setCurrentAreaIndex }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)
  const markersRef = useRef<L.Marker[]>([])

  // Service area coordinates (latitude, longitude)
  const serviceAreas = [
    { name: "San Marcos", lat: 33.1434, lng: -117.1661, description: "Hometown" },
    { name: "Escondido", lat: 33.1192, lng: -117.0864, description: "Historic charm" },
    { name: "Vista", lat: 33.2000, lng: -117.2425, description: "Family-friendly" },
    { name: "Carlsbad", lat: 33.1581, lng: -117.3506, description: "Coastal living" },
    { name: "Oceanside", lat: 33.1959, lng: -117.3795, description: "Beach community" }
  ]

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    // Initialize the map
    const map = L.map(mapRef.current).setView([33.1434, -117.1661], 10)
    mapInstanceRef.current = map

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map)

    // Create custom blue icon similar to default OpenStreetMap markers
    const blueIcon = L.divIcon({
      className: "custom-blue-marker",
      html: `
        <div style="
          width: 25px;
          height: 25px;
          background-color: #3b82f6;
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            width: 8px;
            height: 8px;
            background-color: white;
            border-radius: 50%;
          "></div>
        </div>
      `,
      iconSize: [25, 25],
      iconAnchor: [12, 12],
    })

    // Add markers for each service area
    serviceAreas.forEach((area, index) => {
      const marker = L.marker([area.lat, area.lng], { icon: blueIcon })
        .addTo(map)
        .bindPopup(`
          <div style="text-align: center; padding: 8px;">
            <strong style="color: #1f2937; font-size: 14px;">${area.name}</strong><br>
            <span style="color: #6b7280; font-size: 12px;">${area.description}</span>
          </div>
        `)
        .on("click", () => {
          setCurrentAreaIndex(index)
        })

      markersRef.current.push(marker)
    })

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
        markersRef.current = []
      }
    }
  }, [setCurrentAreaIndex])

  return <div ref={mapRef} className="w-full h-full rounded-2xl relative z-0" />
}
