import React, { useState } from 'react';
import { 
  CreditCard, 
  History, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Smartphone,
  Info,
  ChevronRight,
  Receipt,
  Download,
  QrCode,
  Zap,
  MessageCircle,
  Clock,
  CalendarDays,
  Repeat
} from "lucide-react";

interface Transaction {
  id: string;
  date: string;
  amount: string;
  status: 'Completed' | 'Pending';
  ref: string;
}

type Frequency = 'daily' | 'weekly' | 'monthly';

export default function PaymentsTab() {
  const [paymentStep, setPaymentStep] = useState<'selection' | 'processing' | 'success'>('selection');
  const [frequency, setFrequency] = useState<Frequency>('daily');

  const transactions: Transaction[] = [
    { id: '1', date: '24 May 2024', amount: 'MWK 400', status: 'Completed', ref: 'TXN-98342' },
    { id: '2', date: '23 May 2024', amount: 'MWK 400', status: 'Completed', ref: 'TXN-98110' },
    { id: '3', date: '22 May 2024', amount: 'MWK 400', status: 'Completed', ref: 'TXN-97954' },
  ];

  const getAmount = () => {
    switch(frequency) {
      case 'daily': return 'MWK 400';
      case 'weekly': return 'MWK 2800';
      case 'monthly': return 'MWK 8400';
      default: return 'MWK 400';
    }
  };

  const handlePay = () => {
    setPaymentStep('processing');
    setTimeout(() => setPaymentStep('success'), 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-4 md:p-8 pb-32 transition-colors duration-300">
      <style>{`
        :root { --background: #ffffff; --foreground: #0f172a; --card-bg: #ffffff; --accent: #4f46e5; }
        @media (prefers-color-scheme: dark) { :root { --background: #09090b; --foreground: #f8fafc; --card-bg: #111113; --accent: #818cf8; } }
      `}</style>

      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Minimalist Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1 w-8 bg-[var(--foreground)] rounded-full"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50">Revenue Portal</span>
            </div>
            <h1 className="text-3xl font-black tracking-tight italic">Msika<span className="opacity-40">360</span> PAY</h1>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[var(--background)] bg-[var(--foreground)]/10 flex items-center justify-center text-[10px]">
                    <UserIcon size={12} />
                  </div>
                ))}
             </div>
             <p className="opacity-60 text-xs">4.2k active vendors today</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Action Hub */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* The Payment Surface */}
            <div className="relative group overflow-hidden rounded-[2.5rem] border border-[var(--foreground)]/10 bg-[var(--card-bg)] shadow-2xl shadow-[var(--foreground)]/5 transition-all hover:border-[var(--foreground)]/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--foreground)]/5 to-transparent rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-[var(--foreground)]/10 transition-colors" />
              
              <div className="relative p-8 md:p-12">
                {paymentStep === 'selection' && (
                  <div className="space-y-12">
                    {/* Frequency Selector */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-2 bg-[var(--foreground)]/5 rounded-3xl border border-[var(--foreground)]/5">
                      <div className="flex items-center gap-3 px-4">
                        <Repeat className="w-4 h-4 opacity-40" />
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Schedule</span>
                      </div>
                      <div className="flex w-full sm:w-auto p-1 bg-[var(--background)] rounded-2xl shadow-inner gap-1">
                        {(['daily', 'weekly', 'monthly'] as Frequency[]).map((f) => (
                          <button
                            key={f}
                            onClick={() => setFrequency(f)}
                            className={`flex-1 sm:px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                              frequency === f 
                              ? 'bg-[var(--foreground)] text-[var(--background)] shadow-lg' 
                              : 'opacity-40 hover:opacity-100'
                            }`}
                          >
                            {f}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div className="space-y-6 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-bold uppercase tracking-wider">
                          <Clock className="w-3 h-3" /> Next {frequency} due
                        </div>
                        <div className="space-y-1">
                          <h2 className="text-5xl md:text-6xl font-black tracking-tighter">{getAmount()}</h2>
                          <p className="text-[10px] font-bold opacity-40 uppercase tracking-[0.2em]">Accumulated total</p>
                        </div>
                        <p className="text-sm leading-relaxed text-[var(--foreground)]/60">
                          Official market fee for <span className="text-[var(--foreground)] font-bold">Stall #B-203</span>.
                          Direct digital settlement ensures transparency and better market services.
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                          <div className="flex items-center gap-1.5 text-[10px] font-bold opacity-40">
                            <ShieldCheck size={14} /> ENCRYPTED
                          </div>
                          <div className="flex items-center gap-1.5 text-[10px] font-bold opacity-40">
                            <Zap size={14} /> INSTANT
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <button 
                          onClick={handlePay}
                          className="w-full bg-[var(--foreground)] text-[var(--background)] py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-[var(--foreground)]/20"
                        >
                          <Smartphone className="w-6 h-6" /> Pay with Mobile
                        </button>
                        <button className="w-full bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-[var(--foreground)]/10 transition-all">
                          <QrCode className="w-6 h-6" /> Scan QR Code
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {paymentStep === 'processing' && (
                  <div className="py-20 flex flex-col items-center text-center space-y-6 animate-in fade-in duration-500">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full border-4 border-[var(--foreground)]/5 border-t-[var(--foreground)] animate-spin" />
                      <Smartphone className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Waiting for Approval</h3>
                      <p className="text-sm text-[var(--foreground)]/60">Please check your phone for the USSD prompt</p>
                    </div>
                  </div>
                )}

                {paymentStep === 'success' && (
                  <div className="py-10 flex flex-col items-center text-center animate-in slide-in-from-bottom-8 duration-500">
                    <div className="w-24 h-24 bg-green-500 rounded-[2rem] rotate-12 flex items-center justify-center shadow-2xl shadow-green-500/40 mb-8">
                      <CheckCircle2 className="w-12 h-12 text-white -rotate-12" />
                    </div>
                    <div className="space-y-2 mb-8">
                      <h2 className="text-3xl font-black italic">RECEIPT ISSUED</h2>
                      <p className="text-sm text-[var(--foreground)]/60 tracking-widest font-mono">TXN: #98342-CONFIRMED</p>
                    </div>
                    <div className="w-full max-w-sm bg-[var(--foreground)]/5 rounded-3xl p-6 backdrop-blur-md border border-[var(--foreground)]/5">
                       <div className="flex justify-between items-center mb-4 pb-4 border-b border-[var(--foreground)]/10">
                          <span className="text-xs font-bold opacity-40">STALL NO</span>
                          <span className="text-sm font-black">B-203</span>
                       </div>
                       <div className="flex justify-between items-center mb-4 pb-4 border-b border-[var(--foreground)]/10">
                          <span className="text-xs font-bold opacity-40">SETTLED AS</span>
                          <span className="text-sm font-black uppercase">{frequency} Fee</span>
                       </div>
                       <div className="flex justify-between items-center mb-4 pb-4 border-b border-[var(--foreground)]/10">
                          <span className="text-xs font-bold opacity-40">AMOUNT</span>
                          <span className="text-sm font-black italic underline decoration-2 underline-offset-4">{getAmount()}</span>
                       </div>
                       <button className="w-full py-3 bg-[var(--foreground)]/10 hover:bg-[var(--foreground)]/20 rounded-xl transition-all flex items-center justify-center gap-2 font-bold text-sm">
                          <Download size={16} /> Save Receipt
                       </button>
                    </div>
                    <button 
                      onClick={() => setPaymentStep('selection')}
                      className="mt-8 text-xs font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
                    >
                      Dismiss Transaction
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Receipt Timeline */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-xs font-black uppercase tracking-widest opacity-40">Verification History</h3>
                <span className="text-[10px] font-bold text-green-500 flex items-center gap-1">
                   <ShieldCheck size={10} /> Validated for 2024
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {transactions.map((txn) => (
                  <div key={txn.id} className="group p-6 rounded-3xl border border-[var(--foreground)]/10 bg-[var(--card-bg)] hover:border-[var(--foreground)]/30 transition-all cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 rounded-2xl bg-[var(--foreground)]/5 group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)] transition-all">
                        <Receipt size={20} />
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-black italic">{txn.amount}</p>
                        <p className="text-[10px] font-bold opacity-40">{txn.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-[var(--foreground)]/5">
                      <span className="text-[10px] font-mono opacity-50">{txn.ref}</span>
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-[8px] font-black uppercase">
                        Verified
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Context Panel */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Feedback & Service Delivery Link */}
            <div className="p-8 rounded-[2rem] bg-indigo-600 text-white space-y-6 shadow-xl shadow-indigo-600/20">
              <div className="p-3 bg-white/20 rounded-2xl w-fit">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Link Payment to Progress</h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  Paid your fees but found an issue? Report sanitation or security issues directly to the council here.
                </p>
              </div>
              <button className="w-full py-4 bg-white text-indigo-600 rounded-2xl font-bold text-sm hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                Submit Feedback <ArrowRight size={16} />
              </button>
            </div>

            {/* Compliance Stats */}
            <div className="p-8 rounded-[2rem] border border-[var(--foreground)]/10 bg-[var(--card-bg)] space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Your Compliance Score</h4>
              <div className="relative w-32 h-32 mx-auto">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" className="opacity-10" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" strokeDasharray="283" strokeDashoffset="28" strokeLinecap="round" className="text-green-500" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black">90%</span>
                  <span className="text-[8px] font-bold opacity-40 uppercase">A-Grade</span>
                </div>
              </div>
              <p className="text-xs text-center text-[var(--foreground)]/60 leading-relaxed">
                High scores unlock better stall placements and lower interest on local grants.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Simple Helper Icon
function UserIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  );
}