import React from 'react';
import { Phone, MessageCircle, ShoppingBag } from 'lucide-react';
import { SHOP_PHONE, SHOP_PHONE_DISPLAY, getWhatsAppUrl } from '../utils/whatsapp';

interface FloatingContactBarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const FloatingContactBar: React.FC<FloatingContactBarProps> = ({
  cartCount,
  onOpenCart
}) => {
  return (
    <aside
      aria-label="Quick contact and enquiry"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090e0b]/95 backdrop-blur-md border-t border-emerald-900/60 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl h-14"
    >
      {/* Call button */}
      <a
        href={`tel:+91${SHOP_PHONE}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-bold text-slate-100 bg-[#121c16] border border-emerald-800/60 rounded active:bg-emerald-950 transition-colors"
        aria-label="Call Yt Kutty Sports Wear"
      >
        <Phone className="w-3.5 h-3.5 text-emerald-400" />
        <span>Call</span>
      </a>

      {/* WhatsApp button */}
      <a
        href={getWhatsAppUrl("Hello Yt Kutty Sports Wear, I would like to enquire about cricket bats and sports equipment.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[1.4] flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-600 rounded active:bg-emerald-800 transition-colors shadow-sm"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-3.5 h-3.5 text-white" />
        <span>WhatsApp</span>
      </a>

      {/* Cart Button */}
      <button
        onClick={onOpenCart}
        className="flex-1 relative flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-bold text-slate-950 bg-amber-400 rounded active:bg-amber-300 transition-colors"
        aria-label="View Enquiry List"
      >
        <ShoppingBag className="w-3.5 h-3.5 text-slate-950" />
        <span>Enquiry</span>
        {cartCount > 0 && (
          <span className="bg-emerald-950 text-amber-300 text-[10px] font-extrabold px-1.5 py-0.2 rounded-full tabular-nums border border-emerald-800">
            {cartCount}
          </span>
        )}
      </button>
    </aside>
  );
};
