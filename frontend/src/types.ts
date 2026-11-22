export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number;
  mrp: number;
  discountPercent: number;
  rating: number;
  ratingCount: number;
  image: string;
  additionalImages?: string[];
  inStock: boolean;
  fastDelivery: boolean;
  emiStartsAt: number;
  keyFeatures: string[];
  specs: Record<string, string>;
  warranty: string;
  isDealOfDay?: boolean;
  isBestSeller?: boolean;
  isTrending?: boolean;
  badge?: string;
  bankOffers?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedWarranty?: boolean;
}

export interface CategoryItem {
  id: string;
  name: string;
  iconName: string;
  thumbnailImage: string;
  subcategories: {
    title: string;
    items: string[];
  }[];
  topBrands: string[];
  featuredBanner?: {
    title: string;
    subtitle: string;
    discountText: string;
    image: string;
  };
}

export interface PincodeData {
  pincode: string;
  city: string;
  state: string;
  isExpressAvailable: boolean;
  standardDays: number;
}
