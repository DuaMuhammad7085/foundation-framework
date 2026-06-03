import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { GradientBackdrop } from "./GradientBackdrop";

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-primary-foreground mt-16">
      <GradientBackdrop variant="footer" />
      <div className="relative max-w-7xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-4">
          <Logo light />
          <p className="text-sm text-white/75 max-w-sm">
            We fix your devices with care and precision. Fast, reliable repairs you can always trust.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 grid place-items-center hover:bg-white/20 transition-colors"
                aria-label="Social link"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/book" className="hover:text-white">Book Repair</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Our Services</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li>iPhone Repair</li>
            <li>Android Repair</li>
            <li>Laptop Repair</li>
            <li>Tablet Repair</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> +91 98765 43210</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0" /> support@fixora.com</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> 123, Tech Street, Mega City</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 text-xs text-white/60 flex items-center justify-between flex-wrap gap-2">
          <span>© 2026 Fixora Smart Repair. All rights reserved.</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
