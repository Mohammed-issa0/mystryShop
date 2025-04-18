"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"

const services = [
  {
    id: "customer-experience",
    title: "تقييم تجربة العملاء",
    description:
      "قياس وتحليل تجربة العملاء من خلال زيارات سرية لتقييم جودة الخدمة المقدمة وتحديد نقاط القوة والضعف في رحلة العميل.",
    longDescription:
      "نقدم خدمة شاملة لتقييم تجربة العملاء من خلال زيارات سرية يقوم بها متسوقون خفيون مدربون. نقيس جودة الخدمة، سرعة الاستجابة، مظهر المكان، سلوك الموظفين، وكل ما يؤثر على تجربة العميل. نقدم تقارير مفصلة تحدد نقاط القوة والضعف وتوصيات عملية للتحسين.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "تقييم شامل لرحلة العميل",
      "قياس مستوى الخدمة المقدمة",
      "تحديد نقاط القوة والضعف",
      "توصيات عملية للتحسين",
    ],
  },
  {
    id: "employee-performance",
    title: "تقييم أداء الموظفين",
    description:
      "تقييم موضوعي لأداء الموظفين وفق معايير محددة لقياس مدى التزامهم بسياسات الشركة وجودة تعاملهم مع العملاء.",
    longDescription:
      "نقدم خدمة متخصصة لتقييم أداء الموظفين من خلال زيارات غير معلنة يقوم بها متسوقون خفيون مدربون. نقيس مدى التزام الموظفين بمعايير وسياسات الشركة، جودة التعامل مع العملاء، المعرفة بالمنتجات والخدمات، وغيرها من المعايير. نقدم تقارير مفصلة تساعد في تحديد احتياجات التدريب وتطوير الأداء.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "تقييم موضوعي لأداء الموظفين",
      "قياس الالتزام بمعايير الشركة",
      "تحديد احتياجات التدريب",
      "تقارير أداء فردية وجماعية",
    ],
  },
  {
    id: "data-analysis",
    title: "جمع وتحليل البيانات",
    description: "جمع وتحليل البيانات من مصادر متعددة لتقديم رؤى قيمة تساعد في اتخاذ قرارات مبنية على معلومات دقيقة.",
    longDescription:
      "نقدم خدمة متكاملة لجمع وتحليل البيانات من مصادر متعددة، بما في ذلك زيارات التسوق الخفي، استطلاعات رأي العملاء، وتحليل وسائل التواصل الاجتماعي. نستخدم أدوات تحليلية متقدمة لاستخراج رؤى قيمة من هذه البيانات وتقديمها في تقارير سهلة الفهم تساعد في اتخاذ قرارات مبنية على معلومات دقيقة.",
    image: "/placeholder.svg?height=600&width=800",
    features: ["جمع بيانات من مصادر متعددة", "تحليل متقدم للبيانات", "رؤى قابلة للتنفيذ", "تقارير سهلة الفهم"],
  },
  {
    id: "competitive-excellence",
    title: "دعم التميز التنافسي",
    description: "تعزيز القدرة التنافسية للشركات من خلال تقييم المنافسين وتحديد الفرص لتحسين الأداء والخدمة.",
    longDescription:
      "نقدم خدمة متخصصة لدعم التميز التنافسي من خلال تقييم المنافسين وتحديد الفرص لتحسين الأداء والخدمة. نقوم بزيارات تسوق خفي للمنافسين لتقييم خدماتهم ومنتجاتهم، ونقارن النتائج مع أداء الشركة لتحديد نقاط القوة والضعف. نقدم توصيات عملية لتعزيز الميزة التنافسية وتحسين الحصة السوقية.",
    image: "/placeholder.svg?height=600&width=800",
    features: ["تقييم المنافسين", "تحليل مقارن للأداء", "تحديد الفرص التنافسية", "استراتيجيات لتعزيز الميزة التنافسية"],
  },
]

export default function ServiceDetailPage() {
  const params = useParams()
  const serviceId = params.id

  const service = services.find((s) => s.id === serviceId) || services[0]

  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    phone: "",
    email: "",
    serviceDetails: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would handle the form submission
    console.log(formData)
    alert("تم إرسال طلبك بنجاح! سنتواصل معك قريباً.")
    // Reset form
    setFormData({
      companyName: "",
      contactName: "",
      phone: "",
      email: "",
      serviceDetails: "",
    })
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{service.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{service.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">تفاصيل الخدمة</h2>
            <p className="text-lg text-gray-700 mb-6">{service.longDescription}</p>
            <h3 className="text-xl font-bold text-gray-900 mb-3">مميزات الخدمة:</h3>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 bg-red-900 rounded-full ml-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image src={service.image || "/placeholder.svg"} alt={service.title} fill style={{ objectFit: "cover" }} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gray-50 p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">طلب الخدمة</h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            يرجى ملء النموذج التالي وسيقوم فريقنا بالتواصل معكم في أقرب وقت ممكن
          </p>
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  اسم الشركة / المؤسسة
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
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="serviceDetails" className="block text-sm font-medium text-gray-700 mb-1">
                تفاصيل الخدمة المطلوبة
              </label>
              <textarea
                id="serviceDetails"
                name="serviceDetails"
                value={formData.serviceDetails}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-red-900 text-white font-bold rounded-md hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                إرسال الطلب
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
