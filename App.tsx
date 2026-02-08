import React, { useState, useEffect } from 'react';

// EXACT BRAND COLORS FROM YOUR LOGO
const BRAND_GREEN = "#9DA352"; 
const BRAND_GREY = "#9A9A9A";  
const BRAND_DARK_OLIVE = "#8A8F46"; 

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
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-10'
      }`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <H2Logo />
          <div className="hidden md:flex gap-10">
            {['Problem', 'H2 System', 'Features', 'Privacy'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollTo('contact')}
            className="px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest text-white transition-all active:scale-95"
            style={{ backgroundColor: BRAND_GREEN }}
          >
            Join Pilot
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-64 pb-32 px-8 text-center">
        <h1 className="text-7xl md:text-[8rem] font-black tracking-tighter leading-[0.85] mb-12">
          Safety without <br />
          <span style={{ color: BRAND_GREEN }}>compromise.</span>
        </h1>
        <p className="text-2xl text-slate-500 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
          Proactive, privacy-first early warning and rapid response systems for dementia care.
        </p>
        <button 
          onClick={() => scrollTo('contact')}
          className="px-16 py-8 rounded-full font-black text-xl text-white shadow-2xl transition-all active:scale-95"
          style={{ backgroundColor: BRAND_GREEN }}
        >
          Apply for Pilot 2026
        </button>
      </header>

      {/* Stats / Problem */}
      <section id="problem" className="py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-12">
          <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100">
            <div className="text-7xl font-black mb-4" style={{ color: BRAND_GREEN }}>982k</div>
            <p className="text-xl font-bold text-slate-800 uppercase tracking-wide">UK Citizens living with dementia</p>
          </div>
          <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100">
            <div className="text-7xl font-black mb-4" style={{ color: BRAND_GREEN }}>60%</div>
            <p className="text-xl font-bold text-slate-800 uppercase tracking-wide">Will experience a wandering incident</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[4rem] p-16 md:p-24 text-center text-white">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">Join the Waitlist</h2>
          <p className="text-slate-400 text-xl mb-12 max-w-xl mx-auto">Secure your place in our 2026 UK Pilot Program.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input type="email" placeholder="Email Address" className="flex-grow px-8 py-5 bg-white/10 rounded-2xl border border-white/20 text-white" />
            <button className="px-12 py-5 rounded-2xl font-bold text-lg text-white" style={{ backgroundColor: BRAND_GREEN }}>
              Apply Now
            </button>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-slate-100">
        <H2Logo />
        <p className="mt-8 text-xs font-black uppercase tracking-[0.4em] text-slate-400">© 2026 H2 AI LAB. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;