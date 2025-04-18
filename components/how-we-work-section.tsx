"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { ClipboardList, Phone, FileText, Play, BarChart2, FileCheck, ChevronLeft } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    icon: <ClipboardList className="h-12 w-12 text-white" />,
    title: "استلام الطلب",
    description: "نستلم طلبك ونقوم بدراسته بعناية",
    color: "from-red-900 to-red-700",
  },
  {
    icon: <Phone className="h-12 w-12 text-white" />,
    title: "التواصل لفهم الاحتياج",
    description: "نتواصل معك لفهم احتياجاتك بشكل دقيق",
    color: "from-orange-800 to-orange-600",
  },
  {
    icon: <FileText className="h-12 w-12 text-white" />,
    title: "وضع استراتيجية",
    description: "نضع خطة عمل مناسبة لتحقيق أهدافك",
    color: "from-yellow-700 to-yellow-500",
  },
  {
    icon: <Play className="h-12 w-12 text-white" />,
    title: "البدء بالتنفيذ",
    description: "نبدأ بتنفيذ الخطة وفق المعايير المتفق عليها",
    color: "from-red-900 to-red-700",
  },
  {
    icon: <BarChart2 className="h-12 w-12 text-white" />,
    title: "تحليل البيانات",
    description: "نقوم بتحليل البيانات التي تم جمعها بدقة",
    color: "from-orange-800 to-orange-600",
  },
  {
    icon: <FileCheck className="h-12 w-12 text-white" />,
    title: "تسليم التقرير",
    description: "نقدم تقريراً شاملاً بالنتائج والتوصيات",
    color: "from-yellow-700 to-yellow-500",
  },
]

export default function HowWeWorkSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        delay: i * 0.1,
      },
    }),
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 bg-white">
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
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-red-100/30 blur-3xl"
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
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-orange-100/30 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              منهجية عملنا
            </motion.div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-orange-600">كيف</span> نعمل؟
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-red-900 to-orange-600 mx-auto mb-6 rounded-full"
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نتبع منهجية عمل احترافية لضمان تقديم أفضل النتائج لعملائنا
          </p>
        </motion.div>

        <div className="relative" ref={ref}>
          {/* Connecting Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-red-200 via-orange-300 to-yellow-200 hidden md:block"></div>

          <motion.div variants={containerVariants} initial="hidden" animate={controls} className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
                  <motion.div
                    whileHover={{
                      rotate: [0, 5, -5, 0],
                      scale: 1.05,
                      boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2)",
                    }}
                    transition={{ duration: 0.5 }}
                    className={`bg-gradient-to-br ${step.color} rounded-2xl p-8 shadow-xl relative z-10`}
                  >
                    {step.icon}
                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full text-red-900 flex items-center justify-center font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                  </motion.div>
                </div>
                <div className="md:w-1/2">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-lg text-gray-600">{step.description}</p>

                    {/* Decorative elements */}
                    <div className="absolute -z-10 top-0 right-0 w-20 h-20 bg-red-100/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Link
            href="/how-we-work"
            className="inline-flex items-center bg-gradient-to-r from-red-900 to-red-700 text-white px-8 py-4 rounded-xl hover:from-red-800 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="font-bold text-lg">تعرف على المزيد حول منهجية عملنا</span>
            <ChevronLeft className="mr-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
