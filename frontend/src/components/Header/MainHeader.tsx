import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  ArrowLeftRight, 
  User, 
  MapPin, 
  X,
  Sparkles,
  ChevronDown,
  Check,
  Layers,
  Laptop,
  Monitor,
  Cpu,
  Gamepad2,
  Headphones,
  HardDrive,
  Smartphone,
  Flame,
  Menu
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

const SEARCH_CATEGORIES = [
  { id: 'all', label: 'All Categories', icon: Layers },
  { id: 'laptops', label: 'Laptops & MacBooks', icon: Laptop },
  { id: 'desktops', label: 'Desktops & AIO', icon: Monitor },
  { id: 'components', label: 'PC Components', icon: Cpu },
  { id: 'gaming-peripherals', label: 'Gaming & Gear', icon: Gamepad2 },
  { id: 'audio', label: 'Audio & Sound', icon: Headphones },
  { id: 'accessories', label: 'Storage & Docks', icon: HardDrive },
  /* Commented out MOBILES & TABLETS per user request
  { id: 'mobiles', label: 'Mobiles & Tablets', icon: Smartphone },
  */
];

export const MainHeader: React.FC = () => {
  const { 
    cart, 
    wishlist, 
    compareList, 
    cartTotal, 
    searchQuery, 
    setSearchQuery, 
    products, 
    setSelectedCategory, 
    setViewMode,
    setIsCartOpen,
    setIsCompareOpen,
    setIsPincodeModalOpen,
    setIsMobileMenuOpen,
    pincodeInfo,
    openProductDetail
  } = useShop();

  const [searchCategory, setSearchCategory] = useState('all');
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const mobileSearchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const clickedDesktop = searchContainerRef.current && searchContainerRef.current.contains(target);
      const clickedMobile = mobileSearchContainerRef.current && mobileSearchContainerRef.current.contains(target);
      if (!clickedDesktop && !clickedMobile) {
        setIsSearchFocused(false);
        setIsCategoryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentCategory = SEARCH_CATEGORIES.find(c => c.id === searchCategory) || SEARCH_CATEGORIES[0];
  const CurrentIcon = currentCategory.icon;

  const searchResults = searchQuery.trim() === '' 
    ? [] 
    : products.filter(p => {
        const matchesQuery = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCat = searchCategory === 'all' || p.category === searchCategory;
        return matchesQuery && matchesCat;
      }).slice(0, 6);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      if (searchCategory !== 'all') {
        setSelectedCategory(searchCategory);
      }
      setViewMode('catalog');
      setIsSearchFocused(false);
      setIsCategoryDropdownOpen(false);
    }
  };

  const handleSelectProduct = (product: typeof products[0]) => {
    setIsSearchFocused(false);
    setIsCategoryDropdownOpen(false);
    openProductDetail(product);
  };

  const popularSearches = [
    'RTX 4080 Laptops',
    'MacBook M3 Pro',
    'Curved OLED Monitor',
    'Keychron Keyboard',
    'Sony 1000XM5',
    'Acer Aspire C27 AIO'
  ];

  // Handpicked popular products with images for visual search
  const popularProducts = products.filter(p => 
    p.id === 'hc-laptop-predator' ||
    p.id === 'hc-desktop-acer-c27' ||
    p.id === 'hc-desktop-imac-m3' ||
    p.id === 'hc-monitor-01' ||
    p.id === 'hc-periph-01' ||
    p.id === 'hc-audio-01'
  ).slice(0, 6);

  const renderSearchOverlay = () => {
    if (!isSearchFocused) return null;
    return (
      <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50 text-gray-900 animate-fadeIn max-h-[78vh] flex flex-col">
        {searchResults.length > 0 ? (
          <div className="flex flex-col max-h-[72vh]">
            <div className="px-3 sm:px-4 py-2.5 bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-500 uppercase tracking-wider flex items-center justify-between flex-shrink-0">
              <div className="flex items-center space-x-1.5 truncate pr-2">
                <Search className="w-3.5 h-3.5 text-black flex-shrink-0" />
                <span className="truncate">Matching "{searchQuery}"</span>
              </div>
              <span className="text-black bg-gray-200 text-[10px] font-extrabold px-2 py-0.5 rounded-full flex-shrink-0">
                {searchResults.length} {searchResults.length === 1 ? 'Item' : 'Items'}
              </span>
            </div>

            <div className="divide-y divide-gray-100 overflow-y-auto no-scrollbar py-1">
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleSelectProduct(product)}
                  className="px-3 sm:px-4 py-2.5 flex items-center space-x-3 hover:bg-gray-50 cursor-pointer transition-colors group"
                >
                  <div className="w-[50px] h-[50px] min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] bg-white rounded-xl border border-gray-200 p-1 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-2xs group-hover:border-black transition-colors">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain select-none"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-1.5">
                      <span className="text-[10px] font-bold text-black uppercase tracking-wider">
                        {product.brand}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="text-[10px] text-gray-500 capitalize truncate">
                        {product.subcategory || product.category}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-gray-900 group-hover:text-[#e42529] transition-colors truncate mt-0.5">
                      {product.name}
                    </p>

                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs font-black text-gray-950">
                        ₹{product.price.toLocaleString('en-IN')}.00
                      </span>
                      {product.mrp > product.price && (
                        <span className="text-[10px] text-gray-400 line-through">
                          ₹{product.mrp.toLocaleString('en-IN')}
                        </span>
                      )}
                      {product.discountPercent > 0 && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                          {product.discountPercent}% OFF
                        </span>
                      )}
                      <span className="text-[10px] text-emerald-600 font-medium ml-auto items-center hidden sm:flex">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1"></span>
                        In Stock
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-2.5 sm:p-3 bg-gray-50 text-center border-t border-gray-100 flex-shrink-0">
              <button
                type="button"
                onClick={() => handleSearchSubmit()}
                className="text-xs font-bold text-[#e42529] hover:underline transition-colors inline-flex items-center cursor-pointer"
              >
                View All Results in Catalog →
              </button>
            </div>
          </div>
        ) : searchQuery.trim() !== '' ? (
          <div className="p-6 sm:p-8 text-center text-gray-500 text-xs">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-2.5 text-gray-400">
              <Search className="w-5 h-5" />
            </div>
            <p className="font-bold text-gray-800 text-sm">No products found for "{searchQuery}"</p>
            <p className="mt-1 text-gray-500">Try searching for "Laptop", "Acer C27", "Monitor", or "MacBook".</p>
          </div>
        ) : (
          <div className="p-3 sm:p-4 space-y-3.5 max-h-[72vh] overflow-y-auto no-scrollbar">
            {/* 1. Popular Searches */}
            <div>
              <div className="flex items-center space-x-1.5 text-xs font-bold text-gray-700 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>Popular Searches</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {popularSearches.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setSearchQuery(item);
                      setViewMode('catalog');
                      setIsSearchFocused(false);
                    }}
                    className="text-xs bg-gray-50 hover:bg-black hover:text-white hover:border-black border border-gray-200 px-3 py-1 rounded-full transition-all text-gray-800 font-medium cursor-pointer shadow-2xs flex items-center space-x-1"
                  >
                    <Search className="w-3 h-3 text-gray-400" />
                    <span>{item}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Visual Search by Product with Images */}
            <div className="pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center space-x-1.5 text-xs font-extrabold text-gray-900">
                  <Flame className="w-4 h-4 text-black fill-black" />
                  <span>Featured Tech (Instant Stock)</span>
                </div>
                <span className="text-[10px] text-emerald-600 font-semibold flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse"></span>
                  Coimbatore Store
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {popularProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleSelectProduct(p)}
                    className="flex items-center space-x-2.5 p-2 rounded-xl border border-gray-200/80 bg-gray-50/50 hover:bg-white hover:border-gray-900 hover:shadow-sm transition-all cursor-pointer group"
                  >
                    <div className="w-[48px] h-[48px] min-w-[48px] max-w-[48px] min-h-[48px] max-h-[48px] bg-white rounded-lg border border-gray-200 p-1 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <img 
                        src={p.image} 
                        alt={p.name} 
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 select-none"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#e42529] transition-colors truncate">
                        {p.name}
                      </h4>
                      <span className="text-[10px] text-gray-500 block truncate font-medium">
                        {p.subcategory || p.category}
                      </span>
                      <div className="flex items-center space-x-1.5 mt-0.5">
                        <span className="text-xs font-black text-gray-950">
                          ₹{p.price.toLocaleString('en-IN')}
                        </span>
                        {p.discountPercent > 0 && (
                          <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded border border-emerald-200">
                            {p.discountPercent}% OFF
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>
    );
  };

  return (
    <header className="bg-[#e42529] text-white sticky top-0 z-40 shadow-md select-none">
      <div className="max-w-[1360px] mx-auto px-3 sm:px-4 py-2 sm:py-2.5">
        
        {/* ROW 1: Logo & Nav Actions */}
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left: Mobile Menu Button + Brand Logo */}
          <div className="flex items-center space-x-1.5 sm:space-x-3">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-1.5 -ml-1 text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Brand Logo - Hello Computer */}
            <div 
              onClick={() => { setViewMode('home'); setSelectedCategory('all'); setSearchQuery(''); }}
              className="flex items-center space-x-2 sm:space-x-3 cursor-pointer select-none group flex-shrink-0"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-xl p-1 shadow-sm flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <img 
                  src="/logo.png" 
                  alt="Hello Computer Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline space-x-1">
                  <span className="text-base sm:text-xl font-black tracking-tight text-white uppercase">
                    HELLO
                  </span>
                  <span className="text-base sm:text-xl font-black tracking-tight text-amber-300 uppercase">
                    COMPUTER
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-widest text-white/90 font-medium -mt-1 hidden sm:block">
                  Tech & Electronics Superstore
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Search Bar (Hidden on Mobile) */}
          <div ref={searchContainerRef} className="hidden md:block relative flex-1 max-w-2xl mx-2">
            <form 
              onSubmit={handleSearchSubmit} 
              className="flex items-center rounded-xl bg-white shadow-sm border border-white/20 focus-within:ring-2 focus-within:ring-amber-300"
            >
              {/* Category Dropdown - Pure Black Icons */}
              <div className="relative hidden lg:block">
                <button
                  type="button"
                  onClick={() => {
                    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
                    setIsSearchFocused(false);
                  }}
                  className="flex items-center space-x-2 px-3.5 py-2.5 border-r border-gray-200 text-gray-800 bg-gray-50/90 hover:bg-gray-100 transition-colors text-xs font-semibold select-none cursor-pointer rounded-l-xl"
                >
                  <CurrentIcon className="w-4 h-4 text-black flex-shrink-0" />
                  <span className="whitespace-nowrap max-w-[110px] truncate text-gray-900 font-semibold">
                    {currentCategory.label}
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${isCategoryDropdownOpen ? 'rotate-180 text-black' : ''}`} />
                </button>

                {isCategoryDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-200 p-2 z-50 animate-fadeIn text-gray-900">
                    <div className="px-3 py-1.5 text-[10px] font-black text-gray-400 uppercase tracking-wider flex items-center justify-between border-b border-gray-100 mb-1">
                      <span>Filter By Category</span>
                      <span className="text-[9px] text-gray-500 font-semibold">8 Categories</span>
                    </div>
                    <div className="max-h-80 overflow-y-auto no-scrollbar py-1 space-y-0.5">
                      {SEARCH_CATEGORIES.map(cat => {
                        const Icon = cat.icon;
                        const isSelected = searchCategory === cat.id;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => {
                              setSearchCategory(cat.id);
                              setIsCategoryDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors cursor-pointer rounded-xl ${
                              isSelected 
                                ? 'bg-gray-100 text-black font-bold ring-1 ring-gray-300' 
                                : 'text-gray-700 hover:bg-gray-50 font-medium'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-7 h-7 rounded-lg bg-gray-100 border border-gray-200/90 flex items-center justify-center flex-shrink-0">
                                <Icon className="w-3.5 h-3.5 text-black" />
                              </div>
                              <span className="truncate">{cat.label}</span>
                            </div>
                            {isSelected && <Check className="w-4 h-4 text-black flex-shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Main Search Input */}
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchFocused(true);
                  setIsCategoryDropdownOpen(false);
                }}
                onFocus={() => {
                  setIsSearchFocused(true);
                  setIsCategoryDropdownOpen(false);
                }}
                placeholder={`Search ${currentCategory.id === 'all' ? 'laptops, desktops, GPUs, MacBooks, gadgets...' : `in ${currentCategory.label}...`}`}
                className="flex-1 px-4 py-2 text-xs sm:text-sm text-gray-900 placeholder-gray-400 outline-none w-full bg-transparent"
              />

              {searchQuery && (
                <button 
                  type="button" 
                  onClick={() => setSearchQuery('')}
                  className="p-1 text-gray-400 hover:text-gray-600 mr-1 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              <button
                type="submit"
                className="bg-[#111827] hover:bg-[#1f2937] text-white px-5 py-2.5 flex items-center justify-center transition-colors font-medium text-xs sm:text-sm cursor-pointer flex-shrink-0 rounded-r-xl border-l border-gray-200"
              >
                <Search className="w-4 h-4 mr-1.5 hidden sm:inline text-amber-300" />
                <span>Search</span>
              </button>
            </form>

            {renderSearchOverlay()}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-1.5 sm:space-x-3 flex-shrink-0">
            {/* Mobile Pincode Delivery Pill (Commented Out)
            <button
              onClick={() => setIsPincodeModalOpen(true)}
              className="md:hidden flex items-center space-x-1 bg-white/10 hover:bg-white/20 border border-white/20 px-2 py-1 rounded-full text-white text-[11px] cursor-pointer"
              title="Select Delivery Pincode"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              <span className="font-bold text-amber-300">{pincodeInfo.pincode}</span>
            </button>
            */}

            {/* Compare Button (Desktop) */}
            <button
              onClick={() => setIsCompareOpen(true)}
              className="hidden md:flex relative flex-col items-center justify-center px-2 py-1.5 text-white hover:text-amber-200 transition-colors cursor-pointer rounded-xl hover:bg-white/10"
              title="Compare Products"
            >
              <div className="relative">
                <ArrowLeftRight className="w-5 h-5" />
                {compareList.length > 0 && (
                  <span className="absolute -top-1.5 -right-2.5 bg-amber-400 text-gray-950 font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow">
                    {compareList.length}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-medium mt-1">Compare</span>
            </button>

            {/* Wishlist Button (Tablet / Desktop - on mobile available via bottom nav) */}
            <button
              onClick={() => { setSelectedCategory('all'); setViewMode('catalog'); }}
              className="hidden sm:flex relative items-center justify-center p-2 text-white hover:text-amber-200 transition-colors cursor-pointer rounded-xl hover:bg-white/10"
              title="Wishlist"
            >
              <div className="relative">
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1.5 -right-2.5 bg-amber-400 text-gray-950 font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow">
                    {wishlist.length}
                  </span>
                )}
              </div>
              <span className="text-[10px] hidden md:block font-medium mt-1 ml-1">Wishlist</span>
            </button>

            {/* Cart Button (Clean Icon-Only with Counter Badge) */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center justify-center bg-gray-950 hover:bg-black border border-white/20 w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-white transition-all cursor-pointer shadow-sm group"
              title="Shopping Cart"
            >
              <div className="relative flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-amber-300" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2.5 bg-[#e42529] border border-white text-white font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </div>
            </button>

            {/* Sign In / Account (Desktop) */}
            <div className="hidden lg:flex items-center space-x-1.5 pl-1 cursor-pointer hover:opacity-90">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-semibold">Login</span>
            </div>
          </div>

        </div>

        {/* ROW 2: Mobile Search Bar (Full Width on Mobile: md:hidden) */}
        <div ref={mobileSearchContainerRef} className="md:hidden mt-2 relative w-full">
          <form 
            onSubmit={handleSearchSubmit} 
            className="flex items-center rounded-xl bg-white shadow-sm border border-white/20 focus-within:ring-2 focus-within:ring-amber-300"
          >
            <div className="pl-3 pr-1 text-gray-500">
              <Search className="w-4 h-4 text-black" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchFocused(true);
              }}
              onFocus={() => setIsSearchFocused(true)}
              placeholder="Search laptops, desktops, gadgets..."
              className="flex-1 px-2 py-2 text-xs text-gray-900 placeholder-gray-400 outline-none w-full bg-transparent"
            />
            {searchQuery && (
              <button 
                type="button" 
                onClick={() => setSearchQuery('')}
                className="p-1 text-gray-400 hover:text-gray-600 mr-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="submit"
              className="bg-[#111827] hover:bg-[#1f2937] text-white px-3.5 py-2 text-xs font-bold rounded-r-xl cursor-pointer"
            >
              Search
            </button>
          </form>

          {renderSearchOverlay()}
        </div>

      </div>
    </header>
  );
};
