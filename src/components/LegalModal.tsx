import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, ScrollText, Clock, HelpCircle } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab: 'privacy' | 'sla';
}

export default function LegalModal({ isOpen, onClose, defaultTab }: LegalModalProps) {
  const [activeTab, setActiveTab] = React.useState<'privacy' | 'sla'>(defaultTab);

  React.useEffect(() => {
    if (isOpen) {
      setActiveTab(defaultTab);
    }
  }, [isOpen, defaultTab]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ duration: 0.3, type: 'spring', damping: 25 }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full relative z-10 shadow-2xl text-left overflow-hidden flex flex-col h-[85vh] max-h-[700px] text-white"
          >
            {/* Top decorative bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title / Description */}
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-blue-500" />
                Legal Framework & Transparency
              </h3>
              <p className="text-xs text-slate-450 mt-1 font-sans">
                Review our commitments regarding Canadian compliance, data safeguard regulations, and dispatch speed SLAs.
              </p>
            </div>

            {/* Tabs Selector */}
            <div className="flex border-b border-slate-800 mb-6 font-mono text-xs font-bold">
              <button
                onClick={() => setActiveTab('privacy')}
                className={`py-2.5 px-4 border-b-2 transition-all ${
                  activeTab === 'privacy'
                    ? 'border-blue-500 text-white bg-blue-500/5'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Privacy & Data Safeguard Policy
              </button>
              <button
                onClick={() => setActiveTab('sla')}
                className={`py-2.5 px-4 border-b-2 transition-all ${
                  activeTab === 'sla'
                    ? 'border-blue-500 text-white bg-blue-500/5'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Terms of SLA Dispatch
              </button>
            </div>

            {/* Main Content Area (Scrollable) */}
            <div className="flex-1 overflow-y-auto space-y-6 pr-2 font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {activeTab === 'privacy' ? (
                <div className="space-y-4">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 flex items-start gap-3">
                    <ScrollText className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-xs sm:text-sm">PIPEDA & Canadian Compliance Standard</h4>
                      <p className="text-[11px] text-slate-400 mt-1">
                        VeloxCall AI adheres strictly to the Personal Information Protection and Electronic Documents Act (PIPEDA) and provincial standards to protect consumer emergency information.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wide font-mono text-blue-400">1. Information We Collect and Process</h5>
                    <p>
                      When a prospective homeowner submits a request for emergency fire or water damage intervention on your platform, our system captures contact info, geographical address, and damage context. This information is processed programmatically to execute the outbound callback.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wide font-mono text-blue-400">2. Emergency Audio Logging</h5>
                    <p>
                      For liability, training, and seamless CRM handoff, AI-led disaster calls are recorded and safely logged. These recordings capture critical dispatch notes (e.g., source of water leak, insurance carrier, immediate home safety status) and are stored in encrypted environments accessible only by authenticated restoration personnel.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wide font-mono text-blue-400">3. Zero Data Commercialization</h5>
                    <p>
                      We never sell, rent, or lease consumer emergency profiles, names, or addresses to third-party home insurance direct-writers, rebuilders, or independent adjusters. Data remains strictly private to your company channel.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wide font-mono text-blue-400">4. Retention and Right of Deletion</h5>
                    <p>
                      Veloxnetwork Software Inc. retains records of successfully parsed leads only as long as needed to sync outcomes to your CRM. Customers can request full immediate clearing of active database records at any time.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 flex items-start gap-3">
                    <Clock className="w-5 h-5 text-emerald-405 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-xs sm:text-sm">Under-60s Callback Guarantee</h4>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Once an emergency water or smoke damage webhook package is validated, VeloxCall AI triggers outbound voice client dialing in under 60 seconds to lock down the job first.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wide font-mono text-emerald-400">1. Trigger & Signal Availability</h5>
                    <p>
                      Our trigger response SLA promises 99.8% system up-time. Webhook dispatch queues operate 24/7/365 to catch midnight pipe breaks and statutory holiday basement flooding.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wide font-mono text-emerald-400">2. Live Dispatch Escalation Routing</h5>
                    <p>
                      VeloxCall AI acts as the preliminary triage agent. For high-severity scenarios requiring manual approval or live coordination (e.g. active hazardous materials, commercial water shutoffs, structural instability), the agent will immediately perform a live call transfer to your on-call technician's line.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wide font-mono text-emerald-400">3. Customer Fallback Obligations</h5>
                    <p>
                      Restoration operators are responsible for keeping their escalation phone numbers operational, staffed, and within active cellular signals. VeloxCall AI cannot be held responsible for unresolved live dispatcher handoffs due to busy, unanswered, or out-of-range destination phones.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wide font-mono text-emerald-400">4. Regional Safety Protocols</h5>
                    <p>
                      If a homeowner in extreme crisis reports an unresolved active electrical shock hazard, active house fire, or severe medical threat, our AI voice script is optimized to instruct them to dial local emergency services (911) first.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Panel Actions */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[9px] font-mono text-slate-500 uppercase">CANADIAN LEGAL SECURE FRAMEWORK</span>
              <button
                onClick={onClose}
                className="py-2.5 px-5 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all cursor-pointer shadow-md active:scale-95 text-center"
              >
                Acknowledge & Close
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
