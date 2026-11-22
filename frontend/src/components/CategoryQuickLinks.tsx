import React from 'react';
import { useShop } from '../context/ShopContext';
import { LayoutGrid } from 'lucide-react';

interface Category3DItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'laptop' | 'desktop' | 'components' | 'gaming' | 'audio' | 'storage';
}

const CATEGORIES_3D: Category3DItem[] = [
  {
    id: 'laptops',
    title: 'Laptops & Notebooks',
    subtitle: 'OLED 4K & Gaming Rigs',
    type: 'laptop'
  },
  {
    id: 'desktops',
    title: 'Desktops & All-in-Ones',
    subtitle: 'Curved Display & PC Towers',
    type: 'desktop'
  },
  {
    id: 'components',
    title: 'PC Components',
    subtitle: 'Dual-Fan GPUs & Core CPUs',
    type: 'components'
  },
  {
    id: 'gaming-peripherals',
    title: 'Gaming & Peripherals',
    subtitle: 'RGB Mechanical Keyboard',
    type: 'gaming'
  },
  {
    id: 'audio',
    title: 'Audio & Sound',
    subtitle: 'Studio Over-Ear Headphones',
    type: 'audio'
  },
  {
    id: 'accessories',
    title: 'Accessories & Storage',
    subtitle: 'High-Speed Solid State Drive',
    type: 'storage'
  }
];

