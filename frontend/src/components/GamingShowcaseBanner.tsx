import React from 'react';
import { useShop } from '../context/ShopContext';

interface BrandCard {
  brand: string;
  brandQuery: string;
  image: string;
}

const GAMING_BRANDS: BrandCard[] = [
  {
    brand: 'ASUS',
    brandQuery: 'ASUS ROG',
    image: '/banners/asus.png'
  },
  {
    brand: 'HP',
    brandQuery: 'HP',
    image: '/banners/hp.png'
  },
  {
    brand: 'Lenovo',
    brandQuery: 'Lenovo Legion',
    image: '/banners/Lenovo.png'
  },
  {
    brand: 'Dell',
    brandQuery: 'Dell Alienware',
    image: '/banners/Dell.png'
  }
];

export const GamingShowcaseBanner: React.FC = () => {
  const { 
    setSelectedCategory, 
    setSelectedSubcategory, 
    setSelectedBrand, 
    setViewMode 
  } = useShop();

  const handleBannerClick = () => {
    setSelectedCategory('laptops');
    setSelectedSubcategory('Gaming Laptops');
    setSelectedBrand(null);
    setViewMode('catalog');
  };

  const handleBrandClick = (brandQuery: string) => {
    setSelectedCategory('laptops');
    setSelectedSubcategory('Gaming Laptops');
    setSelectedBrand(brandQuery);
    setViewMode('catalog');
  };

  return (
    <section className="max-w-[1360px] mx-auto px-3 sm:px-4 py-4 sm:py-6">
      <div className="space-y-2.5 sm:space-y-3.5">
        
        {/* Top Hero Banner: Boost Your Gaming Performance */}
        <div 
          onClick={handleBannerClick}
          className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-md border border-neutral-800 bg-[#0c0d14] cursor-pointer group select-none transition-all duration-300 hover:shadow-xl"
          title="Explore High-Performance Gaming Laptops"
        >
          <img 
            src="/banners/bn1.png" 
            alt="Boost Your Gaming Performance" 
            className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>

        {/* Bottom 4 Brand Showcase Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
          {GAMING_BRANDS.map((item) => (
            <div
              key={item.brand}
              onClick={() => handleBrandClick(item.brandQuery)}
              className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-neutral-800 hover:border-cyan-500/60 bg-[#0c0d14] shadow-sm hover:shadow-md cursor-pointer group transition-all duration-300 select-none"
              title={`View ${item.brand} Gaming Laptops`}
            >
              <img
                src={item.image}
                alt={`${item.brand} Gaming Laptop`}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

