import { motion } from 'motion/react';
import { 
  AlertTriangle, 
  Clock, 
  TrendingDown, 
  Users, 
  XOctagon, 
  TrendingUp,
  Award,
  ArrowRight
} from 'lucide-react';
import { PROBLEM_STATS } from '../data';

export default function ProblemStats() {
  const getIcon = (metricType: string) => {
    switch (metricType) {
      case 'missed_calls':
        return <XOctagon className="w-5 h-5 text-red-600" />;
      case 'conversion_boost':
        return <TrendingUp className="w-5 h-5 text-emerald-600" />;
      case 'leads_lost':
        return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      default:
        return <Award className="w-5 h-5 text-blue-600" />;
    }
  };

  const getCardBg = (metricType: string) => {
    switch (metricType) {
      case 'missed_calls':
        return 'border-rose-100 hover:border-rose-200 bg-rose-50/40 hover:bg-rose-50/70 shadow-xs';
      case 'conversion_boost':
        return 'border-emerald-100 hover:border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50/70 shadow-xs';
      case 'leads_lost':
        return 'border-orange-100 hover:border-orange-200 bg-orange-50/40 hover:bg-orange-50/70 shadow-xs';
      default:
        return 'border-slate-200 bg-white hover:border-slate-300 shadow-xs';
    }
  };

  const textColors = (metricType: string) => {
    switch (metricType) {
      case 'missed_calls': return 'text-red-500';
      case 'conversion_boost': return 'text-emerald-500';
      case 'leads_lost': return 'text-orange-500';
      default: return 'text-slate-900';
    }
  };

  const progressColors = (metricType: string) => {
    switch (metricType) {
      case 'missed_calls': return 'bg-red-500';
      case 'conversion_boost': return 'bg-emerald-500';
      case 'leads_lost': return 'bg-orange-500';
      default: return 'bg-blue-600';
    }
  };

  return (
    <section className="py-20 bg-transparent border-t border-slate-200/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-500/5 border border-red-500/10 text-red-700 text-xs font-semibold uppercase tracking-wider mb-4 font-sans">
            <TrendingDown className="w-3.5 h-3.5 text-red-500" />
            The High Cost of Missed Calls
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900">
            Missed Calls are Missed Profits. It's That Simple.
          </h2>
          <p className="mt-4 text-slate-650 font-medium font-sans max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            When disaster strikes (basement floods, fires, sewer overflows), homeowners make a list of local numbers. The lead goes to whoever answers first. 
          </p>
        </div>

        {/* Problem Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEM_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col justify-between p-6 sm:p-8 rounded-3xl border transition-all duration-300 group ${getCardBg(stat.metricType)}`}
            >
              <div className="space-y-4">
                {/* icon row */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-3xs">
                    {getIcon(stat.metricType)}
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                    DATA-POINT {idx + 1}
                  </span>
                </div>

                {/* large value */}
                <div className="space-y-1">
                  <span className={`text-4xl sm:text-5xl font-mono font-black tracking-tight ${textColors(stat.metricType)} block`}>
                    {stat.value}
                  </span>
                  
                  {/* Small progress meter to make it beautiful */}
                  <div className="w-full bg-slate-200/50 h-1.5 rounded-full overflow-hidden mt-2">
                    <div 
                      className={`h-full ${progressColors(stat.metricType)} transition-all duration-1000`} 
                      style={{ 
                        width: stat.metricType === 'missed_calls' ? '27%' : stat.metricType === 'conversion_boost' ? '90%' : '65%' 
                      }} 
                    />
                  </div>
                </div>

                {/* descriptive label */}
                <p className="text-sm text-slate-700 leading-relaxed font-sans pt-1 font-medium">
                  {stat.label}
                </p>
              </div>

              {/* citation or estimate source */}
              <div className="mt-6 pt-4 border-t border-slate-200/40 flex items-center justify-between text-[11px] text-slate-400 font-mono font-bold">
                <span>CITATION</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200/50 uppercase select-none">
                  [{stat.source}]
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout banner - Styled as a darker contrasting accent block */}
        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm text-white transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-orange-500/10 text-orange-400 rounded-2xl border border-orange-500/20 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h4 className="text-base font-bold text-white tracking-tight">The "1-Minute" Callback Mandate</h4>
              <p className="text-xs sm:text-xs text-slate-400 mt-1 max-w-xl font-normal leading-relaxed">
                Homeowners on Google Local Services are anxious. If you do not answer within the first 60 seconds, they terminate the call, tap the next restoration option, and your $5,000 lead belongs to someone else.
              </p>
            </div>
          </div>
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-1.5 px-5 py-3 hover:scale-[1.02] bg-white text-slate-900 rounded-full font-bold text-xs whitespace-nowrap active:scale-95 transition-all cursor-pointer shadow-md"
          >
            Check Plans & Pricing
            <ArrowRight className="w-4 h-4 text-blue-650" />
          </button>
        </div>

      </div>
    </section>
  );
}
