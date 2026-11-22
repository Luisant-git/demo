import React from 'react';
import { MapPin, ShieldCheck, ChevronDown, Clock } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const TopUtilityBar: React.FC = () => {
  const { 
    pincodeInfo, 
    setIsPincodeModalOpen, 
    setIsStoreLocatorOpen 
  } = useShop();

  return (
    <div className="bg-[#111827] text-gray-300 text-[11.5px] font-medium tracking-normal hidden md:block border-b border-gray-800 select-none">
      <div className="max-w-[1360px] mx-auto px-4 py-2 flex items-center justify-between">
        
        {/* ================= LEFT SIDE: Store Location & Timings ================= */}
        <div className="flex items-center space-x-3.5">
          
          {/* Store Location Button */}
          <button 
            onClick={() => setIsStoreLocatorOpen(true)}
            className="flex items-center space-x-1.5 text-white hover:text-amber-300 transition-colors cursor-pointer group"
            title="Click to view our store location and directions"
          >
            <MapPin className="w-3.5 h-3.5 text-[#e42529] group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="font-bold text-white group-hover:text-amber-300">
              Hello Computer:
            </span>
            <span className="text-gray-300 font-normal">
              36, 100 Feet Rd, near Mariyamman Temple, Coimbatore - 641012
            </span>
          </button>

          <span className="h-3 w-px bg-neutral-700 hidden lg:block" />

          {/* Store Hours */}
          <div className="hidden lg:flex items-center space-x-1.5 text-gray-400">
            <Clock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span>Open Daily: 10:00 AM - 9:00 PM</span>
          </div>

        </div>

        {/* ================= RIGHT SIDE: Service Guarantee & Delivery Pincode ================= */}
        <div className="flex items-center space-x-3.5">
          
          {/* Store Guarantee */}
          <div className="flex items-center space-x-1.5 text-emerald-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span className="text-gray-200">Authorised Computer Store & Service</span>
          </div>

          {/* Delivery Pincode Selector (Commented Out)
          <span className="h-3.5 w-px bg-neutral-700" />

          <button
            onClick={() => setIsPincodeModalOpen(true)}
            className="flex items-center space-x-1.5 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 hover:border-neutral-600 px-3 py-1 rounded-full text-white transition-all cursor-pointer text-[11px] group shadow-2xs"
            title="Click to check or change your delivery location"
          >
            <MapPin className="w-3 h-3 text-[#e42529] group-hover:animate-bounce flex-shrink-0" />
            <span className="text-gray-400">Deliver to:</span>
            <span className="font-bold text-amber-300 tracking-wide">
              {pincodeInfo.pincode}
            </span>
            {pincodeInfo.city && (
              <span className="text-gray-300 font-normal">
                ({pincodeInfo.city})
              </span>
            )}
            <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors" />
          </button>
          */}

        </div>

      </div>
    </div>
  );
};
