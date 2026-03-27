"use client";

import { motion } from "framer-motion";
import {
  Mountain,
  Users,
  Award,
  Heart,
  Globe,
  Shield,
  Star,
  Target,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import ChatWidget from "@/components/chat/ChatWidget";

const values = [
  {
    icon: Heart,
    title: "Paixao pela neve",
    description:
      "Somos apaixonados por esportes de inverno e transmitimos essa paixao em cada viagem que organizamos.",
  },
  {
    icon: Shield,
    title: "Seguranca em primeiro lugar",
    description:
      "Todos os nossos pacotes incluem seguro viagem completo com cobertura para esportes de inverno.",
  },
  {
    icon: Star,
    title: "Experiencia personalizada",
    description:
      "Cada viagem e unica. Criamos roteiros sob medida para atender suas expectativas e nivel de experiencia.",
  },
  {
    icon: Target,
    title: "Compromisso com qualidade",
    description:
      "Trabalhamos apenas com os melhores hoteis, escolas de ski e parceiros em cada destino.",
  },
];

const team = [
  {
    name: "Carlos Mendoza",
    role: "Fundador e CEO",
    desc: "Mais de 20 anos de experiencia em viagens de ski. Ja visitou mais de 50 resorts em 4 continentes.",
  },
  {
    name: "Ana Silva",
    role: "Diretora de Operacoes",
    desc: "Especialista em logistica e operacoes. Garante que cada detalhe da sua viagem seja perfeito.",
  },
  {
    name: "Pedro Tanaka",
    role: "Consultor de Destinos",
    desc: "Instrutor de ski certificado. Conhece pessoalmente cada resort que recomendamos.",
  },
];

export default function QuemSomosPage() {
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
              <Users className="w-8 h-8 text-[#579af6]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Quem Somos
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Conheca a equipe por tras da Snowonline e nossa paixao por levar
              voce aos melhores destinos de neve do mundo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-sm font-semibold text-[#579af6] uppercase tracking-wider">
                Nossa historia
              </span>
              <h2 className="text-3xl font-display font-bold text-[#1a2332] mt-2 mb-6">
                Mais de 15 anos levando brasileiros para a neve
              </h2>
              <div className="space-y-4 text-[#3f4b5b] leading-relaxed">
                <p>
                  A Snowonline nasceu em 2008 da paixao de um grupo de amigos
                  brasileiros que descobriram a magia do ski nos Andes chilenos.
                  O que comecou como uma aventura entre amigos se transformou em
                  uma empresa especializada em viagens de ski e snowboard.
                </p>
                <p>
                  Ao longo dos anos, expandimos nossa atuacao para os melhores
                  destinos do mundo: Estados Unidos, Canada, Europa e Japao.
                  Cada membro da nossa equipe ja visitou pessoalmente os resorts
                  que recomendamos, garantindo que cada sugestao venha de
                  experiencia real.
                </p>
                <p>
                  Hoje, somos referencia no mercado brasileiro de viagens de ski,
                  tendo atendido mais de 5.000 viajantes satisfeitos. Nossa missao
                  e tornar a neve acessivel e inesquecivel para todos os
                  brasileiros.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f4f7fb] rounded-2xl p-6 text-center">
                  <Mountain className="w-8 h-8 text-[#579af6] mx-auto mb-3" />
                  <p className="text-3xl font-display font-bold text-[#1a2332]">14+</p>
                  <p className="text-sm text-[#6b7a8d]">Resorts parceiros</p>
                </div>
                <div className="bg-[#f4f7fb] rounded-2xl p-6 text-center">
                  <Users className="w-8 h-8 text-[#579af6] mx-auto mb-3" />
                  <p className="text-3xl font-display font-bold text-[#1a2332]">5k+</p>
                  <p className="text-sm text-[#6b7a8d]">Viajantes atendidos</p>
                </div>
                <div className="bg-[#f4f7fb] rounded-2xl p-6 text-center">
                  <Globe className="w-8 h-8 text-[#579af6] mx-auto mb-3" />
                  <p className="text-3xl font-display font-bold text-[#1a2332]">5</p>
                  <p className="text-sm text-[#6b7a8d]">Regioes</p>
                </div>
                <div className="bg-[#f4f7fb] rounded-2xl p-6 text-center">
                  <Award className="w-8 h-8 text-[#579af6] mx-auto mb-3" />
                  <p className="text-3xl font-display font-bold text-[#1a2332]">15+</p>
                  <p className="text-sm text-[#6b7a8d]">Anos de experiencia</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-display font-bold text-[#1a2332] mb-4">
                Nossos valores
              </h2>
              <p className="text-[#6b7a8d] text-lg max-w-2xl mx-auto">
                Principios que guiam cada viagem que organizamos.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, index) => {
              const Icon = val.icon;
              return (
                <AnimatedSection key={val.title} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-[#579af6]/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#579af6]" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-[#1a2332] mb-2">
                      {val.title}
                    </h3>
                    <p className="text-sm text-[#6b7a8d] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-display font-bold text-[#1a2332] mb-4">
                Nossa equipe
              </h2>
              <p className="text-[#6b7a8d] text-lg max-w-2xl mx-auto">
                Profissionais apaixonados por neve que vivem e respiram ski.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#579af6] to-[#3a7ad4] flex items-center justify-center text-white text-2xl font-display font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#1a2332]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#579af6] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-[#6b7a8d] leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#579af6] to-[#3a7ad4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Vamos planejar sua viagem juntos?
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Entre em contato e receba um roteiro personalizado para a viagem
              de ski dos seus sonhos.
            </p>
            <Button href="/orcamento" variant="accent" size="lg">
              Solicitar Orcamento
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <ChatWidget />
    </>
  );
}
