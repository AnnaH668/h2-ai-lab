import React, { useState, useEffect } from 'react';

// BRAND COLORS - Hardcoded to ensure no overrides
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

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-stone-100">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-1 z-[100] transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})}><H2Logo /></button>
          <div className="hidden lg:flex gap-10">
            {['Problem', 'H2 System', 'Features', 'Privacy', 'Pilot 2026'].map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))} className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors">
                {item}
              </button>
            ))}
          </div>
          <button onClick={() => scrollTo('contact')} className="px-8 py-3 rounded-full text-xs font-black uppercase text-white shadow-md hover:scale-105 transition-transform" style={{ backgroundColor: BRAND_GREEN }}>
            Join Pilot
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="pt-64 pb-32 px-8 text-center">
        <h1 className="text-7xl md:text-[9.5rem] font-black tracking-tighter leading-[0.85] mb-12">
          Safety without <br /><span style={{ color: BRAND_GREEN }}>compromise.</span>
        </h1>
        <p className="text-2xl text-slate-500 max-w-3xl mx-auto mb-16 font-medium leading-relaxed italic">
          Proactive, privacy-first early warning and rapid response systems for dementia care.
        </p>
        <button onClick={() => scrollTo('contact')} className="px-16 py-8 rounded-full font-black text-xl text-white shadow-2xl transition-all hover:scale-105 active:scale-95" style={{ backgroundColor: BRAND_GREEN }}>
          Apply for Pilot 2026
        </button>
      </header>

      {/* THE CHALLENGE SECTION */}
      <section id="problem" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl font-black mb-10 tracking-tight leading-tight">The Wandering Challenge</h2>
            <p className="text-2xl text-slate-600 mb-12 leading-relaxed">60% of people with dementia will experience a wandering incident. Current solutions are reactive. We are proactive.</p>
            <div className="grid grid-cols-2 gap-8 text-center">
              <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100">
                <div className="text-7xl font-black mb-4" style={{ color: BRAND_GREEN }}>982k</div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">UK Citizens</p>
              </div>
              <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100">
                <div className="text-7xl font-black mb-4" style={{ color: BRAND_GREEN }}>60%</div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">Impact Rate</p>
              </div>
            </div>
          </div>
          <div className="rounded-[4rem] overflow-hidden shadow-2xl aspect-square">
            <img src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000" />
          </div>
        </div>
      </section>

      {/* THE H2 SYSTEM SECTION */}
      <section id="h2-system" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-6xl font-black mb-24 tracking-tight">The H2 System</h2>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            {[
              { e: "📹", t: "Cam Modules", d: "Neural-vision sensors that detect 'exit-seeking' behavior at the source." },
              { e: "🧠", t: "The Hub", d: "A privacy-first local brain. Processes all data locally. Zero cloud frames." },
              { e: "⌚", t: "Smart Tracker", d: "Encrypted GPS recovery activated only during verified emergency events." }
            ].map((item, i) => (
              <div key={i} className="p-16 rounded-[4rem] bg-slate-900 text-white group hover:scale-105 transition-all">
                <div className="text-5xl mb-10">{item.e}</div>
                <h3 className="text-3xl font-bold mb-6">{item.t}</h3>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILOT 2026 SECTION */}
      <section id="pilot-2026" className="py-32 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-6xl font-black mb-24 tracking-tight">Pilot 2026 Journey</h2>
          <div className="space-y-6 text-left">
            {[
              { q: "2024 Q3", m: "Research Phase", d: "Developing intent-detection AI models.", c: true },
              { q: "2025 Q2", m: "Alpha Testing", d: "Local processing stress tests.", c: false },
              { q: "2026 Q1", m: "UK Pilot Program", d: "Deployment across the first 100 homes.", c: false }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-center p-10 bg-white rounded-[3rem] shadow-sm border border-slate-100">
                <div className="px-8 py-3 rounded-full text-white font-black text-sm" style={{ backgroundColor: item.c ? "#10b981" : BRAND_GREEN }}>{item.q}</div>
                <div><h3 className="text-2xl font-black mb-2">{item.m}</h3><p className="text-slate-500 font-medium leading-relaxed">{item.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAITLIST SECTION */}
      <section id="contact" className="py-32 px-8">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[5rem] p-24 text-center text-white shadow-2xl">
          <h2 className="text-7xl font-black mb-10 tracking-tighter">Join the Waitlist</h2>
          <p className="text-2xl text-slate-400 mb-16 max-w-xl mx-auto">Secure your place in the future of dementia care.</p>
          <div className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto">
            <input type="email" placeholder="Email address" className="flex-grow px-10 py-6 bg-white/5 rounded-3xl border border-white/10 text-xl focus:outline-none focus:border-stone-500" />
            <button className="px-16 py-6 rounded-3xl font-black text-xl hover:opacity-90 transition-all text-white shadow-lg shadow-green-900/20" style={{ backgroundColor: BRAND_GREEN }}>Apply Now</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center border-t border-slate-100">
        <H2Logo />
        <p className="mt-8 text-xs font-black text-slate-300 tracking-[0.6em] uppercase">© 2026 H2 AI LAB. London, United Kingdom.</p>
      </footer>
    </div>
  );
};

export default App;