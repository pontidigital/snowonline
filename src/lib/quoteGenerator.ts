import type { QuoteFormData, QuoteResult, QuoteLineItem, Destination } from "@/types";
import { getDestinationBySlug } from "@/data/destinations";

function generateId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `SNW-${timestamp}-${random}`;
}

function calculateNights(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diff = end.getTime() - start.getTime();
  return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export function generateQuote(formData: QuoteFormData): QuoteResult | null {
  const destination = getDestinationBySlug(formData.destination);
  if (!destination) return null;

  const nights = calculateNights(formData.startDate, formData.endDate);
  const totalTravelers = formData.adults + formData.children;
  const tier = formData.accommodation;
  const priceRange = destination.priceRange[tier];
  const avgPrice = (priceRange.min + priceRange.max) / 2;

  const perNightPerPerson = avgPrice / 7;

  const lineItems: QuoteLineItem[] = [];

  // Hospedagem
  const hospedagemUnit = perNightPerPerson * 0.45;
  const hospedagemAdults = hospedagemUnit * nights * formData.adults;
  const hospedagemChildren =
    hospedagemUnit * nights * formData.children * 0.7;
  lineItems.push({
    item: "Hospedagem",
    description: `${nights} noites - ${tier === "economic" ? "Economico" : tier === "moderate" ? "Moderado" : "Luxo"}`,
    unitPrice: hospedagemUnit,
    quantity: nights * totalTravelers,
    total: hospedagemAdults + hospedagemChildren,
  });

  // Ski Pass
  const skiPassUnit = perNightPerPerson * 0.25;
  const skiPassAdults = skiPassUnit * nights * formData.adults;
  const skiPassChildren = skiPassUnit * nights * formData.children * 0.7;
  lineItems.push({
    item: "Ski Pass",
    description: `Passe de ${nights} dias para todas as pistas`,
    unitPrice: skiPassUnit,
    quantity: nights * totalTravelers,
    total: skiPassAdults + skiPassChildren,
  });

  // Transfer
  const transferUnit = perNightPerPerson * 0.1 * nights;
  lineItems.push({
    item: "Transfer",
    description: "Transfer aeroporto/hotel ida e volta",
    unitPrice: transferUnit,
    quantity: totalTravelers,
    total: transferUnit * totalTravelers,
  });

  // Seguro Viagem
  const seguroUnit = perNightPerPerson * 0.1 * nights;
  lineItems.push({
    item: "Seguro Viagem",
    description: `Seguro viagem com cobertura para esportes de inverno - ${nights} dias`,
    unitPrice: seguroUnit,
    quantity: totalTravelers,
    total: seguroUnit * totalTravelers,
  });

  // Equipamentos
  const equipUnit = perNightPerPerson * 0.1;
  const equipAdults = equipUnit * nights * formData.adults;
  const equipChildren = equipUnit * nights * formData.children * 0.7;
  lineItems.push({
    item: "Equipamentos",
    description: `Aluguel de ski/snowboard completo - ${nights} dias`,
    unitPrice: equipUnit,
    quantity: nights * totalTravelers,
    total: equipAdults + equipChildren,
  });

  const subtotal = lineItems.reduce((sum, item) => sum + item.total, 0);

  // Children under 12 discount
  let discounts = 0;
  if (formData.children > 0) {
    const childrenUnder12 = formData.childrenAges.filter((age) => age < 12).length;
    if (childrenUnder12 > 0) {
      discounts = subtotal * 0.05 * childrenUnder12;
    }
  }

  const total = subtotal - discounts;
  const perPerson = total / totalTravelers;

  return {
    id: generateId(),
    destination,
    formData,
    lineItems,
    subtotal,
    discounts,
    total,
    perPerson,
    generatedAt: new Date().toISOString(),
  };
}
