import { CategoryItem } from '../types';

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: 'laptops',
    name: 'LAPTOPS & NOTEBOOKS',
    iconName: 'Laptop',
    thumbnailImage: '/categories/thumb-laptops.png',
    subcategories: [
      {
        title: 'By Category',
        items: [
          'Gaming Laptops',
          'Thin & Light Ultrabooks',
          'MacBooks (Apple M3/M2)',
          'Creator & 4K OLED Laptops',
          'Student & Budget Laptops',
          '2-in-1 Touchscreen Laptops'
        ]
      },
      {
        title: 'By Processor',
        items: [
          'Intel Core Ultra / i9 / i7',
          'Intel Core i5 / i3',
          'AMD Ryzen 9 / 7',
          'AMD Ryzen 5 / 3',
          'Apple M3 Pro / M3 Max'
        ]
      },
      {
        title: 'By Graphics',
        items: [
          'NVIDIA GeForce RTX 4090 / 4080',
          'NVIDIA GeForce RTX 4070 / 4060',
          'NVIDIA GeForce RTX 4050 / 3050',
          'Intel Arc Graphics'
        ]
      }
    ],
    topBrands: ['Apple', 'ASUS ROG', 'HP', 'Dell Alienware', 'Lenovo Legion', 'Acer Predator', 'MSI'],
    featuredBanner: {
      title: 'Next-Gen AI Laptops',
      subtitle: 'Powered by Intel Core Ultra & RTX 40 Series',
      discountText: 'Up to 35% Off + Extra ₹5000 Exchange Bonus',
      image: '/products/asus-rog-zephyrus-g16.jpg'
    }
  },
  {
    id: 'desktops',
    name: 'DESKTOPS & ALL-IN-ONES',
    iconName: 'Monitor',
    thumbnailImage: '/categories/thumb-desktops.png',
    subcategories: [
      {
        title: 'Desktop Types',
        items: [
          'All-in-One (AIO) PCs',
          'Pre-Built Gaming Rigs',
          'Custom Workstations',
          'Mini PCs & NUCs',
          'Apple Mac Studio & Mac Mini'
        ]
      },
      {
        title: 'Monitors & Displays',
        items: [
          'Gaming Monitors (144Hz - 360Hz)',
          'Curved Ultrawide Displays',
          '4K UHD Professional Displays',
          'OLED & Mini-LED Displays',
          'Touchscreen Monitors'
        ]
      }
    ],
    topBrands: ['Apple', 'HP Pavilion', 'Dell Inspiron', 'Lenovo IdeaCentre', 'ASUS ROG', 'MSI Trident'],
    featuredBanner: {
      title: 'Ultimate 27" 4K All-In-One',
      subtitle: 'Minimalist Desk Setup with Wireless Peripherals',
      discountText: 'Starting from ₹49,990',
      image: '/products/hc-desktop-acer-c27.jpg'
    }
  },
  {
    id: 'components',
    name: 'PC COMPONENTS',
    iconName: 'Cpu',
    thumbnailImage: '/categories/thumb-components.png',
    subcategories: [
      {
        title: 'Core Hardware',
        items: [
          'Processors (Intel & AMD)',
          'Graphics Cards (NVIDIA & AMD)',
          'Motherboards (Z790, B650, X670)',
          'RAM (DDR5 & DDR4)',
          'Solid State Drives (M.2 NVMe Gen4/Gen5)'
        ]
      },
      {
        title: 'Cooling & Power',
        items: [
          'AIO Liquid Coolers (240mm / 360mm)',
          'Power Supply Units (80 Plus Gold/Plat)',
          'PC Cabinets & Cases',
          'RGB Case Fans & Hubs',
          'Thermal Pastes & Custom Cables'
        ]
      }
    ],
    topBrands: ['NVIDIA', 'Intel', 'AMD', 'Corsair', 'ASUS ROG', 'MSI', 'Gigabyte', 'Kingston'],
    featuredBanner: {
      title: 'GeForce RTX 40 Super Series',
      subtitle: 'DLSS 3.5 & Full Ray Tracing In Stock',
      discountText: 'Instant ₹4000 Off on HDFC Cards',
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80'
    }
  },
  {
    id: 'gaming-peripherals',
    name: 'GAMING & PERIPHERALS',
    iconName: 'Gamepad2',
    thumbnailImage: '/categories/thumb-gaming.png',
    subcategories: [
      {
        title: 'Gaming Gear',
        items: [
          'Mechanical Gaming Keyboards',
          'Ultra-Lightweight Gaming Mice',
          'Surround Sound Gaming Headsets',
          'Streaming Microphones & Boom Arms',
          'Game Controllers & Joysticks'
        ]
      },
      {
        title: 'Console Gaming',
        items: [
          'PlayStation 5 Consoles & Games',
          'Xbox Series X / S Consoles',
          'Nintendo Switch OLED',
          'VR Headsets (Meta Quest 3)'
        ]
      }
    ],
    topBrands: ['Logitech G', 'Razer', 'Corsair', 'Sony PlayStation', 'SteelSeries', 'HyperX'],
    featuredBanner: {
      title: 'Pro Esports Arena Gear',
      subtitle: 'Lightweight Wireless Mice & Rapid Trigger Keyboards',
      discountText: 'Up to 50% Off Top Brands',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80'
    }
  },
  {
    id: 'audio',
    name: 'AUDIO & SOUND',
    iconName: 'Headphones',
    thumbnailImage: '/categories/thumb-audio.png',
    subcategories: [
      {
        title: 'Headphones & Earphones',
        items: [
          'Active Noise Cancelling Headphones',
          'True Wireless (TWS) Earbuds',
          'Studio Monitor Headphones',
          'Neckbands & Sports Earphones'
        ]
      },
      {
        title: 'Speakers & Soundbars',
        items: [
          'Dolby Atmos Soundbars',
          'Bluetooth Party Speakers',
          'Desktop 2.1 / 5.1 Speaker Systems',
          'Smart Home Speakers (Alexa / Google)'
        ]
      }
    ],
    topBrands: ['Sony', 'Bose', 'Sennheiser', 'JBL', 'Marshall', 'Boat', 'Apple'],
    featuredBanner: {
      title: 'Sony 1000XM5 Studio Sound',
      subtitle: 'Industry-Leading Noise Cancellation',
      discountText: 'Special Price: ₹26,990',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80'
    }
  },
  {
    id: 'accessories',
    name: 'ACCESSORIES & STORAGE',
    iconName: 'HardDrive',
    thumbnailImage: '/categories/thumb-storage.png',
    subcategories: [
      {
        title: 'Storage & Memory',
        items: [
          'Portable SSDs (Up to 2000MB/s)',
          'External Hard Drives (2TB - 10TB)',
          'High Speed Flash Drives',
          'MicroSD Cards for Cameras & Steam Deck'
        ]
      },
      {
        title: 'Connectivity & Power',
        items: [
          'Thunderbolt 4 & USB-C Docks',
          '65W - 140W GaN Fast Chargers',
          'High-Speed Wi-Fi 6E/7 Mesh Routers',
          'Ergonomic Laptop Stands & Lapdesks',
          'UPS & Surge Protectors'
        ]
      }
    ],
    topBrands: ['SanDisk', 'Samsung', 'Western Digital', 'TP-Link', 'Anker', 'Belkin'],
    featuredBanner: {
      title: 'High Speed GaN Chargers',
      subtitle: 'Power your Laptop & Phone with One Compact Brick',
      discountText: 'Starting ₹1,499',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80'
    }
  }
  /* Commented out MOBILES & TABLETS per user request
  ,
  {
    id: 'mobiles',
    name: 'MOBILES & TABLETS',
    iconName: 'Smartphone',
    thumbnailImage: '/categories/thumb-mobiles.png',
    subcategories: [
      {
        title: 'Smartphones',
        items: [
          'iPhones (16 Pro Max, 16, 15)',
          'Samsung Galaxy S24 Ultra & Fold',
          'OnePlus 12 Series',
          'Google Pixel 9 Pro',
          '5G Flagship Phones'
        ]
      },
      {
        title: 'Tablets & iPads',
        items: [
          'Apple iPad Pro M4 & Air M2',
          'Samsung Galaxy Tab S9 Series',
          'Stylus & Smart Keyboards'
        ]
      }
    ],
    topBrands: ['Apple', 'Samsung', 'OnePlus', 'Google Pixel', 'Xiaomi'],
    featuredBanner: {
      title: 'iPhone 16 Pro Flagship',
      subtitle: 'Titanium Design & Camera Control Button',
      discountText: 'Instant ₹5000 Bank Cashback',
      image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80'
    }
  }
  */
];
