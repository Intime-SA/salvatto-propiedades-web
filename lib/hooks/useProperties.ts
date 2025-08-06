import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import type { RootState } from '@/lib/store'

interface Property {
  id: number
  title: string
  address: string
  price: string
  operation: string
  type: string
  image: string
  featured: boolean
  bedrooms?: number
  bathrooms?: number
  garage?: number
  area: number
  tags: string[]
}

interface PropertiesResponse {
  properties: Property[]
  total: number
  totalPages: number
}

// Mock API function - replace with actual API call
const fetchProperties = async (filters: any, page: number, limit: number): Promise<PropertiesResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Mock data - replace with actual API call
  const mockProperties: Property[] = [
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
    // Add more mock properties as needed
  ]
  
  return {
    properties: mockProperties,
    total: mockProperties.length,
    totalPages: Math.ceil(mockProperties.length / limit)
  }
}

export const useProperties = () => {
  const filters = useSelector((state: RootState) => state.properties.filters)
  const currentPage = useSelector((state: RootState) => state.properties.currentPage)
  const itemsPerPage = useSelector((state: RootState) => state.properties.itemsPerPage)

  return useQuery({
    queryKey: ['properties', filters, currentPage, itemsPerPage],
    queryFn: () => fetchProperties(filters, currentPage, itemsPerPage),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}
