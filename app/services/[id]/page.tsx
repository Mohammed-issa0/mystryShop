"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { db } from '../../../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";

export default function ServiceDetailPage() {
  const [showWhatsappTooltip, setShowWhatsappTooltip] = useState(false);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const serviceId = params.id;
  const service = services.find((s) => s.id === serviceId);

  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    phone: "",
    email: "",
    serviceDetails: "",
  });

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "services"));
        const servicesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServices(servicesData);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
  *طلب جديد من عميل:*
  اسم الشركة: ${formData.companyName}
  اسم جهة التواصل: ${formData.contactName}
  رقم الهاتف: ${formData.phone}
  البريد الإلكتروني: ${formData.email}
  تفاصيل الخدمة المطلوبة: ${formData.serviceDetails}
  `;

    const whatsappNumber = "966531472119";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    alert("تم إرسال طلبك بنجاح! سنتواصل معك قريباً.");

    setFormData({
      companyName: "",
      contactName: "",
      phone: "",
      email: "",
      serviceDetails: "",
    });
  };

  if (loading) {
    return <div className="text-center py-20 text-xl font-bold">جاري التحميل...</div>;
  }

  if (!service) {
    return <div className="text-center py-20 text-xl font-bold">الخدمة غير موجودة</div>;
  }

  return (
    <div className="py-20">
      {/* زر الواتساب */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-8 left-8 z-50"
        onMouseEnter={() => setShowWhatsappTooltip(true)}
        onMouseLeave={() => setShowWhatsappTooltip(false)}
      >
        <motion.a
          href="https://wa.me/966531472119"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="h-8 w-8 text-white" />
        </motion.a>
        <AnimatePresence>
          {showWhatsappTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute left-full top-1/2 transform -translate-y-1/2 -translate-x-2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md mr-2 whitespace-nowrap"
            >
              تواصل معنا
              <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* تفاصيل الخدمة */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">{service.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{service.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-red-900 mb-6">تفاصيل الخدمة</h2>
            <p className="text-lg text-gray-700 mb-6">{service.longDescription}</p>
            <h3 className="text-xl font-bold text-red-900 mb-3">مميزات الخدمة:</h3>
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
           <Image 
  src={service.image || "/placeholder.svg"} 
  alt={service.title} 
  fill 
  style={{ objectFit: "cover" }}
  unoptimized
/>
          </motion.div>
        </div>

        {/* نموذج طلب الخدمة */}
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
  );
}
