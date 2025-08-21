import { Suspense } from "react"
import FeaturedPropertiesWrapper from "@/components/propiedades"
import LayoutLanding from "@/components/LayoutLanding"

export default function PropiedadesPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <FeaturedPropertiesWrapper />
    </Suspense>
  )
}
