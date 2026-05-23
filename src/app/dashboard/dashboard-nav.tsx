"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Overview", exact: true },
  { href: "/dashboard/reports", label: "Reports", exact: false },
  { href: "/dashboard/audience", label: "Audience", exact: false },
  { href: "/dashboard/campaigns", label: "Campaigns", exact: false },
  { href: "/dashboard/account", label: "Account", exact: false },
  { href: "/dashboard/settings", label: "Settings", exact: false },
];

export function DashboardNav() {
  const pathname = usePathname();

  function isActive(item: (typeof navItems)[0]) {
    if (item.exact) return pathname === item.href;
    return pathname.startsWith(item.href);
  }

  return (
    <nav className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0" aria-label="Dashboard navigation">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`whitespace-nowrap rounded-none px-3 py-2 text-sm font-medium transition-colors ${
            isActive(item)
              ? "bg-accent/10 text-accent"
              : "text-body hover:text-foreground hover:bg-surface"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
