"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";
import Slider from "react-slick";
import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [clientLogos, setClientLogos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    async function fetchData() {
      try {
        const testimonialsSnapshot = await getDocs(collection(db, "testimonials"));
        const logosSnapshot = await getDocs(collection(db, "clientLogos"));

        const testimonialsData = testimonialsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const logosData = logosSnapshot.docs.map((doc) => doc.data().logo);

        setTestimonials(testimonialsData);
        setClientLogos(logosData);
      } catch (error) {
        console.error("خطأ في جلب البيانات:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const sliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 1000,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* خلفيات متحركة */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 left-20 w-96 h-96 rounded-full bg-red-100/30 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-orange-100/30 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* العنوان */}
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
              آراء عملائنا
            </motion.div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-orange-600">
              عملاؤنا
            </span>{" "}
            المميزون
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-red-900 to-orange-600 mx-auto mb-6 rounded-full"
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نفتخر بثقة عملائنا ونسعى دائماً لتقديم أفضل الخدمات لهم
          </p>
        </motion.div>

        {/* الكروت */}
        <div className="relative max-w-4xl mx-auto mb-20">
          {/* المؤشرات */}
          {!isLoading && (
            <div className="flex justify-center mb-8 space-x-2 space-x-reverse">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-red-900 w-6 md:w-8 h-2 md:h-3 rounded-full"
                      : "bg-gray-300 w-2 md:w-3 h-2 md:h-3 rounded-full"
                  }`}
                  aria-label={`انتقل إلى رأي العميل ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* بطاقة الرأي أو سكلتون */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="bg-white rounded-2xl p-10 shadow-2xl border border-gray-100 relative min-h-[300px]"
          >
            <div className="relative z-10">
              {isLoading ? (
                <div className="animate-pulse space-y-6">
                  <div className="flex justify-center">
                    <div className="h-20 w-20 bg-gray-200 rounded-full" />
                  </div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto" />
                  <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />
                  <div className="h-4 bg-gray-100 rounded w-2/3 mx-auto mt-6" />
                  <div className="h-4 bg-gray-100 rounded w-1/2 mx-auto" />
                </div>
              ) : (
                <>
                  <div className="flex justify-center mb-8">
                    <motion.div
                      animate={{ rotate: [0, 10, 0, -10, 0], scale: [1, 1.1, 1, 1.1, 1] }}
                      transition={{ duration: 10, repeat: Infinity }}
                      className="text-red-200"
                    >
                      <Quote className="h-20 w-20" />
                    </motion.div>
                  </div>

                  <p className="text-lg md:text-2xl text-gray-700 text-center mb-6 md:mb-10 italic leading-relaxed">
                    {testimonials[currentIndex]?.content}
                  </p>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 border-4 border-red-100 shadow-lg">
                      <Image
                        src={testimonials[currentIndex]?.image || "/placeholder.svg"}
                        alt={testimonials[currentIndex]?.name || ""}
                        width={96}
                        height={96}
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonials[currentIndex]?.name}</h4>
                    <p className="text-sm text-gray-500">{testimonials[currentIndex]?.position}</p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* سلايدر الشعارات */}
        <div className="overflow-hidden">
          {isLoading ? (
            <div className="flex gap-4 justify-center items-center">
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className="h-24 w-24 bg-gray-200 rounded-lg animate-pulse" />
              ))}
            </div>
          ) : (
            clientLogos.length > 0 && (
              <Slider {...sliderSettings}>
                {clientLogos.map((logo, index) => (
                  <div key={index} className="flex justify-center items-center px-2">
                    <Image src={logo} alt={`Logo ${index + 1}`} width={100} height={100} className="object-contain" />
                  </div>
                ))}
              </Slider>
            )
          )}
        </div>
      </div>
    </section>
  );
}
