import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, Star, HeartHandshake, Box } from 'lucide-react';
import { GENERATED_IMAGES } from '../data';
import EliteLogo from './EliteLogo';

interface HeroSectionProps {
  onScrollToCatalog: () => void;
  onOpenAtelier: () => void;
}

export default function HeroSection({ onScrollToCatalog, onOpenAtelier }: HeroSectionProps) {
  return (
    <section id="hero-campaign" className="relative overflow-hidden bg-brand-champagne border-b border-brand-border">
      
      {/* Absolute Decorative Circles representing blush quartz & pearl drops */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-blush/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[300px] h-[300px] bg-brand-clay/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Campaign Messaging (Grid Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-6 md:space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3.5"
            >
              <EliteLogo variant="iconOnly" size="sm" />
              <div className="h-4 w-px bg-brand-border" />
              <span className="text-[9px] sm:text-[10px] font-sans uppercase font-medium tracking-[0.25em] text-brand-rose">
                The Heritage Campaign
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-gray-950 leading-tight tracking-wide">
                ÉLAN HEIGHTS
              </h1>
              <h2 className="font-serif text-2xl sm:text-3xl italic text-brand-rose font-medium tracking-wide">
                Every Age. Every Style. Every Step.
              </h2>
              <p className="font-sans text-xs sm:text-[14px] text-gray-650 max-w-xl leading-relaxed font-light pt-2">
                Discover the world's most beautiful footwear collection — from everyday essentials to luxury designer statements.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                id="hero-explore-btn"
                onClick={onScrollToCatalog}
                className="group relative flex items-center justify-center gap-2 bg-gray-950 hover:bg-gray-900 text-white font-sans text-[10px] uppercase tracking-widest font-semibold py-4 px-8 rounded-none transition-all"
              >
                <span>Explore Couture</span>
                <ArrowDown className="w-4 h-4 text-brand-rose group-hover:translate-y-1 transition-transform" />
              </button>

              <button
                id="hero-atelier-btn"
                onClick={onOpenAtelier}
                className="flex items-center justify-center gap-2.5 bg-transparent hover:bg-brand-blush text-gray-900 font-sans text-[10px] uppercase tracking-widest font-bold py-4 px-8 rounded-none border border-gray-950 transition-all"
              >
                <span>Virtual Advisor</span>
              </button>
            </motion.div>

            {/* Micro Creds / Visual Pillars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-brand-border"
            >
              <div className="flex flex-col space-y-1">
                <span className="font-serif italic font-medium text-gray-950 text-base">40+ Eras</span>
                <span className="font-sans text-[9px] uppercase tracking-widest text-brand-rose font-medium">Styles & Kinds</span>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="font-serif italic font-medium text-gray-950 text-base">6 Segments</span>
                <span className="font-sans text-[9px] uppercase tracking-widest text-brand-rose font-medium">Budget to Luxe</span>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="font-serif italic font-medium text-gray-950 text-base">Atelier Care</span>
                <span className="font-sans text-[9px] uppercase tracking-widest text-[#7a665a] font-light">Custom Fit Guarantee</span>
              </div>
            </motion.div>

          </div>

          {/* Wide Hero Image Column (Grid Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center w-full py-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[16/10] overflow-hidden border border-brand-border shadow-[0_25px_60px_rgba(183,110,121,0.12)] cursor-pointer group bg-white"
              onClick={onScrollToCatalog}
            >
              <img
                src={GENERATED_IMAGES.allAgesFootwearHero}
                alt="Élan Heights All Ages Luxury Footwear Campaign"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-[2000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
              
              {/* Floating House Tag with Gold-Rose Borders */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/95 backdrop-blur-md border border-brand-border p-4.5 sm:p-5 text-gray-950 text-left shadow-lg">
                <div className="flex justify-between items-baseline mb-2">
                  <p className="font-serif italic text-base sm:text-lg font-medium text-gray-900">Élan Heights 8K Masterpiece</p>
                  <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.15em] text-[#7a665a] font-semibold bg-brand-clay px-2 py-1 border border-brand-border/40">From First Steps to Finest</span>
                </div>
                <div className="flex justify-between items-center border-t border-brand-border/60 pt-2">
                  <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-brand-rose font-bold">Bridging Generations of Craft</p>
                  <span className="text-[10px] sm:text-[11px] text-brand-rose font-serif animate-pulse">✦ Legacy Collection</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
}
