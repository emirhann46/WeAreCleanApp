"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SuggestPage() {
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    reason: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form gönderimini simüle et
    setTimeout(() => {
      setSubmitted(true)
    }, 1000)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="flex items-center p-4 border-b">
        <Link href="/">
          <ArrowLeft className="text-gray-700" />
        </Link>
        <h1 className="text-xl font-semibold text-center flex-1">İnceleme İçin Ürün Öner</h1>
      </div>

      {!submitted ? (
        <div className="flex-1 p-4">
          <p className="text-gray-600 mb-6">
            Etik kaygılar açısından incelenmesi gereken ürünleri önererek topluluğumuza yardımcı olun.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
                Ürün Adı *
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Ürün adını girin"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Kategori *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Kategori seçin</option>
                <option value="Gıda & İçecek">Gıda & İçecek</option>
                <option value="Ev Ürünleri">Ev Ürünleri</option>
                <option value="Güzellik">Güzellik</option>
                <option value="Giyim">Giyim</option>
                <option value="Elektronik">Elektronik</option>
                <option value="Diğer">Diğer</option>
              </select>
            </div>

            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                Boykot Sebebi *
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Bu ürünün neden boykot edilmesi gerektiğini açıklayın"
              />
            </div>

            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 mt-6">
              Öneriyi Gönder
            </Button>
          </form>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Teşekkürler!</h2>
          <p className="text-gray-600 mb-8">
            Öneriniz incelenmek üzere gönderildi. Ekibimiz değerlendirecek ve boykot listesini buna göre
            güncelleyecektir.
          </p>
          <Link href="/">
            <Button className="bg-green-500 hover:bg-green-600">Ana Sayfaya Dön</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

