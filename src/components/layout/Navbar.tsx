"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Sparkles } from "lucide-react";
import clsx from "clsx";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MegaMenuPanel } from "@/components/layout/MegaMenuPanel";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { servicesMenu, solutionsMenu, webMenu, type MegaMenuData } from "@/lib/data";

const navMenus: MegaMenuData[] = [servicesMenu, solutionsMenu, webMenu];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!activeMenu) return;

    const onPointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMenu(null);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeMenu]);

  const activeMenuData = navMenus.find((m) => m.label === activeMenu) ?? null;

  const toggleMenu = (label: string) => {
    setActiveMenu((current) => (current === label ? null : label));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={clsx(
          "font-mono-tight hidden items-center justify-center gap-2 overflow-hidden border-b px-4 text-center text-[12px] text-muted transition-all duration-300 sm:flex",
          scrolled
            ? "max-h-0 border-transparent bg-transparent py-0 opacity-0"
            : "max-h-16 border-border bg-background-elevated/80 py-2 opacity-100"
        )}
      >
        <Sparkles className="size-3.5 shrink-0 text-neon-cyan" />
        Now booking new builds worldwide.
        <Link href="/contact" className="font-medium text-foreground hover:text-neon-cyan">
          Get a free quote →
        </Link>
      </div>

      <div
        className={clsx(
          "transition-[padding] duration-500 ease-out",
          scrolled ? "px-[max(0.75rem,calc(50vw-570px))] pt-3" : "px-0 pt-0"
        )}
      >
      <nav
        ref={navRef}
        onMouseLeave={() => setActiveMenu(null)}
        className={clsx(
          "nav-bar relative border transition-[background-color,border-color,border-radius,box-shadow] duration-500 ease-out",
          scrolled
            ? "is-floating rounded-full border-border bg-background/80 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            : "rounded-none border-transparent bg-transparent"
        )}
      >
        <div
          className={clsx(
            "mx-auto flex items-center justify-between transition-[padding] duration-500 ease-out",
            scrolled ? "max-w-none px-4 py-2 lg:px-5" : "max-w-[1440px] px-6 py-3 lg:px-10"
          )}
        >
          <Link href="/" aria-label="Prismneia home">
            <Logo />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navMenus.map((menu) => (
              <button
                key={menu.label}
                onMouseEnter={() => setActiveMenu(menu.label)}
                onFocus={() => setActiveMenu(menu.label)}
                onClick={() => toggleMenu(menu.label)}
                aria-expanded={activeMenu === menu.label}
                className={clsx(
                  "nav-link font-mono-tight flex items-center gap-1 rounded-full px-5 py-2.5 text-[15px] font-medium uppercase transition-colors",
                  activeMenu === menu.label && "bg-white/10 text-foreground"
                )}
              >
                {menu.label}
                <ChevronDown
                  className={clsx(
                    "size-3.5 transition-transform",
                    activeMenu === menu.label && "rotate-180"
                  )}
                />
              </button>
            ))}
            <Link
              href="/blog"
              onMouseEnter={() => setActiveMenu(null)}
              className="nav-link font-mono-tight rounded-full px-5 py-2.5 text-[15px] font-medium uppercase"
            >
              Resources
            </Link>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Button href="/contact" variant="ghost">
              Log in
            </Button>
            <Button href="/contact" variant="white" showArrow>
              Get a quote
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="btn-ghost flex size-11 items-center justify-center rounded-full"
          >
            <Menu className="size-6" />
          </button>
          </div>
        </div>

        <MegaMenuPanel
          menu={activeMenuData}
          floating={scrolled}
          onNavigate={() => setActiveMenu(null)}
        />
      </nav>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
