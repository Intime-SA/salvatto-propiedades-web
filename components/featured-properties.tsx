'use client'

import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Bed, Bath, Car, Maximize } from 'lucide-react'
import type { RootState } from '@/lib/store'

// Mock data - replace with actual API call
const mockProperties = [
  {
    id: 1,
    title: 'Casa moderna con piscina',
    address: 'Barrio Los Troncos, Mar del Plata',
    price: 'USD 450.000',
    operation: 'VENTA',
    type: 'Casa',
    image: '/placeholder.svg?height=300&width=400',
    featured: true,
    bedrooms: 4,
    bathrooms: 3,
    garage: 2,
    area: 280,
    tags: ['DESTACADA', 'VIDEO']
  },
  {
    id: 2,
    title: 'Departamento frente al mar',
    address: 'La Perla, Mar del Plata',
    price: 'USD 320.000',
    operation: 'VENTA',
    type: 'Departamento',
    image: '/placeholder.svg?height=300&width=400',
    featured: true,
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    area: 120,
    tags: ['DESTACADA']
  },
  {
    id: 3,
    title: 'Campo agrícola - 150 hectáreas',
    address: 'Ruta 226, Balcarce',
    price: 'USD 750.000',
    operation: 'VENTA',
    type: 'Campo',
    image: '/placeholder.svg?height=300&width=400',
    featured: true,
    area: 1500000,
    tags: ['DESTACADA', 'VIDEO']
  }
]

export default function FeaturedProperties() {
  const filters = useSelector((state: RootState) => state.properties.filters)

  const { data: properties, isLoading } = useQuery({
    queryKey: ['properties', 'featured', filters],
    queryFn: async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      return mockProperties
    }
  })

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Propiedades Destacadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="h-64 bg-gray-300"></div>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Propiedades Destacadas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties?.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {property.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-black/80 text-white">
                      {tag}
                    </Badge>
                  ))}
                  <Badge className="bg-[#014127]">
                    {property.operation}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.address}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-[#014127]">{property.price}</span>
                  <span className="text-sm text-gray-500 uppercase">{property.type}</span>
                </div>
                
                {property.type !== 'Campo' && (
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    {property.bedrooms && (
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" />
                        <span>{property.bedrooms}</span>
                      </div>
                    )}
                    {property.bathrooms && (
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" />
                        <span>{property.bathrooms}</span>
                      </div>
                    )}
                    {property.garage && (
                      <div className="flex items-center">
                        <Car className="h-4 w-4 mr-1" />
                        <span>{property.garage}</span>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Maximize className="h-4 w-4 mr-1" />
                    <span>
                      {property.type === 'Campo' 
                        ? `${(property.area / 10000).toFixed(0)} ha`
                        : `${property.area} m²`
                      }
                    </span>
                  </div>
                  <Button variant="outline" size="sm" className="text-[#014127] border-[#014127] hover:bg-[#014127] hover:text-white">
                    Ver detalles
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 text-white">
          <Button className="bg-[#014127] hover:bg-[#014127]/90 px-8 py-3">
            Ver todas las propiedades
          </Button>
        </div>
      </div>
    </section>
  )
}
