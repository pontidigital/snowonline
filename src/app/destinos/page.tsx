"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Mountain } from "lucide-react";
import { destinations } from "@/data/destinations";
import type { RegionId } from "@/types";
import RegionFilter from "@/components/destinations/RegionFilter";
import DestinationGrid from "@/components/destinations/DestinationGrid";
import ChatWidget from "@/components/chat/ChatWidget";

function DestinosContent() {
  const searchParams = useSearchParams();
  const regionParam = searchParams.get("region") as RegionId | null;
  const [activeRegion, setActiveRegion] = useState<RegionId | "all">(
    regionParam || "all"
  );

  useEffect(() => {
    if (regionParam) setActiveRegion(regionParam);
  }, [regionParam]);

  const filtered =
    activeRegion === "all"
      ? destinations
      : destinations.filter((d) => d.region === activeRegion);

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
              <Mountain className="w-8 h-8 text-[#579af6]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Nossos Destinos
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Explore os melhores resorts de ski do mundo. Filtre por regiao e
              encontre o destino perfeito para voce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <RegionFilter
              activeRegion={activeRegion}
              onRegionChange={setActiveRegion}
            />
          </div>

          <p className="text-sm text-[#6b7a8d] mb-6">
            {filtered.length}{" "}
            {filtered.length === 1 ? "destino encontrado" : "destinos encontrados"}
          </p>

          <DestinationGrid destinations={filtered} />
        </div>
      </section>

      <ChatWidget />
    </>
  );
}

export default function DestinosPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-[#579af6] border-t-transparent rounded-full" />
        </div>
      }
    >
      <DestinosContent />
    </Suspense>
  );
}
