"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ClipboardList, Phone, FileText, Play, BarChart2, FileCheck, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import how from "../../public/how.jpg"
const icons = {
  ClipboardList: <ClipboardList className="h-12 w-12 text-white" />,
  Phone: <Phone className="h-12 w-12 text-white" />,
  FileText: <FileText className="h-12 w-12 text-white" />,
  Play: <Play className="h-12 w-12 text-white" />,
  BarChart2: <BarChart2 className="h-12 w-12 text-white" />,
  FileCheck: <FileCheck className="h-12 w-12 text-white" />,
};

export default function HowWeWorkSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true); // <-- New

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "steps"));
        const stepsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSteps(stepsData);
      } catch (error) {
        console.error("Error fetching steps:", error);
      } finally {
        setLoading(false); // <-- Finish loading
      }
    };

    fetchSteps();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
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
        {/* Title */}
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
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-gradient-to-r from-red-900 to-red-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg"
            >
              منهجية عملنا
            </motion.div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-orange-600">كيف</span> نعمل؟
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-red-900 to-orange-600 mx-auto mb-6 rounded-full"
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نتبع منهجية عمل احترافية لضمان تقديم أفضل النتائج لعملائنا
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative" ref={ref}>
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-red-200 via-orange-300 to-yellow-200 hidden md:block"></div>

          <motion.div variants={containerVariants} initial="hidden" animate={controls} className="space-y-20">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <motion.div key={i} className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 animate-pulse">
                    <div className="bg-gray-200 w-40 h-40 rounded-2xl" />
                    <div className="flex-1 space-y-4">
                      <div className="bg-gray-200 h-6 w-1/2 rounded" />
                      <div className="bg-gray-200 h-4 w-3/4 rounded" />
                      <div className="bg-gray-200 h-4 w-2/3 rounded" />
                    </div>
                  </motion.div>
                ))
              : steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    custom={index}
                    variants={itemVariants}
                    className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
                      <motion.div
                        whileHover={{
                          rotate: [0, 5, -5, 0],
                          scale: 1.05,
                          boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2)",
                        }}
                        transition={{ duration: 0.5 }}
                        className={`bg-gradient-to-br ${step.color} rounded-2xl p-8 shadow-xl relative z-10`}
                      >
                        {icons[step.iconName] || <ClipboardList className="h-12 w-12 text-white" />}
                        <div className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full text-red-900 flex items-center justify-center font-bold text-lg shadow-lg">
                          {index + 1}
                        </div>
                      </motion.div>
                    </div>
                    <div className="md:w-1/2">
                      <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-lg text-gray-600">{step.description}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
          </motion.div>
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="bg-gradient-to-r from-gray-50 to-white p-10 rounded-2xl shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">لماذا منهجيتنا فعالة؟</h3>
              <p className="text-lg text-gray-700 mb-4">
                تضمن منهجيتنا المنظمة والشاملة تقديم خدمة عالية الجودة تلبي احتياجات عملائنا وتحقق أهدافهم. نحن نركز
                على:
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-red-900 to-red-700 rounded-full ml-2"></span>
                  <span className="font-medium">فهم عميق لاحتياجات العميل</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-red-900 to-red-700 rounded-full ml-2"></span>
                  <span className="font-medium">تخطيط دقيق للمشروع</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-red-900 to-red-700 rounded-full ml-2"></span>
                  <span className="font-medium">تنفيذ احترافي للزيارات</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-red-900 to-red-700 rounded-full ml-2"></span>
                  <span className="font-medium">تحليل متعمق للبيانات</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-red-900 to-red-700 rounded-full ml-2"></span>
                  <span className="font-medium">توصيات عملية قابلة للتنفيذ</span>
                </li>
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* <div className="absolute -inset-4 bg-gradient-to-r from-red-900 to-orange-600 rounded-2xl blur-lg opacity-20 transform rotate-3"></div> */}
              <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={how}
                  alt="منهجية العمل"
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
