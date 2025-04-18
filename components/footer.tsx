import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">المتسوق الجديد</h3>
            <p className="mb-4">طريقك للتميز في الأداء عبر التسوق الخفي</p>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="#" className="text-white hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
            <p className="font-bold text-xl -mt-5" >cornermak@</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-orange-500 transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-500 transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-500 transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange-500 transition-colors">
                  المدونة
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-500 transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-orange-500 transition-colors">
                  تقييم تجربة العملاء
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-500 transition-colors">
                  تقييم أداء الموظفين
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-500 transition-colors">
                  جمع وتحليل البيانات
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-500 transition-colors">
                  دعم التميز التنافسي
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 space-x-reverse">
                <Phone size={16} />
                <span>+966 531472119</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <Mail size={16} />
                <span>info@cornermak.com</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <MapPin size={16} />
                <span>المملكة العربية السعودية-الرياض-شارع النخيل <br/> ص : ب 3362 - الرمز : 14723 - سجل تجاري 1010499776</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} المتسوق الجديد. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  )
}
