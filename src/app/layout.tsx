import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'X-EMR - Modern Healthcare Records Management',
  description: 'Streamline your practice with comprehensive electronic medical records',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Temporary Tailwind CDN for testing */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
          {`tailwind.config = {
            theme: {
              extend: {
                colors: {
                  emerald: {
                    400: '#34d399',
                    500: '#10b981',
                    600: '#059669',
                    900: '#064e3b'
                  }
                }
              }
            }
          }`}
        </script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
