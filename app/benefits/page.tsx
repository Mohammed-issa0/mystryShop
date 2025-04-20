"use client"

import { motion } from "framer-motion"
import { useEffect } from "react";
import { ChevronLeft, MessageCircle } from "lucide-react"
import { AnimatePresence } from "framer-motion"
import {useState } from "react"
import { Search, UserCheck, BookOpen, Award, CheckSquare, TrendingUp, Heart, MessageSquare } from "lucide-react"
import Image from "next/image"
import choose from '../../public/choose.jpg'
const benefits = [
  {
    icon: <Search className="h-16 w-16 text-red-900" />,
    title: "تقييم دقيق لخدمة العملاء",
    description:
      "نقدم تقييماً موضوعياً ودقيقاً لمستوى الخدمة المقدمة للعملاء، مما يساعد الشركات على فهم نقاط القوة والضعف في تجربة العملاء. من خلال متسوقينا الخفيين المدربين، نقيس جودة الخدمة وفق معايير محددة ونقدم تقارير مفصلة تساعد في اتخاذ القرارات الصحيحة.",
    color: "from-red-500/20 to-red-900/20",
  },
  {
    icon: <UserCheck className="h-16 w-16 text-red-900" />,
    title: "قياس التزام الموظفين بالمعايير",
    description:
      "نقيس مدى التزام الموظفين بمعايير وسياسات الشركة، مما يساعد في تحديد مستوى الامتثال وتحديد المجالات التي تحتاج إلى تحسين. من خلال زيارات غير معلنة، نقيم أداء الموظفين وفق معايير محددة مسبقاً ونقدم توصيات لتحسين الأداء.",
    color: "from-orange-500/20 to-orange-900/20",
  },
  {
    icon: <BookOpen className="h-16 w-16 text-red-900" />,
    title: "كشف ثغرات التدريب لتطوير الأداء",
    description:
      "نساعد الشركات على تحديد الفجوات في برامج التدريب من خلال تقييم أداء الموظفين في مواقف حقيقية. هذا يمكّن الشركات من تطوير برامج تدريبية مستهدفة تعالج نقاط الضعف المحددة وتعزز نقاط القوة.",
    color: "from-yellow-500/20 to-yellow-900/20",
  },
  {
    icon: <Award className="h-16 w-16 text-red-900" />,
    title: "تحسين جودة المنتجات والخدمات",
    description:
      "نقدم تقييماً شاملاً لجودة المنتجات والخدمات من وجهة نظر العميل، مما يساعد الشركات على تحسين عروضها. من خلال تقارير مفصلة، نحدد المجالات التي تحتاج إلى تحسين ونقدم توصيات عملية لتطوير المنتجات والخدمات.",
    color: "from-red-500/20 to-red-900/20",
  },
  {
    icon: <CheckSquare className="h-16 w-16 text-red-900" />,
    title: "ضمان اتساق الخدمة في جميع المواقع",
    description:
      "نساعد الشركات متعددة الفروع على ضمان تقديم نفس مستوى الخدمة في جميع المواقع. من خلال زيارات منتظمة لمختلف الفروع، نقيم مدى اتساق الخدمة ونحدد أي تباينات قد تؤثر على تجربة العملاء.",
    color: "from-orange-500/20 to-orange-900/20",
  },
  {
    icon: <TrendingUp className="h-16 w-16 text-red-900" />,
    title: "اكتشاف فرص تسويقية جديدة",
    description:
      "نساعد الشركات على تحديد الفرص التسويقية المحتملة من خلال تحليل تجربة العملاء. قد تكشف تقاريرنا عن احتياجات غير ملباة أو مجالات يمكن للشركة أن تتفوق فيها على المنافسين، مما يفتح آفاقاً جديدة للنمو.",
    color: "from-yellow-500/20 to-yellow-900/20",
  },
  {
    icon: <Heart className="h-16 w-16 text-red-900" />,
    title: "تعزيز رضا العملاء وثقتهم في العلامة",
    description:
      "نساعد الشركات على تحسين مستويات رضا العملاء من خلال تحديد وتصحيح المشكلات التي قد تؤثر على تجربتهم. هذا يؤدي إلى زيادة ولاء العملاء وتعزيز ثقتهم في العلامة التجارية على المدى الطويل.",
    color: "from-red-500/20 to-red-900/20",
  },
  {
    icon: <MessageSquare className="h-16 w-16 text-red-900" />,
    title: "جمع ملاحظات العملاء للتحسين",
    description:
      "نجمع ملاحظات وتعليقات حقيقية من العملاء حول تجربتهم، مما يوفر للشركات رؤى قيمة لتحسين خدماتها. على عكس استطلاعات الرأي التقليدية، تقدم تقاريرنا تعليقات صادقة وغير متحيزة تعكس التجربة الحقيقية للعملاء.",
    color: "from-orange-500/20 to-orange-900/20",
  },
]

export default function BenefitsPage() {
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
        staggerChildren: 0.1,
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-orange-600">
              فوائد التسوق الخفي
            </span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-red-900 to-orange-600 mx-auto mb-6 rounded-full"
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف كيف يمكن لخدمات التسوق الخفي أن تحدث فرقاً كبيراً في أداء مؤسستك وتجربة عملائك
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-12 mb-20"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
              className={`flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/4 flex justify-center">
                <motion.div
                  whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-gradient-to-br ${benefit.color} p-6 rounded-2xl shadow-lg`}
                >
                  {benefit.icon}
                </motion.div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-red-900 mb-4">{benefit.title}</h3>
                <p className="text-lg text-gray-700">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="bg-gradient-to-r from-gray-50 to-white p-10 rounded-2xl shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">لماذا تختار المتسوق الجديد؟</h3>
              <p className="text-lg text-gray-700 mb-4">
                نحن نتميز بفريق من المتسوقين الخفيين المدربين على أعلى مستوى، ومنهجية عمل دقيقة، وتقارير مفصلة تقدم رؤى
                قابلة للتنفيذ.
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-red-900 to-red-700 rounded-full ml-2"></span>
                  <span className="font-medium">فريق متخصص ومدرب</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-red-900 to-red-700 rounded-full ml-2"></span>
                  <span className="font-medium">منهجية عمل احترافية</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-red-900 to-red-700 rounded-full ml-2"></span>
                  <span className="font-medium">تقارير مفصلة وتوصيات عملية</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-red-900 to-red-700 rounded-full ml-2"></span>
                  <span className="font-medium">سرية تامة وموثوقية عالية</span>
                </li>
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-4  rounded-2xl blur-lg opacity-20 transform rotate-3"></div>
              <div className="relative h-[300px] rounded-2xl overflow-hidden  ">
                <Image
                  src={choose}
                  alt="لماذا تختار المتسوق الجديد"
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-110 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
