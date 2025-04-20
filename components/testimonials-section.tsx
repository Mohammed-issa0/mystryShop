"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronRight, ChevronLeft, Quote, Star } from "lucide-react"
import Link from "next/link"

// استيراد المكون الجديد
import AutoScrollingLogos from "@/components/auto-scrolling-logos"

const testimonials = [
  {
    id: 1,
    name: "شركة مشرقة لمستحضرات التجميل",
    position: "مدير التسويق",
    content:
      "ساهمت خدمات المتسوق الجديد في فهم توقعات عملائنا بشكل أفضل، مما مكننا من تطوير المنتجات وتحسين جودة الخدمة المقدمة.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 2,
    name: "المصنع السعودي",
    position: "مدير الجودة",
    content:
      "التقارير التفصيلية التي حصلنا عليها من المتسوق الجديد ساعدتنا في مراقبة الأداء وتحسين كفاءة العمليات في المصنع.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
  },
  {
    id: 3,
    name: "مقاهي المها",
    position: "المدير العام",
    content:
      "أظهر لنا المتسوق الجديد العديد من التفاصيل الخفية في تجربة الزبائن. بفضل ملاحظاتهم، قمنا بتطوير بيئة الضيافة وجودة الخدمة.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 4,
    name: "شركة وفادة لتنظيم الاحتفالات والمعارض",
    position: "المدير التنفيذي",
    content:
      "التقييمات التي حصلنا عليها كانت مفيدة جداً في تحسين تجربة العملاء في فعالياتنا وتنظيم العمل بشكل أكثر احترافية.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 5,
    name: "تطبيق أمرك",
    position: "مؤسس التطبيق",
    content:
      "المتسوق الجديد كشف لنا نقاط ضعف مهمة في تجربة المستخدم. عملنا على تحسين التطبيق بناءً على ملاحظاتهم وحققنا نتائج ممتازة.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
  },
  {
    id: 6,
    name: "الشمع الأبيض",
    position: "مدير تجربة العملاء",
    content:
      "من خلال زيارات المتسوق الجديد، استطعنا تعزيز نقاط قوتنا وتحسين الجوانب التي تحتاج تطوير في فروعنا المختلفة.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
];


const clientLogos = [
  { id: 1, name: "شركة الأفق للتجزئة", logo: "/placeholder.svg?height=60&width=120" },
  { id: 2, name: "مجموعة النخبة للضيافة", logo: "/placeholder.svg?height=60&width=120" },
  { id: 3, name: "بنك المستقبل", logo: "/placeholder.svg?height=60&width=120" },
  { id: 4, name: "سلسلة مطاعم الذواقة", logo: "/placeholder.svg?height=60&width=120" },
  { id: 5, name: "شركة الاتصالات المتقدمة", logo: "/placeholder.svg?height=60&width=120" },
  { id: 6, name: "مجموعة الصحة الطبية", logo: "/placeholder.svg?height=60&width=120" },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)
    return () => clearInterval(interval)
  }, [])

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
      transition: { duration: 0.5 },
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
              آراء عملائنا
            </motion.div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-orange-600">عملاؤنا</span>{" "}
            المميزون
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-red-900 to-orange-600 mx-auto mb-6 rounded-full"
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نفتخر بثقة عملائنا ونسعى دائماً لتقديم أفضل الخدمات لهم
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto mb-20">
          {/* Testimonial indicators */}
          <div className="flex justify-center mb-8 space-x-2 space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-red-900 w-6 md:w-8 h-2 md:h-3 rounded-full"
                    : "bg-gray-300 w-2 md:w-3 h-2 md:h-3 rounded-full"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Testimonial card */}
          <motion.div
  key={currentIndex}
  initial={{ opacity: 0, scale: 0.9, y: 20 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  exit={{ opacity: 0, scale: 0.9, y: 20 }}
  transition={{ type: "spring", stiffness: 100, damping: 15 }}
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

              <p className="text-lg md:text-2xl text-gray-700 text-center mb-6 md:mb-10 italic leading-relaxed">
                {testimonials[currentIndex].content}
              </p>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 border-4 border-red-100 shadow-lg">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={96}
                    height={96}
                  />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{testimonials[currentIndex].name}</h4>
                <p className="text-base md:text-lg text-gray-600 mb-3">{testimonials[currentIndex].position}</p>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 md:h-6 md:w-6 ${
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

        {/* Client logos */}
        <div className="mb-20">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.4 }}
    className="text-3xl font-bold text-gray-900 mb-8 text-center"
  >
    شركاؤنا في النجاح
  </motion.h2>

  <AutoScrollingLogos logos={clientLogos} />
</div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Link
            href="/clients"
            className="inline-flex items-center bg-gradient-to-r from-red-900 to-red-700 text-white px-8 py-4 rounded-xl hover:from-red-800 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="font-bold text-lg">تعرف على المزيد من عملائنا</span>
            <ChevronLeft className="mr-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
