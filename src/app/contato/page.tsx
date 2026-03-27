"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import ChatWidget from "@/components/chat/ChatWidget";
import {
  EMAIL,
  WHATSAPP_LINK,
  BUSINESS_HOURS,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function ContatoPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) errs.name = "Informe seu nome";
    if (!formState.email.trim() || !/\S+@\S+\.\S+/.test(formState.email))
      errs.email = "Informe um email valido";
    if (!formState.message.trim()) errs.message = "Escreva sua mensagem";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

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
              <MessageSquare className="w-8 h-8 text-[#579af6]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Entre em Contato
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Estamos aqui para ajudar. Envie uma mensagem ou fale conosco pelo
              WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-display font-bold text-[#1a2332] mb-6">
                    Informacoes de contato
                  </h2>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#579af6]/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-[#579af6]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#1a2332]">E-mail</p>
                        <a
                          href={`mailto:${EMAIL}`}
                          className="text-sm text-[#579af6] hover:underline"
                        >
                          {EMAIL}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#579af6]/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-[#579af6]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#1a2332]">WhatsApp</p>
                        <a
                          href={WHATSAPP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#579af6] hover:underline"
                        >
                          Clique para conversar
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#579af6]/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-[#579af6]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#1a2332]">Endereco</p>
                        <p className="text-sm text-[#6b7a8d]">
                          Sao Paulo, SP - Brasil
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f4f7fb] rounded-2xl p-6">
                  <h3 className="font-display font-bold text-[#1a2332] mb-2">
                    Horario de atendimento
                  </h3>
                  <p className="text-sm text-[#6b7a8d]">
                    {BUSINESS_HOURS.label}
                  </p>
                </div>

                <div>
                  <h3 className="font-display font-bold text-[#1a2332] mb-3">
                    Redes sociais
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-[#f4f7fb] flex items-center justify-center text-[#6b7a8d] hover:bg-[#579af6] hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    <a
                      href={SOCIAL_LINKS.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-[#f4f7fb] flex items-center justify-center text-[#6b7a8d] hover:bg-[#579af6] hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href={SOCIAL_LINKS.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-[#f4f7fb] flex items-center justify-center text-[#6b7a8d] hover:bg-[#579af6] hover:text-white transition-colors"
                      aria-label="YouTube"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.2} className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#f4f7fb] rounded-2xl p-12 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#1a2332] mb-4">
                    Mensagem enviada!
                  </h3>
                  <p className="text-[#6b7a8d] mb-8 max-w-md mx-auto">
                    Obrigado pelo contato. Nossa equipe ira responder em ate 24
                    horas uteis.
                  </p>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                    }}
                  >
                    Enviar outra mensagem
                  </Button>
                </motion.div>
              ) : (
                <div className="bg-[#f4f7fb] rounded-2xl p-6 md:p-8">
                  <h2 className="text-2xl font-display font-bold text-[#1a2332] mb-6">
                    Envie uma mensagem
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#3f4b5b] mb-2">
                          Nome *
                        </label>
                        <input
                          type="text"
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          placeholder="Seu nome completo"
                          className={cn(
                            "w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#579af6]/20 focus:border-[#579af6]",
                            errors.name
                              ? "border-red-400 bg-red-50"
                              : "border-[#e2e8f0] bg-white"
                          )}
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#3f4b5b] mb-2">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              email: e.target.value,
                            })
                          }
                          placeholder="seu@email.com"
                          className={cn(
                            "w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#579af6]/20 focus:border-[#579af6]",
                            errors.email
                              ? "border-red-400 bg-red-50"
                              : "border-[#e2e8f0] bg-white"
                          )}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#3f4b5b] mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              phone: e.target.value,
                            })
                          }
                          placeholder="(11) 99999-9999"
                          className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-white focus:outline-none focus:ring-2 focus:ring-[#579af6]/20 focus:border-[#579af6]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#3f4b5b] mb-2">
                          Assunto
                        </label>
                        <select
                          value={formState.subject}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              subject: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-white text-[#1a2332] focus:outline-none focus:ring-2 focus:ring-[#579af6]/20 focus:border-[#579af6]"
                        >
                          <option value="">Selecione</option>
                          <option value="orcamento">Orcamento</option>
                          <option value="duvida">Duvida sobre destinos</option>
                          <option value="parceria">Parceria</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3f4b5b] mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                        placeholder="Conte-nos sobre sua viagem dos sonhos..."
                        rows={5}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#579af6]/20 focus:border-[#579af6] resize-none",
                          errors.message
                            ? "border-red-400 bg-red-50"
                            : "border-[#e2e8f0] bg-white"
                        )}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="flex items-center gap-2 px-8 py-3 bg-[#579af6] text-white rounded-xl font-semibold hover:bg-[#3a7ad4] transition-all shadow-lg hover:shadow-xl"
                    >
                      <Send className="w-4 h-4" />
                      Enviar mensagem
                    </button>
                  </form>
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ChatWidget />
    </>
  );
}
