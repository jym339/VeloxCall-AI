import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  HelpCircle, 
  ArrowRight, 
  Sparkles,
  ChevronDown,
  Building,
  DollarSign
} from 'lucide-react';
import { PRICING_PLANS, FAQS } from '../data';

interface PricingProps {
  onPlanClick: (planName: string) => void;
}

export default function Pricing({ onPlanClick }: PricingProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => (prev === index ? null : index));
  };

  return (
    <section id="pricing" className="py-20 bg-transparent border-t border-slate-200/40 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4 font-sans">
            <DollarSign className="w-3.5 h-3.5 text-blue-650" />
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900 animate-fade-in">
            Pre-Calculated Simple Pricing Options
          </h2>
          <p className="mt-4 text-slate-650 font-medium text-sm sm:text-base max-w-2xl mx-auto">
            Secure high-ticket restoration leads on autopilot. All plans include 100% of integration and custom script configuration.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-24 max-w-4xl mx-auto">
          {PRICING_PLANS.slice(0, 2).map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.name}
                className={`rounded-3xl border p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  isPopular 
                    ? 'bg-slate-900 border border-slate-800 shadow-md text-white' 
                    : 'bg-white border border-slate-200 hover:border-slate-300 shadow-xs text-slate-900'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-650 border border-blue-500 text-white text-[9px] font-black uppercase tracking-wider shadow-md">
                    <Sparkles className="w-3 h-3 fill-current animate-pulse" />
                    Most Popular for Canadian Operators
                  </div>
                )}

                <div className="text-left space-y-6">
                  <div>
                    <h3 className={`text-sm font-black uppercase tracking-wider ${isPopular ? 'text-white' : 'text-slate-905'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs mt-2 min-h-8 leading-relaxed font-semibold ${isPopular ? 'text-slate-300' : 'text-slate-550'}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className={`flex items-baseline gap-1 p-4 rounded-xl border ${isPopular ? 'bg-slate-850 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className={`text-4xl font-mono font-black ${isPopular ? 'text-white' : 'text-slate-900'}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-xs font-bold leading-none uppercase tracking-wider font-mono text-slate-400">/ {plan.period}</span>
                    )}
                  </div>

                  <div className="pt-2">
                    <h4 className={`text-[10px] font-mono font-bold uppercase tracking-wider mb-4 block ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                      WHAT'S INCLUDED:
                    </h4>
                    <ul className="space-y-3.5">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className={`flex items-start gap-2.5 text-xs font-semibold ${isPopular ? 'text-slate-200' : 'text-slate-650'}`}>
                          <div className={`p-0.5 rounded-full shrink-0 ${isPopular ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-blue-100/70 text-blue-700 border border-blue-105'}`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="leading-relaxed font-sans font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => onPlanClick(plan.name)}
                    className={`w-full flex items-center justify-center gap-1.5 py-4 px-6 rounded-xl font-bold text-xs cursor-pointer transition-all active:scale-[0.98] ${
                      isPopular
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white hover:shadow-lg hover:shadow-blue-500/10'
                        : 'bg-slate-800 text-white hover:bg-slate-900'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQs TITLE */}
        <div className="max-w-4xl mx-auto mb-12 border-t border-slate-200/30 pt-16 font-sans">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4 font-sans">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              Frequently Asked Questions
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">Have Questions? We Have Answers.</h3>
          </div>

          {/* FAQ Accordion list */}
          <div className="mt-10 space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-slate-305 transition-all duration-300 shadow-3xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-slate-800 font-bold text-sm sm:text-base hover:bg-slate-50/55 transition-colors cursor-pointer font-sans"
                  >
                    <span className="tracking-tight">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-405 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-650' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="p-5 pt-4 border-t border-slate-100 bg-slate-50/30 text-xs sm:text-sm text-slate-600 font-medium font-sans leading-relaxed text-left">
                          {faq.a}
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
