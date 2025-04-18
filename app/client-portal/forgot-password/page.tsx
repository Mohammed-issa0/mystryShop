"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Send } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would handle the password reset request
    console.log("Password reset requested for:", email)
    setSubmitted(true)
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">استعادة كلمة المرور</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            أدخل بريدك الإلكتروني وسنرسل لك رابطاً لإعادة تعيين كلمة المرور
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">استعادة كلمة المرور</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center px-6 py-3 bg-red-900 text-white font-bold rounded-md hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      <Send className="ml-2 h-5 w-5" />
                      إرسال رابط الاستعادة
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="bg-green-100 text-green-800 p-4 rounded-md mb-6">
                  تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني. يرجى التحقق من صندوق الوارد الخاص بك.
                </div>
                <p className="mb-4">
                  إذا لم تستلم البريد الإلكتروني خلال بضع دقائق، يرجى التحقق من مجلد البريد غير المرغوب فيه.
                </p>
              </div>
            )}
            <div className="mt-6 text-center">
              <Link
                href="/client-portal"
                className="inline-flex items-center text-red-900 hover:text-red-800 font-medium"
              >
                <ArrowRight className="ml-1 h-4 w-4" />
                العودة إلى صفحة تسجيل الدخول
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
