"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X, Mountain } from "lucide-react";
import { useChatStore } from "@/store/chatStore";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import ChatTypingIndicator from "./ChatTypingIndicator";

export default function ChatWindow() {
  const { messages, isTyping, closeChat, sendMessage } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const lastBotIndex = messages.reduce(
    (last, msg, i) => (msg.role === "bot" ? i : last),
    -1
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-24 right-4 sm:right-6 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[70vh] bg-white rounded-2xl shadow-2xl border border-[#e2e8f0] flex flex-col z-50 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#579af6] to-[#3a7ad4] text-white">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <Mountain className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold text-sm">Snowonline</p>
            <p className="text-xs text-white/70">Assistente virtual</p>
          </div>
        </div>
        <button
          onClick={closeChat}
          className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
          aria-label="Fechar chat"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto py-3">
        {messages.map((msg, index) => (
          <ChatMessage
            key={msg.id}
            message={msg}
            onQuickReply={sendMessage}
            isLast={index === lastBotIndex}
          />
        ))}
        {isTyping && <ChatTypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <ChatInput onSend={sendMessage} disabled={isTyping} />
    </motion.div>
  );
}
