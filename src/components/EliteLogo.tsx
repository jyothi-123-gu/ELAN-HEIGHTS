import React, { useId } from 'react';

interface EliteLogoProps {
  variant?: 'horizontal' | 'vertical' | 'iconOnly';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'giant';
  dark?: boolean;
}

export default function EliteLogo({ variant = 'horizontal', size = 'md', dark = false }: EliteLogoProps) {
  const rawId = useId();
  const uniqueId = rawId.replace(/[^a-zA-Z0-9-]/g, '');

  // Determine scale classes
  const sizeMap = {
    sm: { icon: 'w-8 h-8', text: 'text-sm', tagline: 'text-[6px]' },
    md: { icon: 'w-12 h-12', text: 'text-lg sm:text-[19px]', tagline: 'text-[7.5px]' },
    lg: { icon: 'w-16 h-16', text: 'text-2xl', tagline: 'text-[9px]' },
    xl: { icon: 'w-24 h-24', text: 'text-3xl', tagline: 'text-xs' },
    giant: { icon: 'w-36 h-36', text: 'text-4.5xl', tagline: 'text-sm' }
  };

  const { icon: iconSize, text: textSize, tagline: taglineSize } = sizeMap[size];

  // Colors
  const textColor = dark ? 'text-white' : 'text-gray-950';
  const taglineColor = 'text-brand-rose';

  return (
    <div className={`flex items-center gap-3 ${variant === 'vertical' ? 'flex-col text-center' : 'flex-row text-left'}`}>
      
      {/* Dynamic Hand-Crafted SVG Monogram "EH" */}
      <div className={`relative ${iconSize} flex-shrink-0 group`} id="elan-heights-monogram">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm group-hover:scale-105 transition-transform duration-500"
        >
          {/* Definitions for Premium Rose-Gold Metallic Gradient & Filters */}
          <defs>
            <linearGradient id={`roseGold-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              {/* Richer high-visibility luxury gold/rose hues */}
              <stop offset="0%" stopColor="#A35C66" />
              <stop offset="35%" stopColor="#D29A9E" />
              <stop offset="70%" stopColor="#C49B74" />
              <stop offset="100%" stopColor="#8A5A44" />
            </linearGradient>
            <linearGradient id={`roseGoldSecondary-${uniqueId}`} x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8A5A44" />
              <stop offset="50%" stopColor="#B76E79" />
              <stop offset="100%" stopColor="#4A2A20" />
            </linearGradient>
            <filter id={`softGlow-${uniqueId}`} x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Ring representing Luxury Premium House Border */}
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke={`url(#roseGold-${uniqueId})`}
            strokeWidth="1.2"
            strokeDasharray="180 8 2 8"
            className="group-hover:rotate-12 transition-transform duration-1000 origin-center"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke={`url(#roseGold-${uniqueId})`}
            strokeWidth="0.6"
            strokeOpacity="0.4"
          />

          {/* Sparkle Stars representing Prestige Global Identity */}
          <path d="M50 8L51 13L56 14L51 15L50 20L49 15L44 14L49 13L50 8Z" fill={`url(#roseGold-${uniqueId})`} />
          <path d="M14 50L15 53L18 54L15 55L14 58L13 55L10 54L13 53L14 50Z" fill={`url(#roseGold-${uniqueId})`} opacity="0.7" />

          {/* Elegant Serif Letter "E" with Shoe Silhouette integrated inside the middle-to-bottom bar */}
          <g filter={`url(#softGlow-${uniqueId})`}>
            
            {/* The Back Spine of E */}
            <path
              d="M33 26 H42 V29 M37 28 V72 H42 V75 H33 V72 H35 V28 H33 Z"
              fill={`url(#roseGold-${uniqueId})`}
            />

            {/* Top Serif Arm of E */}
            <path
              d="M38 28 H58 V35 H55 C54 31 51 29 45 29 H37 Z"
              fill={`url(#roseGold-${uniqueId})`}
            />

            {/* Bottom Swoop of E - Seamlessly merging into a Stiletto Shoe Sole Silhouette */}
            <path
              d="M36 71 C36 71, 40 68, 44 68 C49 68, 55 70, 58 72 C62 73.5, 66 70.5, 68 67 C69.5 64.5, 71 58, 71.5 54 L72.8 54.5 C72 61, 70 68, 66 72.5 C61.5 76.5, 50 75.5, 45 74 C42.5 73, 37 72, 35 72 Z"
              fill={`url(#roseGold-${uniqueId})`}
            />

            {/* Integrated Stiletto Heel Pin dropping from the E's middle sector */}
            <path
              d="M49 48 C49.5 48, 50 51, 50.3 54 L51 68 C51.2 71.5, 48.5 72, 48 72 C47.5 72, 47 71.5, 47.2 68 L48 54 C48.5 51, 48.5 48, 49 48 Z"
              fill={`url(#roseGold-${uniqueId})`}
            />

            {/* Elegant Serif Letter "H" - Linked and interlacing behind/front of E */}
            <path
              d="M52 30 H55 V27 H62 V30 H60 V44 H70 V30 H68 V27 H75 V30 H73 V72 H75 V75 H68 V72 H70 V49 H60 V72 H62 V75 H55 V72 H57 V44 H52 V49 Z"
              fill={`url(#roseGoldSecondary-${uniqueId})`}
              opacity="0.95"
            />
          </g>

          {/* Tiny accent bow at the heel connection representing feminine grace */}
          <path 
            d="M 49 48 C 47.5 46.5, 46 48.5, 49 48.5 C 52 48.5, 50.5 46.5, 49 48 Z" 
            stroke={`url(#roseGold-${uniqueId})`} 
            strokeWidth="0.8" 
            fill="none" 
          />
        </svg>

        {/* Outer revolving sparkle decoration on hover */}
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-rose rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-700 animate-ping" />
      </div>

      {variant !== 'iconOnly' && (
        <div className="flex flex-col justify-center leading-none">
          <span 
            className={`font-serif ${textSize} tracking-[0.22em] font-light uppercase ${textColor} transition-colors duration-300`}
            style={{ fontFamily: '"Inter", "Playfair Display", serif' }}
          >
            ÉLAN HEIGHTS
          </span>
          <span className={`tracking-[0.45em] uppercase ${taglineColor} mt-1 font-sans font-semibold ${taglineSize}`}>
            MILANO • LUXURY • BRIDAL
          </span>
        </div>
      )}

    </div>
  );
}
