import React from 'react';
import { ArrowRight, Phone, MessageCircle, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { SHOP_PHONE, SHOP_PHONE_DISPLAY, getWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#090d0b] via-[#0c1611] to-[#090d0b]">
      {/* Subtle pitch texture & radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.12),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(234,179,8,0.06),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Trust Kicker (clean unboxed text with typographic separator) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-400 tracking-wide uppercase">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Tirunelveli, Tamil Nadu
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Cricket Bat & Sports Equipment Hub</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] max-w-2xl text-balance">
              Master the Pitch with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-amber-300">Handcrafted Willow</span> & Pro Cricket Gear.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Welcome to <strong className="text-white font-semibold">Yt Kutty Sports Wear</strong> — Tirunelveli&apos;s trusted cricket specialty store. We bring you hand-selected English &amp; Kashmir Willow bats, tournament match balls, pro protective gear, and custom sublimated team sportswear.
            </p>

            {/* Direct CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-all shadow-lg hover:shadow-amber-400/20 whitespace-nowrap cursor-pointer"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <a
                href={getWhatsAppUrl("Hello Yt Kutty Sports Wear, I'm looking for cricket bats / sports equipment in Tirunelveli. Can you assist me?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded transition-colors border border-emerald-600/40 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:+91${SHOP_PHONE}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 rounded border border-slate-700/60 transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {SHOP_PHONE_DISPLAY}</span>
              </a>
            </div>

            {/* Local Trust Badges (Plain text with separators) */}
            <div className="pt-4 border-t border-emerald-950/80 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                100% Genuine Cleft Willows
              </span>
              <span aria-hidden="true" className="text-slate-700">/</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                In-House Bat Knocking Service
              </span>
              <span aria-hidden="true" className="text-slate-700">/</span>
              <span className="text-slate-300">
                Custom Team Jersey Printing
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-emerald-800/40 bg-emerald-950/40 shadow-2xl group">
              <img
                src="/src/assets/images/hero_cricket_equipment_1793367722376.jpg"
                alt="Handcrafted English Willow Cricket Bat, Leather Match Ball and Gloves at Yt Kutty Sports Wear Tirunelveli"
                className="w-full h-auto aspect-[16/10] sm:aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              
              {/* Subtle lighting scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* In-image caption card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-xs sm:text-sm">
                <div className="flex items-center justify-between text-white font-semibold">
                  <span>Match-Ready Cricket Equipment</span>
                  <span className="text-amber-400 tabular-nums">From ₹350</span>
                </div>
                <p className="text-slate-300 text-xs mt-1">
                  Grade 1 &amp; Kashmir Willow bats knocked, oiled, and balanced for immediate match play.
                </p>
              </div>
            </div>

            {/* Quick floating stat strip */}
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="bg-[#0e1c14] border border-emerald-900/50 p-2.5 rounded">
                <div className="text-lg font-bold text-amber-400 tabular-nums">100%</div>
                <div className="text-[11px] text-slate-400">Authentic Willow</div>
              </div>
              <div className="bg-[#0e1c14] border border-emerald-900/50 p-2.5 rounded">
                <div className="text-lg font-bold text-emerald-400 tabular-nums">10,000+</div>
                <div className="text-[11px] text-slate-400">Machine Knocks</div>
              </div>
              <div className="bg-[#0e1c14] border border-emerald-900/50 p-2.5 rounded">
                <div className="text-lg font-bold text-amber-400 tabular-nums">Tirunelveli</div>
                <div className="text-[11px] text-slate-400">Direct Storefront</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
