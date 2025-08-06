import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import FeaturedProperties from '@/components/featured-properties'
import AboutSection from '@/components/about-section'
import ServicesSection from '@/components/services-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedProperties />
      <AboutSection />
      <ServicesSection />
      <Footer />
    </main>
  )
}
