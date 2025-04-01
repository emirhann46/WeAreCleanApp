import Image from "next/image";
import { Search, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NewsletterForm from "@/components/newsletter-form";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-6 h-[calc(100vh-64px)] bg-background">
      <div className="w-full">
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-4">
            <Image
              src="/logo.svg"
              alt="WeAreClean Logo"
              width={288}
              height={49}
              className="w-auto h-8"
              priority
            />
          </div>
        </div>

        <NewsletterForm />

        <div className="relative w-full mb-8">
          <input
            type="text"
            placeholder="Ürün ara..."
            className="w-full p-3 pl-10 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-foreground placeholder:text-muted-foreground"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            size={18}
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 mb-12 w-full max-w-md">
        <Link href="/scan" className="w-full">
          <Button className="w-full h-16 text-lg bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white">
            <Camera className="mr-2" size={24} />
            Ürün Tara
          </Button>
        </Link>
      </div>

      <div className="text-center text-sm text-muted-foreground">
        <p>Etik alışveriş seçimleri yapmanıza yardımcı olur</p>
        <p>WeAreClean v1.0</p>
      </div>
    </div>
  );
}
