"use client"

import type React from "react"

import { useTransition, useState } from "react"
import { Button } from "@/components/ui/button"
import { subscribeToNewsletter } from "@/app/actions"
import { useToast } from "@/hooks/use-toast"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isPending, startTransition] = useTransition()
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | "idle"
    message: string
  }>({ type: "idle", message: "" })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Form durumunu sıfırla
    setFormStatus({ type: "idle", message: "" })

    const formData = new FormData()
    formData.append("email", email)

    startTransition(async () => {
      try {
        const result = await subscribeToNewsletter(formData)

        if (result.success) {
          setFormStatus({ type: "success", message: result.message })
          toast({
            title: "Başarılı!",
            description: result.message,
          })
          setEmail("") // Başarılı olursa formu temizle
        } else {
          setFormStatus({ type: "error", message: result.message })
          toast({
            title: "Hata!",
            description: result.message,
            variant: "destructive",
          })
        }
      } catch (error) {
        setFormStatus({
          type: "error",
          message: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
        })
        toast({
          title: "Hata!",
          description: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
          variant: "destructive",
        })
      }
    })
  }

  return (
    <div className="w-full mb-6">
      <div className="text-center mb-2">
        <h2 className="text-lg font-medium">Mail Listesine Katıl</h2>
        <p className="text-sm text-gray-500">Yeni ürün ve güncellemelerden haberdar ol</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-posta adresiniz"
            required
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            disabled={isPending}
          />
          <Button type="submit" disabled={isPending} className="bg-green-500 hover:bg-green-600">
            {isPending ? "İşleniyor..." : "Katıl"}
          </Button>
        </div>

        {formStatus.type !== "idle" && (
          <div
            className={`text-sm p-2 rounded ${
              formStatus.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {formStatus.message}
          </div>
        )}
      </form>
    </div>
  )
}

