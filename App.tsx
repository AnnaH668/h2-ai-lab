import React, { useState, useEffect } from 'react';

// Custom lightweight Logo component to replace missing files
const H2Logo = ({ className }: { className?: string }) => (
  <div className={`${className} flex items-center font-black text-2xl tracking-tighter text-blue-600`}>
    H2 <span className="text-slate-900 ml-1">AI LAB</span>
  </div>
);

// Interface definitions
interface NavItem { label: string; href: string; }
interface RoadmapItem { date: string; milestone: string; description: string; status: 'completed' | 'ongoing' | 'upcoming'; }

const NAV_ITEMS: NavItem[] = [
  { label: 'Problem', href: '#problem' },
  { label: 'H2 System', href: '#solution' },
  { label: 'Features', href: '#features' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Pilot 2026', href: '#roadmap' },
];

const FeatureCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
  <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group text-center">
    <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-2xl mb-6 text-2xl mx-auto">
      {icon}
    </div>
    <h3 className="text-2xl font-black mb-4 text-slate-900">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-medium">{description}</p>
  </div>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const scrollTo = (href: string) => {
    const id = href.startsWith('#') ? href.slice(1) : href;
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button onClick={() => scrollTo('#')} className="hover:scale-105 transition-transform">
            <H2Logo className="h-8" />
          </button>
          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <button key={item.href} onClick={() => scrollTo(item.href)} className="text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-blue-600 transition-colors">
                {item.label}
              </button>
            ))}
          </div>
          <button onClick={() => scrollTo('#contact')} className="px-6 py-3 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 transition-all">
            Join Pilot
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-48 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
            Safety without <br />
            <span className="text-blue-600">compromise.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 mb-12 font-medium">
            Proactive, privacy-first early warning and rapid response systems for dementia care.
          </p>
          <button onClick={() => scrollTo('#contact')} className="px-12 py-6 bg-blue-600 text-white rounded-full font-bold text-xl hover:shadow-2xl hover:bg-blue-700 transition-all active:scale-95">
            Apply for Pilot 2026
          </button>
        </div>
      </header>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">The Challenge</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-12 bg-white rounded-3xl shadow-sm border border-slate-100">
              <div className="text-6xl font-black text-blue-600 mb-4">982k</div>
              <p className="text-xl font-bold text-slate-800">People living with dementia in the UK today.</p>
            </div>
            <div className="p-12 bg-white rounded-3xl shadow-sm border border-slate-100">
              <div className="text-6xl font-black text-blue-600 mb-4">60%</div>
              <p className="text-xl font-bold text-slate-800">Probability of a wandering incident occurring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <FeatureCard icon="🧠" title="Early Warning" description="AI-driven intent detection helps prevent incidents before they happen." />
          <FeatureCard icon="📍" title="Rapid Recovery" description="Encrypted GPS tracking activates only during emergency events." />
          <FeatureCard icon="🛡️" title="Privacy First" description="Advanced edge computing ensures data never leaves the home." />
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">Join the Waitlist</h2>
            <p className="text-slate-400 text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Secure your place in our 2026 UK Pilot Program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-8 py-5 bg-white/10 rounded-2xl border border-white/20 text-white text-lg focus:outline-none focus:border-blue-500"
              />
              <button className="px-12 py-5 bg-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-500 transition-all shadow-lg">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center text-slate-400 border-t border-slate-100">
        <p className="font-bold">© 2026 H2 AI LAB. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;