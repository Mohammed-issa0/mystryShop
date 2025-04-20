"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronRight, ChevronLeft, Quote, Star } from "lucide-react"

import {  MessageCircle } from "lucide-react"
import { AnimatePresence } from "framer-motion"
const testimonials = [
  {
    id: 1,
    name: "شركة الأفق للتجزئة",
    position: "مدير تطوير الأعمال",
    content:
      "ساعدتنا خدمات المتسوق الجديد على تحسين تجربة العملاء بشكل كبير وزيادة معدلات الرضا لدى عملائنا. نتائج التقارير كانت دقيقة ومفصلة وساعدتنا على اتخاذ قرارات مهمة. نقدر احترافية الفريق والتزامهم بتقديم خدمة متميزة.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 2,
    name: "مجموعة النخبة للضيافة",
    position: "المدير التنفيذي",
    content:
      "تعاملنا مع المتسوق الجديد كان تجربة مميزة. الاحترافية العالية والدقة في العمل ساهمت في تطوير خدماتنا وتدريب موظفينا بشكل أفضل. لقد لاحظنا تحسناً ملحوظاً في مستوى الخدمة المقدمة وزيادة في رضا العملاء بعد تنفيذ التوصيات.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 3,
    name: "بنك المستقبل",
    position: "مدير خدمة العملاء",
    content:
      "التقارير التي قدمها فريق المتسوق الجديد ساعدتنا على اكتشاف نقاط الضعف في خدماتنا المصرفية وتحسينها. نتائج ملموسة وتوصيات قابلة للتطبيق. نقدر الاهتمام بالتفاصيل والمهنية العالية التي أظهرها الفريق خلال المشروع.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
  },
  {
    id: 4,
    name: "سلسلة مطاعم الذواقة",
    position: "مدير العمليات",
    content:
      "ساعدتنا خدمات المتسوق الجديد على تحسين جودة الطعام والخدمة في جميع فروعنا. التقارير المفصلة والملاحظات الدقيقة مكنتنا من تحديد المشكلات وحلها بسرعة. نحن ممتنون للفريق على جهودهم المتميزة.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
]

const clients = [
  { id: 1, name: "شركة الأفق للتجزئة", logo: "/placeholder.svg?height=60&width=120" },
  { id: 2, name: "مجموعة النخبة للضيافة", logo: "/placeholder.svg?height=60&width=120" },
  { id: 3, name: "بنك المستقبل", logo: "/placeholder.svg?height=60&width=120" },
  { id: 4, name: "سلسلة مطاعم الذواقة", logo: "/placeholder.svg?height=60&width=120" },
  { id: 5, name: "شركة الاتصالات المتقدمة", logo: "/placeholder.svg?height=60&width=120" },
  { id: 6, name: "مجموعة الصحة الطبية", logo: "/placeholder.svg?height=60&width=120" },
  { id: 7, name: "سلسلة متاجر الأناقة", logo: "/placeholder.svg?height=60&width=120" },
  { id: 8, name: "شركة السفر والسياحة", logo: "/placeholder.svg?height=60&width=120" },
]

export default function ClientsPage() {
  const [showWhatsappTooltip, setShowWhatsappTooltip] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

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

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)
    return () => clearInterval(interval)
  }, [])

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-orange-600">عملاؤنا</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-red-900 to-orange-600 mx-auto mb-6 rounded-full"
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نفتخر بثقة عملائنا ونسعى دائماً لتقديم أفضل الخدمات لهم
          </p>
        </motion.div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">ماذا يقول عملاؤنا عنا</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial indicators */}
            <div className="flex justify-center mb-8 space-x-2 space-x-reverse">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "bg-red-900 w-8" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-10 shadow-2xl border border-gray-100 relative"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-100/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-100/30 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <motion.div
                    animate={{
                      rotate: [0, 10, 0, -10, 0],
                      scale: [1, 1.1, 1, 1.1, 1],
                    }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
                    className="text-red-200"
                  >
                    <Quote className="h-20 w-20" />
                  </motion.div>
                </div>

                <p className="text-2xl text-gray-700 text-center mb-10 italic leading-relaxed">
                  {testimonials[currentIndex].content}
                </p>

                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-red-100 shadow-lg">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      width={96}
                      height={96}
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-1">{testimonials[currentIndex].name}</h4>
                  <p className="text-lg text-gray-600 mb-3">{testimonials[currentIndex].position}</p>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 ${
                          i < testimonials[currentIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center px-4 md:px-0">
              <motion.button
                onClick={prevTestimonial}
                className="p-4 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors border border-gray-200 text-gray-700"
                aria-label="السابق"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="p-4 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors border border-gray-200 text-gray-700"
                aria-label="التالي"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">شركاؤنا في النجاح</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                variants={fadeIn}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center"
              >
                <Image src={client.logo || "/placeholder.svg"} alt={client.name} width={120} height={60} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-gradient-to-r from-gray-50 to-white p-10 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">قصص نجاح</h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            تعرف على قصص نجاح عملائنا وكيف ساعدتهم خدمات المتسوق الخفي على تحسين أدائهم وتعزيز رضا عملائهم
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((story) => (
              <motion.div
                key={story}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: story * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400`}
                    alt={`قصة نجاح ${story}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-900 transition-colors">
                    قصة نجاح {story}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    نجحنا في مساعدة عميلنا على تحسين مستوى الخدمة وزيادة رضا العملاء من خلال تقديم تقارير دقيقة وتوصيات
                    عملية.
                  </p>
                  <button className="text-red-900 font-medium hover:text-red-700 transition-colors">اقرأ المزيد</button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
