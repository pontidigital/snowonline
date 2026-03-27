"use client";

import { motion } from "framer-motion";
import type { ChatMessage as ChatMessageType } from "@/types";
import { cn } from "@/lib/utils";
import ChatQuickReplies from "./ChatQuickReplies";

interface ChatMessageProps {
  message: ChatMessageType;
  onQuickReply: (value: string) => void;
  isLast: boolean;
}

export default function ChatMessage({
  message,
  onQuickReply,
  isLast,
}: ChatMessageProps) {
  const isBot = message.role === "bot";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={cn("flex gap-3 px-4 py-2", !isBot && "flex-row-reverse")}
      >
        {/* Avatar */}
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs",
            isBot ? "bg-[#579af6]/10" : "bg-[#f5a623]/10"
          )}
        >
          {isBot ? "🤖" : "👤"}
        </div>

        {/* Bubble */}
        <div
          className={cn(
            "max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
            isBot
              ? "bg-[#f4f7fb] text-[#3f4b5b] rounded-tl-sm"
              : "bg-[#579af6] text-white rounded-tr-sm"
          )}
        >
          {message.content}
        </div>
      </div>

      {/* Quick Replies (only on last bot message) */}
      {isBot && isLast && message.quickReplies && (
        <ChatQuickReplies
          replies={message.quickReplies}
          onSelect={onQuickReply}
        />
      )}
    </motion.div>
  );
}
