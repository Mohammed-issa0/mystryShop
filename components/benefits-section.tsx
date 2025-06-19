"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { db } from "../firebaseConfig" // استيراد فايربيز
import { collection, getDocs } from "firebase/firestore"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

// دالة لتحويل النص إلى مكون React
const createIconComponent = (iconString: string) => {
  try {
    const element = eval(`(${iconString})`)
    return element
  } catch (error) {
    console.error("Error creating icon component:", error)
    return null
  }
}

export default function BenefitsSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const [benefits, setBenefits] = useState<any[]>([]) // بيانات الفوائد
  const [loading, setLoading] = useState<boolean>(true) // حالة التحميل

  useEffect(() => {
    const fetchBenefits = async () => {
      const querySnapshot = await getDocs(collection(db, "benefits"))
      const benefitsData = querySnapshot.docs.map(doc => doc.data())
      setBenefits(benefitsData)
      setLoading(false) // تحميل البيانات تم
    }

    fetchBenefits()
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  }

  // سكليتون تحميل
  const Skeleton = () => (
    <div className="bg-gray-200 animate-pulse p-8 rounded-2xl shadow-xl h-full w-full"></div>
  )

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute top-20 left-20 w-96 h-96 rounded-full bg-red-100/30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-orange-100/30 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-gradient-to-r from-red-900 to-red-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg"
            >
              ما هي فوائد ؟
            </motion.div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-orange-600">
              التسوق الخفي
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-red-900 to-orange-600 mx-auto mb-6 rounded-full"
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف كيف يمكن لخدمات التسوق الخفي أن تساعد مؤسستك على التميز وتحسين الأداء
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* عرض البيانات أو تحميل السكليتون */}
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} />
              ))
            : benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -15,
                    scale: 1.03,
                    boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.15)",
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 backdrop-blur-sm relative overflow-hidden group"
                >
                  {/* خلفية الفائدة */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <div className="mb-6 flex justify-center">
                      <motion.div
                        whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300"
                      >
                        {/* تحويل النص إلى مكون React */}
                        {createIconComponent(benefit.icon)}
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-red-900 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-center group-hover:text-gray-700 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <Link
            href="/benefits"
            className="inline-flex items-center bg-gradient-to-r from-red-900 to-red-700 text-white px-8 py-4 rounded-xl hover:from-red-800 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="font-bold text-lg">اكتشف المزيد من الفوائد</span>
            <ChevronLeft className="mr-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
