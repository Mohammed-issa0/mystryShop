"use client"

import { motion } from "framer-motion"
import { RefreshCw } from "lucide-react"

interface SectionErrorFallbackProps {
  title?: string
  message?: string
  onRetry?: () => void
}

export default function SectionErrorFallback({
  title = "حدث خطأ في تحميل هذا القسم",
  message = "نعتذر عن هذا الخطأ، يرجى المحاولة مرة أخرى.",
  onRetry,
}: SectionErrorFallbackProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 bg-red-50 rounded-xl border border-red-200 text-center my-8 max-w-3xl mx-auto"
    >
      <h3 className="text-xl font-bold text-red-800 mb-2">{title}</h3>
      <p className="text-red-600 mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors inline-flex items-center"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          إعادة المحاولة
        </button>
      )}
    </motion.div>
  )
}
