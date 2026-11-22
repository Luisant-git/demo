import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useShop } from '../context/ShopContext';

export const CheckoutModal: React.FC = () => {
  const { 
    isCheckoutOpen, 
    setIsCheckoutOpen, 
    cart, 
    cartTotal, 
    cartSubtotal, 
    appliedCoupon, 
    pincodeInfo,
    clearCart 
  } = useShop();

  const [step, setStep] = useState<'details' | 'shipping' | 'payment' | 'success'>('details');
  const [formData, setFormData] = useState({
    fullName: 'Rahul Sharma',
    phone: '+91 98765 43210',
    email: 'rahul.sharma@example.com',
    address: 'Flat 402, Sunshine Towers, Link Road',
    city: pincodeInfo.city,
    pincode: pincodeInfo.pincode,
    deliverySpeed: 'express',
    paymentMethod: 'upi'
  });

  const [orderId, setOrderId] = useState('');

  if (!isCheckoutOpen) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handlePlaceOrder = () => {
    const generatedId = 'HC-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setStep('success');
    triggerConfetti();
    clearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-gray-100 relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header - Brand Red */}
        <div className="p-4 bg-[#e42529] text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-amber-300" />
            <h3 className="text-sm font-bold uppercase tracking-wider">
              {step === 'success' ? 'Order Confirmed' : 'Secure Checkout • Hello Computer'}
            </h3>
          </div>
          {step !== 'success' && (
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Steps Breadcrumb */}
        {step !== 'success' && (
          <div className="bg-gray-50 px-6 py-2.5 flex items-center justify-between text-xs font-semibold text-gray-400 border-b border-gray-100">
            <span className={step === 'details' ? 'text-[#e42529] font-bold' : ''}>1. Address</span>
            <span>→</span>
            <span className={step === 'shipping' ? 'text-[#e42529] font-bold' : ''}>2. Delivery Mode</span>
            <span>→</span>
            <span className={step === 'payment' ? 'text-[#e42529] font-bold' : ''}>3. Payment</span>
          </div>
        )}

        {/* Body Content */}
        <div className="p-6 overflow-y-auto flex-1">
          
          {/* Step 1: Address Details */}
          {step === 'details' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                Delivery Address & Contact
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1">Full Name</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl outline-none focus:border-[#e42529]"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1">Mobile Phone (for updates)</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl outline-none focus:border-[#e42529]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-medium text-gray-600 block mb-1">Street Address</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl outline-none focus:border-[#e42529]"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl outline-none focus:border-[#e42529]"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1">Pincode</label>
                  <input
                    type="text"
                    value={formData.pincode}
                    readOnly
                    className="w-full px-3 py-2 text-xs border border-gray-100 bg-gray-50 rounded-xl text-gray-500 font-mono"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setStep('shipping')}
                  className="bg-[#e42529] hover:bg-[#c01519] text-white text-xs font-bold px-6 py-2.5 rounded-xl flex items-center space-x-1.5 cursor-pointer shadow-sm"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Shipping Options */}
          {step === 'shipping' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                Select Delivery Mode
              </h4>

              <div className="space-y-3">
                <label className={`p-4 rounded-2xl border flex items-start space-x-3 cursor-pointer transition-all ${
                  formData.deliverySpeed === 'express' ? 'border-[#e42529] bg-red-50/40' : 'border-gray-200'
                }`}>
                  <input
                    type="radio"
                    name="speed"
                    checked={formData.deliverySpeed === 'express'}
                    onChange={() => setFormData({ ...formData, deliverySpeed: 'express' })}
                    className="mt-1 text-[#e42529]"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-sm text-gray-900">⚡ Express Delivery (Within 3 Hours)</span>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">FREE</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Dispatched immediately from nearest Hello Computer store in {pincodeInfo.city}.
                    </p>
                  </div>
                </label>

                <label className={`p-4 rounded-2xl border flex items-start space-x-3 cursor-pointer transition-all ${
                  formData.deliverySpeed === 'standard' ? 'border-[#e42529] bg-red-50/40' : 'border-gray-200'
                }`}>
                  <input
                    type="radio"
                    name="speed"
                    checked={formData.deliverySpeed === 'standard'}
                    onChange={() => setFormData({ ...formData, deliverySpeed: 'standard' })}
                    className="mt-1 text-[#e42529]"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-sm text-gray-900">Standard Scheduled Delivery (Tomorrow)</span>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">FREE</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Delivered via dedicated Hello Care tech transport.
                    </p>
                  </div>
                </label>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setStep('details')}
                  className="text-xs text-gray-400 hover:text-gray-800 underline font-semibold cursor-pointer"
                >
                  ← Back to Address
                </button>
                <button
                  onClick={() => setStep('payment')}
                  className="bg-[#e42529] hover:bg-[#c01519] text-white text-xs font-bold px-6 py-2.5 rounded-xl flex items-center space-x-1.5 cursor-pointer shadow-sm"
                >
                  <span>Continue to Payment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Payment Options */}
          {step === 'payment' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                Select Payment Mode
              </h4>

              <div className="space-y-2">
                {[
                  { 
                    id: 'upi', 
                    name: 'Instant UPI (Google Pay, PhonePe, Paytm, BHIM)', 
                    tag: 'Extra ₹500 Discount',
                    icons: ['/payments/upi.svg']
                  },
                  { 
                    id: 'card', 
                    name: 'Credit / Debit Cards (Visa, Mastercard, RuPay)', 
                    tag: 'Instant Bank Cashback',
                    icons: ['/payments/visa.svg', '/payments/mastercard.svg', '/payments/rupay.svg']
                  },
                  { 
                    id: 'netbanking', 
                    name: 'NetBanking (All Major Indian Banks)', 
                    tag: 'Secure 256-bit',
                    icons: ['/payments/netbanking.svg']
                  },
                  { 
                    id: 'emi', 
                    name: 'No-Cost EMI (Up to 12 Months)', 
                    tag: 'Starting ₹2,450/mo' 
                  },
                  { 
                    id: 'cod', 
                    name: 'Cash on Delivery (Pay upon delivery)', 
                    tag: 'Available' 
                  }
                ].map((pay) => (
                  <label key={pay.id} className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    formData.paymentMethod === pay.id ? 'border-[#e42529] bg-red-50/40 shadow-xs' : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={formData.paymentMethod === pay.id}
                        onChange={() => setFormData({ ...formData, paymentMethod: pay.id })}
                        className="text-[#e42529]"
                      />
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                        <span className="text-xs font-semibold text-gray-900">{pay.name}</span>
                        {pay.icons && (
                          <div className="flex items-center space-x-1 mt-1 sm:mt-0">
                            {pay.icons.map((ic, i) => (
                              <span key={i} className="bg-white border border-gray-200 rounded-md px-1.5 py-0.5 inline-flex items-center justify-center shadow-2xs">
                                <img src={ic} alt="" className="h-3.5 sm:h-4 w-auto object-contain" />
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 flex-shrink-0 ml-2">
                      {pay.tag}
                    </span>
                  </label>
                ))}
              </div>

              {/* Order Amount Recap */}
              <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-100 text-xs space-y-1">
                <div className="flex justify-between text-gray-500">
                  <span>Cart Items ({cart.length})</span>
                  <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Coupon ({appliedCoupon.code})</span>
                    <span>-₹{appliedCoupon.discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-black text-gray-900 pt-1 border-t border-gray-200">
                  <span>Payable Total</span>
                  <span className="text-gray-950">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  onClick={() => setStep('shipping')}
                  className="text-xs text-gray-400 hover:text-gray-800 underline font-semibold cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  onClick={handlePlaceOrder}
                  className="bg-[#e42529] hover:bg-[#c01519] text-white text-xs sm:text-sm font-bold px-8 py-3 rounded-xl shadow transition-all cursor-pointer flex items-center space-x-2"
                >
                  <span>Pay ₹{cartTotal.toLocaleString('en-IN')}</span>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                </button>
              </div>
            </div>
          )}

          {/* Success Step */}
          {step === 'success' && (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Order Confirmed
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Order ID: <strong className="text-gray-800 font-mono text-sm">{orderId}</strong>
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 max-w-md mx-auto text-xs text-left space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Recipient:</span>
                  <span className="font-semibold text-gray-800">{formData.fullName} ({formData.phone})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Address:</span>
                  <span className="font-semibold text-gray-800">{formData.address}, {formData.city} - {formData.pincode}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2 font-bold text-gray-900">
                  <span>Total Paid:</span>
                  <span className="text-gray-950 text-sm">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={() => setIsCheckoutOpen(false)}
                className="bg-[#e42529] hover:bg-[#c01519] text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
