import Image from "next/image"

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {/* BiggerPockets Logo */}
          <div className="flex items-center justify-center p-4">
            <Image
              src="/biggerPockets_logo.png"
              alt="BiggerPockets"
              width={120}
              height={60}
              className="max-w-full h-auto object-contain"
            />
          </div>

          {/* NARPM Logo */}
          <div className="flex items-center justify-center p-4">
            <Image
              src="/narpm_logo - Editado.png"
              alt="NARPM"
              width={120}
              height={60}
              className="max-w-full h-auto object-contain"
            />
          </div>

          {/* Rising Star Logo */}
          <div className="flex items-center justify-center p-4">
            <Image
              src="/risingStar_logo.png"
              alt="Rising Star"
              width={120}
              height={60}
              className="max-w-full h-auto object-contain"
            />
          </div>

          {/* ROA Logo */}
          <div className="flex items-center justify-center p-4">
            <Image
              src="/roa_logo.png"
              alt="ROA"
              width={120}
              height={60}
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
