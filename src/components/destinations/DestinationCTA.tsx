"use client";

import { ArrowRight, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { WHATSAPP_LINK } from "@/lib/constants";
import type { Destination } from "@/types";

interface DestinationCTAProps {
  destination: Destination;
}

export default function DestinationCTA({ destination }: DestinationCTAProps) {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-gradient-to-r from-[#579af6] to-[#3a7ad4] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                Quer esquiar em {destination.name}?
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                Solicite um orcamento personalizado e receba um roteiro completo
                para sua viagem de ski.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  href={`/orcamento?destino=${destination.slug}`}
                  variant="accent"
                  size="lg"
                >
                  Solicitar Orcamento
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button href={WHATSAPP_LINK} variant="outline" size="lg">
                  <Phone className="w-5 h-5" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
