"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-header py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Logo light={!scrolled} />
          <Navigation light={!scrolled} />

          <div className="flex items-center gap-4">
            <Button
              href="/contact"
              variant={scrolled ? "primary" : "outline"}
              size="sm"
              className={cn(
                "hidden lg:inline-flex",
                !scrolled && "border-white text-white hover:bg-white hover:text-neutral-900"
              )}
            >
              Devis Gratuit
            </Button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className={cn(
                "rounded-md p-2 transition-colors lg:hidden cursor-pointer",
                scrolled
                  ? "text-neutral-700 hover:bg-neutral-100"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Ouvrir le menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}
