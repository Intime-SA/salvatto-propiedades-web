'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navigation = [
  { name: 'A PRINCIPIO', href: '/' },
  { name: 'VENTA', href: '/venta' },
  { name: 'ALQUILER', href: '/alquiler' },
  { name: 'ALQUILER TEMPORARIO', href: '/alquiler-temporario' },
  { name: 'TASACIÓN', href: '/tasacion' },
  { name: 'SOBRE NOSOTROS', href: '/sobre-nosotros' },
  { name: 'CONTACTO', href: '/contacto' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-[#014127] text-white py-2 px-4">
        <div className="container mx-auto">
          <div className="hidden md:flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>223-4851202 / 223 614 1251</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@salvattoinmobiliaria.com.ar</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Av. de los Trabajadores Nº 3771, Mar del Plata</span>
            </div>
          </div>
          
          {/* Mobile version - simplified */}
          <div className="md:hidden text-center text-sm">
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              <span>223-4851202</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 w-full border-b bg-[#F7F7F7] transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/LOGO1.jpeg" alt="Salvatto Inmobiliaria" width={100} height={100} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#014127] transition-all duration-300 rounded-md hover:bg-[#014127]/5 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#014127] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              ))}
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[white]">
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  
                  
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-2 mt-6 flex-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium text-gray-700 hover:text-[#014127] hover:bg-[#014127]/5 transition-all duration-300 py-3 px-4 rounded-lg border-l-4 border-transparent hover:border-[#014127]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  
                  {/* Mobile Contact Info */}
                  <div className="border-t p-6 mt-auto space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Phone className="h-4 w-4 text-[#014127]" />
                      <div>
                        <div>223-4851202</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Mail className="h-4 w-4 text-[#014127]" />
                      <span>info@salvattoinmobiliaria.com.ar</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
