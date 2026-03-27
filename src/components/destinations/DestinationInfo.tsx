"use client";

import { motion } from "framer-motion";
import {
  Mountain,
  Calendar,
  Star,
  CheckCircle,
  TrendingUp,
  Snowflake,
} from "lucide-react";
import type { Destination } from "@/types";
import { formatCurrency } from "@/lib/utils";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface DestinationInfoProps {
  destination: Destination;
}

export default function DestinationInfo({ destination }: DestinationInfoProps) {
  const infoCards = [
    {
      icon: Mountain,
      label: "Altitude",
      value: `${destination.altitude.base}m - ${destination.altitude.peak}m`,
    },
    {
      icon: Calendar,
      label: "Temporada",
      value: `${destination.season.start} a ${destination.season.end}`,
    },
    {
      icon: TrendingUp,
      label: "A partir de",
      value: formatCurrency(destination.priceRange.economic.min),
    },
    {
      icon: Snowflake,
      label: "Hemisferio",
      value: destination.season.hemisphere === "sul" ? "Sul" : "Norte",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Info Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {infoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#f4f7fb] rounded-2xl p-5 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#579af6]/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#579af6]" />
                </div>
                <p className="text-xs text-[#6b7a8d] mb-1">{card.label}</p>
                <p className="text-lg font-display font-bold text-[#1a2332]">
                  {card.value}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Description */}
          <AnimatedSection className="lg:col-span-2">
            <h2 className="text-2xl font-display font-bold text-[#1a2332] mb-6">
              Sobre {destination.name}
            </h2>
            <p className="text-[#3f4b5b] leading-relaxed text-lg mb-8">
              {destination.description}
            </p>

            {/* Highlights */}
            <h3 className="text-xl font-display font-bold text-[#1a2332] mb-4">
              Destaques
            </h3>
            <ul className="space-y-3">
              {destination.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#f5a623] mt-0.5 shrink-0" />
                  <span className="text-[#3f4b5b]">{highlight}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Sidebar */}
          <AnimatedSection delay={0.2}>
            {/* Price Range */}
            <div className="bg-[#f4f7fb] rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-display font-bold text-[#1a2332] mb-4">
                Faixas de preco (por pessoa)
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-[#6b7a8d] mb-1">Economico</p>
                  <p className="font-semibold text-[#1a2332]">
                    {formatCurrency(destination.priceRange.economic.min)} -{" "}
                    {formatCurrency(destination.priceRange.economic.max)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#6b7a8d] mb-1">Moderado</p>
                  <p className="font-semibold text-[#1a2332]">
                    {formatCurrency(destination.priceRange.moderate.min)} -{" "}
                    {formatCurrency(destination.priceRange.moderate.max)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#6b7a8d] mb-1">Luxo</p>
                  <p className="font-semibold text-[#1a2332]">
                    {formatCurrency(destination.priceRange.luxury.min)} -{" "}
                    {formatCurrency(destination.priceRange.luxury.max)}
                  </p>
                </div>
              </div>
            </div>

            {/* Check-in Rules */}
            {destination.checkInRules && destination.checkInRules.length > 0 && (
              <div className="bg-[#f4f7fb] rounded-2xl p-6">
                <h3 className="text-lg font-display font-bold text-[#1a2332] mb-4">
                  Regras de check-in
                </h3>
                <ul className="space-y-3">
                  {destination.checkInRules.map((rule) => (
                    <li key={rule} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-[#3f4b5b]">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
