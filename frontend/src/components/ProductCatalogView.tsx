import React, { useState, useMemo, useEffect } from 'react';
import { 
  Filter, 
  Star, 
  ChevronRight, 
  X,
  Layers
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';
import { CATEGORIES_DATA } from '../data/categories';

export const ProductCatalogView: React.FC = () => {
  const { 
    products, 
    selectedCategory, 
    setSelectedCategory, 
    selectedSubcategory, 
    setSelectedSubcategory, 
    selectedBrand,
    setSelectedBrand,
    searchQuery,
    setViewMode 
  } = useShop();

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Synchronize brand filter from context (e.g. clicked from Gaming Showcase)
  useEffect(() => {
    if (selectedBrand) {
      setSelectedBrands([selectedBrand]);
    }
  }, [selectedBrand]);

  // Scroll to top of catalog when category or subcategory changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [selectedCategory, selectedSubcategory]);
  const [maxPrice, setMaxPrice] = useState<number>(400000);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'relevance' | 'price-asc' | 'price-desc' | 'rating' | 'discount'>('relevance');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const allBrands = useMemo(() => {
    return Array.from(new Set(products.map(p => p.brand))).sort();
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      if (selectedSubcategory && selectedSubcategory !== 'deals' && p.subcategory !== selectedSubcategory) {
        return false;
      }
      if (selectedSubcategory === 'deals' && !p.isDealOfDay) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matches = p.name.toLowerCase().includes(q) ||
                        p.brand.toLowerCase().includes(q) ||
                        p.subcategory.toLowerCase().includes(q);
        if (!matches) return false;
      }
      if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) {
        return false;
      }
      if (p.price > maxPrice) {
        return false;
      }
      if (inStockOnly && !p.inStock) {
        return false;
      }
      if (p.rating < minRating) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'discount') return b.discountPercent - a.discountPercent;
      return 0;
    });
  }, [products, selectedCategory, selectedSubcategory, searchQuery, selectedBrands, maxPrice, inStockOnly, minRating, sortBy]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedBrand(null);
    setMaxPrice(400000);
    setInStockOnly(false);
    setMinRating(0);
    setSelectedCategory('all');
    setSelectedSubcategory(null);
  };

  const currentCategoryName = selectedCategory === 'all' 
    ? 'All Tech Products' 
    : CATEGORIES_DATA.find(c => c.id === selectedCategory)?.name || selectedCategory;

  return (
    <div className="max-w-[1360px] mx-auto px-4 py-6">
      
      {/* Clean Breadcrumb Bar */}
      <div className="flex items-center space-x-2 text-xs text-gray-500 mb-5">
        <button onClick={() => setViewMode('home')} className="hover:text-[#e42529] font-medium transition-colors">Home</button>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-900 font-bold">{currentCategoryName}</span>
        {selectedSubcategory && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#e42529] font-semibold">{selectedSubcategory}</span>
          </>
        )}
      </div>

      {/* Main Layout: Filters Sidebar + Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Filter Sidebar - Hidden on mobile, open via drawer */}
        <aside className="hidden lg:block lg:col-span-3 bg-white rounded-2xl border border-gray-200/90 p-5 shadow-sm space-y-6">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-[#e42529]" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Filters</h3>
            </div>
            <button
              onClick={clearAllFilters}
              className="text-xs text-[#e42529] hover:underline font-semibold cursor-pointer"
            >
              Reset All
            </button>
          </div>

          {/* Categories with Real Images */}
          <div>
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2.5">
              Categories
            </h4>
            <div className="space-y-1.5 text-xs">
              
              {/* All Categories Option */}
              <button
                onClick={() => { setSelectedCategory('all'); setSelectedSubcategory(null); }}
                className={`w-full flex items-center justify-between py-2 px-2.5 rounded-xl font-semibold transition-all cursor-pointer ${
                  selectedCategory === 'all' 
                    ? 'bg-[#e42529] text-white shadow-sm' 
                    : 'text-gray-700 hover:bg-gray-50 border border-transparent hover:border-gray-200'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center text-inherit">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <span>All Categories</span>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  selectedCategory === 'all' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {products.length}
                </span>
              </button>

              {/* Individual Categories with Image Thumbnails */}
              {CATEGORIES_DATA.map(cat => {
                const count = products.filter(p => p.category === cat.id).length;
                const isSelected = selectedCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => { setSelectedCategory(cat.id); setSelectedSubcategory(null); }}
                    className={`w-full flex items-center justify-between py-1.5 px-2.5 rounded-xl font-medium transition-all cursor-pointer ${
                      isSelected 
                        ? 'bg-[#e42529] text-white shadow-sm' 
                        : 'text-gray-700 hover:bg-gray-50 border border-transparent hover:border-gray-200'
                    }`}
                  >
                    <div className="flex items-center space-x-2 truncate">
                      <img 
                        src={cat.thumbnailImage} 
                        alt={cat.name} 
                        className="w-6 h-6 rounded-md object-cover flex-shrink-0 border border-gray-200" 
                      />
                      <span className="truncate text-left text-xs font-semibold">{cat.name}</span>
                    </div>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold flex-shrink-0 ml-1 ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="border-t border-gray-100 pt-4">
            <div className="flex justify-between items-center text-xs mb-2">
              <span className="font-bold text-gray-800 uppercase tracking-wider">Price</span>
              <span className="font-extrabold text-[#e42529]">Up to ₹{maxPrice.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="10000"
              max="400000"
              step="5000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#e42529] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-gray-400 font-medium mt-1">
              <span>₹10,000</span>
              <span>₹4,00,000+</span>
            </div>
          </div>

          {/* Brands Checklist */}
          <div className="border-t border-gray-100 pt-4">
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2.5">
              Brand
            </h4>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1 text-xs">
              {allBrands.map(brand => (
                <label key={brand} className="flex items-center space-x-2.5 text-gray-700 cursor-pointer hover:text-gray-900 select-none py-0.5">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="rounded border-gray-300 text-[#e42529] focus:ring-0 cursor-pointer w-3.5 h-3.5"
                  />
                  <span className="font-medium">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Minimum Rating */}
          <div className="border-t border-gray-100 pt-4">
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2.5">
              Rating
            </h4>
            <div className="space-y-1.5 text-xs">
              {[4.8, 4.5, 4.0].map(star => (
                <button
                  key={star}
                  onClick={() => setMinRating(minRating === star ? 0 : star)}
                  className={`w-full flex items-center justify-between p-2 rounded-xl border transition-all cursor-pointer ${
                    minRating === star 
                      ? 'border-[#e42529] bg-red-50 text-[#e42529] font-bold' 
                      : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>{star} Stars & Above</span>
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </button>
              ))}
            </div>
          </div>

          {/* Availability Toggle */}
          <div className="border-t border-gray-100 pt-4">
            <label className="flex items-center justify-between cursor-pointer text-xs font-bold text-gray-800 select-none">
              <span>In Stock Only</span>
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="rounded border-gray-300 text-[#e42529] focus:ring-0 cursor-pointer w-4 h-4"
              />
            </label>
          </div>

        </aside>

        {/* Right Products Showcase Area */}
        <div className="lg:col-span-9 space-y-3 sm:space-y-4">
          
          {/* Mobile Filter & Sort Control Bar (Visible only on mobile: lg:hidden) */}
          <div className="lg:hidden flex items-center justify-between gap-2 bg-white p-2.5 rounded-xl border border-gray-200/90 shadow-2xs">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex-1 flex items-center justify-center space-x-1.5 py-2 px-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 text-xs font-bold text-gray-800 transition-colors cursor-pointer"
            >
              <Filter className="w-3.5 h-3.5 text-black" />
              <span>Filters {(selectedBrands.length > 0 || inStockOnly || minRating > 0 || maxPrice < 400000) ? '● Active' : ''}</span>
            </button>
            
            <div className="flex items-center space-x-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1.5 text-xs text-gray-800 font-semibold outline-none cursor-pointer"
              >
                <option value="relevance">Featured</option>
                <option value="price-asc">Price ↑</option>
                <option value="price-desc">Price ↓</option>
                <option value="discount">Discount %</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Desktop Top Sort & Count Bar (Hidden on mobile) */}
          <div className="hidden lg:flex bg-white p-4 rounded-2xl border border-gray-200/90 items-center justify-between gap-3 shadow-sm">
            <div className="text-xs text-gray-500">
              Showing <strong className="text-gray-900">{filteredProducts.length}</strong> items for <span className="font-bold text-[#e42529]">"{currentCategoryName}"</span>
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-2 text-xs">
              <span className="font-bold text-gray-400 uppercase tracking-wider text-[11px]">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 text-gray-800 font-medium outline-none focus:border-[#e42529] cursor-pointer"
              >
                <option value="relevance">Relevance & Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="discount">Highest Discount %</option>
                <option value="rating">Top Customer Rated</option>
              </select>
            </div>
          </div>

          {/* Active Filter Pills */}
          {(selectedBrands.length > 0 || inStockOnly || minRating > 0 || maxPrice < 400000) && (
            <div className="flex flex-wrap gap-1.5 sm:gap-2 items-center bg-gray-50 p-2 sm:p-2.5 rounded-xl border border-gray-200/70 text-xs">
              <span className="font-bold text-gray-400 text-[11px]">Active Filters:</span>
              {selectedBrands.map(b => (
                <span key={b} className="bg-white border border-gray-200 px-2 py-0.5 rounded-full flex items-center space-x-1 shadow-2xs text-[11px]">
                  <span>{b}</span>
                  <X className="w-3 h-3 cursor-pointer text-gray-400 hover:text-red-600" onClick={() => toggleBrand(b)} />
                </span>
              ))}
              {inStockOnly && (
                <span className="bg-white border border-gray-200 px-2 py-0.5 rounded-full flex items-center space-x-1 shadow-2xs text-[11px]">
                  <span>In Stock</span>
                  <X className="w-3 h-3 cursor-pointer text-gray-400 hover:text-red-600" onClick={() => setInStockOnly(false)} />
                </span>
              )}
              {minRating > 0 && (
                <span className="bg-white border border-gray-200 px-2 py-0.5 rounded-full flex items-center space-x-1 shadow-2xs text-[11px]">
                  <span>{minRating}+ Stars</span>
                  <X className="w-3 h-3 cursor-pointer text-gray-400 hover:text-red-600" onClick={() => setMinRating(0)} />
                </span>
              )}
              {maxPrice < 400000 && (
                <span className="bg-white border border-gray-200 px-2 py-0.5 rounded-full flex items-center space-x-1 shadow-2xs text-[11px]">
                  <span>Under ₹{maxPrice.toLocaleString('en-IN')}</span>
                  <X className="w-3 h-3 cursor-pointer text-gray-400 hover:text-red-600" onClick={() => setMaxPrice(400000)} />
                </span>
              )}
              <button
                onClick={clearAllFilters}
                className="text-[#e42529] font-bold ml-1 hover:underline text-[11px] cursor-pointer"
              >
                Clear All
              </button>
            </div>
          )}

          {/* Products Grid - 2 columns on mobile, 3 on desktop! */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 text-center space-y-3">
              <p className="text-base font-bold text-gray-800">No matching tech products found</p>
              <p className="text-xs text-gray-500">Try adjusting your filters or price range.</p>
              <button
                onClick={clearAllFilters}
                className="bg-[#e42529] text-white text-xs font-bold px-4 py-2 rounded-xl cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

        </div>

      </div>

      {/* Mobile Filter Slide-Up Sheet */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fadeIn"
            onClick={() => setIsMobileFilterOpen(false)}
          />

          <div className="relative bg-white rounded-t-3xl max-h-[85vh] flex flex-col shadow-2xl z-10 animate-slideUp">
            {/* Sheet Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-black" />
                <h3 className="font-extrabold text-sm text-gray-900 uppercase tracking-wider">
                  Filter Products
                </h3>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-[#e42529] font-bold hover:underline cursor-pointer"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-black cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sheet Content */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-5 text-xs">
              
              {/* Categories */}
              <div>
                <h4 className="font-bold text-gray-800 uppercase tracking-wider mb-2">Categories</h4>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    onClick={() => { setSelectedCategory('all'); setSelectedSubcategory(null); }}
                    className={`p-2 rounded-xl text-left font-semibold border transition-all ${
                      selectedCategory === 'all' 
                        ? 'bg-black text-white border-black' 
                        : 'bg-gray-50 text-gray-700 border-gray-200'
                    }`}
                  >
                    All Categories ({products.length})
                  </button>
                  {CATEGORIES_DATA.map(cat => {
                    const count = products.filter(p => p.category === cat.id).length;
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => { setSelectedCategory(cat.id); setSelectedSubcategory(null); }}
                        className={`p-2 rounded-xl text-left font-semibold border truncate transition-all ${
                          isSelected 
                            ? 'bg-black text-white border-black' 
                            : 'bg-gray-50 text-gray-700 border-gray-200'
                        }`}
                      >
                        {cat.name} ({count})
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price Slider */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-800 uppercase tracking-wider">Price</span>
                  <span className="font-black text-[#e42529]">Up to ₹{maxPrice.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="400000"
                  step="5000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-black cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                  <span>₹10,000</span>
                  <span>₹4,00,000+</span>
                </div>
              </div>

              {/* Brands */}
              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-bold text-gray-800 uppercase tracking-wider mb-2">Brands</h4>
                <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-1">
                  {allBrands.map(brand => (
                    <label key={brand} className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="rounded border-gray-300 text-black focus:ring-0 w-3.5 h-3.5"
                      />
                      <span className="font-medium truncate">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* In Stock */}
              <div className="border-t border-gray-100 pt-4">
                <label className="flex items-center justify-between cursor-pointer font-bold text-gray-800">
                  <span>In Stock Only</span>
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="rounded border-gray-300 text-black focus:ring-0 w-4 h-4"
                  />
                </label>
              </div>

            </div>

            {/* Sheet Footer */}
            <div className="p-3 border-t border-gray-200 bg-gray-50 flex items-center space-x-3">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-3 bg-[#e42529] hover:bg-[#c01519] text-white text-xs font-bold rounded-xl shadow-sm text-center cursor-pointer"
              >
                Apply Filters ({filteredProducts.length} Results)
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
