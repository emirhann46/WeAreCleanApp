import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WeAreClean",
  description: "Etik alışveriş seçimleri yapın",
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-white`}>
        <div className="max-w-[375px] mx-auto min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
          <Navigation />
        </div>
      </body>
    </html>
  )
}



import './globals.css'