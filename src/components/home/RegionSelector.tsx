"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { regions } from "@/data/destinations";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function RegionSelector() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2332] mb-4">
              Escolha sua regiao
            </h2>
            <p className="text-[#6b7a8d] text-lg max-w-2xl mx-auto">
              Cinco regioes, dezenas de resorts e infinitas possibilidades de
              diversao na neve.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {regions.map((region, index) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/destinos?region=${region.id}`}
                className={`group block relative overflow-hidden rounded-2xl bg-gradient-to-br ${region.gradient} p-6 h-44 transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <div className="absolute top-4 right-4 text-4xl opacity-30 group-hover:opacity-50 transition-opacity">
                  {region.icon}
                </div>
                <div className="relative z-10 flex flex-col justify-end h-full">
                  <h3 className="text-xl font-display font-bold text-white mb-1">
                    {region.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-3">
                    {region.countries.join(", ")}
                  </p>
                  <div className="flex items-center gap-1 text-white/90 text-sm font-medium group-hover:gap-2 transition-all">
                    Explorar <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
