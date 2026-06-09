import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building, 
  Mail, 
  ShieldCheck, 
  Sparkles, 
  Heart,
  Globe,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';

interface FooterProps {
  onOpenTrial: () => void;
  onOpenScheduler: () => void;
  onOpenPrivacy: () => void;
  onOpenSLA: () => void;
}

export default function Footer({ onOpenTrial, onOpenScheduler, onOpenPrivacy, onOpenSLA }: FooterProps) {
  const [inlineEmail, setInlineEmail] = useState('');
  const [showInlineSuccess, setShowInlineSuccess] = useState(false);

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inlineEmail.trim()) return;

    localStorage.setItem('veloxcall_footer_email', inlineEmail);
    setShowInlineSuccess(true);
    setInlineEmail('');
    window.open("https://calendly.com/booknow12/consultation-veloxcall", "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* UPPER ROW: CTA TRIAL REGISTER SUBMISSION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/40 border border-slate-850 p-6 sm:p-10 rounded-3xl mb-16 text-left">
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/25 text-orange-500 text-[10px] font-mono font-bold tracking-widest uppercase">
              🍁 RISK FREE TRIAL
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-white tracking-tight">Stop Leaking High-Ticket Restoration Leads</h3>
            <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-xl">
              Establish your conversational voice agent callback funnel. Claim 200 free callback minutes in your 14-day trials now.
            </p>
          </div>

          <div className="lg:col-span-6">
            {showInlineSuccess ? (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/25 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-sm font-bold text-white">Canada Trial Registered Successfully!</p>
                  <p className="text-xs text-slate-400 mt-1">We have reserved your local restoration channel. Check your inbox shortly for setup guides.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleInlineSubmit} className="flex flex-col sm:flex-row items-stretch gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="email"
                    required
                    value={inlineEmail}
                    onChange={(e) => setInlineEmail(e.target.value)}
                    placeholder="Enter owner email (e.g. john@restoration.ca)"
                    className="w-full pl-10 pr-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-sans"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs py-3.5 px-6 rounded-xl cursor-pointer hover:shadow-lg hover:shadow-orange-500/15 active:scale-95 transition-all w-full sm:w-auto text-center"
                >
                  Claim 14-Day Free Trial
                </button>
              </form>
            )}
            <p className="text-[10px] text-slate-500 mt-2 text-left sm:text-center font-mono">
              ★ NO CREDIT CARD • 60-SECOND INSTANT SETUP • CAN-SPAM SECURE
            </p>
          </div>
        </div>

        {/* MIDDLE SECTION: BRAND COPY + MENU METRIC CHANNELS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900 text-left">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500 text-white font-mono font-bold text-sm tracking-tighter">
                V
              </span>
              <span className="font-display font-semibold text-lg text-white">VeloxCall AI</span>
            </div>
            
            <p className="text-xs text-slate-400 leading-normal max-w-sm font-sans">
              Deploying enterprise voice routing and low-latency dial-backs to stop restoration lead leakage across Canada.
            </p>

            {/* Local service declaration */}
            <div className="p-3 bg-slate-900/60 border border-slate-850 rounded-xl flex items-start gap-2.5 max-w-xs">
              <ShieldCheck className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
              <p className="text-[10px] text-slate-400 leading-normal font-sans">
                <strong>Built for Canadian Businesses:</strong> We fully configure accent preferences, local Canadian area codes, regional safety guidelines, and local insurer claim regulations.
              </p>
            </div>
          </div>

          {/* Column 2: Navigation shortcuts */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">NAVIGATION & LINKS</h4>
            <div className="grid grid-cols-1 gap-2 text-xs font-sans">
              <a href="#how-it-works" className="text-slate-400 hover:text-orange-400 transition-colors">How We Help</a>
              <a href="#pricing" className="text-slate-400 hover:text-orange-400 transition-colors font-semibold font-sans">Tiers & Pricing</a>
              <button onClick={onOpenScheduler} className="text-slate-400 hover:text-orange-400 transition-colors text-left cursor-pointer">Schedule 10m Call Info</button>
            </div>
          </div>

        </div>

        {/* BOTTOM LEGAL ROW */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-mono gap-4 text-left sm:text-center">
          <p>© 2026 Veloxnetwork Software Inc. (VeloxCall AI). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={onOpenPrivacy} className="hover:text-slate-300 cursor-pointer">Privacy Policy</button>
            <span>•</span>
            <button onClick={onOpenSLA} className="hover:text-slate-300 cursor-pointer">Terms of SLA Dispatch</button>
            <span>•</span>
            <div className="flex items-center gap-1 hover:text-slate-300 cursor-default">
              <Globe className="w-3.5 h-3.5 text-orange-500" />
              <span>Made in Canada 🍁</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
