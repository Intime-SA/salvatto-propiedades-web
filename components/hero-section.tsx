'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const heroImages = [
  '/placeholder.svg?height=600&width=1200',
  '/placeholder.svg?height=600&width=1200',
  '/placeholder.svg?height=600&width=1200',
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
      {/* Background Image Slider */}
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Propiedad destacada ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
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

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          Entendemos el valor de su patrimonio
        </h1>

        {/* Search Form */}
        <div className="bg-white rounded-lg p-8 shadow-2xl max-w-3xl mx-auto border border-gray-200">
          <Tabs defaultValue="urbano" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="urbano" className="data-[state=active]:bg-[#014127] data-[state=active]:text-white text-gray-700 hover:text-[#014127]">
                DIVISIÓN URBANO
              </TabsTrigger>
             
            </TabsList>
            
            <TabsContent value="urbano" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Input
                  placeholder="Buscar por código"
                  className="text-gray-900 border border-gray-300 focus:border-[#014127] focus:ring-[#014127]"
                />
                <Select>
                  <SelectTrigger className="text-gray-900 border border-gray-300 focus:border-[#014127] focus:ring-[#014127]">
                    <SelectValue placeholder="Tipo de Propiedad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="casa">Casa</SelectItem>
                    <SelectItem value="departamento">Departamento</SelectItem>
                    <SelectItem value="ph">PH</SelectItem>
                    <SelectItem value="local">Local</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="text-gray-900 border border-gray-300 focus:border-[#014127] focus:ring-[#014127]">
                    <SelectValue placeholder="Operación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="venta">Venta</SelectItem>
                    <SelectItem value="alquiler">Alquiler</SelectItem>
                    <SelectItem value="temporario">Alquiler Temporario</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-[#014127] hover:bg-[#014127]/90 text-white font-semibold">
                  <Search className="h-4 w-4 mr-2" />
                  Buscar
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="campos" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Input
                  placeholder="Buscar por código"
                  className="text-gray-900 border border-gray-300 focus:border-[#014127] focus:ring-[#014127]"
                />
                <Select>
                  <SelectTrigger className="text-gray-900 border border-gray-300 focus:border-[#014127] focus:ring-[#014127]">
                    <SelectValue placeholder="Tipo de Campo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="agricola">Agrícola</SelectItem>
                    <SelectItem value="ganadero">Ganadero</SelectItem>
                    <SelectItem value="mixto">Mixto</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="text-gray-900 border border-gray-300 focus:border-[#014127] focus:ring-[#014127]">
                    <SelectValue placeholder="Operación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="venta">Venta</SelectItem>
                    <SelectItem value="alquiler">Alquiler</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-[#014127] hover:bg-[#014127]/90 text-white font-semibold">
                  <Search className="h-4 w-4 mr-2" />
                  Buscar
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

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
