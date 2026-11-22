import React, { useState, useRef } from 'react';
import { PRODUCTS_DATA } from '../data/products';
import { ProductCard } from './ProductCard';
import { useShop } from '../context/ShopContext';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const FeaturedTabs: React.FC = () => {
  const { setSelectedCategory, setViewMode } = useShop();
  const [activeTab, setActiveTab] = useState<'all' | 'laptops' | 'desktops' | 'gaming' | 'components' | 'audio'>('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProducts = PRODUCTS_DATA.filter(p => {
    if (activeTab === 'all') return p.inStock && (p.isDealOfDay || p.isBestSeller || p.isTrending);
    if (activeTab === 'laptops') return p.category === 'laptops';
    if (activeTab === 'desktops') return p.category === 'desktops';
    if (activeTab === 'gaming') return p.category === 'gaming-peripherals';
    if (activeTab === 'components') return p.category === 'components' || p.category === 'accessories';
    if (activeTab === 'audio') return p.category === 'audio';
    return true;
  });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-[1360px] mx-auto px-4 py-8">
      
      {/* Clean Tabs Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-3 gap-3">
        <div>
          <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">
            Curated Tech Collections
          </h2>
          <p className="text-xs text-gray-500">
            Top-rated computers, hardware, and gadgets verified by Hello Computer ResQ Engineers
          </p>
        </div>

        {/* Clean Tab Pills - Red & Neutral */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar">
          {[
            { id: 'all', label: '🔥 All Hot Tech' },
            { id: 'laptops', label: '💻 Laptops & MacBooks' },
            { id: 'desktops', label: '🖥️ Desktops & Monitors' },
            { id: 'gaming', label: '🎮 Gaming & Peripherals' },
            { id: 'components', label: '⚡ Components & Storage' },
            { id: 'audio', label: '🎧 Audio & Sound' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#e42529] text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Carousel Slider Track (Exact Reliance Digital Style) */}
      <div className="relative group px-1 mt-4 sm:mt-6">
        
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll('left')}
          className="hidden sm:flex absolute -left-2 sm:-left-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center text-gray-700 hover:text-black hover:shadow-lg transition-all cursor-pointer opacity-90 hover:opacity-100"
          aria-label="Previous Laptops"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scrollable Track */}
        <div 
          ref={scrollRef}
          className="flex space-x-2.5 sm:space-x-3.5 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1"
        >
          {filteredProducts.map((product) => (
            <div key={product.id} className="w-[155px] sm:w-[220px] md:w-[245px] flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll('right')}
          className="hidden sm:flex absolute -right-2 sm:-right-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center text-gray-700 hover:text-black hover:shadow-lg transition-all cursor-pointer opacity-90 hover:opacity-100"
          aria-label="Next Laptops"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>

      {/* View All Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => {
            if (activeTab === 'all') {
              setSelectedCategory('all');
            } else {
              setSelectedCategory(activeTab);
            }
            setViewMode('catalog');
          }}
          className="inline-flex items-center space-x-2 bg-[#e42529] hover:bg-[#c01519] text-white text-xs sm:text-sm font-bold px-7 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer"
        >
          <span>Explore Full Inventory</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
};
