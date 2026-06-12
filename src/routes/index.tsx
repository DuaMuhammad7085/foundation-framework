import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Zap, Award, ShieldCheck, Star, ArrowRight, CheckCircle2,
  Wrench, PackageCheck, Search, Bell, Calendar, ChevronRight,
  Smartphone, Smile, Clock, Package, Tag,
} from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";
import { HoverLift, Reveal } from "@/components/Reveal";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-repair-shop.jpg";
import workshopImage from "@/assets/workshop.jpg";
import explodedImage from "@/assets/repair-exploded.jpg";
import svcScreen from "@/assets/svc-screen.jpg";
import catLaptop from "@/assets/cat-laptop.jpg";
import catTablet from "@/assets/cat-tablet.jpg";
import catWatch from "@/assets/cat-watch.jpg";
import catTap from "@/assets/cat-tap.jpg";
import phoneLightning from "@/assets/phone-lightning.png";
import globalRoutes from "@/assets/global-routes.jpg";
import backgroundImage from "@/assets/background.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Express Phone & Laptop Repair — Nuneaton | Repairs, Trade-In & Accessories" },
      { name: "description", content: "Same-day phone, laptop & tablet repairs in Nuneaton. Sell or buy refurbished devices, browse accessories. Free diagnostics, 90-day warranty. Call 07415 278767." },
    ],
  }),
  component: HomePage,
});

const countUpStats = [
  { value: "10,000+", label: "Devices Repaired" },
  { value: "4.9★", label: "Average Rating" },
  { value: "30 min", label: "Avg Repair Time" },
  { value: "90 days", label: "Warranty Included" },
];

const stats = [
  { value: "10,000+", label: "Devices Repaired" },
  { value: "4.9★", label: "Average Rating" },
  { value: "30–60 Min", label: "Typical Repair Time" },
  { value: "90 Days", label: "Warranty on Repairs" },
];

const testimonials = [
  { name: "James W.", text: "Fast screen replacement and excellent service. Highly recommend." },
  { name: "Sophie L.", text: "Very professional staff and affordable pricing — couldn't be happier." },
  { name: "David R.", text: "My laptop was repaired the same day. Brilliant local service." },
  { name: "Emma T.", text: "Highly recommended local repair shop. Friendly and reliable." },
];



const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function SectionBackdrop({ wash = "bg-white/30" }: { wash?: string }) {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-center bg-no-repeat opacity-[0.48]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        aria-hidden
      />
      <div className={`pointer-events-none absolute inset-0 ${wash}`} aria-hidden />
    </>
  );
}

