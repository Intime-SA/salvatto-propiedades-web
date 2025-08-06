import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-12 w-12 rounded-full bg-[#014127] flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white">SALVATTO</span>
                <span className="text-sm text-gray-400">INMOBILIARIA</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Especialistas en propiedades premium en Mar del Plata y zona.
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">CONTACTO</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-[#014127]" />
                <span className="text-sm text-gray-400">
                  Av. de los Trabajadores Nº 3771<br />
                  B7603 Mar del Plata, Buenos Aires
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-[#014127]" />
                <div className="text-sm text-gray-400">
                  <div>223-4851202</div>
                  <div>223 614 1251</div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-[#014127]" />
                <span className="text-sm text-gray-400">
                  info@salvattoinmobiliaria.com.ar
                </span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">SERVICIOS</h3>
            <div className="space-y-2">
              <Link href="/venta" className="block text-sm text-gray-400 hover:text-white transition-colors">
                Venta de Propiedades
              </Link>
              <Link href="/alquiler" className="block text-sm text-gray-400 hover:text-white transition-colors">
                Alquiler
              </Link>
              <Link href="/alquiler-temporario" className="block text-sm text-gray-400 hover:text-white transition-colors">
                Alquiler Temporario
              </Link>
              <Link href="/tasacion" className="block text-sm text-gray-400 hover:text-white transition-colors">
                Tasaciones
              </Link>
            </div>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">SEGUINOS</h3>
            <div className="flex space-x-4">
              <Link 
                href="https://facebook.com/salvatto" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link 
                href="https://instagram.com/salvattoinmobiliaria" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link 
                href="https://youtube.com/salvatto" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Salvatto Inmobiliaria. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
