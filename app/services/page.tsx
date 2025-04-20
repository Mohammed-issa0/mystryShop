"use client"

import { motion } from "framer-motion"
import { useEffect,useState } from "react"

import { MessageCircle } from "lucide-react"
import { AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import t1 from '../../public/t1.jpg';
import t2 from '../../public/t2.webp';
import t3 from '../../public/t3.jpg';
import t4 from '../../public/t4.webp';
const services = [
  {
    id: "customer-experience",
    title: "تقييم تجربة العملاء",
    description:
      "قياس وتحليل تجربة العملاء من خلال زيارات سرية لتقييم جودة الخدمة المقدمة وتحديد نقاط القوة والضعف في رحلة العميل.",
    longDescription:
      "نقدم خدمة شاملة لتقييم تجربة العملاء من خلال زيارات سرية يقوم بها متسوقون خفيون مدربون. نقيس جودة الخدمة، سرعة الاستجابة، مظهر المكان، سلوك الموظفين، وكل ما يؤثر على تجربة العميل. نقدم تقارير مفصلة تحدد نقاط القوة والضعف وتوصيات عملية للتحسين.",
    image: t1,
    features: [
      "تقييم شامل لرحلة العميل",
      "قياس مستوى الخدمة المقدمة",
      "تحديد نقاط القوة والضعف",
      "توصيات عملية للتحسين",
    ],
    gradient: "from-red-900 via-red-800 to-red-700",
  },
  {
    id: "employee-performance",
    title: "تقييم أداء الموظفين",
    description:
      "تقييم موضوعي لأداء الموظفين وفق معايير محددة لقياس مدى التزامهم بسياسات الشركة وجودة تعاملهم مع العملاء.",
    longDescription:
      "نقدم خدمة متخصصة لتقييم أداء الموظفين من خلال زيارات غير معلنة يقوم بها متسوقون خفيون مدربون. نقيس مدى التزام الموظفين بمعايير وسياسات الشركة، جودة التعامل مع العملاء، المعرفة بالمنتجات والخدمات، وغيرها من المعايير. نقدم تقارير مفصلة تساعد في تحديد احتياجات التدريب وتطوير الأداء.",
    image: t2,
    features: [
      "تقييم موضوعي لأداء الموظفين",
      "قياس الالتزام بمعايير الشركة",
      "تحديد احتياجات التدريب",
      "تقارير أداء فردية وجماعية",
    ],
    gradient: "from-orange-800 via-orange-700 to-orange-600",
  },
  {
    id: "data-analysis",
    title: "جمع وتحليل البيانات",
    description: "جمع وتحليل البيانات من مصادر متعددة لتقديم رؤى قيمة تساعد في اتخاذ قرارات مبنية على معلومات دقيقة.",
    longDescription:
      "نقدم خدمة متكاملة لجمع وتحليل البيانات من مصادر متعددة، بما في ذلك زيارات التسوق الخفي، استطلاعات رأي العملاء، وتحليل وسائل التواصل الاجتماعي. نستخدم أدوات تحليلية متقدمة لاستخراج رؤى قيمة من هذه البيانات وتقديمها في تقارير سهلة الفهم تساعد في اتخاذ قرارات مبنية على معلومات دقيقة.",
    image: t3,
    features: ["جمع بيانات من مصادر متعددة", "تحليل متقدم للبيانات", "رؤى قابلة للتنفيذ", "تقارير سهلة الفهم"],
    gradient: "from-yellow-700 via-yellow-600 to-yellow-500",
  },
  {
    id: "competitive-excellence",
    title: "دعم التميز التنافسي",
    description: "تعزيز القدرة التنافسية للشركات من خلال تقييم المنافسين وتحديد الفرص لتحسين الأداء والخدمة.",
    longDescription:
      "نقدم خدمة متخصصة لدعم التميز التنافسي من خلال تقييم المنافسين وتحديد الفرص لتحسين الأداء والخدمة. نقوم بزيارات تسوق خفي للمنافسين لتقييم خدماتهم ومنتجاتهم، ونقارن النتائج مع أداء الشركة لتحديد نقاط القوة والضعف. نقدم توصيات عملية لتعزيز الميزة التنافسية وتحسين الحصة السوقية.",
    image: t4,
    features: ["تقييم المنافسين", "تحليل مقارن للأداء", "تحديد الفرص التنافسية", "استراتيجيات لتعزيز الميزة التنافسية"],
    gradient: "from-red-800 via-red-700 to-red-600",
  },
]

export default function ServicesPage() {
  const [showWhatsappTooltip, setShowWhatsappTooltip] = useState(false)
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="py-20 relative overflow-hidden">

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
          href="https://wa.me/966531472119"
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
              className="absolute left-full top-1/2 transform -translate-y-1/2 -translate-x-2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md mr-2 whitespace-nowrap"
            >
             تواصل معنا
              <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
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
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-110 transition-transform duration-700 opacity-60"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h2 className="text-3xl font-bold text-white text-center px-6 transform -translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-700 mb-6">{service.longDescription}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">مميزات الخدمة:</h3>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-3 h-3 bg-gradient-to-r from-red-900 to-red-700 rounded-full ml-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
