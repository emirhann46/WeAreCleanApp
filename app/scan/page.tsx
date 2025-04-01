"use client"

import { useState } from "react"
import { Camera, X, ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ScanPage() {
  const [scanComplete, setScanComplete] = useState(false)
  const [isClean, setIsClean] = useState(false)

  const handleScan = () => {
    // Tarama işlemini simüle et
    setTimeout(() => {
      setScanComplete(true)
      // Demo için ürünün temiz mi yoksa boykot edilmiş mi olduğunu rastgele belirle
      setIsClean(Math.random() > 0.5)
    }, 1500)
  }

  const resetScan = () => {
    setScanComplete(false)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      {!scanComplete ? (
        <>
          <div className="flex items-center p-4 border-b">
            <Link href="/">
              <ArrowLeft className="text-gray-700" />
            </Link>
            <h1 className="text-xl font-semibold text-center flex-1">Barkod Tara</h1>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center bg-gray-100 relative">
            <div className="w-full h-64 bg-black/10 flex items-center justify-center mb-8">
              <Camera size={64} className="text-gray-400" />
            </div>
            <p className="text-gray-600 mb-8">Barkodu çerçeve içine yerleştirin</p>

            <div className="flex gap-4">
              <Button variant="outline" className="px-6 py-2 border-gray-300 text-gray-700" onClick={resetScan}>
                <X className="mr-2" size={18} />
                İptal
              </Button>

              <Button className="px-6 py-2 bg-green-500 hover:bg-green-600" onClick={handleScan}>
                <Camera className="mr-2" size={18} />
                Tara
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${isClean ? "bg-green-100" : "bg-red-100"}`}
          >
            {isClean ? <Check size={48} className="text-green-500" /> : <X size={48} className="text-red-500" />}
          </div>

          <h2 className={`text-2xl font-bold mb-4 ${isClean ? "text-green-500" : "text-red-500"}`}>
            {isClean ? "Bu ürün temiz" : "Bu ürün boykot ediliyor"}
          </h2>

          <p className="text-center text-gray-600 mb-8">
            {isClean
              ? "Bu ürün etik standartları karşılıyor ve satın alınması güvenlidir."
              : "Çevresel uygulamalar ve çalışma koşullarıyla ilgili etik kaygılar nedeniyle boykot ediliyor."}
          </p>

          <div className="flex gap-4">
            <Button variant="outline" className="px-6 py-2 border-gray-300 text-gray-700" onClick={resetScan}>
              Tekrar Tara
            </Button>

            <Link href="/">
              <Button className="px-6 py-2 bg-green-500 hover:bg-green-600">Ana Sayfa</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

