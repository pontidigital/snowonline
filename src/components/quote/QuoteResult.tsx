"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Download,
  Share2,
  ArrowRight,
  Phone,
} from "lucide-react";
import type { QuoteResult as QuoteResultType } from "@/types";
import { formatCurrency, formatDate } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { WHATSAPP_LINK } from "@/lib/constants";

interface QuoteResultProps {
  quote: QuoteResultType;
  onNewQuote: () => void;
}

export default function QuoteResult({ quote, onNewQuote }: QuoteResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#579af6] to-[#3a7ad4] rounded-t-2xl p-6 md:p-8 text-white">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-display font-bold">
              Orcamento gerado!
            </h2>
            <p className="text-white/70 text-sm">ID: {quote.id}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
              Destino
            </p>
            <p className="font-semibold">
              {quote.destination.countryFlag} {quote.destination.name}
            </p>
          </div>
          <div>
            <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
              Periodo
            </p>
            <p className="font-semibold">
              {formatDate(quote.formData.startDate)} -{" "}
              {formatDate(quote.formData.endDate)}
            </p>
          </div>
          <div>
            <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
              Viajantes
            </p>
            <p className="font-semibold">
              {quote.formData.adults} adulto(s)
              {quote.formData.children > 0 &&
                `, ${quote.formData.children} crianca(s)`}
            </p>
          </div>
          <div>
            <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
              Hospedagem
            </p>
            <p className="font-semibold capitalize">
              {quote.formData.accommodation === "economic"
                ? "Economico"
                : quote.formData.accommodation === "moderate"
                  ? "Moderado"
                  : "Luxo"}
            </p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-t-0 border-[#e2e8f0] rounded-b-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#f4f7fb]">
                <th className="text-left px-6 py-3 text-xs font-semibold text-[#6b7a8d] uppercase tracking-wider">
                  Item
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-[#6b7a8d] uppercase tracking-wider hidden sm:table-cell">
                  Descricao
                </th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-[#6b7a8d] uppercase tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {quote.lineItems.map((item, index) => (
                <tr
                  key={item.item}
                  className="border-t border-[#e2e8f0]"
                >
                  <td className="px-6 py-4">
                    <p className="font-medium text-[#1a2332]">{item.item}</p>
                    <p className="text-xs text-[#6b7a8d] sm:hidden">
                      {item.description}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#6b7a8d] hidden sm:table-cell">
                    {item.description}
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-[#1a2332]">
                    {formatCurrency(item.total)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="border-t border-[#e2e8f0] px-6 py-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-[#6b7a8d]">Subtotal</span>
            <span className="text-[#1a2332]">
              {formatCurrency(quote.subtotal)}
            </span>
          </div>
          {quote.discounts > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-emerald-600">
                Desconto criancas menores de 12 anos
              </span>
              <span className="text-emerald-600">
                -{formatCurrency(quote.discounts)}
              </span>
            </div>
          )}
          <div className="flex justify-between text-lg font-bold pt-2 border-t border-[#e2e8f0]">
            <span className="text-[#1a2332]">Total</span>
            <span className="text-[#579af6]">
              {formatCurrency(quote.total)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#6b7a8d]">Por pessoa</span>
            <span className="text-[#1a2332] font-medium">
              {formatCurrency(quote.perPerson)}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="border-t border-[#e2e8f0] px-6 py-6">
          <p className="text-xs text-[#6b7a8d] mb-4 text-center">
            * Valores estimados sujeitos a alteracao. Entre em contato para
            confirmar disponibilidade e precos finais.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href={WHATSAPP_LINK} variant="primary" size="md">
              <Phone className="w-4 h-4" />
              Falar com consultor
            </Button>
            <Button
              variant="ghost"
              size="md"
              onClick={onNewQuote}
            >
              Novo orcamento
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
