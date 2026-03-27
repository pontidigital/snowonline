import { create } from "zustand";
import type { ChatState, ChatMessage } from "@/types";
import {
  generateBotResponse,
  createBotMessage,
  createUserMessage,
  getWelcomeMessage,
} from "@/data/chatEngine";

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [getWelcomeMessage()],
  isOpen: false,
  isTyping: false,

  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  openChat: () => set({ isOpen: true }),
  closeChat: () => set({ isOpen: false }),

  addMessage: (message: ChatMessage) =>
    set((state) => ({ messages: [...state.messages, message] })),

  setTyping: (typing: boolean) => set({ isTyping: typing }),

  sendMessage: (content: string) => {
    const userMsg = createUserMessage(content);
    get().addMessage(userMsg);
    set({ isTyping: true });

    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      const { content: botContent, quickReplies } = generateBotResponse(content);
      const botMsg = createBotMessage(botContent, quickReplies);
      get().addMessage(botMsg);
      set({ isTyping: false });
    }, delay);
  },
}));
