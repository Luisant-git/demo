import React, { useState, useRef } from 'react';
import { 
  ChevronDown, 
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { CATEGORIES_DATA } from '../../data/categories';
import { useShop } from '../../context/ShopContext';

export const MegaMenu: React.FC = () => {
  const { setSelectedCategory, setSelectedSubcategory, setViewMode } = useShop();
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId);
    setSelectedSubcategory(null);
    setViewMode('catalog');
    setActiveCategoryId(null);
  };

  const handleSubcategoryClick = (catId: string, subName: string) => {
    setSelectedCategory(catId);
    setSelectedSubcategory(subName);
    setViewMode('catalog');
    setActiveCategoryId(null);
  };

  const activeCategory = CATEGORIES_DATA.find(c => c.id === activeCategoryId);

  return (
    <nav 
      className="bg-white text-gray-800 border-b border-gray-200 relative z-30 shadow-sm"
      onMouseLeave={() => setActiveCategoryId(null)}
    >
      <div className="max-w-[1360px] mx-auto px-1 sm:px-2 relative group/megabar">
        
        {/* Left Arrow Button (Desktop / Tablet only) */}
        <button
          onClick={() => scroll('left')}
          className="hidden sm:flex absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center text-black hover:bg-gray-100 hover:shadow-lg transition-all cursor-pointer opacity-90 hover:opacity-100"
          aria-label="Scroll Categories Left"
        >
          <ChevronLeft className="w-4 h-4 text-black stroke-[2.5]" />
        </button>

        {/* Horizontal Visual Category Bar with Images + Icons (Clean White & Slate) */}
        <div 
          ref={scrollRef}
          className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto no-scrollbar scroll-smooth py-2 px-2 sm:px-9"
        >
          
          {/* Main Categories with Product Images */}
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onMouseEnter={() => setActiveCategoryId(cat.id)}
              className="relative flex-shrink-0"
            >
              <button
                onClick={() => handleCategoryClick(cat.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl transition-all cursor-pointer ${
                  activeCategoryId === cat.id 
                    ? 'bg-red-50 text-[#e42529] font-bold shadow-sm border border-red-200' 
                    : 'text-gray-700 hover:text-[#e42529] hover:bg-gray-50 border border-transparent'
                }`}
              >
                {/* Category Thumbnail Image */}
                <div className="w-8 h-8 rounded-lg overflow-hidden bg-gray-50 p-0.5 flex-shrink-0 flex items-center justify-center border border-gray-200 shadow-sm">
                  <img 
                    src={cat.thumbnailImage} 
                    alt={cat.name} 
                    className="w-full h-full object-cover rounded-md" 
                  />
                </div>

                <div className="text-left">
                  <div className="text-[11px] font-bold tracking-tight uppercase leading-tight whitespace-nowrap">
                    {cat.name}
                  </div>
                </div>

                <ChevronDown className={`w-3 h-3 transition-transform ${activeCategoryId === cat.id ? 'rotate-180 text-[#e42529]' : 'text-gray-400'}`} />
              </button>
            </div>
          ))}

          {/* CUSTOM PC BUILDER with Image */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => {
                setViewMode('pc-builder');
                setActiveCategoryId(null);
              }}
              className="flex items-center space-x-2 px-3 py-2 rounded-xl text-gray-900 bg-amber-50 hover:bg-amber-100 transition-all cursor-pointer border border-amber-300"
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-gray-900 p-0.5 flex-shrink-0 flex items-center justify-center border border-amber-400 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=200&q=80" 
                  alt="Custom PC" 
                  className="w-full h-full object-cover rounded-md" 
                />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-black tracking-wider uppercase leading-tight whitespace-nowrap text-gray-900">
                  CUSTOM PC BUILDER
                </div>
              </div>
            </button>
          </div>

          {/* TOP DEALS with Image */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSubcategory('deals');
                setViewMode('catalog');
                setActiveCategoryId(null);
              }}
              className="flex items-center space-x-2 px-3 py-2 rounded-xl text-white bg-[#e42529] hover:bg-[#c01519] transition-all cursor-pointer shadow-sm"
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-white p-0.5 flex-shrink-0 flex items-center justify-center border border-red-300 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=200&q=80" 
                  alt="Top Deals" 
                  className="w-full h-full object-cover rounded-md" 
                />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-black tracking-wider uppercase leading-tight whitespace-nowrap text-white">
                  TOP DEALS
                </div>
              </div>
            </button>
          </div>

        </div>

        {/* Right Arrow Button (Desktop / Tablet only) */}
        <button
          onClick={() => scroll('right')}
          className="hidden sm:flex absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center text-black hover:bg-gray-100 hover:shadow-lg transition-all cursor-pointer opacity-90 hover:opacity-100"
          aria-label="Scroll Categories Right"
        >
          <ChevronRight className="w-4 h-4 text-black stroke-[2.5]" />
        </button>

      </div>

      {/* Reliance Digital Style Mega Dropdown Menu */}
      {activeCategoryId && activeCategory && (
        <div 
          className="absolute left-0 right-0 top-full bg-white text-gray-900 shadow-2xl border-b border-gray-200 z-50 animate-fadeIn"
          onMouseEnter={() => setActiveCategoryId(activeCategoryId)}
        >
          <div className="max-w-[1360px] mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Subcategories Columns */}
            {activeCategory.subcategories.map((sub, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-100 pb-1.5 flex items-center">
                  <span className="w-1.5 h-3 bg-[#e42529] mr-2 rounded-full inline-block"></span>
                  {sub.title}
                </h4>
                <ul className="space-y-2">
                  {sub.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <button
                        onClick={() => handleSubcategoryClick(activeCategory.id, item)}
                        className="text-xs text-gray-600 hover:text-[#e42529] hover:translate-x-1 transition-all text-left block w-full py-0.5 font-medium"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Top Brands Column */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-100 pb-1.5 flex items-center">
                <span className="w-1.5 h-3 bg-amber-400 mr-2 rounded-full inline-block"></span>
                Top Brands
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeCategory.topBrands.map((brand, bIdx) => (
                  <button
                    key={bIdx}
                    onClick={() => {
                      setSelectedCategory(activeCategory.id);
                      setViewMode('catalog');
                      setActiveCategoryId(null);
                    }}
                    className="text-xs px-2.5 py-1.5 bg-gray-100 hover:bg-[#e42529] hover:text-white rounded-xl border border-gray-200 transition-colors font-semibold text-gray-700"
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Banner Card in Mega Menu */}
            {activeCategory.featuredBanner && (
              <div 
                className="relative rounded-2xl overflow-hidden shadow-sm group cursor-pointer border border-gray-100"
                onClick={() => handleCategoryClick(activeCategory.id)}
              >
                <img 
                  src={activeCategory.featuredBanner.image} 
                  alt={activeCategory.featuredBanner.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest flex items-center">
                    <Sparkles className="w-3 h-3 mr-1" /> Featured Offer
                  </span>
                  <h5 className="text-sm font-bold mt-0.5 leading-snug">
                    {activeCategory.featuredBanner.title}
                  </h5>
                  <p className="text-[11px] text-gray-200">
                    {activeCategory.featuredBanner.subtitle}
                  </p>
                  <p className="text-xs font-extrabold text-amber-300 mt-1">
                    {activeCategory.featuredBanner.discountText}
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* View All Bar at bottom of MegaMenu */}
          <div className="bg-gray-50 border-t border-gray-100 py-2.5 px-6 flex justify-between items-center text-xs">
            <span className="text-gray-500">
              100% genuine products with official brand warranty & Hello Care ResQ support
            </span>
            <button
              onClick={() => handleCategoryClick(activeCategory.id)}
              className="text-[#e42529] font-bold hover:underline inline-flex items-center"
            >
              Explore All {activeCategory.name} <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
