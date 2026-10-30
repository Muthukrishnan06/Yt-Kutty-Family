import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { SHOP_PHONE, SHOP_PHONE_DISPLAY, SHOP_LOCATION_DISPLAY, getWhatsAppUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050806] border-t border-emerald-950 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded bg-emerald-800 flex items-center justify-center text-amber-300 font-extrabold text-xs border border-emerald-700/40">
                YK
              </span>
              <span className="text-base font-bold text-white tracking-tight">
                Yt Kutty Sports Wear
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your trusted local cricket bat and sports equipment destination in Tirunelveli, Tamil Nadu. Premium hand-selected willows, protective gear, match balls, and custom sportswear.
            </p>
            <div className="flex items-center gap-2 text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{SHOP_LOCATION_DISPLAY}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Cricket Bats &amp; Equipment
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Our Shop
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Bat Knocking &amp; Repairs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Custom Team Jerseys
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  Location &amp; Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Highlights */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Equipment Categories
            </div>
            <ul className="space-y-2">
              <li>Grade 1 &amp; Kashmir Willow Bats</li>
              <li>Hard Tennis &amp; Scoop Willow Bats</li>
              <li>4-Piece Match Leather Cricket Balls</li>
              <li>Batting Leg Guards &amp; Pittards Gloves</li>
              <li>BCCI/ICC Spec Cricket Helmets</li>
              <li>Heavy-Duty Wheelie Cricket Bags</li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Direct Contact
            </div>
            <div className="space-y-2">
              <div>
                <span className="text-slate-500 block text-[11px]">Phone / Call:</span>
                <a
                  href={`tel:+91${SHOP_PHONE}`}
                  className="text-sm font-bold text-amber-400 hover:underline tabular-nums"
                >
                  {SHOP_PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">WhatsApp:</span>
                <a
                  href={getWhatsAppUrl("Hello Yt Kutty Sports Wear, I am reaching out from your website.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-400 hover:underline"
                >
                  Chat with Us (+91 {SHOP_PHONE})
                </a>
              </div>
              <div className="pt-1">
                <span className="text-slate-500 block text-[11px]">Working Hours:</span>
                <span className="text-slate-300">Mon &ndash; Sun: 9:00 AM &ndash; 9:30 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Clean copyright and local attribution */}
        <div className="pt-8 border-t border-emerald-950/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Yt Kutty Sports Wear. All rights reserved. Tirunelveli, Tamil Nadu, India.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted for cricket players in Tamil Nadu</span>
            <ShieldCheck className="w-3 h-3 text-emerald-400 ml-1" />
          </div>
        </div>

      </div>
    </footer>
  );
};
