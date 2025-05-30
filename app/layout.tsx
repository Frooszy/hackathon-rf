import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Samba Code',
  description: 'Um novo destino aos cigarros eletronicos apreendidos pela receita federal.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
