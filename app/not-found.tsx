"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-lg w-full text-center"
      >
        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Search className="h-10 w-10 text-orange-600" />
        </div>
        <h1 className="text-6xl font-bold text-gray-900 mb-3">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">الصفحة غير موجودة</h2>
        <p className="text-gray-600 mb-6">عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو حذفها.</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="px-6 py-3 bg-red-900 text-white rounded-xl hover:bg-red-800 transition-colors inline-flex items-center"
          >
            <Home className="h-5 w-5 ml-2" />
            العودة للصفحة الرئيسية
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
