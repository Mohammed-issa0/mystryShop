"use client"

import Marquee from "react-fast-marquee"
import Image from "next/image"

interface AutoScrollingLogosProps {
  logos: { id: number; name: string; logo: string }[]
}

export default function AutoScrollingLogos({ logos }: AutoScrollingLogosProps) {
  return (
    <div className="py-4">
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {logos.map((logo) => (
          <div key={logo.id} className="mx-6">
            <div className="w-[120px] h-[80px] flex items-center justify-center bg-white rounded-xl shadow-md border border-gray-100 p-4">
              <Image
                src={logo.logo || "/placeholder.svg"}
                alt={logo.name}
                width={100}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  )
}
