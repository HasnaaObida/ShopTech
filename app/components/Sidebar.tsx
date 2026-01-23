'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Package, Plus } from 'lucide-react'

const mainLinks = [
  { label: 'Dashboard', href: '/', icon: LayoutDashboard },
  { label: 'Produits', href: '/product', icon: Package },
  { label: 'Ajouter', href: '/product/new', icon: Plus },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-white border-r flex flex-col shadow-md z-50">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 text-2xl font-bold text-orange-500 border-b">
        ShopTech
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-3 overflow-y-auto">
        {mainLinks.map(link => {
          const isActive = pathname === link.href
          const Icon = link.icon
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                ${isActive
                  ? 'bg-gradient-to-r from-orange-100 to-orange-200 text-orange-600 font-semibold shadow'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'}
              `}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-orange-500' : ''}`} />
              <span className="text-sm">{link.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t text-xs text-gray-400 text-center">
        © 2026 ShopTech Studio
      </div>
    </aside>
  )
}
