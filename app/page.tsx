"use client"
import HeroSection from "@/components/hero-section"
import BenefitsSection from "@/components/benefits-section"
import ServicesSection from "@/components/services-section"
import SectorsSection from "@/components/sectors-section"
import HowWeWorkSection from "@/components/how-we-work-section"
import TestimonialsSection from "@/components/testimonials-section"
import RegisterSection from "@/components/register-section"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <SectorsSection />
      <HowWeWorkSection />
      <TestimonialsSection />
      <RegisterSection />
    </div>
  )
}
