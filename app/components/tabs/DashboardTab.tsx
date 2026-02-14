import React from 'react';
import { 
  Wallet, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  ArrowUpRight, 
  MoreHorizontal,
  Activity,
  Receipt,
  MessageSquare,
  UserIcon
} from "lucide-react";

// Types for our components
interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string; // Optional "trend" for pro look
}

interface ActivityItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  amount?: string;
  time: string;
}

export default function DashboardTab() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-5 md:p-8 font-sans transition-colors duration-300">
      <section className="max-w-7xl mx-auto space-y-8">
        
         <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
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

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Today's Fee"
            value="MWK 400"
            icon={<Wallet className="w-6 h-6" />}
            trend="+12% from yesterday"
          />
          <StatCard
            title="Payment Status"
            value="PAID"
            icon={<CheckCircle2 className="w-6 h-6" />}
          />
          <StatCard
            title="Outstanding"
            value="MWK 0"
            icon={<AlertCircle className="w-6 h-6" />}
          />
          <StatCard
            title="Vendor ID"
            value="VND-2031"
            icon={<User className="w-6 h-6" />}
          />
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-18">
          
          {/* Recent Activity Feed - Spans 2 columns on large screens if we had charts, 
              but since we just have the list, let's keep it clean or full width based on design preference. 
              Here I'll make it full width container designed elegantly. */}
          <div className="lg:col-span-3">
            <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--foreground)]/10 shadow-sm overflow-hidden">
              
              {/* Card Header */}
              <div className="p-6 border-b border-[var(--foreground)]/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-[var(--foreground)]/5 text-[var(--foreground)]">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-none">Recent Activity</h3>
                    <p className="text-xs text-[var(--foreground)]/50 mt-1">Latest financial updates</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-[var(--foreground)]/5 rounded-full transition-colors">
                  <MoreHorizontal className="w-5 h-5 text-[var(--foreground)]/60" />
                </button>
              </div>

              {/* Activity List */}
              <div className="p-5">
                <ul className="space-y-5">
                  <ActivityItem
                    title="Market Fee Paid"
                    subtitle="Daily stall collection collected via mobile money"
                    amount="- MWK 2,000"
                    time="10:42 AM"
                    icon={<Wallet className="w-5 h-5" />}
                  />
                  <ActivityItem
                    title="Receipt Generated"
                    subtitle="Transaction ID #98342 available for download"
                    time="10:43 AM"
                    icon={<Receipt className="w-5 h-5" />}
                  />
                  <ActivityItem
                    title="SMS Confirmation Sent"
                    subtitle="Delivery status: Delivered to +265 99..."
                    time="10:44 AM"
                    icon={<MessageSquare className="w-5 h-5" />}
                  />
                </ul>
              </div>
              
              {/* Footer / View All */}
              <div className="bg-[var(--foreground)]/5 p-4 text-center cursor-pointer hover:bg-[var(--foreground)]/10 transition-colors">
                <span className="text-sm font-semibold text-[var(--foreground)]/80">View Full Transaction History</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Sub Components                               */
/* -------------------------------------------------------------------------- */

function StatCard({ title, value, icon, trend }: StatCardProps) {
  return (
    <div className="group relative bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--foreground)]/10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden">
      
      {/* Background decoration for pro feel */}
      <div className="absolute top-0 right-0 p-8 rounded-bl-full bg-[var(--foreground)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex flex-col justify-between h-full space-y-4">
        <div className="flex justify-between items-start">
          <div className="p-3 rounded-xl bg-[var(--foreground)]/5 text-[var(--foreground)] ring-1 ring-[var(--foreground)]/10">
            {icon}
          </div>
          {trend && (
            <span className="flex items-center text-[10px] font-bold bg-[var(--foreground)]/10 text-[var(--foreground)] px-2 py-1 rounded-full">
              {trend} <ArrowUpRight className="w-3 h-3 ml-1" />
            </span>
          )}
        </div>
        
        <div>
          <p className="text-sm font-medium text-[var(--foreground)]/60 tracking-wide uppercase">
            {title}
          </p>
          <h2 className="text-2xl font-extrabold text-[var(--foreground)] mt-1 tracking-tight">
            {value}
          </h2>
        </div>
      </div>
    </div>
  );
}

function ActivityItem({ title, subtitle, amount, time, icon }: ActivityItemProps) {
  return (
    <li className="group flex items-start gap-4 p-4 rounded-xl hover:bg-[var(--foreground)]/5 transition-colors duration-200">
      
      {/* Icon / Avatar */}
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--background)] border border-[var(--foreground)]/10 text-[var(--foreground)] group-hover:border-[var(--foreground)]/30 transition-colors shadow-sm">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-12 gap-2 md:items-center">
        <div className="md:col-span-8">
          <p className="text-sm font-bold text-[var(--foreground)] truncate">{title}</p>
          <p className="text-xs text-[var(--foreground)]/60 mt-0.5">{subtitle}</p>
        </div>
        
        {/* Meta Data (Right Side) */}
        <div className="md:col-span-4 flex md:flex-col md:items-end items-center justify-between mt-2 md:mt-0">
          {amount && (
            <span className="text-sm font-bold text-[var(--foreground)]">
              {amount}
            </span>
          )}
          <span className="text-[10px] font-medium text-[var(--foreground)]/40 bg-[var(--foreground)]/5 px-2 py-1 rounded-md">
            {time}
          </span>
        </div>
      </div>
    </li>
  );
}