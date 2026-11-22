import React from 'react';
import { useShop } from '../context/ShopContext';
import { LayoutGrid, Sparkles } from 'lucide-react';

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
            <span className="hidden sm:inline-flex items-center space-x-1 bg-red-50 text-[#e42529] text-[10px] font-black px-2 py-0.5 rounded-full border border-red-100">
              <Sparkles className="w-2.5 h-2.5" />
              <span>INTERACTIVE 3D</span>
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-0.5">
            Explore our wide range of computers, components, gadgets and more
          </p>
        </div>
      </div>

      {/* 6 Interactive 3D Model Cards - Single Row on Desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5">
        {CATEGORIES_3D.map((cat) => (
          <div
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className="group relative bg-white hover:bg-gradient-to-b hover:from-white hover:to-blue-50/40 rounded-2xl p-3 sm:p-3.5 border border-gray-200/80 hover:border-blue-400/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between items-center cursor-pointer select-none overflow-hidden"
          >
            {/* Subtle Top Ambient Glow Accent on Hover */}
            <div className="absolute top-0 inset-x-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-cyan-400 group-hover:to-red-500 transition-all duration-300" />

            {/* 3D Model Canvas Viewport */}
            <div className="w-full h-32 sm:h-36 flex items-center justify-center relative my-1">
              {/* MODEL 1: OPENED SILVER ALUMINUM LAPTOP (EXACTLY MATCHING USER'S MACBOOK) */}
              {cat.type === 'laptop' && (
                <div className="relative w-full h-full flex items-center justify-center [perspective:850px]">
                  {/* Ambient drop shadow */}
                  <div className="absolute bottom-2.5 w-26 h-4 bg-slate-900/15 rounded-full blur-md transition-all duration-500 group-hover:scale-125 group-hover:bg-blue-600/25" />

                  {/* 3D Opened Laptop with Interactive Hover Lift & Tilt */}
                  <div className="relative [transform-style:preserve-3d] transition-transform duration-500 ease-out group-hover:[transform:rotateX(8deg)_rotateY(-6deg)_translateY(-8px)_scale(1.08)] flex items-center justify-center">
                    <img
                      src="/banners/laptop-macbook.png"
                      alt="Opened Laptops & Notebooks"
                      className="w-28 sm:w-32 h-auto object-contain select-none pointer-events-none drop-shadow-md group-hover:drop-shadow-2xl transition-all duration-500"
                    />

                    {/* Dynamic Screen Power-On Glow on Hover */}
                    <div className="absolute top-[16px] left-[24px] w-[64px] h-[40px] rounded-xs bg-gradient-to-tr from-blue-600/40 via-indigo-500/30 to-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-[1px] mix-blend-screen" />
                  </div>
                </div>
              )}

              {/* MODEL 2: 3D DESKTOPS & ALL-IN-ONES (EXACTLY MATCHING USER'S PHOTO) */}
              {cat.type === 'desktop' && (
                <div className="relative w-full h-full flex items-center justify-center [perspective:850px]">
                  {/* Ambient drop shadow */}
                  <div className="absolute bottom-2.5 w-28 h-4 bg-slate-900/15 rounded-full blur-md transition-all duration-500 group-hover:scale-125 group-hover:bg-blue-600/25" />

                  {/* 3D Desktop Setup with Interactive Hover Lift & Tilt */}
                  <div className="relative [transform-style:preserve-3d] transition-transform duration-500 ease-out group-hover:[transform:rotateX(8deg)_rotateY(-6deg)_translateY(-8px)_scale(1.08)] flex items-center justify-center">
                    <img
                      src="/banners/desktop-allinone.png"
                      alt="Desktops & All-in-Ones"
                      className="w-28 sm:w-32 h-auto object-contain select-none pointer-events-none drop-shadow-md group-hover:drop-shadow-2xl transition-all duration-500"
                    />

                    {/* Subtle Curved Display Glow on Hover */}
                    <div className="absolute top-[14px] left-[10px] w-[58px] h-[36px] rounded-xs bg-gradient-to-tr from-blue-500/35 via-indigo-500/25 to-cyan-400/35 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-[1px] mix-blend-screen" />
                  </div>
                </div>
              )}

              {/* MODEL 3: 3D PC COMPONENTS (DUAL-FAN GPU EXACTLY MATCHING USER'S PHOTO) */}
              {cat.type === 'components' && (
                <div className="relative w-full h-full flex items-center justify-center [perspective:850px]">
                  {/* Ambient drop shadow */}
                  <div className="absolute bottom-2.5 w-28 h-4 bg-slate-900/15 rounded-full blur-md transition-all duration-500 group-hover:scale-125 group-hover:bg-red-600/25" />

                  {/* 3D Graphics Card with Interactive Hover Lift & Tilt */}
                  <div className="relative [transform-style:preserve-3d] transition-transform duration-500 ease-out group-hover:[transform:rotateX(8deg)_rotateY(-6deg)_translateY(-8px)_scale(1.08)] flex items-center justify-center">
                    <img
                      src="/banners/gpu-radeon.png"
                      alt="PC Components Dual-Fan GPU"
                      className="w-28 sm:w-32 h-auto object-contain select-none pointer-events-none drop-shadow-md group-hover:drop-shadow-2xl transition-all duration-500"
                    />

                    {/* Subtle LED Fan Accent on Hover */}
                    <div className="absolute inset-x-2 -bottom-1 h-2 rounded-full bg-gradient-to-r from-red-500/40 via-amber-500/30 to-red-500/40 opacity-0 group-hover:opacity-75 transition-opacity duration-500 blur-xs pointer-events-none" />
                  </div>
                </div>
              )}

              {/* MODEL 4: 75% CUSTOM MECHANICAL GAMING KEYBOARD (EXACTLY MATCHING USER'S PHOTO) */}
              {cat.type === 'gaming' && (
                <div className="relative w-full h-full flex items-center justify-center [perspective:850px]">
                  {/* Ambient drop shadow with subtle RGB underglow */}
                  <div className="absolute bottom-2.5 w-26 h-4 bg-purple-950/20 rounded-full blur-md transition-all duration-500 group-hover:scale-125 group-hover:bg-purple-600/30" />

                  {/* 3D Mechanical Keyboard with Interactive Lift & Tilt */}
                  <div className="relative [transform-style:preserve-3d] transition-transform duration-500 ease-out group-hover:[transform:rotateX(8deg)_rotateY(-6deg)_translateY(-8px)_scale(1.08)] flex items-center justify-center">
                    <img
                      src="/banners/keyboard-75.png"
                      alt="Mechanical Gaming Keyboard"
                      className="w-28 sm:w-32 h-auto object-contain select-none pointer-events-none drop-shadow-md group-hover:drop-shadow-2xl transition-all duration-500"
                    />

                    {/* Subtle RGB underglow aura on hover */}
                    <div className="absolute inset-x-2 -bottom-1 h-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-75 transition-opacity duration-500 blur-xs pointer-events-none" />
                  </div>
                </div>
              )}

              {/* MODEL 5: 3D REAL STUDIO OVER-EAR HEADPHONES (EXACTLY MATCHING USER'S PHOTO) */}
              {cat.type === 'audio' && (
                <div className="relative w-full h-full flex items-center justify-center [perspective:850px]">
                  {/* Ambient drop shadow */}
                  <div className="absolute bottom-2.5 w-24 h-4 bg-slate-900/15 rounded-full blur-md transition-all duration-500 group-hover:scale-125 group-hover:bg-sky-500/25" />

                  {/* 3D Realistic Headphones with Interactive Hover Lift & Tilt */}
                  <div className="relative [transform-style:preserve-3d] transition-transform duration-500 ease-out group-hover:[transform:rotateX(8deg)_rotateY(-6deg)_translateY(-8px)_scale(1.08)] flex items-center justify-center">
                    <img
                      src="/banners/headphones-airpods.png"
                      alt="Studio Over-Ear Headphones"
                      className="w-22 sm:w-24 h-auto max-h-32 object-contain select-none pointer-events-none drop-shadow-md group-hover:drop-shadow-2xl transition-all duration-500"
                    />

                    {/* Acoustic Soundwave Ripple Accents on Hover */}
                    <div className="absolute -left-2 w-10 h-10 rounded-full border border-sky-400/80 opacity-0 group-hover:opacity-100 group-hover:animate-sound-ripple pointer-events-none" />
                    <div className="absolute -right-2 w-10 h-10 rounded-full border border-sky-400/80 opacity-0 group-hover:opacity-100 group-hover:animate-sound-ripple pointer-events-none" />
                  </div>
                </div>
              )}

              {/* MODEL 6: 3D REAL SOLID STATE DRIVE (SSD) (EXACTLY MATCHING USER'S PHOTO) */}
              {cat.type === 'storage' && (
                <div className="relative w-full h-full flex items-center justify-center [perspective:850px]">
                  {/* Ambient drop shadow */}
                  <div className="absolute bottom-2.5 w-26 h-4 bg-slate-900/15 rounded-full blur-md transition-all duration-500 group-hover:scale-125 group-hover:bg-cyan-500/25" />

                  {/* 3D Realistic SSD with Interactive Hover Lift & Tilt */}
                  <div className="relative [transform-style:preserve-3d] transition-transform duration-500 ease-out group-hover:[transform:rotateX(8deg)_rotateY(-6deg)_translateY(-8px)_scale(1.08)] flex items-center justify-center">
                    <img
                      src="/banners/ssd-storage.png"
                      alt="Accessories & Storage SSD"
                      className="w-24 sm:w-28 h-auto max-h-32 object-contain select-none pointer-events-none drop-shadow-md group-hover:drop-shadow-2xl transition-all duration-500"
                    />

                    {/* High-speed Data Transfer Glow Accent on Hover */}
                    <div className="absolute inset-x-2 -bottom-1 h-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-75 transition-opacity duration-500 blur-xs pointer-events-none" />
                  </div>
                </div>
              )}
            </div>

            {/* Category Title & Hover Badge */}
            <div className="w-full text-center mt-2 pt-1 border-t border-gray-100/80">
              <span className="text-xs sm:text-[13px] font-extrabold text-gray-900 group-hover:text-[#e42529] transition-colors block leading-tight">
                {cat.title}
              </span>
              <span className="text-[10px] text-gray-400 group-hover:text-blue-600 font-semibold transition-colors mt-0.5 inline-block">
                {cat.subtitle}
              </span>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
