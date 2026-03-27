"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useChatStore } from "@/store/chatStore";
import ChatWindow from "./ChatWindow";

export default function ChatWidget() {
  const { isOpen, toggleChat } = useChatStore();

  return (
    <>
      <AnimatePresence>{isOpen && <ChatWindow />}</AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-4 sm:right-6 w-14 h-14 rounded-full bg-[#579af6] text-white shadow-lg shadow-[#579af6]/30 flex items-center justify-center z-50 hover:bg-[#3a7ad4] transition-colors"
        aria-label={isOpen ? "Fechar chat" : "Abrir chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
