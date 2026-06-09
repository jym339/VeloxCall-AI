import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Building2, 
  Mail, 
  Phone, 
  CheckCircle2, 
  ArrowRight,
  Globe,
  Trash2,
  CalendarCheck
} from 'lucide-react';
import { CANADIAN_PROVINCES } from '../data';
import { Booking } from '../types';

export default function DemoScheduler() {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [province, setProvince] = useState('British Columbia');
  const [selectedDate, setSelectedDate] = useState('2026-06-11'); // Initial future date (metadata is June 9, 2026)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('10:00 AM');
  
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [savedBookings, setSavedBookings] = useState<Booking[]>([]);

  const TIME_SLOTS = [
    '9:00 AM',
    '10:30 AM',
    '1:00 PM',
    '2:30 PM',
    '4:00 PM'
  ];

  const UPCOMING_DATES = [
    { dayName: 'Thu', dateNum: '11', fullDate: '2026-06-11', month: 'Jun' },
    { dayName: 'Fri', dateNum: '12', fullDate: '2026-06-12', month: 'Jun' },
    { dayName: 'Mon', dateNum: '15', fullDate: '2026-06-15', month: 'Jun' },
    { dayName: 'Tue', dateNum: '16', fullDate: '2026-06-16', month: 'Jun' },
    { dayName: 'Wed', dateNum: '17', fullDate: '2026-06-17', month: 'Jun' },
    { dayName: 'Thu', dateNum: '18', fullDate: '2026-06-18', month: 'Jun' },
  ];

  // Load bookings from LocalStorage on mount
  useEffect(() => {
    const data = localStorage.getItem('veloxcall_bookings');
    if (data) {
      try {
        setSavedBookings(JSON.parse(data));
      } catch (e) {
        console.error('Failed to load storage bookings', e);
      }
    }
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !companyName || !phone || !email) return;

    const newBooking: Booking = {
      id: 'book_' + Date.now(),
      name,
      companyName,
      phone,
      email,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      province
    };

    const updated = [newBooking, ...savedBookings];
    setSavedBookings(updated);
    localStorage.setItem('veloxcall_bookings', JSON.stringify(updated));

    setBookingSuccess(true);
    
    // Clear inputs
    setName('');
    setCompanyName('');
    setPhone('');
    setEmail('');

    // Open Calendly redirect
    window.open("https://calendly.com/booknow12/consultation-veloxcall", "_blank", "noopener,noreferrer");
  };

  const deleteBooking = (id: string) => {
    const updated = savedBookings.filter(b => b.id !== id);
    setSavedBookings(updated);
    localStorage.setItem('veloxcall_bookings', JSON.stringify(updated));
  };

  const getTimezoneLabel = (prov: string) => {
    switch (prov) {
      case 'British Columbia': return 'Pacific Time (PT) — Vancouver Support Active';
      case 'Alberta': return 'Mountain Time (MT) — Calgary Support Active';
      case 'Saskatchewan': return 'Mountain Time (CST/SK) — Regina Active';
      case 'Manitoba': return 'Central Time (CT) — Winnipeg Active';
      case 'Ontario':
      case 'Quebec': return 'Eastern Time (ET) — Toronto/Montreal Active';
      case 'New Brunswick':
      case 'Nova Scotia':
      case 'Prince Edward Island': return 'Atlantic Time (AT) — Halifax Active';
      case 'Newfoundland and Labrador': return 'Newfoundland Time (NT) — St. John\'s Active';
      default: return 'Eastern Time (ET)';
    }
  };

  const formatDateDisplay = (dateStr: string) => {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const year = parts[0];
      const monthIndex = parseInt(parts[1]) - 1;
      const day = parts[2];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${months[monthIndex]} ${day}, ${year}`;
    }
    return dateStr;
  };

  return (
    <section id="scheduler" className="py-20 bg-transparent border-t border-slate-200/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 font-sans">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            Active Operator Dispatch Demo
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900">
            Schedule a 10-Min AI Discovery Call
          </h2>
          <p className="mt-4 text-slate-650 font-medium text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Let's evaluate your website configuration and mapping. Book a time slot below to speak with an integration specialist. No high-pressure sales – just optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-4xl mx-auto">
          
          {/* SCHEDULER BOARD */}
          <div className="lg:col-span-12 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs relative">
            <span className="absolute top-4 right-6 text-[9px] font-mono text-slate-400 font-bold tracking-widest hidden sm:inline uppercase">
              CANADA TIME-LOCK SYSTEM
            </span>

            {bookingSuccess ? (
              <div className="py-12 flex flex-col items-center justify-center text-center max-w-md mx-auto font-sans">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-555/25 flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">Your Call is Confirmed!</h3>
                <p className="text-sm text-slate-655 font-semibold mt-3 leading-relaxed">
                  Excellent! We have locked you in for <strong>{selectedTimeSlot}</strong> on <strong>{formatDateDisplay(selectedDate)}</strong>. We will contact you at your provided numbers and send a calendar link right away.
                </p>
                <div className="mt-8 p-5 bg-slate-50 border border-slate-200 rounded-2xl text-left w-full space-y-2.5">
                  <div className="flex justify-between text-xs text-slate-500 font-bold">
                    <span>Selected Date:</span>
                    <span className="font-extrabold text-slate-800">{formatDateDisplay(selectedDate)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 font-bold">
                    <span>Specified Hour Slot:</span>
                    <span className="font-extrabold text-slate-800">{selectedTimeSlot}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 font-bold">
                    <span>Localized Zone Area:</span>
                    <span className="font-extrabold text-blue-650">{province} Support Channel</span>
                  </div>
                </div>
                <button
                  onClick={() => setBookingSuccess(false)}
                  className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs py-4 px-6 rounded-xl cursor-pointer hover:shadow-lg hover:shadow-blue-500/10 active:scale-95 transition-all text-center w-full"
                >
                  Book Another Strategy Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Steps Left Form */}
                <div className="lg:col-span-12 xl:col-span-7 text-left space-y-6">
                  <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2 tracking-tight uppercase">
                    <span className="text-blue-600 font-mono text-xs font-black">Sec. I:</span>
                    Contact & Province details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Contact Person Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Joh Doe"
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white rounded-xl text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Restoration Brand/Company
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="West Coast Remediation"
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white rounded-xl text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Company Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="604-555-0145"
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white rounded-xl text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Professional Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john.doe@gmail.com"
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white rounded-xl text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Province Selector for Timezones */}
                  <div>
                    <label className="block text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Your Canadian Province (We align to your local timezone)
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <select
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                        className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 focus:bg-white rounded-xl text-slate-805 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans appearance-none select-none"
                      >
                        {CANADIAN_PROVINCES.map((prov) => (
                          <option key={prov} value={prov}>
                            {prov}
                          </option>
                        ))}
                      </select>
                    </div>
                    {/* Timezone Helper Note */}
                    <p className="text-[11px] text-slate-500 mt-2.5 flex items-center gap-1 font-mono font-bold">
                      <Globe className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      {getTimezoneLabel(province)}
                    </p>
                  </div>
                </div>

                {/* Steps Right Date & Timespicker */}
                <div className="lg:col-span-12 xl:col-span-5 text-left space-y-6">
                  <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2 tracking-tight uppercase">
                    <span className="text-blue-600 font-mono text-xs font-black">Sec. II:</span>
                    Select Slot
                  </h3>

                  {/* Horizontal visual Cal choice */}
                  <div>
                    <label className="block text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Choose Available Date (June 2026)
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {UPCOMING_DATES.map((dateObj) => (
                        <button
                          key={dateObj.fullDate}
                          type="button"
                          onClick={() => setSelectedDate(dateObj.fullDate)}
                          className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                            selectedDate === dateObj.fullDate
                              ? 'bg-blue-50/70 border-blue-550/40 text-blue-800 shadow-3xs'
                              : 'bg-white border-slate-200 text-slate-500 hover:border-slate-305 hover:bg-slate-50/50'
                          }`}
                        >
                          <span className="text-[8px] uppercase font-mono tracking-wider font-bold">{dateObj.month}</span>
                          <span className="text-lg font-black block leading-none my-1">{dateObj.dateNum}</span>
                          <span className="text-[10px] text-slate-400 font-bold leading-none">{dateObj.dayName}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Clock choices */}
                  <div>
                    <label className="block text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Choose Available Time Spot
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {TIME_SLOTS.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`flex items-center gap-1.5 justify-center py-2.5 px-3 rounded-xl border text-xs font-black font-sans transition-all cursor-pointer ${
                            selectedTimeSlot === slot
                              ? 'bg-blue-50/70 border-blue-550/40 text-blue-805 shadow-3xs'
                              : 'bg-white border-slate-200 text-slate-500 hover:border-slate-305 hover:bg-slate-50/50'
                          }`}
                        >
                          <Clock className={`w-3.5 h-3.5 ${selectedTimeSlot === slot ? 'text-blue-600' : 'text-slate-400'}`} />
                          <span>{slot}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-650 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 px-6 rounded-xl cursor-pointer hover:shadow-lg hover:shadow-blue-500/10 active:scale-[0.98] transition-all text-center text-sm font-sans"
                    >
                      Lock In Strategy Call
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </form>
            )}
          </div>

          {/* PERSISTENT browser bookings list */}
          {savedBookings.length > 0 && (
            <div className="lg:col-span-12 mt-4 bg-white border border-slate-200 p-6 rounded-3xl text-left shadow-xs font-sans">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-4 border-b border-slate-100 pb-3 font-mono">
                <CalendarCheck className="w-4 h-4 text-blue-500 shrink-0" />
                Active Strategy Bookings (Stored in this Browser)
              </h4>
              <div className="space-y-3">
                {savedBookings.map((b) => (
                  <div
                    key={b.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-2xl gap-4 hover:border-slate-300 transition-colors"
                  >
                    <div className="space-y-1.5 text-left">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900 leading-none">{b.companyName}</span>
                        <span className="text-[8px] bg-blue-500/5 border border-blue-500/10 text-blue-700 px-2 py-0.5 rounded-full font-black uppercase tracking-wider font-mono">{b.province} Zone</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-1 text-xs text-slate-500 font-semibold font-sans">
                        <span className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-slate-400" />
                          {b.name}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {formatDateDisplay(b.date)}
                        </span>
                        <span className="flex items-center gap-1.5 font-bold text-blue-600">
                          <Clock className="w-3.5 h-3.5 text-blue-500" />
                          {b.timeSlot}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteBooking(b.id)}
                      className="p-2 text-slate-400 hover:text-rose-500 bg-white border border-slate-200 hover:border-rose-200 rounded-xl transition-all cursor-pointer self-end sm:self-center"
                      title="Cancel Strategy Entry"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
