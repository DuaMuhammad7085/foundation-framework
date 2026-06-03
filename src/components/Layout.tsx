import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { GradientBackdrop } from "./GradientBackdrop";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden text-primary-foreground py-16 md:py-24">
      <GradientBackdrop variant="hero" />
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        {eyebrow && (
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs uppercase tracking-widest font-medium mb-4">
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
