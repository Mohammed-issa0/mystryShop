"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Save, Upload } from "lucide-react"

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    companyName: "شركة الأفق للتجزئة",
    contactName: "محمد أحمد",
    email: "info@alofuq.com",
    phone: "+966 12 345 6789",
    address: "الرياض، المملكة العربية السعودية",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would handle the form submission
    console.log("Profile updated:", formData)
    alert("تم تحديث الملف الشخصي بنجاح")
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/client-portal/dashboard"
            className="inline-flex items-center text-red-900 hover:text-red-800 font-medium mb-6"
          >
            <ArrowRight className="ml-1 h-4 w-4" />
            العودة إلى لوحة التحكم
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">الملف الشخصي</h1>
          <p className="text-gray-600">إدارة معلومات حسابك الشخصي</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="صورة الملف الشخصي"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                  <Upload className="ml-2 h-4 w-4" />
                  تغيير الصورة
                </button>
              </div>
              <div className="md:w-2/3">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                      اسم الشركة
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                      اسم المسؤول
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      العنوان
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex items-center px-6 py-3 bg-red-900 text-white font-bold rounded-md hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      <Save className="ml-2 h-5 w-5" />
                      حفظ التغييرات
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-md mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">تغيير كلمة المرور</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    كلمة المرور الحالية
                  </label>
                  <input
                    type="password"
                    id="currentPassword"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    كلمة المرور الجديدة
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    تأكيد كلمة المرور الجديدة
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex items-center px-6 py-3 bg-red-900 text-white font-bold rounded-md hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  <Save className="ml-2 h-5 w-5" />
                  تغيير كلمة المرور
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
