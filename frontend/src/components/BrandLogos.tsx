import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

export const BrandLogos: React.FC = () => {
  const { setSelectedCategory, setViewMode } = useShop();

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

  const [itemsPerPage, setItemsPerPage] = useState<number>(6);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Responsive itemsPerPage calculation
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerPage(6);
      } else if (width >= 640) {
        setItemsPerPage(4);
      } else if (width >= 360) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(brands.length / itemsPerPage);

  // Keep currentPage valid when itemsPerPage changes
  useEffect(() => {
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(0);
    }
  }, [totalPages, currentPage]);

  // Auto-play carousel timer (advances every 4 seconds)
  useEffect(() => {
    if (isPaused || totalPages <= 1) return;
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;
    if (isLeftSwipe) nextPage();
    if (isRightSwipe) prevPage();
  };

  const handleBrandClick = (_brandFilter: string) => {
    setSelectedCategory('all');
    setViewMode('catalog');
  };

  // Chunk brands into pages
  const pages: (typeof brands)[] = [];
  for (let i = 0; i < brands.length; i += itemsPerPage) {
    pages.push(brands.slice(i, i + itemsPerPage));
  }

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

      {/* Interactive Carousel Container */}
      <div 
        className="bg-[#f5f5f5] rounded-3xl p-3 sm:p-5 md:p-6 border border-gray-200/60 shadow-xs relative group select-none overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Arrow Button */}
        <button
          onClick={prevPage}
          className="absolute left-1.5 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:text-black hover:shadow-lg transition-all cursor-pointer opacity-85 group-hover:opacity-100 hover:scale-105"
          aria-label="Previous Brands"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Carousel Slide Track */}
        <div className="overflow-hidden w-full px-7 sm:px-10">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {pages.map((page, pageIdx) => (
              <div
                key={pageIdx}
                className="w-full flex-shrink-0 flex items-center justify-around sm:justify-center gap-2 sm:gap-4 md:gap-6 py-2"
              >
                {page.map((brand, bIdx) => (
                  <div
                    key={bIdx}
                    onClick={() => handleBrandClick(brand.filterName)}
                    title={brand.name}
                    className="flex items-center justify-center cursor-pointer select-none transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95"
                  >
                    <div className="w-[84px] h-[88px] sm:w-[104px] sm:h-[108px] md:w-[114px] md:h-[118px] flex items-center justify-center">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-full h-full object-contain pointer-events-none drop-shadow-xs"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={nextPage}
          className="absolute right-1.5 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:text-black hover:shadow-lg transition-all cursor-pointer opacity-85 group-hover:opacity-100 hover:scale-105"
          aria-label="Next Brands"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Carousel Pagination Indicator Dots */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-1.5 pt-3">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentPage === idx 
                    ? 'w-6 bg-[#e42529]' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
