import React, { useState, useEffect } from 'react';

// BRAND COLORS
const BRAND_GREEN = "#9DA352"; 
const BRAND_GREY = "#9A9A9A";  

// --- CUSTOM SVG ICONS ---
const IconCam = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={BRAND_GREEN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
  </svg>
);

const IconHub = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={BRAND_GREEN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6" y2="6"/><line x1="6" y1="18" x2="6" y2="18"/>
  </svg>
);

const IconTracker = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={BRAND_GREEN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/>
  </svg>
);

const H2Logo = () => (
  <div className="flex items-center font-black text-2xl tracking-tighter uppercase">
    <span style={{ color: BRAND_GREEN }}>H2</span>
    <span className="ml-2 text-slate-900">AI LAB</span>
  </div>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- FORMSPARK SUBMISSION LOGIC ---
  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('submitting');

    try {
      const response = await fetch('https://submit-form.com/gsit32ht1x', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          message: "New Waitlist Application for Pilot 2026",
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail("");
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-[#9DA352]/20">
      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})}><H2Logo /></button>
          <div className="hidden lg:flex gap-12 font-black uppercase text-[10px] tracking-[0.3em] text-slate-400">
            {['Problem', 'H2 System', 'Privacy', '2026 Pilot'].map(item => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))} className="hover:text-black transition-colors">{item}</button>
            ))}
          </div>
          <button onClick={() => scrollTo('contact')} className="px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-2xl transition-all hover:scale-105" style={{ backgroundColor: BRAND_GREEN }}>Join Pilot</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="pt-64 pb-40 px-8 text-center">
        <h1 className="text-8xl md:text-[10rem] font-black tracking-[-0.06em] leading-[0.85] mb-12">
          Safety without <br /><span style={{ color: BRAND_GREEN }}>compromise.</span>
        </h1>
        <p className="text-2xl text-slate-500 max-w-3xl mx-auto mb-16 font-medium leading-relaxed italic italic">"Empowering independence through proactive AI protection."</p>
        <button onClick={() => scrollTo('contact')} className="px-16 py-8 rounded-full font-black text-xl text-white shadow-2xl transition-all hover:brightness-110 active:scale-95" style={{ backgroundColor: BRAND_GREEN }}>Apply for Pilot 2026</button>
      </header>

      {/* THE CHALLENGE SECTION */}
      <section id="problem" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-7xl font-black mb-12 tracking-tighter leading-tight text-slate-900">The Wandering <br/>Challenge</h2>
            <p className="text-2xl text-slate-600 mb-12 leading-relaxed">60% of people with dementia will experience a wandering incident. We provide the technology to prevent it.</p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100">
                <div className="text-7xl font-black mb-4" style={{ color: BRAND_GREEN }}>982k</div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">UK Citizens</p>
              </div>
              <div className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100">
                <div className="text-7xl font-black mb-4" style={{ color: BRAND_GREEN }}>60%</div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">Incident Risk</p>
              </div>
            </div>
          </div>
          <div className="rounded-[4rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale-[30%]" alt="Dementia Care Technology" />
          </div>
        </div>
      </section>

      {/* H2 SYSTEM SECTION */}
      <section id="h2-system" className="py-40 bg-slate-900 text-white rounded-[5rem] mx-4 md:mx-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-black mb-4 tracking-tighter">The H2 System</h2>
            <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-sm">Hardware Architecture</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-16 rounded-[4rem] bg-white/5 border border-white/10 hover:border-white/30 transition-all">
              <IconCam />
              <h3 className="text-3xl font-bold mt-8 mb-6">Cam Modules</h3>
              <p className="text-slate-400 text-lg leading-relaxed font-light">Neural-vision sensors that detect 'exit-seeking' behavior patterns using edge-based AI.</p>
            </div>
            <div className="p-16 rounded-[4rem] bg-white/5 border border-white/30 transition-all" style={{ boxShadow: `0 0 40px ${BRAND_GREEN}15` }}>
              <IconHub />
              <h3 className="text-3xl font-bold mt-8 mb-6" style={{ color: BRAND_GREEN }}>The H2 Hub</h3>
              <p className="text-slate-400 text-lg leading-relaxed font-light">Localized AI processing. Every frame is kept on-site. Zero cloud exposure. Absolute privacy.</p>
            </div>
            <div className="p-16 rounded-[4rem] bg-white/5 border border-white/10 hover:border-white/30 transition-all">
              <IconTracker />
              <h3 className="text-3xl font-bold mt-8 mb-6">Smart Tracker</h3>
              <p className="text-slate-400 text-lg leading-relaxed font-light">Encrypted GPS wearable activated only during verified emergency events for secure recovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP SECTION */}
      <section id="2026-pilot" className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-6xl font-black mb-24 text-center tracking-tight">Pilot 2026 Journey</h2>
          <div className="space-y-8">
            {[
              { q: "2024 Q3", m: "Research Phase", d: "Behavioral modeling and exit intent protocols.", c: true },
              { q: "2025 Q2", m: "Alpha Testing", d: "Local processing optimization and hardware stress tests.", c: false },
              { q: "2026 Q1", m: "UK Pilot Program", d: "Full deployment to the first 100 private households.", c: false }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-10 items-center p-12 bg-slate-50 rounded-[4rem] border border-slate-100">
                <div className="px-10 py-4 rounded-full text-white font-black text-xs whitespace-nowrap" style={{ backgroundColor: item.c ? "#10b981" : BRAND_GREEN }}>{item.q}</div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-black mb-2">{item.m}</h3>
                  <p className="text-slate-500 text-lg font-medium">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION (THE JOIN NOW FIX) */}
      <section id="contact" className="py-40 px-8">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[6rem] p-24 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 blur-[120px] opacity-20" style={{ backgroundColor: BRAND_GREEN }}></div>
          
          <h2 className="text-7xl font-black mb-10 tracking-tighter">
            {status === 'success' ? "Welcome to the Lab." : "Ready to Start?"}
          </h2>
          
          <p className="text-2xl text-slate-400 mb-16 max-w-xl mx-auto leading-relaxed">
            {status === 'success' 
              ? "Your application for the 2026 Pilot has been successfully received. We will contact you shortly." 
              : status === 'error'
              ? "Something went wrong. Please check your connection and try again."
              : "Secure your place in the future of dementia care."}
          </p>

          {status !== 'success' && (
            <form onSubmit={handleJoin} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="email" 
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" 
                className="flex-grow px-10 py-6 bg-white/5 rounded-3xl border border-white/10 text-xl focus:outline-none focus:border-white/30 transition-all text-white" 
              />
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="px-14 py-6 rounded-3xl font-black text-xl hover:opacity-90 transition-all text-white shadow-lg disabled:opacity-50" 
                style={{ backgroundColor: BRAND_GREEN }}
              >
                {status === 'submitting' ? "Sending..." : "Join Now"}
              </button>
            </form>
          )}

          {status === 'success' && (
            <button onClick={() => setStatus('idle')} className="text-xs font-black uppercase tracking-widest text-white/50 hover:text-white transition-colors underline underline-offset-8">
              Submit Another Email
            </button>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 text-center border-t border-slate-100">
        <H2Logo />
        <p className="mt-8 text-[10px] font-black text-slate-300 tracking-[0.5em] uppercase">© 2026 H2 AI LAB. London, United Kingdom.</p>
      </footer>
    </div>
  );
};

export default App;