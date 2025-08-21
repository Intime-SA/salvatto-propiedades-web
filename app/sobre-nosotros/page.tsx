import Link from "next/link"
import { ChevronRight } from "lucide-react"
import LayoutLanding from "@/components/LayoutLanding"

export default function SobreNosotrosPage() {
  return (
    <LayoutLanding page='sobre-nosotros'>
      

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#014127] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">Sobre Nosotros</span>
          </nav>
        </div>
      </div>

      {/* Coming Soon Content */}
      <div className="py-2 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-sm p-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Próximamente</h2>
              <p className="text-xl text-gray-600 mb-8">
                Estamos trabajando en esta sección para contarte más sobre nuestra historia y equipo.
              </p>
              <div className="w-24 h-1 bg-[#014127] mx-auto rounded-full"></div>
              <p className="text-gray-500 mt-8">
                Mientras tanto, no dudes en{" "}
                <Link href="/contacto" className="text-[#014127] hover:underline font-medium">
                  contactarnos
                </Link>{" "}
                para cualquier consulta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutLanding>
  )
}
