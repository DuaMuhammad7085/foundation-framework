import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Clock, ShieldCheck } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/accessories", label: "Accessories" },
  { to: "/sell-resell", label: "Sell & Resell" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement bar */}
      <div className="relative overflow-hidden text-primary-foreground text-xs">
        <div className="absolute inset-0 bg-gradient-brand" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_50%_-40%,rgba(255,255,255,0.25),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> 90-Day Warranty</span>
            <span className="hidden sm:flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Same-Day Repairs</span>
          </div>
          <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:underline">
            <Phone className="w-3.5 h-3.5" /> +91 98765 43210
          </a>
        </div>
      </div>

      <div className="bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md"
                activeProps={{ className: "px-3 py-2 text-sm font-semibold text-primary rounded-md bg-accent/50" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-2">
            <Link to="/profile" className="text-sm font-medium text-muted-foreground hover:text-primary px-3">
              Profile
            </Link>
            <Button asChild variant="default" className="bg-gradient-brand shadow-glow hover:opacity-90">
              <Link to="/book">Book a Repair</Link>
            </Button>
          </div>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="px-4 py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-2.5 px-3 rounded-md text-sm font-medium hover:bg-accent"
                >
                  {item.label}
                </Link>
              ))}
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
