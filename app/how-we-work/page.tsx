"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { ClipboardList, Phone, FileText, Play, BarChart2, FileCheck } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    icon: <ClipboardList className="h-16 w-16 text-white" />,
    title: "استلام الطلب",
    description: "نستلم طلبك ونقوم بدراسته بعناية لفهم احتياجاتك ومتطلباتك بشكل دقيق.",
    details:
      "عند استلام طلبك، يقوم فريقنا المتخصص بدراسة تفاصيل الطلب بعناية لفهم طبيعة نشاطك التجاري واحتياجاتك الخاصة. نحرص على فهم أهدافك من خدمة التسوق الخفي لضمان تقديم خدمة تلبي توقعاتك.",
    color: "from-red-900 to-red-700",
  },
  {
    icon: <Phone className="h-16 w-16 text-white" />,
    title: "التواصل لفهم الاحتياج",
    description: "نتواصل معك لفهم احتياجاتك بشكل دقيق ومناقشة تفاصيل المشروع.",
    details:
      "يقوم مدير المشروع بالتواصل معك لمناقشة تفاصيل المشروع وفهم احتياجاتك بشكل أعمق. نستمع إلى متطلباتك ونقدم المشورة المهنية لتحديد أفضل نهج لتحقيق أهدافك. هذه المرحلة مهمة لضمان توافق توقعاتك مع الخدمة التي سنقدمها.",
    color: "from-orange-800 to-orange-600",
  },
  {
    icon: <FileText className="h-16 w-16 text-white" />,
    title: "وضع استراتيجية",
    description: "نضع خطة عمل مناسبة لتحقيق أهدافك وتلبية احتياجاتك.",
    details:
      "بناءً على المعلومات التي جمعناها، نقوم بوضع استراتيجية مخصصة تناسب احتياجاتك. نحدد المعايير التي سيتم تقييمها، ونصمم نماذج التقييم، ونختار المتسوقين الخفيين المناسبين لطبيعة نشاطك. نشارك معك الخطة للحصول على موافقتك قبل البدء في التنفيذ.",
    color: "from-yellow-700 to-yellow-500",
  },
  {
    icon: <Play className="h-16 w-16 text-white" />,
    title: "البدء بالتنفيذ",
    description: "نبدأ بتنفيذ الخطة وفق المعايير المتفق عليها وبأعلى مستويات الاحترافية.",
    details:
      "بعد الموافقة على الخطة، نبدأ في تنفيذ زيارات التسوق الخفي وفق الجدول الزمني المتفق عليه. يقوم متسوقونا الخفيون المدربون بزيارة المواقع المحددة وتقييم الخدمة وفق المعايير المتفق عليها. نضمن تنفيذ الزيارات بأعلى مستويات الدقة والاحترافية.",
    color: "from-red-900 to-red-700",
  },
  {
    icon: <BarChart2 className="h-16 w-16 text-white" />,
    title: "تحليل البيانات",
    description: "نقوم بتحليل البيانات التي تم جمعها بدقة لاستخراج رؤى قيمة.",
    details:
      "بعد اكتمال الزيارات، يقوم فريق التحليل لدينا بمراجعة وتحليل البيانات التي تم جمعها. نستخدم أدوات تحليلية متقدمة لاستخراج رؤى قيمة من البيانات وتحديد الاتجاهات والأنماط. نقوم بتحليل نقاط القوة والضعف ونحدد فرص التحسين.",
    color: "from-orange-800 to-orange-600",
  },
  {
    icon: <FileCheck className="h-16 w-16 text-white" />,
    title: "تسليم التقرير",
    description: "نقدم تقريراً شاملاً بالنتائج والتوصيات لمساعدتك على تحسين الأداء.",
    details:
      "نقدم لك تقريراً شاملاً يتضمن نتائج التقييم، تحليل البيانات، والتوصيات العملية للتحسين. نعقد اجتماعاً لمناقشة التقرير والإجابة على أسئلتك. نقدم توصيات محددة وقابلة للتنفيذ لمساعدتك على تحسين الأداء وتعزيز تجربة العملاء.",
    color: "from-yellow-700 to-yellow-500",
  },
]

export default function HowWeWorkPage() {
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-orange-600">كيف نعمل؟</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-red-900 to-orange-600 mx-auto mb-6 rounded-full"
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نتبع منهجية عمل احترافية ومنظمة لضمان تقديم أفضل النتائج لعملائنا
          </p>
        </motion.div>

        <div className="relative mb-20">
          {/* Connecting Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-red-200 via-orange-300 to-yellow-200 hidden md:block"></div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-16"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
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
                    <p className="text-lg text-gray-700 mb-4">{step.description}</p>
                    <p className="text-gray-600">{step.details}</p>
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
          transition={{ duration: 0.7, delay: 0.8 }}
          className="bg-gradient-to-r from-gray-50 to-white p-10 rounded-2xl shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">لماذا منهجيتنا فعالة؟</h3>
              <p className="text-lg text-gray-700 mb-4">
                تضمن منهجيتنا المنظمة والشاملة تقديم خدمة عالية الجودة تلبي احتياجات عملائنا وتحقق أهدافهم. نحن نركز
                على:
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-red-900 to-red-700 rounded-full ml-2"></span>
                  <span className="font-medium">فهم عميق لاحتياجات العميل</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-red-900 to-red-700 rounded-full ml-2"></span>
                  <span className="font-medium">تخطيط دقيق للمشروع</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-red-900 to-red-700 rounded-full ml-2"></span>
                  <span className="font-medium">تنفيذ احترافي للزيارات</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-red-900 to-red-700 rounded-full ml-2"></span>
                  <span className="font-medium">تحليل متعمق للبيانات</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-red-900 to-red-700 rounded-full ml-2"></span>
                  <span className="font-medium">توصيات عملية قابلة للتنفيذ</span>
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
              <div className="absolute -inset-4 bg-gradient-to-r from-red-900 to-orange-600 rounded-2xl blur-lg opacity-20 transform rotate-3"></div>
              <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="منهجية العمل"
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
