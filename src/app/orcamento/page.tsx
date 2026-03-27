"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import QuoteForm from "@/components/quote/QuoteForm";
import ChatWidget from "@/components/chat/ChatWidget";

function OrcamentoContent() {
  const searchParams = useSearchParams();
  const destino = searchParams.get("destino") || undefined;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#1a2332] to-[#2a3a4f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#579af6]/10 flex items-center justify-center">
              <Calculator className="w-8 h-8 text-[#579af6]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Solicitar Orcamento
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Monte seu orcamento personalizado em poucos passos. Rapido, facil
              e sem compromisso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 bg-[#f4f7fb] min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm initialDestination={destino} />
        </div>
      </section>

      <ChatWidget />
    </>
  );
}

export default function OrcamentoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-[#579af6] border-t-transparent rounded-full" />
        </div>
      }
    >
      <OrcamentoContent />
    </Suspense>
  );
}
