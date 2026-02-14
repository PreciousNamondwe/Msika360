import { Home, Wallet, Bell, Settings } from "lucide-react";
import NavItem from "./NavItem";
import { VendorTab } from "@/app/types/vendor";

interface SidebarProps {
  activeTab: VendorTab;
  setActiveTab: (tab: VendorTab) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-white/10 p-4">
      <h2 className="text-xl font-bold mb-6">Msika360</h2>
      <nav className="space-y-4">
        <NavItem icon={<Home />} label="Dashboard" tab="dashboard" activeTab={activeTab} onClick={setActiveTab} />
        <NavItem icon={<Wallet />} label="Payments" tab="payments" activeTab={activeTab} onClick={setActiveTab} />
        <NavItem icon={<Bell />} label="Alerts" tab="alerts" activeTab={activeTab} onClick={setActiveTab} />
        <NavItem icon={<Settings />} label="Settings" tab="settings" activeTab={activeTab} onClick={setActiveTab} />
      </nav>
    </aside>
  );
}
