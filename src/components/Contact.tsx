import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, ShieldCheck, Mail, Clock } from 'lucide-react';
import { SHOP_PHONE, SHOP_PHONE_DISPLAY, SHOP_LOCATION_DISPLAY, getWhatsAppUrl } from '../utils/whatsapp';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Cricket Bat (English/Kashmir Willow)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const formattedMessage = `Hello Yt Kutty Sports Wear,
My Name: ${name.trim()}
Phone: ${phone.trim() || 'Not specified'}
Interested in: ${interest}
Message: ${message.trim() || 'Please share product details and pricing.'}`;

    // Open WhatsApp
    const waUrl = getWhatsAppUrl(formattedMessage);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#070c09] border-t border-emerald-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
            05. Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Yt Kutty Sports Wear
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Have questions about bat weight, knocking services, or placing custom team jersey orders? Call us directly, send a WhatsApp message, or drop your enquiry below.
          </p>
        </div>

        {/* 2-Column Split: Contact Cards & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Phone & WhatsApp Callouts (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Phone Card */}
            <div className="bg-[#0c1510] border border-emerald-900/50 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Direct Call / Order Line
                  </div>
                  <a
                    href={`tel:+91${SHOP_PHONE}`}
                    className="text-2xl sm:text-3xl font-extrabold text-white hover:text-amber-400 transition-colors tabular-nums block"
                  >
                    {SHOP_PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-300">
                Direct mobile line of Yt Kutty Sports Wear in Tirunelveli. Feel free to call anytime during shop hours (9 AM - 9:30 PM).
              </p>
              <a
                href={`tel:+91${SHOP_PHONE}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-900" />
                <span>Call Shop Now: 6381574175</span>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-[#0c1510] border border-emerald-900/50 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Instant WhatsApp Enquiry
                  </div>
                  <div className="text-lg font-bold text-emerald-400">
                    +91 {SHOP_PHONE}
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-300">
                Send photos of your current bat, ask for grain photos of new willows, or request custom team jersey quotes directly on WhatsApp.
              </p>
              <a
                href={getWhatsAppUrl("Hello Yt Kutty Sports Wear, I would like to enquire about cricket bats and sports equipment at your Tirunelveli shop.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-600 rounded transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>

            {/* Location & Hours Card */}
            <div className="bg-[#0c1510] border border-emerald-900/50 rounded-xl p-5 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2 font-bold text-white">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{SHOP_LOCATION_DISPLAY}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 pl-6">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Open 7 Days: 9:00 AM &ndash; 9:30 PM IST</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 pl-6">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>In-Store Inspection &amp; Cash / UPI Payments</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0c1510] border border-emerald-900/50 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-1">
              Send an Enquiry or Custom Request
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill in your details below. We will instantly format your enquiry and launch WhatsApp for direct confirmation.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-lg bg-emerald-950/80 border border-emerald-700/60 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-200 space-y-1">
                  <div className="font-bold text-white">Enquiry Form Dispatched!</div>
                  <p>WhatsApp was opened with your prefilled details. You can also call us directly at <strong>{SHOP_PHONE_DISPLAY}</strong>.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-amber-400 hover:underline font-semibold mt-1"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="customer-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    required
                    placeholder="e.g. Karthik, Vignesh"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#080d0a] border border-emerald-950 rounded p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="customer-phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    id="customer-phone"
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#080d0a] border border-emerald-950 rounded p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="customer-interest" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Interested Equipment / Service
                </label>
                <select
                  id="customer-interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full bg-[#080d0a] border border-emerald-950 rounded p-2.5 text-xs text-white focus:outline-none focus:border-emerald-600 cursor-pointer"
                >
                  <option value="English Willow Bat (Grade 1/2)">English Willow Bat (Grade 1 / 2)</option>
                  <option value="Kashmir Willow Match Bat">Kashmir Willow Match Bat</option>
                  <option value="Hard Tennis Willow Scoop Bat">Hard Tennis Willow Scoop Bat</option>
                  <option value="Batting Pads & Gloves">Batting Pads &amp; Gloves</option>
                  <option value="Match Leather Balls (Box of 6)">Match Leather Balls (Box of 6)</option>
                  <option value="Custom Sublimated Team Jerseys">Custom Sublimated Team Jerseys</option>
                  <option value="Machine Bat Knocking & Oiling">Machine Bat Knocking &amp; Oiling</option>
                  <option value="Complete Cricket Kit Bag">Complete Cricket Kit Bag</option>
                  <option value="General Equipment Enquiry">General Equipment Enquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="customer-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Requirements / Customization Notes
                </label>
                <textarea
                  id="customer-message"
                  rows={4}
                  placeholder="Tell us what you're looking for (e.g., preferred bat weight, team jersey quantities, delivery requirement in Tirunelveli)..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#080d0a] border border-emerald-950 rounded p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-600 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors shadow-sm cursor-pointer"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Send Enquiry via WhatsApp to Yt Kutty Sports</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
