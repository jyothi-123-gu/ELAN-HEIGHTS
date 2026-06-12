import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, ArrowRight, Gift, Tag, Sparkles } from 'lucide-react';
import { CartItem } from '../types';
import { getColorTintStyle } from './ProductDetailModal';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, amount: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: (promoApplied: boolean, promoCode: string) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}: CartDrawerProps) {
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [discountPercent, setDiscountPercent] = useState(0);

  const subtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const handleApplyPromo = () => {
    const formatted = promoInput.trim().toUpperCase();
    if (formatted === 'ELANWELCOME' || formatted === 'FIRSTSTEPS') {
      setPromoApplied(true);
      setDiscountPercent(15);
      setPromoError('');
    } else if (formatted === '') {
      setPromoError('Please type a valid atelier code.');
    } else {
      setPromoError('This luxury voucher has expired or is invalid.');
    }
  };

  const discountAmount = subtotal * (discountPercent / 100);
  const finalTotal = subtotal - discountAmount;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" id="shopping-bag-drawer">
          <div className="absolute inset-0 overflow-hidden">
            
            {/* Backdrop close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            />

            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="pointer-events-auto w-screen max-w-md"
              >
                <div className="flex h-full flex-col bg-white shadow-2xl border-l border-brand-quartz/35">
                  
                  {/* Drawer Header */}
                  <div className="px-6 py-6 border-b border-brand-border bg-brand-champagne">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4 text-brand-rose" />
                        <h2 className="text-[17px] font-serif font-light text-gray-950">My Shopping Bag</h2>
                        <span className="text-[9px] bg-neutral-950 text-white px-2 py-0.5 rounded-none font-medium font-sans">
                          {cart.reduce((s, i) => s + i.quantity, 0)}
                        </span>
                      </div>
                      <button
                        onClick={onClose}
                        className="rounded-none p-1.5 text-gray-500 hover:bg-brand-clay hover:text-gray-900 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Drawer Content */}
                  <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                    {cart.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center py-20 space-y-4">
                        <div className="w-12 h-12 rounded-none bg-brand-clay flex items-center justify-center border border-brand-border">
                          <ShoppingBag className="w-5 h-5 text-brand-rose" />
                        </div>
                        <div>
                          <p className="font-serif text-lg font-light italic text-gray-955">Your shopping bag is empty</p>
                          <p className="font-sans text-xs text-gray-500 max-w-xs mt-1 leading-relaxed">
                            Discover our curated luxury footwear collections. Take your first steps with our exclusive selections.
                          </p>
                        </div>
                        <button
                          onClick={onClose}
                          className="bg-gray-950 hover:bg-gray-800 text-white text-[10px] uppercase font-sans tracking-widest font-semibold px-6 py-3 rounded-none transition-colors duration-300"
                        >
                          Explore Boutique
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4 division-y">
                        {cart.map((item) => (
                          <div
                            key={item.id}
                            className="flex py-4 border-b border-brand-border last:border-b-0 gap-4"
                          >
                            <div className="w-20 h-20 bg-brand-clay/35 rounded-none overflow-hidden flex-shrink-0 border border-brand-border relative">
                              <img
                                src={item.product.image}
                                alt={item.product.name}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover"
                              />
                              
                              {/* Color tint match for selected bag style */}
                              {item.selectedColor && (() => {
                                const tint = getColorTintStyle(item.selectedColor.hex);
                                return (
                                  <>
                                    <div
                                      className="absolute inset-0 pointer-events-none mix-blend-color transition-all duration-300"
                                      style={{
                                        backgroundColor: item.selectedColor.hex,
                                        opacity: tint.colorOpacity
                                      }}
                                    />
                                    {tint.multiplyOpacity > 0 && (
                                      <div
                                        className="absolute inset-0 pointer-events-none mix-blend-multiply transition-all duration-300"
                                        style={{
                                          backgroundColor: '#000000',
                                          opacity: tint.multiplyOpacity
                                        }}
                                      />
                                    )}
                                    {tint.lightenOpacity > 0 && (
                                      <div
                                        className="absolute inset-0 pointer-events-none mix-blend-screen transition-all duration-300"
                                        style={{
                                          backgroundColor: '#ffffff',
                                          opacity: tint.lightenOpacity
                                        }}
                                      />
                                    )}
                                  </>
                                );
                              })()}
                            </div>

                            <div className="flex-1 flex flex-col justify-between text-left">
                              <div>
                                <div className="flex justify-between items-start">
                                  <h3 className="font-serif text-[13px] font-light text-gray-950 line-clamp-1">
                                    {item.product.name}
                                  </h3>
                                  <span className="font-serif text-[13px] font-light text-gray-950 ml-2">
                                    ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                                  </span>
                                </div>
                                <p className="text-[10px] text-gray-400 capitalize font-sans">
                                  {item.product.category}
                                </p>
                                {/* Selected attributes */}
                                <div className="flex items-center gap-3 mt-1 text-[10px] text-gray-500 font-light font-sans">
                                  <span className="flex items-center gap-1.5">
                                    <span
                                      className="inline-block w-2 h-2 rounded-none border border-gray-300"
                                      style={{ backgroundColor: item.selectedColor.hex }}
                                    />
                                    {item.selectedColor.name}
                                  </span>
                                  <span>•</span>
                                  <span>Size: {item.selectedSize}</span>
                                </div>
                              </div>

                              <div className="flex justify-between items-center mt-2">
                                {/* Quantity counters */}
                                <div className="flex items-center border border-brand-border rounded-none overflow-hidden bg-brand-clay/35">
                                  <button
                                    onClick={() => onUpdateQuantity(item.id, -1)}
                                    className="px-2 py-0.5 text-xs text-gray-650 hover:bg-brand-clay transition-colors"
                                  >
                                    -
                                  </button>
                                  <span className="px-2.5 text-xs font-semibold font-sans text-gray-700">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => onUpdateQuantity(item.id, 1)}
                                    className="px-2 py-0.5 text-xs text-gray-650 hover:bg-brand-clay transition-colors"
                                  >
                                    +
                                  </button>
                                </div>

                                {/* Remove Button */}
                                <button
                                  onClick={() => onRemoveItem(item.id)}
                                  className="text-gray-400 hover:text-brand-rose p-1 rounded-none hover:bg-brand-clay"
                                  title="Remove item"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Drawer Footer summary (Only shown if items exist) */}
                  {cart.length > 0 && (
                    <div className="border-t border-brand-border bg-brand-champagne p-6 space-y-4">
                      
                      {/* Complimentary message */}
                      <div className="flex items-center gap-2 bg-brand-clay border border-brand-border rounded-none p-3 text-[10px] text-gray-700">
                        <Gift className="w-4 h-4 text-brand-rose flex-shrink-0" />
                        <span className="text-left leading-snug">
                          Your order qualifies for complimentary <strong className="font-semibold text-brand-rose">Atelier White-Glove Delivery</strong> and custom keepsake packaging wrapping.
                        </span>
                      </div>

                      {/* Promo Codes */}
                      <div className="space-y-1.5 text-left">
                        <label className="block text-[9px] uppercase tracking-[0.15em] text-brand-rose font-semibold">
                          Promo / Atelier Voucher Code
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Try code: ELANWELCOME"
                            value={promoInput}
                            onChange={(e) => setPromoInput(e.target.value)}
                            disabled={promoApplied}
                            className="flex-grow bg-white text-xs px-3 py-2 rounded-none border border-brand-border uppercase tracking-wider focus:outline-none focus:border-brand-rose disabled:bg-gray-50"
                          />
                          <button
                            onClick={handleApplyPromo}
                            disabled={promoApplied}
                            className="bg-gray-900 border border-transparent hover:bg-gray-800 text-[10px] tracking-widest uppercase font-semibold text-white px-4 py-2 rounded-none transition-colors disabled:bg-gray-350"
                          >
                            Apply
                          </button>
                        </div>
                        {promoApplied && (
                          <p className="text-[10px] text-emerald-700 font-medium flex items-center gap-1 mt-1 font-sans">
                            <Tag className="w-3 h-3 text-emerald-600" />
                            Elite Code Applied — 15% Courtesy Discount Registered!
                          </p>
                        )}
                        {promoError && (
                          <p className="text-[10px] text-brand-rose font-medium font-sans">
                            {promoError}
                          </p>
                        )}
                      </div>

                      {/* Breakdowns */}
                      <div className="space-y-2 text-xs border-t border-brand-border pt-4">
                        <div className="flex justify-between text-gray-500 font-light font-sans">
                          <span>Subtotal</span>
                          <span>₹{subtotal.toLocaleString('en-IN')}</span>
                        </div>
                        {promoApplied && (
                          <div className="flex justify-between text-emerald-700 font-semibold font-sans">
                            <span>15% Courtesy Discount</span>
                            <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-gray-500 font-light font-sans">
                          <span>Luxury Courier Delivery</span>
                          <span className="text-brand-rose uppercase tracking-[0.15em] text-[10px] font-semibold">Complimentary</span>
                        </div>
                        
                        <div className="flex justify-between text-base font-serif font-light italic text-gray-950 border-t border-brand-border pt-2">
                          <span>Total Investment</span>
                          <span>₹{finalTotal.toLocaleString('en-IN')}</span>
                        </div>
                      </div>

                      {/* Final Checkout CTA */}
                      <button
                        id="checkout-drawer-cta"
                        onClick={() => onCheckout(promoApplied, promoApplied ? 'ELANWELCOME' : '')}
                        className="w-full flex items-center justify-center gap-2 bg-gray-950 hover:bg-gray-800 text-white font-sans text-[10px] uppercase tracking-widest font-semibold py-4 rounded-none transition-colors duration-300 shadow-none mt-4"
                      >
                        <span>Atelier White-Glove Checkout</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <p className="text-[9px] text-gray-400 text-center font-sans tracking-wider">
                        By placing order, you enter our lifetime VIP styling support.
                      </p>

                    </div>
                  )}

                </div>
              </motion.div>
            </div>

          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
