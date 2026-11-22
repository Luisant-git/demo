import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  Cpu, 
  Zap, 
  HardDrive, 
  CheckCircle2, 
  ShoppingCart
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

interface ComponentOption {
  id: string;
  name: string;
  price: number;
  tdp: number;
  badge?: string;
}

export const InteractivePCBuilder: React.FC = () => {
  const { addToCart, setIsCartOpen } = useShop();

  // Scroll to top when opening PC builder
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // Part Selections
  const [selectedCpu, setSelectedCpu] = useState<ComponentOption>({
    id: 'cpu-1',
    name: 'Intel Core i9-14900K (24 Cores, Up to 6.0 GHz Turbo)',
    price: 52990,
    tdp: 253,
    badge: 'RECOMMENDED'
  });

  const [selectedGpu, setSelectedGpu] = useState<ComponentOption>({
    id: 'gpu-1',
    name: 'NVIDIA GeForce RTX 4080 Super 16GB GDDR6X',
    price: 104990,
    tdp: 320,
    badge: '4K ULTRA'
  });

  const [selectedMotherboard, setSelectedMotherboard] = useState<ComponentOption>({
    id: 'mobo-1',
    name: 'ASUS ROG Strix Z790-E Gaming WiFi II (DDR5, PCIe 5.0)',
    price: 46990,
    tdp: 60
  });

  const [selectedRam, setSelectedRam] = useState<ComponentOption>({
    id: 'ram-1',
    name: 'Corsair Dominator Titanium 32GB (2x16GB) DDR5 6000MHz RGB',
    price: 18990,
    tdp: 15
  });

  const [selectedStorage, setSelectedStorage] = useState<ComponentOption>({
    id: 'ssd-1',
    name: 'Samsung 990 PRO 2TB PCIe Gen4 NVMe M.2 SSD (7,450 MB/s)',
    price: 18499,
    tdp: 10
  });

  const [selectedCooler, setSelectedCooler] = useState<ComponentOption>({
    id: 'cooler-1',
    name: 'Corsair iCUE LINK H150i RGB 360mm AIO Liquid Cooler',
    price: 24990,
    tdp: 30
  });

  const [selectedPsu, setSelectedPsu] = useState<ComponentOption>({
    id: 'psu-1',
    name: 'Corsair RM1000x 1000W 80-Plus Gold Modular Power Supply',
    price: 17490,
    tdp: 0
  });

  const [selectedCase, setSelectedCase] = useState<ComponentOption>({
    id: 'case-1',
    name: 'Lian Li O11 Dynamic EVO RGB Panoramic Dual Chamber Cabinet',
    price: 16990,
    tdp: 0
  });

  const totalBuildPrice = 
    selectedCpu.price + 
    selectedGpu.price + 
    selectedMotherboard.price + 
    selectedRam.price + 
    selectedStorage.price + 
    selectedCooler.price + 
    selectedPsu.price + 
    selectedCase.price;

  const estimatedWattage = 
    selectedCpu.tdp + 
    selectedGpu.tdp + 
    selectedMotherboard.tdp + 
    selectedRam.tdp + 
    selectedStorage.tdp + 
    selectedCooler.tdp + 50;

  const handleAddBuildToCart = () => {
    const customRigProduct = {
      id: 'custom-pc-' + Date.now(),
      name: `Hello Computer Custom Battlestation (${selectedCpu.name.split(' ')[0]} ${selectedCpu.name.split(' ')[1]} + ${selectedGpu.name.split(' ')[2]} ${selectedGpu.name.split(' ')[3]})`,
      brand: 'Hello Computer Custom Rig',
      category: 'desktops',
      subcategory: 'Custom Workstations',
      price: totalBuildPrice,
      mrp: totalBuildPrice + 25000,
      discountPercent: 10,
      rating: 5.0,
      ratingCount: 1,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
      inStock: true,
      fastDelivery: true,
      emiStartsAt: Math.round(totalBuildPrice / 24),
      keyFeatures: [
        selectedCpu.name,
        selectedGpu.name,
        selectedRam.name,
        selectedStorage.name,
        'Assembled & 24hr stress tested by Hello Care certified engineers'
      ],
      specs: {
        'Processor': selectedCpu.name,
        'Graphics Card': selectedGpu.name,
        'Motherboard': selectedMotherboard.name,
        'RAM': selectedRam.name,
        'Storage': selectedStorage.name,
        'Cooler': selectedCooler.name,
        'Power Supply': selectedPsu.name,
        'Chassis': selectedCase.name
      },
      warranty: '3 Years Comprehensive Doorstep On-Site Hello Care Warranty'
    };

    addToCart(customRigProduct, 1);
    setIsCartOpen(true);
  };

  return (
    <div className="max-w-[1360px] mx-auto px-4 py-8">
      
      {/* Top Banner - Sleek Dark Charcoal */}
      <div className="bg-[#18181b] rounded-3xl p-6 sm:p-8 text-white border border-neutral-800 shadow-md mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-amber-400 text-gray-950 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              <Wrench className="w-3.5 h-3.5" />
              <span>Interactive PC Configurator</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Hello Computer Custom Rig Studio
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl">
              Configure components with live wattage estimation and guaranteed hardware compatibility. Delivered assembled and stress-tested in 48 hours.
            </p>
          </div>

          {/* Quick Specs / Wattage Meter */}
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-center min-w-[200px]">
            <div className="text-[11px] text-amber-300 font-bold uppercase tracking-wider flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 mr-1" /> Estimated Power Load
            </div>
            <div className="text-2xl font-black text-white mt-0.5">
              {estimatedWattage} Watts
            </div>
            <div className="text-[10px] text-emerald-400 font-semibold mt-1">
              ✓ 1000W PSU provides safe 35% headroom
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Component Selection vs Build Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Component Selectors */}
        <div className="lg:col-span-8 space-y-5">
          
          {/* 1. Processor (CPU) */}
          <div className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3.5">
              <div className="flex items-center space-x-2">
                <Cpu className="w-5 h-5 text-[#e42529]" />
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">1. Processor (CPU)</h3>
              </div>
              <span className="text-xs font-bold text-[#e42529]">Selected: ₹{selectedCpu.price.toLocaleString('en-IN')}</span>
            </div>

            <div className="space-y-2">
              {[
                { id: 'cpu-1', name: 'Intel Core i9-14900K (24 Cores, Up to 6.0 GHz Turbo)', price: 52990, tdp: 253, badge: 'RECOMMENDED' },
                { id: 'cpu-2', name: 'AMD Ryzen 9 7950X3D (16 Cores, 3D V-Cache Gaming King)', price: 58990, tdp: 162, badge: 'GAMING KING' },
                { id: 'cpu-3', name: 'Intel Core i7-14700K (20 Cores, Up to 5.6 GHz)', price: 38990, tdp: 253 }
              ].map(opt => (
                <label key={opt.id} className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  selectedCpu.id === opt.id ? 'border-[#e42529] bg-red-50/40' : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="cpu"
                      checked={selectedCpu.id === opt.id}
                      onChange={() => setSelectedCpu(opt)}
                      className="text-[#e42529]"
                    />
                    <div>
                      <span className="text-xs font-bold text-gray-900">{opt.name}</span>
                      <div className="text-[10px] text-gray-500 font-mono">TDP: {opt.tdp}W</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-gray-900">₹{opt.price.toLocaleString('en-IN')}</span>
                    {opt.badge && <span className="block text-[9px] font-bold text-emerald-700">{opt.badge}</span>}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* 2. Graphics Card (GPU) */}
          <div className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3.5">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-amber-500" />
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">2. Graphics Card (GPU)</h3>
              </div>
              <span className="text-xs font-bold text-[#e42529]">Selected: ₹{selectedGpu.price.toLocaleString('en-IN')}</span>
            </div>

            <div className="space-y-2">
              {[
                { id: 'gpu-1', name: 'ASUS ROG Strix GeForce RTX 4080 Super 16GB GDDR6X', price: 104990, tdp: 320, badge: '4K ULTRA' },
                { id: 'gpu-2', name: 'NVIDIA GeForce RTX 4090 24GB GDDR6X Flagship Edition', price: 189999, tdp: 450, badge: 'MAX PERFORMANCE' },
                { id: 'gpu-3', name: 'ZOTAC Gaming GeForce RTX 4070 Ti Super 16GB Trinity', price: 79990, tdp: 285 }
              ].map(opt => (
                <label key={opt.id} className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  selectedGpu.id === opt.id ? 'border-[#e42529] bg-red-50/40' : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="gpu"
                      checked={selectedGpu.id === opt.id}
                      onChange={() => setSelectedGpu(opt)}
                      className="text-[#e42529]"
                    />
                    <div>
                      <span className="text-xs font-bold text-gray-900">{opt.name}</span>
                      <div className="text-[10px] text-gray-500 font-mono">TDP: {opt.tdp}W</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-gray-900">₹{opt.price.toLocaleString('en-IN')}</span>
                    {opt.badge && <span className="block text-[9px] font-bold text-amber-600">{opt.badge}</span>}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* 3. Memory & Storage */}
          <div className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3.5">
              <div className="flex items-center space-x-2">
                <HardDrive className="w-5 h-5 text-gray-700" />
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">3. Memory (RAM) & Gen5 SSD</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">DDR5 RAM Kit</label>
                <select
                  value={selectedRam.id}
                  onChange={(e) => {
                    const ramOptions = [
                      { id: 'ram-1', name: 'Corsair Dominator Titanium 32GB (2x16GB) DDR5 6000MHz', price: 18990, tdp: 15 },
                      { id: 'ram-2', name: 'G.Skill Trident Z5 RGB 64GB (2x32GB) DDR5 6400MHz', price: 28990, tdp: 20 },
                    ];
                    const found = ramOptions.find(r => r.id === e.target.value);
                    if (found) setSelectedRam(found);
                  }}
                  className="w-full text-xs p-2.5 border border-gray-200 rounded-xl outline-none"
                >
                  <option value="ram-1">Corsair Dominator 32GB DDR5 (₹18,990)</option>
                  <option value="ram-2">G.Skill Trident 64GB DDR5 (₹28,990)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">NVMe SSD Storage</label>
                <select
                  value={selectedStorage.id}
                  onChange={(e) => {
                    const ssdOptions = [
                      { id: 'ssd-1', name: 'Samsung 990 PRO 2TB PCIe Gen4 NVMe (7450 MB/s)', price: 18499, tdp: 10 },
                      { id: 'ssd-2', name: 'Crucial T700 2TB PCIe Gen5 NVMe (12,400 MB/s)', price: 27990, tdp: 14 },
                    ];
                    const found = ssdOptions.find(s => s.id === e.target.value);
                    if (found) setSelectedStorage(found);
                  }}
                  className="w-full text-xs p-2.5 border border-gray-200 rounded-xl outline-none"
                >
                  <option value="ssd-1">Samsung 990 PRO 2TB (₹18,499)</option>
                  <option value="ssd-2">Crucial T700 2TB Gen5 (₹27,990)</option>
                </select>
              </div>
            </div>
          </div>

        </div>

        {/* Right: Real-time Build Summary & Checkout Card */}
        <div className="lg:col-span-4 sticky top-24 space-y-4">
          <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm space-y-4">
            
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Configuration</span>
                <h3 className="text-sm font-extrabold text-gray-900">Custom Rig Total</h3>
              </div>
              <div className="text-right">
                <div className="text-xl font-black text-gray-950">
                  ₹{totalBuildPrice.toLocaleString('en-IN')}
                </div>
                <div className="text-[10px] text-emerald-700 font-semibold">Taxes & assembly included</div>
              </div>
            </div>

            {/* Selected Breakdown List */}
            <div className="space-y-1.5 text-xs divide-y divide-gray-100">
              <div className="pt-1.5 flex justify-between">
                <span className="text-gray-400">CPU</span>
                <span className="font-medium text-gray-800 text-right truncate max-w-[180px]">{selectedCpu.name}</span>
              </div>
              <div className="pt-1.5 flex justify-between">
                <span className="text-gray-400">GPU</span>
                <span className="font-medium text-gray-800 text-right truncate max-w-[180px]">{selectedGpu.name}</span>
              </div>
              <div className="pt-1.5 flex justify-between">
                <span className="text-gray-400">Motherboard</span>
                <span className="font-medium text-gray-800 text-right truncate max-w-[180px]">{selectedMotherboard.name}</span>
              </div>
              <div className="pt-1.5 flex justify-between">
                <span className="text-gray-400">RAM</span>
                <span className="font-medium text-gray-800 text-right truncate max-w-[180px]">{selectedRam.name}</span>
              </div>
              <div className="pt-1.5 flex justify-between">
                <span className="text-gray-400">SSD</span>
                <span className="font-medium text-gray-800 text-right truncate max-w-[180px]">{selectedStorage.name}</span>
              </div>
              <div className="pt-1.5 flex justify-between">
                <span className="text-gray-400">Liquid Cooler</span>
                <span className="font-medium text-gray-800 text-right truncate max-w-[180px]">{selectedCooler.name}</span>
              </div>
              <div className="pt-1.5 flex justify-between">
                <span className="text-gray-400">Chassis</span>
                <span className="font-medium text-gray-800 text-right truncate max-w-[180px]">{selectedCase.name}</span>
              </div>
            </div>

            {/* Benefits Included */}
            <div className="bg-emerald-50/70 p-3 rounded-2xl border border-emerald-100 text-xs text-emerald-900 space-y-1">
              <div className="font-bold flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-1 text-emerald-700" />
                Complimentary Services:
              </div>
              <ul className="text-[11px] text-emerald-800 pl-5 list-disc space-y-0.5">
                <li>Professional Cable Management & Thermal Paste</li>
                <li>24-Hour Stress Benchmark Test</li>
                <li>3 Years Doorstep On-Site Hello Care Warranty</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <button
              onClick={handleAddBuildToCart}
              className="w-full bg-[#e42529] hover:bg-[#c01519] text-white font-bold text-sm py-3.5 rounded-2xl shadow-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add Custom Rig to Cart</span>
            </button>

          </div>
        </div>

      </div>

    </div>
  );
};
