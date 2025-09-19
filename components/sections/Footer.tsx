import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo/ruben real estate_Horizontal.png"
                alt="Ruben Real Estate Logo"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground">
              Your trusted partner for real estate success in San Diego County.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Veteran Real Estate</li>
              <li>Investment Properties</li>
              <li>First-Time Buyers</li>
              <li>Property Management</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Areas</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>San Marcos</li>
              <li>Escondido</li>
              <li>Vista</li>
              <li>Carlsbad</li>
              <li>Oceanside</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <div>(541) 602-1026</div>
              <div>ruben.o.banuelos@gmail.com</div>
              <div>DRE# 02153497</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Ruben Real Estate. All rights reserved. | Realty of America (ROA)</p>
        </div>
      </div>
    </footer>
  )
}
