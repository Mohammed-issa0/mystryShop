"use client";

import Link from "next/link";
import Image from "next/image";
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
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

// أيقونات القطاعات بناءً على الـ id
const iconsMap: Record<string, JSX.Element> = {
  government: <Building className="h-8 w-8" />,
  healthcare: <Hospital className="h-8 w-8" />,
  food: <Coffee className="h-8 w-8" />,
  retail: <ShoppingBag className="h-8 w-8" />,
  hospitality: <Hotel className="h-8 w-8" />,
  tourism: <Plane className="h-8 w-8" />,
  banking: <Landmark className="h-8 w-8" />,
  education: <GraduationCap className="h-8 w-8" />,
  maintenance: <Wrench className="h-8 w-8" />,
};

export default function SectorsSection() {
  const [sectors, setSectors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSectors = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "sectors"));
        const sectorsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSectors(sectorsData);
      } catch (error) {
        console.error("Error fetching sectors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSectors();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* خلفية متحركة */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-red-100/30 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-orange-100/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-red-900 to-red-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              القطاعات المستفيدة
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            من <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-orange-600">يستفيد</span> من خدماتنا؟
          </h2>
          <div className="h-1.5 bg-gradient-to-r from-red-900 to-orange-600 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم خدماتنا لمجموعة متنوعة من القطاعات لمساعدتها على تحسين الأداء وتعزيز رضا العملاء
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow animate-pulse p-6">
                  <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                </div>
              ))
            : sectors.map((sector) => (
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

                      {/* الأيقونة */}
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-xl text-white">
                        {iconsMap[sector.id] || <Building className="h-8 w-8" />}
                      </div>

                      {/* العنوان */}
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

        <div className="mt-20 text-center">
          <Link
            href="/sectors"
            className="inline-flex items-center bg-gradient-to-r from-red-900 to-red-700 text-white px-8 py-4 rounded-xl hover:from-red-800 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="font-bold text-lg">استكشف جميع القطاعات</span>
            <ChevronLeft className="mr-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
