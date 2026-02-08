
import React, { useState, useEffect, useCallback } from 'react';
import { 
  Shield, 
  Eye, 
  Brain, 
  MapPin, 
  Lock, 
  Users, 
  Camera, 
  Cpu, 
  Search,
  H2Logo
} from './components/Icons';
import { NavItem, RoadmapItem } from './types';

// Constants
const NAV_ITEMS: NavItem[] = [
  { label: 'Problem', href: '#problem' },
  { label: 'H2 System', href: '#solution' },
  { label: 'Features', href: '#features' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Pilot 2026', href: '#roadmap' },
];

const ROADMAP: RoadmapItem[] = [
  { 
    date: '2024 Q3', 
    milestone: 'Foundational Research', 
    description: 'Establishing the core privacy-first AI protocols and secure data handling mechanisms for dementia wandering prevention.',
    status: 'completed' 
  },
  { 
    date: '2025 Q1', 
    milestone: 'System Development', 
    description: 'Building the H2 processing engine and edge computing interface for non-invasive household safety.',
    status: 'ongoing' 
  },
  { 
    date: '2026 Q2', 
    milestone: 'UK Pilot Program', 
    description: 'Deploying the first secure household nodes for real-time privacy-safe dementia support.',
    status: 'upcoming' 
  },
];

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-12 bg-white rounded-[3rem] shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-slate-100 hover:shadow-[0_40px_80px_-15px_rgba(150,156,76,0.15)] hover:border-brand-primary/30 transition-all duration-700 group">
    <div className="w-20 h-20 flex items-center justify-center bg-brand-primary/5 rounded-[1.5rem] mb-10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <h3 className="text-3xl font-black mb-6 text-slate-900 tracking-tight">{title}</h3>
    <p className="text-brand-accent leading-relaxed font-medium text-xl">{description}</p>
  </div>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const scrollTo = useCallback((href: string) => {
    setIsMenuOpen(false);
    if (href === '#' || href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const id = href.startsWith('#') ? href.slice(1) : href;
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map(i => i.href.slice(1)).concat(['contact']);
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-brand-primary/20 selection:text-brand-primary">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-700 ${
        scrolled ? 'bg-white/90 backdrop-blur-2xl shadow-xl py-4' : 'bg-transparent py-12'
      }`}>
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <button onClick={() => scrollTo('#')} className="h-10 md:h-12 hover:scale-105 transition-transform flex items-center">
            <H2Logo className="h-full w-auto" />
          </button>

          <div className="hidden lg:flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <button 
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`px-6 py-3 text-sm font-black transition-all duration-300 rounded-full uppercase tracking-widest ${
                  activeSection === item.href 
                    ? 'text-brand-primary bg-brand-primary/5' 
                    : 'text-brand-accent hover:text-brand-primary hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => scrollTo('#contact')}
              className="hidden sm:block px-10 py-4 bg-brand-primary text-white rounded-full text-sm font-black uppercase tracking-widest hover:bg-brand-dark transition-all shadow-lg active:scale-95"
            >
              Join Pilot
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle Menu"
            >
              <div className={`w-6 h-0.5 bg-slate-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-6 h-0.5 bg-slate-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-slate-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-2xl transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-[500px] py-8' : 'max-h-0'}`}>
          <div className="flex flex-col px-8 gap-4">
            {NAV_ITEMS.map((item) => (
              <button 
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-left py-4 text-2xl font-black text-slate-900 border-b border-slate-50 last:border-0"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('#contact')}
              className="mt-4 w-full py-6 bg-brand-primary text-white rounded-3xl font-black text-xl"
            >
              Join Pilot List
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative pt-64 pb-48 lg:pt-80 lg:pb-64 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
          <h1 
            onClick={() => scrollTo('#solution')}
            className="text-7xl md:text-[9rem] lg:text-[11rem] font-black text-slate-900 mb-16 leading-[0.8] tracking-tighter cursor-pointer hover:opacity-90 transition-opacity"
          >
            Safety without <br />
            <span className="text-brand-primary">compromise.</span>
          </h1>
          
          <p className="max-w-4xl mx-auto text-2xl md:text-3xl text-brand-accent mb-24 leading-relaxed font-medium">
            H2 AI Lab provides proactive, privacy-first early warning and rapid response for dementia wandering. We empower carers with peace of mind.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button 
              onClick={() => scrollTo('#contact')}
              className="w-full sm:w-auto px-16 py-8 bg-brand-primary text-white rounded-[3rem] font-black text-2xl hover:bg-brand-dark transition-all duration-500 shadow-xl active:scale-95"
            >
              Apply for Pilot 2026
            </button>
            <button className="w-full sm:w-auto px-16 py-8 bg-white text-slate-900 border-4 border-slate-100 rounded-[3rem] font-black text-2xl hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-6 group">
              <Search className="w-8 h-8 text-brand-primary group-hover:scale-110 transition-transform" />
              <span>Research Summary</span>
            </button>
          </div>
        </div>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-20 right-0 w-[1000px] h-[1000px] bg-brand-primary/10 rounded-full blur-[200px]" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[150px]" />
        </div>
      </header>

      {/* Problem */}
      <section id="problem" className="py-52 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="text-6xl md:text-8xl font-black mb-16 tracking-tighter leading-[0.9] text-slate-900">The Wandering Challenge</h2>
              <p className="text-3xl text-brand-accent mb-20 leading-relaxed font-medium">
                60% of people with dementia will experience a wandering incident. Current solutions are reactive—notifying you only <span className="text-brand-primary font-black underline decoration-4 underline-offset-8 decoration-brand-primary/30">after</span> a loved one has already left safety.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-12">
                <div className="p-16 bg-white rounded-[4rem] shadow-xl border border-slate-100">
                  <div className="text-8xl font-black text-brand-primary mb-6 tracking-tighter">982k</div>
                  <div className="text-sm font-black text-brand-accent uppercase tracking-[0.4em] mb-6">In the UK</div>
                  <p className="text-slate-600 font-bold text-xl">People living with dementia today across the country.</p>
                </div>
                <div className="p-16 bg-white rounded-[4rem] shadow-xl border border-slate-100">
                  <div className="text-8xl font-black text-brand-primary mb-6 tracking-tighter">60%</div>
                  <div className="text-sm font-black text-brand-accent uppercase tracking-[0.4em] mb-6">Impact</div>
                  <p className="text-slate-600 font-bold text-xl">Will experience at least one wandering incident.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-white rounded-[6rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=800" 
                  alt="Compassionate Care"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-16 left-16 right-16 p-16 bg-white/95 backdrop-blur-3xl rounded-[4rem] shadow-2xl border border-white/20">
                  <div className="flex items-center gap-6 mb-10">
                    <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
                      <Shield className="w-8 h-8" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-[0.4em] text-brand-primary">Proactive Protection</span>
                  </div>
                  <p className="text-4xl font-black text-slate-900 leading-[1.05] tracking-tight">Preserving independence through early intent detection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="py-52 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-40">
            <h2 className="text-7xl md:text-9xl font-black mb-12 tracking-tighter">The H2 System</h2>
            <p className="max-w-4xl mx-auto text-slate-400 text-3xl font-medium leading-relaxed">
              Our ecosystem is designed to balance proactive protection with absolute privacy. No sensitive data leaves your home.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-16">
            {[
              { icon: <Camera className="w-14 h-14" />, title: "Cam Modules", desc: "Detects intent at exits using virtual tripwires powered by local AI." },
              { icon: <Cpu className="w-14 h-14" />, title: "AI Hub", desc: "The privacy-first local brain. Zero frames transmitted to the cloud." },
              { icon: <MapPin className="w-14 h-14" />, title: "Smart Tracker", desc: "High-fidelity GPS recovery activated only during confirmed incidents." }
            ].map((item, i) => (
              <div key={i} className="p-16 bg-white/[0.02] rounded-[5rem] border border-white/[0.08] hover:border-brand-primary/50 transition-all duration-700 group text-center">
                <div className="w-32 h-32 bg-brand-primary/10 rounded-[3.5rem] flex items-center justify-center mb-12 mx-auto group-hover:bg-brand-primary transition-all duration-500">
                  <div className="text-brand-primary group-hover:text-white transition-colors">{item.icon}</div>
                </div>
                <h3 className="text-4xl font-black mb-8 tracking-tight">{item.title}</h3>
                <p className="text-slate-400 text-2xl font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-52 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-40">
            <h2 className="text-6xl md:text-[6.5rem] font-black mb-10 tracking-tighter text-slate-900">Built for Peace of Mind</h2>
            <p className="text-brand-accent text-3xl font-medium">Addressing the core pain points of modern dementia care.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-20">
            <FeatureCard 
              icon={<Brain className="w-10 h-10" />} 
              title="Early Warning" 
              description="AI identifies distress or exit-seeking intent before a wandering event occurs, giving you time to respond." 
            />
            <FeatureCard 
              icon={<MapPin className="w-10 h-10" />} 
              title="Rapid Recovery" 
              description="GPS activates only upon confirmed exit, providing real-time location data for a swift and safe return." 
            />
            <FeatureCard 
              icon={<Users className="w-10 h-10" />} 
              title="Circle of Trust" 
              description="Coordinate alerts with a secure network of family, neighbors, and responders when every minute counts." 
            />
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="py-52 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-brand-primary rounded-[7rem] p-1.5 shadow-2xl overflow-hidden group">
            <div className="bg-white rounded-[6.8rem] p-24 md:p-40 relative">
               <div className="max-w-5xl relative z-10">
                  <div className="inline-block px-10 py-4 bg-brand-primary/5 rounded-full text-brand-primary text-sm font-black uppercase tracking-[0.5em] mb-16">
                    Security Architecture
                  </div>
                  <h2 className="text-7xl md:text-[8rem] lg:text-[10rem] font-black mb-16 tracking-tighter leading-[0.8] text-slate-900">
                    Privacy as a <br/><span className="text-brand-primary">Human Right.</span>
                  </h2>
                  <p className="text-3xl md:text-5xl text-brand-accent font-medium leading-relaxed mb-24 max-w-4xl">
                     We safeguard individual dignity by ensuring sensitive behavioral data stays exactly where it belongs: <span className="text-slate-900 font-black border-b-[6px] border-brand-primary/20 pb-2">in your home.</span>
                  </p>
                  
                  <div className="flex flex-wrap gap-24">
                     <div className="flex items-center gap-10">
                        <div className="w-24 h-24 bg-brand-primary/5 rounded-[2.5rem] flex items-center justify-center text-brand-primary">
                           <Lock className="w-12 h-12" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-4xl font-black tracking-tight text-slate-900 mb-4">Zero Cloud Exposure</span>
                          <span className="text-brand-accent font-bold text-2xl uppercase tracking-widest opacity-60">Local Processing</span>
                        </div>
                     </div>
                     <div className="flex items-center gap-10">
                        <div className="w-24 h-24 bg-brand-primary/5 rounded-[2.5rem] flex items-center justify-center text-brand-primary">
                           <Eye className="w-12 h-12" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-4xl font-black tracking-tight text-slate-900 mb-4">Identity Anonymity</span>
                          <span className="text-brand-accent font-bold text-2xl uppercase tracking-widest opacity-60">Behavioral Mapping</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-64 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-48">
            <h2 className="text-7xl md:text-[8rem] font-black mb-12 tracking-tighter text-slate-900">Pilot 2026 Journey</h2>
            <p className="text-brand-accent text-3xl font-medium">Laying the foundation for a more compassionate future of safety.</p>
          </div>
          
          <div className="relative space-y-48">
            {ROADMAP.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-24 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                  <div className="bg-white p-20 rounded-[5rem] shadow-xl border border-slate-100 hover:-translate-y-4 transition-transform duration-700">
                    <div className="text-lg font-black text-brand-primary uppercase tracking-[0.5em] mb-8">{item.date}</div>
                    <h3 className="text-5xl font-black mb-10 tracking-tight text-slate-900">{item.milestone}</h3>
                    <p className="text-brand-accent text-2xl leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>
                
                <div className={`w-24 h-24 rounded-[3rem] flex items-center justify-center border-[14px] border-white shadow-2xl z-10 ${
                  item.status === 'completed' ? 'bg-emerald-500' : 
                  item.status === 'ongoing' ? 'bg-brand-primary scale-125' : 'bg-slate-300'
                }`}>
                  <div className={`w-6 h-6 bg-white rounded-full ${item.status === 'ongoing' ? 'animate-ping' : ''}`} />
                </div>
                
                <div className="w-full md:w-1/2 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="contact" className="py-52 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto px-8">
          <div className="bg-slate-900 rounded-[6rem] p-24 lg:p-40 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-7xl md:text-[8rem] font-black text-white mb-16 tracking-tighter leading-none">Join the Waitlist</h2>
              <p className="text-slate-400 text-3xl font-medium mb-24 max-w-3xl mx-auto leading-relaxed">
                Be the first to secure early access to the 2026 UK Pilot Program. Peace of mind is coming.
              </p>
              
              {!isSuccess ? (
                <form onSubmit={handleJoin} className="flex flex-col sm:flex-row gap-8 max-w-4xl mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="flex-grow px-12 py-9 bg-white/5 border-2 border-white/10 rounded-[3rem] text-white text-2xl font-medium focus:outline-none focus:border-brand-primary transition-all placeholder:text-slate-600 disabled:opacity-50"
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="px-20 py-9 bg-brand-primary text-white rounded-[3rem] font-black text-2xl hover:bg-brand-dark transition-all duration-500 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Apply Now'}
                  </button>
                </form>
              ) : (
                <div className="bg-brand-primary/10 border-2 border-brand-primary/30 rounded-[4rem] p-20">
                  <h3 className="text-5xl font-black text-white mb-6">Application Received</h3>
                  <p className="text-slate-400 text-2xl font-medium">You've been added to our priority waitlist. We'll contact you soon.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-32 pb-32 border-b border-slate-100">
            <div className="flex flex-col items-start gap-16 max-w-lg">
              <button onClick={() => scrollTo('#')} className="h-14 w-auto hover:scale-105 transition-transform flex items-center">
                <H2Logo className="h-full w-auto" />
              </button>
              <p className="text-brand-accent text-3xl font-medium leading-relaxed">
                Safety without compromise. Dignity without surveillance. Supporting families through innovation and localized intelligence.
              </p>
            </div>
          </div>
          
          <div className="pt-24 flex flex-col md:flex-row justify-between items-center gap-16">
            <p className="text-brand-accent text-xl font-bold tracking-tight">© 2026 H2 AI LAB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
