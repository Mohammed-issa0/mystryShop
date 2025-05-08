"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, MessageSquare, Link } from "lucide-react"
import Image from "next/image"
import map from "../../public/map.png"
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // صياغة محتوى الرسالة
    const message = `
  *رسالة جديدة من الموقع:*
  الاسم: ${formData.name}
  البريد الإلكتروني: ${formData.email}
  رقم الهاتف: ${formData.phone}
  الموضوع: ${formData.subject}
  الرسالة: ${formData.message}
  `;
  
    // رقم الواتساب (بدون "+"، ابدأ بـ 966 للسعودية مثلاً)
    const whatsappNumber = "966531472119";
  
    // فتح واتساب بالرابط
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  
    // تنبيه المستخدم
    alert("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
  
    // إعادة تعيين الفورم
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };
  

  
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-orange-600">اتصل بنا</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-red-900 to-orange-600 mx-auto mb-6 rounded-full"
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن هنا للإجابة على استفساراتك ومساعدتك في تحسين أداء مؤسستك
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">تواصل معنا</h2>
            <p className="text-lg text-gray-700 mb-8">
              يسعدنا التواصل معك والإجابة على جميع استفساراتك. يمكنك التواصل معنا من خلال النموذج المرفق أو من خلال
              وسائل الاتصال التالية:
            </p>
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
              <motion.div variants={fadeIn} className="flex items-start">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-3 rounded-2xl ml-4">
                  <Phone className="h-6 w-6 text-red-900" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">رقم الهاتف</h3>
                  <p className="text-gray-700" dir="ltr">+966 531472119</p>
                </div>
              </motion.div>
              <motion.div variants={fadeIn} className="flex items-start">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-3 rounded-2xl ml-4">
                  <Mail className="h-6 w-6 text-red-900" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">البريد الإلكتروني</h3>
                  <p className="text-gray-700">info@cornermak.com</p>
                </div>
              </motion.div>
              <motion.div variants={fadeIn} className="flex items-start">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-3 rounded-2xl ml-4">
                  <MapPin className="h-6 w-6 text-red-900" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">العنوان</h3>
                  <p className="text-gray-700">المملكة العربية السعودية-الرياض-شارع النخيل <br/> ص : ب 3362 - الرمز : 14723 - سجل تجاري 1010499776</p>
                  {/* <p className="text-gray-700">شارع الملك فهد، برج الأعمال، الطابق 15</p> */}
                </div>
              </motion.div>
              <motion.div variants={fadeIn} className="flex items-start">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-3 rounded-2xl ml-4">
                  <MessageSquare className="h-6 w-6 text-red-900" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">ساعات العمل</h3>
                  <p className="text-gray-700">الأحد - الخميس: 9:00 صباحاً - 5:00 مساءً</p>
                  <p className="text-gray-700">الجمعة - السبت: مغلق</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">أرسل رسالة</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  رقم الجوال
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  الموضوع
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                ></textarea>
              </div>
              <div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-red-900 to-red-700 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  إرسال الرسالة
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-gradient-to-r from-gray-50 to-white p-10 rounded-2xl shadow-lg"
        > 
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">موقعنا</h2>
          <div className="h-[400px] bg-gray-300 rounded-2xl overflow-hidden relative">
            {/* Here you would integrate a map component */}
            <div className="w-full h-full flex items-center justify-center">
              
              
              <Image src={map} alt="map" className="object-cover"   />
              
              
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]"></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
