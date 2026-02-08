import React, { useState, useEffect, useCallback } from 'react';

// Brand Colors
const BRAND_GREEN = "#9DA352"; 
const BRAND_GREY = "#9A9A9A";  

// Custom Lightweight Icons to prevent "White Screen"
const Icon = ({ emoji }: { emoji: string }) => <span className="text-4xl">{emoji}</span>;
const H2Logo = () => (
  <div className="flex items-center font-black text-2xl tracking-tighter uppercase">
    <span style={{ color: BRAND_GREEN }}>H2</span>
    <span className="ml-2" style={{ color: BRAND_GREY }}>AI LAB</span>
  </div>
);

const NAV_ITEMS = [
  { label: 'Problem', href: '#problem' },
  { label: 'H2 System', href: '#solution' },
  { label: 'Features', href: '#features' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Pilot 2026', href: '#roadmap' },
];

const ROADMAP = [
  { date: '2024 Q3', milestone: 'Foundational Research', description: 'Establishing core privacy-first AI protocols.', status: 'completed' },
  { date: '2025 Q1', milestone: 'System Development', description: 'Building the H2 processing engine.', status: 'ongoing' },
  { date: '2026 Q2', milestone: 'UK Pilot Program', description: 'Deploying secure household nodes.', status: 'upcoming' },
];

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.startsWith('#') ? href.slice(1) : href;
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})}><H2Logo /></button>
          <div className="hidden lg:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <button key={item.href} onClick={() => scrollTo(item.href)} className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900">
                {item.label}
              </button>
            ))}
          </div>
          <button onClick={() => scrollTo('#contact')} className="px-8 py-3 rounded-full text-xs font-black uppercase text-white transition-all" style={{ backgroundColor: BRAND_GREEN }}>Join Pilot</button>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-64 pb-32 px-8 text-center">
        <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] mb-12">
          Safety without <br /><span style={{ color: BRAND_GREEN }}>compromise.</span>
        </h1>
        <p className="text-2xl text-slate-500 max-w-3xl mx-auto mb-16 font-medium">H2 AI Lab provides proactive, privacy-first early warning and rapid response for dementia wandering.</p>
        <button onClick={() => scrollTo('#contact')} className="px-16 py-8 rounded-full font-black text-xl text-white shadow-2xl transition-transform hover:scale-105" style={{ backgroundColor: BRAND_GREEN }}>Apply for Pilot 2026</button>
      </header>

      {/* Original Problem Section */}
      <section id="problem" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl font-black mb-10 tracking-tight">The Wandering Challenge</h2>
            <p className="text-2xl text-slate-600 mb-12">60% of people with dementia will experience a wandering incident. Current solutions are reactive—notifying you after the fact.</p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-10 bg-white rounded-3xl shadow-sm border border-slate-100">
                <div className="text-6xl font-black mb-2" style={{ color: BRAND_GREEN }}>982k</div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">UK Citizens</p>
              </div>
              <div className="p-10 bg-white rounded-3xl shadow-sm border border-slate-100">
                <div className="text-6xl font-black mb-2" style={{ color: BRAND_GREEN }}>60%</div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">Impact Rate</p>
              </div>
            </div>
          </div>
          <div className="rounded-[4rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Original H2 System Section */}
      <section id="solution" className="py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-6xl font-black mb-20">The H2 System</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-12 rounded-[3rem] border border-white/10">
              <Icon emoji="📷" /><h3 className="text-2xl font-bold mt-6 mb-4">Cam Modules</h3><p className="text-slate-400">Detects intent at exits using local AI.</p>
            </div>
            <div className="p-12 rounded-[3rem] border border-white/10" style={{ borderColor: BRAND_GREEN }}>
              <Icon emoji="🧠" /><h3 className="text-2xl font-bold mt-6 mb-4">AI Hub</h3><p className="text-slate-400">The privacy-first local brain. Zero cloud frames.</p>
            </div>
            <div className="p-12 rounded-[3rem] border border-white/10">
              <Icon emoji="📍" /><h3 className="text-2xl font-bold mt-6 mb-4">Smart Tracker</h3><p className="text-slate-400">GPS recovery activated only during incidents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-6xl font-black mb-20 text-center">Pilot 2026 Journey</h2>
          <div className="space-y-12">
            {ROADMAP.map((item, i) => (
              <div key={i} className="flex gap-8 items-start p-10 bg-slate-50 rounded-[3rem]">
                <div className="px-6 py-2 rounded-full text-white font-bold" style={{ backgroundColor: item.status === 'completed' ? '#10b981' : BRAND_GREEN }}>{item.date}</div>
                <div>
                  <h3 className="text-2xl font-black mb-2">{item.milestone}</h3>
                  <p className="text-slate-500 font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="contact" className="py-32 px-8">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[5rem] p-20 text-center text-white">
          <h2 className="text-6xl font-black mb-8">Join the Waitlist</h2>
          <p className="text-slate-400 text-2xl mb-12">Secure early access to the 2026 UK Pilot Program.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-grow px-8 py-5 bg-white/5 rounded-2xl border border-white/10 text-white" />
            <button className="px-12 py-5 rounded-2xl font-bold text-lg transition-transform hover:scale-105 text-white" style={{ backgroundColor: BRAND_GREEN }}>Apply Now</button>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-slate-100">
        <H2Logo /><p className="mt-8 text-xs font-black text-slate-300 tracking-widest uppercase">© 2026 H2 AI LAB. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;