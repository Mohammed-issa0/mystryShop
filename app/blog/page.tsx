"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Search } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "أهمية التسوق الخفي في تحسين خدمة العملاء",
    excerpt: "تعرف على كيفية استخدام التسوق الخفي لتحسين خدمة العملاء وزيادة رضاهم عن الخدمات المقدمة.",
    date: "15 مارس 2023",
    author: "أحمد محمد",
    category: "خدمة العملاء",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "كيف تستفيد الشركات من تقارير التسوق الخفي",
    excerpt: "دليل شامل حول كيفية الاستفادة القصوى من تقارير التسوق الخفي لتطوير الأعمال وتحسين الأداء.",
    date: "22 أبريل 2023",
    author: "سارة أحمد",
    category: "تطوير الأعمال",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "أفضل ممارسات التسوق الخفي في قطاع التجزئة",
    excerpt: "تعرف على أفضل الممارسات والاستراتيجيات لتنفيذ برامج التسوق الخفي في قطاع التجزئة.",
    date: "10 مايو 2023",
    author: "محمد علي",
    category: "قطاع التجزئة",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "دور التسوق الخفي في تحسين تجربة العملاء في المطاعم",
    excerpt: "كيف يمكن للمطاعم الاستفادة من التسوق الخفي لتحسين تجربة العملاء وزيادة المبيعات.",
    date: "5 يونيو 2023",
    author: "فاطمة محمود",
    category: "المطاعم",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "قياس أداء الموظفين من خلال التسوق الخفي",
    excerpt: "كيفية استخدام التسوق الخفي كأداة فعالة لقياس أداء الموظفين وتحديد احتياجات التدريب.",
    date: "18 يوليو 2023",
    author: "خالد عبدالله",
    category: "الموارد البشرية",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "التسوق الخفي في العصر الرقمي: التحديات والفرص",
    excerpt: "نظرة على كيفية تطور التسوق الخفي في العصر الرقمي والتحديات والفرص التي يواجهها.",
    date: "3 أغسطس 2023",
    author: "نورة سعيد",
    category: "التكنولوجيا",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const categories = [
  "الكل",
  "خدمة العملاء",
  "تطوير الأعمال",
  "قطاع التجزئة",
  "المطاعم",
  "الموارد البشرية",
  "التكنولوجيا",
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("الكل")

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.includes(searchTerm) || post.excerpt.includes(searchTerm)
    const matchesCategory = selectedCategory === "الكل" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-orange-600">المدونة</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-red-900 to-orange-600 mx-auto mb-6 rounded-full"
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            أحدث المقالات والدراسات حول التسوق الخفي وتحسين تجربة العملاء
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="ابحث في المدونة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={fadeIn}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-xs bg-red-100 text-red-900 px-2 py-1 rounded-full">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-900 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">بواسطة: {post.author}</span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-red-900 font-medium hover:text-red-700 transition-colors group"
                  >
                    اقرأ المزيد
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                    >
                      <ChevronLeft className="mr-1 h-4 w-4" />
                    </motion.span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <p className="text-xl text-gray-600">لا توجد نتائج مطابقة لبحثك</p>
          </div>
        )}
      </div>
    </div>
  )
}
