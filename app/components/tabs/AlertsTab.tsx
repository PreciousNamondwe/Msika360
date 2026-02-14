import React from 'react';
import { 
  Bell, 
  Megaphone, 
  Calendar, 
  ChevronRight, 
  Info, 
  AlertTriangle, 
  Construction, 
  Trash2, 
  ShieldAlert,
  ArrowRight,
  MessageSquare,
  History,
  CheckCircle2,
  Clock,
  Sparkles
} from "lucide-react";

interface AlertItem {
  id: string;
  type: 'emergency' | 'reminder' | 'announcement';
  title: string;
  message: string;
  time: string;
  isNew: boolean;
  actionLabel?: string;
}

export default function AlertsTab() {
  const alerts: AlertItem[] = [
    {
      id: '1',
      type: 'reminder',
      title: 'Action Required: Stall Fee',
      message: 'Payment for Stall #B-203 (MWK 2,000) is due. Maintain your compliance rating to qualify for the upcoming Vendor Grant Program.',
      time: 'Just now',
      isNew: true,
      actionLabel: 'Pay Now'
    },
    {
      id: '2',
      type: 'emergency',
      title: 'Critical: Water Outage',
      message: 'Emergency pipe repairs in Sector B. Water services will be suspended from 14:00 - 16:00. Council tankers are stationed at North Gate.',
      time: '45m ago',
      isNew: true,
    },
    {
      id: '3',
      type: 'announcement',
      title: 'New Security Protocol',
      message: 'Starting Monday, all night-shift vendors must verify their digital ID at the gate. This is part of the "Safe Msika" initiative.',
      time: '3h ago',
      isNew: false,
      actionLabel: 'Read Protocol'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-4 md:p-8 pb-32 transition-colors duration-300">

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Standardized Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--foreground)]/5 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex space-x-1">
                <span className="h-1.5 w-1.5 bg-[var(--foreground)] rounded-full animate-bounce"></span>
                <span className="h-1.5 w-1.5 bg-[var(--foreground)]/40 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="h-1.5 w-1.5 bg-[var(--foreground)]/20 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Live Notification Hub</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight italic">Msika<span className="opacity-30">360</span> ALERTS</h1>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-black opacity-40 uppercase tracking-widest">System Health</p>
              <p className="text-xs font-bold text-green-500 flex items-center justify-end gap-1">
                <CheckCircle2 size={12} /> All nodes active
              </p>
            </div>
            <div className="h-10 w-[1px] bg-[var(--foreground)]/10 hidden sm:block" />
            <div className="flex items-center gap-3 bg-[var(--foreground)]/5 px-4 py-2 rounded-2xl border border-[var(--foreground)]/5">
               <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-[var(--background)] bg-[var(--foreground)]/10 flex items-center justify-center text-[10px]">
                      <UserIcon size={10} />
                    </div>
                  ))}
               </div>
               <p className="text-[10px] font-bold opacity-60">4.2k Active</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Feed Section */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-black italic tracking-tight">Recent Activity</h2>
              <div className="h-[1px] flex-1 bg-[var(--foreground)]/5" />
            </div>

            <div className="space-y-6">
              {alerts.map((alert) => (
                <div 
                  key={alert.id} 
                  className={`group relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:rounded-full ${
                    alert.isNew ? 'before:bg-[var(--foreground)]' : 'before:bg-[var(--foreground)]/10 opacity-70'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-[-5px] top-2 w-3 h-3 rounded-full border-2 border-[var(--background)] ${
                    alert.isNew ? 'bg-[var(--foreground)]' : 'bg-[var(--foreground)]/20'
                  }`} />

                  <div className={`p-6 rounded-[2rem] border transition-all duration-300 ${
                    alert.isNew 
                    ? 'bg-[var(--card-bg)] border-[var(--foreground)]/10 shadow-2xl shadow-[var(--foreground)]/5 urgent-glow' 
                    : 'bg-[var(--card-bg)]/30 border-transparent hover:border-[var(--foreground)]/10'
                  }`}>
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                           <span className={`px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest ${
                             alert.type === 'emergency' ? 'bg-[var(--foreground)] text-white' :
                             alert.type === 'reminder' ? 'bg-[var(--foreground)] text-white' :
                             'bg-indigo-500 text-white'
                           }`}>
                             {alert.type}
                           </span>
                           <span className="text-[10px] font-bold opacity-40">{alert.time}</span>
                        </div>
                        <h3 className="text-xl font-black tracking-tight">{alert.title}</h3>
                        <p className="text-sm leading-relaxed text-[var(--foreground)]/60 max-w-2xl">
                          {alert.message}
                        </p>
                      </div>
                      
                      {alert.actionLabel && (
                        <button className="flex-shrink-0 self-start bg-[var(--foreground)] text-[var(--background)] px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:scale-105 active:scale-95 transition-all">
                          {alert.actionLabel} <ArrowRight size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full py-4 rounded-2xl border-2 border-dashed border-[var(--foreground)]/10 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 hover:border-[var(--foreground)]/30 transition-all">
              Load archived notifications
            </button>
          </div>

          {/* Contextual Intelligence Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Market Health & Service Delivery */}
            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-blue-700 text-white shadow-2xl shadow-indigo-500/20 relative overflow-hidden">
              <Sparkles className="absolute top-4 right-4 opacity-20" size={40} />
              <div className="relative z-10 space-y-6">
                <div className="space-y-1">
                  <h3 className="text-2xl font-black italic">Market Impact</h3>
                  <p className="text-xs opacity-70">Services funded by your fees</p>
                </div>
                
                <div className="space-y-4">
                   <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold">
                         <span>Sanitation Target</span>
                         <span>85%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                         <div className="h-full bg-white w-[85%]" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold">
                         <span>Lighting Installation</span>
                         <span>40%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                         <div className="h-full bg-white w-[40%]" />
                      </div>
                   </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                   <button className="w-full py-4 bg-white text-indigo-700 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                      Report Issue <MessageSquare size={14} />
                   </button>
                </div>
              </div>
            </div>

            {/* Council Calendar - Modern Minimalist */}
            <div className="p-8 rounded-[2.5rem] bg-[var(--card-bg)] border border-[var(--foreground)]/10 space-y-6 shadow-sm">
              <div className="flex items-center justify-between">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Governance Calendar</h4>
                 <Calendar size={16} className="opacity-20" />
              </div>
              
              <div className="space-y-6">
                 {[
                   { date: '28', month: 'May', title: 'Sanitation Audit', desc: 'Sectors A-C' },
                   { date: '02', month: 'Jun', title: 'Town Hall', desc: 'New stall policies' }
                 ].map((event, idx) => (
                   <div key={idx} className="flex gap-4 group cursor-pointer">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[var(--foreground)]/5 flex flex-col items-center justify-center border border-[var(--foreground)]/5 group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)] transition-all">
                         <span className="text-[8px] font-black uppercase tracking-tighter opacity-60 leading-none">{event.month}</span>
                         <span className="text-xl font-black leading-none mt-1">{event.date}</span>
                      </div>
                      <div className="space-y-1">
                         <h5 className="text-sm font-black group-hover:underline decoration-2 underline-offset-4">{event.title}</h5>
                         <p className="text-[10px] opacity-40 font-bold uppercase tracking-wider">{event.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
              
              <div className="pt-4 border-t border-[var(--foreground)]/5">
                 <p className="text-[10px] leading-relaxed text-[var(--foreground)]/40 italic">
                   "Your digital presence ensures transparency in the Blantyre Market ecosystem."
                 </p>
              </div>
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