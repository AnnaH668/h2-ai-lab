import React, { useState, useEffect } from 'react';

// Brand Identity Colors extracted from your logo
const BRAND_GREEN = "#9DA352"; 
const BRAND_GREY = "#9A9A9A";  
const BRAND_DARK = "#8A8F46"; // Darker shade for hover states

// Lightweight Logo Component
const H2Logo = () => (
  <div className="flex items-center font-black text-2xl tracking-tighter uppercase">
    <span style={{ color: BRAND_GREEN }}>H2</span>
    <span className="ml-2" style={{ color: BRAND_GREY }}>AI LAB</span>
  </div>
);

// Navigation Data
const NAV_ITEMS = [
  { label: 'The Challenge', href: '#problem' },
  { label: 'Technology', href: '#tech' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Pilot 2026', href: '#roadmap' },
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
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-stone-200">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-10'
      }`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <button onClick={() => scrollTo('#')} className="hover:opacity-80 transition-opacity">
            <H2Logo />
          </button>
          
          <div className="hidden md:flex gap-10">
            {NAV_ITEMS.map((item) => (
              <button 
                key={item.href} 
                onClick={() => scrollTo(item.href)}
                className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button 
            onClick={() => scrollTo('#contact')}
            className="px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest text-white transition-all hover:shadow-lg active:scale-95"
            style={{ backgroundColor: BRAND_GREEN }}
          >
            Join Pilot
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-64 pb-32 px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-[9rem] font-black tracking-tighter leading-[0.85] mb-12">
            Safety without <br />
            <span style={{ color: BRAND_GREEN }}>compromise.</span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-500 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
            H2 AI Lab delivers proactive, privacy-first early warning and rapid response for dementia wandering.
          </p>
          <button 
            onClick={() => scrollTo('#contact')}
            className="px-16 py-8 rounded-full font-black text-xl text-white shadow-2xl transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: BRAND_GREEN }}
          >
            Apply for Pilot 2026
          </button>
        </div>
      </header>

      {/* Problem Section */}
      <section id="problem" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tight">The Wandering Challenge</h2>
              <p className="text-2xl text-slate-600 leading-relaxed mb-12">
                60% of people with dementia will experience a wandering incident. Current solutions are reactive. We aim to be proactive.
              </p>
              <div className="flex gap-12">
                <div>
                  <div className="text-6xl font-black mb-2" style={{ color: BRAND_GREEN }}>982k</div>
                  <p className="text-sm font-black uppercase tracking-widest text-slate-400">UK Citizens</p>
                </div>
                <div>
                  <div className="text-6xl font-black mb-2" style={{ color: BRAND_GREEN }}>60%</div>
                  <p className="text-sm font-black uppercase tracking-widest text-slate-400">Impact Rate</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-[4rem] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=800" 
                alt="Care" 
                className="rounded-[3.2rem] w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tech" className="py-32">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12">
          {[
            { icon: "🛡️", title: "Privacy First", desc: "Edge computing ensures sensitive data never leaves the home environment." },
            { icon: "🧠", title: "AI Analysis", desc: "Proactive intent detection identifies exit-seeking behavior early." },
            { icon: "📍", title: "Rapid Recovery", desc: "Encrypted tracking protocols for immediate response during incidents." }
          ].map((item, i) => (
            <div key={i} className="p-12 bg-white rounded-[3rem] border border-slate-100 hover:border-slate-200 transition-all text-center group">
              <div className="text-5xl mb-8">{item.icon}</div>
              <h3 className="text-3xl font-black mb-4">{item.title}</h3>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="contact" className="py-32 px-8">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[5rem] p-20 md:p-32 text-center text-white relative overflow-hidden">
          <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter">Join the Pilot</h2>
          <p className="text-2xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
            Register your interest for the 2026 UK Pilot Program. Peace of mind is coming.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-10 py-6 bg-white/5 rounded-3xl border border-white/10 text-xl focus:outline-none focus:border-stone-500 transition-all"
            />
            <button 
              className="px-12 py-6 rounded-3xl font-black text-xl hover:opacity-90 transition-all"
              style={{ backgroundColor: BRAND_GREEN }}
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-slate-100">
        <H2Logo />
        <p className="mt-8 text-sm font-black uppercase tracking-[0.4em] text-slate-400">
          © 2026 H2 AI LAB. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;