import React from 'react';
import { Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CustomPCBuilderBanner: React.FC = () => {
  const { setViewMode } = useShop();

  return (
    <section className="max-w-[1360px] mx-auto px-3 sm:px-4 py-4 sm:py-6">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#18181b] text-white p-5 sm:p-7 lg:p-8 border border-neutral-800 shadow-md">
        
        {/* Subtle Ambient Glow with Custom Rig */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-15 pointer-events-none hidden lg:block overflow-hidden">
          <img 
            src="/banners/cag8.png" 
            alt="" 
            className="w-full h-full object-cover blur-2xl scale-125" 
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Short & Simple Pitch */}
          <div className="lg:col-span-7 space-y-3">
            
            <div className="inline-flex items-center space-x-1.5 bg-amber-400 text-gray-950 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" />
              <span>Custom PC Lab</span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight">
              Build Your Custom PC Rig
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-lg">
              Choose your parts with live compatibility check. Our engineers assemble, cable-manage, and stress-test your machine before delivery.
            </p>

            {/* Simple Highlights */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1 text-xs text-gray-200">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>100% Genuine Parts</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Free Assembly & Testing</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>3-Year Warranty</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setViewMode('pc-builder')}
                className="w-full sm:w-auto bg-[#e42529] hover:bg-[#c01519] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Build Your PC Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Visual Card with cag8.png showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div 
              onClick={() => setViewMode('pc-builder')}
              className="bg-white/10 border border-white/15 rounded-2xl overflow-hidden backdrop-blur-md max-w-sm sm:max-w-md w-full shadow-xl cursor-pointer group hover:border-amber-400/40 transition-all"
            >
              
              {/* Custom PC Rig Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/60">
                <img 
                  src="/banners/cag8.png" 
                  alt="Hello Computer Custom PC Rig"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-2.5 right-2.5 text-[10px] font-black text-emerald-400 bg-emerald-950/80 border border-emerald-700 px-2 py-0.5 rounded shadow">
                  4K 144+ FPS
                </span>
                <div className="absolute bottom-2.5 left-3 text-white">
                  <div className="text-[11px] text-amber-400 font-bold uppercase tracking-wider">Example Flagship Rig</div>
                  <div className="text-xs text-gray-200 font-medium">Core i9 14900KF · RTX 4090 · 64GB DDR5</div>
                </div>
              </div>

              {/* Simple Bottom Strip */}
              <div className="px-4 py-3 flex items-center justify-between border-t border-white/10 bg-black/20">
                <div>
                  <div className="text-[10px] text-gray-400">Estimated Price</div>
                  <div className="text-sm sm:text-base font-black text-amber-300">₹3,45,990</div>
                </div>
                <span className="bg-amber-400 group-hover:bg-amber-300 text-gray-950 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center space-x-1">
                  <span>Configure</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
