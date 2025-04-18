"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, MessageCircle } from "lucide-react"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import img1 from '../public/2.jpg';
import { useEffect } from "react"

export default function HeroSection() {
  const [showWhatsappTooltip, setShowWhatsappTooltip] = useState(false)

  const [dots, setDots] = useState([])

  useEffect(() => {
    const temp = Array.from({ length: 15 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 3 + Math.random() * 5,
      delay: Math.random() * 5,
    }))
    setDots(temp)
  }, [])

  return (
    <section className="relative bg-gradient-to-l from-red-900 via-red-800 to-orange-600 text-white py-24 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute top-[10%] left-[10%] w-64 h-64 rounded-full bg-orange-400"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-red-500"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-[40%] right-[30%] w-40 h-40 rounded-full bg-yellow-500"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 60, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white"
          style={{
            top: `${dot.top}%`,
            left: `${dot.left}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
          }}
        />
      ))}
    </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                className="mb-2 inline-block"
              >
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 text-red-900 px-4 py-1 rounded-full text-sm font-bold">
                  الأفضل في مجال التسوق الخفي
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                التسوق الخفي...
                <br />
                <motion.span
                  animate={{
                    color: ["#fcd34d", "#fdba74", "#fcd34d"],
                    textShadow: [
                      "0 0 5px rgba(252, 211, 77, 0.3)",
                      "0 0 15px rgba(252, 211, 77, 0.5)",
                      "0 0 5px rgba(252, 211, 77, 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="text-yellow-300"
                >
                  طريقك للتميز في الأداء
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl mb-8"
              >
                اكتشف اللحظات الحاسمة في رحلة عميلك
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-block bg-white text-red-900 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-100 transition-colors text-lg"
                  >
                    تواصل معنا
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/services"
                    className="inline-flex items-center bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors text-lg"
                  >
                    خدماتنا
                    <ChevronLeft className="mr-2 h-5 w-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                  y: [0, -10, 0, -5, 0],
                }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
                className="relative z-10"
              >
                <Image
                  src={img1}
                  alt="التسوق الخفي"
                  
                  className="rounded-2xl shadow-2xl size-[300px]  md:size-[500px] object-cover"
                />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-xl z-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500 rounded-full z-0"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-8 left-8 z-50"
        onMouseEnter={() => setShowWhatsappTooltip(true)}
        onMouseLeave={() => setShowWhatsappTooltip(false)}
      >
        <motion.a
          href="https://wa.me/966123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="h-8 w-8 text-white" />
        </motion.a>
        <AnimatePresence>
          {showWhatsappTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full top-1/2 transform -translate-y-1/2 -translate-x-2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md mr-2 whitespace-nowrap"
            >
             تواصل معنا
              <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
