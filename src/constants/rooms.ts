export interface Room {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  amenities: string[];
  size: string;
  capacity: string;
  gallery: string[];
}

export const ROOMS: Room[] = [
  {
    id: 'royal-suite',
    name: 'Royal Penthouse Suite',
    category: 'Suites',
    price: 2500,
    description: 'Breathtaking 360-degree skyline views with private terrace, personal butler service, and a master bathroom clad in Italian Carrara marble.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop',
    amenities: ['Private Elevator', '24/7 Butler', 'Personal Chef', 'Private Spa', 'Wine Cellar'],
    size: '450 m²',
    capacity: '4 Adults',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'ambassador-room',
    name: 'Ambassador Executive Room',
    category: 'Executive',
    price: 850,
    description: 'Designed for the discerning global traveler, combining contemporary digital workspace features with timeless luxury finishes.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop',
    amenities: ['High-speed Wi-Fi', 'Smart TV', 'Nespresso Machine', 'Workspace', 'Executive Lounge Access'],
    size: '85 m²',
    capacity: '2 Adults',
    gallery: []
  },
  {
    id: 'grand-deluxe',
    name: 'Grand Deluxe Riverview',
    category: 'Deluxe',
    price: 550,
    description: 'Elegantly appointed rooms featuring floor-to-ceiling windows overlooking the historic river, featuring hand-tufted silk carpets.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop',
    amenities: ['River View', 'Smart Home Controls', 'Luxury Linens', 'Mini Bar', 'Rain Shower'],
    size: '60 m²',
    capacity: '2 Adults',
    gallery: []
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Garden Suite',
    category: 'Suites',
    price: 1800,
    description: 'A sanctuary of peace featuring a private botanical garden, temperature-controlled outdoor pool, and vaulted ceilings.',
    image: 'https://images.unsplash.com/photo-1591088398332-8a77d3996844?q=80&w=1200&auto=format&fit=crop',
    amenities: ['Private Garden', 'Heated Pool', 'Outdoor Lounge', 'Library', 'Dining Hall'],
    size: '320 m²',
    capacity: '2 Adults, 2 Children',
    gallery: []
  }
];
