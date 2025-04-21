"use client"
import Slider from "react-slick"
import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronRight, ChevronLeft, Quote, Star } from "lucide-react"
import Link from "next/link"
import l1 from "../../public/l1.jpg";
import l2 from "../../public/l2.jpg";
import l3 from "../../public/l3.jpg";
import l4 from "../../public/l4.jpg";
import l5 from "../../public/l5.jpg";
import l6 from "../../public/l6.jpg";
import l7 from "../../public/l7.jpg";
import l8 from "../../public/l8.jpg";
import l9 from "../../public/l9.jpg";
import l10 from "../../public/l10.jpg";
import l11 from "../../public/l11.jpg";
import l12 from "../../public/l12.jpg";
import l13 from "../../public/l13.jpg";
import l14 from "../../public/l14.jpg";
import l15 from "../../public/l15.jpg";
import l16 from "../../public/l16.jpg";
// استيراد المكون الجديد
import AutoScrollingLogos from "@/components/auto-scrolling-logos"

const testimonials = [
  {
    id: 1,
    name: "White wax",
    position: "مدير التسويق",
    content:
      "ساهمت خدمات المتسوق الجديد في فهم توقعات عملائنا بشكل أفضل، مما مكننا من تطوير المنتجات وتحسين جودة الخدمة المقدمة.",
    image: l1,
    rating: 5,
  },
  {
    id: 2,
    name: "مكنون",
    position: "مدير الجودة",
    content:
      "التقارير التفصيلية التي حصلنا عليها من المتسوق الجديد ساعدتنا في مراقبة الأداء وتحسين كفاءة العمليات في المصنع.",
    image: l2,
    rating: 4,
  },
  {
    id: 3,
    name: "نور الرياض",
    position: "المدير العام",
    content:
      "أظهر لنا المتسوق الجديد العديد من التفاصيل الخفية في تجربة الزبائن. بفضل ملاحظاتهم، قمنا بتطوير بيئة الضيافة وجودة الخدمة.",
    image: l3,
    rating: 5,
  },
  {
    id: 4,
    name: "الكوخ الطبيعي",
    position: "المدير التنفيذي",
    content:
      "التقييمات التي حصلنا عليها كانت مفيدة جداً في تحسين تجربة العملاء في فعالياتنا وتنظيم العمل بشكل أكثر احترافية.",
    image: l4,
    rating: 5,
  },
  {
    id: 5,
    name: "أسمعك",
    position: "مؤسس التطبيق",
    content:
      "المتسوق الجديد كشف لنا نقاط ضعف مهمة في تجربة المستخدم. عملنا على تحسين التطبيق بناءً على ملاحظاتهم وحققنا نتائج ممتازة.",
    image: l5,
    rating: 4,
  },
  {
    id: 6,
    name: "فرقان",
    position: "مدير تجربة العملاء",
    content:
      "من خلال زيارات المتسوق الجديد، استطعنا تعزيز نقاط قوتنا وتحسين الجوانب التي تحتاج تطوير في فروعنا المختلفة.",
    image: l6,
    rating: 5,
  },
];

const clientLogos = [
  l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16
]


export default function TestimonialsSection() {

  const sliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 1000,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }


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

    <Slider {...sliderSettings} className="max-w-6xl mx-auto px-4">
      {clientLogos.map((logo, index) => (
        <div key={index} className="px-4">
          <div className="w-full h-24 flex items-center justify-center">
            <Image src={logo} alt={`شعار ${index + 1}`} width={120} height={60} className="object-contain" />
          </div>
        </div>
      ))}
    </Slider>
  </div>


        
      </div>
    </section>
  )
}
