'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PropertyFilter from './property-filter'

const heroImages = [
  'https://images.unsplash.com/photo-1561815907-c39c3c1c7f49?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8J21hciUyMGRlbCUyMHBsYXRhJ3xlbnwwfHwwfHx8MA%3D%3D',
  '/modern-minimalist-office.jpg',
]

export default function HeroSection({ page }: { page?: string | null }) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section className={`relative ${page == null ? 'h-[70vh]' : 'h-[40vh]'} flex items-start justify-center`}>
      {/* Background Image Slider */}
      <div className="absolute inset-0 overflow-hidden">

          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImage === 0 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={page == null ? heroImages[0] : heroImages[1]}
              alt={`Propiedad destacada`}
              fill
              className="object-cover"
              priority={currentImage === 0}
            />
          </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
        onClick={prevImage}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
        onClick={nextImage}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {page == null && <PropertyFilter />}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImage ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </section>
  )
}
