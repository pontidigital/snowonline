"use client";

import { motion } from "framer-motion";
import { regions } from "@/data/destinations";
import { cn } from "@/lib/utils";
import type { RegionId } from "@/types";

interface RegionFilterProps {
  activeRegion: RegionId | "all";
  onRegionChange: (region: RegionId | "all") => void;
}

export default function RegionFilter({
  activeRegion,
  onRegionChange,
}: RegionFilterProps) {
  const filters: { id: RegionId | "all"; label: string }[] = [
    { id: "all", label: "Todos" },
    ...regions.map((r) => ({ id: r.id as RegionId, label: r.name })),
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onRegionChange(filter.id)}
          className={cn(
            "relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
            activeRegion === filter.id
              ? "text-white"
              : "text-[#6b7a8d] hover:text-[#3f4b5b] hover:bg-[#f4f7fb]"
          )}
        >
          {activeRegion === filter.id && (
            <motion.div
              layoutId="activeRegion"
              className="absolute inset-0 bg-[#579af6] rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span className="relative z-10">{filter.label}</span>
        </button>
      ))}
    </div>
  );
}
