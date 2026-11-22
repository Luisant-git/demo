import React, { useState } from 'react';
import { X, MapPin, AlertCircle, Zap } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const PincodeModal: React.FC = () => {
  // Choose Delivery Location Modal (Commented Out as requested)
  return null;

  /*
  const { pincodeInfo, setPincode, isPincodeModalOpen, setIsPincodeModalOpen } = useShop();
  const [inputPin, setInputPin] = useState(pincodeInfo.pincode);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isPincodeModalOpen) return null;

  const popularPincodes = [
    { pin: '641012', city: 'Coimbatore', state: 'Tamil Nadu', express: true },
    { pin: '600001', city: 'Chennai', state: 'Tamil Nadu', express: true },
    { pin: '560001', city: 'Bengaluru', state: 'Karnataka', express: true },
    { pin: '400001', city: 'Mumbai', state: 'Maharashtra', express: true },
    { pin: '110001', city: 'New Delhi', state: 'Delhi NCR', express: true },
    { pin: '500001', city: 'Hyderabad', state: 'Telangana', express: true },
    { pin: '411001', city: 'Pune', state: 'Maharashtra', express: true },
    { pin: '700001', city: 'Kolkata', state: 'West Bengal', express: false },
  ];

  const handleApply = (pin: string) => {
    if (!/^\d{6}$/.test(pin)) {
      setErrorMsg('Please enter a valid 6-digit Indian PIN code.');
      return;
    }
    setErrorMsg('');
    setPincode(pin);
    setIsPincodeModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 bg-[#e42529] text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-amber-300" />
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Choose Delivery Location
            </h3>
          </div>
          <button
            onClick={() => setIsPincodeModalOpen(false)}
            className="p-1 rounded-full text-white/80 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <p className="text-xs text-gray-500">
            Enter your delivery pincode to see actual stock availability, express shipping eligibility, and installation options.
          </p>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleApply(inputPin);
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              maxLength={6}
              value={inputPin}
              onChange={(e) => setInputPin(e.target.value.replace(/\D/g, ''))}
              placeholder="Enter 6-digit Pincode"
              className="flex-1 px-3.5 py-2 border border-gray-200 rounded-xl text-sm font-mono tracking-widest outline-none focus:border-[#e42529]"
            />
            <button
              type="submit"
              className="bg-[#e42529] hover:bg-[#c01519] text-white text-xs font-bold px-5 py-2 rounded-xl transition-colors cursor-pointer"
            >
              Verify
            </button>
          </form>

          {errorMsg && (
            <p className="text-xs text-red-600 flex items-center space-x-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errorMsg}</span>
            </p>
          )}

          <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs">
            <div className="flex items-center justify-between text-gray-900 font-bold">
              <span>Current PIN: {pincodeInfo.pincode} ({pincodeInfo.city})</span>
              {pincodeInfo.isExpressAvailable && (
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full text-[10px] font-black flex items-center border border-emerald-200">
                  <Zap className="w-2.5 h-2.5 mr-0.5 fill-emerald-700" /> Express 3-Hr Eligible
                </span>
              )}
            </div>
            <p className="text-gray-500 text-[11px] mt-1">
              Standard doorstep courier arrives within {pincodeInfo.standardDays} business day(s).
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
              Popular Tech Hubs:
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {popularPincodes.map((item) => (
                <button
                  key={item.pin}
                  onClick={() => handleApply(item.pin)}
                  className={`p-2 rounded-xl border text-left transition-all cursor-pointer ${
                    pincodeInfo.pincode === item.pin 
                      ? 'border-[#e42529] bg-red-50/50 font-bold text-[#e42529]' 
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <div className="font-semibold">{item.city}</div>
                  <div className="text-[10px] text-gray-400 font-mono">{item.pin} • {item.express ? '⚡ 3-Hour' : 'Standard'}</div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
  */
};
