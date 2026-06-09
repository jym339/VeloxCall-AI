import { useState } from 'react';
import Hero from './components/Hero';
import ProblemStats from './components/ProblemStats';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import TrialSignupModal from './components/TrialSignupModal';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';

import { 
  Sparkles, 
  Calendar, 
  Menu, 
  X
} from 'lucide-react';

export default function App() {
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Growth Champion');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'privacy' | 'sla'>('privacy');

  // Trigger modal for free trial -> Redirect directly to Calendly
  const triggerTrialModal = (planName = 'Growth Champion') => {
    window.open("https://calendly.com/booknow12/consultation-veloxcall", "_blank", "noopener,noreferrer");
  };

  // Open legal modal (privacy / SLA terms)
  const openLegalModal = (tab: 'privacy' | 'sla') => {
    setLegalTab(tab);
    setIsLegalOpen(true);
  };

  // Safe navigation scroll triggers
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen text-slate-900 selection:bg-blue-500/20 selection:text-blue-900 flex flex-col justify-between">

      {/* 2. HEADER PLATFORM CONTROLS */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            
            {/* Left Brand Identity */}
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-600 font-mono font-bold text-base tracking-tighter text-white shadow-md shadow-blue-500/10">
                V
              </div>
              <div>
                <span className="font-display font-bold text-base sm:text-lg text-slate-900 leading-none block tracking-tight">VeloxCall AI</span>
                <span className="text-[9px] font-mono text-slate-500 block font-bold mt-0.5 tracking-wider">SPEED TO LEAD BRIDGE</span>
              </div>
            </div>

            {/* Middle Nav Desktop Links */}
            <div className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium">
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="text-slate-650 hover:text-blue-600 transition-all font-sans font-semibold cursor-pointer"
              >
                How We Help
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-slate-650 hover:text-blue-600 transition-all font-sans font-bold cursor-pointer"
              >
                Tiers & Pricing
              </button>
              <button 
                onClick={() => window.open("https://calendly.com/booknow12/consultation-veloxcall", "_blank", "noopener,noreferrer")} 
                className="text-slate-650 hover:text-blue-600 transition-all font-sans font-semibold cursor-pointer flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                Book Strategy Session
              </button>
            </div>

            {/* Right Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-5 text-xs">
              <button
                id="btn-nav-trial"
                onClick={() => triggerTrialModal('Starter Agent')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-full cursor-pointer transition-all active:scale-95 shadow-md shadow-blue-500/10"
              >
                Claim Free Trial
              </button>
            </div>

            {/* Mobile Menu Icon toggler */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100 bg-white cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE DROPDOWN SCREEN */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-250 bg-white p-5 space-y-4 text-left shadow-xl animate-fade-in">
            <div className="flex flex-col gap-3 text-sm font-semibold">
              <button onClick={() => scrollToSection('how-it-works')} className="text-slate-655 hover:text-blue-600 py-1 text-left">How We Help</button>
              <button onClick={() => scrollToSection('pricing')} className="text-slate-655 hover:text-blue-600 py-1 text-left">Plans & Pricing</button>
              <button 
                onClick={() => {
                  window.open("https://calendly.com/booknow12/consultation-veloxcall", "_blank", "noopener,noreferrer");
                  setMobileMenuOpen(false);
                }} 
                className="text-slate-655 hover:text-blue-600 py-1 flex items-center gap-1.5"
              >
                <Calendar className="w-4 h-4 text-blue-600" />
                Book Strategy Session
              </button>
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => triggerTrialModal('Starter Agent')}
                className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-full text-center cursor-pointer transition-all active:scale-95 text-xs shadow-md"
              >
                Claim 14-Day Free Trial
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* 3. CORE SUBMODULE LAYOUT SECTIONS */}
      <main className="flex-1 relative z-10">
        
        {/* SECTION I: Header visual pitch */}
        <Hero 
          onSeeLossClick={() => scrollToSection('pricing')} 
          onTryFreeClick={() => triggerTrialModal('Growth Champion')} 
        />

        {/* SECTION II: Problem analytics citation badges */}
        <ProblemStats />

        {/* SECTION V: workflow step visuals */}
        <HowItWorks />

        {/* SECTION VII: pricing tables config with faq accordion */}
        <Pricing onPlanClick={(planName) => triggerTrialModal(planName)} />

      </main>

      {/* 4. FOOTER COMPONENT */}
      <Footer 
        onOpenTrial={() => triggerTrialModal('Growth Choice')}
        onOpenScheduler={() => window.open("https://calendly.com/booknow12/consultation-veloxcall", "_blank", "noopener,noreferrer")}
        onOpenPrivacy={() => openLegalModal('privacy')}
        onOpenSLA={() => openLegalModal('sla')}
      />

      {/* 5. OVERLAY SIGNUP CONTAINER */}
      <TrialSignupModal 
        isOpen={isTrialOpen}
        onClose={() => setIsTrialOpen(false)}
        selectedPlanName={selectedPlan}
      />

      {/* 6. LEGAL PRIVACY & SLA OVERLAY */}
      <LegalModal 
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
        defaultTab={legalTab}
      />

    </div>
  );
}
