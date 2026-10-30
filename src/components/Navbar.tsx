import React, { useState } from 'react';
import { Phone, ShoppingBag, Menu, X, MessageCircle } from 'lucide-react';
import { SHOP_PHONE, SHOP_PHONE_DISPLAY, getWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#090d0b]/95 backdrop-blur-md border-b border-emerald-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Brand Wordmark (Single text element, 1 line, no pills) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-xl sm:text-2xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-emerald-400 transition-colors"
          >
            <span className="w-8 h-8 rounded bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-amber-300 font-extrabold text-sm border border-emerald-500/30 shadow-inner">
              YK
            </span>
            <span>Yt Kutty Sports Wear</span>
          </a>

          {/* Zone 2: 5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#products" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Cricket Gear
            </a>
            <a href="#about" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              About Us
            </a>
            <a href="#services" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Bat Services
            </a>
            <a href="#location" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Location
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Phone quick link on desktop */}
            <a
              href={`tel:+91${SHOP_PHONE}`}
              className="hidden lg:flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 rounded hover:bg-emerald-900/60 hover:text-emerald-300 transition-colors whitespace-nowrap shrink-0"
              title="Call Yt Kutty Sports Wear"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{SHOP_PHONE_DISPLAY}</span>
            </a>

            {/* Quote / Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-amber-400 rounded hover:bg-amber-300 transition-colors whitespace-nowrap shrink-0 shadow-sm"
              aria-label="View Enquiry Cart"
            >
              <ShoppingBag className="w-4 h-4 text-slate-900" />
              <span className="hidden sm:inline">Enquiry List</span>
              {cartCount > 0 && (
                <span className="bg-emerald-950 text-amber-300 text-[11px] font-bold px-1.5 py-0.2 rounded-full tabular-nums border border-emerald-800">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a100d] border-b border-emerald-900/60 px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2.5 text-base font-medium text-slate-200">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-emerald-950/80 hover:text-amber-400 transition-colors"
            >
              Cricket Gear & Bats
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-emerald-950/80 hover:text-amber-400 transition-colors"
            >
              About Yt Kutty Sports Wear
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-emerald-950/80 hover:text-amber-400 transition-colors"
            >
              Bat Knocking & Custom Jersey
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-emerald-950/80 hover:text-amber-400 transition-colors"
            >
              Tirunelveli Location & Map
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-emerald-950/80 hover:text-amber-400 transition-colors"
            >
              Contact Us (6381574175)
            </a>
          </nav>

          <div className="pt-3 border-t border-emerald-950 flex flex-col gap-2">
            <a
              href={`tel:+91${SHOP_PHONE}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-800 rounded"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {SHOP_PHONE_DISPLAY}</span>
            </a>
            <a
              href={getWhatsAppUrl("Hello Yt Kutty Sports Wear, I visited your website and would like to know more about your cricket bats and sports equipment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
