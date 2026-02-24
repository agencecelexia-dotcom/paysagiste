"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { clientConfig } from "@/config/client.config";
import {
  LayoutDashboard,
  FileText,
  Image,
  Star,
  Wrench,
  FolderOpen,
  Search,
  Menu,
  X,
  LogOut,
  Leaf,
} from "lucide-react";

const navLinks = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/contenu", label: "Contenu", icon: FileText },
  { href: "/admin/photos", label: "Photos", icon: Image },
  { href: "/admin/temoignages", label: "Témoignages", icon: Star },
  { href: "/admin/services", label: "Services", icon: Wrench },
  { href: "/admin/projets", label: "Projets", icon: FolderOpen },
  { href: "/admin/seo", label: "SEO", icon: Search },
];

export default function AdminSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  }

  const SidebarContent = () => (
    <div className="flex h-full flex-col bg-primary-900">
      {/* Header */}
      <div className="border-b border-white/10 px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent-500">
            <Leaf size={18} className="text-white" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-white">
              {clientConfig.NOM_ENTREPRISE}
            </p>
            <p className="text-xs text-neutral-400">Administration</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "text-neutral-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon size={18} className={isActive ? "text-accent-500" : ""} />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="border-t border-white/10 px-3 py-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
        >
          <LogOut size={18} />
          Déconnexion
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <div className="fixed left-0 top-0 h-full w-64">
          <SidebarContent />
        </div>
      </div>

      {/* Mobile hamburger button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-40 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-900 text-white shadow-lg lg:hidden"
        aria-label="Ouvrir le menu"
      >
        <Menu size={20} />
      </button>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer */}
          <div className="fixed inset-y-0 left-0 z-50 w-64">
            <div className="relative h-full">
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute right-3 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-lg text-white/60 hover:bg-white/10 hover:text-white"
                aria-label="Fermer le menu"
              >
                <X size={18} />
              </button>
              <SidebarContent />
            </div>
          </div>
        </>
      )}
    </>
  );
}
