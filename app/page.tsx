"use client";

import { useState } from "react";
import { Bell } from "lucide-react";
import { VendorTab } from "./types/vendor";

import Sidebar from "./components/navigation/Sidebar";
import BottomTabs from "./components/navigation/BottomTab";

import DashboardTab from "./components/tabs/DashboardTab";
import PaymentsTab from "./components/tabs/PaymentsTab";
import AlertsTab from "./components/tabs/AlertsTab";
import SettingsTab from "./components/tabs/SettingsTab";

export default function VendorApp() {
  const [activeTab, setActiveTab] = useState<VendorTab>("dashboard");

  return (
    <div className="min-h-screen flex bg-[var(--background)] text-[var(--foreground)]">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 flex flex-col">
        <header className="p-4 border-b border-white/10 flex justify-between items-center">
          <h1 className="text-lg font-semibold capitalize">{activeTab}</h1>
          <Bell className="w-6 h-6" />
        </header>

        <main className="flex-1 p-4">
          {activeTab === "dashboard" && <DashboardTab />}
          {activeTab === "payments" && <PaymentsTab />}
          {activeTab === "alerts" && <AlertsTab />}
          {activeTab === "settings" && <SettingsTab />}
        </main>
      </div>

      <BottomTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
