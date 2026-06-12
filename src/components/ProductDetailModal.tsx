import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Sparkles, Check, ShoppingBag, Heart, MessageSquare, Award, Tag } from 'lucide-react';
import { Product, Color, Review } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToBag: (product: Product, selectedColor: Color, selectedSize: number, quantity: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  preselectedColor?: Color | null;
}

// Procedural high-fidelity colorist utility for realistic preview tinting
export const getColorTintStyle = (hex: string) => {
  const parsedHex = hex.replace('#', '');
  const r = parseInt(parsedHex.substring(0, 2), 16) || 0;
  const g = parseInt(parsedHex.substring(2, 4), 16) || 0;
  const b = parseInt(parsedHex.substring(4, 6), 16) || 0;
  
  // Calculate relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  return {
    luminance,
    // Deeper multiply shadow for dramatic high-contrast and realistic shadow preservation
    multiplyOpacity: luminance < 0.45 ? Math.min(0.55, (0.45 - luminance) * 1.1) : 0,
    // Soft screen mix-blend for realistic silk & glossy highlighting
    lightenOpacity: luminance > 0.8 ? Math.min(0.25, (luminance - 0.8) * 0.4) : 0,
    // Color tint opacity: slightly boosted for vivid luxury color change
    colorOpacity: luminance < 0.25 ? 0.42 : luminance > 0.85 ? 0.45 : 0.55
  };
};

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
  onAddToBag,
  isWishlisted,
  onToggleWishlist,
  preselectedColor
}: ProductDetailModalProps) {
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [reviews, setReviews] = useState<Review[]>([]);
  
  // Review Form States
  const [newUserName, setNewUserName] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [reviewerSize, setReviewerSize] = useState<number>(38);
  const [reviewAddedSuccess, setReviewAddedSuccess] = useState(false);

  // Synchronize state when product changes
  useEffect(() => {
    if (product) {
      setSelectedColor(preselectedColor || product.colors[0]);
      setSelectedSize(product.sizes[0]);
      setQuantity(1);
      setReviewAddedSuccess(false);
      setNewComment('');
      setNewUserName('');
      setNewRating(5);

      // Generate pristine custom premium mock reviews for the shoe category
      const mockReviews: Review[] = [
        {
          id: `${product.id}-rev-1`,
          userName: 'Alessia de Luca',
          rating: 5,
          date: 'May 20, 2026',
          comment: `Absolutely breathtaking. The leather texture is incredibly soft, and there is an outstanding level of finish in the stitching. Truly lives up to Élan Heights standards!`,
          verified: true,
          sizeBought: product.sizes[0],
          colorBought: product.colors[0].name
        },
        {
          id: `${product.id}-rev-2`,
          userName: 'Dr. Evelyn Carter',
          rating: 4.8,
          date: 'April 14, 2026',
          comment: `Purchased these for our family gala. My feet remained completely enveloped in comfort the entire evening. The support structure is podiatric grade. Highly recommended.`,
          verified: true,
          sizeBought: product.sizes[1 % product.sizes.length],
          colorBought: (product.colors[1] || product.colors[0]).name
        }
      ];
      setReviews(mockReviews);
    }
  }, [product]);

  if (!product) return null;

  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserName || !newComment) return;

    const newRev: Review = {
      id: `rev-user-${Date.now()}`,
      userName: newUserName,
      rating: newRating,
      date: 'Just now',
      comment: newComment,
      verified: true,
      sizeBought: reviewerSize,
      colorBought: selectedColor?.name || product.colors[0].name
    };

    setReviews([newRev, ...reviews]);
    setReviewAddedSuccess(true);
    setNewUserName('');
    setNewComment('');
  };

  const calculateAverageRating = () => {
    if (reviews.length === 0) return product.rating;
    const total = reviews.reduce((sum, rev) => sum + rev.rating, 0);
    return (total / reviews.length).toFixed(1);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" id="product-detail-portal">
          
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-none bg-white text-left shadow-none border border-brand-border z-50"
            >
              
              {/* Close Button Trigger */}
              <button
                id="close-detail-modal"
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-none bg-white border border-brand-border hover:bg-brand-clay transition-all text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Main Modal Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* 1. Left Column: Full-Height Styled Shoe Display (Grid 5) */}
                <div className="lg:col-span-5 relative bg-brand-champagne p-6 md:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-brand-border">
                  
                  {/* Category Segment Label */}
                  <div className="flex gap-2 items-center text-[10px] text-brand-rose uppercase tracking-[0.15em] font-semibold z-10 font-sans">
                    <Tag className="w-3.5 h-3.5 text-brand-rose" />
                    <span>{product.category}</span>
                  </div>

                  {/* Primary Render Frame */}
                  <div className="my-8 aspect-square flex items-center justify-center relative overflow-hidden bg-white border border-brand-border shadow-inner" id="modal-product-image-container">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-none"
                    />
                    
                    {/* High-Fidelity Colorist Recolor Overlays with Premium Smooth Transitions */}
                    {selectedColor && (
                      <motion.div
                        key={selectedColor.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                        className="absolute inset-0 pointer-events-none"
                      >
                        {(() => {
                          const tint = getColorTintStyle(selectedColor.hex);
                          return (
                            <>
                              {/* 1. Base color tint overlay (mix-blend-color) */}
                              <div
                                className="absolute inset-0 pointer-events-none mix-blend-color"
                                style={{
                                  backgroundColor: selectedColor.hex,
                                  opacity: tint.colorOpacity
                                }}
                              />
                              
                              {/* 2. Soft multiply shadow overlay for deeper tones */}
                              {tint.multiplyOpacity > 0 && (
                                <div
                                  className="absolute inset-0 pointer-events-none mix-blend-multiply"
                                  style={{
                                    backgroundColor: '#000000',
                                    opacity: tint.multiplyOpacity
                                  }}
                                />
                              )}

                              {/* 3. Soft screen glow overlay for bright color selections */}
                              {tint.lightenOpacity > 0 && (
                                <div
                                  className="absolute inset-0 pointer-events-none mix-blend-screen"
                                  style={{
                                    backgroundColor: '#ffffff',
                                    opacity: tint.lightenOpacity
                                  }}
                                />
                              )}
                            </>
                          );
                        })()}
                      </motion.div>
                    )}
                  </div>

                  {/* Premium Brand Statement */}
                  <div className="space-y-2 text-left z-10 bg-white p-3.5 rounded-none border border-brand-border">
                    <p className="font-serif text-xs text-gray-800 italic">"First Steps to Finest Steps"</p>
                    <p className="font-sans text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
                      Custom material design: {product.material}
                    </p>
                  </div>

                  {/* Aesthetic Accent light reflection background */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-quartz/10 via-transparent to-brand-gold/10 pointer-events-none" />
                </div>

                {/* 2. Right Column: Custom Configuration & Reviews (Grid 7 - Scrollable) */}
                <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 max-h-[85vh] lg:max-h-[90vh] overflow-y-auto">
                  
                  {/* Brand Tag, Title, and Segment */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                        Élan Heights Atelier
                      </span>
                      <span className="text-[10px] text-gray-300">•</span>
                      <span className="font-sans text-[10px] font-semibold text-brand-bronze uppercase tracking-widest">
                        {product.segment} Range
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl font-medium text-gray-900 tracking-tight leading-tight">
                      {product.name}
                    </h2>

                    {/* Pricing */}
                    <div className="flex items-center gap-4 pt-1">
                      <span className="font-serif text-2xl font-bold text-gray-900">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      <div className="h-4 w-px bg-gray-200" />
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
                        <span className="font-sans font-bold text-sm text-gray-800">{calculateAverageRating()}</span>
                        <span className="text-xs text-gray-400">({reviews.length} Elite Reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Description & Features */}
                  <div className="mt-6 border-t border-brand-border pt-6 space-y-4">
                    <h3 className="font-serif text-sm uppercase tracking-wider font-semibold text-gray-905">Atelier Design Concept</h3>
                    <p className="font-sans text-sm text-gray-650 leading-relaxed font-light">
                      {product.description}
                    </p>

                    <div className="bg-brand-clay rounded-none p-4 border border-brand-border space-y-2">
                      <h4 className="font-serif text-xs font-semibold text-brand-rose flex items-center gap-2">
                        <Award className="w-3.5 h-3.5 text-brand-rose" />
                        Meticulous Specifications
                      </h4>
                      <ul className="text-xs text-gray-650 space-y-1.5 pl-5 list-disc leading-relaxed font-light font-sans">
                        {product.features.map((feat, i) => (
                          <li key={i}>{feat}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CUSTOMIZABLES: Colors & Sizing */}
                  <div className="mt-8 pt-6 border-t border-brand-border space-y-6">
                    
                    {/* Color selector */}
                    <div>
                      <span className="block font-serif text-xs uppercase tracking-wider font-medium text-gray-950 mb-2.5">
                        1. Select Atelier Color: <span className="font-light text-brand-rose font-sans italic lowercase">({selectedColor?.name})</span>
                      </span>
                      <div className="flex gap-3">
                        {product.colors.map((color) => {
                          const isSelected = selectedColor?.name === color.name;
                          return (
                            <motion.button
                              id={`color-${color.name}`}
                              key={color.name}
                              onClick={() => setSelectedColor(color)}
                              whileHover={{ scale: 1.15 }}
                              whileTap={{ scale: 0.9 }}
                              transition={{ type: "spring", stiffness: 400, damping: 15 }}
                              className={`group relative w-7 h-7 rounded-none flex items-center justify-center cursor-pointer transition-all ${
                                isSelected ? 'ring-1 ring-brand-rose ring-offset-2 scale-105' : 'hover:scale-105'
                              }`}
                              style={{ backgroundColor: color.hex }}
                              title={color.name}
                            >
                              {isSelected && (
                                <Check className="w-3.5 h-3.5 text-white drop-shadow-md" />
                              )}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Sizing Selector */}
                    <div>
                      <div className="flex justify-between items-center mb-2.5">
                        <span className="font-serif text-xs uppercase tracking-wider font-medium text-gray-950">
                          2. Select Sizing: <span className="font-sans font-light text-brand-rose">({product.ageGroup} Scale)</span>
                        </span>
                        <span className="text-[9px] text-[#B76E79] uppercase tracking-[0.1em] font-sans font-semibold">
                          Custom Fit Consultation Provided
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => {
                          const isSelected = selectedSize === size;
                          return (
                            <motion.button
                              id={`size-${size}`}
                              key={size}
                              onClick={() => setSelectedSize(size)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className={`px-4 py-2 border rounded-none text-xs font-medium cursor-pointer transition-all ${
                                isSelected
                                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-none font-sans font-semibold'
                                  : 'bg-white text-gray-850 border-brand-border hover:border-brand-rose hover:bg-brand-clay/30'
                              }`}
                            >
                              {size} {product.ageGroup === 'Toddler' || product.ageGroup === 'Junior' ? 'Kids' : 'EU'}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Quantity Box */}
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-xs uppercase tracking-wider font-medium text-gray-950">Quantity:</span>
                      <div className="flex items-center border border-brand-border rounded-none overflow-hidden">
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-3 py-1.5 bg-brand-clay/20 hover:bg-brand-clay text-gray-600 font-semibold transition-colors cursor-pointer"
                        >
                          -
                        </motion.button>
                        <span className="px-4 text-xs font-semibold font-sans text-gray-800">{quantity}</span>
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-3 py-1.5 bg-brand-clay/20 hover:bg-brand-clay text-gray-600 font-semibold transition-colors cursor-pointer"
                        >
                          +
                        </motion.button>
                      </div>
                    </div>

                  </div>

                  {/* BIG CTA BUTTONS: Add to checkout or wishlist */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-3 pt-6 border-t border-brand-border font-sans text-[10px]">
                    <motion.button
                      id="modal-add-to-cart"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 450, damping: 20 }}
                      onClick={() => {
                        if (selectedColor && selectedSize) {
                          onAddToBag(product, selectedColor, selectedSize, quantity);
                        }
                      }}
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-950 hover:bg-gray-800 text-white font-sans text-[10px] uppercase tracking-widest font-semibold py-4.5 px-6 rounded-none transition-colors duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                    >
                      <ShoppingBag className="w-4 h-4 text-brand-rose animate-bounce" />
                      <span>Place In Shopping Bag — ₹{(product.price * quantity).toLocaleString('en-IN')}</span>
                    </motion.button>

                    <motion.button
                      id="modal-wishlist"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onToggleWishlist(product.id)}
                      className={`p-4 rounded-none border flex items-center justify-center cursor-pointer transition-all ${
                        isWishlisted
                          ? 'bg-brand-clay border-brand-rose text-brand-rose'
                          : 'bg-white border-brand-border hover:bg-brand-clay text-gray-655 hover:border-brand-rose'
                      }`}
                      title={isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-brand-rose text-brand-rose' : ''}`} />
                    </motion.button>
                  </div>

                  {/* --- REVIEWS SEGMENT --- */}
                  <div className="mt-12 pt-8 border-t border-brand-border">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-serif text-lg font-light italic text-gray-950 flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-brand-rose" />
                        Testimonials & Fitting Notes
                      </h3>
                      <span className="font-sans text-xs text-gray-500">{reviews.length} Client Reviews</span>
                    </div>

                    {/* Pre-existing Reviews List */}
                    <div className="space-y-4">
                      {reviews.map((rev) => (
                        <div key={rev.id} className="p-4 rounded-none bg-brand-clay/35 border border-brand-border text-left space-y-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-serif font-semibold text-gray-950 text-sm">{rev.userName}</h4>
                              <p className="font-sans text-[10px] text-gray-400">{rev.date} • Bought size {rev.sizeBought} ({rev.colorBought})</p>
                            </div>
                            <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-none border border-brand-border">
                              <Star className="w-3 h-3 fill-brand-rose text-brand-rose" />
                              <span className="font-sans text-[11px] font-semibold text-gray-800">{rev.rating}</span>
                            </div>
                          </div>
                          <p className="font-sans text-xs text-gray-600 leading-relaxed font-light italic">"{rev.comment}"</p>
                          {rev.verified && (
                            <div className="flex items-center gap-1 text-[9px] uppercase tracking-[0.1em] font-semibold text-brand-rose">
                              <Check className="w-3 h-3" />
                              <span>Verified Élan Patron</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Add trial Review form */}
                    <div className="mt-8 bg-brand-champagne border border-brand-border rounded-none p-5 text-left">
                      <h4 className="font-serif text-sm font-light italic text-brand-rose mb-4 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-brand-rose" />
                        Pen Your Footwear Experience
                      </h4>

                      {reviewAddedSuccess ? (
                        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-none p-4 font-sans font-medium text-center">
                          ✨ Gold Star Registered! Thank you for sharing your elegant experience with our Atelier.
                        </div>
                      ) : (
                        <form onSubmit={handleAddReviewSubmit} className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[9px] uppercase tracking-[0.15em] text-gray-400 font-semibold mb-1">Your Full Name</label>
                              <input
                                type="text"
                                required
                                value={newUserName}
                                onChange={(e) => setNewUserName(e.target.value)}
                                placeholder="e.g. Charlotte Windsor"
                                className="w-full bg-white text-xs font-sans px-3 py-2 rounded-none border border-brand-border focus:border-brand-rose focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-[9px] uppercase tracking-[0.15em] text-gray-400 font-semibold mb-1">Select Rating</label>
                              <select
                                value={newRating}
                                onChange={(e) => setNewRating(parseFloat(e.target.value))}
                                className="w-full bg-white text-xs font-sans px-3 py-2 rounded-none border border-brand-border focus:border-brand-rose focus:outline-none text-gray-700"
                              >
                                <option value="5">5.0 - Perfect Masterpiece</option>
                                <option value="4.5">4.5 - Exquisite Comfort</option>
                                <option value="4">4.0 - Exceptional Quality</option>
                              </select>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[9px] uppercase tracking-[0.15em] text-gray-400 font-semibold mb-1">Size Bought</label>
                              <select
                                value={reviewerSize}
                                onChange={(e) => setReviewerSize(parseInt(e.target.value))}
                                className="w-full bg-white text-xs font-sans px-3 py-2 rounded-none border border-brand-border focus:border-brand-rose focus:outline-none text-gray-700"
                              >
                                {product.sizes.map(s => (
                                  <option key={s} value={s}>{s}</option>
                                ))}
                              </select>
                            </div>
                            <div className="flex items-end pb-0.5 font-sans">
                              <span className="text-[9px] text-gray-400 font-light leading-snug">Custom styled wrapping and signature card included.</span>
                            </div>
                          </div>

                          <div>
                            <label className="block text-[9px] uppercase tracking-[0.15em] text-gray-400 font-semibold mb-1">Your Experience Note</label>
                            <textarea
                              required
                              rows={3}
                              value={newComment}
                              onChange={(e) => setNewComment(e.target.value)}
                              placeholder="Review leather fitting, arch support, gold emblems and event response..."
                              className="w-full bg-white text-xs font-sans px-3 py-2 rounded-none border border-brand-border focus:border-brand-rose focus:outline-none placeholder:text-gray-400"
                            />
                          </div>

                          <button
                            type="submit"
                            className="w-full bg-gray-950 hover:bg-gray-800 text-white font-sans text-[10px] font-semibold uppercase tracking-widest py-3 rounded-none transition-colors duration-300"
                          >
                            Publish Testimonial
                          </button>
                        </form>
                      )}
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>
          </div>

        </div>
      )}
    </AnimatePresence>
  );
}
