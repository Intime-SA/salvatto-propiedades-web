"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"
import LayoutLanding from "@/components/LayoutLanding"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    consulta: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()  
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <LayoutLanding page='contacto'>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#014127] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">Contacto</span>
          </nav>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">¿En qué podemos ayudarte?</h2>
              <p className="text-gray-600 mb-8">Dejanos tu comentario y nos contactaremos a la brevedad.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="consulta"
                    placeholder="Deje su aquí su consulta"
                    value={formData.consulta}
                    onChange={handleChange}
                    className="w-full min-h-[120px] resize-none"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-[#2d2d2d] hover:bg-[#1a1a1a] text-white py-3">
                  Enviar
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Casa Central</h3>

              <div className="space-y-4 mb-8">
                <div className="text-gray-700">
                  <div className="font-medium">
                    Av. de los Trabajadores Nº 3771, B7603 Mar del Plata, Provincia de Buenos Aires
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Argentina</div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="h-4 w-4 text-[#014127]" />
                    <span>223-4851202 / 223 614 1251</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail className="h-4 w-4 text-[#014127]" />
                    <span>info@salvattoinmobiliaria.com.ar</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium text-gray-900 mb-4">Seguinos</h4>
                <div className="space-y-3">
                  <a
                    href="https://www.instagram.com/salvattoinmobiliaria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#014127] transition-colors"
                  >
                    <Instagram className="h-4 w-4" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/salvattoinmobiliaria/?locale=es_LA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#014127] transition-colors"
                  >
                    <Facebook className="h-4 w-4" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@Masalvattofc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#014127] transition-colors"
                  >
                    <Youtube className="h-4 w-4" />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-[500px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.8234567890123!2d-57.5567890!3d-38.0054321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc08a6b12345%3A0x1234567890abcdef!2sAv.%20de%20los%20Trabajadores%203771%2C%20B7603%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Salvatto Inmobiliaria"
        />
      </div>
    </LayoutLanding>
  )
}
