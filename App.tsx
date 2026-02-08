import React, { useState, useEffect } from 'react';

// EXACT COLORS FROM YOUR LOGO
const BRAND_GREEN = "#9DA352"; 
const BRAND_GREY = "#9A9A9A";  

const H2Logo = () => (
  <div className="flex items-center font-black text-2xl tracking-tighter uppercase">
    <span style={{ color: BRAND_GREEN }}>H2</span>
    <span className="ml-2" style={{ color: BRAND_GREY }}>AI LAB</span>
  </div>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 shadow-sm py-4' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <H2Logo />
          <button className="px-8 py-3 rounded-full text-xs font-black uppercase text-white shadow-md" style={{ backgroundColor: BRAND_GREEN }}>
            Join Pilot
          </button>
        </div>
      </nav>

      <header className="pt-64 pb-32 px-8 text-center">
        <h1 className="text-7xl md:text-[8rem] font-black tracking-tighter leading-[0.85] mb-12">
          Safety without <br />
          <span style={{ color: BRAND_GREEN }}>compromise.</span>
        </h1>
        <p className="text-2xl text-slate-500 max-w-3xl mx-auto mb-16 font-medium">
          Proactive, privacy-first early warning and rapid response systems for dementia care.
        </p>
        <button className="px-16 py-8 rounded-full font-black text-xl text-white shadow-2xl transition-transform hover:scale-105" style={{ backgroundColor: BRAND_GREEN }}>
          Apply for Pilot 2026
        </button>
      </header>

      <section className="py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-12 text-center">
          <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100">
            <div className="text-7xl font-black mb-4" style={{ color: BRAND_GREEN }}>982k</div>
            <p className="font-bold text-slate-400 uppercase tracking-widest">UK Citizens</p>
          </div>
          <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100">
            <div className="text-7xl font-black mb-4" style={{ color: BRAND_GREEN }}>60%</div>
            <p className="font-bold text-slate-400 uppercase tracking-widest">Impact Rate</p>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-slate-100">
        <H2Logo />
        <p className="mt-8 text-xs font-black text-slate-300 tracking-[0.3em]">© 2026 H2 AI LAB. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default App;