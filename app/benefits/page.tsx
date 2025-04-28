"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import choose from "../../public/choose.jpg";
import Image from "next/image";

import { ChevronLeft, ShoppingCart, Star, Shield, Users } from "lucide-react"; // استيراد كل الأيقونات المحتملة هنا
// خريطة الأيقونات
const iconMap: { [key: string]: JSX.Element } = {
  ShoppingCart: <ShoppingCart size={40} className="text-red-800" />,
  Star: <Star size={40} className="text-red-800" />,
  Shield: <Shield size={40} className="text-red-800" />,
  Users: <Users size={40} className="text-red-800" />,
  // أضف أي أيقونات أخرى هنا حسب حاجتك
};

export default function BenefitsSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const [benefits, setBenefits] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBenefits = async () => {
      const querySnapshot = await getDocs(collection(db, "benefits"));
      const benefitsData = querySnapshot.docs.map((doc) => doc.data());
      setBenefits(benefitsData);
      setLoading(false);
    };

    fetchBenefits();
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
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  };

  const Skeleton = () => (
    <div className="bg-gray-200 animate-pulse p-8 rounded-2xl shadow-xl h-full w-full"></div>
  );

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white">
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
              ما هي فوائد ؟
            </motion.div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-orange-600">
              التسوق الخفي
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-red-900 to-orange-600 mx-auto mb-6 rounded-full"
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف كيف يمكن لخدمات التسوق الخفي أن تساعد مؤسستك على التميز وتحسين الأداء
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {loading
            ? Array.from({ length: 4 }).map((_, index) => <Skeleton key={index} />)
            : benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -15,
                    scale: 1.03,
                    boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.15)",
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 backdrop-blur-sm relative overflow-hidden group"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <div className="mb-6 flex justify-center">
                      <motion.div
                        whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300"
                      >
                        {/* عرض الأيقونة بناءً على الاسم */}
                        {iconMap[benefit.icon] || <ShoppingCart size={40} />} 
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-red-900 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-center group-hover:text-gray-700 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="bg-gradient-to-r from-gray-50 to-white p-10 rounded-2xl shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                لماذا تختار المتسوق الجديد؟
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                نحن نتميز بفريق من المتسوقين الخفيين المدربين على أعلى مستوى، ومنهجية عمل دقيقة، وتقارير مفصلة تقدم رؤى قابلة للتنفيذ.
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                {[
                  "فريق متخصص ومدرب",
                  "منهجية عمل احترافية",
                  "تقارير مفصلة وتوصيات عملية",
                  "سرية تامة وموثوقية عالية",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-r from-red-900 to-red-700 rounded-full ml-2"></span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative h-[300px] rounded-2xl overflow-hidden">
                <Image
                  src={choose}
                  alt="لماذا تختار المتسوق الجديد"
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-110 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
