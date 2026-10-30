import React from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink } from 'lucide-react';
import { SHOP_PHONE, SHOP_PHONE_DISPLAY, SHOP_LOCATION_DISPLAY } from '../utils/whatsapp';

export const LocationMap: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-20 bg-[#090d0b] border-t border-emerald-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
            04. Store Location &amp; Directions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Visit Our Store in Tirunelveli, Tamil Nadu
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Conveniently situated in Tirunelveli to serve local cricket clubs, school sports teams, academy cricketers, and enthusiasts across the district.
          </p>
        </div>

        {/* 2-Column Layout: Location Info & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Access Details & Timings (5 cols) */}
          <div className="lg:col-span-5 bg-[#0c1510] border border-emerald-900/40 p-6 sm:p-8 rounded-xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              {/* Primary Address Indicator */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-800/60 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Yt Kutty Sports Wear</h3>
                  <p className="text-sm text-slate-300 mt-1 font-medium">{SHOP_LOCATION_DISPLAY}</p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Contact Callout */}
              <div className="flex items-start gap-3 pt-4 border-t border-emerald-950">
                <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-800/60 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Direct Shop Line</div>
                  <a
                    href={`tel:+91${SHOP_PHONE}`}
                    className="text-base font-bold text-amber-400 hover:text-amber-300 tabular-nums transition-colors"
                  >
                    {SHOP_PHONE_DISPLAY}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Call ahead to confirm bat models, grain preferences, or stock availability.
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3 pt-4 border-t border-emerald-950">
                <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-800/60 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Store Hours</div>
                  <div className="text-sm font-semibold text-white">Monday &ndash; Sunday (Open 7 Days)</div>
                  <div className="text-xs text-amber-400 font-mono">09:00 AM &ndash; 09:30 PM IST</div>
                </div>
              </div>

              {/* Regional Coverage */}
              <div className="p-4 bg-[#080f0b] border border-emerald-950 rounded-lg text-xs space-y-2">
                <div className="font-bold text-slate-200">Serving Cricketers Across:</div>
                <div className="text-slate-400 leading-relaxed">
                  Tirunelveli City, Palayamkottai, Junction, Town, Melapalayam, Pettai, Vannarpettai, and nearby Tenkasi, Thoothukudi, and Madurai regions.
                </div>
              </div>

            </div>

            {/* Direct Directions Button */}
            <div className="pt-4 border-t border-emerald-950">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Tirunelveli,+Tamil+Nadu,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
              >
                <Navigation className="w-4 h-4 text-slate-950" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-800" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Google Map Embed (7 cols) */}
          <div className="lg:col-span-7 bg-[#0c1510] border border-emerald-900/40 rounded-xl overflow-hidden flex flex-col">
            <div className="px-5 py-3.5 bg-[#09100c] border-b border-emerald-950 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Live Map View: Tirunelveli, Tamil Nadu
              </span>
              <span className="text-[11px] text-slate-400">Interactive Zoom &amp; Pan</span>
            </div>

            <div className="relative w-full h-[380px] sm:h-[440px] flex-1">
              <iframe
                title="Yt Kutty Sports Wear Location in Tirunelveli, Tamil Nadu"
                src="https://maps.google.com/maps?q=Tirunelveli,+Tamil+Nadu,+India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="px-5 py-3 bg-[#09100c] border-t border-emerald-950 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <span>Coordinates: 8.7139° N, 77.7567° E</span>
              <span>Need help locating the shop? Call <strong className="text-slate-200">6381574175</strong></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
