import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Search,
  Filter,
  Check,
  ShoppingBag,
  Heart,
  Info,
  SlidersHorizontal,
  Instagram,
  ArrowRight,
  Gift,
  Award,
  Crown,
  Maximize2,
  ChevronDown,
  X
} from 'lucide-react';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import ContactModal from './components/ContactModal';
import AtelierAdvisor from './components/AtelierAdvisor';
import AtelierChatbot from './components/AtelierChatbot';

import { PRODUCTS, SPECIALS, GENERATED_IMAGES } from './data';
import { Product, CartItem, FootwearGroup, PriceSegment } from './types';

// Helper function to return beautiful minimalist line-art SVG icons for each footwear genre / category card
function getFootwearGenreIcon(genre: string) {
  const g = genre.toLowerCase();
  
  // 1. Heels & Stilettos & Luxury pumps
  if (g.includes('heel') || g.includes('stiletto') || g.includes('pump') || g.includes('wedge') || g.includes('couture') || g.includes('party') || g.includes('glitter') || g.includes('bridal')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 flex-shrink-0" strokeWidth="1.25">
        <path d="M4 17h4.5c1.5 0 2.5-1.5 3.5-3l2.5-4c.8-1.2 1.8-2 3-2h3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5 8v10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.2 17h4.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  
  // 2. Boots
  if (g.includes('boot')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 flex-shrink-0" strokeWidth="1.25">
        <path d="M14 6h4v8l2.5 1.5c.3.2.5.5.5.8V18c0 .5-.5 1-1 1h-12c-1 0-1.8-1-2.5-2L4.5 15c-.4-.5-.4-1.2 0-1.7l1.5-1c.8-.5 1.6-.7 2.5-.3h.5l1.5-6H14z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 9h4" strokeLinecap="round" />
      </svg>
    );
  }
  
  // 3. Sneakers & Active Sports shoes
  if (g.includes('sneaker') || g.includes('sports') || g.includes('running') || g.includes('training') || g.includes('canvas')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 flex-shrink-0" strokeWidth="1.25">
        <path d="M3 16.5c0 0 3.5-.8 5.5-.8s4.5 1.8 10.5 0c.8-.2 1-.8 1-1.2 0-1.2-2-4.5-4.5-4.5h-5.5l-3.5 3H3v3.5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 15h16" strokeLinecap="round" />
        <path d="M8.5 11l1.5-1.5M11 11l1.5-1.5" strokeLinecap="round" />
      </svg>
    );
  }
  
  // 4. Sandals, Flip-flops & airy footwear
  if (g.includes('sandal') || g.includes('flip-flop') || g.includes('slide') || g.includes('jelly') || g.includes('espadrille')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 flex-shrink-0" strokeWidth="1.25">
        <path d="M3 17.5c4 0 7-1 11-1s5 .5 7 .5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 17l2.5-4.5c.3-.6.8-1 1.5-1h1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 16.5l3-5.5M19 17l-3.5-6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="11" r="1.2" fill="currentColor" />
      </svg>
    );
  }
  
  // 5. Baby & Infant
  if (g.includes('baby') || g.includes('first walker') || g.includes('child') || g.includes('toddler') || g.includes('junior') || g.includes('school')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 flex-shrink-0" strokeWidth="1.25">
        <path d="M4 16c2 0 3.5-.5 5.5-.5s4 1 8 0c.6-.2 1.2-1 1.2-2.2 0-1.8-1.2-2.8-3.5-2.8-1.8 0-3 .8-4 2.2l-1.8-.4c-.4-1.2-.8-1.8-2-1.8-1.8 0-3 1.8-3.3 3.5v2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 13.5c0-1.2.8-2 2-2M13 11a1 1 0 100-2 1 1 0 000 2z" fill="currentColor" />
      </svg>
    );
  }
  
  // 6. Flats, Loafers, Mules, Moccasins, Clogs, Slip-ons
  if (g.includes('flat') || g.includes('mary jane') || g.includes('loafer') || g.includes('moccasin') || g.includes('mule') || g.includes('slip-on') || g.includes('clog') || g.includes('casual') || g.includes('office') || g.includes('comfort') || g.includes('orthopedic')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 flex-shrink-0" strokeWidth="1.25">
        <path d="M3 16.5c1 0 3-.5 5-.5s5 .5 10 0c1-.5 1.5-2 1.5-3.5 0-1-1.5-1.5-3.5-1.5H9.5c-1.5 0-2.5 1-4 2.5L3.5 14v2.5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 13c1-1 2-1.5 3.5-1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  
  // 7. General Luxury/Limited Edition trends
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 flex-shrink-0" strokeWidth="1.25">
      <path d="M12 3l2.5 5 5.5.8-4 3.9 1 5.5-5-2.9-5 2.9 1-5.5-4-3.9 5.5-.8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function App() {
  // Persistence Loading
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('eh_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('eh_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [pulseWishlist, setPulseWishlist] = useState(false);

  // Saving Persistence
  useEffect(() => {
    localStorage.setItem('eh_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('eh_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Search & Filtration States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<FootwearGroup | 'All'>('All');
  const [selectedSegment, setSelectedSegment] = useState<PriceSegment | 'All'>('All');
  const [selectedAge, setSelectedAge] = useState<'Toddler' | 'Junior' | 'Adult' | 'Universal' | 'All'>('All');
  const [sortBy, setSortBy] = useState<'default' | 'priceLowHigh' | 'priceHighLow' | 'rating'>('default');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [isGenresExpanded, setIsGenresExpanded] = useState(false);
  
  // Tab shortcuts on the showcase
  const [activeTabGroup, setActiveTabGroup] = useState<FootwearGroup | 'All'>('All');

  // Modal displays
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [detailPreselectedColor, setDetailPreselectedColor] = useState<any | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [checkoutPromo, setCheckoutPromo] = useState(false);
  const [showWishlistOnly, setShowWishlistOnly] = useState(false);

  // Success indicators
  const [bannerNotice, setBannerNotice] = useState<string | null>(null);

  // Scroll references
  const catalogRef = useRef<HTMLDivElement>(null);
  const advisorRef = useRef<HTMLDivElement>(null);

  const displayNotice = (message: string) => {
    setBannerNotice(message);
    setTimeout(() => {
      setBannerNotice(null);
    }, 4000);
  };

  const handleScrollToCatalog = () => {
    catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setShowWishlistOnly(false);
  };

  const handleScrollToAdvisor = () => {
    advisorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleOpenProductDetails = (product: Product, preselectedColor?: any) => {
    setDetailProduct(product);
    setDetailPreselectedColor(preselectedColor || null);
    setIsDetailOpen(true);
  };

  const handleToggleWishlist = (productId: string) => {
    const isWish = wishlist.includes(productId);
    if (isWish) {
      setWishlist(wishlist.filter(id => id !== productId));
      displayNotice('Design removed from your personal boutique wishlist.');
    } else {
      setWishlist([...wishlist, productId]);
      displayNotice('Aesthetic design added to your boutique wishlist. 💖');
      setPulseWishlist(true);
      setTimeout(() => setPulseWishlist(false), 800);
    }
  };

  // Cart operations
  const handleAddToBag = (product: Product, selectedColor: any, selectedSize: number, quantity: number) => {
    const cartEntryId = `${product.id}-${selectedColor.name}-${selectedSize}`;
    
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(item => item.id === cartEntryId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, {
          id: cartEntryId,
          product,
          selectedColor,
          selectedSize,
          quantity
        }];
      }
    });

    setIsDetailOpen(false);
    setIsCartOpen(true);
    displayNotice(`"${product.name}" placement registered in your shopping bag. Elegant choice! ✨`);
  };

  const handleQuickAdd = (product: Product, preselectedColor?: any) => {
    // Automatically selects first color and first size to offer split second action addition
    handleAddToBag(product, preselectedColor || product.colors[0], product.sizes[0], 1);
  };

  const handleUpdateCartQuantity = (entryId: string, amount: number) => {
    setCart((prevCart) => {
      return prevCart.map(item => {
        if (item.id === entryId) {
          const newQty = item.quantity + amount;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const handleRemoveCartItem = (entryId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== entryId));
    displayNotice('Item removed from your shopping bag.');
  };

  const handleCheckoutTrigger = (promoApplied: boolean, code: string) => {
    setCheckoutPromo(promoApplied);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    setCart([]); // Reset luxury cart inside checkout modal callback
  };

  // Filter Catalog processing
  const filteredProducts = PRODUCTS.filter((item) => {
    // Search query match
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Group filter match
    const matchesGroup = selectedGroup === 'All' ? true : item.group === selectedGroup;

    // Segment filter match
    const matchesSegment = selectedSegment === 'All' ? true : item.segment === selectedSegment;

    // Age filter match
    const matchesAge = selectedAge === 'All' ? true : item.ageGroup === selectedAge;

    // Wishlist selector match
    const matchesWish = showWishlistOnly ? wishlist.includes(item.id) : true;

    // Specific Style Genre match
    const matchesGenre = !selectedGenre
      ? true
      : (item.tags?.includes(selectedGenre.toLowerCase()) ||
         item.name.toLowerCase().includes(selectedGenre.toLowerCase()) ||
         item.category.toLowerCase().includes(selectedGenre.toLowerCase()));

    return matchesSearch && matchesGroup && matchesSegment && matchesAge && matchesWish && matchesGenre;
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'priceLowHigh') return a.price - b.price;
    if (sortBy === 'priceHighLow') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // default order remains index database ordering
  });

  // Quick reset filters
  const handleClearFilters = () => {
    setSelectedGroup('All');
    setSelectedSegment('All');
    setSelectedAge('All');
    setSearchQuery('');
    setSortBy('default');
    setShowWishlistOnly(false);
    setSelectedGenre(null);
  };

  return (
    <div className="min-h-screen relative flex flex-col justify-between text-gray-950 bg-[#FDFBF7] antialiased">
      
      {/* 1. Global Notice Bar */}
      <AnimatePresence>
        {bannerNotice && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            id="global-atelier-banner"
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-md bg-neutral-900/95 backdrop-blur-md text-white py-3.5 px-6 rounded-none shadow-2xl border border-brand-border text-xs font-sans tracking-wide font-medium flex items-center justify-between gap-3 text-left"
          >
            <span>{bannerNotice}</span>
            <button
              onClick={() => setBannerNotice(null)}
              className="text-brand-quartz hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Brand Header Wrapper */}
      <Header
        cart={cart}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAtelier={handleScrollToAdvisor}
        onOpenContact={() => setIsContactOpen(true)}
        onScrollToCatalog={handleScrollToCatalog}
        onOpenWishlist={() => {
          setShowWishlistOnly(true);
          catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
        searchQuery={searchQuery}
        onSearchChange={(val) => {
          setSearchQuery(val);
          catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      />

      {/* 3. Hero Campaign banner */}
      <HeroSection
        onScrollToCatalog={handleScrollToCatalog}
        onOpenAtelier={handleScrollToAdvisor}
      />

      {/* 4. Luxury Brand Statement (Multi-generational Footwear Universe Highlight) */}
      <section id="campaign-accent" className="py-20 bg-brand-champagne border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16 animate-fade-in">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-rose">
              The Élan Heights Vision
            </span>
            <h2 className="font-serif text-3.5xl sm:text-4xl font-light text-gray-950">
              For Every Era, Occasion, <span className="font-serif italic text-brand-rose">& Stride</span>
            </h2>
            <div className="w-12 h-px bg-brand-border mx-auto" />
            <p className="font-sans text-[13px] text-gray-600 leading-relaxed font-light">
              Crafting premium security, anatomical arch protection, and haute couture aesthetics exclusively for girls and women. From baby room booties to masterly crafted stilettos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Stage 1: Delicate Baby Walkers */}
            <div className="bg-white rounded-none p-6 border border-brand-border flex flex-col justify-between space-y-4 hover:border-brand-rose transition-colors duration-300 group">
              <div className="aspect-[4/3] rounded-none overflow-hidden bg-brand-clay/35">
                <img
                  src={GENERATED_IMAGES.babyShoes}
                  alt="Baby Walkers Collection"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
              </div>
              <div className="text-left space-y-2 pl-1">
                <span className="text-[9px] font-sans uppercase tracking-[0.2em] font-semibold text-brand-rose">First Steps Era</span>
                <h3 className="font-serif text-base font-light italic text-gray-950">Infant & Young Petite</h3>
                <p className="text-[12px] text-gray-500 font-sans font-light leading-relaxed">
                  Supportive pre-walkers with non-slip organic soles, satin fasteners, and breathable, allergy-safe natural linings designed meticulously for growing bones.
                </p>
              </div>
            </div>

            {/* Stage 2: Active & High-Fashion Young Adults */}
            <div className="bg-white rounded-none p-6 border border-brand-border flex flex-col justify-between space-y-4 hover:border-brand-rose transition-colors duration-300 group">
              <div className="aspect-[4/3] rounded-none overflow-hidden bg-brand-clay/35">
                <img
                  src={GENERATED_IMAGES.luxurySneakers}
                  alt="Young Adult Luxury Activewear"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
              </div>
              <div className="text-left space-y-2 pl-1">
                <span className="text-[9px] font-sans uppercase tracking-[0.2em] font-semibold text-brand-rose">Empowered Strides</span>
                <h3 className="font-serif text-base font-light italic text-gray-950">Dynamic Teens & Youth</h3>
                <p className="text-[12px] text-gray-500 font-sans font-light leading-relaxed">
                  Bold platform sneakers, rugged combat boots, and school academy loafers that synthesize modern street lifestyle trends with high-durability double stitching.
                </p>
              </div>
            </div>

            {/* Stage 3: Extreme Haute Designer Elegance */}
            <div className="bg-white rounded-none p-6 border border-brand-border flex flex-col justify-between space-y-4 hover:border-brand-rose transition-colors duration-300 group">
              <div className="aspect-[4/3] rounded-none overflow-hidden bg-brand-clay/35">
                <img
                  src={GENERATED_IMAGES.designerHeels}
                  alt="Premium Haute Couture heels"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
              </div>
              <div className="text-left space-y-2 pl-1">
                <span className="text-[9px] font-sans uppercase tracking-[0.2em] font-semibold text-brand-rose">Elite Red Carpet</span>
                <h3 className="font-serif text-base font-light italic text-gray-950">Designer Bridal & Coffer</h3>
                <p className="text-[12px] text-gray-500 font-sans font-light leading-relaxed">
                  Italian suede, refined custom emblems, French lace, and deep pocket velvet cases that encapsulate our heritage as a luxury global footwear powerhouse.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Main Footwear Catalog Showcase (Ref Catalog) */}
      <div id="catalog-section" ref={catalogRef} className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title controls with Search notice */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-brand-border">
          <div className="text-left space-y-1">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-brand-rose animate-pulse" />
              <span className="font-sans text-[9px] uppercase tracking-widest font-semibold text-brand-rose">
                Storefront Showroom
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-gray-950">
              {showWishlistOnly ? 'My Curated Wishlist' : 'The Complete Footwear Universe'}
            </h2>
            <p className="text-xs text-gray-500 font-light">
              Filter through pricing segments, age classifications, or specific style genres.
            </p>
          </div>

          {/* Sizing description tip */}
          <div className="flex items-center gap-2.5 bg-brand-clay border border-brand-border rounded-none px-4 py-3 text-xs text-gray-650 max-w-xs text-left">
            <Info className="w-4.5 h-4.5 text-brand-rose flex-shrink-0" />
            <p className="leading-snug font-light">
              <strong>Atelier Fit Guarantee:</strong> All purchases include complementary white-glove specialist consultations.
            </p>
          </div>
        </div>

        {/* 6. Sidebar / Filter Drawer (Multi-grid layout: filters Left 3, products Right 9) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Filters Sidebar (Grid 3) */}
          <div className="lg:col-span-3 space-y-6 lg:sticky lg:top-24 bg-white p-6 rounded-none border border-brand-border shadow-none">
            
            <div className="flex justify-between items-center pb-4 border-b border-brand-border">
              <span className="text-xs uppercase tracking-wider font-semibold font-serif text-gray-950 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-brand-rose" />
                Refine Selection
              </span>
              {(selectedGroup !== 'All' || selectedSegment !== 'All' || selectedAge !== 'All' || searchQuery !== '' || showWishlistOnly) && (
                <button
                  id="clear-filters"
                  onClick={handleClearFilters}
                  className="text-[10px] uppercase font-sans font-semibold text-brand-rose tracking-wider hover:underline"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Group Categories */}
            <div className="space-y-2 text-left">
              <label className="block text-[9px] uppercase tracking-[0.15em] font-semibold text-gray-400">
                Category Group
              </label>
              <div className="flex flex-col gap-1">
                {['All', 'Couture & Heels', 'Baby & Kids', 'Sports & Sneakers', 'Everyday Casual', 'Boots & Winter', 'Comfort & Orthopedic'].map((grp) => {
                  const isSel = grp === selectedGroup;
                  return (
                    <motion.button
                      id={`filter-group-${grp.replace(/\s+/g, '')}`}
                      key={grp}
                      whileHover={{ x: 6, backgroundColor: "rgba(244, 239, 237, 0.6)" }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      onClick={() => {
                        setSelectedGroup(grp as any);
                        setShowWishlistOnly(false);
                      }}
                      className={`text-xs py-2.5 px-3 rounded-none text-left font-light transition-all flex justify-between items-center cursor-pointer ${
                        isSel
                          ? 'bg-brand-clay border-l-2 border-brand-rose font-medium pl-4 text-brand-rose'
                          : 'text-gray-650 text-gray-750'
                      }`}
                    >
                      <span>{grp}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Price Segment classification */}
            <div className="space-y-2 text-left pt-4 border-t border-brand-border">
              <label className="block text-[9px] uppercase tracking-[0.15em] font-semibold text-gray-400">
                Pricing segment
              </label>
              <div className="flex flex-wrap gap-1.5 font-sans">
                {['All', 'Budget', 'Value', 'Mid-Range', 'Premium', 'Luxury', 'Designer Collections'].map((seg) => {
                  const isSel = seg === selectedSegment;
                  return (
                    <motion.button
                      id={`filter-seg-${seg.replace(/\s+/g, '')}`}
                      key={seg}
                      value={seg}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      transition={{ type: "spring", stiffness: 450, damping: 15 }}
                      onClick={() => setSelectedSegment(seg as any)}
                      className={`text-[9px] px-2.5 py-1.5 rounded-none border transition-all cursor-pointer ${
                        isSel
                          ? 'bg-gray-950 border-gray-950 text-white font-medium shadow-md'
                          : 'bg-[#FDFBF7] border-brand-border text-gray-700 hover:border-brand-rose'
                      }`}
                    >
                      {seg}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Recipient Age Filter */}
            <div className="space-y-2 text-left pt-4 border-t border-brand-border">
              <label className="block text-[9px] uppercase tracking-[0.15em] font-semibold text-gray-400">
                Age Spectrum
              </label>
              <div className="grid grid-cols-2 gap-2 text-white font-sans">
                {[
                  { label: 'All', img: null },
                  { label: 'Toddler', img: '/src/assets/images/elan_heights_baby_shoes_1781161826307.png' },
                  { label: 'Junior', img: '/src/assets/images/kids_mary_jane_flat_1781165865734.png' },
                  { label: 'Adult', img: '/src/assets/images/elan_heights_designer_heels_1781161811112.png' },
                  { label: 'Universal', img: '/src/assets/images/canvas_high_top_1781166580089.png' }
                ].map((ageItem) => {
                  const isSel = ageItem.label === selectedAge;
                  return (
                    <motion.button
                      id={`filter-age-${ageItem.label}`}
                      key={ageItem.label}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSelectedAge(ageItem.label as any)}
                      className={`relative flex items-center justify-center p-2 rounded-none border text-center transition-all cursor-pointer overflow-hidden min-h-[48px] ${
                        isSel
                          ? 'border-brand-rose shadow-sm z-10'
                          : 'border-brand-border hover:border-brand-rose/50'
                      }`}
                    >
                      {/* Background Image if available */}
                      {ageItem.img && (
                        <>
                          <img src={ageItem.img} alt={ageItem.label} className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply" />
                          <div className={`absolute inset-0 transition-opacity ${isSel ? 'bg-gray-950/70' : 'bg-gray-950/40 hover:bg-gray-950/60'}`} />
                        </>
                      )}
                      {/* Label */}
                      <span className={`relative z-10 text-[10px] font-medium tracking-wider uppercase drop-shadow-md ${isSel || ageItem.img ? 'text-white' : 'text-gray-900'}`}>
                        {ageItem.label}
                      </span>
                      {isSel && (
                        <div className="absolute top-1 right-1">
                          <div className="w-1.5 h-1.5 bg-brand-rose rounded-full" />
                        </div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Sorting mechanism */}
            <div className="space-y-2 text-left pt-4 border-t border-brand-border">
              <label className="block text-[9px] uppercase tracking-[0.15em] font-semibold text-gray-400 mb-2">
                Sort Options
              </label>
              <div className="grid grid-cols-2 gap-2 text-white font-sans">
                {[
                  { value: 'default', label: 'Curated', img: '/src/assets/images/rose_glass_slipper_1781165589306.png' },
                  { value: 'priceLowHigh', label: 'Low - High', img: '/src/assets/images/comfort_suede_loafer_1781165900387.png' },
                  { value: 'priceHighLow', label: 'High - Low', img: '/src/assets/images/bridal_lace_heel_1781166527701.png' },
                  { value: 'rating', label: 'Top Rated', img: '/src/assets/images/satin_pearl_mule_1781166476069.png' }
                ].map((sortItem) => {
                  const isSel = sortItem.value === sortBy;
                  return (
                    <motion.button
                      id={`sort-options-${sortItem.value}`}
                      key={sortItem.value}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSortBy(sortItem.value as any)}
                      className={`relative flex items-center justify-center p-2 rounded-none border text-center transition-all cursor-pointer overflow-hidden min-h-[48px] ${
                        isSel
                          ? 'border-brand-rose shadow-sm z-10'
                          : 'border-brand-border hover:border-brand-rose/50'
                      }`}
                    >
                      {/* Background Image if available */}
                      {sortItem.img && (
                        <>
                          <img src={sortItem.img} alt={sortItem.label} className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply" />
                          <div className={`absolute inset-0 transition-opacity ${isSel ? 'bg-gray-950/70' : 'bg-gray-950/40 hover:bg-gray-950/60'}`} />
                        </>
                      )}
                      {/* Label */}
                      <span className={`relative z-10 text-[9px] font-medium tracking-wider uppercase drop-shadow-md text-white`}>
                        {sortItem.label}
                      </span>
                      {isSel && (
                        <div className="absolute top-1 right-1">
                          <div className="w-1.5 h-1.5 bg-brand-rose rounded-full" />
                        </div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Switch view to Wishlist list */}
            <div className="pt-4 border-t border-brand-border">
              <motion.button
                id="sidebar-wishlist-toggle"
                onClick={() => setShowWishlistOnly(!showWishlistOnly)}
                animate={pulseWishlist ? {
                  scale: [1, 1.08, 0.94, 1.06, 1],
                  borderColor: ["rgba(224, 203, 198, 1)", "rgba(183, 110, 121, 1)", "rgba(183, 110, 121, 1)", "rgba(183, 110, 121, 1)", "rgba(224, 203, 198, 1)"],
                  backgroundColor: showWishlistOnly 
                    ? ["#F4EFED", "#FFF0F1", "#FFF4F5", "#FFF0F1", "#F4EFED"] 
                    : ["#ffffff", "#FFF0F1", "#FFF4F5", "#FFF0F1", "#ffffff"]
                } : {}}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  times: [0, 0.22, 0.42, 0.68, 1]
                }}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-none border text-[10px] font-sans font-medium uppercase tracking-[0.15em] transition-all cursor-pointer ${
                  showWishlistOnly
                    ? 'bg-brand-clay border-brand-rose text-brand-rose'
                    : 'bg-white hover:bg-brand-blush text-gray-700 border-brand-border hover:border-brand-rose'
                }`}
              >
                <motion.span
                  animate={pulseWishlist ? {
                    scale: [1, 1.35, 0.85, 1.25, 1]
                  } : {}}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    times: [0, 0.22, 0.42, 0.68, 1]
                  }}
                  className="inline-flex items-center justify-center"
                >
                  <Heart className={`w-3.5 h-3.5 ${showWishlistOnly || pulseWishlist ? 'fill-brand-rose text-brand-rose' : ''}`} />
                </motion.span>
                <span>My Wishlist ({wishlist.length})</span>
              </motion.button>
            </div>

          </div>

          {/* Products Catalog Display Grid (Grid 9) */}
          <div className="lg:col-span-9">
            
            {sortedProducts.length === 0 ? (
              <div className="text-center py-24 bg-brand-clay/35 rounded-none border border-brand-border flex flex-col items-center justify-center space-y-4">
                <span className="text-3xl text-brand-rose">✦</span>
                <div>
                  <h3 className="font-serif text-[17px] font-light italic text-gray-955">No matches found in our universe</h3>
                  <p className="text-xs text-gray-500 max-w-xs mx-auto mt-2 leading-relaxed">
                    Adjust your premium criteria, category tags, or search string to browse alternative Élan Heights designs.
                  </p>
                </div>
                <button
                  onClick={handleClearFilters}
                  className="bg-gray-950 text-white text-[9px] uppercase font-sans tracking-widest font-semibold px-6 py-3 rounded-none hover:bg-gray-800 transition-colors"
                >
                  Show All Designs
                </button>
              </div>
            ) : (
              <div>
                
                {/* 13. EXQUISITE FOOTWEAR UNIVERSE SPECIALTY DIRECTORY */}
                <div id="footwear-universe-directory" className="bg-white border border-brand-border p-6 mb-8 text-left space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div className="space-y-0.5">
                      <h4 className="font-serif text-[15px] font-medium tracking-wide text-gray-950 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-brand-rose animate-pulse" />
                        Explore the Footwear Universe
                      </h4>
                      <p className="text-[11px] text-gray-500 font-light font-sans">
                        Browse our comprehensive 46-spectre shoe guild. Select any specialty to filter.
                      </p>
                    </div>
                    {selectedGenre && (
                      <button
                        onClick={() => setSelectedGenre(null)}
                        className="text-[10px] text-brand-rose font-sans font-semibold uppercase tracking-wider hover:underline flex items-center gap-1"
                      >
                        Reset Style (Selected: <span className="italic font-normal">{selectedGenre}</span>) ✕
                      </button>
                    )}
                  </div>

                  {/* Complete 46 Footwear Genres Chip Nest */}
                  <div className="flex flex-wrap gap-2 transition-all duration-500">
                    {[
                      "Baby Shoes", "First Walkers", "School Shoes", "Ballet Flats", "Mary Janes", 
                      "Casual Shoes", "Canvas Shoes", "Slip-ons", "Sneakers", "Chunky Sneakers", 
                      "Running Shoes", "Sports Shoes", "Walking Shoes", "Training Shoes", "Sandals", 
                      "Flat Sandals", "Flip-flops", "Slides", "Jelly Shoes", "Party Shoes", 
                      "Glitter Shoes", "Wedges", "Espadrilles", "Loafers", "Moccasins", "Mules", 
                      "Clogs", "Pumps", "Kitten Heels", "Block Heels", "Stilettos", "Platform Heels", 
                      "Platform Sandals", "Bridal Footwear", "Ethnic Footwear", "Office Footwear", 
                      "Ankle Boots", "Chelsea Boots", "Combat Boots", "Knee-High Boots", "Winter Boots", 
                      "Comfort Footwear", "Orthopedic Footwear", "Luxury Couture Footwear", 
                      "Limited-edition Collections", "Seasonal Fashion Trends"
                    ].map((genre, idx) => {
                      const isSel = selectedGenre?.toLowerCase() === genre.toLowerCase();
                      const isKeyStyle = idx < 10; // First 10 styles are visible by default
                      
                      if (!isGenresExpanded && !isKeyStyle) return null;

                      return (
                        <motion.button
                          key={genre}
                          id={`genre-chip-${genre.replace(/\s+/g, '')}`}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            if (isSel) {
                              setSelectedGenre(null);
                            } else {
                              setSelectedGenre(genre);
                            }
                          }}
                          className={`group flex items-center gap-2 text-[10px] uppercase tracking-wider px-4 py-2.5 border transition-all duration-300 font-sans cursor-pointer ${
                            isSel
                              ? 'bg-brand-rose border-brand-rose text-white font-semibold shadow-md'
                              : 'bg-white border-brand-border text-gray-700 hover:bg-brand-clay/35 hover:border-brand-rose'
                          }`}
                        >
                          <span className={`transition-transform duration-300 group-hover:scale-110 ${isSel ? 'text-white' : 'text-brand-rose'}`}>
                            {getFootwearGenreIcon(genre)}
                          </span>
                          <span className="font-medium tracking-widest">{genre}</span>
                        </motion.button>
                      );
                    })}

                    {/* Collapse / Expand Control Button */}
                    <motion.button
                      id="toggle-all-genres"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setIsGenresExpanded(!isGenresExpanded)}
                      className="text-[10px] px-3 py-1.5 border border-dashed border-brand-rose/60 bg-transparent text-brand-rose font-medium hover:bg-brand-blush/30 tracking-wide font-sans flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      {isGenresExpanded ? 'Show Less Styles ▲' : 'Show All 46 Specialty Styles ▼'}
                    </motion.button>
                  </div>
                </div>

                {/* Dynamic matching items total indicator */}
                <div className="flex justify-between items-center text-xs text-gray-500 mb-6 pl-1 font-light">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-brand-rose" />
                    <span>Displaying {sortedProducts.length} curated designs</span>
                  </div>
                  {showWishlistOnly && (
                    <span className="text-brand-rose font-medium">Filtered to your boutique favorites wishlist</span>
                  )}
                  {selectedGenre && (
                    <span className="text-brand-rose font-medium font-sans">
                      Active Genre: <strong>{selectedGenre}</strong>
                    </span>
                  )}
                </div>

                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                  <AnimatePresence mode="popLayout">
                    {sortedProducts.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 48, scale: 0.96 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95, y: -24 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 140, 
                          damping: 18,
                          mass: 0.9,
                          layout: { type: "spring", stiffness: 350, damping: 28 }
                        }}
                      >
                        <ProductCard
                          product={item}
                          onOpenDetails={handleOpenProductDetails}
                          isWishlisted={wishlist.includes(item.id)}
                          onToggleWishlist={handleToggleWishlist}
                          onQuickAdd={handleQuickAdd}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* 7. Virtual Atelier Styling Section */}
      <section id="virtual-styling-concierge" ref={advisorRef} className="py-12 bg-gradient-to-t from-brand-blush/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AtelierAdvisor
            onOpenDetails={handleOpenProductDetails}
            onQuickAdd={handleQuickAdd}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
          />
        </div>
      </section>

      {/* 8. Elegant Unboxing and Customization Narrative Sections */}
      <section id="heritage-pillars" className="py-24 bg-brand-champagne border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {SPECIALS.map((spec, index) => (
              <div
                key={index}
                className="bg-white rounded-none p-8 border border-brand-border grid grid-cols-1 sm:grid-cols-12 gap-6 items-center text-left"
              >
                <div className="sm:col-span-4 aspect-square rounded-none overflow-hidden bg-[#F9F4F0] border border-brand-border">
                  <img
                    src={spec.image}
                    alt={spec.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="sm:col-span-8 space-y-3">
                  <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.2em] text-brand-rose bg-brand-clay px-2.5 py-1.5 border border-brand-border">
                    {spec.tagline}
                  </span>
                  <h3 className="font-serif text-lg font-light text-gray-950">{spec.title}</h3>
                  <p className="text-[12px] text-gray-500 font-sans font-light leading-relaxed">
                    {spec.desc}
                  </p>
                  <button
                    onClick={handleScrollToCatalog}
                    className="text-[9px] uppercase font-sans font-semibold tracking-widest text-brand-rose flex items-center gap-1.5 hover:gap-2.5 transition-all"
                  >
                    <span>{spec.buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 9. Brand Footer containing Final Tagline in Bold */}
      <footer id="brand-footer" className="bg-neutral-950 text-[#FAF6F4] pt-16 pb-12 text-left relative overflow-hidden border-t border-brand-border">
        
        {/* Subtle decorative backing */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-rose/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/5">
            
            {/* Column 1 - Brand description */}
            <div className="md:col-span-5 space-y-5">
              <div className="flex items-center gap-2">
                <span className="font-serif text-[22px] tracking-[0.25em] text-white">ÉLAN HEIGHTS</span>
              </div>
              <p className="text-xs text-gray-400 font-light max-w-sm leading-relaxed font-sans">
                A world-class digital storefront showcasing the complete footwear universe for girls and women of all ages—from soft baby walker first steps to premium designer collections.
              </p>
            </div>

            {/* Column 2 - Categories index overview list */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="font-sans text-[10px] uppercase tracking-widest text-brand-rose font-semibold">Category Classifications</h4>
              <ul className="text-[11px] text-gray-400 space-y-2 font-light grid grid-cols-2 gap-x-4">
                <li>Baby First Walkers</li>
                <li>Princess Mary Janes</li>
                <li>Prestige School Loafers</li>
                <li>Vogue Chunky Sneaks</li>
                <li>High-Top Canvas</li>
                <li>Chelsea Stacked Boots</li>
                <li>Podiatry Comfort Suede</li>
                <li>Raw Silk Zardozi Juttis</li>
              </ul>
            </div>

            {/* Column 3 - Brand trust badges */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="font-sans text-[10px] uppercase tracking-widest text-brand-rose font-semibold">Patron Support</h4>
              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                Our global customer experience concierge operates 24/7. Reach out for custom leather sizing consultations or boutique wedding party ordering.
              </p>
              <div className="pt-2 bg-white/5 border border-white/10 rounded-none p-3 text-[10px] text-brand-rose font-medium leading-relaxed font-sans">
                ✨ Complimentary worldwide premium white-glove shipping on all orders.
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            
            {/* Copyright alignment */}
            <p className="text-[10px] text-gray-500 font-sans tracking-wide">
              © {new Date().getFullYear()} Élan Heights Inc. All Rights Reserved. Designed for premium high-fashion digital experiences.
            </p>

            {/* MANDATORY BRAND TAGLINE IN BOLD */}
            <div id="footer-tagline">
              <p className="font-serif text-base sm:text-[17px] text-white font-bold tracking-wide">
                Élan Heights — From First Steps to Finest Steps 👠💖✨
              </p>
            </div>

            {/* Fine privacy terms */}
            <div className="flex gap-4 text-[10px] text-gray-500 font-light">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Charter</a>
              <span>•</span>
              <a href="#terms" className="hover:text-white transition-colors">Atelier Terms</a>
            </div>

          </div>

        </div>
      </footer>

      {/* 10. PRODUCT DETAIL MODAL */}
      <ProductDetailModal
        product={detailProduct}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onAddToBag={handleAddToBag}
        isWishlisted={detailProduct ? wishlist.includes(detailProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        preselectedColor={detailPreselectedColor}
      />

      {/* 11. SHOPPING BAG DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={handleCheckoutTrigger}
      />

      {/* 12. CHECKOUT PREFERENCES MODAL */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        promoApplied={checkoutPromo}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* 13. FRIENDLY AI CONCIERGE CHATBOT */}
      <AtelierChatbot />

      {/* 14. CONTACT MODAL */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
