import { Link, useRouter, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, Clock, ShieldCheck, Zap, type LucideIcon } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";

type TickerItem = { icon: LucideIcon; text: string; href?: string };

const tickerItems: TickerItem[] = [
  { icon: ShieldCheck, text: "90-Day Warranty" },
  { icon: Clock, text: "Same-Day Repairs" },
  { icon: Zap, text: "Free Diagnostics" },
  { icon: Phone, text: "07415 278767", href: "tel:+447415278767" },
];

type NavItem = { label: string } & ({ to: string; hash?: never } | { hash: string; to?: never });

const navItems: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/accessories", label: "Accessories" },
  { to: "/sell-resell", label: "Sell & Resell" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

function useScrollToHash() {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (hash: string, onDone?: () => void) => {
    const scroll = () => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      onDone?.();
    };
    if (pathname === "/") {
      scroll();
    } else {
      router.navigate({ to: "/" }).then(() => setTimeout(scroll, 50));
    }
  };
}

export function Header() {
  const [open, setOpen] = useState(false);
  const scrollTo = useScrollToHash();

  const renderLink = (item: NavItem, onClick?: () => void, mobile = false) => {
    const baseClass = mobile
      ? "py-2.5 px-3 rounded-md text-sm font-medium text-[#005fee] hover:bg-[#eff6ff] hover:text-[#003ea8] text-left"
      : "px-3 py-2 text-sm font-medium text-[#005fee] hover:bg-[#eff6ff] hover:text-[#003ea8] transition-colors rounded-md";
    if ("hash" in item && item.hash) {
      return (
        <button
          key={item.label}
          onClick={() => { scrollTo(item.hash!, onClick); }}
          className={baseClass}
        >
          {item.label}
        </button>
      );
    }
    return (
      <Link
        key={item.label}
        to={item.to!}
        onClick={onClick}
        className={baseClass}
        activeProps={{ className: mobile ? "py-2.5 px-3 rounded-md text-sm font-semibold text-[#ffffff] bg-[#005fee] text-left" : "px-3 py-2 text-sm font-semibold text-[#ffffff] rounded-md bg-[#005fee]" }}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="relative">
      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: -8 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden border-b border-white/10 text-primary-foreground"
      >
        <div className="absolute inset-0 bg-[#ef4444]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_50%_-40%,rgba(255,255,255,0.28),transparent)]" />
        <div className="absolute inset-0 header-ticker-shimmer pointer-events-none" />
        <div className="relative py-3.5 overflow-hidden">
          <div className="flex w-max header-ticker-marquee hover:[animation-play-state:paused]">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-10">
                <item.icon className="h-5 w-5 shrink-0 opacity-90" />
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm md:text-base font-bold uppercase tracking-[0.2em] hover:underline"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em]">
                    {item.text}
                  </span>
                )}
                <span className="text-white/40 text-lg" aria-hidden>•</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="bg-[#fff7dd]/90 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => renderLink(item))}
          </nav>
          <div className="hidden lg:flex items-center gap-2">
            <Link to="/profile" className="text-sm font-medium text-[#005fee] hover:text-[#003ea8] px-3">
              Profile
            </Link>
            <Button asChild className="bg-[#005fee] hover:bg-[#0047c4] text-white shadow-sm">
              <Link to="/book">Book a Repair</Link>
            </Button>
          </div>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-[#fff7dd]/95">
            <div className="px-4 py-3 flex flex-col gap-1">
              {navItems.map((item) => renderLink(item, () => setOpen(false), true))}
              <Link to="/profile" onClick={() => setOpen(false)} className="py-2.5 px-3 rounded-md text-sm font-medium text-[#005fee] hover:bg-[#eff6ff] hover:text-[#003ea8]">
                Profile
              </Link>
              <Button asChild className="bg-[#005fee] hover:bg-[#0047c4] text-white mt-2">
                <Link to="/book" onClick={() => setOpen(false)}>Book a Repair</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
