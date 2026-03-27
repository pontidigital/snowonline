import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Snowonline | Especialistas em Viagens de Ski e Snowboard",
  description: "Planeje sua viagem de ski e snowboard com especialistas. Destinos na America do Sul, Estados Unidos, Canada, Europa e Japao.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-white text-[#3f4b5b]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
