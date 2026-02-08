import React, { useState, useEffect } from 'react';

// BRAND COLORS
const BRAND_GREEN = "#9DA352"; 
const BRAND_GREY = "#9A9A9A";  
const BRAND_DARK = "#8A8F46"; 

// SAFE COMPONENTS
const Icon = ({ emoji }: { emoji: string }) => <div className="text-4xl mb-6">{emoji}</div>;
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

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-stone-100">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})}><H2Logo /></button>
          <div className="hidden lg:flex gap-10">
            {['Problem', 'Solution', 'Features', 'Roadmap'].map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors">
                {item}
              </button>
            ))}
          </div>
          <button onClick={() => scrollTo('contact')} className="px-8 py-3 rounded-full text-xs font-black uppercase text-white transition-all shadow-md active:scale-95" style={{ backgroundColor: BRAND_GREEN }}>Join Pilot</button>
        </div>
      </nav>

      {/* HERO */}
      <header className="pt-64 pb-32 px-8 text-center">
        <h1 className="text-7xl md:text-[9rem] font-black tracking-tighter leading-[0.85] mb-12">
          Safety without <br /><span style={{ color: BRAND_GREEN }}>compromise.</span>
        </h1>
        <p className="text-2xl text-slate-500 max-w-3xl mx-auto mb-16 font-medium leading-relaxed italic">
          "Proactive, privacy-first early warning and rapid response systems for dementia care."
        </p>
        <button onClick={() => scrollTo('contact')} className="px-16 py-8 rounded-full font-black text-xl text-white shadow-2xl transition-all hover:scale-105" style={{ backgroundColor: BRAND_GREEN }}>
          Apply for Pilot 2026
        </button>
      </header>

      {/* CHALLENGE SECTION */}
      <section id="problem" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl font-black mb-10 tracking-tight leading-tight text-slate-900">The Wandering <br/>Challenge</h2>
            <p className="text-2xl text-slate-600 mb-12 leading-relaxed font-medium">60% of people with dementia will experience a wandering incident. We provide the technology to prevent it.</p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100">
                <div className="text-7xl font-black mb-4" style={{ color: BRAND_GREEN }}>982k</div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">UK Citizens with dementia</p>
              </div>
              <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100">
                <div className="text-7xl font-black mb-4" style={{ color: BRAND_GREEN }}>60%</div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">Occurrence Probability</p>
              </div>
            </div>
          </div>
          <div className="rounded-[4rem] overflow-hidden shadow-2xl bg-stone-200 aspect-square">
            <img src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" alt="Healthcare AI" />
          </div>
        </div>
      </section>

      {/* H2 SYSTEM SECTION */}
      <section id="solution" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-black mb-6 tracking-tight">The H2 System</h2>
            <p className="text-xl text-slate-400 font-bold uppercase tracking-widest">Integrated Hardware & AI</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { e: "📹", t: "Cam Modules", d: "Neural-vision sensors that detect 'exit-seeking' behavior at home boundaries." },
              { e: "🧠", t: "The Hub", d: "Central edge-computing unit. Processes all data locally. Zero cloud frames." },
              { e: "⌚", t: "Smart Tracker", d: "Medical-grade wearable for precision recovery during active incidents." }
            ].map((item, i) => (
              <div key={i} className="p-16 rounded-[4rem] bg-slate-900 text-white hover:scale-105 transition-all">
                <Icon emoji={item.e} /><h3 className="text-3xl font-bold mb-6">{item.t}</h3><p className="text-slate-400 text-lg leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACY SECTION */}
      <section id="features" className="py-32 bg