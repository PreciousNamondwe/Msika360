import { ReactNode } from "react";
import { VendorTab } from "@/app/types/vendor";

interface NavItemProps {
  icon: ReactNode;
  label: string;
  tab: VendorTab;
  activeTab: VendorTab;
  onClick: (tab: VendorTab) => void;
}

export default function NavItem({
  icon,
  label,
  tab,
  activeTab,
  onClick,
}: NavItemProps) {
  const isActive = tab === activeTab;

  return (
    <button
      onClick={() => onClick(tab)}
      className={`flex flex-col md:flex-row items-center gap-1 md:gap-3 text-xs md:text-sm
        ${isActive ? "font-semibold opacity-100" : "opacity-60 hover:opacity-100"}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
