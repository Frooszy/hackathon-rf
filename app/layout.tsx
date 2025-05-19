import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Samba Code',
  description: 'Um novo destino aos cigarros eletronicos apreendidos pela receita federal.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
