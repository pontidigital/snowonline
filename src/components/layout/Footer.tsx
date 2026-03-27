import Link from "next/link";
import { Mountain, Mail, Phone, MapPin } from "lucide-react";
import {
  SITE_NAME,
  TAGLINE,
  EMAIL,
  WHATSAPP,
  WHATSAPP_LINK,
  SOCIAL_LINKS,
  BUSINESS_HOURS,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#1a2332] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mountain className="w-7 h-7 text-[#579af6]" />
              <span className="text-xl font-display font-bold">{SITE_NAME}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {TAGLINE}. Mais de 15 anos de experiencia levando voce para os
              melhores destinos de neve do mundo.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#579af6] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#579af6] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#579af6] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Destinos */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#579af6] mb-4">
              Destinos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/destinos?region=south-america"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  America do Sul
                </Link>
              </li>
              <li>
                <Link
                  href="/destinos?region=usa"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Estados Unidos
                </Link>
              </li>
              <li>
                <Link
                  href="/destinos?region=canada"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Canada
                </Link>
              </li>
              <li>
                <Link
                  href="/destinos?region=europe"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Europa
                </Link>
              </li>
              <li>
                <Link
                  href="/destinos?region=japan"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Japao
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#579af6] mb-4">
              Institucional
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/quem-somos"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  href="/orcamento"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Orcamento
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#579af6] mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#579af6] mt-0.5 shrink-0" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#579af6] mt-0.5 shrink-0" />
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#579af6] mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">
                  Sao Paulo, SP - Brasil
                </span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">{BUSINESS_HOURS.label}</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {SITE_NAME}. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Politica de Privacidade
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
