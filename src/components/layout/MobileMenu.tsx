"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-[#e2e8f0]">
                <span className="text-lg font-display font-bold text-[#1a2332]">
                  Menu
                </span>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-[#f4f7fb] text-[#6b7a8d]"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Items */}
              <nav className="flex-1 overflow-y-auto py-4">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between px-6 py-3 text-[#3f4b5b] hover:bg-[#f4f7fb] hover:text-[#579af6] transition-colors"
                    >
                      <span className="font-medium">{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-[#6b7a8d]" />
                    </Link>

                    {item.children && (
                      <div className="ml-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={onClose}
                            className="block px-6 py-2 text-sm text-[#6b7a8d] hover:text-[#579af6] hover:bg-[#f4f7fb] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* CTA */}
              <div className="p-4 border-t border-[#e2e8f0]">
                <Link
                  href="/orcamento"
                  onClick={onClose}
                  className="block w-full py-3 px-6 bg-[#f5a623] text-white text-center rounded-xl font-semibold hover:bg-[#d4891a] transition-all shadow-lg"
                >
                  Solicitar Orcamento
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
