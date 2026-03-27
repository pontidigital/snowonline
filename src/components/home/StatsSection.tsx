"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mountain, Users, Globe, Award } from "lucide-react";

const stats = [
  {
    icon: Mountain,
    value: 14,
    suffix: "+",
    label: "Resorts parceiros",
  },
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Viajantes atendidos",
  },
  {
    icon: Globe,
    value: 5,
    suffix: "",
    label: "Regioes cobertas",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Anos de experiencia",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-[#1a2332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#579af6]/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#579af6]" />
                </div>
                <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
