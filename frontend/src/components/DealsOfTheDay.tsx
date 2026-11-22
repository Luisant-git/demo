import React, { useState, useEffect, useRef } from 'react';
import { Flame, Clock, ChevronRight, ChevronLeft } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { PRODUCTS_DATA } from '../data/products';
import { useShop } from '../context/ShopContext';

export const DealsOfTheDay: React.FC = () => {
  const { setSelectedCategory, setViewMode } = useShop();
  const scrollRef = useRef<HTMLDivElement>(null);

  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const dealProducts = PRODUCTS_DATA.filter(p => p.isDealOfDay && p.inStock);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-[1360px] mx-auto px-4 py-6">
      
      {/* Clean Deals Header */}
      <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm mb-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-red-50 text-[#e42529] rounded-xl border border-red-100">
            <Flame className="w-6 h-6 fill-[#e42529]" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 uppercase tracking-tight">
                Deals of the Day
              </h2>
              <span className="bg-amber-100 text-amber-900 border border-amber-200 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                Flash Discounts
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">
              Handpicked laptops, desktops, gaming gear and flagship tech at special offer prices
            </p>
          </div>
        </div>

        {/* Clean Countdown Timer */}
        <div className="flex items-center space-x-3 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
          <div className="flex items-center space-x-1.5 text-xs font-semibold text-slate-700">
            <Clock className="w-4 h-4 text-[#e42529]" />
            <span>Offer Ends In:</span>
          </div>
          <div className="flex items-center space-x-1.5 text-xs font-bold font-mono">
            <span className="bg-white px-2 py-1 rounded-md text-gray-900 border border-gray-200 shadow-sm">
              {String(timeLeft.hours).padStart(2, '0')}h
            </span>
            <span className="text-gray-400">:</span>
            <span className="bg-white px-2 py-1 rounded-md text-gray-900 border border-gray-200 shadow-sm">
              {String(timeLeft.minutes).padStart(2, '0')}m
            </span>
            <span className="text-gray-400">:</span>
            <span className="bg-[#e42529] px-2 py-1 rounded-md text-white border border-red-500 shadow-sm">
              {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </div>
        </div>

      </div>

      {/* Product Carousel Slider Track (Exact Reliance Digital Style) */}
      <div className="relative group px-1">
        
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute -left-2 sm:-left-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:text-black hover:shadow-lg transition-all cursor-pointer opacity-90 hover:opacity-100"
          aria-label="Previous Laptops"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scrollable Track */}
        <div 
          ref={scrollRef}
          className="flex space-x-2.5 sm:space-x-3.5 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1"
        >
          {dealProducts.map((product) => (
            <div key={product.id} className="w-[160px] sm:w-[220px] md:w-[245px] flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute -right-2 sm:-right-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:text-black hover:shadow-lg transition-all cursor-pointer opacity-90 hover:opacity-100"
          aria-label="Next Laptops"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => {
            setSelectedCategory('all');
            setViewMode('catalog');
          }}
          className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#002b5e] hover:text-[#e42529] transition-colors border border-gray-300 hover:border-[#e42529] px-6 py-2.5 rounded-full bg-white shadow-sm"
        >
          <span>View All Deals of the Day</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
};
