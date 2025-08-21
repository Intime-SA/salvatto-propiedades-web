import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import type { RootState } from '@/lib/redux/store'
import { PropertyFilters, setFilters } from '../features/properties/propertiesSlice'


interface PropertiesResponse {
  properties: PropertyFilters[]
  total: number
  totalPages: number
}

const fetchProperties = async (filters: any, page: number, limit: number): Promise<PropertiesResponse> => {
  const queryParams = new URLSearchParams({
    ...filters,
    page: page.toString(),
    limit: limit.toString(),
  })

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/publications?${queryParams}`)
  if (!response.ok) {
    throw new Error('Error fetching properties')
  }
  const data = await response.json()
  return {
    properties: data.data.publications,
    total: data.data.total,
    totalPages: data.data.totalPages,
  }
}

export const useProperties = (filtersParams?: PropertyFilters) => {
  const filters = filtersParams || useSelector((state: RootState) => state.properties.filters);
  const currentPage = useSelector((state: RootState) => state.properties.currentPage);
  const itemsPerPage = useSelector((state: RootState) => state.properties.itemsPerPage);

  return useQuery({
    queryKey: ['properties', filters, currentPage, itemsPerPage],
    queryFn: () => fetchProperties(filters, currentPage, itemsPerPage),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
