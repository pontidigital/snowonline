"use client";

import { motion } from "framer-motion";
import type { QuickReply } from "@/types";

interface ChatQuickRepliesProps {
  replies: QuickReply[];
  onSelect: (value: string) => void;
}

export default function ChatQuickReplies({
  replies,
  onSelect,
}: ChatQuickRepliesProps) {
  if (!replies || replies.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-2 ml-11">
      {replies.map((reply, index) => (
        <motion.button
          key={reply.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          onClick={() => onSelect(reply.value)}
          className="px-3 py-1.5 rounded-full bg-white border border-[#579af6] text-[#579af6] text-xs font-medium hover:bg-[#579af6] hover:text-white transition-colors"
        >
          {reply.label}
        </motion.button>
      ))}
    </div>
  );
}
