"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Users, BarChart2, TrendingUp, Award } from "lucide-react";

// استيراد Firebase
import { db } from "../firebaseConfig"; // عدل هذا المسار حسب مكان مشروعك
import { collection, getDocs } from "firebase/firestore";

// آيقونات مرتبطة بالآي دي
const iconsMap = {
  "customer-experience": <Users className="h-8 w-8 text-white" />,
  "employee-performance": <Award className="h-8 w-8 text-white" />,
  "data-analysis": <BarChart2 className="h-8 w-8 text-white" />,
  "competitive-excellence": <TrendingUp className="h-8 w-8 text-white" />,
};

export default function ServicesSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "services"));
        const servicesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServices(servicesData);
      } catch (error) {
        console.error("خطأ أثناء جلب الخدمات:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* الخلفيات المتحركة */}
      <div className="absolute inset-0 -z-10 bg-white">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-red-100/30 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-orange-100/30 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-gradient-to-r from-red-900 to-red-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg"
            >
              خدماتنا المميزة
            </motion.div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-orange-600">خدماتنا</span> الاحترافية
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-red-900 to-orange-600 mx-auto mb-6 rounded-full"
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة متكاملة من خدمات التسوق الخفي المصممة خصيصاً لتلبية احتياجات عملائنا
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-md animate-pulse"
                >
                  <div className="h-56 bg-gray-200" />
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-gray-300 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-4 bg-gray-200 rounded w-5/6" />
                  </div>
                </div>
              ))
            : services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{
                    y: -15,
                    scale: 1.03,
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  className="bg-white rounded-2xl overflow-hidden transition-all duration-500 group md:shadow-xl md:hover:shadow-2xl"
                >
                  {/* صورة الخدمة */}
                  <div className="relative h-56 overflow-hidden hidden md:block">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500`} />
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-110 transition-transform duration-700 opacity-60"
                    />

                    {/* الآيقونة */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      {iconsMap[service.id] || <Users className="h-8 w-8 text-white" />}
                    </div>

                    {/* overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/70 to-transparent">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white text-red-900 font-bold py-3 px-6 rounded-xl shadow-lg transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-500"
                      >
                        اكتشف المزيد
                      </motion.div>
                    </div>

                    {/* عنوان الخدمة */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    </div>
                  </div>

                  {/* نسخة الجوال */}
                  <div className="md:hidden p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-t-2xl">
                    <div className="flex items-center mb-2">
                      <div className="bg-gradient-to-br from-red-900 to-red-700 p-3 rounded-xl ml-3 text-white">
                        {iconsMap[service.id] || <Users className="h-8 w-8 text-white" />}
                      </div>
                      <h3 className="text-xl font-bold text-red-900">{service.title}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-800 font-medium mb-4">{service.description}</p>
                    <Link
                      href={`/services/${service.id}`}
                      className="inline-flex items-center text-red-900 font-bold hover:text-red-700 transition-colors group"
                    >
                      <span>تعرف على الخدمة</span>
                      <ChevronLeft className="mr-1 h-4 w-4 transform group-hover:translate-x-[-4px] transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
        </motion.div>

        {/* زر تحت */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center bg-gradient-to-r from-red-900 to-red-700 text-white px-8 py-4 rounded-xl hover:from-red-800 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="font-bold text-lg">استكشف جميع خدماتنا</span>
            <ChevronLeft className="mr-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
