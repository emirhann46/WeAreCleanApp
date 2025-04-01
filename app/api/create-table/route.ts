import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function GET() {
  try {
    // Tablo var mı kontrol et
    const { error: checkError } = await supabaseAdmin.from("subscribers").select("count").limit(1)

    if (checkError && checkError.code === "42P01") {
      // relation does not exist
      // Tablo yoksa, Supabase Storage API kullanarak tablo oluştur
      // Not: Supabase doğrudan SQL çalıştırmayı kısıtlıyor, bu yüzden
      // tabloyu manuel olarak oluşturmak gerekebilir

      return NextResponse.json({
        success: false,
        message: "Tablo bulunamadı. Lütfen Supabase Dashboard üzerinden tabloyu oluşturun.",
      })
    } else if (checkError) {
      console.error("Tablo kontrol hatası:", checkError)
      return NextResponse.json({ success: false, error: checkError.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Tablo mevcut" })
  } catch (error) {
    console.error("API hatası:", error)
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Bilinmeyen hata" },
      { status: 500 },
    )
  }
}

