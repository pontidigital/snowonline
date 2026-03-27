"use client";

import { motion } from "framer-motion";

export default function ChatTypingIndicator() {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <div className="w-8 h-8 rounded-full bg-[#579af6]/10 flex items-center justify-center shrink-0">
        <span className="text-xs">🤖</span>
      </div>
      <div className="flex items-center gap-1 bg-[#f4f7fb] rounded-2xl px-4 py-3">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-[#6b7a8d]"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>
    </div>
  );
}
