import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mon Portfolio',
  description: 'Portfolio personnel créé avec Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gradient-to-br from-blue-300 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen`}>
        <div id="app-preloader" className="fixed inset-0 flex items-center justify-center z-50 bg-inherit transition-opacity duration-500">
          <div className="w-12 h-12 border-4 border-blue-300 border-t-transparent rounded-full animate-spin"></div>
        </div>
        {children}
      </body>
    </html>
  )
}
