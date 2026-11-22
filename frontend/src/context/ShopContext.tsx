import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, PincodeData } from '../types';
import { PRODUCTS_DATA } from '../data/products';

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  wishlist: string[];
  compareList: Product[];
  pincodeInfo: PincodeData;
  searchQuery: string;
  selectedCategory: string;
  selectedSubcategory: string | null;
  selectedBrand: string | null;
  viewMode: 'home' | 'catalog' | 'pc-builder' | 'product-detail';
  selectedProduct: Product | null;
  activeQuickViewProduct: Product | null;
  isCartOpen: boolean;
  isCompareOpen: boolean;
  isPincodeModalOpen: boolean;
  isStoreLocatorOpen: boolean;
  isCheckoutOpen: boolean;
  isMobileMenuOpen: boolean;
  appliedCoupon: { code: string; discountAmount: number } | null;
  cartSubtotal: number;
  cartTotal: number;
  cartDiscount: number;
  
  // Actions
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (cat: string) => void;
  setSelectedSubcategory: (sub: string | null) => void;
  setSelectedBrand: (brand: string | null) => void;
  setViewMode: (mode: 'home' | 'catalog' | 'pc-builder' | 'product-detail') => void;
  openProductDetail: (product: Product) => void;
  
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQty: (productId: string, quantity: number) => void;
  clearCart: () => void;
  
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: string) => void;
  isInCompare: (productId: string) => boolean;
  clearCompare: () => void;
  
  setPincode: (pincode: string) => boolean;
  applyCouponCode: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  
  setIsCartOpen: (open: boolean) => void;
  setIsCompareOpen: (open: boolean) => void;
  setIsPincodeModalOpen: (open: boolean) => void;
  setIsStoreLocatorOpen: (open: boolean) => void;
  setIsCheckoutOpen: (open: boolean) => void;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const PINCODE_MAP: Record<string, { city: string; state: string; isExpressAvailable: boolean; standardDays: number }> = {
  '641012': { city: 'Coimbatore', state: 'Tamil Nadu', isExpressAvailable: true, standardDays: 1 },
  '600001': { city: 'Chennai', state: 'Tamil Nadu', isExpressAvailable: true, standardDays: 1 },
  '560001': { city: 'Bengaluru', state: 'Karnataka', isExpressAvailable: true, standardDays: 1 },
  '400001': { city: 'Mumbai', state: 'Maharashtra', isExpressAvailable: true, standardDays: 2 },
  '110001': { city: 'New Delhi', state: 'Delhi NCR', isExpressAvailable: true, standardDays: 2 },
  '500001': { city: 'Hyderabad', state: 'Telangana', isExpressAvailable: true, standardDays: 2 },
  '700001': { city: 'Kolkata', state: 'West Bengal', isExpressAvailable: false, standardDays: 3 },
  '411001': { city: 'Pune', state: 'Maharashtra', isExpressAvailable: true, standardDays: 2 },
  '380001': { city: 'Ahmedabad', state: 'Gujarat', isExpressAvailable: true, standardDays: 2 },
};

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(PRODUCTS_DATA);
  const [cart, setCart] = useState<CartItem[]>(() => {
    // initialize with a default popular item so the user immediately sees Reliance Digital cart styling
    return [
      { product: PRODUCTS_DATA[0], quantity: 1 }
    ];
  });
  const [wishlist, setWishlist] = useState<string[]>(['hc-laptop-02']);
  const [compareList, setCompareList] = useState<Product[]>([]);
  
  const [pincodeInfo, setPincodeInfo] = useState<PincodeData>({
    pincode: '641012',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    isExpressAvailable: true,
    standardDays: 1
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [viewMode, setViewModeState] = useState<'home' | 'catalog' | 'pc-builder' | 'product-detail'>('home');

  const setViewMode = (mode: 'home' | 'catalog' | 'pc-builder' | 'product-detail') => {
    setViewModeState(mode);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(PRODUCTS_DATA[0]);
  
  // Modals state
  const [activeQuickViewProduct, setActiveQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isPincodeModalOpen, setIsPincodeModalOpen] = useState(false);
  const [isStoreLocatorOpen, setIsStoreLocatorOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Coupon
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discountAmount: number } | null>(null);

  // Cart totals calculation
  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const cartDiscount = appliedCoupon ? appliedCoupon.discountAmount : 0;
  const cartTotal = Math.max(0, cartSubtotal - cartDiscount);

  const addToCart = (product: Product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateCartQty = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (productId: string) => {
    setWishlist(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const addToCompare = (product: Product) => {
    setCompareList(prev => {
      if (prev.find(p => p.id === product.id)) return prev;
      if (prev.length >= 4) {
        alert('You can compare a maximum of 4 products at a time.');
        return prev;
      }
      return [...prev, product];
    });
    setIsCompareOpen(true);
  };

  const removeFromCompare = (productId: string) => {
    setCompareList(prev => prev.filter(p => p.id !== productId));
  };

  const isInCompare = (productId: string) => compareList.some(p => p.id === productId);

  const clearCompare = () => setCompareList([]);

  const setPincode = (pincode: string): boolean => {
    if (!/^\d{6}$/.test(pincode)) {
      return false;
    }
    const matched = PINCODE_MAP[pincode];
    if (matched) {
      setPincodeInfo({ pincode, ...matched });
    } else {
      setPincodeInfo({
        pincode,
        city: 'Delivery Location',
        state: 'India',
        isExpressAvailable: false,
        standardDays: 3
      });
    }
    return true;
  };

  const applyCouponCode = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'HELLOFIRST') {
      const discount = Math.min(1000, cartSubtotal * 0.1);
      setAppliedCoupon({ code: cleanCode, discountAmount: discount });
      return { success: true, message: 'HELLOFIRST applied! Flat ₹1,000 instant discount.' };
    }
    if (cleanCode === 'TECH10') {
      const discount = Math.round(cartSubtotal * 0.1);
      setAppliedCoupon({ code: cleanCode, discountAmount: discount });
      return { success: true, message: 'TECH10 applied! 10% instant discount savings.' };
    }
    if (cleanCode === 'RELIANCE5') {
      const discount = Math.round(cartSubtotal * 0.05);
      setAppliedCoupon({ code: cleanCode, discountAmount: discount });
      return { success: true, message: 'RELIANCE5 applied! 5% Super Saver discount.' };
    }
    return { success: false, message: 'Invalid or expired coupon code. Try HELLOFIRST or TECH10.' };
  };

  const removeCoupon = () => setAppliedCoupon(null);

  const openQuickView = (product: Product) => setActiveQuickViewProduct(product);
  const closeQuickView = () => setActiveQuickViewProduct(null);

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setViewMode('product-detail');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
        compareList,
        pincodeInfo,
        searchQuery,
        selectedCategory,
        selectedSubcategory,
        selectedBrand,
        viewMode,
        selectedProduct,
        activeQuickViewProduct,
        isCartOpen,
        isCompareOpen,
        isPincodeModalOpen,
        isStoreLocatorOpen,
        isCheckoutOpen,
        appliedCoupon,
        cartSubtotal,
        cartTotal,
        cartDiscount,
        
        setSearchQuery,
        setSelectedCategory,
        setSelectedSubcategory,
        setSelectedBrand,
        setViewMode,
        openProductDetail,
        addToCart,
        removeFromCart,
        updateCartQty,
        clearCart,
        toggleWishlist,
        isInWishlist,
        addToCompare,
        removeFromCompare,
        isInCompare,
        clearCompare,
        setPincode,
        applyCouponCode,
        removeCoupon,
        openQuickView,
        closeQuickView,
        setIsCartOpen,
        setIsCompareOpen,
        setIsPincodeModalOpen,
        setIsStoreLocatorOpen,
        setIsCheckoutOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

