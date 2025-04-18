"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect } from "react"

export default function AboutPage() {
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-orange-600">من نحن</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-red-900 to-orange-600 mx-auto mb-6 rounded-full"
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تعرف على قصة المتسوق الجديد ورحلتنا في عالم التسوق الخفي
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">من حلم بدأ في السحاب، إلى واقع يلامس النجوم...</h2>
            <p className="text-lg text-gray-700 mb-4">
              قبل أكثر من 7 سنوات، انطلقنا بشغف نحو عالم التسوق الخفي، واضعين الجودة والاحترافية في خدمة تحليل تجربة
              العملاء.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              نؤمن بأن النجاح يكمن في التفاصيل، ولذلك يعمل فريقنا التنفيذي – المكوّن من نخبة خبراء التجربة التسويقية –
              على تقديم حلول دقيقة، مبتكرة، وسرية تُساعد الشركات في تحسين خدماتها وتطوير استراتيجياتها.
            </p>
            <p className="text-lg text-gray-700">
              نواكب أحدث التطورات في عالم التسوق الخفي والتجربة الشرائية لنضمن لعملائنا قرارات مدروسة قائمة على بيانات
              حقيقية.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-red-900 to-orange-600 rounded-2xl blur-lg opacity-20 transform -rotate-6"></div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="فريق المتسوق الجديد"
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <motion.div
            variants={fadeIn}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-red-200 transition-all duration-300"
          >
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-2xl mb-6 inline-block">
              <h3 className="text-2xl font-bold text-red-900 mb-4">رؤيتنا</h3>
            </div>
            <p className="text-lg text-gray-700">الريادة في التسوق الخفي، نُحسّن تجربة العملاء ونرفع معايير الجودة.</p>
          </motion.div>
          <motion.div
            variants={fadeIn}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-red-200 transition-all duration-300"
          >
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-2xl mb-6 inline-block">
              <h3 className="text-2xl font-bold text-red-900 mb-4">رسالتنا</h3>
            </div>
            <p className="text-lg text-gray-700">
              توفير حلول دقيقة وسرية، تُساعد الجهات والشركات والمؤسسات على تحسين الأداء وتعزيز رضا العملاء بفعالية
              واحترافية.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-red-200 transition-all duration-300"
          >
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-2xl mb-6 inline-block">
              <h3 className="text-2xl font-bold text-red-900 mb-4">قيمنا</h3>
            </div>
            <ul className="text-lg text-gray-700 space-y-2">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-red-900 to-red-700 rounded-full ml-2"></span>
                المصداقية
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-red-900 to-red-700 rounded-full ml-2"></span>
                الجودة
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-red-900 to-red-700 rounded-full ml-2"></span>
                السرية
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-gradient-to-r from-gray-50 to-white p-10 rounded-2xl shadow-lg"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">فريقنا</h3>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            يتكون فريقنا من خبراء متخصصين في مجالات التسويق وتجربة العملاء وتحليل البيانات، يعملون معاً لتقديم أفضل
            الحلول لعملائنا.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((member) => (
              <motion.div
                key={member}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: member * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`عضو الفريق ${member}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-red-900 transition-colors">
                    اسم عضو الفريق
                  </h4>
                  <p className="text-gray-600">المسمى الوظيفي</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
