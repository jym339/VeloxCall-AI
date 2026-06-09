import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  Smartphone, 
  ArrowRight,
  Shield,
  Loader2
} from 'lucide-react';
import { CANADIAN_PROVINCES } from '../data';

interface TrialSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanName?: string;
}

export default function TrialSignupModal({ isOpen, onClose, selectedPlanName = 'Growth Champion' }: TrialSignupModalProps) {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [prov, setProv] = useState('Ontario');
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'provisioning' | 'completed'>('idle');
  const [provisionProgress, setProvisionProgress] = useState(0);
  const [provisionMessage, setProvisionMessage] = useState('');

  // Auto-fill or reset when modal opens
  useEffect(() => {
    if (isOpen) {
      setEmail('');
      setCompany('');
      setProv('Ontario');
      setStatus('idle');
      setProvisionProgress(0);
    }
  }, [isOpen]);

  // Provisioning steps timer effect
  useEffect(() => {
    if (status !== 'provisioning') return;

    const messages = [
      'Creating secure trigger node sandbox...',
      'Mapping standard restoration CRM response schemas...',
      'Registering secure local Canadian area code channels...',
      'Launching VeloxCall Sarah synthetic voice model...',
      'Verification complete. Sandbox ready!'
    ];

    let currentMsgIdx = 0;
    setProvisionMessage(messages[0]);

    const interval = setInterval(() => {
      setProvisionProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus('completed');
          localStorage.setItem('veloxcall_trial_email', email);
          return 100;
        }

        const nextProgress = prev + 10;
        const msgIdx = Math.floor(nextProgress / 25);
        if (msgIdx < messages.length && msgIdx !== currentMsgIdx) {
          currentMsgIdx = msgIdx;
          setProvisionMessage(messages[Math.min(msgIdx, messages.length - 1)]);
        }

        return nextProgress;
      });
    }, 450);

    return () => clearInterval(interval);
  }, [status, email]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !company.trim()) return;

    setStatus('provisioning');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/45 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ duration: 0.3, type: 'spring', damping: 25 }}
            className="bg-slate-900/80 backdrop-blur-2xl border border-slate-800/80 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative z-10 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.3)] text-left overflow-hidden"
          >
            {/* Top glowing gradient line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-rose-500" />
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {status === 'provisioning' && (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <Loader2 className="w-12 h-12 text-orange-550 animate-spin mb-6" />
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Deploying Sandbox Pipeline</h3>
                <p className="text-xs text-slate-400 font-mono min-h-6 animate-pulse px-4">
                  {provisionMessage}
                </p>
                <div className="w-full bg-slate-950/70 rounded-full h-2 mt-6 overflow-hidden max-w-xs border border-slate-850">
                  <div 
                    className="bg-gradient-to-r from-orange-550 to-amber-500 h-full transition-all duration-300"
                    style={{ width: `${provisionProgress}%` }}
                  />
                </div>
                <span className="text-[10px] font-mono text-slate-500 mt-2">{provisionProgress}% Loaded</span>
              </div>
            )}

            {status === 'completed' && (
              <div className="py-8 text-center flex flex-col items-center justify-center space-y-6">
                <div className="w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">Canada Trial Initiated!</h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    A secure VeloxCall account has been created for **{company}** on the `{selectedPlanName}` track (14-day free duration, 0 credit card liability).
                  </p>
                </div>
                
                <div className="p-4 bg-slate-950/60 border border-slate-850/80 rounded-xl w-full text-left space-y-2">
                  <p className="text-xs text-slate-400">
                    <strong>Welcome Steps Sent To:</strong> <span className="font-mono text-white font-semibold">{email}</span>
                  </p>
                  <p className="text-xs text-slate-400">
                    <strong>Provisioned Area Code:</strong> <span className="font-semibold text-orange-500">Local Area Code Reserved</span>
                  </p>
                  <p className="text-xs text-slate-400">
                    <strong>Allocated Webhook:</strong> <span className="text-emerald-400 font-mono font-bold">Standard Webhook Pending Setup</span>
                  </p>
                </div>

                <div className="pt-2 w-full">
                  <button
                    onClick={onClose}
                    className="w-full py-3.5 px-6 font-bold text-xs bg-slate-800 hover:bg-slate-705 rounded-xl text-white transition-all cursor-pointer"
                  >
                    Close & Return to Landing Page
                  </button>
                </div>
              </div>
            )}

            {status === 'idle' && (
              <form onSubmit={handleSubmit} className="space-y-6 pt-2">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-orange-500/10 border border-orange-500/25 text-orange-500 text-[10px] font-mono font-bold tracking-widest uppercase">
                    <Sparkles className="w-3 h-3 animate-pulse" />
                    Began: {selectedPlanName}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white tracking-tight mt-3">
                    Start Your 14-Day Free Trial
                  </h3>
                  <p className="text-sm text-slate-400 mt-1.5 font-sans leading-relaxed">
                    Test VeloxCall callback functionality completely free for 14 days. Stop lead leakage with zero commitment. No credit card required.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Professional Work Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="owner@restorationbrand.ca"
                        className="w-full pl-10 pr-4 py-3 bg-slate-950/80 border border-slate-800/80 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Restoration Company Name
                    </label>
                    <div className="relative">
                      <Smartphone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Canadian Disaster Recovery"
                        className="w-full pl-10 pr-4 py-3 bg-slate-950/80 border border-slate-800/80 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Operating Province
                    </label>
                    <select
                      value={prov}
                      onChange={(e) => setProv(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800/80 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 transition-all font-sans appearance-none"
                    >
                      {CANADIAN_PROVINCES.map(p => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-550 text-white font-bold py-3.5 px-6 rounded-xl hover:shadow-lg hover:shadow-orange-500/15 active:scale-[0.98] transition-all text-sm font-sans"
                  >
                    Claim 14-Day Free Sandbox
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-2 justify-center text-[10px] text-slate-500 font-mono border-t border-slate-800/60 pt-4">
                  <Shield className="w-3.5 h-3.5 text-slate-650" />
                  <span>100% SECURE CANADIAN DEPLOYMENT PANEL • CAN-SPAM COMPLIANT</span>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
