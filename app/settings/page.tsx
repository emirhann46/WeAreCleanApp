"use client"

import { useState } from "react"
import { Bell, Moon, Info, ChevronRight, Sun } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true)
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-background">
      <div className="p-4 border-b border-border">
        <h1 className="text-xl font-semibold text-foreground">Ayarlar</h1>
      </div>

      <div className="flex-1">
        <div className="p-4 border-b border-border">
          <h2 className="text-sm font-medium text-muted-foreground mb-2">TERCİHLER</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Bell className="text-muted-foreground mr-3" size={20} />
                <span className="text-foreground">Bildirimler</span>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {theme === "dark" ? (
                  <Moon className="text-muted-foreground mr-3" size={20} />
                ) : (
                  <Sun className="text-muted-foreground mr-3" size={20} />
                )}
                <span className="text-foreground">Karanlık Mod</span>
              </div>
              <Switch 
                checked={theme === "dark"} 
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")} 
              />
            </div>
          </div>
        </div>

        <div className="p-4 border-b border-border">
          <h2 className="text-sm font-medium text-muted-foreground mb-2">HAKKINDA</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Info className="text-muted-foreground mr-3" size={20} />
                <span className="text-foreground">WeAreClean Hakkında</span>
              </div>
              <ChevronRight className="text-muted-foreground" size={18} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Info className="text-muted-foreground mr-3" size={20} />
                <span className="text-foreground">Gizlilik Politikası</span>
              </div>
              <ChevronRight className="text-muted-foreground" size={18} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Info className="text-muted-foreground mr-3" size={20} />
                <span className="text-foreground">Kullanım Şartları</span>
              </div>
              <ChevronRight className="text-muted-foreground" size={18} />
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>WeAreClean v1.0</p>
            <p>© 2025 WeAreClean</p>
          </div>
        </div>
      </div>
    </div>
  )
}

