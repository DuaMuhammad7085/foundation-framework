import { Link, useRouter, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Clock, ShieldCheck } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";

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
      ? "py-2.5 px-3 rounded-md text-sm font-medium hover:bg-accent text-left"
      : "px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md";
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
        activeProps={{ className: mobile ? "py-2.5 px-3 rounded-md text-sm font-semibold text-primary bg-accent text-left" : "px-3 py-2 text-sm font-semibold text-primary rounded-md bg-accent/50" }}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="relative">
      <div className="relative overflow-hidden text-primary-foreground text-xs">
        <div className="absolute inset-0 bg-gradient-brand" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_50%_-40%,rgba(255,255,255,0.25),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> 90-Day Warranty</span>
            <span className="hidden sm:flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Same-Day Repairs</span>
          </div>
          <a href="tel:+447415278767" className="flex items-center gap-1.5 hover:underline">
            <Phone className="w-3.5 h-3.5" /> 07415 278767
          </a>
        </div>
      </div>

      <div className="bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => renderLink(item))}
          </nav>
          <div className="hidden lg:flex items-center gap-2">
            <Link to="/profile" className="text-sm font-medium text-muted-foreground hover:text-primary px-3">
              Profile
            </Link>
            <Button asChild variant="default" className="bg-gradient-brand shadow-glow hover:opacity-90">
              <Link to="/book">Book a Repair</Link>
            </Button>
          </div>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="px-4 py-3 flex flex-col gap-1">
              {navItems.map((item) => renderLink(item, () => setOpen(false), true))}
              <Link to="/profile" onClick={() => setOpen(false)} className="py-2.5 px-3 rounded-md text-sm font-medium hover:bg-accent">
                Profile
              </Link>
              <Button asChild className="bg-gradient-brand mt-2">
                <Link to="/book" onClick={() => setOpen(false)}>Book a Repair</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
