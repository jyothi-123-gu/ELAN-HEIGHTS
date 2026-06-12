import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Star, Tag, Check, Award, Compass, Heart } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface AtelierAdvisorProps {
  onOpenDetails: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
  wishlist: string[];
  onToggleWishlist: (productId: string) => void;
}

type QuestionStep = 'recipient' | 'occasion' | 'investment' | 'results';

export default function AtelierAdvisor({
  onOpenDetails,
  onQuickAdd,
  wishlist,
  onToggleWishlist
}: AtelierAdvisorProps) {
  const [step, setStep] = useState<QuestionStep>('recipient');
  
  // Choice states
  const [recipient, setRecipient] = useState<'Toddler' | 'Junior' | 'Adult' | 'Universal' | ''>('');
  const [occasion, setOccasion] = useState<string>('');
  const [investment, setInvestment] = useState<'Budget' | 'Premium-Luxury' | 'Designer Haute' | ''>('');
  
  // Custom generated matching products list
  const [matches, setMatches] = useState<Product[]>([]);
  const [curatedNotes, setCuratedNotes] = useState<string>('');

  const handleStartAgain = () => {
    setRecipient('');
    setOccasion('');
    setInvestment('');
    setMatches([]);
    setCuratedNotes('');
    setStep('recipient');
  };

  const handleChooseRecipient = (val: 'Toddler' | 'Junior' | 'Adult' | 'Universal') => {
    setRecipient(val);
    setStep('occasion');
  };

  const handleChooseOccasion = (val: string) => {
    setOccasion(val);
    setStep('investment');
  };

  const handleChooseInvestment = (val: 'Budget' | 'Premium-Luxury' | 'Designer Haute') => {
    setInvestment(val);
    
    // Process matching Algorithm live!
    let filtered = [...PRODUCTS];

    // Filter by Age Group / Recipient
    if (recipient === 'Toddler') {
      filtered = filtered.filter(p => p.ageGroup === 'Toddler' || p.ageGroup === 'Universal');
    } else if (recipient === 'Junior') {
      filtered = filtered.filter(p => p.ageGroup === 'Junior' || p.ageGroup === 'Universal');
    } else if (recipient === 'Adult') {
      filtered = filtered.filter(p => p.ageGroup === 'Adult' || p.ageGroup === 'Universal');
    }

    // Filter by investment segment grouping
    if (val === 'Budget') {
      filtered = filtered.filter(p => p.segment === 'Budget' || p.segment === 'Value');
    } else if (val === 'Premium-Luxury') {
      filtered = filtered.filter(p => p.segment === 'Mid-Range' || p.segment === 'Premium' || p.segment === 'Luxury');
    } else if (val === 'Designer Haute') {
      filtered = filtered.filter(p => p.segment === 'Luxury' || p.segment === 'Designer Collections');
    }

    // Filter by occasion keywords if possible
    if (occasion === 'Bridal / Gala') {
      filtered = filtered.filter(p => p.category.includes('Stilettos') || p.category.includes('Bridal') || p.category.includes('Party') || p.category.includes('Pumps') || p.category.includes('Ethnic'));
    } else if (occasion === 'Executive / Work') {
      filtered = filtered.filter(p => p.category.includes('Pumps') || p.category.includes('SchoolLoafer') || p.category.includes('Loafer') || p.category.includes('Chelsea') || p.category.includes('Mary Janes'));
    } else if (occasion === 'Vacation / Slide') {
      filtered = filtered.filter(p => p.category.includes('Espadrilles') || p.category.includes('Slides') || p.category.includes('Sandal') || p.category.includes('Jelly') || p.category.includes('Canvas'));
    } else if (occasion === 'Cozy / Orthopedic') {
      filtered = filtered.filter(p => p.category.includes('Comfort') || p.category.includes('Clogs') || p.category.includes('School'));
    }

    // Fallback if filters are too custom
    if (filtered.length === 0) {
      filtered = PRODUCTS.slice(0, 3);
    }

    // Limit to top 3 matches
    const finalMatches = filtered.slice(0, 3);
    setMatches(finalMatches);

    // Dynamic styled atelier notes based on selection
    let notes = '';
    if (recipient === 'Toddler') {
      notes = `For your precious builder of first steps, we recommend materials that respect micro-scaffolding alignment. A soft-flexible sole paired with breathable linings prevents heel rubbing, ensuring pure confidence in every exploration.`;
    } else if (occasion === 'Bridal / Gala') {
      notes = `For your magnificent milestone occasion, we curate premium duchess silk outers, hand-arranged seed pearls, and gold EH hardware. Each piece is designed to shimmer exceptionally in candlelight, offering beautiful poise and reliable posture stability.`;
    } else if (recipient === 'Adult' && val === 'Designer Haute') {
      notes = `Your preference represents top-tier global couture. We recommend the finest vegetable-tanned box calf leather and hand-polished suede. Featuring custom pitching configurations for long avenues and formal dinners.`;
    } else {
      notes = `A magnificent selection. These pairs combine modern feminine confidence with exceptional shock-absorbency. Premium material construction prevents arch fatigue, making these designs truly special.`;
    }
    setCuratedNotes(notes);
    setStep('results');
  };

  return (
    <div id="atelier-lounge" className="bg-white border border-brand-border rounded-none p-6 sm:p-8 md:p-10 shadow-none text-left max-w-4xl mx-auto my-12 relative overflow-hidden">
      
      {/* Visual background lights */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-rose/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-0 w-60 h-60 bg-brand-clay/20 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-brand-border pb-6 mb-8 gap-4 z-10 relative">
        <div>
          <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.25em] text-brand-rose">
            Virtual Digital Salon
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-gray-955 flex items-center gap-2 mt-1">
            <Sparkles className="w-5 h-5 text-brand-rose scale-90" />
            The Élan Heights Stylist
          </h2>
          <p className="text-xs text-gray-500 font-light mt-0.5 font-sans">
            Receive custom footwear recommendations tailored to age, occasion, and design segment.
          </p>
        </div>
        
        {step !== 'recipient' && (
          <button
            onClick={handleStartAgain}
            className="text-[10px] uppercase tracking-widest font-sans font-medium text-gray-400 hover:text-brand-rose border-b border-transparent hover:border-brand-rose transition-all pb-0.5"
          >
            Reset Fitting Session
          </button>
        )}
      </div>

      {/* --- WORKFLOW CARDS VIA ANIMATION --- */}
      <div>
        
        {/* STEP 1: CHOOSE RECIPIENT */}
        {step === 'recipient' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-lg font-medium text-gray-900">
              1. For whom are we creating this finest stride?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { key: 'Toddler', title: 'Precious Toddler', age: 'Ages 0 - 3', desc: 'Satin bows, flexible pre-walkers, first steps protection.' },
                { key: 'Junior', title: 'Beloved Junior', age: 'Ages 4 - 12', desc: 'School loafers, party Mary Janes, playground mesh.' },
                { key: 'Adult', title: 'Confident Woman', age: 'Adults & Teens', desc: 'High stiletto couture, office pumps, leather Chelseas.' },
                { key: 'Universal', title: 'Universal Elegance', age: 'All Age Groups', desc: 'Signature home slides, holiday espadrilles, daily flat walkers.' }
              ].map((item) => (
                <div
                  id={`recip-${item.key}`}
                  key={item.key}
                  onClick={() => handleChooseRecipient(item.key as any)}
                  className="bg-brand-clay/35 hover:bg-white p-5 rounded-none border border-brand-border hover:border-brand-rose cursor-pointer transition-colors duration-300 text-left space-y-2 group"
                >
                  <span className="font-sans text-[9px] font-medium uppercase tracking-wider text-brand-rose">{item.age}</span>
                  <h4 className="font-serif text-sm font-light italic text-gray-950">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 font-sans font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* STEP 2: OCCASION MATCHING */}
        {step === 'occasion' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-lg font-medium text-gray-900">
              2. Describe the ambient atmosphere / occasion:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { val: 'Bridal / Gala', title: 'Gala & Bridal', desc: 'Weddings, red carpets, cocktail evenings.' },
                { val: 'Executive / Work', title: 'Office & Academy', desc: 'Boardrooms, lectures, private school days.' },
                { val: 'Vacation / Slide', title: 'Resort & Travel', desc: 'Beach walks, cafes, botanical gardens.' },
                { val: 'Cozy / Orthopedic', title: 'Wellness Comfort', desc: 'Plantar support, home lounging, soft felts.' },
                { val: 'Sports / Sneakers', title: 'Active Lifestyle', desc: 'Pro-running, high fashion street chunkys.' }
              ].map((item) => (
                <div
                  id={`occ-${item.title}`}
                  key={item.val}
                  onClick={() => handleChooseOccasion(item.val)}
                  className="bg-brand-clay/35 hover:bg-white p-4 rounded-none border border-brand-border hover:border-brand-rose cursor-pointer transition-colors duration-300 text-left space-y-1 group"
                >
                  <h4 className="font-serif text-sm font-light italic text-gray-950">{item.title}</h4>
                  <p className="text-[10px] text-gray-500 font-sans font-light leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* STEP 3: INVESTMENT RANGE */}
        {step === 'investment' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-lg font-medium text-gray-900">
              3. Select your design philosophy & price segment:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { val: 'Budget', title: 'Value & Budget Essentials', price: '₹3,000 – ₹10,000', desc: 'Aesthetic, safe-skin tested canvas flats, home slides, baby jellies.' },
                { val: 'Premium-Luxury', title: 'Premium Artisan Range', price: '₹10,000 – ₹45,000', desc: 'Handcrafted school loafers, running active mesh, high Chelsea leather.' },
                { val: 'Designer Haute', title: 'Haute Designer Masterpieces', price: '₹45,000 – ₹2,00,000+', desc: 'Italian velvet cases, rose-gold EH plates, premier bridal and crystals.' }
              ].map((item) => (
                <div
                  id={`invest-${item.val}`}
                  key={item.val}
                  onClick={() => handleChooseInvestment(item.val as any)}
                  className="bg-brand-clay/35 hover:bg-white p-5 rounded-none border border-brand-border hover:border-brand-rose cursor-pointer transition-all text-left space-y-2 group"
                >
                  <span className="font-mono text-xs font-semibold text-brand-rose">{item.price}</span>
                  <h4 className="font-serif text-sm font-light italic text-gray-950">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 font-sans font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* STEP 4: SUGGESTIONS SHOWCASE */}
        {step === 'results' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            {/* Atelier Note Container */}
            <div className="bg-brand-clay border border-brand-border rounded-none p-6 sm:p-8 flex items-start gap-4">
              <div className="w-12 h-12 rounded-none bg-white border border-brand-border flex-shrink-0 flex items-center justify-center text-brand-rose shadow-none">
                <Award className="w-6 h-6 text-brand-rose" />
              </div>
              <div className="space-y-1 text-left">
                <span className="font-serif italic font-light text-brand-rose text-sm">Advice from the Élan Heights Atelier:</span>
                <p className="font-sans text-xs sm:text-sm text-gray-650 leading-relaxed font-light">
                  {curatedNotes}
                </p>
              </div>
            </div>

            {/* Curated matched shoe objects */}
            <div className="space-y-4">
              <h4 className="font-serif text-sm uppercase tracking-wider font-semibold text-gray-950 flex items-center gap-1.5 pb-2 border-b border-brand-border">
                <Compass className="w-4 h-4 text-brand-rose" />
                Curated Fittings Matching Your Blueprint:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {matches.map((item) => {
                  const isWish = wishlist.includes(item.id);
                  return (
                    <div
                      id={`match-card-${item.id}`}
                      key={item.id}
                      className="bg-white border border-brand-border rounded-none overflow-hidden shadow-none group flex flex-col justify-between"
                    >
                      {/* Image Thumbnail */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-brand-clay/20">
                        <img
                          src={item.image}
                          alt={item.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                        />
                        <button
                          onClick={() => onToggleWishlist(item.id)}
                          className="absolute top-2.5 right-2.5 p-1.5 rounded-none bg-white border border-brand-border hover:bg-brand-clay text-gray-650 hover:text-brand-rose transition-colors"
                        >
                          <Heart className={`w-3.5 h-3.5 ${isWish ? 'fill-brand-rose text-brand-rose' : ''}`} />
                        </button>
                      </div>

                      {/* Info body */}
                      <div className="p-4 space-y-2 flex-grow flex flex-col justify-between">
                        <div className="space-y-1">
                          <span className="text-[9px] uppercase font-semibold tracking-widest text-brand-rose">{item.category}</span>
                          <h5 className="font-serif text-xs sm:text-sm font-light text-gray-950 line-clamp-1">{item.name}</h5>
                          <p className="text-[10px] text-gray-500 font-sans font-light line-clamp-2 leading-relaxed">{item.description}</p>
                        </div>

                        <div className="pt-3 border-t border-brand-border flex justify-between items-center mt-2">
                          <div className="flex flex-col">
                            <span className="text-[8px] uppercase tracking-wider text-gray-400 font-medium font-sans">{item.segment}</span>
                            <span className="font-serif font-light text-gray-950 text-sm">₹{item.price.toLocaleString('en-IN')}</span>
                          </div>

                          <div className="flex gap-1.5">
                            <button
                              onClick={() => onOpenDetails(item)}
                              className="text-[9px] uppercase tracking-widest font-semibold bg-white border border-brand-border hover:bg-brand-clay px-2.5 py-1.5 rounded-none text-gray-700 font-sans transition-colors"
                            >
                              Details
                            </button>
                            <button
                              onClick={() => onQuickAdd(item)}
                              className="text-[9px] uppercase tracking-widest font-semibold bg-gray-950 hover:bg-gray-800 text-white px-2.5 py-1.5 rounded-none font-sans transition-colors"
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={handleStartAgain}
                className="bg-gray-950 hover:bg-gray-800 text-white px-8 py-3.5 rounded-none text-[10px] font-sans font-medium uppercase tracking-widest transition-colors duration-300 border border-transparent"
              >
                Perform Another Fitting Simulation
              </button>
            </div>

          </motion.div>
        )}

      </div>

    </div>
  );
}
