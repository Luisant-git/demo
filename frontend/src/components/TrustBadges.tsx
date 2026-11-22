import React from 'react';
import { Truck, ShieldCheck, RefreshCw, Wrench, CreditCard } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const USPs = [
    {
      icon: <Truck className="w-5 h-5 text-[#e42529]" />,
      title: 'Fast & Free Delivery',
      desc: 'Express 3-Hour doorstep shipping'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#e42529]" />,
      title: '100% Genuine Tech',
      desc: 'Official brand authorized warranty'
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-[#e42529]" />,
      title: '7-Day Easy Return',
      desc: 'Simple replacement guarantee'
    },
    {
      icon: <Wrench className="w-5 h-5 text-[#e42529]" />,
      title: 'Hello ResQ Support',
      desc: 'Free setup & repair diagnostics'
    },
    {
      icon: <CreditCard className="w-5 h-5 text-[#e42529]" />,
      title: 'No Cost EMI',
      desc: 'Available on all major bank cards'
    }
  ];

  return (
    <section className="bg-white border-y border-gray-200/80 py-2.5 sm:py-3.5 shadow-sm my-2 sm:my-3 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-3 sm:px-4 flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar py-1">
        {USPs.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-2.5 p-1.5 rounded-xl hover:bg-gray-50 transition-colors flex-shrink-0 min-w-[185px] sm:min-w-0">
            <div className="p-2 sm:p-2.5 bg-red-50 rounded-xl flex-shrink-0 border border-red-100">
              {item.icon}
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900 leading-tight">
                {item.title}
              </h4>
              <p className="text-[10px] sm:text-[11px] text-gray-500 mt-0.5 leading-tight">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
