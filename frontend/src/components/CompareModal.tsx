import React from 'react';
import { X, ArrowLeftRight, Trash2, ShoppingCart, Star } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CompareModal: React.FC = () => {
  const { 
    compareList, 
    isCompareOpen, 
    setIsCompareOpen, 
    removeFromCompare, 
    clearCompare, 
    addToCart 
  } = useShop();

  if (!isCompareOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl overflow-hidden border border-gray-100 relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header - Brand Red */}
        <div className="px-6 py-4 bg-[#e42529] text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ArrowLeftRight className="w-5 h-5 text-amber-300" />
            <h2 className="text-sm font-bold uppercase tracking-wider">
              Product Comparison ({compareList.length}/4)
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            {compareList.length > 0 && (
              <button
                onClick={clearCompare}
                className="text-xs text-amber-300 hover:text-white underline font-semibold cursor-pointer"
              >
                Clear All
              </button>
            )}
            <button
              onClick={() => setIsCompareOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="p-6 overflow-x-auto flex-1">
          {compareList.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <ArrowLeftRight className="w-12 h-12 text-gray-300 mx-auto" />
              <h3 className="text-sm font-bold text-gray-700">No Products Selected</h3>
              <p className="text-xs text-gray-400 max-w-xs mx-auto">
                Select the "Compare" checkbox on product cards to inspect specs side-by-side.
              </p>
              <button
                onClick={() => setIsCompareOpen(false)}
                className="mt-2 bg-[#e42529] text-white text-xs font-bold px-5 py-2.5 rounded-xl cursor-pointer"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="p-3 text-left bg-gray-50 font-bold text-gray-500 w-40 rounded-l-xl">
                    Specifications
                  </th>
                  {compareList.map((product) => (
                    <th key={product.id} className="p-3 bg-white text-center min-w-[200px] align-top relative border-b border-gray-100">
                      <button
                        onClick={() => removeFromCompare(product.id)}
                        className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-600 rounded-full cursor-pointer"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-contain mx-auto mb-2 bg-white p-1 rounded-xl border border-gray-100"
                      />

                      <div className="text-[10px] font-bold text-gray-400 uppercase">{product.brand}</div>
                      <div className="font-semibold text-gray-900 line-clamp-2 mt-1">{product.name}</div>
                      
                      <div className="mt-2 text-sm font-black text-gray-950">
                        ₹{product.price.toLocaleString('en-IN')}
                      </div>

                      <button
                        onClick={() => addToCart(product, 1)}
                        className="mt-2 w-full bg-[#111827] hover:bg-[#1f2937] text-white py-1.5 px-2 rounded-xl font-bold flex items-center justify-center space-x-1 cursor-pointer shadow-xs"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                
                <tr>
                  <td className="p-3 font-semibold text-gray-500 bg-gray-50/50">Rating</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-3 text-center">
                      <div className="inline-flex items-center space-x-1 bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded font-bold border border-emerald-200">
                        <span>{p.rating}</span>
                        <Star className="w-3 h-3 fill-emerald-600 text-emerald-600" />
                      </div>
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-semibold text-gray-500 bg-gray-50/50">Category</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-3 text-center font-medium text-gray-700">
                      {p.subcategory}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-semibold text-gray-500 bg-gray-50/50">Discount</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-3 text-center font-bold text-emerald-700">
                      {p.discountPercent}% OFF (Save ₹{(p.mrp - p.price).toLocaleString('en-IN')})
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-semibold text-gray-500 bg-gray-50/50">Warranty</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-3 text-center text-gray-600">
                      {p.warranty}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-semibold text-gray-500 bg-gray-50/50 align-top">Highlights</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-3 text-left align-top">
                      <ul className="space-y-1 list-disc list-inside text-gray-600 text-[11px]">
                        {p.keyFeatures.map((feat, idx) => (
                          <li key={idx}>{feat}</li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

              </tbody>
            </table>
          )}
        </div>

      </div>
    </div>
  );
};
