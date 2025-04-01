"use server"

import { revalidatePath } from "next/cache"
import { supabaseAdmin } from "@/lib/supabase"

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string

  // Basit e-posta doğrulama
  if (!email || !email.includes("@")) {
    return { success: false, message: "Geçerli bir e-posta adresi giriniz." }
  }

  try {
    // Tablo var mı kontrol et
    const { error: checkError } = await supabaseAdmin.from("subscribers").select("count").limit(1)

    if (checkError) {
      console.error("Tablo kontrol hatası:", checkError)

      if (checkError.code === "42P01") {
        // relation does not exist
        return {
          success: false,
          message: "Mail listesi henüz kurulmamış. Lütfen daha sonra tekrar deneyin veya yönetici ile iletişime geçin.",
        }
      }

      return {
        success: false,
        message: "Veritabanı sorgusu sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
      }
    }

    // E-postanın zaten kayıtlı olup olmadığını kontrol et
    const { data: existingEmails, error: emailCheckError } = await supabaseAdmin
      .from("subscribers")
      .select("email")
      .eq("email", email)

    if (emailCheckError) {
      console.error("E-posta kontrol hatası:", emailCheckError)
      return {
        success: false,
        message: "Veritabanı sorgusu sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
      }
    }

    // E-posta zaten kayıtlıysa
    if (existingEmails && existingEmails.length > 0) {
      return { success: false, message: "Bu e-posta adresi zaten listemize kayıtlı." }
    }

    // Yeni abone ekle
    const { error: insertError } = await supabaseAdmin.from("subscribers").insert([
      {
        email,
        subscribed_at: new Date().toISOString(),
      },
    ])

    if (insertError) {
      console.error("Veri ekleme hatası:", insertError)
      return {
        success: false,
        message: "Abonelik kaydı sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
      }
    }

    // Sayfayı yeniden doğrula
    revalidatePath("/")

    return { success: true, message: "E-posta listemize başarıyla kaydoldunuz!" }
  } catch (error) {
    console.error("Abonelik hatası:", error)
    return {
      success: false,
      message: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
    }
  }
}

