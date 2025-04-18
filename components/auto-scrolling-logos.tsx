"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface AutoScrollingLogosProps {
  logos: { id: number; name: string; logo: string }[]
}

export default function AutoScrollingLogos({ logos }: AutoScrollingLogosProps) {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    if (width > 0) {
      const animateCarousel = async () => {
        while (true) {
          await controls.start({
            x: -width,
            transition: {
              duration: 20,
              ease: "linear",
            },
          })
          await controls.start({
            x: 0,
            transition: {
              duration: 0,
            },
          })
        }
      }

      animateCarousel()
    }
  }, [width, controls])

  // Duplicate logos to create a seamless loop
  const duplicatedLogos = [...logos, ...logos]

  return (
    <div className="overflow-hidden">
      <motion.div ref={carousel} className="cursor-grab overflow-hidden">
        <motion.div
          animate={controls}
          className="flex"
          style={{ paddingRight: "20px" }} // Add padding to prevent gap at the end
        >
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={`${logo.id}-${index}`}
              className="min-w-[160px] sm:min-w-[200px] md:min-w-[240px] h-24 p-4 mx-4 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center"
            >
              <Image src={logo.logo || "/placeholder.svg"} alt={logo.name} width={120} height={60} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
