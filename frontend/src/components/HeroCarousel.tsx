import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

interface BannerSlide {
  id: number;
  image: string;
  mobileImage: string;
  alt: string;
  category: string;
  bgColor: string;
}

const BANNERS: BannerSlide[] = [
  {
    id: 1,
    image: '/banners/banner1.png',
    mobileImage: '/banners/mb1.png',
    alt: 'Predator Helios Neo AI Series Gaming Laptops - Intel Core Ultra 9 & NVIDIA RTX',
    category: 'laptops',
    bgColor: '#010e26'
  },
  {
    id: 2,
    image: '/banners/banner2.png',
    mobileImage: '/banners/mb2.png',
    alt: 'Wide Range of Laptops - Apple MacBooks, HP, Dell, ASUS ROG',
    category: 'laptops',
    bgColor: '#e8f4fd'
  },
  {
    id: 3,
    image: '/banners/banner3.png',
    mobileImage: '/banners/mb3.png',
    alt: 'Acer Aspire Desktops and All-in-One PCs - Aspire, Achieve',
    category: 'desktops',
    bgColor: '#0e4587'
  },
  {
    id: 4,
    image: '/banners/banner4.png',
    mobileImage: '/banners/mb4.png',
    alt: 'Built for Everything NuvoBook Laptop Series',
    category: 'laptops',
    bgColor: '#6eb6fd'
  }
];

export const HeroCarousel: React.FC = () => {
  const { setSelectedCategory, setViewMode } = useShop();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);

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
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  const handleBannerClick = (cat: string) => {
    setSelectedCategory(cat);
    setViewMode('catalog');
  };

  return (
    <section 
      className="relative w-full max-w-[1680px] 2xl:max-w-[1800px] mx-auto px-0 sm:px-2 md:px-3 pt-0 sm:pt-2 pb-2 sm:pb-3 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* High-Resolution Hero Banner with Responsive Aspect Ratio (3:4 on Mobile, 21:9 on Tablet, 3:1 on Desktop) */}
      <div className="relative w-full overflow-hidden rounded-none sm:rounded-xl md:rounded-2xl shadow-sm sm:shadow-md border-b sm:border border-gray-200/80 aspect-[3/4] sm:aspect-[21/9] md:aspect-[3/1] bg-slate-950">
        
        {/* Slides Track */}
        <div 
          className="flex h-full w-full transition-transform duration-600 ease-in-out cursor-pointer"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {BANNERS.map((banner) => (
            <div 
              key={banner.id}
              onClick={() => handleBannerClick(banner.category)}
              className="w-full h-full flex-shrink-0 relative flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: banner.bgColor }}
            >
              <picture className="w-full h-full block">
                <source media="(max-width: 639px)" srcSet={banner.mobileImage} />
                <img 
                  src={banner.image} 
                  alt={banner.alt}
                  className="w-full h-full object-cover select-none"
                  loading="eager"
                  decoding="sync"
                />
              </picture>
            </div>
          ))}
        </div>

        {/* Prev Arrow Button (Desktop only) */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="hidden sm:flex absolute left-3 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg border border-white/20 items-center justify-center z-20"
          aria-label="Previous Banner"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Arrow Button (Desktop only) */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="hidden sm:flex absolute right-3 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg border border-white/20 items-center justify-center z-20"
          aria-label="Next Banner"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicators Dots */}
        <div className="absolute bottom-2.5 sm:bottom-3.5 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-20 bg-black/40 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-white/15 shadow-sm">
          {BANNERS.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide(idx);
              }}
              className={`h-2 sm:h-2.5 rounded-full transition-all cursor-pointer ${
                currentSlide === idx 
                  ? 'w-6 sm:w-8 bg-[#e42529]' 
                  : 'w-2 sm:w-2.5 bg-white/60 hover:bg-white'
              }`}
              aria-label={`Go to Slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
