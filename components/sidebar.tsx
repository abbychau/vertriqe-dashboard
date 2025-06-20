"use client"

import { Home, Briefcase, Users, Zap } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogoutButton } from "./logout-button"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    {
      href: "/",
      icon: Home,
      label: "Dashboard",
      isActive: pathname === "/",
    },
    {
      href: "/energy",
      icon: Zap,
      label: "Energy Dashboard",
      isActive: pathname === "/energy",
    },
    {
      href: "/performance",
      icon: () => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      label: "Performance",
      isActive: pathname === "/performance",
    },
    {
      href: "/management",
      icon: Briefcase,
      label: "Management",
      isActive: pathname === "/management",
    },
  ]

  return (
    <div className="w-16 bg-slate-900 h-full flex flex-col items-center py-6 border-r border-slate-800">
      {navItems.map((item) => {
        const IconComponent = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "p-3 rounded-lg mb-4 transition-colors duration-200",
              item.isActive ? "bg-blue-600 text-white" : "hover:bg-slate-800 text-slate-400 hover:text-white",
            )}
            title={item.label}
          >
            <IconComponent className="h-6 w-6" />
          </Link>
        )
      })}

      {/* Disabled Users button */}
      <Button
        variant="ghost"
        className="p-3 rounded-lg mb-4 cursor-not-allowed opacity-50 text-slate-400"
        disabled
        title="User Management (Coming Soon)"
      >
        <Users className="h-6 w-6" />
      </Button>

      <div className="mt-auto">
        <LogoutButton />
      </div>
    </div>
  )
}
