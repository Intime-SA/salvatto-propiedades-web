"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  MapPin,
  Home,
  TreePine,
  DollarSign,
  Maximize,
  Filter,
  X,
  Building,
  Map,
  Car,
  Store,
  Hotel,
  RotateCcw,
  HomeIcon as House,
} from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { setFilters, clearFilters } from "@/lib/features/properties/propertiesSlice"
import type { RootState } from "@/lib/redux/store"
import { useRouter, useSearchParams, usePathname, useParams } from "next/navigation"

interface PropertyFilters {
  category?: string
  operationType?: string
  neighborhood?: string
  city?: string
  bedrooms?: number
  bathrooms?: number
  parkingSpaces?: number
  minPrice?: number
  maxPrice?: number
  province?: string
  totalSurface?: number
}

interface PropertyFilterProps {
  onSearch?: (filters: PropertyFilters) => void
  initialFilters?: PropertyFilters
}

export default function PropertyFilter({ initialFilters = {} }: PropertyFilterProps) {
  const reduxFilters = useSelector((state: RootState) => state.properties.filters)
  const [localFilters, setLocalFilters] = useState<PropertyFilters>({ ...reduxFilters, ...initialFilters })
  const [priceRange, setPriceRange] = useState([localFilters.minPrice || 50000, localFilters.maxPrice || 500000])
  const [areaRange, setAreaRange] = useState([50, 300])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [resetLoading, setResetLoading] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)

  const isHomePage = pathname === "/" || pathname === "/home"

  useEffect(() => {
    setIsClient(true)

    const urlFilters: PropertyFilters = {}

    searchParams.forEach((value, key) => {
      if (key in localFilters) {
        if (["bedrooms", "bathrooms", "parkingSpaces", "minPrice", "maxPrice", "totalSurface"].includes(key)) {
          const numValue = Number.parseInt(value)
          if (!isNaN(numValue)) {
            urlFilters[key as keyof PropertyFilters] = numValue as any
          }
        } else {
          urlFilters[key as keyof PropertyFilters] = value as any
        }
      }
    })

    if (Object.keys(urlFilters).length > 0) {
      setLocalFilters((prev) => ({ ...prev, ...urlFilters }))
    }
  }, [])

  const handleFilterChange = (key: keyof PropertyFilters, value: string | number) => {
    setLocalFilters((prev) => {
      const newFilters = { ...prev }

      if (value === "" || value === undefined) {
        delete newFilters[key]
      } else {
        newFilters[key] = value as any
      }

      return newFilters
    })
  }

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter))
  }

  const clearAllFilters = async () => {
    setResetLoading(true)
    dispatch(clearFilters())

    if (!isHomePage) {
      window.history.replaceState({}, "", pathname)
    }

    setTimeout(() => {
      setSelectedFilters([])
      setPriceRange([50000, 500000])
      setAreaRange([50, 300])
      setLocalFilters({})
      setResetLoading(false)
    }, 1000)
  }

  const URL = useParams()
  console.log(URL, "URL")

  const handleSearch = () => {
    if (!isClient) return
    setLoading(true)

    // ✅ recién acá guardamos en Redux
    dispatch(setFilters(localFilters))

    const params = new URLSearchParams()
    Object.entries(localFilters).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        params.set(key, value.toString())
      }
    })

    const queryString = params.toString()

    setTimeout(() => {
      const targetUrl = queryString ? `/propiedades?${queryString}` : "/propiedades"
      router.push(targetUrl)

      console.log("Filters applied:", localFilters)
      console.log("Redirecting from:", pathname, "to properties page")
      setLoading(false)
    }, 1000)
  }

  const neighborhoods = [
    "Aeroparque",
    "Alem",
    "Alfar",
    "Arenas Chico",
    "Arenas del Sur",
    "Arenas Verdes",
    "Balcarce",
    "Balneario Mar De Cobo",
    "Barrancas de San Benito Country Club",
    "Barrio Batan",
    "Barrio Chapadmalal",
    "Berisso",
    "Bernardino Rivadavia",
    "Bosque Peralta Ramos",
    "Caisamar",
    "Camet",
    "Casonas del Haras",
    "Centro",
    "Cerrito",
    "Chauvin",
    "Constitución",
    "Coronel Vidal",
    "Countries/B.Cerrado (Lujan)",
    "Desvio Aguirre",
    "Divino Rostro",
    "Dolores",
    "Don Bosco",
    "El Gaucho",
    "El Marquesado",
    "Faro",
    "Faro Norte",
    "General Guido",
    "Golf Club",
    "Grosellar",
    "Guemes",
    "Hilario Ascasubi",
    "Jorge Newbery",
    "La Florida",
    "La Perla",
    "La Perla Norte",
    "Labarden",
    "Laguna Brava",
    "Las Armas",
    "Las Avenidas",
    "Las Colinas P.Ramos",
    "Las Nutrias",
    "Loberia",
    "Lomas De Stella Maris",
    "Los Acantilados",
    "Los Andes",
    "Los Pinos",
    "Los Troncos",
    "Lourdes",
    "Macrocentro",
    "Malargue",
    "Malvinas",
    "Mar Chiquita",
    "Mar Del Plata",
    "Microcentro",
    "Mundialista",
    "Necochea",
    "Olavarria",
    "Parque Luro",
    "Parque Palermo",
    "Pinares de Santa Clara",
    "Pinos De Anchorena",
    "Playa Chica",
    "Playa Grande",
    "Playa Serena",
    "Plaza Mitre",
    "Pompeya",
    "Primera Junta",
    "Puerto",
    "Punta Mogotes",
    "Rumenco",
    "Rumencó Joven",
    "Ruta 226",
    "Ruta 88",
    "San Carlos",
    "San Cayetano",
    "San Francisco De Bellocq",
    "San Javier",
    "San José",
    "San Juan",
    "Santa Monica",
    "Santa Rita",
    "Sierra De Los Padres",
    "Stella Maris",
    "Terminal Vieja",
    "Tierras del Mar",
    "Torreon",
    "Varese",
    "Villa Alfredo Fortabat",
    "Villa Primera",
    "Villa Traful",
  ]

  return (
    <div className=" bg-gradient-to-br from-slate-50 via-white to-emerald-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#014127] to-emerald-600 bg-clip-text text-transparent mb-2">
            Encuentra tu Propiedad Ideal
          </h1>
          <p className="text-gray-600 text-lg">Filtros avanzados para una búsqueda precisa</p>
          {isHomePage && (
            <div className="mt-2">
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                <Home className="h-3 w-3 mr-1" />
                Página Principal
              </Badge>
            </div>
          )}
        </div>

        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm rounded-md">
          <CardContent className="p-8">
            <Tabs defaultValue="urbano" className="w-full">
              {/* URBANO */}
              <TabsContent value="urbano" className="space-y-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Buscar por código, dirección o palabra clave..."
                    className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-[#014127] focus:ring-[#014127] rounded-md bg-white/50 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
                  {/* Tipo de Propiedad */}
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center">
                      <Home className="h-4 w-4 mr-1" />
                      Tipo de Propiedad
                    </Label>
                    <Select
                      value={localFilters.category || ""}
                      onValueChange={(value) => handleFilterChange("category", value)}
                    >
                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-[#014127] focus:ring-[#014127] rounded-md bg-white/50 w-[200px]">
                        <SelectValue placeholder="Seleccionar tipo" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="casas-chalet">Casas-Chalet</SelectItem>
                        <SelectItem value="duplex-ph">Duplex-PH</SelectItem>
                        <SelectItem value="departamentos">Departamentos</SelectItem>
                        <SelectItem value="lotes-terrenos">Lotes-Terrenos</SelectItem>
                        <SelectItem value="cocheras">Cocheras</SelectItem>
                        <SelectItem value="locales-fondo-comercio">Locales-Fondo de Comercio</SelectItem>
                        <SelectItem value="hoteles-emprendimientos">Hoteles-Emprendimientos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Operación */}
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      Operación
                    </Label>
                    <Select
                      value={localFilters.operationType || ""}
                      onValueChange={(value) => handleFilterChange("operationType", value)}
                    >
                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-[#014127] focus:ring-[#014127] rounded-md bg-white/50 w-[200px]">
                        <SelectValue placeholder="Tipo de operación" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="venta">Venta</SelectItem>
                        <SelectItem value="alquiler">Alquiler</SelectItem>
                        <SelectItem value="temporario">Alquiler Temporario</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Barrio */}
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      Barrio
                    </Label>
                    <Select
                      value={localFilters.neighborhood || ""}
                      onValueChange={(value) => handleFilterChange("neighborhood", value)}
                    >
                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-[#014127] focus:ring-[#014127] rounded-md bg-white/50 w-[200px]">
                        <SelectValue placeholder="Seleccionar barrio" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {neighborhoods.map((neighborhood) => (
                          <SelectItem key={neighborhood} value={neighborhood}>
                            {neighborhood}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Reset */}
                  <div className="space-y-2 mt-7">
                    <Button
                      variant="outline"
                      onClick={clearAllFilters}
                      disabled={resetLoading}
                      className="h-8.5 w-full border-2 border-gray-200 hover:border-[#008053] hover:bg-green-50 text-gray-700 hover:text-[#008053] rounded-md bg-white/50 transition-all duration-200 flex items-center justify-center"
                    >
                      <RotateCcw
                        className={`h-4 w-4 mr-2 ${resetLoading ? "animate-spin-reverse" : ""}`}
                        style={{ color: "#008053" }}
                      />
                    </Button>
                  </div>
                </div>

                {/* BOTÓN */}
                <Button
                  className="w-full h-14 bg-gradient-to-r from-[#014127] to-emerald-600 hover:from-[#014127]/90 hover:to-emerald-600/90 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  onClick={handleSearch}
                  disabled={loading}
                >
                  {loading ? (
                    "Cargando..."
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-3" />
                      {isHomePage ? "Buscar Propiedades" : "Aplicar Filtros"}
                      <div className="ml-3 px-2 py-1 bg-white/20 rounded-full text-sm">
                        {Object.keys(localFilters).length > 0 ? `${Object.keys(localFilters).length} filtros` : "Todos"}
                      </div>
                    </>
                  )}
                </Button>
              </TabsContent>

              {/* CAMPOS */}
              <TabsContent value="campos" className="space-y-6">
                {/* ... lo mismo pero para campos */}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
