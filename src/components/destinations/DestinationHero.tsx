"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Mountain as MountainIcon } from "lucide-react";
import type { Destination } from "@/types";
import { getRegionById } from "@/data/destinations";

interface DestinationHeroProps {
  destination: Destination;
}

export default function DestinationHero({ destination }: DestinationHeroProps) {
  const region = getRegionById(destination.region);

  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#579af6]/30 to-[#1a2332]/60 flex items-center justify-center">
        <MountainIcon className="w-40 h-40 text-white/10" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/90 via-[#1a2332]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32 w-full">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1 text-sm text-white/60 mb-6"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/destinos" className="hover:text-white transition-colors">
            Destinos
          </Link>
          <ChevronRight className="w-4 h-4" />
          {region && (
            <>
              <Link
                href={`/destinos?region=${destination.region}`}
                className="hover:text-white transition-colors"
              >
                {region.name}
              </Link>
              <ChevronRight className="w-4 h-4" />
            </>
          )}
          <span className="text-white">{destination.name}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{destination.countryFlag}</span>
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/20">
              {destination.country}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            {destination.name}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            {destination.shortDescription}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
