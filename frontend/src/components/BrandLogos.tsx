import React, { useRef } from 'react';
import { useShop } from '../context/ShopContext';
import { ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

export const BrandLogos: React.FC = () => {
  const { setSelectedCategory, setViewMode } = useShop();
  const scrollRef = useRef<HTMLDivElement>(null);

  const brands = [
    { 
      name: 'HP', 
      image: '/brands/hp-tile.png',
      filterName: 'HP' 
    },
    { 
      name: 'Apple', 
      image: '/brands/apple-tile.png',
      filterName: 'Apple' 
    },
    { 
      name: 'ASUS', 
      image: '/brands/asus-tile.png',
      filterName: 'ASUS ROG' 
    },
    { 
      name: 'Lenovo', 
      image: '/brands/lenovo-tile.png',
      filterName: 'Lenovo Legion' 
    },
    { 
      name: 'Dell', 
      image: '/brands/dell-tile.png',
      filterName: 'Dell Alienware' 
    },
    { 
      name: 'Acer', 
      image: '/brands/acer-tile.png',
      filterName: 'Acer' 
    },
    { 
      name: 'Samsung', 
      image: '/brands/samsung-tile.png',
      filterName: 'Samsung' 
    },
    { 
      name: 'Microsoft', 
      image: '/brands/microsoft-tile.png',
      filterName: 'Microsoft' 
    },
    { 
      name: 'Intel', 
      image: '/brands/intel-tile.png',
      filterName: 'Intel' 
    },
    { 
      name: 'NVIDIA', 
      image: '/brands/nvidia-tile.png',
      filterName: 'NVIDIA' 
    },
    { 
      name: 'Sony', 
      image: '/brands/sony-tile.png',
      filterName: 'Sony' 
    },
    { 
      name: 'Logitech G', 
      image: '/brands/logitech-tile.png',
      filterName: 'Logitech G' 
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const handleBrandClick = (_brandFilter: string) => {
    setSelectedCategory('all');
    setViewMode('catalog');
  };

  return (
    <section className="max-w-[1360px] mx-auto px-4 py-8">
      {/* Header matching exact user text */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-2">
          <ShieldCheck className="w-5 h-5 text-[#e42529]" />
          <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight uppercase">
            Official Authorised Brand Stores
          </h2>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Direct manufacturer warranty and genuine sealed boxes guaranteed
        </p>
      </div>

      {/* Strip matching user screenshot exact theme with ONLY images (no bottom titles) */}
      <div className="bg-[#f5f5f5] rounded-3xl p-4 sm:p-6 border border-gray-200/60 shadow-xs relative group">
        
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute -left-2 sm:-left-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:text-black hover:shadow-lg transition-all cursor-pointer opacity-90 hover:opacity-100"
          aria-label="Previous Brands"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scrollable Track - Showing ONLY the squircle brand images */}
        <div 
          ref={scrollRef}
          className="flex space-x-4 sm:space-x-6 overflow-x-auto no-scrollbar scroll-smooth py-3 px-2 items-center"
        >
          {brands.map((brand, idx) => (
            <div
              key={idx}
              onClick={() => handleBrandClick(brand.filterName)}
              title={brand.name}
              className="flex items-center justify-center flex-shrink-0 cursor-pointer select-none transition-all duration-300 hover:-translate-y-1.5 hover:scale-105"
            >
              {/* Brand squircle image tile - full without cutoff */}
              <div className="w-[102px] h-[106px] sm:w-[114px] sm:h-[118px] flex items-center justify-center">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-contain pointer-events-none"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute -right-2 sm:-right-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:text-black hover:shadow-lg transition-all cursor-pointer opacity-90 hover:opacity-100"
          aria-label="Next Brands"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>
    </section>
  );
};
