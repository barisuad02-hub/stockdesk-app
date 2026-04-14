import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function HomeScreen() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9f9] font-sans">
      {/* Header */}
      <header className="pt-6 pb-4 px-6 bg-white shadow-sm flex justify-between items-center">
        <div>
          <p className="text-[10px] font-light tracking-[0.2em] text-[#735c00] uppercase">The Sovereign Terminal</p>
          <p className="text-[10px] font-bold text-[#735c00] mt-1">
            {user?.email ? `Session: ${user.email.split('@')[0]}` : 'DSEX: 5230.12 (-0.78%)'}
          </p>
        </div>
        <button 
          className="w-8 h-8 rounded-full bg-stone-100 overflow-hidden border-none cursor-pointer"
          onClick={() => navigate('/dashboard')}
        >
          <img src="https://picsum.photos/seed/avatar/100/100" className="w-full h-full object-cover" alt="Avatar" />
        </button>
      </header>

      <main className="flex-1 px-6 pt-6 overflow-y-auto pb-24">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-light tracking-tight text-[#1a1c1c]">Market Intelligence</h1>
          <button onClick={logout} className="text-[10px] font-bold text-red-600 uppercase tracking-widest bg-transparent border-none cursor-pointer">
            Logout
          </button>
        </div>
        
        {/* Search */}
        <div className="relative mb-8">
          <input 
            className="w-full bg-white border border-stone-200 px-4 py-3 rounded-lg text-sm outline-none focus:border-[#735c00]"
            placeholder="Search Ticker, Sector..."
          />
        </div>

        {/* Top Value Positions */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-sm font-bold text-[#735c00] uppercase tracking-widest">Top Value Positions</h2>
            <button className="text-[10px] font-bold text-[#d4af37] uppercase bg-transparent border-none cursor-pointer">View All</button>
          </div>
          
          <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar">
            {[
              { symbol: 'SQ', name: 'SQUARE PHARM', price: '214.20', change: '+1.45%' },
              { symbol: 'BAT', name: 'BATASHOE', price: '715.40', change: '-0.82%' },
              { symbol: 'GP', name: 'GRAMEENPHONE', price: '268.10', change: '+2.10%' }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-xl border border-stone-100 min-w-[160px] shadow-sm cursor-pointer hover:border-[#735c00] transition-colors"
                onClick={() => navigate('/dashboard')}
              >
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded bg-stone-50 flex items-center justify-center font-bold text-[#735c00] text-xs">
                    {item.symbol}
                  </div>
                  <div className="ml-2">
                    <p className="font-bold text-[10px] m-0">{item.name}</p>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-lg font-bold m-0">{item.price}</p>
                  <p className={`text-[10px] font-bold m-0 ${item.change.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
                    {item.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner */}
        <div className="bg-[#1a1c1c] rounded-2xl p-6 mb-8 relative overflow-hidden text-white">
          <p className="text-[#d4af37] text-lg font-light mb-1">Guruji Kohen</p>
          <p className="text-md font-medium mb-4">Learn Investing from the Basics</p>
          <button className="bg-[#735c00] px-4 py-2 rounded text-white text-[10px] font-bold uppercase tracking-widest border-none cursor-pointer">
            Enroll Now
          </button>
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-100 flex justify-around py-4">
        <button className="flex flex-col items-center bg-transparent border-none text-[#735c00] text-[10px] font-bold uppercase cursor-pointer">Home</button>
        <button className="flex flex-col items-center bg-transparent border-none text-stone-400 text-[10px] font-bold uppercase cursor-pointer">News</button>
        <button className="flex flex-col items-center bg-transparent border-none text-stone-400 text-[10px] font-bold uppercase cursor-pointer">Analysis</button>
        <button className="flex flex-col items-center bg-transparent border-none text-stone-400 text-[10px] font-bold uppercase cursor-pointer">Guru</button>
      </nav>
    </div>
  );
}
