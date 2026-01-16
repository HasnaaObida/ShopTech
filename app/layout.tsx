import './globals.css'
import Providers from './store/Providers'

export const metadata = {
  title: 'Stock Manager',
  description: 'Dashboard & Products Management',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-100 font-sans min-h-screen">
        <Providers>
          <div className="flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md min-h-screen p-6">
              <h1 className="text-2xl font-bold mb-6">ShopTech</h1>
              <nav className="space-y-2">
                <a href="/" className="block p-2 rounded hover:bg-gray-100">Dashboard</a>
                <a href="/product" className="block p-2 rounded hover:bg-gray-100">Produits</a>
                <a href="/product/new" className="block p-2 rounded hover:bg-gray-100">Ajouter </a>
              </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-6">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
