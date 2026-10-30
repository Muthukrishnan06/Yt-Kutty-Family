import React from 'react';
import { Hammer, ShieldAlert, Scissors, Shirt, Clock, MessageCircle, Check } from 'lucide-react';
import { SHOP_SERVICES } from '../data/products';
import { getServiceEnquiryUrl } from '../utils/whatsapp';

export const Services: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'machine-knocking':
        return <Hammer className="w-5 h-5 text-amber-400" />;
      case 'scuff-toe-protection':
        return <ShieldAlert className="w-5 h-5 text-emerald-400" />;
      case 'handle-repair-rethread':
        return <Scissors className="w-5 h-5 text-amber-400" />;
      case 'custom-team-jersey':
        return <Shirt className="w-5 h-5 text-emerald-400" />;
      default:
        return <Hammer className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#080d0a] border-t border-emerald-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
            03. Workshop &amp; Customization
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Bat Knocking &amp; Team Jersey Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Don&apos;t risk playing with an unseasoned bat! At our Tirunelveli shop, we provide professional bat servicing, automated machine knocking, and custom team jersey printing to get your squad tournament-ready.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SHOP_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-[#0d1611] border border-emerald-900/40 rounded-xl p-6 flex flex-col justify-between hover:border-emerald-600/50 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center">
                    {getIcon(srv.id)}
                  </div>
                  <span className="text-[11px] font-semibold text-amber-400 bg-amber-950/40 border border-amber-900/30 px-2 py-0.5 rounded">
                    {srv.highlight}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {srv.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-emerald-950 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{srv.turnaround}</span>
                  </span>
                  <span className="font-extrabold text-amber-400 tabular-nums">
                    From ₹{srv.price}
                  </span>
                </div>

                <a
                  href={getServiceEnquiryUrl(srv.name, srv.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-slate-950" />
                  <span>Book via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Process Guarantee Strip */}
        <div className="mt-10 bg-[#0d1712] border border-emerald-900/40 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-white">Have an Old Bat Needing Repair or Weight Adjustment?</h4>
            <p className="text-xs text-slate-400">
              Bring your bat to our Tirunelveli counter. We assess blade fiber condition, remove toe cracks, and re-balance free of charge before starting work.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold shrink-0">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Guaranteed Ping &amp; Durability</span>
          </div>
        </div>

      </div>
    </section>
  );
};
