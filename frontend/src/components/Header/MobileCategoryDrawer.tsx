import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  ChevronRight, 
  ChevronDown, 
  Wrench, 
  Flame, 
  Heart, 
  ArrowLeftRight, 
  Phone,
  Layers,
  Laptop,
  Monitor,
  Cpu,
  Gamepad2,
  Headphones,
  HardDrive,
  Smartphone,
  CheckCircle2
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { CATEGORIES_DATA } from '../../data/categories';

const MOBILE_CATEGORIES = [
  { id: 'all', label: 'All Categories', icon: Layers },
  { id: 'laptops', label: 'Laptops & MacBooks', icon: Laptop },
  { id: 'desktops', label: 'Desktops & All-in-Ones', icon: Monitor },
  { id: 'components', label: 'PC Components', icon: Cpu },
  { id: 'gaming-peripherals', label: 'Gaming & Peripherals', icon: Gamepad2 },
  { id: 'audio', label: 'Audio & Sound', icon: Headphones },
  { id: 'accessories', label: 'Storage & Docks', icon: HardDrive },
  /* Commented out MOBILES & TABLETS per user request
  { id: 'mobiles', label: 'Mobiles & Tablets', icon: Smartphone },
  */
];

export const MobileCategoryDrawer: React.FC = () => {
  const { 
    isMobileMenuOpen, 
    setIsMobileMenuOpen, 
    setSelectedCategory, 
    setSelectedSubcategory, 
    setViewMode,
    setIsPincodeModalOpen,
    setIsStoreLocatorOpen,
    setIsCompareOpen,
    wishlist,
    compareList,
    pincodeInfo,
    products
  } = useShop();

  const [expandedCatId, setExpandedCatId] = useState<string | null>(null);

  if (!isMobileMenuOpen) return null;

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    setSelectedSubcategory(null);
    setViewMode('catalog');
    setIsMobileMenuOpen(false);
  };

  const handleSelectSubcategory = (catId: string, subName: string) => {
    setSelectedCategory(catId);
    setSelectedSubcategory(subName);
    setViewMode('catalog');
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 md:hidden flex">
      {/* Dimmed Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fadeIn"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Slide-in Drawer Container */}
      <div className="relative w-[85%] max-w-[340px] bg-white h-full shadow-2xl flex flex-col z-10 animate-slideInLeft text-gray-900">
        
        {/* Drawer Header */}
        <div className="bg-[#e42529] text-white p-4 flex items-center justify-between shadow-xs">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center shadow-xs">
              <img src="/logo.png" alt="Hello Computer" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-baseline space-x-1">
                <span className="font-black text-sm tracking-tight text-white uppercase">HELLO</span>
                <span className="font-black text-sm tracking-tight text-amber-300 uppercase">COMPUTER</span>
              </div>
              <span className="text-[9px] text-white/90 block -mt-0.5 font-medium">Coimbatore Store</span>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 flex items-center justify-center text-white cursor-pointer transition-all shadow-xs border border-white/20"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 stroke-[2.75]" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar py-3 px-3 space-y-4">
          
          {/* Coimbatore Store Info - Clean Brand Design */}
          <div 
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsStoreLocatorOpen(true);
            }}
            className="bg-gradient-to-br from-red-50/70 via-white to-gray-50 border border-red-100 p-3.5 rounded-2xl shadow-2xs space-y-2 cursor-pointer hover:border-red-200 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-red-100 flex items-center justify-center text-[#e42529]">
                  <MapPin className="w-4 h-4 text-[#e42529]" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-gray-950 uppercase tracking-tight">
                    Flagship Store Coimbatore
                  </h4>
                  <span className="text-[10px] text-emerald-700 font-bold flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse"></span>
                    Open Daily 10 AM - 9 PM
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#e42529] hover:underline">
                Directions →
              </span>
            </div>

            <p className="text-[11px] text-gray-600 leading-snug bg-white/90 p-2 rounded-xl border border-gray-100 font-medium">
              First Floor, 36, 100 Feet Rd, near Mariyamman Temple, Coimbatore - 641012
            </p>
          </div>

          {/* Delivery Pincode Card (Commented Out)
          <div 
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsPincodeModalOpen(true);
            }}
            className="bg-gray-50 border border-gray-200/80 p-2.5 rounded-xl flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-2 text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#e42529]" />
              <span className="text-gray-500">Deliver to:</span>
              <span className="font-bold text-gray-900">{pincodeInfo.pincode} ({pincodeInfo.city})</span>
            </div>
            <span className="text-[10px] text-[#e42529] font-bold">Change</span>
          </div>
          */}

          {/* Quick Highlight Links */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setViewMode('pc-builder');
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center space-x-2 p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-gray-900 font-bold text-xs hover:bg-amber-100 transition-colors text-left"
            >
              <Wrench className="w-4 h-4 text-black flex-shrink-0" />
              <span className="truncate">PC Builder</span>
            </button>

            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSubcategory('deals');
                setViewMode('catalog');
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center space-x-2 p-2.5 rounded-xl bg-red-50 border border-red-200 text-[#e42529] font-bold text-xs hover:bg-red-100 transition-colors text-left"
            >
              <Flame className="w-4 h-4 text-[#e42529] fill-[#e42529] flex-shrink-0" />
              <span className="truncate">Flash Deals</span>
            </button>
          </div>

          {/* Category List with Pure Black Icons */}
          <div className="space-y-1">
            <div className="px-1 py-1 text-[10px] font-black text-gray-400 uppercase tracking-wider">
              Browse Categories
            </div>

            {MOBILE_CATEGORIES.map(cat => {
              const Icon = cat.icon;
              const count = cat.id === 'all' 
                ? products.length 
                : products.filter(p => p.category === cat.id).length;
              
              const detailedCategory = CATEGORIES_DATA.find(c => c.id === cat.id);
              const hasSubcategories = detailedCategory && detailedCategory.subcategories.length > 0;
              const isExpanded = expandedCatId === cat.id;

              return (
                <div key={cat.id} className="rounded-xl border border-gray-100 overflow-hidden bg-white">
                  <div className="flex items-center justify-between p-2.5 hover:bg-gray-50 transition-colors">
                    <button
                      onClick={() => handleSelectCategory(cat.id)}
                      className="flex items-center space-x-3 flex-1 text-left cursor-pointer"
                    >
                      {/* PURE BLACK ICON */}
                      <div className="w-7 h-7 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 text-black" />
                      </div>
                      <span className="text-xs font-semibold text-gray-800">{cat.label}</span>
                    </button>

                    <div className="flex items-center space-x-1.5">
                      <span className="text-[10px] text-gray-400 font-bold bg-gray-50 px-1.5 py-0.5 rounded-full border border-gray-100">
                        {count}
                      </span>
                      {hasSubcategories && (
                        <button
                          onClick={() => setExpandedCatId(isExpanded ? null : cat.id)}
                          className="p-1 text-gray-400 hover:text-black cursor-pointer"
                          aria-label="Toggle subcategories"
                        >
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180 text-black' : ''}`} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Subcategories Accordion */}
                  {isExpanded && detailedCategory && (
                    <div className="bg-gray-50/80 px-3 py-2 border-t border-gray-100 space-y-2 text-xs">
                      {detailedCategory.subcategories.map((sub, sIdx) => (
                        <div key={sIdx} className="space-y-1">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                            {sub.title}
                          </span>
                          <div className="space-y-1 pl-1">
                            {sub.items.map((item, iIdx) => (
                              <button
                                key={iIdx}
                                onClick={() => handleSelectSubcategory(cat.id, item)}
                                className="block w-full text-left py-1 text-xs text-gray-700 hover:text-[#e42529] font-medium"
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* User Shortcuts (Compare & Wishlist) */}
          <div className="pt-2 border-t border-gray-200 space-y-1 text-xs">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsCompareOpen(true);
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl text-gray-700 hover:bg-gray-50 font-semibold cursor-pointer"
            >
              <div className="flex items-center space-x-2.5">
                <ArrowLeftRight className="w-4 h-4 text-black" />
                <span>Compare Products</span>
              </div>
              {compareList.length > 0 && (
                <span className="bg-amber-400 text-gray-950 font-bold text-[10px] px-2 py-0.5 rounded-full">
                  {compareList.length}
                </span>
              )}
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setSelectedCategory('all');
                setViewMode('catalog');
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl text-gray-700 hover:bg-gray-50 font-semibold cursor-pointer"
            >
              <div className="flex items-center space-x-2.5">
                <Heart className="w-4 h-4 text-black" />
                <span>My Wishlist</span>
              </div>
              {wishlist.length > 0 && (
                <span className="bg-amber-400 text-gray-950 font-bold text-[10px] px-2 py-0.5 rounded-full">
                  {wishlist.length}
                </span>
              )}
            </button>
          </div>

          {/* Contact Store Footer */}
          <div className="pt-2 border-t border-gray-200">
            <a 
              href="tel:+919842210055"
              className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-3 rounded-xl font-bold text-xs transition-colors shadow-2xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call Store: +91 98422 10055</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

