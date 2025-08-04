import type { Metadata } from "next"
import { Lora } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "The Art of Sourdough - From Starter to Loaf",
  description: "Discover the joy of baking with natural ingredients. From starter to loaf, we celebrate the craft of sourdough.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
