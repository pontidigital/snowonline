"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#579af6] to-[#3a7ad4] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/5" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
              Pronto para sua proxima aventura na neve?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Fale com nossos consultores especializados e receba um orcamento
              personalizado para a viagem de ski dos seus sonhos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/orcamento" variant="accent" size="lg">
                Solicitar Orcamento
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                href={WHATSAPP_LINK}
                variant="outline"
                size="lg"
              >
                <Phone className="w-5 h-5" />
                Falar por WhatsApp
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
