export interface MenuItem {
  id: string;
  name: string;
  turkishName: string;
  category: 'starters' | 'kebabs' | 'pide' | 'main' | 'desserts' | 'drinks';
  description: string;
  pricePKR: number;
  image: string;
  tag?: string;
  spicyLevel?: number; // 0 to 3
  isVegetarian?: boolean;
  isPopular?: boolean;
  portionSize?: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
  favoriteDish: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'kebabs' | 'pide' | 'desserts' | 'ambiance';
  categoryLabel: string;
  imageUrl: string;
  description: string;
}

export interface ReservationRequest {
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'main-hall' | 'family-cabana' | 'terrace' | 'vip-majlis';
  specialRequests?: string;
}

export interface ConfirmedBooking {
  bookingId: string;
  createdAt: string;
  details: ReservationRequest;
}
