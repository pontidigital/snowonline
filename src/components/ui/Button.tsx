"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-[#579af6] text-white hover:bg-[#3a7ad4] shadow-lg hover:shadow-xl",
  secondary:
    "bg-[#1a2332] text-white hover:bg-[#2a3a4f] shadow-lg hover:shadow-xl",
  outline:
    "border-2 border-white text-white hover:bg-white hover:text-[#1a2332] backdrop-blur-sm",
  ghost:
    "text-[#579af6] hover:bg-[#579af6]/10",
  accent:
    "bg-[#f5a623] text-white hover:bg-[#d4891a] shadow-lg hover:shadow-xl",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#579af6]/50 disabled:opacity-50 disabled:cursor-not-allowed",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
