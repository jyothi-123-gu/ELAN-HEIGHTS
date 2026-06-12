import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Sparkles, Compass, ShieldCheck, HelpCircle, Mail } from 'lucide-react';
import { CartItem } from '../types';
import EliteLogo from './EliteLogo';

interface HeaderProps {
  cart: CartItem[];
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenAtelier: () => void;
  onOpenContact: () => void;
  onScrollToCatalog: () => void;
  onOpenWishlist: () => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const SUGGESTED_OPTIONS = [
  { label: "Stilettos & Heels", value: "Stiletto", emoji: "👠", desc: "Premium evening heels & pumps" },
  { label: "Sneakers & Active", value: "Sneaker", emoji: "👟", desc: "Vogue chunky & running active" },
  { label: "High Boots", value: "Boot", emoji: "👢", desc: "Chelsea & shearling winter boots" },
  { label: "Ballet Flats", value: "Ballet Flat", emoji: "🥿", desc: "Soft silk linen & lace flats" },
  { label: "Loafers & School", value: "Loafer", emoji: "👞", desc: "Prestige office leather loafers" },
  { label: "Mules & Wedges", value: "Mule", emoji: "👡", desc: "Heeled velvet mules & slides" },
  { label: "Summer Sandals", value: "Sandal", emoji: "🩴", desc: "Elegant flat gladiator sandals" },
];

export default function Header({
  cart,
  wishlistCount,
  onOpenCart,
  onOpenAtelier,
  onOpenContact,
  onScrollToCatalog,
  onOpenWishlist,
  searchQuery,
  onSearchChange
}: HeaderProps) {
  const [isFocused, setIsFocused] = useState(false);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header id="main-header" className="sticky top-0 z-40 bg-brand-champagne/95 backdrop-blur-md border-b border-brand-border/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo & Monogram */}
          <div className="flex items-center gap-3 cursor-pointer" id="header-brand-logo-container" onClick={onScrollToCatalog}>
            <EliteLogo variant="horizontal" size="md" />
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center flex-1 max-w-sm mx-8 relative">
            <div className="relative w-full">
              <input
                id="header-search-input"
                type="text"
                placeholder="Search the Footwear Universe..."
                value={searchQuery}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-brand-blush/60 text-xs font-sans px-4 py-2.5 pl-10 pr-8 rounded-none border border-brand-border focus:border-brand-rose focus:ring-1 focus:ring-brand-rose focus:outline-none transition-all placeholder:text-gray-400"
              />
              <Search className="absolute left-3.5 top-3 w-3.5 h-3.5 text-gray-400" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-brand-rose text-xs font-semibold leading-none"
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Footwear Quick Options Dropdown */}
            {isFocused && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-brand-border shadow-2xl p-4.5 z-50 text-left rounded-none max-h-[380px] overflow-y-auto">
                <div className="flex items-center gap-1.5 pb-2 border-b border-brand-border mb-3">
                  <HelpCircle className="w-3.5 h-3.5 text-brand-rose" />
                  <span className="text-[9px] uppercase tracking-[0.15em] font-semibold text-gray-400">
                    Target Footwear Options
                  </span>
                </div>

                <div className="space-y-1">
                  {SUGGESTED_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      id={`suggest-opt-${opt.value}`}
                      onMouseDown={(e) => {
                        e.preventDefault(); // crucial to prevent focus loss before event fire
                        onSearchChange(opt.value);
                        setIsFocused(false);
                        onScrollToCatalog();
                      }}
                      className="w-full text-left flex items-center justify-between p-2 hover:bg-brand-clay/40 transition-colors cursor-pointer group border border-transparent hover:border-brand-border/30"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg">{opt.emoji}</span>
                        <div>
                          <p className="text-xs font-sans font-medium text-gray-900 group-hover:text-brand-rose transition-colors">
                            {opt.label}
                          </p>
                          <p className="text-[10px] text-gray-400 font-light font-sans line-clamp-1">
                            {opt.desc}
                          </p>
                        </div>
                      </div>
                      <span className="text-[9px] text-gray-400 uppercase tracking-widest font-mono group-hover:text-brand-rose opacity-0 group-hover:opacity-100 transition-all transform translate-x-1 group-hover:translate-x-0">
                        Select →
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-3 pt-2.5 border-t border-brand-border/60 text-center">
                  <p className="text-[9px] text-gray-400 font-sans tracking-tight">
                    Type freely to search our custom artisan catalogs
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <nav className="flex items-center gap-2 sm:gap-4">
            <button
              id="nav-shop"
              onClick={onScrollToCatalog}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-[10px] font-sans font-light uppercase tracking-[0.2em] text-gray-700 hover:text-brand-rose transition-colors"
            >
              <Compass className="w-3.5 h-3.5 text-brand-rose" />
              Catalog
            </button>

            <button
              id="nav-contact"
              onClick={onOpenContact}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-[10px] font-sans font-light uppercase tracking-[0.2em] text-gray-700 hover:text-brand-rose transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-rose" />
              Contact
            </button>

            <button
              id="nav-atelier"
              onClick={onOpenAtelier}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-brand-blush hover:bg-brand-clay border border-brand-border rounded-none text-[10px] font-sans font-light uppercase tracking-[0.2em] text-brand-bronze transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-rose animate-pulse" />
              <span>Virtual Atelier</span>
            </button>

            <div className="h-6 w-px bg-brand-border" />

            {/* Wishlist Button */}
            <button
              id="header-wishlist"
              onClick={onOpenWishlist}
              className="p-2.5 relative hover:bg-brand-blush transition-colors"
              title="My Wishlist"
            >
              <Heart className="w-4.5 h-4.5 text-gray-700 hover:text-brand-rose transition-colors" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-brand-rose text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold font-sans">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              id="header-cart"
              onClick={onOpenCart}
              className="flex items-center gap-2.5 bg-[#1a1a1a] hover:bg-[#1a1a1a]/90 text-white px-5 py-2.5 rounded-none transition-all tracking-[0.15em]"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-brand-rose" />
              <span className="hidden sm:inline text-[9px] uppercase font-sans font-light tracking-[0.2em] text-gray-200">Bag</span>
              <span className="bg-white/10 text-white font-sans font-medium text-[9px] px-2 py-0.5 ml-1">
                {cartCount}
              </span>
            </button>
          </nav>

        </div>
      </div>
    </header>
  );
}
