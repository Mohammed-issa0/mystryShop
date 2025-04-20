"use client"
import Link from "next/link"
import Image from "next/image"
import {
  Building,
  Hospital,
  Coffee,
  ShoppingBag,
  Hotel,
  Plane,
  Landmark,
  GraduationCap,
  Wrench,
  ChevronLeft,
  Truck 
} from "lucide-react"
import { motion } from "framer-motion" // إضافة الاستيراد المناسب
import k1 from '../../public/k1.jpg'
import k2 from '../../public/k1.jpeg'
import k3 from '../../public/k3.jpg'
import k4 from '../../public/k4.jpg'
import k5 from '../../public/k5.jpg'
import k6 from '../../public/k6.jpg'
import k7 from '../../public/k7.jpg'
import k8 from '../../public/k8.jpg'
import k9 from '../../public/k9.webp'
import k10 from '../../public/k10.png'
import k11 from '../../public/k11.jpg'
const sectors = [
  {
    id: "government",
    title: "قطاع الخدمات الحكومية",
    description: "تحسين جودة الخدمات الحكومية المقدمة للمواطنين",
    image: k1,
    icon: <Building className="h-8 w-8" />,
    color: "from-blue-600 to-blue-800",
  },
  {
    id: "healthcare",
    title: "الرعاية الصحية والمستشفيات",
    description: "تقييم تجربة المرضى وتحسين الخدمات الصحية",
    image: k2,
    icon: <Hospital className="h-8 w-8" />,
    color: "from-green-600 to-green-800",
  },
  {
    id: "food",
    title: "المأكولات والمشروبات",
    description: "ضمان جودة الخدمة والمنتجات في المطاعم والمقاهي",
    image: k3,
    icon: <Coffee className="h-8 w-8" />,
    color: "from-yellow-600 to-yellow-800",
  },
  {
    id: "retail",
    title: "قطاع التجزئة ومبيعات الجملة",
    description: "تحسين تجربة التسوق وزيادة المبيعات",
    image: k4,
    icon: <ShoppingBag className="h-8 w-8" />,
    color: "from-purple-600 to-purple-800",
  },
  {
    id: "hospitality",
    title: "قطاع الضيافة",
    description: "رفع مستوى الخدمة في الفنادق والمنتجعات",
    image: k5,
    icon: <Hotel className="h-8 w-8" />,
    color: "from-red-600 to-red-800",
  },
  {
    id: "tourism",
    title: "السفر والسياحة",
    description: "تقييم وتطوير الخدمات السياحية",
    image: k6,
    icon: <Plane className="h-8 w-8" />,
    color: "from-sky-600 to-sky-800",
  },
  {
    id: "banking",
    title: "قطاع البنوك",
    description: "تحسين تجربة العملاء في الخدمات المصرفية",
    image: k7,
    icon: <Landmark className="h-8 w-8" />,
    color: "from-indigo-600 to-indigo-800",
  },
  {
    id: "education",
    title: "قطاع التعليم والتدريب",
    description: "تقييم جودة الخدمات التعليمية والتدريبية",
    image: k8,
    icon: <GraduationCap className="h-8 w-8" />,
    color: "from-amber-600 to-amber-800",
  },
  {
    id: "maintenance",
    title: "مراكز الصيانة وخدمة العملاء",
    description: "تحسين خدمات ما بعد البيع والصيانة",
    image: k9,
    icon: <Wrench className="h-8 w-8" />,
    color: "from-gray-600 to-gray-800",
  },
  {
    id: "logistics",
    title: "قطاع الدعم اللوجستي",
    description: "رفع كفاءة سلاسل الإمداد والخدمات اللوجستية",
    image: k11, // استبدله بالمسار أو الاستيراد المناسب للصورة
    icon: <Wrench className="h-8 w-8" />,
    color: "from-gray-600 to-gray-800",
  },
  {
    id: "delivery",
    title: "قطاع شركات التوصيل",
    description: "تحسين كفاءة وجودة خدمات التوصيل",
    image: k10, // استبدله بالمسار أو الاستيراد المناسب للصورة
    icon: <Truck  className="h-8 w-8" />,
    color: "from-purple-600 to-purple-800",
  }
  
  
]

export default function Sectors() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white">
        <div
          className="absolute top-20 left-20 w-96 h-96 rounded-full bg-red-100/30 blur-3xl"
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-orange-100/30 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-red-900 to-red-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              القطاعات المستفيدة
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            من <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-orange-600">يستفيد</span>{" "}
            من خدماتنا؟
          </h2>
          <div className="h-1.5 bg-gradient-to-r from-red-900 to-orange-600 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم خدماتنا لمجموعة متنوعة من القطاعات لمساعدتها على تحسين الأداء وتعزيز رضا العملاء
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <div
              key={sector.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group transform perspective-1000"
            >
              <Link href={`/sectors/${sector.id}`} className="block">
                <div className="relative h-56 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-80 group-hover:opacity-90 transition-opacity duration-500`}
                  ></div>
                  <Image
                    src={sector.image || "/placeholder.svg"}
                    alt={sector.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 group-hover:scale-110 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                  {/* Sector icon */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-xl text-white">
                    {sector.icon}
                  </div>

                  {/* Sector title on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1 transform group-hover:translate-y-0 transition-transform duration-500">
                      {sector.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{sector.description}</p>
                  <div className="flex justify-end">
                    <span className="inline-flex items-center text-red-900 font-medium group-hover:text-red-700 transition-colors">
                      اكتشف المزيد
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                      >
                        <ChevronLeft className="mr-1 h-4 w-4" />
                      </motion.span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}
