import { Product } from '../types';

export const PRODUCTS_DATA: Product[] = [
  // --------------------------------------------------------------------------
  // LAPTOPS & NOTEBOOKS
  // --------------------------------------------------------------------------

  // 1. Acer Aspire Go 14 (User Request)
  {
    id: 'hc-laptop-acer-aspire-go14',
    name: 'Acer Aspire Go 14 AG14-71M NX.JF5SI.001 Standard Laptop (Intel Ultra 5 processor 125H/16 GB/512 GB/Intel Integrated Graphics/Windows 11 Home/WUXGA), 35.56 cm - 14 inch, Steel Gray',
    brand: 'Acer',
    category: 'laptops',
    subcategory: 'Thin & Light Ultrabooks',
    price: 52490,
    mrp: 75999,
    discountPercent: 31,
    rating: 4.8,
    ratingCount: 194,
    image: '/products/acer-aspire-go-14.jpg',
    additionalImages: [
      '/products/acer-aspire-go-14.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 2545,
    keyFeatures: [
      'Intel Core Ultra 5 125H Processor with built-in Intel AI Boost NPU',
      '14.0" WUXGA (1920x1200) 16:10 Acer ComfyView IPS Slim Bezel Display',
      '16GB LPDDR5 Dual-Channel High Speed RAM & 512GB PCIe Gen4 NVMe SSD',
      'Intel Arc Integrated Graphics for crisp rendering and media creation',
      'Sleek Steel Gray lightweight chassis with up to 10.5 hours battery life'
    ],
    specs: {
      'Processor': 'Intel Core Ultra 5 125H (14 Cores, up to 4.5 GHz)',
      'RAM': '16 GB LPDDR5',
      'Storage': '512 GB PCIe Gen4 NVMe SSD',
      'Graphics': 'Intel Arc Graphics',
      'Display': '14.0" WUXGA (1920 x 1200) IPS 16:10',
      'Weight': '1.45 kg',
      'Battery': '50Wh (Fast Charging)',
      'Operating System': 'Windows 11 Home'
    },
    warranty: '1 Year Acer India Doorstep Warranty',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'NEW LAUNCH',
    bankOffers: [
      'Flat ₹3,000 Instant Discount on All Bank Credit Cards',
      'Free Wireless Mouse & Laptop Sleeve Included'
    ]
  },

  // 2. NuvoBook Laptop Series (From Hero Banner)
  {
    id: 'hc-laptop-nuvobook',
    name: 'NuvoBook Pro 14" Thin & Light Laptop (Intel Core i5 12th Gen / 16GB RAM / 512GB NVMe SSD / 14.0" FHD IPS Display / Fast Charging / Windows 11) - Cosmic Blue',
    brand: 'NuvoBook',
    category: 'laptops',
    subcategory: 'Thin & Light Ultrabooks',
    price: 39990,
    mrp: 54990,
    discountPercent: 27,
    rating: 4.8,
    ratingCount: 184,
    image: '/products/nuvobook-pro-14.jpg',
    additionalImages: [
      '/products/nuvobook-pro-14.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 1935,
    keyFeatures: [
      'Built for Everything — Ultra-slim 1.38 kg lightweight aluminum alloy chassis',
      '14.0-inch Full HD (1920x1080) Anti-Glare IPS Display with 100% sRGB',
      'Intel Core i5-1235U Processor with Intel Iris Xe Graphics',
      '16GB Dual Channel LPDDR4x Memory & 512GB PCIe 3.0 NVMe SSD',
      'Up to 11 Hours Battery Life with 65W Type-C Fast Charger Included'
    ],
    specs: {
      'Processor': 'Intel Core i5-1235U (10 Cores, up to 4.4 GHz)',
      'RAM': '16 GB LPDDR4x',
      'Storage': '512 GB PCIe NVMe SSD',
      'Graphics': 'Intel Iris Xe Graphics',
      'Display': '14.0" FHD (1920 x 1080) IPS 300 nits',
      'Weight': '1.38 kg',
      'Battery': '54Wh (Up to 11 Hours)',
      'Operating System': 'Windows 11 Home'
    },
    warranty: '2 Years Manufacturer Comprehensive Doorstep Warranty',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'NEW LAUNCH',
    bankOffers: [
      'Flat ₹2,500 Instant Discount on All Credit Cards',
      'Free Hello Computer Laptop Sleeve & Wireless Mouse'
    ]
  },

  // 3. Predator Helios Neo AI (From Hero Banner)
  {
    id: 'hc-laptop-predator',
    name: 'Acer Predator Helios Neo 16 AI OLED Gaming Laptop (Intel Core Ultra 9 185H / 32GB DDR5 / 1TB Gen4 SSD / NVIDIA RTX 4070 8GB / 240Hz 16:10 WQXGA)',
    brand: 'Acer Predator',
    category: 'laptops',
    subcategory: 'Gaming Laptops',
    price: 174990,
    mrp: 209990,
    discountPercent: 17,
    rating: 4.9,
    ratingCount: 215,
    image: '/products/predator-helios-neo-16.jpg',
    additionalImages: [
      '/products/predator-helios-neo-16.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 8470,
    keyFeatures: [
      'Intel Core Ultra 9 185H Processor (16 Cores, 22 Threads, up to 5.1 GHz)',
      '16.0" (40.64 cm) WQXGA (2560x1600) OLED 240Hz 16:10 Display (100% DCI-P3)',
      'NVIDIA GeForce RTX 4070 (8GB GDDR6) with AI TOPS and DLSS 3.5 Frame Gen',
      '5th Gen AeroBlade 3D Fan Metal Cooling with Liquid Metal Thermal Paste',
      'Full 4-Zone RGB Backlit Keyboard with PredatorSense Macro Key'
    ],
    specs: {
      'Processor': 'Intel Core Ultra 9 185H',
      'RAM': '32 GB DDR5 5600 MHz',
      'Storage': '1 TB PCIe Gen4 NVMe SSD',
      'Graphics': 'NVIDIA GeForce RTX 4070 8GB',
      'Display': '16.0" WQXGA OLED 240Hz 0.2ms',
      'Weight': '2.6 kg',
      'Operating System': 'Windows 11 Home'
    },
    warranty: '2 Years Acer Official On-Site Warranty + 1 Year ADP',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'NEW LAUNCH',
    bankOffers: [
      'Flat ₹7,500 Instant Discount on HDFC & ICICI Bank Cards',
      'Free Predator Gaming Backpack worth ₹4,999'
    ]
  },

  // 4. Gaming Laptop - ASUS ROG Zephyrus
  {
    id: 'hc-laptop-01',
    name: 'ASUS ROG Zephyrus G16 (2024) 16" OLED 240Hz Gaming Laptop (Intel Core Ultra 9 / 32GB LPDDR5X / 1TB SSD / 16GB RTX 4080 / Windows 11)',
    brand: 'ASUS ROG',
    category: 'laptops',
    subcategory: 'Gaming Laptops',
    price: 249990,
    mrp: 299990,
    discountPercent: 17,
    rating: 4.9,
    ratingCount: 342,
    image: '/products/asus-rog-zephyrus-g16.jpg',
    additionalImages: [
      '/products/asus-rog-zephyrus-g16.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 12110,
    keyFeatures: [
      'Intel Core Ultra 9 185H (16 Cores, 22 Threads, up to 5.1 GHz)',
      '16-inch 2.5K ROG Nebula OLED 240Hz / 0.2ms Display, 100% DCI-P3',
      'NVIDIA GeForce RTX 4080 12GB GDDR6 (115W TGP + Dynamic Boost)',
      '32GB LPDDR5X 7467MHz Dual Channel Memory & 1TB PCIe 4.0 NVMe SSD',
      'Sleek CNC Aluminum Chassis with Slash Lighting & Vapor Chamber Cooling'
    ],
    specs: {
      'Processor': 'Intel Core Ultra 9 185H',
      'RAM': '32 GB LPDDR5X',
      'Storage': '1 TB NVMe M.2 SSD',
      'Graphics': 'NVIDIA GeForce RTX 4080 (12GB)',
      'Display': '16.0" 2.5K (2560 x 1600) OLED 240Hz',
      'Weight': '1.85 kg',
      'Battery': '90Wh 4-cell Li-ion (100W Type-C Fast Charge)',
      'Operating System': 'Windows 11 Home + MS Office Home & Student'
    },
    warranty: '2 Years Manufacturer On-Site Warranty + 1 Year Accidental Damage Protection',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'FLASH DEAL',
    bankOffers: [
      'Flat ₹7,500 Instant Discount on ICICI Bank & HDFC Credit Cards',
      'Up to ₹12,000 Exchange Bonus on Old Laptop',
      'Free Hello Computer ROG Mouse & Sleeve worth ₹4,999'
    ]
  },

  // 5. Apple MacBook Pro M3 Max
  {
    id: 'hc-laptop-02',
    name: 'Apple MacBook Pro 16" Liquid Retina XDR (M3 Max Chip 14-core CPU, 30-core GPU, 36GB Unified Memory, 1TB SSD) - Space Black',
    brand: 'Apple',
    category: 'laptops',
    subcategory: 'MacBooks (Apple M3/M2)',
    price: 319900,
    mrp: 349900,
    discountPercent: 9,
    rating: 5.0,
    ratingCount: 520,
    image: '/products/apple-macbook-pro-16.png',
    additionalImages: [
      '/products/apple-macbook-pro-16.png'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 15495,
    keyFeatures: [
      'Apple M3 Max chip with 14-core CPU and 30-core GPU',
      '16.2-inch Liquid Retina XDR display with ProMotion 120Hz (1600 nits peak)',
      '36GB Unified Fast RAM for seamless 8K video rendering & LLM training',
      '1TB Ultra-Fast SSD storage with up to 7.4GB/s read speeds',
      'Up to 22 hours of industry-leading battery life'
    ],
    specs: {
      'Processor': 'Apple M3 Max (14-Core CPU)',
      'RAM': '36 GB Unified Memory',
      'Storage': '1 TB SSD',
      'Graphics': '30-Core Apple GPU with Hardware Ray Tracing',
      'Display': '16.2" Liquid Retina XDR (3456 x 2234)',
      'Weight': '2.16 kg',
      'Battery': '100Wh (Up to 22 Hours Web Browsing)',
      'Operating System': 'macOS Sonoma'
    },
    warranty: '1 Year Apple Official Warranty with Global AppleCare+ eligibility',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'BESTSELLER',
    bankOffers: [
      'Flat ₹5,000 Instant Cashback on HDFC Bank Cards',
      'No Cost EMI for up to 12 Months'
    ]
  },

  // 6. Apple MacBook Air 15" M3 Chip
  {
    id: 'hc-laptop-macbook-air',
    name: 'Apple MacBook Air 15" Liquid Retina Display (Apple M3 Chip with 8-core CPU, 10-core GPU / 16GB Unified Memory / 512GB SSD) - Midnight',
    brand: 'Apple',
    category: 'laptops',
    subcategory: 'MacBooks (Apple M3/M2)',
    price: 134900,
    mrp: 144900,
    discountPercent: 7,
    rating: 4.9,
    ratingCount: 310,
    image: '/products/apple-macbook-air-15.jpg',
    additionalImages: [
      '/products/apple-macbook-air-15.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 6540,
    keyFeatures: [
      'Apple M3 chip with 8-core CPU and 10-core GPU for breakthrough speed and efficiency',
      '15.3-inch Liquid Retina display with 500 nits of brightness and P3 wide color',
      'Impossibly thin 11.5 mm silent fanless unibody design in stunning Midnight finish',
      '16GB Unified Fast RAM & 512GB High-Speed SSD Storage',
      'Up to 18 hours of all-day battery life with MagSafe 3 fast charging'
    ],
    specs: {
      'Processor': 'Apple M3 Chip (8-Core CPU, 10-Core GPU)',
      'RAM': '16 GB Unified Memory',
      'Storage': '512 GB SSD',
      'Display': '15.3" Liquid Retina (2880 x 1864) 500 nits',
      'Weight': '1.51 kg',
      'Battery': '66.5Wh (Up to 18 Hours)',
      'Operating System': 'macOS Sonoma'
    },
    warranty: '1 Year Apple Official Warranty with Global Coverage',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'NEW ARRIVAL',
    bankOffers: [
      'Flat ₹5,000 Instant Discount on HDFC & ICICI Cards',
      'Free Hello Care 1-Year Extended Screen Shield'
    ]
  },

  // 7. Dell Alienware m16 R2 Gaming Laptop
  {
    id: 'hc-laptop-alienware-m16',
    name: 'Dell Alienware m16 R2 16" 240Hz QHD+ Gaming Laptop (Intel Core Ultra 7 155H / 16GB DDR5 / 1TB NVMe SSD / NVIDIA RTX 4070 8GB / Windows 11) - Dark Metallic Moon',
    brand: 'Dell Alienware',
    category: 'laptops',
    subcategory: 'Gaming Laptops',
    price: 189990,
    mrp: 219990,
    discountPercent: 14,
    rating: 4.8,
    ratingCount: 164,
    image: '/products/alienware-m16-r2.jpg',
    additionalImages: [
      '/products/alienware-m16-r2.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 9210,
    keyFeatures: [
      'Intel Core Ultra 7 155H Processor with dedicated NPU for on-device AI gaming',
      '16.0" QHD+ (2560x1600) 240Hz 3ms ComfortView Plus display with 100% sRGB',
      'NVIDIA GeForce RTX 4070 8GB GDDR6 with Stealth Mode hotkey',
      'Alienware Cryo-tech cooling with vapor chamber and quad exhaust pipes',
      'Anodized aluminum lid and palm rest with AlienFX per-key RGB keyboard'
    ],
    specs: {
      'Processor': 'Intel Core Ultra 7 155H (16 Cores, up to 4.8 GHz)',
      'RAM': '16 GB DDR5 5600 MHz',
      'Storage': '1 TB PCIe Gen4 NVMe SSD',
      'Graphics': 'NVIDIA GeForce RTX 4070 (8GB GDDR6)',
      'Display': '16.0" QHD+ (2560 x 1600) 240Hz 3ms',
      'Weight': '2.61 kg',
      'Battery': '90Wh (Fast Charging)',
      'Operating System': 'Windows 11 Home'
    },
    warranty: '2 Years Dell Premium Support with On-Site Hardware Service',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'POWER RIG',
    bankOffers: [
      'Flat ₹7,500 Instant Discount on All Major Credit Cards',
      'Free Alienware Gaming Headset worth ₹7,999'
    ]
  },

  // 8. HP OMEN Transcend 14" OLED Slim Gaming Laptop
  {
    id: 'hc-laptop-hp-omen-14',
    name: 'HP OMEN Transcend 14" 2.8K 120Hz OLED Slim Gaming Laptop (Intel Core Ultra 7 155H / 16GB LPDDR5X / 1TB SSD / NVIDIA RTX 4060 8GB / 1.6 kg) - Shadow Black',
    brand: 'HP',
    category: 'laptops',
    subcategory: 'Gaming Laptops',
    price: 149990,
    mrp: 174990,
    discountPercent: 14,
    rating: 4.8,
    ratingCount: 142,
    image: '/products/hp-omen-transcend-14.jpg',
    additionalImages: [
      '/products/hp-omen-transcend-14.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 7270,
    keyFeatures: [
      'The worlds lightest 14-inch OLED gaming laptop at only 1.63 kg',
      '14.0" 2.8K (2880x1800) 120Hz 0.2ms IMAX Enhanced OLED Display (100% DCI-P3, 500 nits)',
      'Intel Core Ultra 7 155H with Intel AI Boost NPU & NVIDIA GeForce RTX 4060 8GB',
      'OMEN Tempest Cooling Slim with Intel dual-channel flow chamber',
      'HyperX Cloud III Wireless built-in receiver + RGB Lattice Keyboard'
    ],
    specs: {
      'Processor': 'Intel Core Ultra 7 155H (16 Cores)',
      'RAM': '16 GB LPDDR5X 7467 MHz',
      'Storage': '1 TB PCIe Gen4 NVMe SSD',
      'Graphics': 'NVIDIA GeForce RTX 4060 (8GB GDDR6)',
      'Display': '14.0" 2.8K (2880 x 1800) OLED 120Hz 0.2ms',
      'Weight': '1.63 kg',
      'Battery': '71Wh (Up to 8.5 Hours)',
      'Operating System': 'Windows 11 Home'
    },
    warranty: '2 Years HP On-Site Standard Warranty with Accidental Damage Cover',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'HOT DEAL',
    bankOffers: [
      'Flat ₹6,000 Instant Cashback on Axis & HDFC Bank Cards',
      'Free HyperX Pulsefire Wireless Mouse Included'
    ]
  },

  // 9. Lenovo Legion Pro 7i 16" Flagship Gaming Laptop
  {
    id: 'hc-laptop-lenovo-legion-pro7',
    name: 'Lenovo Legion Pro 7i 16" AI Tuned 240Hz WQXGA Gaming Laptop (Intel Core i9 14900HX / 32GB DDR5 / 1TB Gen4 SSD / NVIDIA RTX 4080 12GB / 175W TGP) - Onyx Grey',
    brand: 'Lenovo Legion',
    category: 'laptops',
    subcategory: 'Gaming Laptops',
    price: 279990,
    mrp: 319990,
    discountPercent: 13,
    rating: 4.9,
    ratingCount: 198,
    image: '/products/lenovo-legion-pro-7i.png',
    additionalImages: [
      '/products/lenovo-legion-pro-7i.png'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 13570,
    keyFeatures: [
      'Intel Core i9-14900HX Processor (24 Cores, 32 Threads, up to 5.8 GHz Turbo)',
      '16.0" WQXGA (2560x1600) 240Hz IPS Display with 500 nits, DisplayHDR 400 & G-SYNC',
      'NVIDIA GeForce RTX 4080 12GB GDDR6 with maximum 175W TGP and Lenovo LA-2 AI Chip',
      'Legion Coldfront 5.0 with massive vapor chamber and liquid metal thermal compound',
      'Legion TrueStrike per-key RGB keyboard with 100% anti-ghosting and 1.5mm key travel'
    ],
    specs: {
      'Processor': 'Intel Core i9-14900HX (24 Cores, 32 Threads)',
      'RAM': '32 GB DDR5 5600 MHz Dual Channel',
      'Storage': '1 TB PCIe Gen4 M.2 NVMe SSD',
      'Graphics': 'NVIDIA GeForce RTX 4080 (12GB GDDR6, 175W TGP)',
      'Display': '16.0" WQXGA (2560 x 1600) 240Hz 500 nits',
      'Weight': '2.62 kg',
      'Battery': '99.9Wh (Super Rapid Charge Pro 330W)',
      'Operating System': 'Windows 11 Home + MS Office 2021'
    },
    warranty: '3 Years Lenovo Legion Ultimate Support with On-Site Service',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'FLAGSHIP RIG',
    bankOffers: [
      'Flat ₹10,000 Instant Discount on Major Credit Cards',
      'Free Legion Armored Gaming Backpack + Mouse'
    ]
  },

  // 10. Dell XPS 16 Flagship Ultrabook
  {
    id: 'hc-laptop-dell-xps16',
    name: 'Dell XPS 16 (9640) 16.3" 4K+ OLED Touchscreen Laptop (Intel Core Ultra 7 155H / 32GB LPDDR5X / 1TB SSD / NVIDIA RTX 4060 6GB) - Platinum Silver',
    brand: 'Dell',
    category: 'laptops',
    subcategory: 'Thin & Light Ultrabooks',
    price: 259990,
    mrp: 289990,
    discountPercent: 10,
    rating: 4.8,
    ratingCount: 112,
    image: '/products/alienware-m16-r2.jpg',
    additionalImages: [
      '/products/alienware-m16-r2.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 12590,
    keyFeatures: [
      'Intel Core Ultra 7 155H with AI Boost NPU for accelerated generative AI workflows',
      '16.3-inch 4K+ (3840 x 2400) OLED InfinityEdge Touch Display with 100% DCI-P3 & Dolby Vision',
      'Seamless glass haptic touchpad and capacitive touch function row',
      'CNC machined aluminum and Gorilla Glass 3 construction in elegant Platinum Silver',
      'Quad-speaker design with 10W total output and Waves MaxxAudio Pro'
    ],
    specs: {
      'Processor': 'Intel Core Ultra 7 155H (16 Cores, up to 4.8 GHz)',
      'RAM': '32 GB LPDDR5X 6400 MHz',
      'Storage': '1 TB PCIe Gen4 NVMe SSD',
      'Graphics': 'NVIDIA GeForce RTX 4060 6GB GDDR6',
      'Display': '16.3" 4K+ (3840 x 2400) OLED Touch 400 nits',
      'Weight': '2.13 kg',
      'Battery': '99.5Wh (130W Type-C Fast Charger)',
      'Operating System': 'Windows 11 Pro'
    },
    warranty: '2 Years Dell Premium Support with Onsite Service',
    isDealOfDay: false,
    isBestSeller: true,
    isTrending: true,
    badge: 'EXECUTIVE CHOICE',
    bankOffers: [
      'Flat ₹7,500 Instant Cashback on HDFC & SBI Credit Cards',
      'Free Executive Leather Sleeve'
    ]
  },

  // --------------------------------------------------------------------------
  // DESKTOPS, ALL-IN-ONES & MONITORS
  // --------------------------------------------------------------------------

  // 11. Acer Aspire C27 All-in-One
  {
    id: 'hc-desktop-acer-c27',
    name: 'Acer Aspire C27 27" Full HD Borderless All-in-One PC (Intel Core i7 13th Gen / 16GB DDR4 / 1TB NVMe SSD / Intel Iris Xe / Wireless Keyboard & Mouse)',
    brand: 'Acer',
    category: 'desktops',
    subcategory: 'All-in-One (AIO) PCs',
    price: 78990,
    mrp: 99990,
    discountPercent: 21,
    rating: 4.7,
    ratingCount: 168,
    image: '/products/hc-desktop-acer-c27.jpg',
    additionalImages: [
      '/products/hc-desktop-acer-c27.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 3820,
    keyFeatures: [
      '27-inch Full HD (1920x1080) IPS Borderless Slim Display with Acer BlueLightShield',
      'Intel Core i7-1355U 13th Gen Processor (10 Cores, 12 Threads, up to 5.0 GHz)',
      '16GB Dual Channel DDR4 RAM & 1TB PCIe NVMe SSD for fast multitasking',
      'Integrated 5.0 MP Webcam with Privacy Shutter and Dual Stereo Microphones',
      'Includes Matching Acer Wireless Keyboard and Optical Mouse'
    ],
    specs: {
      'Processor': 'Intel Core i7-1355U (10 Cores, up to 5.0 GHz)',
      'RAM': '16 GB DDR4',
      'Storage': '1 TB PCIe NVMe SSD',
      'Display': '27" FHD (1920 x 1080) IPS Anti-glare',
      'Graphics': 'Intel Iris Xe Graphics',
      'Peripherals': 'Acer Wireless Keyboard & Mouse included',
      'Operating System': 'Windows 11 Home + MS Office 2021'
    },
    warranty: '3 Years Comprehensive On-Site Warranty',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'POPULAR AIO',
    bankOffers: [
      'Flat ₹3,000 Instant Cashback on Major Credit Cards'
    ]
  },

  // 12. Dell Alienware Aurora R16 Gaming Desktop
  {
    id: 'hc-desktop-01',
    name: 'Dell Alienware Aurora R16 High Performance Gaming Desktop (Intel 14th Gen Core i9 14900KF / 32GB DDR5 / 2TB NVMe SSD / NVIDIA RTX 4090 24GB)',
    brand: 'Dell Alienware',
    category: 'desktops',
    subcategory: 'Pre-Built Gaming Rigs',
    price: 369990,
    mrp: 419990,
    discountPercent: 12,
    rating: 4.8,
    ratingCount: 189,
    image: '/products/hc-desktop-alienware-aurora.jpg',
    additionalImages: [
      '/products/hc-desktop-alienware-aurora.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 17920,
    keyFeatures: [
      'Intel Core i9 14900KF (24 Cores, 32 Threads, up to 6.0 GHz Turbo)',
      'NVIDIA GeForce RTX 4090 24GB GDDR6X - The Ultimate 4K/8K Gaming Powerhouse',
      'Alienware Cryo-Tech 240mm Liquid Cooling & 1000W 80-Plus Platinum PSU',
      '32GB Dual-Channel DDR5 5600MHz RAM + 2TB PCIe 4.0 M.2 SSD',
      'Legend 3 Design Chassis with 40% Volume Reduction and Whisper-Quiet Airflow'
    ],
    specs: {
      'Processor': 'Intel Core i9-14900KF (24 Cores)',
      'RAM': '32 GB DDR5 5600 MHz',
      'Storage': '2 TB PCIe Gen4 NVMe SSD',
      'Graphics': 'NVIDIA GeForce RTX 4090 (24GB GDDR6X)',
      'Power Supply': '1000W 80 Plus Platinum Modular PSU',
      'Cooling': 'Alienware Cryo-Tech AIO Liquid Cooler',
      'Weight': '15.3 kg',
      'Operating System': 'Windows 11 Pro'
    },
    warranty: '3 Years Dell Premium Support with On-Site Hardware Service',
    isDealOfDay: true,
    isBestSeller: false,
    isTrending: true,
    badge: 'POWER RIG',
    bankOffers: [
      'Flat ₹10,000 Instant Discount with Bank of Baroda & SBI Credit Cards',
      'Free Hello Computer Mechanical Gaming Keyboard & Mouse Mat'
    ]
  },

  // 13. HP Envy 34" Curved All-In-One Desktop
  {
    id: 'hc-desktop-02',
    name: 'HP Envy 34" 5K WUHD Curved All-in-One PC (Intel Core i7 13th Gen / 32GB RAM / 1TB SSD / NVIDIA GeForce RTX 3060 6GB / Wireless Charging Base)',
    brand: 'HP',
    category: 'desktops',
    subcategory: 'All-in-One (AIO) PCs',
    price: 189990,
    mrp: 235000,
    discountPercent: 19,
    rating: 4.7,
    ratingCount: 145,
    image: '/products/hc-desktop-hp-aio.jpg',
    additionalImages: [
      '/products/hc-desktop-hp-aio.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 9200,
    keyFeatures: [
      'Stunning 34-inch 5K (5120 x 2160) 21:9 Ultrawide Anti-Glare Display',
      'Detachable 16MP Magnetic Webcam with Auto Frame & Lighting Sensor',
      'Wireless QI-charging pad built directly into the aluminum stand',
      'Bang & Olufsen Custom Tuned Quad Stereo Speakers',
      'Tool-less upgradeable RAM & SSD expansion bays'
    ],
    specs: {
      'Processor': 'Intel Core i7-13700 (16 Cores)',
      'RAM': '32 GB DDR5',
      'Storage': '1 TB NVMe SSD',
      'Graphics': 'NVIDIA GeForce RTX 3060 (6GB)',
      'Display': '34" 5K WUHD (5120 x 2160) IPS 98% DCI-P3',
      'Weight': '11.05 kg',
      'Audio': 'Audio by Bang & Olufsen',
      'Operating System': 'Windows 11 Home'
    },
    warranty: '2 Years HP On-Site Standard Warranty',
    isDealOfDay: false,
    isBestSeller: true,
    isTrending: false,
    badge: 'STUDIO AIO',
    bankOffers: [
      'Flat ₹4,000 Off on Axis & ICICI Cards',
      'No Cost EMI Available for 6, 9 & 12 Months'
    ]
  },

  // 14. Apple iMac 24" 4.5K Retina M3 Chip
  {
    id: 'hc-desktop-imac-m3',
    name: 'Apple iMac 24" 4.5K Retina Display All-in-One PC (Apple M3 Chip with 8-Core CPU, 10-Core GPU / 16GB Unified RAM / 512GB SSD / Magic Keyboard with Touch ID) - Silver',
    brand: 'Apple',
    category: 'desktops',
    subcategory: 'All-in-One (AIO) PCs',
    price: 154900,
    mrp: 174900,
    discountPercent: 11,
    rating: 4.9,
    ratingCount: 220,
    image: '/products/hc-desktop-imac-m3.jpg',
    additionalImages: [
      '/products/hc-desktop-imac-m3.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 7510,
    keyFeatures: [
      'Impossibly thin 11.5 mm unibody design in pristine Silver aluminum',
      '24-inch 4.5K Retina display (4480x2520) with 500 nits brightness and True Tone',
      'Apple M3 chip with 8-core CPU and 10-core GPU for lightning-fast creative workflow',
      '1080p FaceTime HD camera with studio-quality three-mic array',
      'Six-speaker sound system with force-cancelling woofers and Spatial Audio'
    ],
    specs: {
      'Processor': 'Apple M3 Chip (8-Core CPU)',
      'RAM': '16 GB Unified Memory',
      'Storage': '512 GB High Speed SSD',
      'Graphics': '10-Core Apple GPU',
      'Display': '24" 4.5K Retina (4480 x 2520) 500 nits',
      'Weight': '4.48 kg',
      'Operating System': 'macOS Sonoma'
    },
    warranty: '1 Year Apple Official Warranty with Global AppleCare+ eligibility',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'APPLE BESTSELLER',
    bankOffers: [
      'Flat ₹5,000 Instant Cashback on HDFC Bank Cards',
      'No Cost EMI for up to 12 Months'
    ]
  },

  // 15. Samsung Odyssey OLED G9 49" Curved Gaming Monitor
  {
    id: 'hc-monitor-01',
    name: 'Samsung 49" Odyssey OLED G9 (G95SC) Dual QHD 240Hz 0.03ms Curved Gaming Monitor with Neo Quantum Processor & Smart TV Hub',
    brand: 'Samsung',
    category: 'desktops',
    subcategory: 'Monitors & Displays',
    price: 139999,
    mrp: 189999,
    discountPercent: 26,
    rating: 4.9,
    ratingCount: 278,
    image: '/products/hc-monitor-samsung-g9.jpg',
    additionalImages: [
      '/products/hc-monitor-samsung-g9.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 6780,
    keyFeatures: [
      '49-inch 32:9 Super Ultrawide Dual QHD (5120 x 1440) OLED Panel',
      'Blistering 240Hz Refresh Rate & 0.03ms (GtG) Instant Response Time',
      'Neo Quantum Processor Pro for deeper blacks and vibrant contrast',
      'CoreSync & Core Lighting+ RGB backlighting with ambient sync',
      'Built-in Smart TV Apps, Gaming Hub and IoT SmartThings control'
    ],
    specs: {
      'Screen Size': '49 Inch (124.46 cm) Curvature 1800R',
      'Resolution': 'Dual QHD (5120 x 1440)',
      'Panel Type': 'OLED (True Black 400)',
      'Refresh Rate': '240 Hz',
      'Response Time': '0.03ms (GtG)',
      'Ports': '1x HDMI 2.1, 1x Micro HDMI 2.1, 1x DisplayPort 1.4, USB Hub',
      'Sync Tech': 'AMD FreeSync Premium Pro, G-Sync Compatible'
    },
    warranty: '3 Years Official Samsung India Panel & Burn-In Warranty',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'HOT DEAL',
    bankOffers: [
      'Instant ₹6,000 Off on HDFC / ICICI Credit Cards',
      'Free Hello Computer DisplayPort 2.1 Braided Cable'
    ]
  },

  // 16. LG UltraGear 32" 4K OLED Dual-Mode Gaming Monitor
  {
    id: 'hc-monitor-lg-c4',
    name: 'LG UltraGear 32" 4K UHD OLED 240Hz / FHD 480Hz Dual-Mode Gaming Monitor (32GS95UE, 0.03ms, Pixel Sound, DisplayHDR True Black 400)',
    brand: 'LG',
    category: 'desktops',
    subcategory: 'Monitors & Displays',
    price: 99990,
    mrp: 139990,
    discountPercent: 28,
    rating: 4.9,
    ratingCount: 135,
    image: '/products/hc-monitor-lg-c4.jpg',
    additionalImages: [
      '/products/hc-monitor-lg-c4.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 4845,
    keyFeatures: [
      'World-first VESA certified Dual-Mode: 4K 240Hz for AAA visuals or FHD 480Hz for esports',
      '31.5-inch 4K UHD (3840 x 2160) Anti-Glare Low Reflection OLED Panel',
      'Ultra-fast 0.03ms (GtG) response time with 1,500,000:1 contrast ratio',
      'Pixel Sound technology emits audio directly from behind the OLED screen',
      'NVIDIA G-SYNC Compatible and AMD FreeSync Premium Pro certification'
    ],
    specs: {
      'Screen Size': '31.5 Inch (80 cm)',
      'Resolution': '4K UHD (3840 x 2160) / FHD (1920 x 1080)',
      'Panel Type': 'OLED (Anti-Glare Low Reflection)',
      'Refresh Rate': '240Hz (4K) / 480Hz (FHD)',
      'Response Time': '0.03ms GtG',
      'Ports': '2x HDMI 2.1, 1x DisplayPort 1.4 (DSC), 2x USB 3.0'
    },
    warranty: '3 Years LG India Onsite Warranty including OLED Burn-in Cover',
    isDealOfDay: false,
    isBestSeller: true,
    isTrending: true,
    badge: 'ESPORTS DUAL-MODE',
    bankOffers: [
      'Flat ₹5,000 Instant Discount on ICICI Bank Cards',
      'Free Heavy-Duty Gas Spring Monitor Arm'
    ]
  },

  // --------------------------------------------------------------------------
  // PC COMPONENTS (CPUs, GPUs, RAM, Motherboards, Cooling)
  // --------------------------------------------------------------------------

  // 17. NVIDIA GeForce RTX 4090 ASUS ROG Strix
  {
    id: 'hc-component-01',
    name: 'ASUS ROG Strix GeForce RTX 4090 OC Edition 24GB GDDR6X Graphics Card (PCIe 4.0, DLSS 3, Axial-tech Fans, Diecast Exoskeleton)',
    brand: 'ASUS ROG',
    category: 'components',
    subcategory: 'Graphics Cards (NVIDIA & AMD)',
    price: 189999,
    mrp: 224999,
    discountPercent: 16,
    rating: 5.0,
    ratingCount: 412,
    image: '/products/hc-component-01.jpg',
    additionalImages: [
      '/products/hc-component-01.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 9205,
    keyFeatures: [
      'NVIDIA Ada Lovelace Streaming Multiprocessors with up to 2x performance',
      '4th Generation Tensor Cores & DLSS 3 Frame Generation technology',
      '3.5-slot design with massive fin array and patented vapor chamber',
      'Aura Sync ARGB illumination and GPU Tweak III utility suite',
      '24GB GDDR6X 384-bit memory bandwidth exceeding 1 TB/s'
    ],
    specs: {
      'GPU Engine': 'NVIDIA GeForce RTX 4090',
      'CUDA Cores': '16384',
      'Boost Clock': '2640 MHz (OC Mode)',
      'Memory Size': '24 GB GDDR6X',
      'Memory Bus': '384-bit',
      'Power Connectors': '1x 16-pin (12VHPWR)',
      'Recommended PSU': '1000W'
    },
    warranty: '3 Years ASUS Official Replacement Warranty',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'FLAGSHIP GPU',
    bankOffers: [
      'Flat ₹5,000 Instant Discount on All Major Credit Cards',
      'Special 12-Month No Cost EMI Plan'
    ]
  },

  // 18. Intel Core i9-14900K Flagship Processor
  {
    id: 'hc-component-02',
    name: 'Intel Core i9-14900K 14th Gen Desktop Processor (24 Cores - 8P+16E, Up to 6.0 GHz, LGA1700, Intel UHD Graphics 770, Unlocked)',
    brand: 'Intel',
    category: 'components',
    subcategory: 'Processors (Intel & AMD)',
    price: 52990,
    mrp: 64990,
    discountPercent: 18,
    rating: 4.8,
    ratingCount: 654,
    image: '/products/hc-component-02.jpg',
    additionalImages: [
      '/products/hc-component-02.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 2567,
    keyFeatures: [
      '24 Cores (8 Performance-cores + 16 Efficient-cores) & 32 Threads',
      'Up to 6.0 GHz Max Turbo Frequency with Intel Thermal Velocity Boost',
      'Compatible with Intel 700-series and 600-series chipset motherboards',
      'DDR5 5600 MT/s and DDR4 3200 MT/s Dual-Channel Memory Support',
      'Intel Application Optimization (APO) for maximum frame rate gains'
    ],
    specs: {
      'Socket': 'LGA 1700',
      'Total Cores': '24 (8P + 16E)',
      'Total Threads': '32',
      'Max Turbo Frequency': '6.00 GHz',
      'Base TDP': '125 W (Max Turbo 253 W)',
      'Cache': '36 MB Intel Smart Cache + 32 MB L2'
    },
    warranty: '3 Years Intel Authorized India Warranty',
    isDealOfDay: false,
    isBestSeller: true,
    isTrending: false,
    badge: 'POPULAR CPU',
    bankOffers: [
      'Instant ₹2,000 Off on Credit Cards'
    ]
  },

  // 19. Corsair Dominator Titanium RGB DDR5 64GB
  {
    id: 'hc-component-03',
    name: 'Corsair DOMINATOR TITANIUM RGB 64GB (2x32GB) DDR5 6600MHz CL32 Desktop Memory Kit - White (Intel XMP / AMD EXPO)',
    brand: 'Corsair',
    category: 'components',
    subcategory: 'RAM (DDR5 & DDR4)',
    price: 28990,
    mrp: 35990,
    discountPercent: 19,
    rating: 4.9,
    ratingCount: 198,
    image: '/products/hc-component-03.jpg',
    additionalImages: [
      '/products/hc-component-03.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 1405,
    keyFeatures: [
      'Premium forged aluminum construction with patented DHX cooling',
      '11 vibrant individually addressable CAPELLIX RGB LEDs per module',
      'Modular top bars: customize aesthetic with finned heatsinks or 3D prints',
      'Hand-sorted, tightly-screened memory chips for ultimate overclocking'
    ],
    specs: {
      'Memory Type': 'DDR5 Desktop RAM',
      'Capacity': '64 GB (2 x 32 GB)',
      'Speed': '6600 MT/s',
      'Tested Latency': '32-39-39-76',
      'Tested Voltage': '1.40 V',
      'Compatibility': 'Intel 600/700 & AMD 600 Series'
    },
    warranty: 'Limited Lifetime Warranty by Corsair India',
    isDealOfDay: false,
    isBestSeller: false,
    isTrending: true,
    badge: 'ENTHUSIAST',
    bankOffers: ['10% Instant Discount on SBI Cards']
  },

  // 20. AMD Ryzen 9 7950X3D Gaming Processor
  {
    id: 'hc-component-ryzen9',
    name: 'AMD Ryzen 9 7950X3D Desktop Gaming Processor (16 Cores, 32 Threads, 144MB 3D V-Cache, Up to 5.7 GHz, Socket AM5, PCIe 5.0, 120W TDP)',
    brand: 'AMD',
    category: 'components',
    subcategory: 'Processors (Intel & AMD)',
    price: 59990,
    mrp: 72990,
    discountPercent: 18,
    rating: 4.9,
    ratingCount: 388,
    image: '/products/hc-component-02.jpg',
    additionalImages: [
      '/products/hc-component-02.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 2905,
    keyFeatures: [
      'The worlds ultimate gaming processor with AMD 3D V-Cache technology',
      '16 Cores and 32 Threads for uncompromising multitasking and streaming',
      'Up to 5.7 GHz Max Boost with massive 144MB total L2+L3 cache',
      'AMD Socket AM5 platform supporting state-of-the-art DDR5 and PCIe 5.0',
      'Incredible power efficiency with standard 120W TDP design'
    ],
    specs: {
      'Socket': 'AM5',
      'Total Cores': '16',
      'Total Threads': '32',
      'Max Boost Clock': 'Up to 5.7 GHz',
      'L3 Cache': '128 MB (144 MB Total)',
      'Default TDP': '120 W'
    },
    warranty: '3 Years AMD India Authorized Warranty',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'GAMING KING',
    bankOffers: [
      'Flat ₹3,000 Instant Discount on All Credit Cards'
    ]
  },

  // 21. MSI GeForce RTX 4070 Ti SUPER Gaming X Slim
  {
    id: 'hc-component-rtx4070ti',
    name: 'MSI GeForce RTX 4070 Ti SUPER 16GB GAMING X SLIM GDDR6X Graphics Card (PCIe 4.0, DLSS 3.5, TORX FAN 5.0, Airflow Control, HDMI 2.1a)',
    brand: 'MSI',
    category: 'components',
    subcategory: 'Graphics Cards (NVIDIA & AMD)',
    price: 84990,
    mrp: 99990,
    discountPercent: 15,
    rating: 4.8,
    ratingCount: 240,
    image: '/products/hc-component-01.jpg',
    additionalImages: [
      '/products/hc-component-01.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 4120,
    keyFeatures: [
      'NVIDIA Ada Lovelace Architecture with 8448 CUDA Cores and 16GB GDDR6X VRAM',
      'Full 256-bit memory bus for seamless 4K gaming and high-resolution textures',
      'TRI FROZR 3 Thermal Design with TORX Fan 5.0 and copper baseplate',
      'Sleek Slim profile fits effortlessly into modern compact cases',
      'Mystic Light RGB sync for stunning custom workstation illumination'
    ],
    specs: {
      'GPU Engine': 'NVIDIA GeForce RTX 4070 Ti SUPER',
      'CUDA Cores': '8448',
      'Memory Size': '16 GB GDDR6X',
      'Memory Bus': '256-bit',
      'Card Dimensions': '307 x 125 x 51 mm',
      'Recommended PSU': '750W'
    },
    warranty: '3 Years MSI India Official Replacement Warranty',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: '4K SWEET SPOT',
    bankOffers: [
      'Flat ₹4,000 Instant Discount on HDFC & ICICI Cards'
    ]
  },

  // 22. NZXT Kraken Elite 360 RGB Liquid Cooler
  {
    id: 'hc-component-nzxt-kraken',
    name: 'NZXT Kraken Elite 360 RGB LCD All-in-One CPU Liquid Cooler (2.36" Wide-Angle 640x640 LCD Display, 3x 120mm RGB Core Fans, Asetek Pump) - Black',
    brand: 'NZXT',
    category: 'components',
    subcategory: 'Cooling & Power',
    price: 24490,
    mrp: 29990,
    discountPercent: 18,
    rating: 4.9,
    ratingCount: 162,
    image: '/categories/cat-components.png',
    additionalImages: [
      '/categories/cat-components.png'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 1185,
    keyFeatures: [
      '2.36-inch wide-angle IPS LCD screen with 640x640 resolution and 60Hz refresh rate',
      'Display real-time CPU/GPU system temps, custom animated GIFs, and Web integrations',
      'Custom Asetek turbine pump provides whisper-quiet, ultra-efficient heat transfer',
      'Three high-static-pressure 120mm RGB Core fans deliver high airflow with fluid-dynamic bearings',
      'Full control via NZXT CAM software with universal Intel LGA1700/AM5 mounting hardware'
    ],
    specs: {
      'Radiator Size': '360 mm (394 x 121 x 27 mm)',
      'Fan Speed': '500 - 1800 ± 300 RPM',
      'Noise Level': '17.9 - 30.6 dBA',
      'Socket Support': 'Intel LGA 1700/1200/115X, AMD AM5/AM4',
      'Tubing Length': '400 mm Ultra-durable braided nylon'
    },
    warranty: '6 Years NZXT Global Manufacturer Warranty',
    isDealOfDay: false,
    isBestSeller: true,
    isTrending: true,
    badge: 'CUSTOM RIG HERO',
    bankOffers: [
      'Flat ₹1,500 Instant Discount on All Credit Cards'
    ]
  },

  // --------------------------------------------------------------------------
  // GAMING & PERIPHERALS
  // --------------------------------------------------------------------------

  // 23. Logitech G Pro X Superlight 2 Wireless Gaming Mouse
  {
    id: 'hc-periph-01',
    name: 'Logitech G PRO X SUPERLIGHT 2 Lightspeed Wireless Gaming Mouse - Ultra-Lightweight 60g, HERO 2 Sensor 32,000 DPI, Hybrid Switches - Black',
    brand: 'Logitech G',
    category: 'gaming-peripherals',
    subcategory: 'Ultra-Lightweight Gaming Mice',
    price: 13495,
    mrp: 16995,
    discountPercent: 21,
    rating: 4.9,
    ratingCount: 890,
    image: '/products/hc-periph-01.jpg',
    additionalImages: [
      '/products/hc-periph-01.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 654,
    keyFeatures: [
      'Ultra-lightweight iconic 60 grams engineering without honeycomb holes',
      'LIGHTFORCE hybrid optical-mechanical switches for crisp tactical response',
      'HERO 2 Sensor with 32,000 DPI, 500+ IPS, and sub-micron tracking',
      'Up to 95 hours of constant motion battery life on a single charge',
      'Zero-additive PTFE mouse feet for smooth, fluid glide'
    ],
    specs: {
      'Connectivity': 'LIGHTSPEED Wireless 2.4GHz + USB-C',
      'Weight': '60 grams',
      'Sensor': 'HERO 2 (100 - 32,000 DPI)',
      'Report Rate': 'Up to 2000Hz (0.5 ms)',
      'Battery Life': '95 Hours'
    },
    warranty: '2 Years Logitech India Replacement Warranty',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'ESPORTS CHOICE',
    bankOffers: ['Flat ₹1,000 Off on UPI Payments']
  },

  // 24. Keychron Q1 Pro Wireless Custom Mechanical Keyboard
  {
    id: 'hc-periph-02',
    name: 'Keychron Q1 Pro QMK/VIA Wireless Custom Mechanical Keyboard (75% Layout, CNC Aluminum Body, Double-Gasket Mount, K Pro Banana Switches)',
    brand: 'Keychron',
    category: 'gaming-peripherals',
    subcategory: 'Mechanical Gaming Keyboards',
    price: 17990,
    mrp: 21990,
    discountPercent: 18,
    rating: 4.8,
    ratingCount: 320,
    image: '/products/hc-periph-02.jpg',
    additionalImages: [
      '/products/hc-periph-02.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 872,
    keyFeatures: [
      'Full CNC 6063 machined aluminum body with anodized & sandblasted finish',
      'Innovative Double-Gasket Design reduces acoustic resonance for deep thock sound',
      'Connects up to 3 devices simultaneously via Broadcom Bluetooth 5.1 or Type-C',
      'Full QMK & VIA programmability to reassign every key and macro dial',
      'Hot-swappable PCB supports both 3-pin and 5-pin MX mechanical switches'
    ],
    specs: {
      'Layout': '75% (81 Keys) with Rotary Knob',
      'Body Material': 'Full CNC Machined Aluminum',
      'Keycaps': 'KSA Double-Shot PBT',
      'Switches': 'Keychron K Pro Banana (Tactile)',
      'Battery': '4000mAh Rechargeable Li-polymer (Up to 300 hrs)'
    },
    warranty: '1 Year Manufacturer Warranty',
    isDealOfDay: false,
    isBestSeller: true,
    isTrending: false,
    badge: 'PREMIUM TYPING'
  },

  // 25. Razer DeathAdder V3 Pro Wireless Gaming Mouse
  {
    id: 'hc-periph-razer-deathadder',
    name: 'Razer DeathAdder V3 Pro Ultra-Lightweight Wireless Ergonomic Esports Gaming Mouse (63g, Focus Pro 30K Optical Sensor, Gen-3 Optical Switches) - White',
    brand: 'Razer',
    category: 'gaming-peripherals',
    subcategory: 'Ultra-Lightweight Gaming Mice',
    price: 12999,
    mrp: 15999,
    discountPercent: 19,
    rating: 4.9,
    ratingCount: 472,
    image: '/products/hc-periph-01.jpg',
    additionalImages: [
      '/products/hc-periph-01.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 630,
    keyFeatures: [
      'Refined iconic ergonomic shape co-developed with top esports pros, weighing just 63g',
      'Razer Focus Pro 30K Optical Sensor with 99.8% resolution accuracy across glass surfaces',
      'Razer Optical Mouse Switches Gen-3 with zero debounce delay and 90-million click lifecycle',
      'Up to 90 hours of continuous wireless gameplay with USB Type-C fast charging',
      'Upgradable to true 8000Hz wireless polling rate with Razer HyperPolling Wireless Dongle'
    ],
    specs: {
      'Form Factor': 'Right-Handed Ergonomic',
      'Weight': '63 grams',
      'Max DPI': '30,000 DPI',
      'Max Speed / Acceleration': '750 IPS / 70 G',
      'Battery Life': 'Up to 90 Hours'
    },
    warranty: '2 Years Razer Authorized India Warranty',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'PRO ERGONOMIC',
    bankOffers: [
      'Flat ₹1,000 Instant Discount on All Credit Cards'
    ]
  },

  // 26. SteelSeries Apex Pro TKL Wireless HyperMagnetic Keyboard
  {
    id: 'hc-periph-steelseries-apex',
    name: 'SteelSeries Apex Pro TKL (2023) Wireless HyperMagnetic Gaming Keyboard (OmniPoint 2.0 Adjustable Actuation, OLED Smart Display, PBT Keycaps)',
    brand: 'SteelSeries',
    category: 'gaming-peripherals',
    subcategory: 'Mechanical Gaming Keyboards',
    price: 23990,
    mrp: 29990,
    discountPercent: 20,
    rating: 4.8,
    ratingCount: 280,
    image: '/products/hc-periph-02.jpg',
    additionalImages: [
      '/products/hc-periph-02.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 1162,
    keyFeatures: [
      'Worlds fastest keyboard with OmniPoint 2.0 adjustable HyperMagnetic switches (0.1mm - 4.0mm)',
      'Rapid Trigger technology eliminates latency caused by physical movement of the switch',
      'Integrated OLED Smart Display delivers vital game info and system stats at a glance',
      'Lag-free Quantum 2.0 Dual Wireless (2.4GHz + Bluetooth 5.0) for seamless flexibility',
      'Series 5000 aircraft-grade aluminum top plate and double-shot PBT keycaps'
    ],
    specs: {
      'Layout': 'Tenkeyless (TKL) 84 Keys',
      'Switch Type': 'OmniPoint 2.0 Adjustable HyperMagnetic',
      'Actuation Point': '0.1 mm to 4.0 mm (40 levels)',
      'Connectivity': '2.4GHz Wireless, Bluetooth 5.0, Detachable USB-C',
      'Battery Life': 'Up to 40 Hours'
    },
    warranty: '2 Years SteelSeries India Warranty',
    isDealOfDay: false,
    isBestSeller: true,
    isTrending: true,
    badge: 'RAPID TRIGGER',
    bankOffers: [
      'Flat ₹2,000 Instant Discount on SBI & HDFC Cards'
    ]
  },

  // 27. Sony PlayStation 5 Slim Disc Edition Console
  {
    id: 'hc-periph-ps5-console',
    name: 'Sony PlayStation 5 Slim Disc Edition 1TB SSD Gaming Console with DualSense Wireless Controller & Astro Playroom Pre-installed - White',
    brand: 'Sony PlayStation',
    category: 'gaming-peripherals',
    subcategory: 'Console Gaming',
    price: 54990,
    mrp: 59990,
    discountPercent: 8,
    rating: 4.9,
    ratingCount: 1540,
    image: '/categories/cat-gaming.png',
    additionalImages: [
      '/categories/cat-gaming.png'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 2665,
    keyFeatures: [
      'Slimmer, sleek form factor with over 30% volume reduction and 1TB ultra-fast PCIe SSD',
      'Ultra-High Speed SSD unlocks near-instant load times for installed PS5 games',
      'Ray Tracing support delivers realistic shadows and reflections at up to 120 fps in 4K',
      'Tempest 3D AudioTech immerses you in rich, multidirectional soundscapes',
      'Includes DualSense Wireless Controller with Haptic Feedback and Dynamic Adaptive Triggers'
    ],
    specs: {
      'Storage': '1 TB Ultra-High Speed NVMe SSD',
      'Optical Drive': 'Ultra HD Blu-ray Disc Drive (Detachable)',
      'Output Resolution': 'Up to 4K 120Hz & 8K HDR support',
      'Audio': 'Tempest 3D AudioTech',
      'Controller': 'Sony DualSense Wireless Included'
    },
    warranty: '1 Year Sony India Official Comprehensive Warranty',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'CONSOLE BESTSELLER',
    bankOffers: [
      'Flat ₹3,000 Instant Discount on ICICI Bank Cards',
      'Free Extra DualSense Charging Station Voucher'
    ]
  },

  // --------------------------------------------------------------------------
  // AUDIO & SOUND
  // --------------------------------------------------------------------------

  // 28. Sony WH-1000XM5 Wireless Headphones
  {
    id: 'hc-audio-01',
    name: 'Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones (Auto NC Optimizer, 30 Hours Battery, Crystal Clear Hands-Free Calling) - Silver',
    brand: 'Sony',
    category: 'audio',
    subcategory: 'Active Noise Cancelling Headphones',
    price: 26990,
    mrp: 34990,
    discountPercent: 23,
    rating: 4.8,
    ratingCount: 1420,
    image: '/products/hc-audio-01.jpg',
    additionalImages: [
      '/products/hc-audio-01.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 1308,
    keyFeatures: [
      'Two processors and 8 microphones for unprecedented active noise cancellation',
      'Specially designed 30mm carbon fiber driver unit delivers natural sound quality',
      'Precise Voice Pickup Technology with AI beamforming noise reduction',
      'Up to 30-hour battery life with quick charge (3 min charge = 3 hours playback)',
      'Multipoint connection lets you pair two Bluetooth devices simultaneously'
    ],
    specs: {
      'Headphone Type': 'Over-Ear Closed Dynamic',
      'Driver Unit': '30mm Carbon Composite',
      'Frequency Response': '4 Hz - 40,000 Hz (Hi-Res Audio Wireless / LDAC)',
      'Battery Life': '30 Hours (NC On) / 40 Hours (NC Off)',
      'Weight': '250 grams'
    },
    warranty: '1 Year Official Sony India Warranty',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'BEST AUDIO',
    bankOffers: [
      'Flat ₹2,500 Instant Discount on All Credit Cards'
    ]
  },

  // 29. Bose QuietComfort Ultra Wireless Headphones
  {
    id: 'hc-audio-bose-qc',
    name: 'Bose QuietComfort Ultra Wireless Noise Cancelling Headphones with Immersive Spatial Audio, CustomTune Sound & Wind Block - Black',
    brand: 'Bose',
    category: 'audio',
    subcategory: 'Active Noise Cancelling Headphones',
    price: 35900,
    mrp: 41900,
    discountPercent: 14,
    rating: 4.9,
    ratingCount: 680,
    image: '/products/hc-audio-01.jpg',
    additionalImages: [
      '/products/hc-audio-01.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 1740,
    keyFeatures: [
      'Breakthrough Bose Immersive Audio spatializes whatever youre hearing for a wider soundstage',
      'World-class Quiet Mode, Aware Mode with ActiveSense, and Immersion Mode',
      'CustomTune technology analyzes your ear shape and customizes sound performance accordingly',
      'Plush protein leather earcups and ergonomic headband for luxurious all-day comfort',
      'Up to 24 hours of battery life with Bluetooth 5.3 multipoint audio streaming'
    ],
    specs: {
      'Headphone Type': 'Over-Ear Premium Wireless',
      'Spatial Audio': 'Bose Immersive Audio Built-in',
      'Noise Cancellation': 'CustomTune Active Noise Cancelling',
      'Battery Life': 'Up to 24 Hours (Up to 18 hrs with Immersive Audio)',
      'Bluetooth Version': '5.3 (SBC, AAC, Snapdragon Sound aptX Adaptive)'
    },
    warranty: '1 Year Bose India Official Warranty',
    isDealOfDay: false,
    isBestSeller: true,
    isTrending: true,
    badge: 'PREMIUM SOUND',
    bankOffers: [
      'Flat ₹3,000 Instant Cashback on HDFC & ICICI Cards'
    ]
  },

  // 30. Apple AirPods Pro (2nd Gen, USB-C)
  {
    id: 'hc-audio-airpods-pro2',
    name: 'Apple AirPods Pro (2nd Generation) with MagSafe Charging Case (USB-C), Up to 2x More Active Noise Cancellation, Transparency Mode & Adaptive Audio',
    brand: 'Apple',
    category: 'audio',
    subcategory: 'True Wireless (TWS) Earbuds',
    price: 22900,
    mrp: 24900,
    discountPercent: 8,
    rating: 4.9,
    ratingCount: 2310,
    image: '/categories/cat-audio.png',
    additionalImages: [
      '/categories/cat-audio.png'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 1110,
    keyFeatures: [
      'Apple-designed H2 headphone chip powers advanced audio performance and smarter noise cancelling',
      'Adaptive Audio dynamically blends Transparency mode and Active Noise Cancellation',
      'Personalized Spatial Audio with dynamic head tracking places sound all around you',
      'MagSafe Charging Case (USB-C) with Precision Finding speaker and lanyard loop',
      'Up to 6 hours of listening time with ANC enabled, and up to 30 hours with the case'
    ],
    specs: {
      'Chip': 'Apple H2 Headphone Chip, Apple U1 Case Chip',
      'Sweat & Water Resistance': 'IP54 Dust, Sweat, and Water Resistant',
      'Battery Life': 'Up to 6 hours (30 hours total with case)',
      'Charging': 'USB-C, MagSafe, Apple Watch Charger, Qi Certified'
    },
    warranty: '1 Year Apple Official Warranty with Global Coverage',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'TWS LEADER',
    bankOffers: [
      'Flat ₹2,000 Instant Discount on HDFC Bank Cards'
    ]
  },

  // 31. JBL Bar 800 Pro Dolby Atmos Soundbar
  {
    id: 'hc-audio-jbl-bar800',
    name: 'JBL Bar 800 Pro 5.1.2 Channel Dolby Atmos Soundbar with Detachable Wireless Surround Speakers and 10" Wireless Subwoofer (720W Output)',
    brand: 'JBL',
    category: 'audio',
    subcategory: 'Speakers & Soundbars',
    price: 84999,
    mrp: 99999,
    discountPercent: 15,
    rating: 4.8,
    ratingCount: 184,
    image: '/categories/cat-audio.png',
    additionalImages: [
      '/categories/cat-audio.png'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 4120,
    keyFeatures: [
      '720W total system power transforms movies, games, and music into realistic audio experiences',
      'True Dolby Atmos with two up-firing drivers for captivating 3D sound immersion',
      'Detachable battery-powered wireless surround speakers place behind your couch with no messy cords',
      '10-inch down-firing wireless subwoofer delivers deep, punchy room-shaking bass',
      'PureVoice dialogue enhancement technology ensures every word is crystal-clear'
    ],
    specs: {
      'Total Speaker Power': '720 W Max',
      'Channels': '5.1.2 Channel with 3D Spatial Audio',
      'Subwoofer': '10" Wireless Down-Firing',
      'HDMI In/Out': 'HDMI eARC with 4K Dolby Vision Pass-Through',
      'Wireless Tech': 'Wi-Fi 6, AirPlay, Alexa Multi-Room, Chromecast, Bluetooth 5.0'
    },
    warranty: '1 Year JBL India Official Onsite Warranty',
    isDealOfDay: false,
    isBestSeller: true,
    isTrending: false,
    badge: 'CINEMA SOUND',
    bankOffers: [
      'Flat ₹5,000 Instant Discount on Axis & ICICI Cards'
    ]
  },

  // --------------------------------------------------------------------------
  // ACCESSORIES & STORAGE
  // --------------------------------------------------------------------------

  // 32. Samsung 990 PRO 2TB PCIe Gen4 NVMe M.2 SSD
  {
    id: 'hc-storage-01',
    name: 'Samsung 990 PRO 2TB PCIe 4.0 NVMe M.2 Internal Gaming SSD with Heatsink (Speeds up to 7,450 MB/s, PS5 Compatible)',
    brand: 'Samsung',
    category: 'accessories',
    subcategory: 'Storage & Memory',
    price: 18499,
    mrp: 25999,
    discountPercent: 29,
    rating: 4.9,
    ratingCount: 812,
    image: '/products/hc-storage-01.jpg',
    additionalImages: [
      '/products/hc-storage-01.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 896,
    keyFeatures: [
      'Sequential read/write speeds up to 7,450 / 6,900 MB/s',
      'Integrated slim heatsink prevents thermal throttling in PC and PlayStation 5',
      'Up to 50% improved power efficiency over previous generation 980 PRO',
      'Samsung Magician software for drive health monitoring and firmware updates',
      '1200 TBW endurance rating with 1.5 Million hours MTBF'
    ],
    specs: {
      'Capacity': '2 TB',
      'Interface': 'PCIe Gen 4.0 x4, NVMe 2.0',
      'Form Factor': 'M.2 (2280) with Integrated Heatsink',
      'Seq. Read Speed': 'Up to 7,450 MB/s',
      'Seq. Write Speed': 'Up to 6,900 MB/s',
      'Compatibility': 'Desktop PC, Laptops & Sony PlayStation 5'
    },
    warranty: '5 Years Official Samsung Brand Warranty',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'TOP STORAGE',
    bankOffers: ['10% Instant Discount on HDFC & SBI Cards']
  },

  // 33. SanDisk Extreme 2TB Portable SSD
  {
    id: 'hc-storage-sandisk-extreme',
    name: 'SanDisk Extreme 2TB USB 3.2 Gen 2 Type-C Portable NVMe External SSD (Up to 1050MB/s Read, IP65 Water & Dust Resistance, Carabiner Loop)',
    brand: 'SanDisk',
    category: 'accessories',
    subcategory: 'Storage & Memory',
    price: 14990,
    mrp: 21990,
    discountPercent: 32,
    rating: 4.8,
    ratingCount: 960,
    image: '/products/hc-storage-01.jpg',
    additionalImages: [
      '/products/hc-storage-01.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 726,
    keyFeatures: [
      'High-speed NVMe solid-state performance with up to 1050 MB/s read and 1000 MB/s write speeds',
      'Up to 3-meter drop protection and IP65 water and dust resistance for rugged outdoor durability',
      'Durable silicone shell provides a premium tactile feel and added exterior drive protection',
      'Handy carabiner loop secures the drive to your backpack or belt loop during travel',
      'Password protection featuring 256-bit AES hardware encryption keeps private files secure'
    ],
    specs: {
      'Capacity': '2 TB',
      'Interface': 'USB 3.2 Gen 2 (Type-C / Type-A compatible)',
      'Transfer Speed': 'Up to 1050 MB/s',
      'Durability': 'IP65 Water & Dust Resistant, 3-meter drop proof',
      'Dimensions': '100.5 x 52.4 x 8.9 mm'
    },
    warranty: '5 Years Official SanDisk India Warranty',
    isDealOfDay: false,
    isBestSeller: true,
    isTrending: true,
    badge: 'RUGGED SSD',
    bankOffers: [
      'Flat ₹1,000 Instant Discount on All Credit Cards'
    ]
  },

  // 34. Anker 737 GaNPrime 140W Power Bank
  {
    id: 'hc-acc-02',
    name: 'Anker 737 Power Bank (PowerCore 24K) 24,000mAh 140W Output with Smart Digital Display, 3-Port Portable Laptop Charger',
    brand: 'Anker',
    category: 'accessories',
    subcategory: 'Connectivity & Power',
    price: 12999,
    mrp: 16999,
    discountPercent: 24,
    rating: 4.8,
    ratingCount: 395,
    image: '/categories/cat-storage.png',
    additionalImages: [
      '/categories/cat-storage.png'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 630,
    keyFeatures: [
      'Ultra-powerful 140W bi-directional fast charging for MacBook Pro, Dell XPS & Phones',
      'Massive 24,000mAh capacity provides 5 full charges for phone or 1.3 charges for laptop',
      'Smart Digital Display shows real-time output/input wattage and estimated recharge time',
      'ActiveShield 2.0 temperature sensor monitors heat over 3 million times per day'
    ],
    specs: {
      'Battery Capacity': '24,000 mAh / 86.4 Wh (Airline Approved)',
      'Total Output': '140W Max (Single Port)',
      'Ports': '2x USB-C (140W PD 3.1) + 1x USB-A (18W)',
      'Weight': '630 grams'
    },
    warranty: '24 Months Anker Official Warranty',
    isDealOfDay: false,
    isBestSeller: true,
    isTrending: false,
    badge: 'FAST CHARGE',
    bankOffers: ['Flat ₹1,000 Instant Discount on UPI Payments']
  },

  // 35. CalDigit TS4 Thunderbolt 4 Dock
  {
    id: 'hc-acc-caldigit-ts4',
    name: 'CalDigit TS4 Thunderbolt 4 18-Port Workstation Docking Station (98W Power Delivery, 2.5GbE, 3x TB4, Dual 4K 60Hz or Single 8K) - Space Gray',
    brand: 'CalDigit',
    category: 'accessories',
    subcategory: 'Connectivity & Power',
    price: 38990,
    mrp: 44990,
    discountPercent: 13,
    rating: 4.9,
    ratingCount: 210,
    image: '/categories/cat-storage.png',
    additionalImages: [
      '/categories/cat-storage.png'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 1890,
    keyFeatures: [
      '18 versatile ports of connectivity including 3x Thunderbolt 4, 5x USB-A, 3x USB-C, and DisplayPort 1.4',
      'Provides up to 98W continuous power delivery to fast-charge laptops even under full workload',
      'Ultra-fast 2.5 Gigabit Ethernet port delivers 2.5x the speed of standard gigabit connections',
      'Supports dual 4K 60Hz extended displays or a single monitor up to 8K resolution',
      'Solid aluminum heatsink chassis passively dissipates warmth without noisy fans'
    ],
    specs: {
      'Ports': '18 Ports (3x TB4, 5x USB-A 10Gbps, 3x USB-C 10Gbps, DP 1.4, 2.5GbE, SD/microSD, Audio)',
      'Host Power Delivery': '98W Power Delivery',
      'Display Output': 'Dual 4K 60Hz or Single 8K 60Hz',
      'Compatibility': 'MacBook Pro/Air (M-Series/Intel), Windows Thunderbolt 4/USB4 Laptops'
    },
    warranty: '2 Years Manufacturer Comprehensive Warranty',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'PRO WORKSTATION',
    bankOffers: [
      'Flat ₹3,000 Instant Discount on Major Credit Cards'
    ]
  },

  /* Commented out MOBILES & TABLETS per user request
  // --------------------------------------------------------------------------
  // MOBILES & TABLETS
  // --------------------------------------------------------------------------

  // 36. Apple iPhone 16 Pro 256GB Desert Titanium
  {
    id: 'hc-mobile-01',
    name: 'Apple iPhone 16 Pro (256 GB) - Desert Titanium with Camera Control & A18 Pro Chip',
    brand: 'Apple',
    category: 'mobiles',
    subcategory: 'Smartphones',
    price: 129900,
    mrp: 134900,
    discountPercent: 4,
    rating: 4.9,
    ratingCount: 890,
    image: '/products/hc-mobile-01.jpg',
    additionalImages: [
      '/products/hc-mobile-01.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 6299,
    keyFeatures: [
      'A18 Pro chip with 6-core GPU, running console games and Apple Intelligence',
      '48MP Fusion camera with 5x Telephoto and 4K 120 fps Dolby Vision recording',
      'Camera Control button for instant access to zoom, exposure and depth of field',
      'Grade 5 Titanium frame with thin micro-borders and Ceramic Shield front'
    ],
    specs: {
      'Display': '6.3-inch Super Retina XDR OLED (120Hz ProMotion)',
      'Processor': 'A18 Pro Chip (Apple 3nm)',
      'Internal Storage': '256 GB',
      'Rear Camera': '48MP Main + 48MP Ultra Wide + 12MP 5x Telephoto',
      'Battery': 'Up to 27 hours video playback'
    },
    warranty: '1 Year Apple Official Warranty in India',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'NEW LAUNCH',
    bankOffers: ['Flat ₹5,000 Instant Cashback on ICICI/HDFC Credit Cards']
  },

  // 37. Samsung Galaxy S24 Ultra 5G
  {
    id: 'hc-mobile-samsung-s24ultra',
    name: 'Samsung Galaxy S24 Ultra 5G (12GB RAM, 256GB Storage, Titanium Gray, Galaxy AI, Built-in S-Pen, 200MP Camera)',
    brand: 'Samsung',
    category: 'mobiles',
    subcategory: 'Smartphones',
    price: 129999,
    mrp: 134999,
    discountPercent: 4,
    rating: 4.9,
    ratingCount: 1120,
    image: '/products/hc-mobile-01.jpg',
    additionalImages: [
      '/products/hc-mobile-01.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 6305,
    keyFeatures: [
      'Galaxy AI is here: Circle to Search, Live Call Translation, Note Assist and Photo Assist',
      'Titanium exterior frame with Corning Gorilla Armor glass delivering 75% reduced reflection',
      'Industry-leading 200MP Main Camera with 5x Optical Zoom and AI Quad Telephoto engine',
      'Snapdragon 8 Gen 3 for Galaxy with enlarged vapor chamber for sustained ultra-smooth gaming',
      'Iconic built-in S-Pen for sketching, note-taking, and remote camera triggering'
    ],
    specs: {
      'Display': '6.8-inch Dynamic AMOLED 2X QHD+ 120Hz (2600 nits peak)',
      'Processor': 'Qualcomm Snapdragon 8 Gen 3 for Galaxy',
      'RAM / Storage': '12 GB RAM / 256 GB UFS 4.0',
      'Camera': '200MP + 50MP + 12MP + 10MP Quad Camera System',
      'Battery': '5000 mAh with 45W Fast Charging'
    },
    warranty: '1 Year Official Samsung India Warranty',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'AI FLAGSHIP',
    bankOffers: [
      'Flat ₹6,000 Instant Cashback on HDFC & SBI Credit Cards',
      'Free Wireless Charger Duo Pad'
    ]
  },

  // 38. Apple iPad Pro 13" M4 Chip OLED
  {
    id: 'hc-mobile-ipad-pro-m4',
    name: 'Apple iPad Pro 13" Ultra Retina XDR Tandem OLED Display (Apple M4 Chip 9-core CPU, 10-core GPU / 256GB / Wi-Fi) - Space Black',
    brand: 'Apple',
    category: 'mobiles',
    subcategory: 'Tablets & iPads',
    price: 129900,
    mrp: 139900,
    discountPercent: 7,
    rating: 5.0,
    ratingCount: 380,
    image: '/categories/cat-mobiles.png',
    additionalImages: [
      '/categories/cat-mobiles.png'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 6299,
    keyFeatures: [
      'Groundbreaking Tandem OLED Ultra Retina XDR display with 1000 nits full-screen & 1600 nits peak HDR',
      'Apple M4 chip delivers up to 4x faster pro rendering performance with hardware-accelerated ray tracing',
      'Impossibly thin 5.1 mm design makes it the thinnest Apple product ever created',
      'Landscape 12MP Center Stage front camera perfect for video calls and conferences',
      'Supports Apple Pencil Pro with barrel roll, haptic feedback, and squeeze gestures'
    ],
    specs: {
      'Display': '13.0-inch Tandem OLED Ultra Retina XDR (2752 x 2064) 120Hz ProMotion',
      'Processor': 'Apple M4 Chip (9-Core CPU, 10-Core GPU, 16-Core Neural Engine)',
      'Storage': '256 GB',
      'Thickness': '5.1 mm (444 grams)',
      'Operating System': 'iPadOS 18'
    },
    warranty: '1 Year Apple Official Warranty with Global AppleCare+ eligibility',
    isDealOfDay: true,
    isBestSeller: true,
    isTrending: true,
    badge: 'THINNEST IPAD',
    bankOffers: [
      'Flat ₹4,000 Instant Cashback on ICICI & HDFC Credit Cards'
    ]
  },

  // 39. Google Pixel 9 Pro 5G
  {
    id: 'hc-mobile-pixel-9pro',
    name: 'Google Pixel 9 Pro 5G (16GB RAM, 256GB Storage, Obsidian, Google Tensor G4 with Gemini Nano AI & Pro Triple Camera)',
    brand: 'Google Pixel',
    category: 'mobiles',
    subcategory: 'Smartphones',
    price: 109999,
    mrp: 119999,
    discountPercent: 8,
    rating: 4.8,
    ratingCount: 290,
    image: '/products/hc-mobile-01.jpg',
    additionalImages: [
      '/products/hc-mobile-01.jpg'
    ],
    inStock: true,
    fastDelivery: true,
    emiStartsAt: 5335,
    keyFeatures: [
      'Google Tensor G4 chip with 16GB RAM engineered to run cutting-edge Gemini AI on-device',
      'Super Actua display (6.3-inch OLED 120Hz LTPO) shines bright even in direct sunlight up to 3000 nits',
      'Pro Triple Rear Camera system with 5x Telephoto and 30x Super Res Zoom',
      'Pixel Studio and Reimagine photos using generative AI with intuitive text prompts',
      '7 years of guaranteed OS upgrades, security updates, and regular Feature Drops'
    ],
    specs: {
      'Display': '6.3-inch Super Actua LTPO OLED (1-120Hz, 3000 nits peak)',
      'Processor': 'Google Tensor G4 with Titan M2 security coprocessor',
      'RAM / Storage': '16 GB RAM / 256 GB Storage',
      'Camera': '50MP Main + 48MP Ultrawide with Macro Focus + 48MP 5x Telephoto',
      'Battery': '4700 mAh with 24+ hour battery life'
    },
    warranty: '1 Year Google Official India Warranty',
    isDealOfDay: false,
    isBestSeller: true,
    isTrending: true,
    badge: 'GEMINI AI',
    bankOffers: [
      'Flat ₹5,000 Instant Discount on SBI & HDFC Credit Cards'
    ]
  }
  */
];
