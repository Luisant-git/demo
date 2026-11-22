import React, { useEffect } from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { TopUtilityBar } from './components/Header/TopUtilityBar';
import { MainHeader } from './components/Header/MainHeader';
import { MegaMenu } from './components/Header/MegaMenu';
import { HeroCarousel } from './components/HeroCarousel';
import { TrustBadges } from './components/TrustBadges';
import { DealsOfTheDay } from './components/DealsOfTheDay';
import { CategoryQuickLinks } from './components/CategoryQuickLinks';
import { GamingShowcaseBanner } from './components/GamingShowcaseBanner';
import { FeaturedTabs } from './components/FeaturedTabs';
import { CustomPCBuilderBanner } from './components/CustomPCBuilderBanner';
import { BrandLogos } from './components/BrandLogos';
import { ProductCatalogView } from './components/ProductCatalogView';
import { InteractivePCBuilder } from './components/InteractivePCBuilder';
import { ProductDetailView } from './components/ProductDetailView';
import { Footer } from './components/Footer';

// Global Modals
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { CompareModal } from './components/CompareModal';
import { PincodeModal } from './components/PincodeModal';
import { StoreLocatorModal } from './components/StoreLocatorModal';
import { CheckoutModal } from './components/CheckoutModal';
import { MobileBottomNav } from './components/Header/MobileBottomNav';
import { MobileCategoryDrawer } from './components/Header/MobileCategoryDrawer';

const AppContent: React.FC = () => {
  const { viewMode, selectedProduct, selectedCategory, selectedSubcategory } = useShop();

  // Scroll to the very top whenever viewMode, category, or selected product changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [viewMode, selectedProduct?.id, selectedCategory, selectedSubcategory]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-[#f5f7fa] text-gray-900 selection:bg-red-500 selection:text-white">
      {/* 1. Header Stack (Reliance Digital Exact Layout) */}
      <TopUtilityBar />
      <MainHeader />
      <MegaMenu />

      {/* 2. Dynamic View Content */}
      <main className="flex-1 pb-16 md:pb-0">
        {viewMode === 'home' && (
          <>
            <HeroCarousel />
            <TrustBadges />
            <DealsOfTheDay />
            <CategoryQuickLinks />
            <GamingShowcaseBanner />
            <FeaturedTabs />
            <CustomPCBuilderBanner />
            <BrandLogos />
          </>
        )}

        {viewMode === 'catalog' && (
          <ProductCatalogView />
        )}

        {viewMode === 'pc-builder' && (
          <InteractivePCBuilder />
        )}

        {viewMode === 'product-detail' && (
          <ProductDetailView />
        )}
      </main>

      {/* 3. Comprehensive Footer */}
      <Footer />

      {/* 4. Native Mobile Bottom Navigation Bar (Mobile Viewport Only) */}
      <MobileBottomNav />

      {/* 5. Mobile Category Drawer */}
      <MobileCategoryDrawer />

      {/* 6. Global Modals & Drawers */}
      <ProductQuickViewModal />
      <CartDrawer />
      <CompareModal />
      {/* Choose Delivery Location Modal (Commented Out) */}
      {/* <PincodeModal /> */}
      <StoreLocatorModal />
      <CheckoutModal />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}

