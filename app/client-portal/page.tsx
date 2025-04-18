"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Eye, EyeOff, LogIn } from "lucide-react"
import Link from "next/link"

export default function ClientPortalPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would handle the form submission
    console.log(formData)
    // For demo purposes, we'll just redirect to the dashboard
    window.location.href = "/client-portal/dashboard"
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">بوابة العملاء</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مرحباً بك في بوابة العملاء الخاصة بالمتسوق الجديد. يرجى تسجيل الدخول للوصول إلى تقاريرك وخدماتك.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">تسجيل الدخول</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  كلمة المرور
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-red-900 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="mr-2 block text-sm text-gray-700">
                    تذكرني
                  </label>
                </div>
                <Link href="/client-portal/forgot-password" className="text-sm text-red-900 hover:text-red-800">
                  نسيت كلمة المرور؟
                </Link>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-6 py-3 bg-red-900 text-white font-bold rounded-md hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  <LogIn className="ml-2 h-5 w-5" />
                  تسجيل الدخول
                </button>
              </div>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                ليس لديك حساب؟{" "}
                <Link href="/contact" className="text-red-900 hover:text-red-800 font-medium">
                  تواصل معنا
                </Link>{" "}
                للحصول على حساب.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
