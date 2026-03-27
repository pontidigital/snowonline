"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, MapPin } from "lucide-react";
import { destinations, regions } from "@/data/destinations";
import { cn } from "@/lib/utils";
import type { RegionId } from "@/types";

interface DestinationSelectProps {
  value: string;
  onChange: (slug: string) => void;
  error?: string;
}

export default function DestinationSelect({
  value,
  onChange,
  error,
}: DestinationSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const selectedDest = destinations.find((d) => d.slug === value);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredByRegion = regions.map((region) => ({
    region,
    destinations: destinations.filter(
      (d) =>
        d.region === region.id &&
        (search === "" ||
          d.name.toLowerCase().includes(search.toLowerCase()) ||
          d.country.toLowerCase().includes(search.toLowerCase()))
    ),
  })).filter((group) => group.destinations.length > 0);

  return (
    <div ref={ref} className="relative">
      <label className="block text-sm font-medium text-[#3f4b5b] mb-2">
        Destino
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 rounded-xl border text-left transition-colors",
          error
            ? "border-red-400 bg-red-50"
            : "border-[#e2e8f0] bg-white hover:border-[#579af6]",
          isOpen && "border-[#579af6] ring-2 ring-[#579af6]/20"
        )}
      >
        <span className={selectedDest ? "text-[#1a2332]" : "text-[#6b7a8d]"}>
          {selectedDest
            ? `${selectedDest.countryFlag} ${selectedDest.name}`
            : "Selecione um destino"}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-[#6b7a8d] transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}

      {isOpen && (
        <div className="absolute z-30 top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-[#e2e8f0] max-h-72 overflow-hidden">
          {/* Search */}
          <div className="p-3 border-b border-[#e2e8f0]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7a8d]" />
              <input
                type="text"
                placeholder="Buscar destino..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-[#e2e8f0] text-sm focus:outline-none focus:border-[#579af6]"
                autoFocus
              />
            </div>
          </div>

          {/* Grouped Options */}
          <div className="overflow-y-auto max-h-52">
            {filteredByRegion.map(({ region, destinations: dests }) => (
              <div key={region.id}>
                <div className="px-4 py-2 bg-[#f4f7fb] text-xs font-semibold text-[#6b7a8d] uppercase tracking-wider">
                  {region.icon} {region.name}
                </div>
                {dests.map((dest) => (
                  <button
                    key={dest.slug}
                    type="button"
                    onClick={() => {
                      onChange(dest.slug);
                      setIsOpen(false);
                      setSearch("");
                    }}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-[#f4f7fb] transition-colors text-left",
                      value === dest.slug &&
                        "bg-[#579af6]/5 text-[#579af6] font-medium"
                    )}
                  >
                    <MapPin className="w-4 h-4 shrink-0 text-[#6b7a8d]" />
                    <span>
                      {dest.countryFlag} {dest.name}
                    </span>
                  </button>
                ))}
              </div>
            ))}
            {filteredByRegion.length === 0 && (
              <p className="px-4 py-6 text-sm text-[#6b7a8d] text-center">
                Nenhum destino encontrado
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
