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
    <div className="flex flex-col h-[calc(100vh-64px)] bg-background">
      {!scanComplete ? (
        <>
          <div className="flex items-center p-4 border-b border-border">
            <Link href="/">
              <ArrowLeft className="text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <h1 className="text-xl font-semibold text-foreground text-center flex-1">Barkod Tara</h1>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center bg-background relative">
            <div className="w-full max-w-md mx-auto h-64 bg-card flex items-center justify-center mb-8 border border-border rounded-lg shadow-sm">
              <Camera size={64} className="text-muted-foreground" />
            </div>
            <p className="text-muted-foreground mb-8">Barkodu çerçeve içine yerleştirin</p>

            <div className="flex gap-4">
              <Button 
                variant="secondary" 
                onClick={resetScan}
                className="min-w-[100px]"
              >
                <X className="mr-2" size={18} />
                İptal
              </Button>

              <Button 
                onClick={handleScan}
                className="min-w-[100px] bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white"
              >
                <Camera className="mr-2" size={18} />
                Tara
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center p-6 bg-background">
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 border ${
              isClean ? "bg-green-500/10 border-green-500/20" : "bg-red-500/10 border-red-500/20"
            }`}
          >
            {isClean ? <Check size={48} className="text-green-500" /> : <X size={48} className="text-red-500" />}
          </div>

          <h2 className={`text-2xl font-bold mb-4 ${isClean ? "text-green-500" : "text-red-500"}`}>
            {isClean ? "Bu ürün temiz" : "Bu ürün boykot ediliyor"}
          </h2>

          <p className="text-center text-muted-foreground mb-8 max-w-md">
            {isClean
              ? "Bu ürün etik standartları karşılıyor ve satın alınması güvenlidir."
              : "Çevresel uygulamalar ve çalışma koşullarıyla ilgili etik kaygılar nedeniyle boykot ediliyor."}
          </p>

          <div className="flex gap-4">
            <Button 
              variant="secondary"
              onClick={resetScan}
              className="min-w-[120px]"
            >
              Tekrar Tara
            </Button>

            <Link href="/">
              <Button 
                className="min-w-[120px] bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white"
              >
                Ana Sayfa
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