export const CategoryQuickLinks: React.FC = () => {
  const { 
    setSelectedCategory, 
    setSelectedSubcategory, 
    setSelectedBrand,
    setSearchQuery,
    setViewMode 
  } = useShop();

  const handleCategoryClick = (catId: string) => {
    setSelectedBrand(null);
    setSearchQuery('');
    setSelectedCategory(catId);
    setSelectedSubcategory(null);
    setViewMode('catalog');
  };

  return (
    <section className="max-w-[1440px] mx-auto px-3 sm:px-4 py-4 sm:py-6">
      
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div>
          <div className="flex items-center space-x-2">
            <LayoutGrid className="w-5 h-5 text-[#e42529]" />
            <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight">
              Shop by Category
            </h2>
          </div>
          <p className="text-xs text-gray-500 mt-0.5">
            Explore our wide range of computers, components, gadgets and more
          </p>
        </div>
      </div>

      {/* 6 Category Model Cards - Single Row on Desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5">
        {CATEGORIES_3D.map((cat) => (
          <div
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className="group relative bg-white hover:bg-gray-50/60 rounded-2xl p-2.5 sm:p-3.5 border border-gray-200/80 hover:border-gray-300 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-center cursor-pointer select-none"
          >
            {/* 3D Model Canvas Viewport */}
            <div className="w-full h-28 sm:h-36 flex items-center justify-center relative my-1">
              {/* MODEL 1: OPENED SILVER ALUMINUM LAPTOP */}
              {cat.type === 'laptop' && (
                <div className="relative w-full h-full flex items-center justify-center [perspective:850px]">
                  {/* Ambient drop shadow */}
                  <div className="absolute bottom-2.5 w-24 sm:w-26 h-4 bg-slate-900/15 rounded-full blur-md transition-all duration-500 group-hover:scale-125 group-hover:bg-slate-900/20" />

                  {/* 3D Opened Laptop with Interactive Hover Lift & Tilt */}
                  <div className="relative [transform-style:preserve-3d] transition-transform duration-500 ease-out group-hover:[transform:rotateX(8deg)_rotateY(-6deg)_translateY(-8px)_scale(1.08)] flex items-center justify-center">
                    <img
                      src="/banners/laptop-macbook.png"
                      alt="Opened Laptops & Notebooks"
                      className="w-24 sm:w-28 md:w-32 h-auto object-contain select-none pointer-events-none drop-shadow-md group-hover:drop-shadow-2xl transition-all duration-500"
                    />
                  </div>
                </div>
              )}

              {/* MODEL 2: 3D DESKTOPS & ALL-IN-ONES */}
              {cat.type === 'desktop' && (
                <div className="relative w-full h-full flex items-center justify-center [perspective:850px]">
                  {/* Ambient drop shadow */}
                  <div className="absolute bottom-2.5 w-24 sm:w-28 h-4 bg-slate-900/15 rounded-full blur-md transition-all duration-500 group-hover:scale-125 group-hover:bg-slate-900/20" />

                  {/* 3D Desktop Setup with Interactive Hover Lift & Tilt */}
                  <div className="relative [transform-style:preserve-3d] transition-transform duration-500 ease-out group-hover:[transform:rotateX(8deg)_rotateY(-6deg)_translateY(-8px)_scale(1.08)] flex items-center justify-center">
                    <img
                      src="/banners/desktop-allinone.png"
                      alt="Desktops & All-in-Ones"
                      className="w-24 sm:w-28 md:w-32 h-auto object-contain select-none pointer-events-none drop-shadow-md group-hover:drop-shadow-2xl transition-all duration-500"
                    />
                  </div>
                </div>
              )}

              {/* MODEL 3: 3D PC COMPONENTS (DUAL-FAN GPU) */}
              {cat.type === 'components' && (
                <div className="relative w-full h-full flex items-center justify-center [perspective:850px]">
                  {/* Ambient drop shadow */}
                  <div className="absolute bottom-2.5 w-24 sm:w-28 h-4 bg-slate-900/15 rounded-full blur-md transition-all duration-500 group-hover:scale-125 group-hover:bg-slate-900/20" />

                  {/* 3D Graphics Card with Interactive Hover Lift & Tilt */}
                  <div className="relative [transform-style:preserve-3d] transition-transform duration-500 ease-out group-hover:[transform:rotateX(8deg)_rotateY(-6deg)_translateY(-8px)_scale(1.08)] flex items-center justify-center">
                    <img
                      src="/banners/gpu-radeon.png"
                      alt="PC Components Dual-Fan GPU"
                      className="w-24 sm:w-28 md:w-32 h-auto object-contain select-none pointer-events-none drop-shadow-md group-hover:drop-shadow-2xl transition-all duration-500"
                    />
                  </div>
                </div>
              )}

              {/* MODEL 4: 75% CUSTOM MECHANICAL GAMING KEYBOARD */}
              {cat.type === 'gaming' && (
                <div className="relative w-full h-full flex items-center justify-center [perspective:850px]">
                  {/* Ambient drop shadow */}
                  <div className="absolute bottom-2.5 w-24 sm:w-26 h-4 bg-slate-900/15 rounded-full blur-md transition-all duration-500 group-hover:scale-125 group-hover:bg-slate-900/20" />

                  {/* 3D Mechanical Keyboard with Interactive Lift & Tilt */}
                  <div className="relative [transform-style:preserve-3d] transition-transform duration-500 ease-out group-hover:[transform:rotateX(8deg)_rotateY(-6deg)_translateY(-8px)_scale(1.08)] flex items-center justify-center">
                    <img
                      src="/banners/keyboard-75.png"
                      alt="Mechanical Gaming Keyboard"
                      className="w-24 sm:w-28 md:w-32 h-auto object-contain select-none pointer-events-none drop-shadow-md group-hover:drop-shadow-2xl transition-all duration-500"
                    />
                  </div>
                </div>
              )}

              {/* MODEL 5: 3D REAL STUDIO OVER-EAR HEADPHONES */}
              {cat.type === 'audio' && (
                <div className="relative w-full h-full flex items-center justify-center [perspective:850px]">
                  {/* Ambient drop shadow */}
                  <div className="absolute bottom-2.5 w-20 sm:w-24 h-4 bg-slate-900/15 rounded-full blur-md transition-all duration-500 group-hover:scale-125 group-hover:bg-slate-900/20" />

                  {/* 3D Realistic Headphones with Interactive Hover Lift & Tilt */}
                  <div className="relative [transform-style:preserve-3d] transition-transform duration-500 ease-out group-hover:[transform:rotateX(8deg)_rotateY(-6deg)_translateY(-8px)_scale(1.08)] flex items-center justify-center">
                    <img
                      src="/banners/headphones-airpods.png"
                      alt="Studio Over-Ear Headphones"
                      className="w-20 sm:w-22 md:w-24 h-auto max-h-32 object-contain select-none pointer-events-none drop-shadow-md group-hover:drop-shadow-2xl transition-all duration-500"
                    />
                  </div>
                </div>
              )}

              {/* MODEL 6: 3D REAL SOLID STATE DRIVE (SSD) */}
              {cat.type === 'storage' && (
                <div className="relative w-full h-full flex items-center justify-center [perspective:850px]">
                  {/* Ambient drop shadow */}
                  <div className="absolute bottom-2.5 w-24 sm:w-26 h-4 bg-slate-900/15 rounded-full blur-md transition-all duration-500 group-hover:scale-125 group-hover:bg-slate-900/20" />

                  {/* 3D Realistic SSD with Interactive Hover Lift & Tilt */}
                  <div className="relative [transform-style:preserve-3d] transition-transform duration-500 ease-out group-hover:[transform:rotateX(8deg)_rotateY(-6deg)_translateY(-8px)_scale(1.08)] flex items-center justify-center">
                    <img
                      src="/banners/ssd-storage.png"
                      alt="Accessories & Storage SSD"
                      className="w-20 sm:w-24 md:w-28 h-auto max-h-32 object-contain select-none pointer-events-none drop-shadow-md group-hover:drop-shadow-2xl transition-all duration-500"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Category Title & Subtitle */}
            <div className="w-full text-center mt-1.5 sm:mt-2 pt-1 border-t border-gray-100">
              <span className="text-[11px] sm:text-[13px] font-extrabold text-gray-900 group-hover:text-[#e42529] transition-colors block leading-tight truncate px-0.5">
                {cat.title}
              </span>
              <span className="text-[9.5px] sm:text-[10px] text-gray-500 font-medium transition-colors mt-0.5 inline-block truncate max-w-full px-1">
                {cat.subtitle}
              </span>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
