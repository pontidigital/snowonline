"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mountain } from "lucide-react";
import { getFeaturedDestinations } from "@/data/destinations";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function DestinationHighlights() {
  const featured = getFeaturedDestinations().slice(0, 6);

  return (
    <section className="py-20 bg-[#f4f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2332] mb-4">
              Destinos em destaque
            </h2>
            <p className="text-[#6b7a8d] text-lg max-w-2xl mx-auto">
              Conheca os resorts mais procurados pelos nossos viajantes e comece
              a planejar sua proxima aventura.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((dest, index) => (
            <motion.div
              key={dest.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/destinos/${dest.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/60 to-transparent z-10" />
                  <div className="w-full h-full bg-gradient-to-br from-[#579af6]/20 to-[#3a7ad4]/30 flex items-center justify-center">
                    <Mountain className="w-16 h-16 text-[#579af6]/30" />
                  </div>
                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#1a2332]">
                      {dest.countryFlag} {dest.country}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 z-20">
                    <h3 className="text-xl font-display font-bold text-white">
                      {dest.name}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[#6b7a8d] mb-4 line-clamp-2">
                    {dest.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[#579af6]">
                      {dest.season.start} - {dest.season.end}
                    </span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-[#579af6] group-hover:gap-2 transition-all">
                      Ver mais <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-12">
            <Button href="/destinos" variant="primary" size="lg">
              Ver todos os destinos
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
