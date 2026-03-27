"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface TravelerCountProps {
  label: string;
  description?: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

export default function TravelerCount({
  label,
  description,
  value,
  min = 0,
  max = 10,
  onChange,
}: TravelerCountProps) {
  const decrement = () => {
    if (value > min) onChange(value - 1);
  };

  const increment = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <p className="font-medium text-[#1a2332]">{label}</p>
        {description && (
          <p className="text-sm text-[#6b7a8d]">{description}</p>
        )}
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={decrement}
          disabled={value <= min}
          className={cn(
            "w-9 h-9 rounded-lg flex items-center justify-center border transition-colors",
            value <= min
              ? "border-[#e2e8f0] text-[#e2e8f0] cursor-not-allowed"
              : "border-[#579af6] text-[#579af6] hover:bg-[#579af6] hover:text-white"
          )}
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center text-lg font-semibold text-[#1a2332]">
          {value}
        </span>
        <button
          type="button"
          onClick={increment}
          disabled={value >= max}
          className={cn(
            "w-9 h-9 rounded-lg flex items-center justify-center border transition-colors",
            value >= max
              ? "border-[#e2e8f0] text-[#e2e8f0] cursor-not-allowed"
              : "border-[#579af6] text-[#579af6] hover:bg-[#579af6] hover:text-white"
          )}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