function HomePage() {
  return (
    <Layout>
      <PageHero
        image={heroImage}
        imageAlt="Technician repairing a smartphone at a repair counter with a laptop beside the workspace"
        overlayClassName="bg-[linear-gradient(110deg,rgba(8,15,31,0.84)_0%,rgba(13,35,76,0.58)_38%,rgba(8,15,31,0.18)_72%,rgba(8,15,31,0.08)_100%)]"
        eyebrow="Nuneaton's Trusted Repair Shop"
        eyebrowClassName="border-[#005fee]/55 bg-[#eff6ff] text-[#005fee]"
        title={
          <>
            <span className="block font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.02] tracking-tight mb-2">
              Repair. Restore.
            </span>
            <span className="block font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.02] tracking-tight text-primary-glow">
              Move Forward.
            </span>
          </>
        }
        subtitle={
          <>Walk in with a cracked screen, weak battery, charging fault or slow laptop and leave with honest advice, quality parts and fast local service from technicians who repair devices every day.</>
        }
        actions={
          <>
            <Button asChild size="lg" className="bg-[#005fee] hover:bg-[#0047c4] text-white rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold shadow-sm">
              <Link to="/book">Book a Repair</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#005fee] text-[#005fee] bg-white hover:bg-[#eff6ff] rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold">
              <Link to="/profile">Track My Repair</Link>
            </Button>
          </>
        }
      />

      {/* ── UNIFIED BACKGROUND WRAPPER (About Us -> Express Service) ── */}
      <div className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 bg-center bg-no-repeat opacity-[0.48]"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-white/30" aria-hidden />
        <div className="relative z-10">

          {/* ── ABOUT US (mini) — smooth post-hero transition ── */}
          <section className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
                <Reveal>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#005fee] mb-4 block">
                      About Us
                    </span>
                    <h2 className="text-[2.75rem] md:text-5xl font-bold text-slate-950 leading-[1.08] tracking-tight mb-5">
                      Nuneaton's go-to repair<br className="hidden lg:block" /> shop since day one.
                    </h2>
                    <p className="text-slate-500 leading-relaxed mb-6 pr-6">
                      We're a local, independent repair workshop on Harefield Road dedicated to fixing your devices quickly and honestly. No hidden fees, no unnecessary upsells — just straightforward repairs done by people who care.
                    </p>
                    <p className="text-slate-500 leading-relaxed mb-10 pr-6">
                      From cracked phone screens to complex laptop motherboard faults, our certified technicians handle it all with quality parts and a 90-day warranty on every repair.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link to="/about">
                        <button className="inline-flex items-center gap-2 rounded-xl bg-[#005fee] px-6 py-2.5 text-[13px] font-semibold text-white shadow-sm hover:bg-[#0047c4] transition-colors">
                          Our Story <ArrowRight className="h-4 w-4" />
                        </button>
                      </Link>
                      <Link to="/contact">
                        <button className="inline-flex items-center gap-2 rounded-xl border border-slate-100 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] px-6 py-2.5 text-[13px] font-semibold text-slate-700 hover:border-[#005fee] hover:text-[#005fee] transition-colors">
                          Find Us
                        </button>
                      </Link>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <motion.div
                    className="self-end overflow-hidden bg-white shadow-[0_24px_80px_-40px_rgba(15,23,42,0.24)]"
                    whileHover={{ scale: 1.03, rotate: 1 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.img
                      src={workshopImage}
                      alt="Repair workshop bench"
                      className="w-full h-full object-cover min-h-[420px]"
                      loading="lazy"
                      initial={{ scale: 1.15 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </motion.div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ── WHAT WE REPAIR ── */}
          <section className="py-24 bg-transparent">
            <div className="max-w-7xl mx-auto px-4">
              <Reveal>
                <div className="text-center mb-14">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#005fee] mb-3">More Than Phones</p>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">We Also Repair</h2>
                  <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Beyond mobile — our workshop handles laptops, tablets, unlocking and curated accessories under one roof.</p>
                </div>
              </Reveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { img: catLaptop, t: "Laptop Repair", d: "Slow, broken or not booting? We bring laptops back to life.", cardBg: "bg-sky-100", cardBorder: "border-sky-300/80", link: "text-sky-800 group-hover:text-sky-900" },
                  { img: catTablet, t: "Tablet Repair", d: "Cracked screens, charging issues and battery swaps — sorted.", cardBg: "bg-sky-100", cardBorder: "border-sky-300/80", link: "text-sky-800 group-hover:text-sky-900" },
                  { img: catWatch, t: "Phone Unlocking", d: "Network unlocking for most makes and models, fast turnaround.", cardBg: "bg-sky-100", cardBorder: "border-sky-300/80", link: "text-sky-800 group-hover:text-sky-900" },
                  { img: catTap, t: "Accessories", d: "Cases, chargers, cables and audio — quality picks in store.", cardBg: "bg-sky-100", cardBorder: "border-sky-300/80", link: "text-sky-800 group-hover:text-sky-900" },
                ].map((c, i) => (
                  <HoverLift key={c.t} delay={i * 0.1}>
                    <Card className={`group relative overflow-hidden rounded-[1.75rem] border ${c.cardBorder} ${c.cardBg} p-0 h-full shadow-sm transition-shadow duration-500 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]`}>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img src={c.img} alt={c.t} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                        <div className="absolute bottom-4 left-5 right-5">
                          <h3 className="text-xl font-semibold text-white drop-shadow">{c.t}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-slate-600 leading-relaxed mb-4">{c.d}</p>
                        <a href="#services" className={`inline-flex items-center gap-1.5 rounded-full bg-[#fff4ca] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#005fee] shadow-sm transition-colors hover:bg-[#ffe69b] ${c.link}`}>
                          Learn More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </Card>
                  </HoverLift>
                ))}
              </div>
            </div>
          </section>

          {/* ── WHY CHOOSE US + TRACK YOUR REPAIR ── */}
          <section className="relative py-24">
            <div className="relative max-w-7xl mx-auto px-4">

              {/* Two-column grid — no outer card, content floats on the background */}
              <div className="grid gap-12 lg:grid-cols-[0.85fr_1.4fr]">

                {/* LEFT: Why Choose Us — floating directly on background */}
                <Reveal>
                  <div className="flex flex-col h-full">
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#005fee] mb-3">Why Choose Us</span>
                    <h2 className="text-[2rem] leading-[1.1] font-bold text-slate-900 mb-3">
                      Repairs you<br />can trust.
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-[34ch]">
                      Fast, honest repairs backed by quality parts and expert technicians. We make the process simple, clear and worry-free.
                    </p>
                    <div className="flex-1 space-y-1">
                      {[
                        { icon: Zap, title: "Same Day Repairs", desc: "Most repairs completed the same day." },
                        { icon: Search, title: "Free Diagnostics", desc: "We find the issue first, so you know." },
                        { icon: ShieldCheck, title: "Genuine Quality Parts", desc: "Reliable parts for lasting performance." },
                        { icon: Award, title: "Expert Technicians", desc: "Skilled professionals you can rely on." },
                      ].map((f, fi) => (
                        <motion.div
                          key={f.title}
                          className="flex items-start gap-4 py-3.5 rounded-xl px-3 -mx-3 hover:bg-white/40 transition-colors"
                          initial={{ opacity: 0, x: -32 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ delay: fi * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                          whileHover={{ x: 8, scale: 1.02 }}
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-200/60 bg-white/50 backdrop-blur-sm text-[#005fee]">
                            <f.icon className="h-4 w-4" strokeWidth={2} />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900">{f.title}</div>
                            <div className="text-xs text-slate-500 mt-0.5">{f.desc}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex items-center gap-5 mt-6">
                      <Link to="/book">
                        <button className="inline-flex items-center gap-2 rounded-lg bg-[#005fee] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0047c4] transition-colors">
                          <Calendar className="h-4 w-4" /> Book a Repair
                        </button>
                      </Link>
                      <Link to="/about" className="inline-flex items-center gap-1 rounded-full bg-[#fff4ca] px-4 py-2 text-sm font-semibold text-[#005fee] shadow-sm transition-colors hover:bg-[#ffe69b]">
                        Learn more <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Reveal>

                {/* RIGHT: Track Your Repair — frosted glass card */}
                <Reveal delay={0.08}>
                  <div className="rounded-2xl border border-amber-200/80 bg-amber-50/85 backdrop-blur-xl p-8 flex flex-col gap-6 shadow-[0_8px_40px_-12px_rgba(15,23,42,0.18)] h-full">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#005fee]">Track Your Repair</span>
                      <h3 className="text-2xl font-bold text-slate-900 mt-1">Track your repair</h3>
                      <p className="text-sm text-slate-500 mt-1">Stay updated on your repair status in real time. We'll show you exactly where your device is in our workflow.</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input type="text" placeholder="Enter your tracking ID (e.g. FIX-89045)"
                          className="w-full rounded-lg border border-amber-200/80 bg-amber-100/90 backdrop-blur-sm pl-9 pr-4 py-3 text-sm text-slate-700 placeholder:text-slate-500 outline-none focus:border-[#005fee] focus:ring-2 focus:ring-[#005fee]/15 transition" />
                      </div>
                      <button className="rounded-lg bg-[#005fee] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0047c4] transition-colors shrink-0">
                        Track Now
                      </button>
                    </div>

                    {/* Progress stepper */}
                    <div className="relative flex items-start justify-between mt-2 mb-2">
                      <div className="absolute top-5 left-0 right-0 flex items-center px-6 pointer-events-none">
                        <div className="flex-1 h-[2px] bg-[#005fee]" />
                        <div className="flex-[3] h-[1px] bg-slate-300/50" />
                      </div>
                      {[
                        { icon: PackageCheck, label: "Received", desc: "Device logged in.", active: true },
                        { icon: Search, label: "Diagnosis", desc: "Checking the issue.", active: false },
                        { icon: Wrench, label: "Repairing", desc: "Experts are fixing.", active: false },
                        { icon: ShieldCheck, label: "Testing", desc: "Quality checks.", active: false },
                        { icon: CheckCircle2, label: "Ready", desc: "Ready for pickup.", active: false },
                      ].map((step) => (
                        <div key={step.label} className="relative flex flex-col items-center text-center w-[18%]">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 z-10 backdrop-blur-sm ${step.active ? "border-[#005fee] bg-amber-100/90 text-[#005fee]" : "border-slate-200/60 bg-amber-50/90 text-slate-400"}`}>
                            <step.icon className="h-4 w-4" strokeWidth={1.75} />
                          </div>
                          <div className={`mt-3 text-xs font-semibold ${step.active ? "text-[#005fee]" : "text-slate-700"}`}>{step.label}</div>
                          <div className="mt-1 text-[10px] text-slate-400 leading-tight hidden sm:block px-1">{step.desc}</div>
                        </div>
                      ))}
                    </div>

                    {/* Information boxes */}
                    <div className="grid sm:grid-cols-2 gap-4 mt-auto">
                      {/* Notification banner */}
                      <div className="flex items-center gap-4 rounded-xl border border-amber-200/80 bg-amber-50/90 backdrop-blur-md px-4 py-4 transition hover:bg-amber-100/95">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-200/80 bg-amber-100/90 text-[#005fee]">
                          <Bell className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-slate-900">Get Status Alerts</div>
                          <div className="text-xs text-slate-500 mt-0.5 mb-2">Receive SMS or email updates instantly.</div>
                          <button className="text-xs font-semibold text-[#005fee] hover:underline">
                            Enable Alerts &rarr;
                          </button>
                        </div>
                      </div>

                      {/* Help banner */}
                      <div className="flex items-center gap-4 rounded-xl border border-amber-200/80 bg-amber-50/90 backdrop-blur-md px-4 py-4 transition hover:bg-amber-100/95">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-200/80 bg-amber-100/90 text-[#005fee]">
                          <Search className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-slate-900">Lost Your ID?</div>
                          <div className="text-xs text-slate-500 mt-0.5 mb-2">Check your email receipt or contact us.</div>
                          <Link to="/contact" className="text-xs font-semibold text-[#005fee] hover:underline">
                            Get Support &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ── BY THE NUMBERS ── */}
          <section className="relative overflow-hidden py-24">
            <SectionBackdrop wash="bg-white/25" />
            <div className="pointer-events-none absolute inset-0 section-gold opacity-80" aria-hidden />
            <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#005fee]/14 blur-3xl orb-float" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-theme-yellow/35 blur-3xl orb-float-reverse" />
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0095ff]/10 blur-3xl animate-pulse-glow" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#005fee] mb-4">
                  By the Numbers
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-950 leading-[1.05] max-w-3xl mx-auto">
                  Trusted by thousands,{" "}
                  <span className="italic text-[#005fee]">proven daily.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-16 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                  <div className="flex w-max stats-ticker-marquee hover:[animation-play-state:paused]">
                    {[...countUpStats, ...countUpStats].map((stat, i) => (
                      <div key={`${stat.label}-${i}`} className="flex items-center gap-5 px-12 md:px-16">
                        <span className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight bg-gradient-to-b from-slate-900 via-[#005fee] to-theme-yellow-border bg-clip-text text-transparent whitespace-nowrap">
                          {stat.value}
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500 whitespace-nowrap">
                          {stat.label}
                        </span>
                        <span className="text-[#005fee]/35 text-2xl leading-none" aria-hidden>•</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ── EXPRESS SERVICE ── */}
          <section className="py-24 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-4">
              <Reveal>
                <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">

                  {/* LEFT SIDE: Content */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#005fee] mb-4 block">
                      Express Service
                    </span>
                    <h2 className="text-5xl md:text-[3.5rem] font-bold text-slate-900 leading-[1.05] tracking-tight mb-4">
                      Fast Repairs.<br />Fair Prices.
                    </h2>
                    <p className="text-lg text-slate-500 mb-10">
                      Same-day repairs available for most devices.
                    </p>

                    {/* 2x2 Feature Grid */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-10 mb-10">
                      {/* Feature 1 */}
                      <div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-[#005fee] mb-4">
                          <Zap className="h-5 w-5" strokeWidth={2} />
                        </div>
                        <div className="text-sm font-bold text-slate-900 mb-1">Same-Day Repairs</div>
                        <div className="text-sm text-slate-500 leading-relaxed pr-4">Get your device back today.</div>
                      </div>
                      {/* Feature 2 */}
                      <div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-[#005fee] mb-4">
                          <ShieldCheck className="h-5 w-5" strokeWidth={2} />
                        </div>
                        <div className="text-sm font-bold text-slate-900 mb-1">Quality Parts</div>
                        <div className="text-sm text-slate-500 leading-relaxed pr-4">We use trusted, genuine parts.</div>
                      </div>
                      {/* Feature 3 */}
                      <div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-[#005fee] mb-4">
                          <Award className="h-5 w-5" strokeWidth={2} />
                        </div>
                        <div className="text-sm font-bold text-slate-900 mb-1">Expert Technicians</div>
                        <div className="text-sm text-slate-500 leading-relaxed pr-4">Skilled professionals you can trust.</div>
                      </div>
                      {/* Feature 4 */}
                      <div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-[#005fee] mb-4">
                          <Tag className="h-5 w-5" strokeWidth={2} />
                        </div>
                        <div className="text-sm font-bold text-slate-900 mb-1">Fair Pricing</div>
                        <div className="text-sm text-slate-500 leading-relaxed pr-4">Honest prices. No hidden fees.</div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-6">
                      <Link to="/book">
                        <button className="inline-flex items-center gap-2 rounded-xl bg-[#005fee] px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0047c4] transition-colors">
                          <Calendar className="h-4 w-4" /> Book a Repair
                        </button>
                      </Link>
                      <a href="#services" className="inline-flex items-center gap-1 text-sm font-semibold text-[#005fee] hover:underline">
                        See our services <ChevronRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  {/* RIGHT SIDE: Phone Card Image */}
                  <motion.div
                    className="relative w-full aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden bg-[#f5f0eb] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5),0_30px_90px_-50px_rgba(15,23,42,0.12)]"
                    initial={{ opacity: 0, x: 48, rotateY: -12 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.02, rotateY: 4 }}
                    style={{ perspective: 1200 }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,_rgba(255,255,255,0.55)_0%,transparent_52%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(210,198,178,0.22)_0%,transparent_48%)]" />
                    <div className="absolute left-6 top-6 z-10 w-40 rounded-[1.75rem] border border-white/80 bg-white/95 px-4 py-4 shadow-[0_28px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur-xl ring-1 ring-white/90">
                      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#d1e9ff] text-[#2167e1] mb-3 shadow-sm">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#5e718d] mb-2">Express repair</div>
                      <div className="text-sm font-bold text-slate-900 leading-tight mb-2">Same-day <span className="block text-[#2167e1]">Service</span></div>
                      <div className="text-[12px] text-[#64748b] leading-5 mb-4">Most repairs in 30–60 minutes.</div>
                      <div className="rounded-full bg-[#eef2f7] px-2 py-1.5 text-[10px] font-semibold text-[#5e718d] shadow-sm">
                        Free diagnostic
                      </div>
                    </div>
                    {/* 3D Phone Image */}
                    <motion.img
                      src={phoneLightning}
                      alt="Express Repair Phone"
                      className="relative h-[105%] max-h-full w-auto object-contain drop-shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)] animate-float-y"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                </div>

                {/* BOTTOM STATS */}
                <div className="mt-16 rounded-[2rem] border border-slate-100 bg-white p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x md:divide-slate-100">

                    {/* Stat 1 */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:px-6 first:pl-0 last:pr-0">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#005fee]">
                        <Smartphone className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#005fee]">10,000+</div>
                        <div className="text-sm font-bold text-slate-900 mt-0.5">Devices Repaired</div>
                        <div className="text-xs text-slate-500 mt-1 leading-relaxed">Trusted by thousands of happy customers.</div>
                      </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:px-6 first:pl-0 last:pr-0">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-500">
                        <Star className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-500">4.9<span className="text-lg">★</span></div>
                        <div className="text-sm font-bold text-slate-900 mt-0.5">Average Rating</div>
                        <div className="text-xs text-slate-500 mt-1 leading-relaxed">Based on real customer reviews.</div>
                      </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:px-6 first:pl-0 last:pr-0">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                        <Clock className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-500">30–60 Min</div>
                        <div className="text-sm font-bold text-slate-900 mt-0.5">Typical Repair Time</div>
                        <div className="text-xs text-slate-500 mt-1 leading-relaxed">Most repairs completed while you wait.</div>
                      </div>
                    </div>

                    {/* Stat 4 */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:px-6 first:pl-0 last:pr-0">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-purple-50 text-purple-600">
                        <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">90 Days</div>
                        <div className="text-sm font-bold text-slate-900 mt-0.5">Warranty on Repairs</div>
                        <div className="text-xs text-slate-500 mt-1 leading-relaxed">Peace of mind with every repair we do.</div>
                      </div>
                    </div>

                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ── END UNIFIED BACKGROUND WRAPPER ── */}
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <section className="relative overflow-hidden py-24">
        <SectionBackdrop />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#005fee] mb-3">Testimonials</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">What Customers Say About Our Workshop</h2>
              <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Trusted local repairs that keep devices working and customers coming back.</p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((t, i) => (
              <HoverLift key={t.name} delay={i * 0.1}>
                <Card className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-yellow-200/60 bg-[#fff7d2] p-8 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.16)] transition-shadow duration-500 hover:shadow-[0_35px_90px_-40px_rgba(15,23,42,0.22)]">
                  <div className="absolute -top-5 right-5 h-24 w-24 rounded-full bg-yellow-300/10 blur-2xl" aria-hidden="true" />
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-700 shadow-sm">
                        <Star className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">5.0</div>
                        <div className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Rating</div>
                      </div>
                    </div>
                    <div className="text-4xl leading-none text-sky-500">“</div>
                  </div>

                  <p className="text-slate-700 leading-relaxed mb-8 flex-1">{t.text}</p>

                  <div className="mt-4 border-t border-slate-100 pt-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-500 text-white shadow-sm text-sm font-semibold">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{t.name}</div>
                        <div className="text-xs text-slate-500">Verified Customer</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </HoverLift>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:justify-between">
              <p className="max-w-2xl text-sm text-slate-500">Our customers rate us highly for fast turnaround, honest pricing and reliable repair work. See more reviews from Nuneaton locals.</p>
              <Link to="/about" className="inline-flex items-center justify-center rounded-full bg-[#005fee] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/10 transition hover:bg-[#0047c4]">
                Read More Reviews
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── VISIT OUR STORE ── */}
      <section className="relative overflow-hidden py-24">
        <SectionBackdrop wash="bg-white/25"/>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Reveal>
            <motion.div
              className="relative overflow-hidden rounded-[2.5rem] bg-[#e7f4ff] border border-sky-200/70 p-12 shadow-[0_30px_90px_-30px_rgba(15,23,42,0.14)] backdrop-blur-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="pointer-events-none absolute -right-10 top-12 h-40 w-40 rounded-full bg-yellow-300/28 blur-3xl" />
              <div className="pointer-events-none absolute -left-10 bottom-14 h-48 w-48 rounded-full bg-yellow-200/20 blur-3xl" />
              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#005fee] mb-4">Visit Our Store</p>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-[#005fee] mb-4">Come visit our workshop in Nuneaton</h3>
                  <p className="text-[#003ea8] mb-8 max-w-2xl leading-relaxed text-lg">Drop in for a free diagnostic, friendly advice, or to browse our refurbished stock and accessories. Our team is ready to assess your device and get it back to perfect working order.</p>
                  <div className="grid gap-4 mb-8 md:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff4ca] text-orange-600 shadow-sm">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-orange-600">Address</div>
                        <div className="text-sm text-slate-500">6 Harefield Road, Nuneaton, CV11 4HD</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff4ca] text-orange-600 shadow-sm">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-orange-600">Call Us</div>
                        <div className="text-sm text-slate-500">07415 278767</div>
                      </div>
                    </div>
                  </div>
                    <motion.div
                      className="flex flex-wrap gap-4"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Button asChild size="lg" className="rounded-xl bg-[#005fee] hover:bg-[#0047c4] text-white px-8 h-12 uppercase tracking-widest text-xs font-semibold shadow-sm">
                        <Link to="/contact">Get Directions</Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="rounded-xl border border-[#005fee] text-[#005fee] bg-white hover:bg-[#eff6ff] px-8 h-12 uppercase tracking-widest text-xs font-semibold">
                        <Link to="/book">Book a Repair</Link>
                      </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                  className="overflow-hidden rounded-[1.75rem] bg-[#fffaf6]"
                  initial={{ opacity: 0, x: 16, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.18, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative">
                    <img
                      src={workshopImage}
                      alt="Repair workshop bench"
                      className="w-full h-full object-cover min-h-[460px] rounded-[1.25rem]"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/8 to-transparent" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
