"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Calendar, Clock, Mountain } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import ChatWidget from "@/components/chat/ChatWidget";

const posts = [
  {
    title: "10 dicas essenciais para sua primeira viagem de ski",
    excerpt:
      "Vai esquiar pela primeira vez? Confira nossas dicas para aproveitar ao maximo sua experiencia na neve sem surpresas.",
    category: "Dicas",
    date: "15 Mar 2026",
    readTime: "5 min",
  },
  {
    title: "Valle Nevado 2026: novidades para a temporada",
    excerpt:
      "O maior resort de ski da America do Sul anuncia melhorias nas pistas e novos restaurantes para a temporada 2026.",
    category: "Destinos",
    date: "10 Mar 2026",
    readTime: "4 min",
  },
  {
    title: "Equipamentos de ski: o que alugar e o que levar",
    excerpt:
      "Guia completo sobre equipamentos de ski. Saiba o que vale a pena alugar no resort e o que voce deve levar na mala.",
    category: "Guias",
    date: "5 Mar 2026",
    readTime: "7 min",
  },
  {
    title: "Niseko: por que a neve do Japao e a melhor do mundo",
    excerpt:
      "Descubra o que torna a neve powder de Hokkaido tao especial e por que Niseko atrai esquiadores do mundo inteiro.",
    category: "Destinos",
    date: "28 Fev 2026",
    readTime: "6 min",
  },
  {
    title: "Viagem de ski em familia: como planejar",
    excerpt:
      "Dicas praticas para organizar uma viagem de ski incrivel com criancas. Destinos, atividades e cuidados essenciais.",
    category: "Dicas",
    date: "20 Fev 2026",
    readTime: "8 min",
  },
  {
    title: "Apres-ski: os melhores bares e restaurantes nas montanhas",
    excerpt:
      "A diversao nao para quando as pistas fecham. Conheca os melhores lugares para curtir o apres-ski ao redor do mundo.",
    category: "Experiencias",
    date: "15 Fev 2026",
    readTime: "5 min",
  },
];

const categoryColors: Record<string, string> = {
  Dicas: "bg-emerald-100 text-emerald-700",
  Destinos: "bg-blue-100 text-blue-700",
  Guias: "bg-amber-100 text-amber-700",
  Experiencias: "bg-purple-100 text-purple-700",
};

export default function BlogPage() {
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
              <BookOpen className="w-8 h-8 text-[#579af6]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Blog
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Dicas, guias e novidades do mundo do ski e snowboard para voce se
              preparar para sua proxima aventura.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <AnimatedSection key={post.title} delay={index * 0.05}>
                <article className="group bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Image placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-[#579af6]/10 to-[#3a7ad4]/20 flex items-center justify-center">
                    <Mountain className="w-12 h-12 text-[#579af6]/20" />
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${categoryColors[post.category] || "bg-gray-100 text-gray-700"}`}
                      >
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-lg font-display font-bold text-[#1a2332] mb-2 group-hover:text-[#579af6] transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-sm text-[#6b7a8d] mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-[#6b7a8d] pt-3 border-t border-[#e2e8f0]">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {/* Coming soon note */}
          <AnimatedSection delay={0.3}>
            <div className="mt-16 text-center bg-[#f4f7fb] rounded-2xl p-10">
              <h3 className="text-xl font-display font-bold text-[#1a2332] mb-3">
                Mais conteudo em breve!
              </h3>
              <p className="text-[#6b7a8d] max-w-md mx-auto mb-6">
                Estamos preparando novos artigos com dicas, roteiros e tudo que
                voce precisa saber para sua proxima viagem de ski.
              </p>
              <Button href="/destinos" variant="primary">
                Explorar Destinos
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ChatWidget />
    </>
  );
}
