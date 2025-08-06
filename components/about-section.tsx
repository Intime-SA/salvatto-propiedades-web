import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Experiencia, solvencia y profesionalismo
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Brindamos asesoramiento por experimentados profesionales que 
              agregan valor a cada nueva propuesta. Con más de 20 años de 
              trayectoria en el mercado inmobiliario de Mar del Plata y la zona, 
              nos especializamos en propiedades premium y campos.
            </p>
            <Button className="bg-[#014127] hover:bg-[#014127]/90 text-white">
              Conocé nuestro equipo
            </Button>
          </div>
          
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Equipo Salvatto Inmobiliaria"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
