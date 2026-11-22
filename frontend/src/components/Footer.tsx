import React from 'react';
import { 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Footer: React.FC = () => {
  const { setSelectedCategory, setViewMode, setIsStoreLocatorOpen } = useShop();

  return (
    <footer className="bg-[#111827] text-gray-300 pt-8 sm:pt-10 pb-24 md:pb-6 border-t-2 border-[#e42529] mt-8 sm:mt-12">
      <div className="max-w-[1360px] mx-auto px-4">
        
        {/* Top Feature Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-8 border-b border-gray-800 text-xs">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-white/10 rounded-xl text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-white text-sm">100% Genuine Tech</h5>
              <p className="text-gray-400">Direct authorized brand warranty</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-white/10 rounded-xl text-amber-400">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-white text-sm">Express 3-Hour Delivery</h5>
              <p className="text-gray-400">Fast doorstep courier nationwide</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-white/10 rounded-xl text-amber-400">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-white text-sm">Easy 7-Day Return</h5>
              <p className="text-gray-400">Hassle-free replacement policy</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-white/10 rounded-xl text-amber-400">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-white text-sm">Hello Computer Support</h5>
              <p className="text-gray-400">+91 98422 10055 / 0422 249 1012</p>
            </div>
          </div>
        </div>

        {/* Multi-Column Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-8 border-b border-gray-800 text-xs text-gray-400">
          
          {/* Column 1: Brand & Bio */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain bg-white rounded-lg p-0.5" />
              <span className="font-black text-base text-white tracking-tight">HELLO COMPUTER</span>
            </div>
            <p className="text-[11px] leading-relaxed text-gray-400">
              Computer store in Coimbatore, Tamil Nadu. First Floor, 36, 100 Feet Rd, near Mariyamman Temple, Coimbatore - 641012.
            </p>
          </div>

          {/* Column 2: Product Categories */}
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Categories
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><button onClick={() => { setSelectedCategory('laptops'); setViewMode('catalog'); }} className="hover:text-amber-300">Gaming Laptops</button></li>
              <li><button onClick={() => { setSelectedCategory('desktops'); setViewMode('catalog'); }} className="hover:text-amber-300">Desktops & All-in-Ones</button></li>
              <li><button onClick={() => { setSelectedCategory('components'); setViewMode('catalog'); }} className="hover:text-amber-300">RTX Graphics Cards</button></li>
              <li><button onClick={() => { setSelectedCategory('gaming-peripherals'); setViewMode('catalog'); }} className="hover:text-amber-300">Keyboards & Mice</button></li>
              <li><button onClick={() => { setSelectedCategory('audio'); setViewMode('catalog'); }} className="hover:text-amber-300">ANC Headphones</button></li>
            </ul>
          </div>

          {/* Column 3: Hello Care ResQ */}
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Hello Care ResQ
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#service" className="hover:text-amber-300">Authorised Service Centers</a></li>
              <li><a href="#repair" className="hover:text-amber-300">Laptop & PC Repair</a></li>
              <li><a href="#extended-warranty" className="hover:text-amber-300">Extended Warranty Care</a></li>
              <li><button onClick={() => setIsStoreLocatorOpen(true)} className="hover:text-amber-300 text-left cursor-pointer">Visit Coimbatore Store</button></li>
            </ul>
          </div>

          {/* Column 4: Policies */}
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Policies & Help
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#faq" className="hover:text-amber-300">Frequently Asked Questions</a></li>
              <li><a href="#shipping" className="hover:text-amber-300">Shipping & Delivery Terms</a></li>
              <li><a href="#return" className="hover:text-amber-300">Return & Replacement Policy</a></li>
              <li><a href="#privacy" className="hover:text-amber-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Stay Connected
            </h4>
            <p className="text-[11px] text-gray-400">
              Subscribe for launch alerts and member exclusive discounts.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-white/10 px-3 py-1.5 text-xs rounded-l-lg border border-white/20 outline-none text-white placeholder-gray-400 w-full"
              />
              <button className="bg-[#e42529] hover:bg-[#c01519] px-3.5 py-1.5 text-xs font-bold rounded-r-lg transition-colors text-white">
                Join
              </button>
            </div>

            <div className="pt-1 flex items-center space-x-3 text-gray-400">
              <a href="#fb" className="hover:text-white"><Facebook className="w-4 h-4" /></a>
              <a href="#tw" className="hover:text-white"><Twitter className="w-4 h-4" /></a>
              <a href="#ig" className="hover:text-white"><Instagram className="w-4 h-4" /></a>
              <a href="#yt" className="hover:text-white"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-400 gap-4">
          <div>
            © 2026 <strong>Hello Computer Retail Limited</strong>. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-gray-400">
            <span className="text-gray-400 text-[11px] sm:text-xs">Payment Options:</span>
            <div className="flex flex-wrap items-center gap-1.5">
              {/* UPI */}
              <div className="bg-white rounded px-1.5 py-0.5 h-5 sm:h-5.5 flex items-center justify-center shadow-2xs hover:scale-105 transition-transform" title="UPI">
                <img src="/payments/upi.svg" alt="UPI" className="h-3 sm:h-3.5 w-auto object-contain" />
              </div>

              {/* VISA */}
              <div className="bg-white rounded px-1.5 py-0.5 h-5 sm:h-5.5 flex items-center justify-center shadow-2xs hover:scale-105 transition-transform" title="Visa">
                <img src="/payments/visa.svg" alt="Visa" className="h-2.5 sm:h-3 w-auto object-contain" />
              </div>

              {/* Mastercard */}
              <div className="bg-white rounded px-1.5 py-0.5 h-5 sm:h-5.5 flex items-center justify-center shadow-2xs hover:scale-105 transition-transform" title="Mastercard">
                <img src="/payments/mastercard.svg" alt="Mastercard" className="h-3 sm:h-3.5 w-auto object-contain" />
              </div>

              {/* RuPay */}
              <div className="bg-white rounded px-1.5 py-0.5 h-5 sm:h-5.5 flex items-center justify-center shadow-2xs hover:scale-105 transition-transform" title="RuPay">
                <img src="/payments/rupay.svg" alt="RuPay" className="h-2.5 sm:h-3 w-auto object-contain" />
              </div>

              {/* NetBanking */}
              <div className="bg-white rounded px-1.5 py-0.5 h-5 sm:h-5.5 flex items-center justify-center shadow-2xs hover:scale-105 transition-transform" title="NetBanking">
                <img src="/payments/netbanking.svg" alt="NetBanking" className="h-2.5 sm:h-3 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
