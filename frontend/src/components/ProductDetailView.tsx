import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronRight, 
  ChevronUp, 
  ChevronDown, 
  Heart, 
  Share2, 
  RotateCcw, 
  ShieldCheck, 
  Truck, 
  MapPin, 
  Plus, 
  Check, 
  ChevronLeft, 
  ChevronDown as ChevronDownIcon,
  Tag,
  Star,
  CheckCircle2,
  Cpu,
  HardDrive,
  Monitor,
  Zap
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS_DATA } from '../data/products';
import { ProductCard } from './ProductCard';

export const ProductDetailView: React.FC = () => {
  const { 
    selectedProduct, 
    setViewMode, 
    setSelectedCategory,
    addToCart, 
    toggleWishlist, 
    isInWishlist,
    addToCompare,
    removeFromCompare,
    isInCompare,
    setIsStoreLocatorOpen,
    setIsCheckoutOpen,
    pincodeInfo,
    setPincode
  } = useShop();

  // If no product selected, fallback to the first laptop (Acer AL14)
  const product = selectedProduct || PRODUCTS_DATA[0];

  // Always scroll to top of page when viewing product details
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [product.id]);

  const allImages = [
    product.image,
    ...(product.additionalImages || [])
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isOffersOpen, setIsOffersOpen] = useState(true);
  const [pinInput, setPinInput] = useState(pincodeInfo.pincode);
  const [pinSuccess, setPinSuccess] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);

  const similarSliderRef = useRef<HTMLDivElement>(null);

  const isWished = isInWishlist(product.id);
  const isCompared = isInCompare(product.id);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.length === 6) {
      const ok = setPincode(pinInput);
      setPinSuccess(ok);
    }
  };

  const handleBuyNow = () => {
    addToCart(product, 1);
    setIsCheckoutOpen(true);
  };

  const scrollSimilar = (direction: 'left' | 'right') => {
    if (similarSliderRef.current) {
      const offset = direction === 'left' ? -280 : 280;
      similarSliderRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const scrollToSimilar = () => {
    document.getElementById('similar-products-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const similarProducts = PRODUCTS_DATA.filter(p => p.id !== product.id && p.category === product.category);

  // Best Price Offer calculation (extra 5% or flat 3250 off)
  const bestPrice = Math.round(product.price * 0.95);
  const emiPerMonth = Math.round((product.price / 6) * 100) / 100;

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-3 sm:py-4 pb-28 sm:pb-6 text-gray-900">
      <div className="max-w-[1360px] mx-auto px-3 sm:px-6">
        
        {/* 1. Breadcrumb Bar (Matching Screenshot) */}
        <nav className="flex items-center space-x-1.5 text-xs text-blue-700 font-medium mb-4 overflow-x-auto no-scrollbar py-1">
          <button 
            onClick={() => setViewMode('home')}
            className="hover:underline hover:text-[#e42529] transition-colors whitespace-nowrap cursor-pointer"
          >
            Home Page
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          <button 
            onClick={() => {
              setSelectedCategory(product.category || 'all');
              setViewMode('catalog');
            }}
            className="hover:underline hover:text-[#e42529] transition-colors whitespace-nowrap cursor-pointer capitalize"
          >
            {product.subcategory || product.category || 'Products'}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          <span className="text-gray-600 truncate max-w-xs sm:max-w-md font-normal">
            {product.name}
          </span>
        </nav>

        {/* 2. Main Two-Column Showcase Area */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xs p-3.5 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ================= LEFT COLUMN: Image Gallery & Badges (5 cols) ================= */}
          <div className="lg:col-span-5 flex flex-col items-center w-full">
            
            {/* Gallery: Vertical Thumbnails + Main View */}
            <div className="flex flex-col sm:flex-row items-center w-full gap-3 sm:gap-4">
              
              {/* Vertical Thumbnail Strip (Sub-images) */}
              <div className="flex sm:flex-col items-center justify-center space-x-2 sm:space-x-0 sm:space-y-2 order-2 sm:order-1 flex-shrink-0 w-full sm:w-auto py-1">
                <button
                  onClick={() => setActiveImageIndex(prev => (prev > 0 ? prev - 1 : allImages.length - 1))}
                  className="hidden sm:flex w-7 h-7 rounded-full items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>

                <div className="flex sm:flex-col items-center justify-center space-x-2 sm:space-x-0 sm:space-y-2 max-h-[380px] max-w-full overflow-x-auto sm:overflow-y-auto no-scrollbar py-1">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-14 h-14 sm:w-16 sm:h-16 min-w-[56px] min-h-[56px] rounded-xl border-2 p-1 bg-white cursor-pointer transition-all flex items-center justify-center overflow-hidden flex-shrink-0 ${
                        activeImageIndex === idx
                          ? 'border-[#0070bb] shadow-sm ring-1 ring-[#0070bb]/20'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`Sub image ${idx + 1}`} 
                        className="w-full h-full object-contain pointer-events-none" 
                      />
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setActiveImageIndex(prev => (prev < allImages.length - 1 ? prev + 1 : 0))}
                  className="hidden sm:flex w-7 h-7 rounded-full items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Main Preview Box */}
              <div className="flex-1 w-full h-[280px] sm:h-[360px] md:h-[420px] bg-white rounded-2xl border border-gray-100 p-3 sm:p-4 relative flex items-center justify-center order-1 sm:order-2 group select-none overflow-hidden">
                
                {/* Top-Left Exact Reliance Digital Badge */}
                {product.badge && (
                  <div className="absolute top-0 left-0 z-10 overflow-hidden rounded-tl-2xl">
                    <span className="bg-[#01b6ae] text-white text-[10px] sm:text-[11px] font-extrabold px-3.5 py-1 rounded-br-2xl uppercase tracking-wider inline-block select-none shadow-xs leading-tight">
                      {product.badge}
                    </span>
                  </div>
                )}
                
                {/* Floating Action Icons: Wishlist & Share */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2 z-10">
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs border border-gray-200/90 shadow-sm flex items-center justify-center text-gray-500 hover:text-[#e42529] transition-all cursor-pointer hover:shadow-md"
                    title={isWished ? 'Remove from Wishlist' : 'Add to Wishlist'}
                  >
                    <Heart className={`w-4 h-4 ${isWished ? 'fill-[#e42529] text-[#e42529]' : 'stroke-[1.75]'}`} />
                  </button>

                  <button
                    onClick={handleShare}
                    className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs border border-gray-200/90 shadow-sm flex items-center justify-center text-gray-500 hover:text-blue-600 transition-all cursor-pointer hover:shadow-md relative"
                    title="Share Product"
                  >
                    <Share2 className="w-4 h-4 stroke-[1.75]" />
                    {copiedLink && (
                      <span className="absolute -left-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md whitespace-nowrap">
                        Link Copied!
                      </span>
                    )}
                  </button>
                </div>

                {/* Main Product Image */}
                <img
                  src={allImages[activeImageIndex]}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain mx-auto transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                />
              </div>

            </div>

            {/* Bottom Trust Badges Strip (Exact Reliance Digital Style) */}
            <div className="w-full mt-4 sm:mt-5 bg-[#f0f5fa] border border-blue-100/70 rounded-2xl p-2.5 sm:p-3.5 grid grid-cols-3 gap-1 sm:flex sm:items-center sm:justify-around text-[10px] sm:text-xs font-semibold text-gray-700 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-1.5 cursor-pointer hover:text-blue-700 transition-colors">
                <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                <span className="leading-tight">Read Return Policy</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-gray-300" />
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-1.5 border-x border-gray-200 sm:border-x-0 px-1">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                <span className="leading-tight">Manufacturer Warranty 1 Year</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-gray-300" />
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-1.5">
                <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                <span className="leading-tight">Free Shipping</span>
              </div>
            </div>

          </div>


          {/* ================= RIGHT COLUMN: Commerce, Specs & Offers (7 cols) ================= */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Stock Alert Bar */}
            {product.inStock ? (
              <div className="bg-[#e8f5e9] border border-green-200/90 rounded-2xl p-3 sm:px-3.5 sm:py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-2 text-xs font-medium text-emerald-900 shadow-2xs">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:space-x-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse inline-block flex-shrink-0" />
                    <span className="font-extrabold text-emerald-950 text-xs sm:text-sm">In Stock Online</span>
                    <span className="text-gray-300 hidden sm:inline">|</span>
                  </div>
                  <span className="text-emerald-800 text-[11px] sm:text-xs font-normal">
                    Ready for immediate dispatch & store pickup
                  </span>
                </div>
                <button
                  onClick={() => setIsStoreLocatorOpen(true)}
                  className="inline-flex items-center justify-center space-x-1 border border-emerald-400 bg-white text-emerald-800 hover:bg-emerald-50 font-bold px-3 py-1.5 sm:py-1 rounded-full text-[11px] shadow-2xs whitespace-nowrap cursor-pointer transition-colors w-full sm:w-auto self-start sm:self-auto"
                >
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Check Store Stock</span>
                </button>
              </div>
            ) : (
              <div className="bg-[#ffebee] border border-red-100 rounded-2xl p-3 sm:px-3.5 sm:py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-medium text-red-700">
                <span className="truncate pr-2">
                  Currently unavailable online. Visit nearest store.
                </span>
                <button
                  onClick={() => setIsStoreLocatorOpen(true)}
                  className="inline-flex items-center justify-center space-x-1 border border-red-400 bg-white text-red-600 hover:bg-red-50 font-bold px-3 py-1.5 sm:py-1 rounded-full text-[11px] shadow-2xs whitespace-nowrap cursor-pointer transition-colors w-full sm:w-auto"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-600" />
                  <span>Store Locator</span>
                </button>
              </div>
            )}

            {/* Badge & Compare Header (Reliance Digital Exact Teal Badge) */}
            <div className="flex items-center justify-between gap-2">
              <div className="inline-block">
                <span className="bg-[#01b6ae] text-white text-[10px] sm:text-[11px] font-extrabold px-3 sm:px-3.5 py-1 rounded-tl-lg rounded-br-2xl shadow-xs uppercase tracking-wider inline-flex items-center select-none leading-tight">
                  {product.badge || 'NEW LAUNCH'}
                </span>
              </div>

              <button
                onClick={() => isCompared ? removeFromCompare(product.id) : addToCompare(product)}
                className={`inline-flex items-center space-x-1 text-xs font-bold transition-colors cursor-pointer ${
                  isCompared ? 'text-emerald-600' : 'text-blue-700 hover:text-blue-900'
                }`}
              >
                {isCompared ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Added to Compare</span>
                  </>
                ) : (
                  <>
                    <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                      +
                    </span>
                    <span>Compare</span>
                  </>
                )}
              </button>
            </div>

            {/* Product Full Title */}
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-950 leading-snug">
              {product.name}
            </h1>

            {/* Pricing Section (Exact Reliance Digital Style) */}
            <div className="space-y-1 pt-1">
              <div className="flex items-baseline space-x-2">
                <span className="text-xs font-semibold text-gray-500">Deal Price</span>
                <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-950">
                  ₹{product.price.toLocaleString('en-IN')}.00
                </span>
              </div>

              <div className="flex items-baseline space-x-2 text-xs text-gray-500">
                <span>Offer Price </span>
                <span className="line-through">
                  ₹{(product.price + 1009).toLocaleString('en-IN')}.00
                </span>
              </div>

              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-xs">
                <span className="text-gray-400">MRP </span>
                <span className="line-through text-gray-400">
                  ₹{product.mrp.toLocaleString('en-IN')}.00
                </span>
                <span className="text-gray-400 font-normal">(inclusive of all taxes)</span>
                {product.discountPercent > 0 && (
                  <span className="font-extrabold text-emerald-600 text-xs sm:text-sm ml-1">
                    {product.discountPercent}% OFF
                  </span>
                )}
              </div>
            </div>

            {/* No Cost EMI Callout */}
            <div className="bg-[#e8f5e9] border border-green-200/70 rounded-xl px-3.5 py-2 text-[11px] sm:text-xs font-bold text-green-900 inline-block w-full">
              No Cost EMI Available from ₹{emiPerMonth.toLocaleString('en-IN')} /- per month.
            </div>

            {/* Action Buttons: Similar Products + Add to Cart + Buy Now */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:space-x-3 pt-2">
              <button
                onClick={scrollToSimilar}
                className="w-full sm:flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl sm:rounded-full border border-gray-300 hover:border-gray-400 text-gray-800 text-xs sm:text-sm font-bold bg-white transition-all shadow-2xs hover:bg-gray-50 cursor-pointer text-center"
              >
                Similar Products
              </button>

              <div className="flex items-center space-x-2 w-full sm:flex-1">
                <button
                  onClick={() => addToCart(product, 1)}
                  className="flex-1 py-3 sm:py-3.5 px-3 sm:px-4 rounded-xl sm:rounded-full bg-[#111827] hover:bg-[#1f2937] active:scale-95 text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer text-center"
                >
                  {product.inStock ? 'Add to Cart' : 'Notify Me'}
                </button>

                <button
                  onClick={handleBuyNow}
                  disabled={!product.inStock}
                  className={`flex-1 py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl sm:rounded-full text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer text-center whitespace-nowrap ${
                    product.inStock 
                      ? 'bg-[#e42529] hover:bg-[#c01519] active:scale-95' 
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  Buy Now
                </button>
              </div>
            </div>

            {/* Best Price & Payment Offers Accordion (Commented out per user request) */}
            {/*
            <div className="border border-purple-200/70 rounded-2xl overflow-hidden shadow-2xs mt-4">
              
              <div 
                onClick={() => setIsOffersOpen(!isOffersOpen)}
                className="bg-gradient-to-r from-purple-50 via-pink-50 to-white px-4 py-3 flex items-center justify-between cursor-pointer border-b border-purple-100/60 select-none"
              >
                <div className="flex items-center space-x-2">
                  <span className="bg-[#e42529] text-white text-[9px] font-black px-2 py-0.5 rounded shadow-2xs uppercase">
                    BEST DEAL
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-emerald-800">
                    ₹{bestPrice.toLocaleString('en-IN')}.00
                  </span>
                  <span className="text-xs text-gray-600 font-medium">with all applicable Offers</span>
                </div>
                <ChevronDownIcon className={`w-4 h-4 text-gray-500 transition-transform ${isOffersOpen ? 'rotate-180' : ''}`} />
              </div>

              {isOffersOpen && (
                <div className="p-4 bg-white space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-800 flex items-center space-x-1.5">
                      <Tag className="w-3.5 h-3.5 text-[#e42529]" />
                      <span>Payment Offers</span>
                    </span>
                    <button className="text-xs text-blue-700 font-bold hover:underline cursor-pointer">
                      View All
                    </button>
                  </div>

                  <div className="flex space-x-3 overflow-x-auto no-scrollbar py-1">
                    
                    <div className="min-w-[210px] p-3 rounded-xl border border-purple-300 bg-purple-50/20 relative flex flex-col justify-between">
                      <span className="absolute -top-2 left-3 bg-[#e42529] text-white text-[8px] font-bold px-1.5 py-0.2 rounded uppercase">
                        Best Deal
                      </span>
                      <div>
                        <div className="text-xs font-bold text-gray-950 mt-1">
                          ₹{emiPerMonth.toLocaleString('en-IN')}/6m
                        </div>
                        <div className="text-[11px] font-semibold text-gray-700 mt-1">
                          HDFC BANK CREDIT CARD - No Cost EMI
                        </div>
                      </div>
                      <div className="mt-2 pt-1 border-t border-purple-100 text-[10px] text-gray-500 font-medium">
                        Effective Price: <strong className="text-gray-900">₹{product.price.toLocaleString('en-IN')}.00</strong>
                      </div>
                    </div>

                    <div className="min-w-[210px] p-3 rounded-xl border border-gray-200 bg-white relative flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-bold text-gray-950">
                          ₹{emiPerMonth.toLocaleString('en-IN')}/6m
                        </div>
                        <div className="text-[11px] font-semibold text-gray-700 mt-1">
                          SBI BANK CREDIT CARD - No Cost EMI
                        </div>
                      </div>
                      <div className="mt-2 pt-1 border-t border-gray-100 text-[10px] text-gray-500 font-medium">
                        Effective Price: <strong className="text-gray-900">₹{product.price.toLocaleString('en-IN')}.00</strong>
                      </div>
                    </div>

                    <div className="min-w-[210px] p-3 rounded-xl border border-gray-200 bg-white relative flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-bold text-gray-950">
                          ₹{emiPerMonth.toLocaleString('en-IN')}/6m
                        </div>
                        <div className="text-[11px] font-semibold text-gray-700 mt-1">
                          ICICI BANK CREDIT CARD - No Cost EMI
                        </div>
                      </div>
                      <div className="mt-2 pt-1 border-t border-gray-100 text-[10px] text-gray-500 font-medium">
                        Effective Price: <strong className="text-gray-900">₹{product.price.toLocaleString('en-IN')}.00</strong>
                      </div>
                    </div>

                  </div>
                </div>
              )}

            </div>
            */}

            {/* Pincode & Delivery Availability Checker */}
            <div className="pt-2">
              <form onSubmit={handleCheckPincode} className="bg-gray-50/80 rounded-2xl p-3 sm:p-3.5 border border-gray-200/70 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-gray-800 gap-1">
                  <div className="flex items-center space-x-1.5">
                    <MapPin className="w-4 h-4 text-[#e42529] flex-shrink-0" />
                    <span>Delivery Options & Pincode Availability</span>
                  </div>
                  <span className="text-[11px] font-normal text-gray-500">
                    Delivering to: <strong className="text-gray-800">{pincodeInfo.city}, {pincodeInfo.state}</strong>
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    maxLength={6}
                    value={pinInput}
                    onChange={(e) => setPinInput(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter 6-digit Pincode"
                    className="bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs text-gray-800 font-mono outline-none focus:border-[#e42529] flex-1"
                  />
                  <button
                    type="submit"
                    className="bg-[#002b5e] hover:bg-[#001e42] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
                  >
                    Check
                  </button>
                </div>

                {pinSuccess && (
                  <div className="flex items-start sm:items-center space-x-2 text-[11px] text-emerald-700 font-semibold pt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span className="leading-tight">
                      Standard Delivery in {pincodeInfo.standardDays} Day{pincodeInfo.standardDays > 1 ? 's' : ''} (Free) • 
                      {pincodeInfo.isExpressAvailable ? ' ⚡ Express Same-Day Eligible' : ' Doorstep ResQ Setup Included'}
                    </span>
                  </div>
                )}
              </form>
            </div>

          </div>

        </div>


        {/* 3. Detailed Specifications & Key Features Tabs */}
        <div className="mt-8 bg-white rounded-3xl border border-gray-200/80 shadow-xs p-5 sm:p-8">
          
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-3 mb-6">
            Key Features & Technical Specifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Key Features Bullet Cards (5 cols) */}
            <div className="md:col-span-5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                Highlights at a Glance
              </h3>

              {product.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3 rounded-2xl bg-slate-50/70 border border-slate-100">
                  <div className="w-6 h-6 rounded-lg bg-red-100 text-[#e42529] flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx === 0 ? <Cpu className="w-3.5 h-3.5" /> :
                     idx === 1 ? <Monitor className="w-3.5 h-3.5" /> :
                     idx === 2 ? <Zap className="w-3.5 h-3.5" /> :
                     idx === 3 ? <HardDrive className="w-3.5 h-3.5" /> :
                     <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                  <p className="text-xs font-medium text-gray-700 leading-relaxed">
                    {feat}
                  </p>
                </div>
              ))}
            </div>

            {/* Full Technical Specifications Table (7 cols) */}
            <div className="md:col-span-7">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                Full Technical Specifications
              </h3>

              <div className="border border-gray-200/90 rounded-2xl overflow-hidden divide-y divide-gray-100 text-xs">
                {Object.entries(product.specs).map(([key, value], idx) => (
                  <div key={key} className={`grid grid-cols-1 sm:grid-cols-12 p-3 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <span className="sm:col-span-4 font-bold text-gray-800">
                      {key}
                    </span>
                    <span className="sm:col-span-8 text-gray-600 font-medium">
                      {value}
                    </span>
                  </div>
                ))}
                
                <div className="grid grid-cols-1 sm:grid-cols-12 p-3 bg-red-50/30">
                  <span className="sm:col-span-4 font-bold text-gray-900">
                    Warranty
                  </span>
                  <span className="sm:col-span-8 text-emerald-800 font-bold">
                    {product.warranty}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>


        {/* 4. Similar Products Carousel (Bottom Section) */}
        <div id="similar-products-section" className="mt-8 pt-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight">
                Similar {product.category === 'laptops' ? 'High-Performance Laptops' : (product.subcategory || 'Recommended Tech')}
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Customers who viewed this product also considered these models
              </p>
            </div>
          </div>

          <div className="relative group px-1">
            <button
              onClick={() => scrollSimilar('left')}
              className="absolute -left-2 sm:-left-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:text-black hover:shadow-lg transition-all cursor-pointer opacity-90 hover:opacity-100"
              aria-label="Previous Laptops"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div 
              ref={similarSliderRef}
              className="flex space-x-3.5 overflow-x-auto no-scrollbar scroll-smooth py-2 px-1"
            >
              {similarProducts.map((p) => (
                <div key={p.id} className="w-[210px] sm:w-[230px] md:w-[245px] flex-shrink-0">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollSimilar('right')}
              className="absolute -right-2 sm:-right-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:text-black hover:shadow-lg transition-all cursor-pointer opacity-90 hover:opacity-100"
              aria-label="Next Laptops"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Sticky Purchase Bar (Portrait Mobile Friendly) */}
        <div 
          className="sm:hidden fixed left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-gray-200 px-3.5 py-2.5 flex items-center justify-between shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
          style={{ bottom: 'calc(49px + env(safe-area-inset-bottom, 0px))' }}
        >
          <div className="pr-2">
            <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Deal Price</div>
            <div className="text-sm sm:text-base font-black text-gray-950 tracking-tight leading-tight">
              ₹{product.price.toLocaleString('en-IN')}.00
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => addToCart(product, 1)}
              className="h-10 sm:h-11 px-3.5 sm:px-4 rounded-xl bg-[#111827] hover:bg-[#1f2937] active:scale-95 text-white text-xs sm:text-sm font-bold shadow-xs cursor-pointer flex items-center justify-center transition-all whitespace-nowrap"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              disabled={!product.inStock}
              className={`h-10 sm:h-11 px-4 sm:px-5 rounded-xl text-white text-xs sm:text-sm font-bold shadow-xs cursor-pointer flex items-center justify-center transition-all whitespace-nowrap ${
                product.inStock ? 'bg-[#e42529] hover:bg-[#c01519] active:scale-95' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

