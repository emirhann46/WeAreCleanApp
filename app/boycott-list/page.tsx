import { Search, Filter, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Boykot edilen ürünler için örnek veriler
const boycottedProducts = [
  {
    id: 1,
    name: "EcoHarm Deterjan",
    category: "Ev Ürünleri",
    reason: "Çevre kirliliği ve hayvan deneyleri",
  },
  {
    id: 2,
    name: "FastFashion Giyim",
    category: "Giyim",
    reason: "Kötü çalışma koşulları ve sürdürülemez uygulamalar",
  },
  {
    id: 3,
    name: "MegaCorp Kahve",
    category: "Gıda & İçecek",
    reason: "Etik olmayan tedarik ve çiftçi sömürüsü",
  },
  {
    id: 4,
    name: "TechGiant Akıllı Telefon",
    category: "Elektronik",
    reason: "Tedarik zincirinde çocuk işçiliği",
  },
  {
    id: 5,
    name: "LuxBeauty Kozmetik",
    category: "Güzellik",
    reason: "Hayvan deneyleri ve zararlı içerikler",
  },
]

export default function BoycottList() {
  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="p-4 border-b">
        <h1 className="text-xl font-semibold mb-4">Boykot Listesi</h1>

        <div className="relative w-full mb-4">
          <input
            type="text"
            placeholder="Boykot edilen ürünleri ara..."
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">{boycottedProducts.length} ürün listelendi</div>
          <Button variant="ghost" size="sm" className="text-gray-500">
            <Filter size={16} className="mr-1" />
            Filtrele
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {boycottedProducts.map((product) => (
          <div key={product.id} className="p-4 border-b">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-medium text-lg">{product.name}</h3>
              <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{product.category}</span>
            </div>
            <p className="text-sm text-red-500">
              <span className="font-medium">Sebep: </span>
              {product.reason}
            </p>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <Link href="/suggest">
          <Button className="w-full bg-green-500 hover:bg-green-600">
            <Plus size={18} className="mr-2" />
            Yeni Öneri
          </Button>
        </Link>
      </div>
    </div>
  )
}

