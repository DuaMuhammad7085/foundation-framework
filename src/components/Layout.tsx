import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
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
  image,
  imageAlt = "Hero background",
  actions,
  aside,
  className,
  overlayClassName,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image?: string;
  imageAlt?: string;
  actions?: ReactNode;
  aside?: ReactNode;
  className?: string;
  overlayClassName?: string;
}) {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroScale = useTransform(scrollY, [0, 600], [1.05, 1.15]);

  return (
    <section className={cn("relative text-white overflow-hidden min-h-[88vh] flex items-center", className)}>
      {image && (
        <motion.img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y: heroY, scale: heroScale }}
        />
      )}
      <div className={cn("absolute inset-0 bg-[linear-gradient(115deg,oklch(0.18_0.08_258)/0.92_0%,oklch(0.25_0.18_258)/0.6_45%,transparent_75%)]", overlayClassName)} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,oklch(0.55_0.23_258)/0.35,transparent_60%)] mix-blend-screen" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      <div className="relative max-w-7xl mx-auto px-4 pt-28 pb-40 w-full">
        <div className={cn("grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] items-center", !aside && "lg:grid-cols-1")}> 
          <div className="max-w-2xl">
            {eyebrow && (
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm text-[11px] uppercase tracking-[0.24em] text-primary-glow font-semibold mb-8">
                {eyebrow}
              </span>
            )}
            <h1 className="font-serif text-5xl md:text-7xl font-normal leading-[1.02] tracking-tight mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed mb-8">
                {subtitle}
              </p>
            )}
            {actions && <div className="flex flex-wrap gap-4">{actions}</div>}
          </div>
          {aside && <div className="hidden lg:block">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
