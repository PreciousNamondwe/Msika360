"use client";

import { Home, Wallet, Bell, Settings, Users } from "lucide-react";
import { ReactNode } from "react";

interface NavItemProps {
  icon: ReactNode;
  label: string;
}

interface CardProps {
  icon: ReactNode;
  title: string;
  value: string;
}

export default function VendorApp() {
  return (
    <div className="min-h-screen flex bg-[var(--background)] text-[var(--foreground)]">
      
      {/* Sidebar (Desktop Only) */}
      <aside className="hidden md:flex w-64 flex-col border-r border-white/10 p-4">
        <h2 className="text-xl font-bold mb-6">Msika360</h2>
        <nav className="space-y-4">
          <NavItem icon={<Home />} label="Dashboard" />
          <NavItem icon={<Wallet />} label="Payments" />
          <NavItem icon={<Bell />} label="Alerts" />
          <NavItem icon={<Settings />} label="Settings" />
        </nav>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        
        {/* Header */}
        <header className="p-4 border-b border-white/10 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Vendor Dashboard</h1>
          <Bell className="w-6 h-6" />
        </header>

        {/* Content */}
        <main className="flex-1 p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Today’s Fee" value="MWK 2,000" icon={<Wallet />} />
          <Card title="Payment Status" value="PAID" icon={<Home />} />
          <Card title="Vendor ID" value="#VND-2031" icon={<Users />} />
        </main>
      </div>

      {/* Bottom Tabs (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-[var(--background)] border-t border-white/10">
        <div className="flex justify-around py-3">
          <NavItem icon={<Home />} label="Home" />
          <NavItem icon={<Wallet />} label="Pay" />
          <NavItem icon={<Bell />} label="Alerts" />
          <NavItem icon={<Settings />} label="Settings" />
        </div>
      </nav>
    </div>
  );
}

function Card({ title, value, icon }: CardProps) {
  return (
    <div className="border border-white/10 rounded-2xl p-4 flex items-center gap-4">
      <div className="p-3 rounded-full bg-[var(--foreground)] text-[var(--background)]">
        {icon}
      </div>
      <div>
        <p className="text-sm opacity-70">{title}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
}

function NavItem({ icon, label }: NavItemProps) {
  return (
    <button className="flex flex-col md:flex-row items-center gap-1 md:gap-3 text-xs md:text-sm opacity-70 hover:opacity-100">
      {icon}
      <span>{label}</span>
    </button>
  );
}
