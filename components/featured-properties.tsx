'use client'
import { useFeaturedProperties } from '@/hooks/useFeaturedProperties';
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Bed, Bath, Car, Maximize } from 'lucide-react'
import type { RootState } from '@/lib/store'

// Type definition for the API property structure
interface ApiProperty {
  _id: string;
  category: string;
  operationType: string;
  address: string;
  province: string;
  city: string;
  neighborhood: string;
  hideExactAddress: boolean;
  photos: string[];
  totalSurface: number;
  coveredSurface: number;
  rooms: number;
  bedrooms: number;
  bathrooms: number;
  parkingSpaces: number;
  title: string;
  description: string;
  videoUrl?: string;
  price: number;
  currency: string;
  expenses: number;
  features: string[];
  status: string;
  createdAt: string;
  updatedAt: string;
}

// Helper function to get category display name
const getCategoryDisplayName = (category: string) => {
  const categoryMap: { [key: string]: string } = {
    'departamentos': 'Departamento',
    'casas': 'Casa',
    'campos': 'Campo',
    'consultorios': 'Consultorio',
    'oficinas': 'Oficina',
    'locales': 'Local'
  };
  return categoryMap[category] || category;
};

// Helper function to get operation display name
const getOperationDisplayName = (operationType: string) => {
  const operationMap: { [key: string]: string } = {
    'venta': 'VENTA',
    'alquiler': 'ALQUILER',
    'alquiler-temporario': 'ALQUILER TEMPORARIO'
  };
  return operationMap[operationType] || operationType.toUpperCase();
};

// Helper function to format price
const formatPrice = (price: number, currency: string) => {
  const formattedPrice = new Intl.NumberFormat('es-AR').format(price);
  return `${currency} ${formattedPrice}`;
};

// Helper function to format area
const formatArea = (totalSurface: number, category: string) => {
  if (category === 'campos') {
    // Convert square meters to hectares for campos
    const hectares = totalSurface / 10000;
    return `${hectares.toFixed(0)} ha`;
  }
  return `${totalSurface} m²`;
};

// Helper function to generate tags
const generateTags = (property: ApiProperty) => {
  const tags = [];
  
  // Add DESTACADA tag (you might want to add a featured field to your API)
  if (property.status === 'active') {
    tags.push('DESTACADA');
  }
  
  // Add VIDEO tag if videoUrl exists
  if (property.videoUrl) {
    tags.push('VIDEO');
  }
  
  return tags;
};

export default function FeaturedProperties() {
  const limit = 3;
  const { properties, isLoading } = useFeaturedProperties(limit);
  console.log(properties, 'properties');

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
          {properties?.map((property: ApiProperty) => {
            const tags = generateTags(property);
            const displayAddress = property.hideExactAddress 
              ? `${property.neighborhood}, ${property.city}` 
              : property.address;

            return (
              <Card key={property._id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={process.env.NEXT_PUBLIC_IMAGES_URL + property.photos[0] || "/placeholder.svg"}
                    alt={property.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {tags.map((tag: string) => (
                      <Badge key={tag} variant="secondary" className="bg-black/80 text-white">
                        {tag}
                      </Badge>
                    ))}
                    <Badge className="bg-[#014127] text-white">
                      {getOperationDisplayName(property.operationType)}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{displayAddress}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-[#014127]">
                      {formatPrice(property.price, property.currency)}
                    </span>
                    <span className="text-sm text-gray-500 uppercase">
                      {getCategoryDisplayName(property.category)}
                    </span>
                  </div>
                  
                  {/* Only show room details for non-campo properties */}
                  {property.category !== 'campos' && (
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      {property.bedrooms > 0 && (
                        <div className="flex items-center">
                          <Bed className="h-4 w-4 mr-1" />
                          <span>{property.bedrooms}</span>
                        </div>
                      )}
                      {property.bathrooms > 0 && (
                        <div className="flex items-center">
                          <Bath className="h-4 w-4 mr-1" />
                          <span>{property.bathrooms}</span>
                        </div>
                      )}
                      {property.parkingSpaces > 0 && (
                        <div className="flex items-center">
                          <Car className="h-4 w-4 mr-1" />
                          <span>{property.parkingSpaces}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <Maximize className="h-4 w-4 mr-1" />
                      <span>{formatArea(property.totalSurface, property.category)}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-[#014127] border-[#014127] hover:bg-[#014127] hover:text-white"
                    >
                      Ver detalles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-[#014127] hover:bg-[#014127]/90 px-8 py-3 text-white">
            Ver todas las propiedades
          </Button>
        </div>
      </div>
    </section>
  )
}
