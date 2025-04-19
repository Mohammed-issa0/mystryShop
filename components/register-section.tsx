"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { UserPlus, CheckCircle } from "lucide-react"
import { useMemo } from "react";

export default function RegisterSection() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    city: "",
    phone: "",
    education: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would handle the form submission
    console.log(formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        gender: "",
        age: "",
        city: "",
        phone: "",
        education: "",
      })
    }, 5000)
  }

  const formVariants = {
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


  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 5,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-900 via-red-800 to-orange-700">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute top-[10%] left-[10%] w-96 h-96 rounded-full bg-orange-400/30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute bottom-[20%] right-[15%] w-96 h-96 rounded-full bg-red-500/30 blur-3xl"
        />

        {/* Floating particles */}
        {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white/30"
          style={{
            top: particle.top,
            left: particle.left,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 text-white"
        >
          <div className="inline-block mb-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg"
            >
              انضم إلينا
            </motion.div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            سجل كـ
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              متسوق خفي
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-yellow-300 to-yellow-500 mx-auto mb-6 rounded-full"
          ></motion.div>
          <p className="text-xl max-w-3xl mx-auto">انضم إلى فريقنا من المتسوقين الخفيين وساهم في تحسين جودة الخدمات</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={formVariants}
          initial="hidden"
          animate={controls}
          className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 text-white border border-white/20"
        >
          {!isSubmitted ? (
            <>
              <div className="flex items-center justify-center mb-10">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-5 rounded-2xl shadow-lg"
                >
                  <UserPlus className="h-14 w-14 text-white" />
                </motion.div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-white/50"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="gender" className="block text-sm font-medium mb-2">
                      الجنس
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                    >
                      <option value="" className="bg-red-900">
                        اختر
                      </option>
                      <option value="male" className="bg-red-900">
                        ذكر
                      </option>
                      <option value="female" className="bg-red-900">
                        أنثى
                      </option>
                    </select>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="age" className="block text-sm font-medium mb-2">
                      العمر
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-white/50"
                      placeholder="أدخل عمرك"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="city" className="block text-sm font-medium mb-2">
                      المدينة
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-white/50"
                      placeholder="أدخل مدينتك"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      رقم الجوال
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-white/50"
                      placeholder="أدخل رقم جوالك"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="education" className="block text-sm font-medium mb-2">
                      المستوى التعليمي
                    </label>
                    <select
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                    >
                      <option value="" className="bg-red-900">
                        اختر
                      </option>
                      <option value="high-school" className="bg-red-900">
                        ثانوي
                      </option>
                      <option value="diploma" className="bg-red-900">
                        دبلوم
                      </option>
                      <option value="bachelor" className="bg-red-900">
                        بكالوريوس
                      </option>
                      <option value="master" className="bg-red-900">
                        ماجستير
                      </option>
                      <option value="phd" className="bg-red-900">
                        دكتوراه
                      </option>
                    </select>
                  </motion.div>
                </div>
                <motion.div variants={itemVariants} className="flex justify-center mt-8">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    تسجيل كمتسوق خفي
                  </motion.button>
                </motion.div>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-8"
              >
                <CheckCircle className="h-24 w-24 text-yellow-400" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-6">تم إرسال طلبك بنجاح!</h3>
              <p className="text-xl text-white/80 mb-8">سنقوم بالتواصل معك قريباً لاستكمال إجراءات التسجيل.</p>

              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-1 bg-yellow-400 rounded-full mx-auto mb-8"
              />

              <p className="text-white/60">جاري إعادة تعيين النموذج...</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
