"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import k1 from '../../../public/k1.jpg'
import k2 from '../../../public/k2.jpg'
import k3 from '../../../public/k3.jpg'
import k4 from '../../../public/k4.jpg'
import k5 from '../../../public/k5.webp'
import k6 from '../../../public/k6.jpg'
import k7 from '../../../public/k7.jpg'
import k8 from '../../../public/k8.jpg'
import k9 from '../../../public/k9.jpg'

const sectors = [
  {
    id: "government",
    title: "قطاع الخدمات الحكومية",
    description: "تحسين جودة الخدمات الحكومية المقدمة للمواطنين",
    longDescription:
      "نقدم خدمات التسوق الخفي للجهات الحكومية لتقييم جودة الخدمات المقدمة للمواطنين وتحديد فرص التحسين. نساعد الجهات الحكومية على تحسين تجربة المستفيدين وتطوير الخدمات بما يلبي احتياجات المواطنين ويعزز رضاهم.",
    image: k1,
    benefits: [
      "تقييم جودة الخدمات المقدمة للمواطنين",
      "تحديد نقاط الضعف في الإجراءات والعمليات",
      "قياس مستوى رضا المستفيدين",
      "تطوير الخدمات وتحسين تجربة المستفيدين",
    ],
  },
  {
    id: "healthcare",
    title: "الرعاية الصحية والمستشفيات",
    description: "تقييم تجربة المرضى وتحسين الخدمات الصحية",
    longDescription:
      "نقدم خدمات التسوق الخفي للمستشفيات ومراكز الرعاية الصحية لتقييم تجربة المرضى وجودة الخدمات المقدمة. نساعد مقدمي الرعاية الصحية على تحسين خدماتهم وتعزيز رضا المرضى من خلال تقييم شامل للعمليات والإجراءات.",
    image: k2,
    benefits: [
      "تقييم تجربة المريض من الاستقبال حتى المغادرة",
      "قياس جودة الخدمات الطبية والإدارية",
      "تحديد فرص التحسين في العمليات والإجراءات",
      "تعزيز رضا المرضى وتحسين سمعة المنشأة الصحية",
    ],
  },
  {
    id: "food",
    title: "المأكولات والمشروبات",
    description: "ضمان جودة الخدمة والمنتجات في المطاعم والمقاهي",
    longDescription:
      "نقدم خدمات التسوق الخفي للمطاعم والمقاهي لتقييم جودة الطعام والخدمة المقدمة للعملاء. نساعد أصحاب المطاعم والمقاهي على تحسين تجربة العملاء وضمان جودة المنتجات والخدمات في جميع الفروع.",
    image: k3,
    benefits: [
      "تقييم جودة الطعام والمشروبات",
      "قياس مستوى الخدمة المقدمة",
      "تقييم نظافة المكان وجودة البيئة",
      "ضمان اتساق الجودة في جميع الفروع",
    ],
  },
  {
    id: "retail",
    title: "قطاع التجزئة ومبيعات الجملة",
    description: "تحسين تجربة التسوق وزيادة المبيعات",
    longDescription:
      "نقدم خدمات التسوق الخفي لمتاجر التجزئة ومبيعات الجملة لتقييم تجربة التسوق وجودة الخدمة المقدمة للعملاء. نساعد أصحاب المتاجر على تحسين تجربة العملاء وزيادة المبيعات من خلال تقييم شامل للعمليات والإجراءات.",
    image: k4,
    benefits: [
      "تقييم تجربة التسوق من بداية دخول العميل حتى مغادرته",
      "قياس جودة الخدمة المقدمة من الموظفين",
      "تقييم عرض المنتجات وتنظيم المتجر",
      "تحديد فرص التحسين لزيادة المبيعات",
    ],
  },
  {
    id: "hospitality",
    title: "قطاع الضيافة",
    description: "رفع مستوى الخدمة في الفنادق والمنتجعات",
    longDescription:
      "نقدم خدمات التسوق الخفي للفنادق والمنتجعات لتقييم جودة الخدمة المقدمة للنزلاء. نساعد أصحاب الفنادق والمنتجعات على تحسين تجربة النزلاء وضمان جودة الخدمات في جميع الأقسام.",
    image: k5,
    benefits: [
      "تقييم تجربة النزيل من الحجز حتى المغادرة",
      "قياس جودة الخدمات في جميع أقسام الفندق",
      "تقييم نظافة الغرف والمرافق العامة",
      "تحديد فرص التحسين لتعزيز رضا النزلاء",
    ],
  },
  {
    id: "tourism",
    title: "السفر والسياحة",
    description: "تقييم وتطوير الخدمات السياحية",
    longDescription:
      "نقدم خدمات التسوق الخفي لشركات السفر والسياحة لتقييم جودة الخدمات المقدمة للعملاء. نساعد شركات السفر والسياحة على تحسين تجربة العملاء وضمان جودة الخدمات في جميع مراحل الرحلة.",
    image: k6,
    benefits: [
      "تقييم تجربة العميل من الحجز حتى العودة",
      "قياس جودة الخدمات المقدمة خلال الرحلة",
      "تقييم أداء المرشدين السياحيين والموظفين",
      "تحديد فرص التحسين لتعزيز رضا العملاء",
    ],
  },
  {
    id: "banking",
    title: "قطاع البنوك",
    description: "تحسين تجربة العملاء في الخدمات المصرفية",
    longDescription:
      "نقدم خدمات التسوق الخفي للبنوك والمؤسسات المالية لتقييم جودة الخدمات المصرفية المقدمة للعملاء. نساعد البنوك على تحسين تجربة العملاء وضمان جودة الخدمات في جميع الفروع والقنوات.",
    image: k7,
    benefits: [
      "تقييم تجربة العميل في الفروع والقنوات الرقمية",
      "قياس جودة الخدمات المصرفية المقدمة",
      "تقييم أداء موظفي خدمة العملاء",
      "تحديد فرص التحسين لتعزيز رضا العملاء",
    ],
  },
  {
    id: "education",
    title: "قطاع التعليم والتدريب",
    description: "تقييم جودة الخدمات التعليمية والتدريبية",
    longDescription:
      "نقدم خدمات التسوق الخفي للمؤسسات التعليمية ومراكز التدريب لتقييم جودة الخدمات المقدمة للطلاب والمتدربين. نساعد المؤسسات التعليمية على تحسين تجربة الطلاب وضمان جودة الخدمات في جميع الأقسام.",
    image: k8,
    benefits: [
      "تقييم تجربة الطالب من التسجيل حتى التخرج",
      "قياس جودة الخدمات التعليمية والإدارية",
      "تقييم أداء المعلمين والمدربين",
      "تحديد فرص التحسين لتعزيز رضا الطلاب والمتدربين",
    ],
  },
  {
    id: "maintenance",
    title: "مراكز الصيانة وخدمة العملاء",
    description: "تحسين خدمات ما بعد البيع والصيانة",
    longDescription:
      "نقدم خدمات التسوق الخفي لمراكز الصيانة وخدمة العملاء لتقييم جودة الخدمات المقدمة للعملاء. نساعد مراكز الصيانة على تحسين تجربة العملاء وضمان جودة الخدمات في جميع المراكز.",
    image: k9,
    benefits: [
      "تقييم تجربة العميل من استلام الطلب حتى تسليم الخدمة",
      "قياس جودة خدمات الصيانة المقدمة",
      "تقييم أداء الفنيين وموظفي خدمة العملاء",
      "تحديد فرص التحسين لتعزيز رضا العملاء",
    ],
  },
]

export default function SectorDetailPage() {
  const params = useParams()
  const sectorId = params.id

  const sector = sectors.find((s) => s.id === sectorId) || sectors[0]

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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{sector.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{sector.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">خدماتنا في {sector.title}</h2>
            <p className="text-lg text-gray-700 mb-6">{sector.longDescription}</p>
            <h3 className="text-xl font-bold text-gray-900 mb-3">فوائد خدماتنا:</h3>
            <ul className="space-y-2 mb-6">
              {sector.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 bg-red-900 rounded-full ml-2"></span>
                  {benefit}
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
            <Image src={sector.image || "/placeholder.svg"} alt={sector.title} fill style={{ objectFit: "cover" }} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gray-50 p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">طلب خدمة التسوق الخفي</h2>
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
