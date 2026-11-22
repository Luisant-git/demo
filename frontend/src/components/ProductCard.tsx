import React from 'react';
import { Heart } from 'lucide-react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { 
    toggleWishlist, 
    isInWishlist, 
    openProductDetail 
  } = useShop();

  const isWished = isInWishlist(product.id);

  return (
    <div 
      onClick={() => openProductDetail(product)}
      className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 flex flex-col justify-between relative group p-2 sm:p-3 cursor-pointer select-none h-full"
    >
      
      {/* Top Left Optional Ribbon Badge (Exact Reliance Digital Style) */}
      {product.badge && (
        <div className="absolute top-0 left-0 z-10 overflow-hidden rounded-tl-xl sm:rounded-tl-2xl">
          <span className="bg-[#01b6ae] text-white text-[9px] sm:text-[10px] font-extrabold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-br-2xl shadow-xs uppercase tracking-wider inline-block select-none leading-tight">
            {product.badge}
          </span>
        </div>
      )}

      {/* Top Right Wishlist Heart */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleWishlist(product.id);
        }}
        className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 z-10 p-1 text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
        title={isWished ? 'Remove from Wishlist' : 'Add to Wishlist'}
        aria-label="Wishlist"
      >
        <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:scale-110 ${isWished ? 'fill-[#e42529] text-[#e42529]' : 'stroke-[1.5]'}`} />
      </button>

      {/* Product Image Area - Responsive Height */}
      <div className="w-full h-32 sm:h-44 flex items-center justify-center p-1 sm:p-2 mt-1 sm:mt-2">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Product Short Contents Area (Exact Reliance Digital Style) */}
      <div className="pt-1 sm:pt-2 px-0.5 sm:px-1 pb-0.5 sm:pb-1 flex flex-col justify-between flex-1">
        
        {/* Title: 2 Lines Max */}
        <h3 
          className="text-[11px] sm:text-xs font-normal text-gray-800 line-clamp-2 leading-snug sm:leading-relaxed hover:text-[#e42529] transition-colors h-7 sm:h-9"
          title={product.name}
        >
          {product.name}
        </h3>

        {/* Pricing Block */}
        <div className="mt-2 sm:mt-3 pt-1">
          <div className="flex items-baseline flex-wrap gap-1 sm:gap-1.5">
            <span className="text-xs sm:text-base font-bold text-gray-950">
              ₹{product.price.toLocaleString('en-IN')}.00
            </span>
            {product.discountPercent > 0 && (
              <span className="text-[10px] sm:text-xs font-bold text-emerald-600">
                {product.discountPercent}% OFF
              </span>
            )}
          </div>

          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-gray-400 mt-0.5">
            <div className="truncate pr-1">
              <span>MRP </span>
              <span className="line-through">₹{product.mrp.toLocaleString('en-IN')}</span>
            </div>
            {product.inStock ? (
              <span className="text-[9px] sm:text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-1 sm:px-1.5 py-0.2 rounded flex-shrink-0">
                In Stock
              </span>
            ) : (
              <span className="text-[9px] sm:text-[10px] font-bold text-red-600 bg-red-50 border border-red-200/60 px-1 sm:px-1.5 py-0.2 rounded flex-shrink-0">
                Out of Stock
              </span>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
