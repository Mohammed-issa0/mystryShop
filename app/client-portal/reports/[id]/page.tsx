"use client"

import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, Calendar, Clock, Printer, Share2 } from "lucide-react"

const reports = [
  {
    id: "1",
    title: "تقرير تقييم تجربة العملاء - الربع الأول 2023",
    date: "15 مارس 2023",
    time: "10:30 صباحاً",
    status: "مكتمل",
    type: "تقييم تجربة العملاء",
    image: "/placeholder.svg?height=100&width=100",
    summary: "تقييم شامل لتجربة العملاء في فروع شركة الأفق للتجزئة خلال الربع الأول من عام 2023",
    score: 85,
    sections: [
      {
        title: "ملخص تنفيذي",
        content:
          "هذا التقرير يقدم تحليلاً شاملاً لتجربة العملاء في فروع شركة الأفق للتجزئة خلال الربع الأول من عام 2023. تم إجراء 50 زيارة تسوق خفي موزعة على 10 فروع مختلفة. أظهرت النتائج تحسناً ملحوظاً في مستوى الخدمة المقدمة مقارنة بالربع السابق، مع وجود بعض المجالات التي تحتاج إلى تطوير.",
      },
      {
        title: "المنهجية",
        content:
          "تم استخدام نموذج تقييم موحد لجميع الزيارات، يتضمن 5 محاور رئيسية: الاستقبال، المعرفة بالمنتجات، سلوك الموظفين، سرعة الخدمة، والمظهر العام للفرع. تم تدريب المتسوقين الخفيين على استخدام النموذج وتقييم كل محور وفق معايير محددة. تم إجراء الزيارات في أوقات مختلفة من اليوم وأيام مختلفة من الأسبوع لضمان تغطية شاملة.",
      },
      {
        title: "النتائج الرئيسية",
        content:
          "حصلت الشركة على درجة إجمالية قدرها 85% في تقييم تجربة العملاء، وهو ما يمثل تحسناً بنسبة 7% مقارنة بالربع السابق. كان أداء محور 'الاستقبال' هو الأفضل بنسبة 92%، يليه 'المظهر العام للفرع' بنسبة 88%. في المقابل، كان محور 'المعرفة بالمنتجات' هو الأقل أداءً بنسبة 76%، مما يشير إلى الحاجة إلى تعزيز تدريب الموظفين في هذا المجال.",
      },
      {
        title: "نقاط القوة",
        content:
          "1. ترحيب الموظفين بالعملاء بشكل ودي ومهني.\n2. نظافة وتنظيم الفروع بشكل ممتاز.\n3. سرعة الاستجابة لاستفسارات العملاء.\n4. مظهر الموظفين الأنيق والمهني.\n5. سهولة التنقل داخل الفروع.",
      },
      {
        title: "مجالات التحسين",
        content:
          "1. تعزيز معرفة الموظفين بتفاصيل المنتجات وخصائصها.\n2. تقليل وقت الانتظار في أوقات الذروة.\n3. تحسين آلية التعامل مع شكاوى العملاء.\n4. زيادة التواصل الفعال مع العملاء بعد البيع.\n5. تعزيز مهارات البيع الإضافي لدى الموظفين.",
      },
      {
        title: "التوصيات",
        content:
          "1. تنظيم دورات تدريبية مكثفة للموظفين حول خصائص المنتجات ومميزاتها.\n2. تطوير نظام إدارة الطوابير لتقليل وقت الانتظار.\n3. وضع آلية واضحة للتعامل مع شكاوى العملاء ومتابعتها.\n4. تطوير برنامج للتواصل مع العملاء بعد البيع لقياس مستوى رضاهم.\n5. تدريب الموظفين على مهارات البيع الإضافي والتقاطعي.",
      },
      {
        title: "الخلاصة",
        content:
          "أظهرت نتائج التقييم تحسناً ملحوظاً في مستوى الخدمة المقدمة للعملاء مقارنة بالربع السابق. ومع ذلك، لا تزال هناك بعض المجالات التي تحتاج إلى تطوير، خاصة فيما يتعلق بمعرفة الموظفين بالمنتجات وآلية التعامل مع شكاوى العملاء. من المتوقع أن يؤدي تنفيذ التوصيات المقترحة إلى تحسين إضافي في مستوى الخدمة وزيادة رضا العملاء.",
      },
    ],
  },
]

export default function ReportDetailPage() {
  const params = useParams()
  const reportId = params.id

  const report = reports.find((r) => r.id === reportId) || reports[0]

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
            href="/client-portal/reports"
            className="inline-flex items-center text-red-900 hover:text-red-800 font-medium mb-6"
          >
            <ArrowRight className="ml-1 h-4 w-4" />
            العودة إلى التقارير
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{report.title}</h1>
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
              <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">{report.type}</span>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-3/4"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">محتوى التقرير</h2>
                <div className="flex space-x-2 space-x-reverse">
                  <button className="p-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors">
                    <Printer className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-green-100 text-green-800 rounded-md hover:bg-green-200 transition-colors">
                    <Download className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-purple-100 text-purple-800 rounded-md hover:bg-purple-200 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">ملخص التقرير</h3>
                  <p className="text-gray-700">{report.summary}</p>
                </div>

                <div className="mb-8">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-bold text-gray-900">الدرجة الإجمالية</h3>
                      <span className="text-2xl font-bold text-red-900">{report.score}%</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-4">
                      <div className="bg-red-900 h-4 rounded-full" style={{ width: `${report.score}%` }}></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {report.sections.map((section, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{section.title}</h3>
                      <div className="text-gray-700 whitespace-pre-line">{section.content}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-1/4"
          >
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">محتويات التقرير</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#summary" className="text-red-900 hover:text-red-700 transition-colors">
                    ملخص التقرير
                  </a>
                </li>
                {report.sections.map((section, index) => (
                  <li key={index}>
                    <a href={`#section-${index}`} className="text-gray-700 hover:text-red-900 transition-colors">
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">تقارير ذات صلة</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-md overflow-hidden ml-2 flex-shrink-0">
                      <Image src="/placeholder.svg?height=40&width=40" alt="تقرير" width={40} height={40} />
                    </div>
                    <div>
                      <a href="#" className="text-gray-900 hover:text-red-900 transition-colors font-medium">
                        تقرير تقييم تجربة العملاء - الربع الرابع 2022
                      </a>
                      <p className="text-sm text-gray-600">15 ديسمبر 2022</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-md overflow-hidden ml-2 flex-shrink-0">
                      <Image src="/placeholder.svg?height=40&width=40" alt="تقرير" width={40} height={40} />
                    </div>
                    <div>
                      <a href="#" className="text-gray-900 hover:text-red-900 transition-colors font-medium">
                        تقرير تقييم أداء الموظفين - الربع الأول 2023
                      </a>
                      <p className="text-sm text-gray-600">22 مارس 2023</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
