import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, ShieldCheck, Truck, Sparkles, Gift, GiftIcon, CreditCard, ChevronRight } from 'lucide-react';
import { CheckoutDetails, CartItem } from '../types';
import { getColorTintStyle } from './ProductDetailModal';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  promoApplied: boolean;
  onOrderSuccess: () => void;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  cart,
  promoApplied,
  onOrderSuccess
}: CheckoutModalProps) {
  const [step, setStep] = useState<1 | 2>(1); // Step 1: Shipping & Packaging, Step 2: Payment
  const [orderDetails, setOrderDetails] = useState<CheckoutDetails>({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '4111 2222 3333 4444',
    expiryDate: '12/28',
    cvv: '123',
    giftWrap: false,
    giftMessage: '',
    packagingPreference: 'Signature Rose Gold Box'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const subtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const discountAmount = promoApplied ? subtotal * 0.15 : 0;
  const finalTotal = subtotal - discountAmount;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setOrderDetails({ ...orderDetails, [name]: checked });
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury bank auth delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onOrderSuccess();
    }, 1800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" id="checkout-modal-overlay">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 shadow-xl backdrop-blur-xs"
          />

          <div className="flex min-h-screen items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative bg-white rounded-none w-full max-w-4xl p-6 sm:p-8 md:p-10 shadow-none border border-brand-border overflow-hidden"
            >
              
              {/* Top Close trigger */}
              {!isSuccess && (
                <button
                  id="close-checkout"
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-none hover:bg-brand-clay text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}

              {/* SUCCESS PANEL */}
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 space-y-6 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 bg-brand-clay border border-brand-border rounded-none flex items-center justify-center text-brand-rose">
                    <CheckCircle className="w-8 h-8 text-brand-rose" />
                  </div>

                  <div className="space-y-2">
                    <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-brand-rose bg-brand-clay px-3 py-1.5 border border-brand-border">
                      Atelier Request Registered!
                    </span>
                    <h2 className="font-serif text-3xl font-light italic text-gray-955 pt-2">
                      Your Steps are En Route
                    </h2>
                    <p className="font-sans text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
                      Thank you for choosing <span className="font-serif text-gray-900 italic font-semibold">Élan Heights</span>. A confirmation has been dispatched to <span className="text-gray-800 font-semibold font-mono">{orderDetails.email}</span>. A designated white-glove courier will text you to confirm personalized handoff timing.
                    </p>
                  </div>

                  <div className="bg-brand-clay border border-brand-border rounded-none p-6 text-left max-w-md w-full space-y-4">
                    <h4 className="font-serif text-xs font-light italic text-brand-rose flex items-center gap-1.5 border-b border-brand-border pb-2">
                      <Sparkles className="w-4 h-4 text-brand-rose scale-90" />
                      Unboxing & Delivery Package:
                    </h4>
                    <div className="text-xs space-y-1.5 text-gray-650 font-light font-sans">
                      <p><strong>Patron:</strong> {orderDetails.fullName}</p>
                      <p><strong>Destination:</strong> {orderDetails.address}, {orderDetails.city}</p>
                      <p><strong>Package Wrap:</strong> {orderDetails.packagingPreference}</p>
                      {orderDetails.giftWrap && (
                        <p className="italic text-brand-rose"><strong>Gift Greeting Card:</strong> "{orderDetails.giftMessage}"</p>
                      )}
                      <p className="border-t border-brand-border pt-2 font-mono text-right text-gray-800 font-semibold">
                        Charged: ${finalTotal.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <button
                    id="success-continue-shopping"
                    onClick={onClose}
                    className="bg-gray-950 hover:bg-gray-800 text-white font-sans text-[10px] uppercase tracking-widest font-semibold px-8 py-4 rounded-none transition-colors duration-300"
                  >
                    Return to Atelier Storefront
                  </button>

                  <p className="font-serif text-xs text-brand-rose font-semibold italic">
                    "Élan Heights — From First Steps to Finest Steps 👠💖✨"
                  </p>
                </motion.div>
              ) : (
                
                // MAIN CHECKOUT PROCESS
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* LEFT COLUMN: Input form (Grid 7) */}
                  <div className="lg:col-span-7 space-y-6">
                             {/* Header and Step Indicators */}
                    <div className="space-y-1.5 text-left">
                      <h2 className="font-serif text-2xl font-light text-gray-955 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-brand-rose scale-90" />
                        Atelier White-Glove Checkout
                      </h2>
                      
                      {/* Step visual dots */}
                      <div className="flex items-center gap-4 pt-1 text-[9px] uppercase font-sans tracking-[0.15em] font-semibold">
                        <span className={`${step === 1 ? 'text-brand-rose font-bold border-b-2 border-brand-rose' : 'text-gray-400'}`}>
                          1. Handoff & Pack
                         </span>
                        <ChevronRight className="w-3 h-3 text-gray-400" />
                        <span className={`${step === 2 ? 'text-brand-rose font-bold border-b-2 border-brand-rose' : 'text-gray-400'}`}>
                          2. Vault Payment
                        </span>
                      </div>
                    </div>

                    {/* STEP 1: SHIPPING & PACKAGING FORM */}
                    {step === 1 ? (
                      <form onSubmit={handleNextStep} className="space-y-5 text-left">
                        <h3 className="font-serif text-xs uppercase tracking-widest font-semibold text-gray-950 border-b border-brand-border pb-1.5 flex items-center gap-1.5">
                          <Truck className="w-4 h-4 text-brand-rose" />
                          Delivery Coordinates
                        </h3>

                        <div className="space-y-4 font-sans">
                          <div>
                            <label className="block text-[9px] uppercase tracking-[0.15em] text-gray-400 font-semibold mb-1">Full Name of Patron / Recipient</label>
                            <input
                              type="text"
                              name="fullName"
                              required
                              value={orderDetails.fullName}
                              onChange={handleInputChange}
                              placeholder="Lady Penelope Sterling"
                              className="w-full bg-[#FDFBF7] text-xs px-3.5 py-3 rounded-none border border-brand-border focus:border-brand-rose focus:outline-none placeholder:text-gray-400"
                            />
                          </div>

                          <div>
                            <label className="block text-[9px] uppercase tracking-[0.15em] text-gray-400 font-semibold mb-1">Secure Email Address</label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={orderDetails.email}
                              onChange={handleInputChange}
                              placeholder="penelope@estate.com"
                              className="w-full bg-[#FDFBF7] text-xs px-3.5 py-3 rounded-none border border-brand-border focus:border-brand-rose focus:outline-none placeholder:text-gray-400"
                            />
                          </div>

                          <div>
                            <label className="block text-[9px] uppercase tracking-[0.15em] text-gray-400 font-semibold mb-1">Street Address</label>
                            <input
                              type="text"
                              name="address"
                              required
                              value={orderDetails.address}
                              onChange={handleInputChange}
                              placeholder="742 Belgravia Mews Royal"
                              className="w-full bg-[#FDFBF7] text-xs px-3.5 py-3 rounded-none border border-brand-border focus:border-brand-rose focus:outline-none placeholder:text-gray-400"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[9px] uppercase tracking-[0.15em] text-gray-400 font-semibold mb-1">City</label>
                              <input
                                type="text"
                                name="city"
                                required
                                value={orderDetails.city}
                                onChange={handleInputChange}
                                placeholder="London"
                                className="w-full bg-[#FDFBF7] text-xs px-3.5 py-3 rounded-none border border-brand-border focus:border-brand-rose focus:outline-none placeholder:text-gray-400"
                              />
                            </div>
                            <div>
                              <label className="block text-[9px] uppercase tracking-[0.15em] text-gray-400 font-semibold mb-1">Postal Code</label>
                              <input
                                type="text"
                                name="postalCode"
                                required
                                value={orderDetails.postalCode}
                                onChange={handleInputChange}
                                placeholder="SW1X 8PX"
                                className="w-full bg-[#FDFBF7] text-xs px-3.5 py-3 rounded-none border border-brand-border focus:border-brand-rose focus:outline-none placeholder:text-gray-400"
                              />
                            </div>
                          </div>
                        </div>

                        {/* LUXURY UNBOXING OPTION */}
                        <div className="space-y-4 pt-4">
                          <h3 className="font-serif text-xs uppercase tracking-widest font-semibold text-gray-955 border-b border-brand-border pb-1.5 flex items-center gap-1.5">
                            <GiftIcon className="w-4 h-4 text-brand-rose" />
                            Premium Packaging Philosophy
                          </h3>

                          <div>
                            <label className="block text-[9px] uppercase tracking-[0.15em] text-gray-400 font-semibold mb-2">Unboxing Design Preference</label>
                            <select
                              name="packagingPreference"
                              value={orderDetails.packagingPreference}
                              onChange={handleInputChange}
                              className="w-full bg-white text-xs font-sans p-3.5 rounded-none border border-brand-border focus:border-brand-rose focus:outline-none"
                            >
                              <option value="Signature Rose Gold Box">Signature Rose Gold Box (Complimentary embossed brand casing & tissue wraps)</option>
                              <option value="Sustainable Minimal Packaging">Sustainable Minimal (105% post-consumer linen fiber envelope & eco-pouch)</option>
                              <option value="VIP Velvet Coffer">VIP Velvet Coffer (Add ₹6,000 - Handcrafted soft plush velvet coffer, silk lining & gold latch locks)</option>
                            </select>
                          </div>

                          {/* Gift Checkbox */}
                           <div className="p-4 bg-brand-clay border border-brand-border rounded-none space-y-3">
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                name="giftWrap"
                                id="giftWrap"
                                checked={orderDetails.giftWrap}
                                onChange={handleCheckboxChange}
                                className="w-4.5 h-4.5 accent-brand-rose cursor-pointer"
                              />
                              <label htmlFor="giftWrap" className="text-xs font-serif italic text-gray-900 cursor-pointer flex items-center gap-1">
                                <Gift className="w-4 h-4 text-brand-rose animate-pulse" />
                                Is this exquisite pair a Gift?
                              </label>
                            </div>
                            
                            {orderDetails.giftWrap && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="space-y-2 pt-1"
                              >
                                <label className="block text-[8px] uppercase tracking-widest text-[#B76E79] font-semibold">Greeter Message on Gold-Foil Script Card</label>
                                <textarea
                                  name="giftMessage"
                                  rows={2}
                                  value={orderDetails.giftMessage}
                                  onChange={handleInputChange}
                                  placeholder="Type bespoke greeting... e.g. To my gorgeous daughter on your first walker achievements!"
                                  className="w-full bg-white text-xs font-sans px-3 py-2 rounded-none border border-brand-border focus:outline-none focus:border-brand-rose placeholder:text-gray-400"
                                />
                              </motion.div>
                            )}
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-gray-950 hover:bg-gray-800 text-white font-sans text-[10px] uppercase tracking-widest font-semibold py-4 rounded-none transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                          <span>Proceed to Vault Payment</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </form>
                    ) : (
                      
                      // STEP 2: PAYMENT METHOD
                      <form onSubmit={handlePlaceOrder} className="space-y-5 text-left">
                        <h3 className="font-serif text-xs uppercase tracking-widest font-semibold text-gray-955 border-b border-brand-border pb-1.5 flex items-center gap-1.5">
                          <CreditCard className="w-4 h-4 text-brand-rose" />
                          Secure Financial Settlement
                        </h3>

                        <div className="p-4 bg-brand-clay border border-brand-border rounded-none flex items-start gap-2.5 text-xs text-brand-rose font-sans leading-relaxed">
                          <ShieldCheck className="w-5 h-5 text-brand-rose flex-shrink-0" />
                          <p>
                            <strong>Aura Encryption Active:</strong> Payments are processed under 256-bit secure end-to-end encryption. Your real funds will not be debited (Interactive Simulation Sandbox).
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-[9px] uppercase tracking-[0.15em] text-gray-400 font-semibold mb-1">Cardholder Signature Name</label>
                            <input
                              type="text"
                              required
                              defaultValue={orderDetails.fullName}
                              className="w-full bg-[#FDFBF7] text-xs font-sans px-3.5 py-3 rounded-none border border-brand-border focus:border-brand-rose focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-[9px] uppercase tracking-[0.15em] text-gray-400 font-semibold mb-1">16-Digit Credit Card Number</label>
                            <input
                              type="text"
                              name="cardNumber"
                              required
                              value={orderDetails.cardNumber}
                              onChange={handleInputChange}
                              placeholder="4111 2222 3333 4444"
                              className="w-full bg-[#FDFBF7] text-xs font-sans px-3.5 py-3 rounded-none border border-brand-border focus:border-brand-rose focus:outline-none font-mono"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[9px] uppercase tracking-[0.15em] text-gray-400 font-semibold mb-1">Expiry Date</label>
                              <input
                                type="text"
                                name="expiryDate"
                                required
                                value={orderDetails.expiryDate}
                                onChange={handleInputChange}
                                placeholder="12/28"
                                className="w-full bg-[#FDFBF7] text-xs font-sans px-3.5 py-3 rounded-none border border-brand-border focus:border-brand-rose focus:outline-none font-mono"
                              />
                            </div>
                            <div>
                              <label className="block text-[9px] uppercase tracking-[0.15em] text-gray-400 font-semibold mb-1">CVV Security Code</label>
                              <input
                                type="text"
                                name="cvv"
                                required
                                value={orderDetails.cvv}
                                onChange={handleInputChange}
                                placeholder="123"
                                className="w-full bg-[#FDFBF7] text-xs font-sans px-3.5 py-3 rounded-none border border-brand-border focus:border-brand-rose focus:outline-none font-mono"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2.5 pt-2">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="w-1/3 bg-white hover:bg-brand-clay border border-brand-border text-gray-700 font-sans text-[10px] uppercase tracking-widest font-semibold py-4 rounded-none transition-colors"
                          >
                            Back To Coordinate
                          </button>
                          
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 bg-gray-950 hover:bg-gray-800 text-white font-sans text-[10px] uppercase tracking-widest font-semibold py-4 rounded-none transition-colors duration-300 flex items-center justify-center gap-2 shadow-none disabled:bg-gray-300"
                          >
                            {isSubmitting ? (
                              <>
                                <span className="animate-spin text-brand-rose">✦</span>
                                <span>Authenticating Security Vault...</span>
                              </>
                            ) : (
                              <>
                                <span>Authorize Investment — ₹{(finalTotal + (orderDetails.packagingPreference === 'VIP Velvet Coffer' ? 6000 : 0)).toLocaleString('en-IN')}</span>
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    )}

                  </div>

                  {/* RIGHT COLUMN: Order Summary Visualizer (Grid 5) */}
                  <div className="lg:col-span-5 bg-brand-champagne p-6 rounded-none border border-brand-border flex flex-col justify-between text-left space-y-6">
                    <div>
                      <h3 className="font-serif text-sm font-light italic text-gray-950 border-b border-brand-border pb-3 mb-4">
                        Investment Summary
                      </h3>

                      {/* Mini checkout items list */}
                      <div className="space-y-3.5 max-h-[190px] overflow-y-auto pr-1">
                        {cart.map((item) => (
                          <div key={item.id} className="flex gap-3 justify-between items-center text-xs py-1.5 border-b border-brand-border/30 last:border-0">
                            <div className="flex gap-3 items-center">
                              {/* Small Colorist Tinted Shoe Image */}
                              <div className="w-10 h-10 bg-white border border-brand-border rounded-none relative overflow-hidden flex-shrink-0">
                                <img
                                  src={item.product.image}
                                  alt={item.product.name}
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover"
                                />
                                {item.selectedColor && (() => {
                                  const tint = getColorTintStyle(item.selectedColor.hex);
                                  return (
                                    <>
                                      <div
                                        className="absolute inset-0 pointer-events-none mix-blend-color"
                                        style={{
                                          backgroundColor: item.selectedColor.hex,
                                          opacity: tint.colorOpacity
                                        }}
                                      />
                                      {tint.multiplyOpacity > 0 && (
                                        <div
                                          className="absolute inset-0 pointer-events-none mix-blend-multiply"
                                          style={{
                                            backgroundColor: '#000000',
                                            opacity: tint.multiplyOpacity
                                          }}
                                        />
                                      )}
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
                              </div>

                              <div>
                                <p className="font-serif font-light text-gray-950 leading-tight line-clamp-1">
                                  {item.product.name} <span className="font-sans font-semibold text-brand-rose text-[10px] ml-1">({item.quantity}x)</span>
                                </p>
                                <p className="text-[10px] text-gray-400 capitalize font-sans mt-0.5">size {item.selectedSize} • {item.selectedColor.name}</p>
                              </div>
                            </div>
                            <span className="font-serif text-gray-950 font-light font-sans flex-shrink-0">
                              ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-brand-border pt-4 space-y-2 font-sans">
                      <div className="flex justify-between text-xs text-gray-500 font-light">
                        <span>Items Total</span>
                        <span>₹{subtotal.toLocaleString('en-IN')}</span>
                      </div>
                      {promoApplied && (
                        <div className="flex justify-between text-xs text-emerald-700 font-semibold animate-fade-in">
                          <span>15% Courtesy Discount</span>
                          <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                        </div>
                      )}
                      
                      {orderDetails.packagingPreference === 'VIP Velvet Coffer' && (
                        <div className="flex justify-between text-[11px] text-brand-rose font-semibold animate-fade-in">
                          <span>VIP Velvet Coffer Wrap Upgrade</span>
                          <span>+₹6,000</span>
                        </div>
                      )}

                      <div className="flex justify-between text-xs text-gray-500 font-light">
                        <span>Courier Delivery</span>
                        <span className="text-brand-rose uppercase tracking-[0.1em] text-[10px] font-semibold">Complimentary</span>
                      </div>

                      <div className="flex justify-between text-base font-serif font-light italic text-gray-950 border-t border-brand-border pt-2.5">
                        <span>Total Investment</span>
                        <span>
                          ₹{(finalTotal + (orderDetails.packagingPreference === 'VIP Velvet Coffer' ? 6000 : 0)).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-none border border-brand-border text-[10px] text-gray-400 text-center leading-relaxed font-sans">
                      By purchasing, you unlock lifetime access to our digital styling lounge and custom repair concierge support.
                    </div>

                  </div>

                </div>
              )}

            </motion.div>
          </div>

        </div>
      )}
    </AnimatePresence>
  );
}
