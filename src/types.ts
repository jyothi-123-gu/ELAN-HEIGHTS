export interface Color {
  name: string;
  hex: string;
}

export type PriceSegment = 'Budget' | 'Value' | 'Mid-Range' | 'Premium' | 'Luxury' | 'Designer Collections';

export type FootwearGroup =
  | 'Couture & Heels'
  | 'Baby & Kids'
  | 'Sports & Sneakers'
  | 'Everyday Casual'
  | 'Boots & Winter'
  | 'Comfort & Orthopedic';

export interface Product {
  id: string;
  name: string;
  category: string;
  group: FootwearGroup;
  segment: PriceSegment;
  price: number;
  description: string;
  features: string[];
  colors: Color[];
  sizes: number[];
  rating: number;
  reviewsCount: number;
  image: string;
  hoverImage?: string;
  isNew?: boolean;
  isBestseller?: boolean;
  material: string;
  heelHeight?: string;
  ageGroup: 'Toddler' | 'Junior' | 'Adult' | 'Universal';
  tags?: string[];
}

export interface CartItem {
  id: string; // unique cart entry ID (productId + color + size)
  product: Product;
  selectedColor: Color;
  selectedSize: number;
  quantity: number;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  sizeBought: number;
  colorBought: string;
}

export interface CheckoutDetails {
  fullName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  giftWrap: boolean;
  giftMessage: string;
  packagingPreference: 'Signature Rose Gold Box' | 'Sustainable Minimal Packaging' | 'VIP Velvet Coffer';
}
