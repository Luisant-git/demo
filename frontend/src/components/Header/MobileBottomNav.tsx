import React from 'react';
import { Home, LayoutGrid, Flame, Wrench, ShoppingCart } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const MobileBottomNav: React.FC = () => {
  const { 
    viewMode, 
    setViewMode, 
    setSelectedCategory, 
    setSelectedSubcategory,
    cart, 
    setIsCartOpen,
    setIsMobileMenuOpen 
  } = useShop();

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav 
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] px-2 py-1 select-none flex justify-around items-center"
      style={{ paddingBottom: 'max(0.35rem, env(safe-area-inset-bottom))' }}
      aria-label="Mobile Navigation"
    >
      {/* 1. Home Button */}
      <button
        onClick={() => {
          setViewMode('home');
          setSelectedCategory('all');
          setSelectedSubcategory(null);
        }}
        className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all cursor-pointer ${
          viewMode === 'home' 
            ? 'text-[#e42529] font-bold' 
            : 'text-gray-500 hover:text-gray-900 font-medium'
        }`}
      >
        <Home className={`w-5 h-5 ${viewMode === 'home' ? 'stroke-[2.5]' : 'stroke-[1.75]'}`} />
        <span className="text-[10px] mt-0.5 tracking-tight">Home</span>
      </button>

      {/* 2. Categories Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-gray-700 hover:text-black transition-all cursor-pointer font-medium"
      >
        <LayoutGrid className="w-5 h-5 text-black stroke-[2]" />
        <span className="text-[10px] mt-0.5 tracking-tight">Categories</span>
      </button>

      {/* 3. Deals Button */}
      <button
        onClick={() => {
          setSelectedCategory('all');
          setSelectedSubcategory('deals');
          setViewMode('catalog');
        }}
        className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-gray-700 hover:text-[#e42529] transition-all cursor-pointer relative font-medium group"
      >
        <div className="relative">
          <Flame className="w-5 h-5 text-[#e42529] fill-[#e42529]" />
          <span className="absolute -top-1.5 -right-2 bg-amber-400 text-gray-950 font-black text-[8px] px-1 rounded-full uppercase scale-90">
            HOT
          </span>
        </div>
        <span className="text-[10px] mt-0.5 tracking-tight text-[#e42529] font-bold">Deals</span>
      </button>

      {/* 4. PC Builder */}
      <button
        onClick={() => setViewMode('pc-builder')}
        className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all cursor-pointer ${
          viewMode === 'pc-builder' 
            ? 'text-[#e42529] font-bold' 
            : 'text-gray-500 hover:text-gray-900 font-medium'
        }`}
      >
        <Wrench className={`w-5 h-5 ${viewMode === 'pc-builder' ? 'stroke-[2.5] text-[#e42529]' : 'stroke-[1.75]'}`} />
        <span className="text-[10px] mt-0.5 tracking-tight">PC Rig</span>
      </button>

      {/* 5. Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-gray-700 hover:text-gray-950 transition-all cursor-pointer relative font-medium"
      >
        <div className="relative">
          <ShoppingCart className="w-5 h-5 stroke-[2]" />
          {totalCartCount > 0 && (
            <span className="absolute -top-1.5 -right-2.5 bg-[#e42529] text-white font-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
              {totalCartCount}
            </span>
          )}
        </div>
        <span className="text-[10px] mt-0.5 tracking-tight">Cart</span>
      </button>
    </nav>
  );
};

