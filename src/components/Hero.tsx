import { motion } from 'motion/react';
import { 
  Phone, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Activity, 
  ShieldAlert,
  Clock
} from 'lucide-react';

interface HeroProps {
  onSeeLossClick: () => void;
  onTryFreeClick: () => void;
}

export default function Hero({ onSeeLossClick, onTryFreeClick }: HeroProps) {
  return (
    <header className="relative py-12 sm:py-16 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Hero Left Content - Bento Card */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-[0_12px_30px_-6px_rgba(51,65,85,0.04)] hover:shadow-[0_24px_50px_-12px_rgba(51,65,85,0.08)] hover:border-slate-300 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-bl-full pointer-events-none -mr-10 -mt-10" />
            
            <div className="space-y-6">
              {/* Canadian Restoration Floating Badge */}
              <div className="inline-flex items-center gap-2 p-1.5 px-3.5 bg-slate-100 border border-slate-200 rounded-full text-[11px] font-semibold text-slate-805 w-fit">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 font-bold text-[10px] text-white">
                  🍁
                </span>
                <span className="flex items-center gap-1 font-sans">
                  <span className="font-bold text-slate-900">Built for Canada:</span>
                  Disaster Dispatch AI Voice Agents
                </span>
              </div>
 
              {/* Headline Group */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] font-extrabold text-slate-950 tracking-tight">
                  You're <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent font-extrabold">Losing $10,000+</span> Every Month to Missed Leads. <span className="text-blue-900 block mt-2">We Fix That.</span>
                </h1>
                
                <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl font-medium">
                  AI voice agents that call your water damage, mold, and fire leads <strong className="text-slate-900 font-bold">within 60 seconds</strong> of form submission – before they click back and call your competitors.
                </p>
              </div>
 
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  id="btn-see-loss"
                  onClick={onSeeLossClick}
                  className="group flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-650 hover:to-amber-650 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-orange-500/15 transition-all cursor-pointer text-sm sm:text-base relative overflow-hidden active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Plans & Pricing
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </button>
 
                <button
                  id="btn-try-trial-hero"
                  onClick={onTryFreeClick}
                  className="flex items-center justify-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-800 font-bold py-3.5 px-5 rounded-xl transition-all cursor-pointer text-sm sm:text-base font-sans shadow-xs"
                >
                  Claim 14-Day Free Trial
                </button>
              </div>
 
              {/* Quick trust bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-3 gap-x-4 border-t border-slate-200/50 pt-5">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="text-xs text-slate-500 font-black font-mono tracking-wide">UNDER 60s CALLBACKS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span className="text-xs text-slate-500 font-black font-mono tracking-wide">99.9% LIVE ANSWER SPEED</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-blue-600" />
                  <span className="text-xs text-slate-500 font-black font-mono tracking-wide">TRUE CRM INTEGRATIONS</span>
                </div>
              </div>
            </div>

            {/* Highly Polished TRUST PLACEHOLDERS */}
            <div className="pt-5 mt-6 flex flex-wrap items-center gap-6 border-t border-slate-200/50">
              {/* Secure Shield Placeholder */}
              <div className="flex items-center gap-2.5 bg-slate-50 p-2 rounded-2xl border border-slate-200 shadow-3xs">
                <div className="flex items-center justify-center w-9 h-9 bg-blue-50 border border-blue-105 rounded-xl text-blue-600 text-sm">
                  🍁
                </div>
                <div>
                  <div className="text-[8px] text-slate-400 font-mono font-bold leading-none uppercase tracking-wider">REGIONAL NUANCE</div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5">100% Built in Canada</div>
                </div>
              </div>
            </div>

          </div>
 
          {/* Hero Right Visual Column - Safe, Clean Value Card - Bento Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.15)] overflow-hidden h-full flex flex-col justify-between text-white transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-6">
                {/* Call Status Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Restoration Outbound Safeguard</span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-emerald-400 font-bold uppercase">Active Protection</span>
                </div>
 
                {/* Main Visual Callout */}
                <div className="text-left space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold">
                    <Clock className="w-3.5 h-3.5 animate-pulse text-blue-400" />
                    Guaranteed Under-60s Callback
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                    Securing the First-On-Scene Position.
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-sans font-normal">
                    In disaster restoration, the first contractor to talk to the homeowner wins the job. VeloxCall AI automatically connects with leads instantly, booking mitigation jobs before competitors even check their inbox.
                  </p>
                </div>
 
                {/* Three Clean Process Benefits */}
                <div className="space-y-3.5 pt-2">
                  <div className="flex items-start gap-3 bg-slate-850 border border-slate-800 p-3 rounded-2xl hover:bg-slate-800 transition-all">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-500/30">
                      <span className="text-xs font-bold leading-none font-mono">1</span>
                    </div>
                    <div className="text-left">
                      <h4 className="text-xs font-bold text-white">24/7/365 Emergency Capture</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed font-normal">No missed 2 AM flooded basements or pipe bursts. Immediate responses during weekends and holidays.</p>
                    </div>
                  </div>
 
                  <div className="flex items-start gap-3 bg-slate-850 border border-slate-800 p-3 rounded-2xl hover:bg-slate-800 transition-all">
                    <div className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5 border border-orange-500/30">
                      <span className="text-xs font-bold leading-none font-mono">2</span>
                    </div>
                    <div className="text-left">
                      <h4 className="text-xs font-bold text-white">Reassuring & Empathetic Tone</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed font-normal">Sounds warm, professional, and clear. Gathers critical damage, address, and insurance info.</p>
                    </div>
                  </div>
 
                  <div className="flex items-start gap-3 bg-slate-850 border border-slate-800 p-3 rounded-2xl hover:bg-slate-800 transition-all">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                      <span className="text-xs font-bold leading-none font-mono">3</span>
                    </div>
                    <div className="text-left">
                      <h4 className="text-xs font-bold text-white">Seamless Dispatch Escalation</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed font-normal">Instantly alerts your on-call technician or live office when high-priority emergencies are identified.</p>
                    </div>
                  </div>
                </div>
              </div>
 
              {/* Bottom tag line */}
              <div className="pt-4 mt-6 border-t border-slate-800 flex items-center justify-between text-[9px] font-mono text-slate-500 uppercase font-black tracking-wider">
                <span>100% Bilingual Ready</span>
                <span>Active Canada Dispatch</span>
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </header>
  );
}
