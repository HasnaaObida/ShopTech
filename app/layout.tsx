'use client'

import './globals.css'
import Providers from './store/Providers'
import Sidebar from './components/Sidebar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 font-sans min-h-screen">
        <Providers>
          <Sidebar /> 

          <main className="ml-64 p-6">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
