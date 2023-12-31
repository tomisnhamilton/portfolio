import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tomis Hamilton',
  description: 'Tomis Hamilton\'s Portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <body className={inter.className}>{children}</body>
      </head>
    </html>
  )
}

