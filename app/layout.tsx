import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Salvatto Inmobiliaria - Entendemos el valor de su patrimonio',
  description: 'Inmobiliaria especializada en propiedades premium en Mar del Plata. Venta, alquiler y alquiler temporario de propiedades.',
  keywords: 'inmobiliaria, propiedades, venta, alquiler, Mar del Plata, casas, departamentos',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${montserrat.className}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
