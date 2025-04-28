"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { db } from "../../firebaseConfig"
import { collection, getDocs } from "firebase/firestore"
import { MessageCircle } from "lucide-react"
import { AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showWhatsappTooltip, setShowWhatsappTooltip] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  useEffect(() => {
    async function fetchServices() {
      try {
        const querySnapshot = await getDocs(collection(db, "services"))
        const servicesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setServices(servicesData)
      } catch (error) {
        console.error("خطأ في جلب الخدمات:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  if (loading) {
    return (
      <div className="py-20 text-center text-2xl font-semibold">
        جاري التحميل...
      </div>
    )
  }

  return (
    <div className="py-20 relative overflow-hidden">
      {/* زر الواتساب */}
      <div className="fixed bottom-6 left-6 z-50">
        <div className="relative group">
          <AnimatePresence>
            {showWhatsappTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-sm rounded-md px-3 py-1 whitespace-nowrap"
              >
                تواصل معنا عبر الواتساب
              </motion.div>
            )}
          </AnimatePresence>
          <Link
            href="https://wa.me/971561611356"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setShowWhatsappTooltip(true)}
            onMouseLeave={() => setShowWhatsappTooltip(false)}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 p-4 rounded-full shadow-lg"
            >
              <MessageCircle className="text-white w-6 h-6" />
            </motion.button>
          </Link>
        </div>
      </div>

     

      <div className="container mx-auto px-4">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-orange-600">خدماتنا</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-red-900 to-orange-600 mx-auto mb-6 rounded-full"
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة متكاملة من خدمات التسوق الخفي المصممة خصيصاً لتلبية احتياجات عملائنا وتحسين أدائهم
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeIn}
              className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-1/2">
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} className="relative group">
                  <div
                    className={`absolute -inset-2 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                  ></div>
                  <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-500`}
                    ></div>
                    {service.image && (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover object-center"
                      />
                    )}
                  </div>
                </motion.div>
              </div>
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                <p className="text-lg text-gray-700">{service.description}</p>
                <div>
                {service.features && (
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {service.features.map((feature: string, idx: number) => (
                      <li key={idx}>{feature}</li>
                    ))}
                    
                  </ul>
                )}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={`/services/${service.id}`}
                    className={`inline-flex items-center bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300`}
                  >
                    طلب الخدمة
                    <ChevronLeft className="mr-1 h-5 w-5" />
                  </Link>
                </motion.div>
                  </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
