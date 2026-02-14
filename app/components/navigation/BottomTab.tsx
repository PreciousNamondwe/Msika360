import { Home, Wallet, Bell, Settings } from "lucide-react";
import NavItem from "./NavItem";
import { VendorTab } from "@/app/types/vendor";

interface BottomTabsProps {
  activeTab: VendorTab;
  setActiveTab: (tab: VendorTab) => void;
}

export default function BottomTabs({ activeTab, setActiveTab }: BottomTabsProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-[var(--background)] border-t border-white/10">
      <div className="flex justify-around py-3">
        <NavItem icon={<Home />} label="Home" tab="dashboard" activeTab={activeTab} onClick={setActiveTab} />
        <NavItem icon={<Wallet />} label="Pay" tab="payments" activeTab={activeTab} onClick={setActiveTab} />
        <NavItem icon={<Bell />} label="Alerts" tab="alerts" activeTab={activeTab} onClick={setActiveTab} />
        <NavItem icon={<Settings />} label="Settings" tab="settings" activeTab={activeTab} onClick={setActiveTab} />
      </div>
    </nav>
  );
}
