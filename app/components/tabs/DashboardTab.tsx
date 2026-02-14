import { Wallet, CheckCircle, AlertCircle, User } from "lucide-react";

export default function DashboardTab() {
  return (
    <section className="space-y-6 p-4">


      {/* KPI Cards Grid: 2x2 on mobile, 4 in row on lg */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard
          title="Today's Fee"
          value="MWK 2,000"
          icon={<Wallet />}
          bgColor="bg-[var(--background)]"
        />
        <StatCard
          title="Payment Status"
          value="PAID"
          icon={<CheckCircle />}
          bgColor="bg-[var(--background)]"
        />
        <StatCard
          title="Outstanding"
          value="MWK 0"
          icon={<AlertCircle />}
          bgColor="bg-[var(--background)]"
        />
        <StatCard
          title="Vendor ID"
          value="VND-2031"
          icon={<User />}
          bgColor="bg-[var(--background)]"
        />
      </div>

{/* Recent Activities */}
<div className="bg-[var(--background)] rounded-2xl p-4 space-y-4 shadow-md">
  {/* Header */}
  <div className="flex items-center justify-between border-b border-gray-700 pb-2">
    <h3 className="text-[var(--foreground)] font-semibold text-lg">Recent Activity</h3>
    <span className="text-xs text-gray-400">Latest updates</span>
  </div>

  {/* Activity List */}
  <ul className="space-y-2">
    <ActivityItem
      label="Market Fee Paid"
      meta="MWK 2,000 • Today"
    />
    <ActivityItem
      label="Receipt Generated"
      meta="Transaction ID #98342"
    />
    <ActivityItem
      label="SMS Confirmation Sent"
      meta="Successfully delivered"
    />
  </ul>
</div>


    </section>
  );
}

/* ---------- Components ---------- */

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  bgColor: string;
}

function StatCard({ title, value, icon, bgColor }: StatCardProps) {
  return (
    <div className={`rounded-2xl p-4 flex flex-col items-start justify-between text-[var(--foreground)] ${bgColor} shadow-lg`}>
      <div className="p-3 rounded-full bg-white/20 mb-3 text-[var(--foreground)]">
        {icon}
      </div>
      <p className="text-sm opacity-80">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}

function ActivityItem({ label, meta }: { label: string; meta: string }) {
  return (
    <li className="flex justify-between items-center">
      <span>{label}</span>
      <span className="opacity-60 text-xs">{meta}</span>
    </li>
  );
}
