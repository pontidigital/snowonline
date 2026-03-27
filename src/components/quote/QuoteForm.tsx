"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Calendar,
  Users,
  Hotel,
  User,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import type { QuoteFormData, QuoteResult as QuoteResultType, AccommodationTier } from "@/types";
import { cn } from "@/lib/utils";
import { generateQuote } from "@/lib/quoteGenerator";
import DestinationSelect from "./DestinationSelect";
import TravelerCount from "./TravelerCount";
import QuoteResultDisplay from "./QuoteResult";

const steps = [
  { label: "Destino", icon: MapPin },
  { label: "Datas", icon: Calendar },
  { label: "Viajantes", icon: Users },
  { label: "Hospedagem", icon: Hotel },
  { label: "Contato", icon: User },
];

interface QuoteFormProps {
  initialDestination?: string;
}

export default function QuoteForm({ initialDestination }: QuoteFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [quoteResult, setQuoteResult] = useState<QuoteResultType | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<QuoteFormData>({
    destination: initialDestination || "",
    startDate: "",
    endDate: "",
    adults: 2,
    children: 0,
    childrenAges: [],
    accommodation: "moderate",
    contact: { name: "", email: "", whatsapp: "" },
  });

  function updateForm(updates: Partial<QuoteFormData>) {
    setFormData((prev) => ({ ...prev, ...updates }));
    setErrors({});
  }

  function validateStep(): boolean {
    const newErrors: Record<string, string> = {};

    switch (currentStep) {
      case 0:
        if (!formData.destination) newErrors.destination = "Selecione um destino";
        break;
      case 1:
        if (!formData.startDate) newErrors.startDate = "Selecione a data de ida";
        if (!formData.endDate) newErrors.endDate = "Selecione a data de volta";
        if (formData.startDate && formData.endDate && formData.startDate >= formData.endDate) {
          newErrors.endDate = "Data de volta deve ser posterior a data de ida";
        }
        break;
      case 2:
        if (formData.adults < 1) newErrors.adults = "Minimo 1 adulto";
        break;
      case 4:
        if (!formData.contact.name.trim()) newErrors.name = "Informe seu nome";
        if (!formData.contact.email.trim() || !/\S+@\S+\.\S+/.test(formData.contact.email))
          newErrors.email = "Informe um email valido";
        if (!formData.contact.whatsapp.trim()) newErrors.whatsapp = "Informe seu WhatsApp";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function nextStep() {
    if (!validateStep()) return;
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const result = generateQuote(formData);
      if (result) setQuoteResult(result);
    }
  }

  function prevStep() {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  }

  function resetForm() {
    setQuoteResult(null);
    setCurrentStep(0);
    setFormData({
      destination: "",
      startDate: "",
      endDate: "",
      adults: 2,
      children: 0,
      childrenAges: [],
      accommodation: "moderate",
      contact: { name: "", email: "", whatsapp: "" },
    });
  }

  if (quoteResult) {
    return <QuoteResultDisplay quote={quoteResult} onNewQuote={resetForm} />;
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="flex items-center justify-between mb-10">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          return (
            <div key={step.label} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                    isCompleted
                      ? "bg-emerald-500 text-white"
                      : isActive
                        ? "bg-[#579af6] text-white shadow-lg shadow-[#579af6]/30"
                        : "bg-[#f4f7fb] text-[#6b7a8d]"
                  )}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <Icon className="w-5 h-5" />
                  )}
                </div>
                <span
                  className={cn(
                    "text-xs mt-2 hidden sm:block",
                    isActive ? "text-[#579af6] font-medium" : "text-[#6b7a8d]"
                  )}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "w-8 sm:w-16 h-0.5 mx-1 sm:mx-2",
                    index < currentStep ? "bg-emerald-500" : "bg-[#e2e8f0]"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Form Steps */}
      <div className="bg-white rounded-2xl shadow-lg border border-[#e2e8f0] p-6 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step 0: Destination */}
            {currentStep === 0 && (
              <div>
                <h3 className="text-xl font-display font-bold text-[#1a2332] mb-6">
                  Para onde voce quer ir?
                </h3>
                <DestinationSelect
                  value={formData.destination}
                  onChange={(slug) => updateForm({ destination: slug })}
                  error={errors.destination}
                />
              </div>
            )}

            {/* Step 1: Dates */}
            {currentStep === 1 && (
              <div>
                <h3 className="text-xl font-display font-bold text-[#1a2332] mb-6">
                  Quando voce quer viajar?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#3f4b5b] mb-2">
                      Data de ida
                    </label>
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) =>
                        updateForm({ startDate: e.target.value })
                      }
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border text-[#1a2332] focus:outline-none focus:ring-2 focus:ring-[#579af6]/20 focus:border-[#579af6]",
                        errors.startDate
                          ? "border-red-400 bg-red-50"
                          : "border-[#e2e8f0]"
                      )}
                    />
                    {errors.startDate && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.startDate}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3f4b5b] mb-2">
                      Data de volta
                    </label>
                    <input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => updateForm({ endDate: e.target.value })}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border text-[#1a2332] focus:outline-none focus:ring-2 focus:ring-[#579af6]/20 focus:border-[#579af6]",
                        errors.endDate
                          ? "border-red-400 bg-red-50"
                          : "border-[#e2e8f0]"
                      )}
                    />
                    {errors.endDate && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.endDate}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Travelers */}
            {currentStep === 2 && (
              <div>
                <h3 className="text-xl font-display font-bold text-[#1a2332] mb-6">
                  Quantas pessoas vao viajar?
                </h3>
                <div className="divide-y divide-[#e2e8f0]">
                  <TravelerCount
                    label="Adultos"
                    description="A partir de 12 anos"
                    value={formData.adults}
                    min={1}
                    max={10}
                    onChange={(v) => updateForm({ adults: v })}
                  />
                  <TravelerCount
                    label="Criancas"
                    description="Ate 11 anos"
                    value={formData.children}
                    min={0}
                    max={6}
                    onChange={(v) => {
                      const ages = Array.from({ length: v }, (_, i) =>
                        formData.childrenAges[i] ?? 5
                      );
                      updateForm({ children: v, childrenAges: ages });
                    }}
                  />
                </div>

                {formData.children > 0 && (
                  <div className="mt-6">
                    <p className="text-sm font-medium text-[#3f4b5b] mb-3">
                      Idade das criancas
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {formData.childrenAges.map((age, index) => (
                        <div key={index} className="w-20">
                          <label className="text-xs text-[#6b7a8d]">
                            Crianca {index + 1}
                          </label>
                          <select
                            value={age}
                            onChange={(e) => {
                              const newAges = [...formData.childrenAges];
                              newAges[index] = parseInt(e.target.value);
                              updateForm({ childrenAges: newAges });
                            }}
                            className="w-full mt-1 px-2 py-2 rounded-lg border border-[#e2e8f0] text-sm text-[#1a2332] focus:outline-none focus:border-[#579af6]"
                          >
                            {Array.from({ length: 12 }, (_, i) => (
                              <option key={i} value={i}>
                                {i} {i === 1 ? "ano" : "anos"}
                              </option>
                            ))}
                          </select>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Accommodation */}
            {currentStep === 3 && (
              <div>
                <h3 className="text-xl font-display font-bold text-[#1a2332] mb-6">
                  Qual o nivel de hospedagem?
                </h3>
                <div className="grid gap-3">
                  {(
                    [
                      {
                        id: "economic" as AccommodationTier,
                        label: "Economico",
                        desc: "Hospedagem confortavel com bom custo-beneficio",
                      },
                      {
                        id: "moderate" as AccommodationTier,
                        label: "Moderado",
                        desc: "Hoteis bem avaliados com otima localizacao",
                      },
                      {
                        id: "luxury" as AccommodationTier,
                        label: "Luxo",
                        desc: "Resorts premium com servicos exclusivos",
                      },
                    ] as const
                  ).map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() =>
                        updateForm({ accommodation: tier.id })
                      }
                      className={cn(
                        "w-full text-left p-5 rounded-xl border-2 transition-all",
                        formData.accommodation === tier.id
                          ? "border-[#579af6] bg-[#579af6]/5"
                          : "border-[#e2e8f0] hover:border-[#579af6]/30"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-[#1a2332]">
                            {tier.label}
                          </p>
                          <p className="text-sm text-[#6b7a8d]">{tier.desc}</p>
                        </div>
                        <div
                          className={cn(
                            "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                            formData.accommodation === tier.id
                              ? "border-[#579af6]"
                              : "border-[#e2e8f0]"
                          )}
                        >
                          {formData.accommodation === tier.id && (
                            <div className="w-2.5 h-2.5 rounded-full bg-[#579af6]" />
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Contact */}
            {currentStep === 4 && (
              <div>
                <h3 className="text-xl font-display font-bold text-[#1a2332] mb-6">
                  Seus dados de contato
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#3f4b5b] mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      value={formData.contact.name}
                      onChange={(e) =>
                        updateForm({
                          contact: { ...formData.contact, name: e.target.value },
                        })
                      }
                      placeholder="Seu nome"
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#579af6]/20 focus:border-[#579af6]",
                        errors.name
                          ? "border-red-400 bg-red-50"
                          : "border-[#e2e8f0]"
                      )}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3f4b5b] mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      value={formData.contact.email}
                      onChange={(e) =>
                        updateForm({
                          contact: {
                            ...formData.contact,
                            email: e.target.value,
                          },
                        })
                      }
                      placeholder="seu@email.com"
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#579af6]/20 focus:border-[#579af6]",
                        errors.email
                          ? "border-red-400 bg-red-50"
                          : "border-[#e2e8f0]"
                      )}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3f4b5b] mb-2">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.contact.whatsapp}
                      onChange={(e) =>
                        updateForm({
                          contact: {
                            ...formData.contact,
                            whatsapp: e.target.value,
                          },
                        })
                      }
                      placeholder="(11) 99999-9999"
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#579af6]/20 focus:border-[#579af6]",
                        errors.whatsapp
                          ? "border-red-400 bg-red-50"
                          : "border-[#e2e8f0]"
                      )}
                    />
                    {errors.whatsapp && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.whatsapp}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#e2e8f0]">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 0}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors",
              currentStep === 0
                ? "text-[#e2e8f0] cursor-not-allowed"
                : "text-[#6b7a8d] hover:text-[#579af6] hover:bg-[#f4f7fb]"
            )}
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
          <button
            type="button"
            onClick={nextStep}
            className="flex items-center gap-2 px-6 py-3 bg-[#579af6] text-white rounded-xl font-semibold text-sm hover:bg-[#3a7ad4] transition-all shadow-lg hover:shadow-xl"
          >
            {currentStep === steps.length - 1 ? "Gerar Orcamento" : "Proximo"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
