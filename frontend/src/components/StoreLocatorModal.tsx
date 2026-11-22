import React from 'react';
import { X, MapPin, Phone, Clock, Navigation, CheckCircle2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const StoreLocatorModal: React.FC = () => {
  const { isStoreLocatorOpen, setIsStoreLocatorOpen } = useShop();

  if (!isStoreLocatorOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn select-none">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-[#e42529] text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-amber-300" />
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Hello Computer Store & Service Centre
            </h3>
          </div>
          <button
            onClick={() => setIsStoreLocatorOpen(false)}
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          
          {/* Main Store Card */}
          <div className="bg-gradient-to-br from-red-50/50 via-white to-amber-50/30 p-5 rounded-2xl border-2 border-red-200 shadow-sm relative">
            
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <span className="text-[10px] font-black text-[#e42529] bg-red-100 border border-red-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
                  Primary Store & Authorised Service Centre
                </span>
                <h4 className="text-lg font-black text-gray-950 mt-1.5">
                  Hello Computer - Coimbatore
                </h4>
                <p className="text-xs text-gray-500 font-medium">
                  Computer store in Coimbatore, Tamil Nadu
                </p>
              </div>

              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-2.5 py-1 rounded-full">
                Open Now
              </span>
            </div>

            {/* Address */}
            <div className="mt-3.5 flex items-start space-x-2 text-xs text-gray-800 bg-white p-3 rounded-xl border border-gray-200">
              <MapPin className="w-4 h-4 text-[#e42529] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-gray-900 font-bold">Store Address:</strong>
                <p className="leading-relaxed text-gray-700 mt-0.5">
                  Hello Computer, First Floor, 36, 100 Feet Rd, near Mariyamman Temple, Coimbatore, Tamil Nadu 641012
                </p>
              </div>
            </div>

            {/* Timings & Contact */}
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center space-x-2 bg-white p-2.5 rounded-xl border border-gray-200 text-gray-700">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase font-bold text-gray-400">Store Timings</span>
                  <span className="font-semibold text-gray-900">10:00 AM - 9:00 PM (Daily)</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 bg-white p-2.5 rounded-xl border border-gray-200 text-gray-700">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase font-bold text-gray-400">Direct Contact</span>
                  <a href="tel:+919842210055" className="font-semibold text-gray-900 hover:text-[#e42529]">
                    +91 98422 10055 / 0422 249 1012
                  </a>
                </div>
              </div>
            </div>

            {/* Key In-Store Services */}
            <div className="mt-4 pt-3 border-t border-gray-200">
              <span className="text-[11px] font-bold text-gray-800 uppercase tracking-wider block mb-2">
                Available In-Store Services:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] text-gray-700">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Custom PC Rig Lab</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Laptop & Mac Repair</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Instant Store Pickup</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Genuine Parts Upgrades</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Warranty Support</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Demo & Testing</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 pt-3 flex flex-col sm:flex-row items-center gap-2.5">
              <a
                href="https://maps.google.com/?q=Hello+Computer+36+100+Feet+Rd+near+Mariyamman+Temple+Coimbatore+Tamil+Nadu+641012"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center space-x-2 bg-[#e42529] hover:bg-[#c01519] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
              </a>

              <button
                onClick={() => setIsStoreLocatorOpen(false)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-100 text-xs font-bold text-gray-700 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
