import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, Heart, Star, Sparkles, Check } from 'lucide-react';
import { Product, Color } from '../types';
import { getColorTintStyle } from './ProductDetailModal';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product, preselectedColor?: Color) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onQuickAdd: (product: Product, preselectedColor?: Color) => void;
  key?: string;
}

export default function ProductCard({
  product,
  onOpenDetails,
  isWishlisted,
  onToggleWishlist,
  onQuickAdd
}: ProductCardProps): React.JSX.Element {
  const [selectedColor, setSelectedColor] = useState<Color>(product.colors[0]);
  
  // Custom segment badges
  const getSegmentStyles = (segment: Product['segment']) => {
    switch (segment) {
      case 'Designer Collections':
        return {
          bg: 'bg-brand-clay border border-brand-border text-brand-rose',
          label: 'Editorial Couture',
          accent: 'border-brand-border shadow-none'
        };
      case 'Luxury':
        return {
          bg: 'bg-brand-clay/70 border border-brand-border text-brand-rose',
          label: 'La Collection Luxury',
          accent: 'border-brand-border'
        };
      case 'Premium':
        return {
          bg: 'bg-[#FDFBF7] border border-brand-border text-gray-800',
          label: 'Premium Craft',
          accent: 'border-brand-border'
        };
      case 'Mid-Range':
        return {
          bg: 'bg-brand-clay/30 border border-brand-border text-gray-700',
          label: 'Mid-Range',
          accent: 'border-brand-border'
        };
      default:
        return {
          bg: 'bg-brand-champagne border border-brand-border text-gray-600',
          label: 'Essentials',
          accent: 'border-transparent'
        };
    }
  };

  const segmentConfig = getSegmentStyles(product.segment);

  return (
    <div
      id={`product-card-${product.id}`}
      className="group relative bg-white rounded-none overflow-hidden border border-brand-border hover:border-brand-rose transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(183,110,121,0.08)]"
      onClick={() => onOpenDetails(product, selectedColor)}
    >
      
      {/* Product Image Stage */}
      <div className="relative aspect-square bg-[#F9F4F0] overflow-hidden">
        
        {/* Hover preview image zoom */}
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-104 transition-all duration-700 eased-out"
        />

        {/* Dynamic high-fidelity product colorist tinting overlay for live shoe recasts */}
        {selectedColor && (() => {
          const tint = getColorTintStyle(selectedColor.hex);
          return (
            <>
              <div
                className="absolute inset-0 pointer-events-none mix-blend-color transition-all duration-500 ease-out"
                style={{
                  backgroundColor: selectedColor.hex,
                  opacity: tint.colorOpacity
                }}
              />
              {tint.multiplyOpacity > 0 && (
                <div
                  className="absolute inset-0 pointer-events-none mix-blend-multiply transition-all duration-500 ease-out"
                  style={{
                    backgroundColor: '#000000',
                    opacity: tint.multiplyOpacity
                  }}
                />
              )}
              {tint.lightenOpacity > 0 && (
                <div
                  className="absolute inset-0 pointer-events-none mix-blend-screen transition-all duration-500 ease-out"
                  style={{
                    backgroundColor: '#ffffff',
                    opacity: tint.lightenOpacity
                  }}
                />
              )}
            </>
          );
        })()}

        {/* Glossy Overlay effect */}
        <div className="absolute inset-0 bg-transparent group-hover:bg-[#B76E79]/5 transition-all duration-300" />

        {/* Tags absolute positions */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.isNew && (
            <span className="bg-brand-rose text-white text-[8px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-none shadow-none">
              New In
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-gray-950 text-white text-[8px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-none shadow-none">
              Bestseller
            </span>
          )}
          <span className={`text-[8px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-none ${segmentConfig.bg}`}>
            {segmentConfig.label}
          </span>
        </div>

        {/* Wishlist Button absolute position */}
        <button
          id={`wishlist-btn-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          className="absolute top-3 right-3 z-10 p-2 rounded-none bg-[#FDFBF7] border border-brand-border shadow-none hover:bg-white text-gray-500 hover:text-brand-rose transition-all"
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-brand-rose text-brand-rose' : ''}`} />
        </button>

        {/* Hover quick preview button bars */}
        <div className="absolute inset-x-0 bottom-0 flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
          <div className="grid grid-cols-2 w-full">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetails(product, selectedColor);
              }}
              className="pointer-events-auto flex items-center justify-center gap-1.5 bg-[#FDFBF7] border-t border-r border-brand-border text-gray-950 font-sans text-[9px] uppercase tracking-widest py-3 hover:bg-brand-clay transition-all font-medium"
            >
              <Eye className="w-3 h-3 text-brand-rose" />
              <span>Preview</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickAdd(product, selectedColor);
              }}
              className="pointer-events-auto flex items-center justify-center gap-1.5 bg-gray-950 text-white border-t border-brand-border font-sans text-[9px] uppercase tracking-widest py-3 hover:bg-gray-800 transition-all font-medium"
            >
              <span>+ Add Bag</span>
            </button>
          </div>
        </div>

      </div>

      {/* Product Information Body */}
      <div className="p-4 flex flex-col justify-between h-[155px] border-t border-brand-border text-left">
        
        <div className="space-y-1">
          {/* Sizing description / group & Category */}
          <div className="flex justify-between items-center text-[9px] uppercase tracking-[0.15em] text-gray-500 font-sans">
            <span className="font-medium text-brand-rose">
              {product.category}
            </span>
            <span className="font-light">
              Age: {product.ageGroup}
            </span>
          </div>

          {/* Product Title */}
          <h3
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(product, selectedColor);
            }}
            className="font-serif text-[16px] font-light italic text-gray-950 group-hover:text-brand-rose transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Micro details: material / heel height */}
          <div className="flex justify-between items-center gap-2">
            <p className="text-[10px] text-gray-400 font-sans tracking-wide leading-relaxed font-light truncate flex-1">
              {product.material} {product.heelHeight ? `• ${product.heelHeight} heel` : ''}
            </p>
            
            {/* Real-time Atelier Color Swatches */}
            <div className="flex gap-1 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
              {product.colors.map((color) => {
                const isSelected = selectedColor.name === color.name;
                return (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-3 h-3 rounded-none border transition-all cursor-pointer ${
                      isSelected ? 'ring-1 ring-brand-rose scale-110' : 'border-gray-300 opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {isSelected && (
                      <span className="block w-0.5 h-0.5 bg-white mx-auto" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end pt-2 border-t border-brand-border/40">
          {/* Price Tag with Segment decoration */}
          <div className="flex flex-col">
            <span className="font-serif text-[17px] font-light text-gray-950">
              ₹{product.price ? product.price.toLocaleString('en-IN') : ''}
            </span>
          </div>

          {/* Star rating */}
          <div className="flex items-center gap-1 bg-brand-clay/40 px-2 py-0.5 rounded-none border border-brand-border">
            <Star className="w-2.5 h-2.5 fill-brand-rose text-brand-rose" />
            <span className="font-sans font-medium text-[10px] text-gray-850">{product.rating}</span>
            <span className="font-sans text-[9px] text-gray-400">({product.reviewsCount})</span>
          </div>
        </div>

      </div>

    </div>
  );
}
