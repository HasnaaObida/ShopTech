import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-100 min-h-screen font-sans">
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-64 bg-white p-6 shadow-md min-h-screen">
            <h1 className="text-xl font-bold mb-6">Stock Manager</h1>
            <nav className="space-y-2">
              <a href="/" className="block p-2 rounded hover:bg-gray-100">Dashboard</a>
              <a href="/products" className="block p-2 rounded hover:bg-gray-100">Produits</a>
              <a href="/products/new" className="block p-2 rounded hover:bg-gray-100">Ajouter produit</a>
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  )
} 
