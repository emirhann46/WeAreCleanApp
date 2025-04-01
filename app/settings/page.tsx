"use client"

import { useState } from "react"
import { Bell, Moon, Info, ChevronRight } from "lucide-react"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="p-4 border-b">
        <h1 className="text-xl font-semibold">Ayarlar</h1>
      </div>

      <div className="flex-1">
        <div className="p-4 border-b">
          <h2 className="text-sm font-medium text-gray-500 mb-2">TERCİHLER</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Bell className="text-gray-500 mr-3" size={20} />
                <span>Bildirimler</span>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Moon className="text-gray-500 mr-3" size={20} />
                <span>Karanlık Mod</span>
              </div>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>
          </div>
        </div>

        <div className="p-4 border-b">
          <h2 className="text-sm font-medium text-gray-500 mb-2">HAKKINDA</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Info className="text-gray-500 mr-3" size={20} />
                <span>WeAreClean Hakkında</span>
              </div>
              <ChevronRight className="text-gray-400" size={18} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Info className="text-gray-500 mr-3" size={20} />
                <span>Gizlilik Politikası</span>
              </div>
              <ChevronRight className="text-gray-400" size={18} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Info className="text-gray-500 mr-3" size={20} />
                <span>Kullanım Şartları</span>
              </div>
              <ChevronRight className="text-gray-400" size={18} />
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="text-center text-sm text-gray-500">
            <p>WeAreClean v1.0</p>
            <p>© 2025 WeAreClean</p>
          </div>
        </div>
      </div>
    </div>
  )
}

