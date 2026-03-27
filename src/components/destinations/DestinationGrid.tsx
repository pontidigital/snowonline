"use client";

import { AnimatePresence } from "framer-motion";
import type { Destination } from "@/types";
import DestinationCard from "./DestinationCard";

interface DestinationGridProps {
  destinations: Destination[];
}

export default function DestinationGrid({ destinations }: DestinationGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <AnimatePresence mode="popLayout">
        {destinations.map((dest, index) => (
          <DestinationCard
            key={dest.slug}
            destination={dest}
            index={index}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
