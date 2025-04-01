"use client"

import { Home, Camera, Settings } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="h-16 border-t bg-white">
      <div className="flex h-full">
        <Link href="/" className="flex-1 flex flex-col items-center justify-center">
          <div className={`p-1 ${isActive("/") ? "text-green-500" : "text-gray-500"}`}>
            <Home size={24} />
          </div>
          <span className={`text-xs ${isActive("/") ? "text-green-500" : "text-gray-500"}`}>Ana Sayfa</span>
        </Link>

        <Link href="/scan" className="flex-1 flex flex-col items-center justify-center">
          <div className={`p-1 ${isActive("/scan") ? "text-green-500" : "text-gray-500"}`}>
            <Camera size={24} />
          </div>
          <span className={`text-xs ${isActive("/scan") ? "text-green-500" : "text-gray-500"}`}>Tara</span>
        </Link>

        <Link href="/settings" className="flex-1 flex flex-col items-center justify-center">
          <div className={`p-1 ${isActive("/settings") ? "text-green-500" : "text-gray-500"}`}>
            <Settings size={24} />
          </div>
          <span className={`text-xs ${isActive("/settings") ? "text-green-500" : "text-gray-500"}`}>Ayarlar</span>
        </Link>
      </div>
    </nav>
  )
}

