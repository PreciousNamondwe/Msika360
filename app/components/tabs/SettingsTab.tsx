import React from 'react';
import { 
  User, 
  Globe, 
  Bell, 
  ShieldCheck, 
  ChevronRight, 
  LogOut,
  Camera,
  CreditCard,
  ChevronLeft,
  LucideIcon
} from "lucide-react";

/**
 * Interface for the SettingsTab props
 */
interface SettingsTabProps {
  onBack?: () => void;
}

/**
 * Interface for the SettingItem sub-component props
 */
interface SettingItemProps {
  icon: LucideIcon;
  label: string;
  desc: string;
}

export default function SettingsTab({ onBack }: SettingsTabProps) {
  return (
    <div className="min-h-screen  bg-[var(--background)] animate-in fade-in slide-in-from-right-4 duration-300 pb-20 font-sans">

      <div className="max-w-2xl mx-auto p-6 space-y-8">
        {/* Profile Card */}
        <div className="bg-[var(--background)] rounded-[2.5rem] p-8 border border-[var(--foreground)] shadow-sm flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <div className="w-24 h-24 bg-[var(--background)] rounded-[2rem] flex items-center justify-center border-4 border-[var(--foreground)] shadow-lg overflow-hidden">
              <User size={40} className="text-[var(--foreground)]" />
            </div>
            <button className="absolute -bottom-2 -right-2 p-2 bg-[var(--foreground)] text-white rounded-xl shadow-lg border-2 border-[var(--foreground)] hover:scale-110 transition-transform">
              <Camera size={14} />
            </button>
          </div>
          <div>
            <h3 className="text-xl font-black text-[var(--foreground)]">Chifundo Banda</h3>
            <p className="text-xs font-bold text-[var(--foreground)] uppercase tracking-widest">Stall #B-203 • Limbe Market</p>
          </div>
        </div>

        {/* Setting Groups */}
        <div className="space-y-6">
          <section>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--foreground)] mb-4 px-4">Personalization</h4>
            <div className="bg-[var(--background)] rounded-[2.5rem] border border-[var(--foreground)] shadow-sm overflow-hidden divide-y divide-slate-50">
              <SettingItem 
                icon={User} 
                label="Profile Info" 
                desc="Edit contact number & stall details" 
              />
              <SettingItem 
                icon={Globe} 
                label="Language" 
                desc="Current: English (UK)" 
              />
              <SettingItem 
                icon={Bell} 
                label="Notifications" 
                desc="Manage SMS payment alerts" 
              />
            </div>
          </section>

          <section>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--foreground)] mb-4 px-4">Payments & Security</h4>
            <div className="bg-[var(--background)] rounded-[2.5rem] border border-[var(--background)] shadow-sm overflow-hidden divide-y divide-slate-50">
              <SettingItem 
                icon={CreditCard} 
                label="Payment Methods" 
                desc="Linked Mobile Money Wallets" 
              />
              <SettingItem 
                icon={ShieldCheck} 
                label="Account PIN" 
                desc="Change your 4-digit security PIN" 
              />
            </div>
          </section>
        </div>

        {/* Action Footer */}
        <div className="pt-4 space-y-4">
          <button className="w-full py-5 bg-red-50 text-red-500 rounded-[2rem] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-red-100 transition-all active:scale-[0.98]">
            <LogOut size={18} /> Logout Session
          </button>
          
          <p className="text-center text-[10px] font-bold text-slate-300 uppercase tracking-widest">
            Msika360 Version 2.4.0
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Sub-component for individual setting rows
 */
function SettingItem({ icon: Icon, label, desc }: SettingItemProps) {
  return (
    <button className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-all text-left group">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-2xl bg-[var(--background)] group-hover:bg-[var(--background)] group-hover:text-white transition-all shadow-sm">
          <Icon size={20} />
        </div>
        <div>
          <p className="font-bold text-[var(--background)] group-hover:translate-x-1 transition-transform">{label}</p>
          <p className="text-[10px] font-bold text-[var(--foreground)] uppercase tracking-tight">{desc}</p>
        </div>
      </div>
      <ChevronRight size={18} className="text-slate-300 group-hover:text-slate-900 transition-colors" />
    </button>
  );
}