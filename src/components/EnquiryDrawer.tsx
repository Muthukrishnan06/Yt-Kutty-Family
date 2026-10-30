import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, Phone, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../data/products';
import { getCartEnquiryUrl, SHOP_PHONE, SHOP_PHONE_DISPLAY } from '../utils/whatsapp';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface EnquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const EnquiryDrawer: React.FC<EnquiryDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [customerNote, setCustomerNote] = useState('');

  if (!isOpen) return null;

  const totalAmount = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleSendWhatsApp = () => {
    const formattedItems = items.map((i) => ({
      name: i.product.name,
      quantity: i.quantity,
      price: i.product.price
    }));
    const waUrl = getCartEnquiryUrl(formattedItems, totalAmount, customerNote);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-[#0b130e] border-l border-emerald-900/60 h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-emerald-950 flex items-center justify-between bg-[#080d0a]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white">Equipment Enquiry List</h3>
            <span className="text-xs bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">
              {items.length} items
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
            aria-label="Close Enquiry List"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-950/60 border border-emerald-800 flex items-center justify-center text-slate-500">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-slate-300">Your enquiry list is currently empty</p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Browse our cricket bats, protective gear, match balls, and sportswear to add items for enquiry.
              </p>
              <button
                onClick={onClose}
                className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-900 bg-amber-400 rounded hover:bg-amber-300"
              >
                <span>Browse Equipment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
                <span>Selected Equipment</span>
                <button
                  onClick={onClearCart}
                  className="text-slate-500 hover:text-red-400 transition-colors"
                >
                  Clear all
                </button>
              </div>

              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-[#0e1712] border border-emerald-950 rounded-lg p-3 flex gap-3 items-center justify-between"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-14 h-14 object-cover rounded bg-black/40 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="flex-1 min-w-0 pr-2">
                    <h4 className="text-xs font-bold text-white truncate">
                      {item.product.name}
                    </h4>
                    <div className="text-[11px] text-amber-400 font-medium tabular-nums mt-0.5">
                      ₹{item.product.price.toLocaleString('en-IN')} each
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Subtotal: ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </div>
                  </div>

                  {/* Quantity Stepper & Remove */}
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-slate-500 hover:text-red-400 transition-colors p-0.5"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-1 bg-black/50 border border-emerald-950 rounded px-1.5 py-0.5">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="text-slate-400 hover:text-white p-0.5"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-white px-1.5 tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="text-slate-400 hover:text-white p-0.5"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Note input */}
              <div className="pt-2">
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Custom Request or Knocking Note (Optional)
                </label>
                <textarea
                  rows={2}
                  value={customerNote}
                  onChange={(e) => setCustomerNote(e.target.value)}
                  placeholder="e.g. Please include machine bat knocking service or mention jersey sizes..."
                  className="w-full bg-[#080d0a] border border-emerald-950 rounded p-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-emerald-950 bg-[#080d0a] space-y-3">
            <div className="flex items-baseline justify-between text-sm">
              <span className="text-slate-400">Estimated Total:</span>
              <span className="text-2xl font-extrabold text-amber-400 tabular-nums">
                ₹{totalAmount.toLocaleString('en-IN')}
              </span>
            </div>
            
            <p className="text-[11px] text-slate-500">
              *Tirunelveli local store pickup / direct dispatch. Final pricing confirmed upon enquiry.
            </p>

            <button
              onClick={handleSendWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-600 rounded transition-colors shadow-lg cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Send Order Enquiry via WhatsApp</span>
            </button>

            <a
              href={`tel:+91${SHOP_PHONE}`}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Or Call: {SHOP_PHONE_DISPLAY}</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
