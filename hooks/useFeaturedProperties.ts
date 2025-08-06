import { useQuery } from '@tanstack/react-query';
import { fetchPublications } from '@/lib/features/properties/propertiesSlice';

export function useFeaturedProperties(limit: number) {
  const { data: properties, isLoading, error } = useQuery({
    queryKey: ['publications'],
    queryFn: () => fetchPublications(limit),
  });

  if (error) {
    console.error('Error fetching publications:', error);
  }

  return { properties, isLoading };
}