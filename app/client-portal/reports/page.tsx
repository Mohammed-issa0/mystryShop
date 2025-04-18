"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, Eye, Calendar, Clock, Search, Filter } from "lucide-react"

const reports = [
  {
    id: 1,
    title: "تقرير تقييم تجربة العملاء - الربع الأول 2023",
    date: "15 مارس 2023",
    time: "10:30 صباحاً",
    status: "مكتمل",
    type: "تقييم تجربة العملاء",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    title: "تقرير تقييم أداء الموظفين - الربع الأول 2023",
    date: "22 مارس 2023",
    time: "11:45 صباحاً",
    status: "مكتمل",
    type: "تقييم أداء الموظفين",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    title: "تقرير تحليل البيانات - الربع الأول 2023",
    date: "5 أبريل 2023",
    time: "2:15 مساءً",
    status: "مكتمل",
    type: "تحليل البيانات",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    title: "تقرير تقييم تجربة العملاء - الربع الثاني 2023",
    date: "18 يونيو 2023",
    time: "9:00 صباحاً",
    status: "مكتمل",
    type: "تقييم تجربة العملاء",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    title: "تقرير تقييم أداء الموظفين - الربع الثاني 2023",
    date: "25 يونيو 2023",
    time: "1:30 مساءً",
    status: "قيد التنفيذ",
    type: "تقييم أداء الموظفين",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    title: "تقرير تحليل البيانات - الربع الثاني 2023",
    date: "10 يوليو 2023",
    time: "11:00 صباحاً",
    status: "قيد التنفيذ",
    type: "تحليل البيانات",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 7,
    title: "تقرير تقييم المنافسين - الربع الثاني 2023",
    date: "20 يوليو 2023",
    time: "3:45 مساءً",
    status: "قيد الإعداد",
    type: "تقييم المنافسين",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 8,
    title: "تقرير تقييم تجربة العملاء - الربع الثالث 2023",
    date: "15 سبتمبر 2023",
    time: "10:15 صباحاً",
    status: "مجدول",
    type: "تقييم تجربة العملاء",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const reportTypes = ["الكل", "تقييم تجربة العملاء", "تقييم أداء الموظفين", "تحليل البيانات", "تقييم المنافسين"]
const statusTypes = ["الكل", "مكتمل", "قيد التنفيذ", "قيد الإعداد", "مجدول"]

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("الكل")
  const [selectedStatus, setSelectedStatus] = useState("الكل")

  const filteredReports = reports.filter((report) => {
    const matchesSearch = report.title.includes(searchTerm)
    const matchesType = selectedType === "الكل" || report.type === selectedType
    const matchesStatus = selectedStatus === "الكل" || report.status === selectedStatus
    return matchesSearch && matchesType && matchesStatus
  })

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
          <h1 className="text-3xl font-bold text-gray-900">التقارير</h1>
          <p className="text-gray-600">عرض وتحميل تقارير التسوق الخفي الخاصة بك</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-md mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن تقرير..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-700">نوع التقرير:</span>
              </div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                {reportTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-700">حالة التقرير:</span>
              </div>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                {statusTypes.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">قائمة التقارير</h2>
            <p className="text-gray-600">عدد التقارير: {filteredReports.length}</p>
          </div>

          <div className="divide-y divide-gray-200">
            {filteredReports.length > 0 ? (
              filteredReports.map((report) => (
                <div key={report.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-md overflow-hidden ml-4 flex-shrink-0">
                      <Image src={report.image || "/placeholder.svg"} alt={report.title} width={48} height={48} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-gray-900">{report.title}</h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="ml-1 h-4 w-4" />
                          <span>{report.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="ml-1 h-4 w-4" />
                          <span>{report.time}</span>
                        </div>
                        <div>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              report.status === "مكتمل"
                                ? "bg-green-100 text-green-800"
                                : report.status === "قيد التنفيذ"
                                  ? "bg-blue-100 text-blue-800"
                                  : report.status === "قيد الإعداد"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-purple-100 text-purple-800"
                            }`}
                          >
                            {report.status}
                          </span>
                        </div>
                        <div>
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                            {report.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 space-x-reverse">
                      <Link
                        href={`/client-portal/reports/${report.id}`}
                        className="p-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors"
                      >
                        <Eye className="h-5 w-5" />
                      </Link>
                      <button
                        className={`p-2 rounded-md ${
                          report.status === "مكتمل"
                            ? "bg-green-100 text-green-800 hover:bg-green-200"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        } transition-colors`}
                        disabled={report.status !== "مكتمل"}
                      >
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-500">لا توجد تقارير مطابقة للبحث</p>
              </div>
            )}
          </div>

          {filteredReports.length > 0 && (
            <div className="p-6 border-t border-gray-200 flex justify-between items-center">
              <div className="text-gray-600">
                عرض 1-{filteredReports.length} من {filteredReports.length}
              </div>
              <div className="flex space-x-2 space-x-reverse">
                <button className="px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors">
                  السابق
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors">
                  التالي
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
