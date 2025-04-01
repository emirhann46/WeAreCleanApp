import Image from "next/image"
import { Search, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import NewsletterForm from "@/components/newsletter-form"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-6 h-[calc(100vh-64px)]">
      <div className="w-full">
        <div className="flex justify-center mb-8">
          <Image src="/logo.png" alt="WeAreClean Logo" width={300} height={100} priority />
        </div>

        <NewsletterForm />

        <div className="relative w-full mb-8">
          <input
            type="text"
            placeholder="Ürün ara..."
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 mb-12">
        <Link href="/scan" className="w-full">
          <Button className="w-full h-16 text-lg bg-green-500 hover:bg-green-600">
            <Camera className="mr-2" size={24} />
            Ürün Tara
          </Button>
        </Link>
      </div>

      <div className="text-center text-sm text-gray-500">
        <p>Etik alışveriş seçimleri yapmanıza yardımcı olur</p>
        <p>WeAreClean v1.0</p>
      </div>
    </div>
  )
}

