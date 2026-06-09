import { motion } from 'motion/react';
import { 
  FileText, 
  HelpCircle, 
  ArrowRight, 
  Settings, 
  Webhook, 
  PhoneCall, 
  Database, 
  BellRing,
  Cpu,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-transparent border-y border-slate-200/40 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4 font-sans">
            <Settings className="w-3.5 h-3.5 text-blue-600 animate-[spin_6s_linear_infinite]" />
            Fast Dispatch Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900">
            How It Works: Form to Call in Under 60s
          </h2>
          <p className="mt-4 text-slate-650 font-medium font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A seamless bridge between cold forms and warm emergency voice conversations. VeloxCall AI automatically routes incoming webhooks into zero-latency conversational calls.
          </p>
        </div>

        {/* 3-Step Copy Blocks with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {WORKFLOW_STEPS.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className="bg-white border border-slate-200 p-6 rounded-3xl relative group hover:border-slate-300 shadow-3xs hover:shadow-xs transition-all duration-305 flex flex-col justify-between"
            >
              {/* Floating index */}
              <div className="absolute top-4 right-6 font-mono font-black text-3xl text-slate-200/50 group-hover:text-blue-600/10 cursor-default select-none transition-all">
                {stepItem.step}
              </div>

              <div className="space-y-4 text-left">
                {/* Visual Bullet Icon Indicator */}
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-blue-600 shadow-3xs">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
                  {stepItem.title}
                </h3>
                <p className="text-xs text-slate-550 font-medium leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/30 text-[10px] font-mono text-slate-400 flex items-center justify-between font-bold">
                <span>PIPELINE ENGINE</span>
                <span>{stepItem.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* SIMPLE, HUMAN-CENTERED VALUE SUMMARY */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs overflow-hidden relative">
          <div className="absolute -top-2.5 left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-mono text-slate-500 font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
            Worry-Free Implementation
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
            
            <div className="lg:col-span-5 text-left space-y-4">
              <h4 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                Zero Tech Overhead. We Handle 100% of the Onboarding.
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                You do not need to hire developers, install software, or write code. Our integration team handles the entire connection process from start to finish. We make sure calls go out within 24 hours of starting your free trial.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-3xs text-left hover:bg-slate-100 hover:border-slate-300 transition-all duration-300">
                <div className="p-2.5 w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-105 flex items-center justify-center mb-3">
                  <Database className="w-5 h-5" />
                </div>
                <h5 className="text-sm font-bold text-slate-900">Direct CRM Syncing</h5>
                <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                  Every callback outcome, emergency depth log, and lead detail goes straight into your Jobber, ServiceTitan, or custom CRM.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-3xs text-left hover:bg-slate-100 hover:border-slate-300 transition-all duration-300">
                <div className="p-2.5 w-10 h-10 rounded-xl bg-orange-50 text-orange-500 border border-orange-105 flex items-center justify-center mb-3">
                  <FileText className="w-5 h-5" />
                </div>
                <h5 className="text-sm font-bold text-slate-900">Custom Regional Scripts</h5>
                <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                  We program custom local accents and specific emergency templates relative to your Canadian area codes.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
