import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PropertyFilters {
  operation?: string
  type?: string
  location?: string
  minPrice?: number
  maxPrice?: number
  bedrooms?: number
  bathrooms?: number
}

interface PropertiesState {
  filters: PropertyFilters
  currentPage: number
  itemsPerPage: number
}

const initialState: PropertiesState = {
  filters: {},
  currentPage: 1,
  itemsPerPage: 12,
}

const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<PropertyFilters>) => {
      state.filters = { ...state.filters, ...action.payload }
      state.currentPage = 1 // Reset to first page when filters change
    },
    clearFilters: (state) => {
      state.filters = {}
      state.currentPage = 1
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload
      state.currentPage = 1
    },
  },
})

export const { setFilters, clearFilters, setCurrentPage, setItemsPerPage } = propertiesSlice.actions
export default propertiesSlice.reducer

export interface Publication {
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
  videoUrl: string;
  price: number;
  currency: string;
  expenses: number;
  features: string[];
  status: string;
  createdAt: string;
  updatedAt: string;
}

export async function fetchPublications(limit: number): Promise<Publication[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}publications?limit=${limit}`);
  if (!response.ok) {
    throw new Error('Error fetching publications');
  }
  const data = await response.json();
  return data.data.publications;
}
