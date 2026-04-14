import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DashboardScreen() {
  const navigate = useNavigate();
  const symbol = 'SQURPHRMA';

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9f9] font-sans">
      {/* Header */}
      <header className="pt-6 pb-4 px-6 bg-white shadow-sm flex items-center">
        <button onClick={() => navigate(-1)} className="mr-4 bg-transparent border-none text-[#735c00] text-xl cursor-pointer">
          ←
        </button>
        <div>
          <p className="text-[10px] font-light tracking-[0.2em] text-[#735c00] uppercase">Analysis</p>
          <p className="text-[10px] font-bold text-[#735c00] mt-1">{symbol}</p>
        </div>
      </header>

      <main className="flex-1 px-6 pt-6">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-light tracking-tight text-[#1a1c1c]">{symbol}</h1>
            <p className="text-[#4d4635] text-[10px] uppercase tracking-widest mt-1">Square Pharmaceuticals PLC</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-light text-[#1a1c1c] m-0">৳ 218.40</p>
            <p className="text-emerald-600 font-bold text-xs m-0">+2.45 (1.13%)</p>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="bg-white rounded-xl h-64 border border-stone-100 mb-8 flex flex-col items-center justify-center">
          <p className="text-stone-300 text-[10px] uppercase tracking-widest">Technical Canvas</p>
          <div className="flex items-end gap-1 h-32 mt-4">
             {[40, 70, 45, 90, 65, 80, 30, 50].map((h, i) => (
               <div key={i} className="w-4 bg-stone-100 rounded-t-sm" style={{ height: `${h}%` }}></div>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl border border-stone-100">
            <p className="text-[10px] text-stone-400 uppercase font-bold mb-1">Volume</p>
            <p className="text-lg font-light text-[#1a1c1c]">1.24M</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-stone-100">
            <p className="text-[10px] text-stone-400 uppercase font-bold mb-1">P/E Ratio</p>
            <p className="text-lg font-light text-[#1a1c1c]">12.4x</p>
          </div>
        </div>
      </main>
    </div>
  );
}
