import React from 'react';
import { X, Check, MessageCircle, ShoppingBag, Shield, Star, Phone } from 'lucide-react';
import { Product } from '../data/products';
import { getProductEnquiryUrl, SHOP_PHONE, SHOP_PHONE_DISPLAY } from '../utils/whatsapp';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  isInCart: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isInCart
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#0d1611] border border-emerald-900/60 rounded-xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Image with overlay badge */}
          <div className="relative bg-[#080d0a] flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-emerald-950">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 md:h-full max-h-[380px] object-cover rounded-lg shadow-md"
              referrerPolicy="no-referrer"
            />
            {product.badge && (
              <span className="absolute top-8 left-8 text-xs font-bold uppercase tracking-wider text-amber-300 bg-emerald-950/90 border border-emerald-800/80 px-2.5 py-1 rounded">
                {product.badge}
              </span>
            )}
          </div>

          {/* Right Column: Detailed Specs & Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-3">
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="uppercase tracking-wider font-semibold text-emerald-400">
                  {product.categoryLabel}
                </span>
                <span className="flex items-center gap-1 text-amber-400 font-medium">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="tabular-nums">{product.rating}</span>
                  <span className="text-slate-500">({product.reviewsCount} reviews)</span>
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                {product.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 tabular-nums">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-500 line-through tabular-nums">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-xs text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/50">
                  In Stock · Tirunelveli
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {product.fullDesc}
              </p>

              {/* Technical Specifications */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Technical Specifications
                </h4>
                <div className="bg-[#080e0b] border border-emerald-950 rounded-lg p-3 space-y-1.5 text-xs">
                  {Object.entries(product.specs).map(([label, val]) => (
                    <div key={label} className="flex justify-between py-0.5 border-b border-emerald-950/60 last:border-0">
                      <span className="text-slate-400">{label}</span>
                      <span className="text-white font-medium text-right pl-3">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Highlights
                </h4>
                <ul className="space-y-1 text-xs text-slate-300">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions & WhatsApp Direct */}
            <div className="pt-4 border-t border-emerald-950 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => onAddToCart(product)}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 text-xs sm:text-sm font-bold rounded transition-colors ${
                    isInCart
                      ? 'bg-emerald-800 text-white'
                      : 'bg-amber-400 hover:bg-amber-300 text-slate-950'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{isInCart ? 'In Enquiry List' : 'Add to List'}</span>
                </button>

                <a
                  href={getProductEnquiryUrl(product.name, product.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-600 rounded transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Shop</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  Free store pickup in Tirunelveli
                </span>
                <a href={`tel:+91${SHOP_PHONE}`} className="text-amber-400 hover:underline flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  <span>Call {SHOP_PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
