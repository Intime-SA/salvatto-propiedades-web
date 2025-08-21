"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, Mail, MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "HOME", href: "/" },
  {
    name: "PROPIEDADES",
    href: "/propiedades",
    children: [
      { name: "VENTA", href: "/propiedades?operationType=venta" },
      { name: "ALQUILER", href: "/propiedades?operationType=alquiler" },
      { name: "ALQUILER TEMPORARIO", href: "/propiedades?operationType=temporario" },
    ],
  },
  { name: "TASACIÓN", href: "/tasacion" },
  { name: "SOBRE NOSOTROS", href: "/sobre-nosotros" },
  { name: "CONTACTO", href: "/contacto" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-[#014127] text-white py-2 px-4">
        <div className="container mx-auto">
          <div className="hidden md:flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 hover:text-green-200 transition-colors">
                <Phone className="h-4 w-4" />
                <span>223-4851202 / 223 614 1251</span>
              </div>
              <div className="flex items-center gap-2 hover:text-green-200 transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@salvattoinmobiliaria.com.ar</span>
              </div>
            </div>
            <div className="flex items-center gap-2 hover:text-green-200 transition-colors">
              <MapPin className="h-4 w-4" />
              <span>Av. de los Trabajadores Nº 3771, Mar del Plata</span>
            </div>
          </div>

          {/* Mobile version - simplified */}
          <div className="md:hidden text-center text-sm">
            <div className="flex items-center justify-center gap-2 hover:text-green-200 transition-colors">
              <Phone className="h-4 w-4" />
              <span>223-4851202</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 w-full border-b bg-[#F7F7F7] transition-all duration-300 ${isScrolled ? "shadow-lg backdrop-blur-sm" : ""}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Image src="/LOGO1.jpeg" alt="Salvatto Inmobiliaria" width={100} height={100} className="rounded-md" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="relative flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#014127] transition-all duration-300 rounded-lg hover:bg-[#014127]/10 group-hover:bg-[#014127]/10"
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${openDropdown === item.name ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>
                  {item.children && (
                    <div
                      className={`absolute left-0 top-full mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-xl transition-all duration-300 transform ${
                        openDropdown === item.name
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 -translate-y-2 invisible"
                      }`}
                    >
                      <div className="py-2">
                        {item.children.map((child, index) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:text-[#014127] hover:bg-[#014127]/5 transition-all duration-200 border-l-4 border-transparent hover:border-[#014127] group"
                          >
                            <span className="font-medium group-hover:translate-x-1 transition-transform duration-200">
                              {child.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden hover:bg-[#014127]/10 border-[#014127]/20 bg-transparent"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-center py-4 border-b">
                    <Image
                      src="/LOGO1.jpeg"
                      alt="Salvatto Inmobiliaria"
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                  </div>

                  <nav className="flex flex-col space-y-1 mt-6 flex-1">
                    {navigation.map((item) => (
                      <div key={item.name} className="space-y-1">
                        <Link
                          href={item.href}
                          className="flex items-center justify-between text-lg font-medium text-gray-700 hover:text-[#014127] hover:bg-[#014127]/5 transition-all duration-300 py-3 px-4 rounded-lg border-l-4 border-transparent hover:border-[#014127] group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            {item.name}
                          </span>
                          {item.children && <ChevronDown className="h-4 w-4" />}
                        </Link>
                        {item.children && (
                          <div className="ml-4 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block text-base text-gray-600 hover:text-[#014127] hover:bg-[#014127]/5 transition-all duration-200 py-2 px-4 rounded-md border-l-2 border-transparent hover:border-[#014127] hover:translate-x-1"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>

                  <div className="border-t bg-gray-50 p-6 mt-auto space-y-4 rounded-t-lg">
                    <h3 className="font-semibold text-gray-800 mb-3">Contacto</h3>
                    <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#014127] transition-colors">
                      <div className="p-2 bg-[#014127]/10 rounded-full">
                        <Phone className="h-4 w-4 text-[#014127]" />
                      </div>
                      <div>
                        <div className="font-medium">223-4851202</div>
                        <div className="text-xs text-gray-500">223 614 1251</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#014127] transition-colors">
                      <div className="p-2 bg-[#014127]/10 rounded-full">
                        <Mail className="h-4 w-4 text-[#014127]" />
                      </div>
                      <span className="font-medium">info@salvattoinmobiliaria.com.ar</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="p-2 bg-[#014127]/10 rounded-full mt-0.5">
                        <MapPin className="h-4 w-4 text-[#014127]" />
                      </div>
                      <span className="font-medium leading-relaxed">
                        Av. de los Trabajadores Nº 3771, Mar del Plata
                      </span>
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
