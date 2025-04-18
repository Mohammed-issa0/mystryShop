"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  FileText,
  BarChart2,
  Settings,
  LogOut,
  Download,
  Eye,
  Calendar,
  Clock,
  User,
  Bell,
  HelpCircle,
} from "lucide-react"

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
]

const notifications = [
  {
    id: 1,
    title: "تم إضافة تقرير جديد",
    message: "تم إضافة تقرير تقييم تجربة العملاء للربع الثاني من عام 2023",
    date: "18 يونيو 2023",
    read: false,
  },
  {
    id: 2,
    title: "تحديث حالة التقرير",
    message: "تم تغيير حالة تقرير تقييم أداء الموظفين للربع الثاني من 'قيد الإعداد' إلى 'قيد التنفيذ'",
    date: "25 يونيو 2023",
    read: true,
  },
  {
    id: 3,
    title: "تذكير: اجتماع مراجعة التقارير",
    message: "تذكير باجتماع مراجعة تقارير الربع الأول يوم الخميس القادم الساعة 10:00 صباحاً",
    date: "1 يوليو 2023",
    read: true,
  },
]

export default function ClientDashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl font-bold text-gray-900">لوحة التحكم</h1>
            <p className="text-gray-600">مرحباً بك في بوابة العملاء الخاصة بالمتسوق الجديد</p>
          </motion.div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="relative">
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors relative">
                <Bell className="h-6 w-6 text-gray-700" />
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
            </div>
            <div className="relative">
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <HelpCircle className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/4"
          >
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden ml-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="صورة الملف الشخصي" width={64} height={64} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">شركة الأفق للتجزئة</h2>
                  <p className="text-gray-600">العميل منذ: يناير 2023</p>
                </div>
              </div>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab("dashboard")}
                    className={`w-full flex items-center p-3 rounded-md transition-colors ${
                      activeTab === "dashboard" ? "bg-red-100 text-red-900" : "hover:bg-gray-100"
                    }`}
                  >
                    <BarChart2 className="ml-3 h-5 w-5" />
                    <span>لوحة التحكم</span>
                  </button>
                </li>
                <li>
                  <Link
                    href="/client-portal/reports"
                    className="w-full flex items-center p-3 rounded-md transition-colors hover:bg-gray-100"
                  >
                    <FileText className="ml-3 h-5 w-5" />
                    <span>التقارير</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/client-portal/profile"
                    className="w-full flex items-center p-3 rounded-md transition-colors hover:bg-gray-100"
                  >
                    <User className="ml-3 h-5 w-5" />
                    <span>الملف الشخصي</span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("settings")}
                    className={`w-full flex items-center p-3 rounded-md transition-colors ${
                      activeTab === "settings" ? "bg-red-100 text-red-900" : "hover:bg-gray-100"
                    }`}
                  >
                    <Settings className="ml-3 h-5 w-5" />
                    <span>الإعدادات</span>
                  </button>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  href="/client-portal"
                  className="w-full flex items-center justify-center p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  <LogOut className="ml-2 h-5 w-5" />
                  <span>تسجيل الخروج</span>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-3/4"
          >
            {activeTab === "dashboard" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">إجمالي التقارير</h3>
                    <p className="text-3xl font-bold text-red-900">8</p>
                    <div className="mt-4 text-sm text-gray-600">
                      <span className="text-green-600">+2</span> منذ الشهر الماضي
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">متوسط التقييم</h3>
                    <p className="text-3xl font-bold text-red-900">85%</p>
                    <div className="mt-4 text-sm text-gray-600">
                      <span className="text-green-600">+7%</span> منذ الربع السابق
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">التقارير القادمة</h3>
                    <p className="text-3xl font-bold text-red-900">3</p>
                    <div className="mt-4 text-sm text-gray-600">
                      <span className="text-blue-600">1</span> في الأسبوع القادم
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900">أحدث التقارير</h2>
                    <Link
                      href="/client-portal/reports"
                      className="text-red-900 hover:text-red-700 transition-colors font-medium"
                    >
                      عرض الكل
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {reports.map((report) => (
                      <div
                        key={report.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start">
                          <div className="w-12 h-12 rounded-md overflow-hidden ml-4">
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
                                      : "bg-yellow-100 text-yellow-800"
                                  }`}
                                >
                                  {report.status}
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
                            <button className="p-2 bg-green-100 text-green-800 rounded-md hover:bg-green-200 transition-colors">
                              <Download className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900">الإشعارات</h2>
                    <button className="text-red-900 hover:text-red-700 transition-colors font-medium">
                      تعيين الكل كمقروء
                    </button>
                  </div>
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`border-r-4 ${
                          notification.read ? "border-gray-300" : "border-red-500"
                        } bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow`}
                      >
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{notification.title}</h3>
                        <p className="text-gray-700 mb-2">{notification.message}</p>
                        <p className="text-sm text-gray-500">{notification.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">الإعدادات</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">إعدادات الإشعارات</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-700">إشعارات البريد الإلكتروني</label>
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-red-900 focus:ring-red-500 border-gray-300 rounded"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-700">إشعارات التقارير الجديدة</label>
                        <input
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 text-red-900 focus:ring-red-500 border-gray-300 rounded"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-700">إشعارات التحديثات</label>
                        <input
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 text-red-900 focus:ring-red-500 border-gray-300 rounded"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="px-6 py-2 bg-red-900 text-white font-bold rounded-md hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                        حفظ الإعدادات
                      </button>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">تفضيلات العرض</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">اللغة</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent">
                          <option value="ar" selected>
                            العربية
                          </option>
                          <option value="en">English</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">المنطقة الزمنية</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent">
                          <option value="asia/riyadh" selected>
                            الرياض (GMT+3)
                          </option>
                          <option value="asia/jeddah">جدة (GMT+3)</option>
                          <option value="asia/dubai">دبي (GMT+4)</option>
                          <option value="europe/london">لندن (GMT+0)</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="px-6 py-2 bg-red-900 text-white font-bold rounded-md hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                        حفظ التفضيلات
                      </button>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">الأمان</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-700">تفعيل المصادقة الثنائية</label>
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-red-900 focus:ring-red-500 border-gray-300 rounded"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-700">
                          تسجيل الخروج التلقائي بعد فترة من عدم النشاط
                        </label>
                        <input
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 text-red-900 focus:ring-red-500 border-gray-300 rounded"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="px-6 py-2 bg-red-900 text-white font-bold rounded-md hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                        حفظ إعدادات الأمان
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
