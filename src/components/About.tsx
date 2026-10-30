import React from 'react';
import { Target, CheckCircle2, Award, Users, Phone, MessageCircle } from 'lucide-react';
import { SHOP_PHONE, SHOP_PHONE_DISPLAY, getWhatsAppUrl } from '../utils/whatsapp';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#070c09] border-t border-emerald-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
            01. Dedicated Cricket Specialists
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Rooted in Tirunelveli&apos;s Passion for Cricket
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            At <strong className="text-white">Yt Kutty Sports Wear</strong>, we understand that every batsman and bowler has a distinct technique, balance preference, and power zone. We bridge top-tier cricket craftsmanship directly to players, schools, and clubs across Tirunelveli and Southern Tamil Nadu.
          </p>
        </div>

        {/* 2-Column Split: Story & Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Authentic Shop Story & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 bg-[#0c1410] border border-emerald-900/40 p-6 sm:p-8 rounded-xl">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-amber-400" />
                Hand-Inspected Willow, Match-Tested Gear
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you are competing in a weekend leather ball league at Anna Stadium, practicing in local academy nets, or leading your team in high-octane night tennis tournaments, our cricket bats and equipment are rigorously vetted for durability, balance, and boundary-clearing punch.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                We take pride in guiding every young player, parent, and seasoned cricketer through selecting the right bat weight (from 1020g tennis willows to 1200g club masters), ensuring the grip, sweet spot profile, and pickup suit your exact batting stance.
              </p>
            </div>

            {/* Core Values / Shop Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-emerald-950">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Handpicked Grain Selection</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal pl-6">
                  Every English &amp; Kashmir willow blade is hand-tested for balance, ping, and grain density.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Custom Team Jerseymaking</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal pl-6">
                  In-house full sublimation printing with custom crests, names, and numbers for cricket teams.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bat Doctor &amp; Maintenance</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal pl-6">
                  Automated machine knocking, toe guard repairs, linseed oiling, and professional handle binding.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Users className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Student &amp; Academy Support</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal pl-6">
                  Special kit packages and fair pricing tailored for school teams, college athletes, and local clubs.
                </p>
              </div>
            </div>

            {/* Quick Contact Prompt */}
            <div className="pt-4 border-t border-emerald-950/80 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Want to check in-store bat availability or order custom kits?
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:+91${SHOP_PHONE}`}
                  className="px-3.5 py-1.5 text-xs font-semibold text-emerald-300 bg-emerald-950 border border-emerald-800 rounded hover:bg-emerald-900 transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{SHOP_PHONE_DISPLAY}</span>
                </a>
                <a
                  href={getWhatsAppUrl("Hello Yt Kutty Sports Wear, I would like to consult about cricket bats and gear at your Tirunelveli shop.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded transition-colors inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Advice</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Feature Grid */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* Visual 1: Bats showcase */}
            <div className="relative rounded-xl overflow-hidden border border-emerald-900/40 bg-[#0c1410] group">
              <img
                src="/src/assets/images/product_cricket_bats_1793367722910.jpg"
                alt="English and Kashmir Willow Bats at Yt Kutty Sports Wear"
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4">
                <div className="text-white text-sm font-bold">Willow Cleft Expertise</div>
                <div className="text-xs text-slate-300 mt-0.5">Straight grains, thick edges, and genuine rebound test before sale.</div>
              </div>
            </div>

            {/* Visual 2: Team Sportswear & Sublimation */}
            <div className="relative rounded-xl overflow-hidden border border-emerald-900/40 bg-[#0c1410] group">
              <img
                src="/src/assets/images/product_cricket_sportswear_1793367723576.jpg"
                alt="Cricket Sportswear and Sublimated Jerseys Yt Kutty Sports Wear"
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4">
                <div className="text-white text-sm font-bold">Custom Sports Wear Manufacturing</div>
                <div className="text-xs text-slate-300 mt-0.5">Breathable dry-fit uniforms tailored for local cricket tournament teams.</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
