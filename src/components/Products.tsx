import React, { useState, useMemo } from 'react';
import { Search, Eye, ShoppingBag, MessageCircle, SlidersHorizontal, Check } from 'lucide-react';
import { Product, PRODUCTS } from '../data/products';
import { getProductEnquiryUrl } from '../utils/whatsapp';

interface ProductsProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  cartProductIds: string[];
}

type CategoryFilter = 'all' | 'bats' | 'protection' | 'balls_kit' | 'sportswear' | 'accessories';

export const Products: React.FC<ProductsProps> = ({
  onSelectProduct,
  onAddToCart,
  cartProductIds
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const categories: Array<{ id: CategoryFilter; label: string; count: number }> = [
    { id: 'all', label: 'All Equipment', count: PRODUCTS.length },
    { id: 'bats', label: 'Cricket Bats', count: PRODUCTS.filter((p) => p.category === 'bats').length },
    { id: 'protection', label: 'Protective Gear', count: PRODUCTS.filter((p) => p.category === 'protection').length },
    { id: 'balls_kit', label: 'Balls & Bags', count: PRODUCTS.filter((p) => p.category === 'balls_kit').length },
    { id: 'sportswear', label: 'Team Sportswear', count: PRODUCTS.filter((p) => p.category === 'sportswear').length },
    { id: 'accessories', label: 'Accessories', count: PRODUCTS.filter((p) => p.category === 'accessories').length },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0; // featured default
    });
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#090d0b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-emerald-950/80">
          <div>
            <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-1">
              02. Store Catalog &amp; Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Cricket Bats &amp; Sports Equipment
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-xl">
              Engineered for boundary hitters, fast bowlers, and academy athletes. Every product is checked for balance, authentic material certification, and match resilience.
            </p>
          </div>

          {/* Quick stats indicator */}
          <div className="flex items-center gap-3 text-xs text-slate-400 shrink-0">
            <span className="text-amber-400 font-bold tabular-nums">{filteredProducts.length}</span>
            <span>Items Available for Direct Tirunelveli Pickup / Dispatch</span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs (Segmented control button row) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'bg-[#101a14] text-slate-300 hover:text-white hover:bg-emerald-950/70 border border-emerald-950'
                }`}
              >
                <span>{cat.label}</span>
                <span className="ml-1.5 opacity-75 tabular-nums text-[11px]">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3">
            {/* Search input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search bats, pads, balls..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#101a14] border border-emerald-950 rounded py-2 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-600 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort selector */}
            <div className="relative flex items-center">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#101a14] border border-emerald-950 rounded py-2 pl-8 pr-6 text-xs text-slate-200 focus:outline-none focus:border-emerald-600 cursor-pointer appearance-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-[#0d1611] rounded-xl border border-emerald-950 p-8">
            <p className="text-slate-300 text-base font-semibold">No equipment found matching &ldquo;{searchQuery}&rdquo;</p>
            <p className="text-slate-500 text-xs mt-1">Try another keyword or select All Equipment.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-bold text-slate-900 bg-amber-400 rounded hover:bg-amber-300"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const inCart = cartProductIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  className="group bg-[#0d1712] border border-emerald-900/40 rounded-xl overflow-hidden flex flex-col justify-between hover:border-emerald-600/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/30"
                >
                  {/* Card Image Area (65-75% visual balance with hover actions) */}
                  <div className="relative bg-[#070b08] overflow-hidden aspect-[4/3] flex items-center justify-center p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />

                    {/* Single subtle tag (Never badge sandwich) */}
                    {product.badge && (
                      <span className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-black/80 backdrop-blur-sm border border-emerald-900/60 px-2 py-0.5 rounded">
                        {product.badge}
                      </span>
                    )}

                    {/* Quick view hover button */}
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-[2px]"
                      aria-label={`Quick view ${product.name}`}
                    >
                      <span className="bg-emerald-950/90 border border-emerald-700/60 px-3.5 py-1.5 rounded flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Specs</span>
                      </span>
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      {/* Clean unboxed category metadata with separator */}
                      <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-emerald-400">
                        <span>{product.categoryLabel}</span>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="text-slate-400 font-normal">Tirunelveli Stock</span>
                      </div>

                      {/* Product Name */}
                      <h3
                        onClick={() => onSelectProduct(product)}
                        className="text-base font-bold text-white tracking-tight leading-snug group-hover:text-amber-300 transition-colors cursor-pointer line-clamp-1"
                      >
                        {product.name}
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {product.shortDesc}
                      </p>
                    </div>

                    {/* Price & Action Row */}
                    <div className="pt-3 border-t border-emerald-950/80 space-y-3">
                      <div className="flex items-baseline justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-extrabold text-amber-400 tabular-nums">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-slate-500 line-through tabular-nums">
                              ₹{product.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-emerald-400 font-medium">Ready in Shop</span>
                      </div>

                      {/* 2 Interactive Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => onAddToCart(product)}
                          className={`flex items-center justify-center gap-1.5 py-2 px-2.5 text-xs font-bold rounded transition-colors ${
                            inCart
                              ? 'bg-emerald-900 text-emerald-200 border border-emerald-700'
                              : 'bg-emerald-950 hover:bg-emerald-900 text-slate-200 border border-emerald-800/60'
                          }`}
                          title="Add to enquiry list"
                        >
                          {inCart ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5" />
                              <span>Enquire List</span>
                            </>
                          )}
                        </button>

                        <a
                          href={getProductEnquiryUrl(product.name, product.price)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 py-2 px-2.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-600 rounded transition-colors"
                          title="Instant WhatsApp Enquiry"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-white" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
