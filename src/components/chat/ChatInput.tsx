"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [value, setValue] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-3 border-t border-[#e2e8f0]"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Digite sua mensagem..."
        disabled={disabled}
        className="flex-1 px-4 py-2.5 rounded-xl bg-[#f4f7fb] text-sm text-[#1a2332] placeholder-[#6b7a8d] focus:outline-none focus:ring-2 focus:ring-[#579af6]/20 disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={!value.trim() || disabled}
        className="w-10 h-10 rounded-xl bg-[#579af6] text-white flex items-center justify-center hover:bg-[#3a7ad4] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
        aria-label="Enviar"
      >
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
