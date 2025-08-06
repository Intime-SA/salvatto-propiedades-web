"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Search, MapPin, Home, Building2, Warehouse, TreePine, DollarSign, Bed, Bath, Car, Maximize, Filter, ChevronDown, X, SlidersHorizontal } from 'lucide-react'

export default function PropertyFilter() {
  const [priceRange, setPriceRange] = useState([50000, 500000])
  const [areaRange, setAreaRange] = useState([50, 300])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [showAdvanced, setShowAdvanced] = useState(false)

  const addFilter = (filter: string) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter])
    }
  }

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter(f => f !== filter))
  }

  const clearAllFilters = () => {
    setSelectedFilters([])
    setPriceRange([50000, 500000])
    setAreaRange([50, 300])
  }

  return (
    <div className=" bg-gradient-to-br from-slate-50 via-white to-emerald-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#014127] to-emerald-600 bg-clip-text text-transparent mb-2">
            Encuentra tu Propiedad Ideal
          </h1>
          <p className="text-gray-600 text-lg">Filtros avanzados para una búsqueda precisa</p>
        </div>

        {/* Main Search Card */}
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm rounded-md">
          <CardContent className="p-8">
            <Tabs defaultValue="urbano" className="w-full">
             

              <TabsContent value="urbano" className="space-y-6">
                {/* Quick Search Bar */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Buscar por código, dirección o palabra clave..."
                    className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-[#014127] focus:ring-[#014127] rounded-md bg-white/50"
                  />
                </div>

                {/* Main Filters */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center">
                      <Home className="h-4 w-4 mr-1" />
                      Tipo de Propiedad
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-[#014127] focus:ring-[#014127] rounded-md bg-white/50">
                        <SelectValue placeholder="Seleccionar tipo" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="casa">🏠 Casa</SelectItem>
                        <SelectItem value="departamento">🏢 Departamento</SelectItem>
                        <SelectItem value="ph">🏘️ PH</SelectItem>
                        <SelectItem value="local">🏪 Local Comercial</SelectItem>
                        <SelectItem value="oficina">🏢 Oficina</SelectItem>
                        <SelectItem value="terreno">🏞️ Terreno</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      Operación
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-[#014127] focus:ring-[#014127] rounded-md bg-white/50">
                        <SelectValue placeholder="Tipo de operación" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="venta">💰 Venta</SelectItem>
                        <SelectItem value="alquiler">🏠 Alquiler</SelectItem>
                        <SelectItem value="temporario">🏖️ Alquiler Temporario</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      Ubicación
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-[#014127] focus:ring-[#014127] rounded-md bg-white/50">
                        <SelectValue placeholder="Zona o barrio" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="centro">🏛️ Centro</SelectItem>
                        <SelectItem value="norte">🌆 Zona Norte</SelectItem>
                        <SelectItem value="sur">🏘️ Zona Sur</SelectItem>
                        <SelectItem value="oeste">🌅 Zona Oeste</SelectItem>
                        <SelectItem value="este">🌊 Zona Este</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      Habitaciones
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-[#014127] focus:ring-[#014127] rounded-md bg-white/50">
                        <SelectValue placeholder="Cantidad" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="1">1 Habitación</SelectItem>
                        <SelectItem value="2">2 Habitaciones</SelectItem>
                        <SelectItem value="3">3 Habitaciones</SelectItem>
                        <SelectItem value="4">4+ Habitaciones</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

              

                {/* Active Filters */}
                {selectedFilters.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-semibold text-gray-700 flex items-center">
                        <Filter className="h-4 w-4 mr-1" />
                        Filtros Activos
                      </Label>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={clearAllFilters}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        Limpiar todo
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedFilters.map((filter) => (
                        <Badge 
                          key={filter} 
                          variant="secondary" 
                          className="bg-[#014127]/10 text-[#014127] hover:bg-[#014127]/20 px-3 py-1"
                        >
                          {filter}
                          <X 
                            className="h-3 w-3 ml-2 cursor-pointer hover:text-red-600" 
                            onClick={() => removeFilter(filter)}
                          />
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Search Button */}
                <Button 
                  className="w-full h-14 bg-gradient-to-r from-[#014127] to-emerald-600 hover:from-[#014127]/90 hover:to-emerald-600/90 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <Search className="h-5 w-5 mr-3" />
                  Buscar Propiedades
                  <div className="ml-3 px-2 py-1 bg-white/20 rounded-full text-sm">
                    {selectedFilters.length > 0 ? `${selectedFilters.length} filtros` : 'Todos'}
                  </div>
                </Button>
              </TabsContent>

              <TabsContent value="campos" className="space-y-6">
                {/* Quick Search Bar */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Buscar campos por código, ubicación o características..."
                    className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-[#014127] focus:ring-[#014127] rounded-md bg-white/50"
                  />
                </div>

                {/* Main Filters for Campos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center">
                      <TreePine className="h-4 w-4 mr-1" />
                      Tipo de Campo
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-[#014127] focus:ring-[#014127] rounded-md bg-white/50">
                        <SelectValue placeholder="Seleccionar tipo" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="agricola">🌾 Agrícola</SelectItem>
                        <SelectItem value="ganadero">🐄 Ganadero</SelectItem>
                        <SelectItem value="mixto">🌾🐄 Mixto</SelectItem>
                        <SelectItem value="forestal">🌲 Forestal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      Operación
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-[#014127] focus:ring-[#014127] rounded-md bg-white/50">
                        <SelectValue placeholder="Tipo de operación" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="venta">💰 Venta</SelectItem>
                        <SelectItem value="alquiler">🏠 Alquiler</SelectItem>
                        <SelectItem value="arrendamiento">📋 Arrendamiento</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      Región
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-[#014127] focus:ring-[#014127] rounded-md bg-white/50">
                        <SelectValue placeholder="Seleccionar región" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="pampeana">🌾 Región Pampeana</SelectItem>
                        <SelectItem value="patagonia">🏔️ Patagonia</SelectItem>
                        <SelectItem value="noa">⛰️ NOA</SelectItem>
                        <SelectItem value="nea">🌿 NEA</SelectItem>
                        <SelectItem value="cuyo">🍇 Cuyo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center">
                      <Maximize className="h-4 w-4 mr-1" />
                      Superficie
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-[#014127] focus:ring-[#014127] rounded-md bg-white/50">
                        <SelectValue placeholder="Hectáreas" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="small">1-50 hectáreas</SelectItem>
                        <SelectItem value="medium">51-200 hectáreas</SelectItem>
                        <SelectItem value="large">201-500 hectáreas</SelectItem>
                        <SelectItem value="xlarge">500+ hectáreas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Search Button for Campos */}
                <Button 
                  className="w-full h-14 bg-gradient-to-r from-[#014127] to-emerald-600 hover:from-[#014127]/90 hover:to-emerald-600/90 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <Search className="h-5 w-5 mr-3" />
                  Buscar Campos
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

       
      </div>
    </div>
  )
}
