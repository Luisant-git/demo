import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  ShieldCheck, 
  Tag, 
  ShoppingBag
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CartDrawer: React.FC = () => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    updateCartQty, 
    removeFromCart, 
    cartSubtotal, 
    cartTotal, 
    appliedCoupon, 
    applyCouponCode, 
    removeCoupon,
    setIsCheckoutOpen 
  } = useShop();

  const [couponInput, setCouponInput] = useState('');
  const [couponFeedback, setCouponFeedback] = useState<{ error?: string; success?: string } | null>(null);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCouponCode(couponInput);
    if (res.success) {
      setCouponFeedback({ success: res.message });
      setCouponInput('');
    } else {
      setCouponFeedback({ error: res.message });
    }
  };

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div 
        className="absolute inset-0"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header - Brand Red */}
          <div className="p-4 bg-[#e42529] text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-amber-300" />
              <h2 className="text-sm font-bold uppercase tracking-wider">
                Shopping Cart ({cart.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer shadow-xs border border-white/20"
              title="Close Cart"
              aria-label="Close Shopping Cart"
            >
              <X className="w-5 h-5 stroke-[2.75]" />
            </button>
          </div>

          {/* Cart Free Delivery Milestone */}
          <div className="bg-emerald-50 px-4 py-2 border-b border-emerald-100 text-xs flex items-center justify-between text-emerald-900 font-medium">
            <span>🎉 You qualify for <strong>FREE Doorstep Delivery</strong></span>
            <span className="text-emerald-700 font-bold">SAVED ₹499</span>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 divide-y divide-gray-100">
            {cart.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto" />
                <h3 className="text-sm font-bold text-gray-700">Your Cart is Empty</h3>
                <p className="text-xs text-gray-400 max-w-xs mx-auto">
                  Explore our authentic laptops, custom rigs, and peripherals.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 bg-[#e42529] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-sm cursor-pointer"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.product.id} className="pt-3 flex space-x-3 items-start">
                  <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-xl border border-gray-200 p-1.5 flex-shrink-0 bg-white flex items-center justify-center shadow-2xs">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">
                      {item.product.brand}
                    </span>
                    <h4 className="text-xs font-semibold text-gray-900 line-clamp-2 leading-snug">
                      {item.product.name}
                    </h4>

                    <div className="flex items-baseline space-x-2 mt-1">
                      <span className="text-xs font-black text-gray-950">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-gray-400 line-through">
                        ₹{(item.product.mrp * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-2.5">
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white">
                        <button
                          onClick={() => updateCartQty(item.product.id, item.quantity - 1)}
                          className="px-2 py-0.5 bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-0.5 text-xs font-bold text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQty(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-red-600 text-xs flex items-center space-x-0.5 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="p-4 bg-gray-50/90 border-t border-gray-100 space-y-3">
              
              {/* Coupon Applicator */}
              <div>
                {appliedCoupon ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2.5 flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-1.5 text-emerald-800 font-bold">
                      <Tag className="w-3.5 h-3.5" />
                      <span>{appliedCoupon.code}: -₹{appliedCoupon.discountAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-red-600 hover:underline text-[11px] font-bold cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="Coupon Code (e.g. HELLOFIRST)"
                      className="flex-1 px-3 py-1.5 text-xs border border-gray-200 rounded-xl uppercase outline-none focus:border-[#e42529]"
                    />
                    <button
                      type="submit"
                      className="bg-gray-950 hover:bg-black text-white text-xs font-bold px-3.5 py-1.5 rounded-xl transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </form>
                )}

                {couponFeedback?.error && (
                  <p className="text-[11px] text-red-600 mt-1">{couponFeedback.error}</p>
                )}
                {couponFeedback?.success && (
                  <p className="text-[11px] text-emerald-700 mt-1">{couponFeedback.success}</p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-gray-500 pt-2 border-t border-gray-200/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-800">₹{cartSubtotal.toLocaleString('en-IN')}</span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Coupon Savings</span>
                    <span>-₹{appliedCoupon.discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-emerald-700 font-bold uppercase">FREE</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200 text-sm font-black text-gray-900">
                  <span>Total Amount</span>
                  <span className="text-[#e42529] text-base">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleProceedCheckout}
                className="w-full bg-[#e42529] hover:bg-[#c01519] text-white font-bold text-sm py-3 rounded-xl shadow transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center space-x-1.5 text-[10px] text-gray-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Secure Checkout with 256-Bit SSL</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
