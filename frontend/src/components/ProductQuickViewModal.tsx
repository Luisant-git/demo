import React, { useState } from 'react';
import { 
  X, 
  Star, 
  ShoppingCart, 
  Zap, 
  ShieldCheck, 
  RotateCcw, 
  CreditCard, 
  Check, 
  MapPin
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const ProductQuickViewModal: React.FC = () => {
  const { 
    activeQuickViewProduct, 
    closeQuickView, 
    addToCart, 
    pincodeInfo, 
    setIsPincodeModalOpen,
    addToCompare,
    isInCompare,
    removeFromCompare,
    setIsCheckoutOpen
  } = useShop();

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!activeQuickViewProduct) return null;

  const product = activeQuickViewProduct;
  const allImages = [product.image, ...(product.additionalImages || [])];
  const isCompared = isInCompare(product.id);
  const savings = product.mrp - product.price;

  const handleBuyNow = () => {
    addToCart(product, 1);
    closeQuickView();
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden border border-gray-100 relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="px-6 py-4 bg-gray-50/70 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              {product.brand}
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-xs font-semibold text-[#e42529]">
              {product.subcategory}
            </span>
          </div>

          <button
            onClick={closeQuickView}
            className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left: Image Gallery */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="w-full h-64 sm:h-72 bg-white rounded-2xl border border-gray-100 p-4 flex items-center justify-center relative shadow-sm">
              <img
                src={allImages[activeImageIndex]}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
              {product.badge && (
                <div className="absolute top-0 left-0 z-10 overflow-hidden rounded-tl-2xl">
                  <span className="bg-[#01b6ae] text-white text-[10px] sm:text-[11px] font-extrabold px-3 sm:px-3.5 py-1 rounded-br-2xl shadow-xs uppercase tracking-wider inline-block select-none leading-tight">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail list */}
            {allImages.length > 1 && (
              <div className="flex space-x-2 mt-3.5">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-14 h-14 rounded-xl border-2 p-1 bg-white cursor-pointer transition-all ${
                      activeImageIndex === idx ? 'border-[#e42529] shadow-sm' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}

            {/* Compare Checkbox */}
            <div className="mt-4 w-full flex items-center justify-center bg-gray-50 py-2.5 rounded-xl border border-gray-100">
              <label className="flex items-center space-x-2 text-xs font-semibold text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isCompared}
                  onChange={() => {
                    if (isCompared) {
                      removeFromCompare(product.id);
                    } else {
                      addToCompare(product);
                    }
                  }}
                  className="rounded text-[#e42529] focus:ring-0"
                />
                <span>Add to Side-by-Side Comparison</span>
              </label>
            </div>
          </div>

          {/* Right: Details & Pricing */}
          <div className="md:col-span-7 space-y-4">
            
            {/* Title & Rating */}
            <div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                {product.name}
              </h2>

              <div className="flex items-center space-x-3 mt-2">
                <div className="flex items-center space-x-1 bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md font-bold text-xs border border-emerald-200">
                  <span>{product.rating}</span>
                  <Star className="w-3 h-3 fill-emerald-600 text-emerald-600" />
                </div>
                <span className="text-xs text-gray-500">
                  {product.ratingCount} Customer Ratings
                </span>
                <span className="text-xs text-emerald-700 font-bold flex items-center">
                  <Check className="w-3.5 h-3.5 mr-0.5" /> In Stock
                </span>
              </div>
            </div>

            {/* Price Box - Clean Dark Charcoal Price */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
              <div className="flex items-baseline space-x-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ₹{product.mrp.toLocaleString('en-IN')}
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                  {product.discountPercent}% OFF
                </span>
              </div>
              <div className="text-xs font-semibold text-emerald-800 mt-1">
                You Save: ₹{savings.toLocaleString('en-IN')} (Inclusive of all taxes)
              </div>
              <div className="text-xs text-gray-500 mt-1 flex items-center space-x-1">
                <CreditCard className="w-3.5 h-3.5 text-gray-400" />
                <span>
                  No Cost EMI starts from <strong className="text-gray-800">₹{product.emiStartsAt.toLocaleString('en-IN')}/month</strong>
                </span>
              </div>
            </div>

            {/* Bank Offers */}
            {product.bankOffers && (
              <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200/80 text-xs space-y-1">
                <div className="font-bold text-amber-900 flex items-center">
                  <Zap className="w-3.5 h-3.5 mr-1 text-amber-600 fill-amber-600" />
                  Bank & Exchange Offers:
                </div>
                {product.bankOffers.map((off, idx) => (
                  <div key={idx} className="text-gray-700 flex items-start space-x-1.5 pl-1">
                    <span className="text-[#e42529] font-bold">•</span>
                    <span>{off}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Delivery Info */}
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#e42529]" />
                <div>
                  <span className="text-gray-600">Doorstep Delivery: </span>
                  <span className="text-[11px] text-emerald-700 font-semibold">
                    ⚡ Fast Express & Standard Delivery Available
                  </span>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                Key Features
              </h4>
              <ul className="space-y-1 text-xs text-gray-700">
                {product.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e42529] mt-1.5 flex-shrink-0"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specifications */}
            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                Technical Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {Object.entries(product.specs).map(([key, val], idx) => (
                  <div key={idx} className="bg-gray-50 p-2.5 rounded-xl border border-gray-100 flex flex-col">
                    <span className="text-gray-400 text-[10px] uppercase font-bold">{key}</span>
                    <span className="font-semibold text-gray-800">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Warranty */}
            <div className="flex items-center space-x-2 text-xs text-gray-600 bg-gray-50 p-2.5 rounded-xl border border-gray-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span><strong>Warranty:</strong> {product.warranty}</span>
            </div>

          </div>

        </div>

        {/* Modal Action Bar */}
        <div className="px-6 py-4 bg-gray-50/80 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <span className="flex items-center">
              <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1" />
              100% Genuine
            </span>
            <span className="flex items-center">
              <RotateCcw className="w-4 h-4 text-emerald-600 mr-1" />
              7 Days Return
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                addToCart(product, 1);
                closeQuickView();
              }}
              className="bg-[#111827] hover:bg-[#1f2937] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center space-x-1.5 cursor-pointer shadow-md"
            >
              <ShoppingCart className="w-4 h-4 text-white" />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={handleBuyNow}
              className="bg-[#e42529] hover:bg-[#c01519] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow transition-all cursor-pointer"
            >
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
