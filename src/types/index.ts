export type RegionId = "south-america" | "usa" | "canada" | "europe" | "japan";

export interface Region {
  id: RegionId;
  name: string;
  countries: string[];
  icon: string;
  gradient: string;
}

export interface Destination {
  slug: string;
  name: string;
  country: string;
  countryFlag: string;
  region: RegionId;
  description: string;
  shortDescription: string;
  heroImage: string;
  images: string[];
  altitude: { base: number; peak: number };
  season: { start: string; end: string; hemisphere: "norte" | "sul" };
  highlights: string[];
  featured: boolean;
  priceRange: {
    economic: { min: number; max: number };
    moderate: { min: number; max: number };
    luxury: { min: number; max: number };
  };
  checkInRules?: string[];
}

export type AccommodationTier = "economic" | "moderate" | "luxury";

export interface QuoteFormData {
  destination: string;
  startDate: string;
  endDate: string;
  adults: number;
  children: number;
  childrenAges: number[];
  accommodation: AccommodationTier;
  contact: { name: string; email: string; whatsapp: string };
}

export interface QuoteLineItem {
  item: string;
  description: string;
  unitPrice: number;
  quantity: number;
  total: number;
}

export interface QuoteResult {
  id: string;
  destination: Destination;
  formData: QuoteFormData;
  lineItems: QuoteLineItem[];
  subtotal: number;
  discounts: number;
  total: number;
  perPerson: number;
  generatedAt: string;
}

export interface QuickReply {
  label: string;
  value: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "bot";
  content: string;
  timestamp: Date;
  quickReplies?: QuickReply[];
}

export interface ChatState {
  messages: ChatMessage[];
  isOpen: boolean;
  isTyping: boolean;
  toggleChat: () => void;
  openChat: () => void;
  closeChat: () => void;
  addMessage: (message: ChatMessage) => void;
  setTyping: (typing: boolean) => void;
  sendMessage: (content: string) => void;
}
