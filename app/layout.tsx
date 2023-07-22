import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'LUMIORA | Elegant Vegan Shoes',
  description: 'Classy and eco-friendly high-heel shoes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100">{children}</body>
    </html>
  )
}
