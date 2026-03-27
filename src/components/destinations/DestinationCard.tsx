"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mountain, ArrowRight } from "lucide-react";
import type { Destination } from "@/types";

interface DestinationCardProps {
  destination: Destination;
  index?: number;
}

export default function DestinationCard({
  destination,
  index = 0,
}: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      layout
    >
      <Link
        href={`/destinos/${destination.slug}`}
        className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          {/* Image placeholder with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#579af6]/30 to-[#3a7ad4]/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <Mountain className="w-20 h-20 text-white/20" />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/80 via-[#1a2332]/20 to-transparent z-10" />

          {/* Country badge */}
          <div className="absolute top-3 left-3 z-20">
            <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#1a2332]">
              {destination.countryFlag} {destination.country}
            </span>
          </div>

          {/* Featured badge */}
          {destination.featured && (
            <div className="absolute top-3 right-3 z-20">
              <span className="px-3 py-1.5 bg-[#f5a623] rounded-full text-xs font-semibold text-white">
                Destaque
              </span>
            </div>
          )}

          {/* Bottom info */}
          <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
            <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-[#579af6] transition-colors">
              {destination.name}
            </h3>
            <p className="text-sm text-white/70">
              {destination.altitude.base}m - {destination.altitude.peak}m
            </p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-white/60">
                {destination.season.start} - {destination.season.end}
              </span>
              <span className="flex items-center gap-1 text-sm font-semibold text-white group-hover:gap-2 transition-all">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
