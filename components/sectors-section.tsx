"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Building,
  Hospital,
  Coffee,
  ShoppingBag,
  Hotel,
  Plane,
  Landmark,
  GraduationCap,
  Wrench,
  ChevronLeft,
} from "lucide-react"

const sectors = [
  {
    id: "government",
    title: "قطاع الخدمات الحكومية",
    description: "تحسين جودة الخدمات الحكومية المقدمة للمواطنين",
    image: "/placeholder.svg?height=300&width=400",
    icon: <Building className="h-8 w-8" />,
    color: "from-blue-600 to-blue-800",
  },
  {
    id: "healthcare",
    title: "الرعاية الصحية والمستشفيات",
    description: "تقييم تجربة المرضى وتحسين الخدمات الصحية",
    image: "/placeholder.svg?height=300&width=400",
    icon: <Hospital className="h-8 w-8" />,
    color: "from-green-600 to-green-800",
  },
  {
    id: "food",
    title: "المأكولات والمشروبات",
    description: "ضمان جودة الخدمة والمنتجات في المطاعم والمقاهي",
    image: "/placeholder.svg?height=300&width=400",
    icon: <Coffee className="h-8 w-8" />,
    color: "from-yellow-600 to-yellow-800",
  },
  {
    id: "retail",
    title: "قطاع التجزئة ومبيعات الجملة",
    description: "تحسين تجربة التسوق وزيادة المبيعات",
    image: "/placeholder.svg?height=300&width=400",
    icon: <ShoppingBag className="h-8 w-8" />,
    color: "from-purple-600 to-purple-800",
  },
  {
    id: "hospitality",
    title: "قطاع الضيافة",
    description: "رفع مستوى الخدمة في الفنادق والمنتجعات",
    image: "/placeholder.svg?height=300&width=400",
    icon: <Hotel className="h-8 w-8" />,
    color: "from-red-600 to-red-800",
  },
  {
    id: "tourism",
    title: "السفر والسياحة",
    description: "تقييم وتطوير الخدمات السياحية",
    image: "/placeholder.svg?height=300&width=400",
    icon: <Plane className="h-8 w-8" />,
    color: "from-sky-600 to-sky-800",
  },
  {
    id: "banking",
    title: "قطاع البنوك",
    description: "تحسين تجربة العملاء في الخدمات المصرفية",
    image: "/placeholder.svg?height=300&width=400",
    icon: <Landmark className="h-8 w-8" />,
    color: "from-indigo-600 to-indigo-800",
  },
  {
    id: "education",
    title: "قطاع التعليم والتدريب",
    description: "تقييم جودة الخدمات التعليمية والتدريبية",
    image: "/placeholder.svg?height=300&width=400",
    icon: <GraduationCap className="h-8 w-8" />,
    color: "from-amber-600 to-amber-800",
  },
  {
    id: "maintenance",
    title: "مراكز الصيانة وخدمة العملاء",
    description: "تحسين خدمات ما بعد البيع والصيانة",
    image: "/placeholder.svg?height=300&width=400",
    icon: <Wrench className="h-8 w-8" />,
    color: "from-gray-600 to-gray-800",
  },
]

export default function SectorsSection() {
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
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  }

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
              القطاعات المستفيدة
            </motion.div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            من <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-orange-600">يستفيد</span>{" "}
            من خدماتنا؟
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-red-900 to-orange-600 mx-auto mb-6 rounded-full"
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم خدماتنا لمجموعة متنوعة من القطاعات لمساعدتها على تحسين الأداء وتعزيز رضا العملاء
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              variants={itemVariants}
              whileHover={{
                y: -15,
                scale: 1.03,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group transform perspective-1000"
            >
              <Link href={`/sectors/${sector.id}`} className="block">
                <div className="relative h-56 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-80 group-hover:opacity-90 transition-opacity duration-500`}
                  ></div>
                  <Image
                    src={sector.image || "/placeholder.svg"}
                    alt={sector.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 group-hover:scale-110 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                  {/* Sector icon */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-xl text-white">
                    {sector.icon}
                  </div>

                  {/* Sector title on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1 transform group-hover:translate-y-0 transition-transform duration-500">
                      {sector.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{sector.description}</p>
                  <div className="flex justify-end">
                    <span className="inline-flex items-center text-red-900 font-medium group-hover:text-red-700 transition-colors">
                      اكتشف المزيد
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                      >
                        <ChevronLeft className="mr-1 h-4 w-4" />
                      </motion.span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Link
            href="/sectors"
            className="inline-flex items-center bg-gradient-to-r from-red-900 to-red-700 text-white px-8 py-4 rounded-xl hover:from-red-800 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="font-bold text-lg">استكشف جميع القطاعات</span>
            <ChevronLeft className="mr-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
