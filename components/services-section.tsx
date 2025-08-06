import { Diamond, FileText, Megaphone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Diamond,
    title: 'Propuesta de Valor',
    description: 'Evaluamos cada propiedad con criterios profesionales para maximizar su potencial en el mercado.'
  },
  {
    icon: FileText,
    title: 'Tasaciones e Informes',
    description: 'Realizamos tasaciones precisas y detalladas con informes técnicos completos y actualizados.'
  },
  {
    icon: Megaphone,
    title: 'Marketing y Comunicación',
    description: 'Estrategias de marketing digital y tradicional para dar máxima visibilidad a su propiedad.'
  }
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Servicio diferencial y eficiencia</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nos enfocamos en ofrecer un servicio exclusivo y diferenciado, 
            atendiendo cada etapa del proceso inmobiliario.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#014127] text-white rounded-full mb-6">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center text-white">
          <Button className="bg-[#014127] hover:bg-[#014127]/90 px-8 py-3">
            Así trabajamos
          </Button>
        </div>
      </div>
    </section>
  )
}
