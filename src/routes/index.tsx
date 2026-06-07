import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Zap, Award, ShieldCheck, Star, ArrowRight, CheckCircle2,
  Wrench, PackageCheck, Search, Bell, Calendar, ChevronRight,
  Smartphone, Smile, Clock, Package, Tag,
} from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-devices.jpg";
import workshopImage from "@/assets/workshop.jpg";
import explodedImage from "@/assets/repair-exploded.jpg";
import svcScreen from "@/assets/svc-screen.jpg";
import catLaptop from "@/assets/cat-laptop.jpg";
import catTablet from "@/assets/cat-tablet.jpg";
import catWatch from "@/assets/cat-watch.jpg";
import catTap from "@/assets/cat-tap.jpg";
import phoneLightning from "@/assets/phone-lightning.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Express Phone & Laptop Repair — Nuneaton | Repairs, Trade-In & Accessories" },
      { name: "description", content: "Same-day phone, laptop & tablet repairs in Nuneaton. Sell or buy refurbished devices, browse accessories. Free diagnostics, 90-day warranty. Call 07415 278767." },
    ],
  }),
  component: HomePage,
});

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

function HomePage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroScale = useTransform(scrollY, [0, 600], [1.05, 1.15]);

  return (
    <Layout>
      <PageHero
        image={heroImage}
        eyebrow="Nuneaton's Trusted Repair Shop"
        title={
          <>
            <span className="block font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.02] tracking-tight mb-2">
              Express Repair.
            </span>
            <span className="block font-serif italic text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.02] tracking-tight text-primary-glow">
              Done Right.
            </span>
          </>
        }
        subtitle={
          <>Professional same-day repairs for phones, laptops, tablets and electronic devices — fast service, free diagnostics, quality parts and fair local pricing in the heart of Nuneaton.</>
        }
        actions={
          <>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold">
              <Link to="/book">Book a Repair</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/50 text-white bg-transparent hover:bg-white/10 rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold">
              <Link to="/profile">Track My Repair</Link>
            </Button>
          </>
        }
      />

      {/* ── ABOUT US (mini) — smooth post-hero transition ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <div className="grid grid-cols-2 gap-4 lg:pl-6">
                {[
                  { value: "10,000+", label: "Devices Repaired", sub: "And counting" },
                  { value: "98%",     label: "Satisfaction Rate", sub: "From real reviews" },
                  { value: "90 Days", label: "Warranty",          sub: "On every repair" },
                  { value: "Same Day",label: "Turnaround",        sub: "Most repairs" },
                ].map((s, i) => (
                  <div key={s.label} className={`rounded-[1.25rem] p-8 ${i % 2 === 0 ? "bg-[#005fee]" : "bg-[#f8fafc] border border-slate-100/80"}`}>
                    <div className={`text-3xl font-bold mb-2 ${i % 2 === 0 ? "text-white" : "text-slate-950"}`}>{s.value}</div>
                    <div className={`text-[13px] font-bold ${i % 2 === 0 ? "text-white" : "text-[#334155]"}`}>{s.label}</div>
                    <div className={`text-[11px] font-medium mt-1 ${i % 2 === 0 ? "text-white/70" : "text-slate-400"}`}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHAT WE REPAIR ── */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
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
              { img: catLaptop, t: "Laptop Repair",   d: "Slow, broken or not booting? We bring laptops back to life." },
              { img: catTablet, t: "Tablet Repair",   d: "Cracked screens, charging issues and battery swaps — sorted." },
              { img: catWatch,  t: "Phone Unlocking", d: "Network unlocking for most makes and models, fast turnaround." },
              { img: catTap,    t: "Accessories",     d: "Cases, chargers, cables and audio — quality picks in store." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <Card className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white p-0 h-full shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={c.img} alt={c.t} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5">
                      <h3 className="text-xl font-semibold text-white drop-shadow">{c.t}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{c.d}</p>
                    <a href="#services" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 group-hover:text-sky-900 transition-colors">
                      Learn More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US + TRACK YOUR REPAIR ── */}
      <section className="relative py-24 overflow-hidden">
        {/* Background — clean gradient, no harsh workshop clash */}
        <div className="pointer-events-none absolute inset-0">
          <img src={workshopImage} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-slate-700/60 backdrop-blur-sm" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Outer card — full max-w-7xl width */}
          <div className="bg-white rounded-2xl shadow-[0_12px_64px_-16px_rgba(15,23,42,0.28)] overflow-hidden p-8 sm:p-10">

            {/* Two-column grid */}
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.4fr]">

              {/* LEFT: Why Choose Us */}
              <Reveal>
                <div className="flex flex-col h-full pr-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#005fee] mb-3">Why Choose Us</span>
                  <h2 className="text-[2rem] leading-[1.1] font-bold text-slate-900 mb-3">
                    Repairs you<br />can trust.
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-[34ch]">
                    Fast, honest repairs backed by quality parts and expert technicians. We make the process simple, clear and worry-free.
                  </p>
                  <div className="flex-1 divide-y divide-slate-100">
                    {[
                      { icon: Zap,         title: "Same Day Repairs",      desc: "Most repairs completed the same day." },
                      { icon: Search,      title: "Free Diagnostics",      desc: "We find the issue first, so you know." },
                      { icon: ShieldCheck, title: "Genuine Quality Parts", desc: "Reliable parts for lasting performance." },
                      { icon: Award,       title: "Expert Technicians",    desc: "Skilled professionals you can rely on." },
                    ].map((f) => (
                      <div key={f.title} className="flex items-start gap-4 py-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-[#005fee]">
                          <f.icon className="h-4 w-4" strokeWidth={2} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{f.title}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{f.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-5 mt-6">
                    <Link to="/book">
                      <button className="inline-flex items-center gap-2 rounded-lg bg-[#005fee] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0047c4] transition-colors">
                        <Calendar className="h-4 w-4" /> Book a Repair
                      </button>
                    </Link>
                    <Link to="/about" className="inline-flex items-center gap-1 text-sm font-semibold text-[#005fee] hover:underline">
                      Learn more <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>

              {/* RIGHT: Track Your Repair */}
              <Reveal delay={0.08}>
                <div className="rounded-xl border border-slate-200 bg-white p-8 flex flex-col gap-6 shadow-sm h-full">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#005fee]">Track Your Repair</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">Track your repair</h3>
                    <p className="text-sm text-slate-500 mt-1">Stay updated on your repair status in real time. We'll show you exactly where your device is in our workflow.</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input type="text" placeholder="Enter your tracking ID (e.g. FIX-89045)"
                        className="w-full rounded-lg border border-slate-200 bg-white pl-9 pr-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-[#005fee] focus:ring-2 focus:ring-[#005fee]/15 transition" />
                    </div>
                    <button className="rounded-lg bg-[#005fee] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0047c4] transition-colors shrink-0">
                      Track Now
                    </button>
                  </div>
                  
                  {/* Progress stepper */}
                  <div className="relative flex items-start justify-between mt-2 mb-2">
                    <div className="absolute top-5 left-0 right-0 flex items-center px-6 pointer-events-none">
                      <div className="flex-1 h-[2px] bg-[#005fee]" />
                      <div className="flex-[3] h-[1px] bg-slate-200" />
                    </div>
                    {[
                      { icon: PackageCheck,  label: "Received",  desc: "Device logged in.",   active: true  },
                      { icon: Search,        label: "Diagnosis", desc: "Checking the issue.", active: false },
                      { icon: Wrench,        label: "Repairing", desc: "Experts are fixing.", active: false },
                      { icon: ShieldCheck,   label: "Testing",   desc: "Quality checks.",     active: false },
                      { icon: CheckCircle2,  label: "Ready",     desc: "Ready for pickup.",   active: false },
                    ].map((step) => (
                      <div key={step.label} className="relative flex flex-col items-center text-center w-[18%]">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 z-10 ${step.active ? "border-[#005fee] bg-white text-[#005fee]" : "border-slate-200 bg-white text-slate-400"}`}>
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
                    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 transition hover:border-slate-300">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-[#005fee]">
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
                    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 transition hover:border-slate-300">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-[#005fee]">
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

            {/* Stats row inside card */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-slate-100 pt-8">
              {[
                { icon: Smartphone,  value: "10,000+",  label: "Devices Repaired",      sub: "Trusted by thousands of customers" },
                { icon: Smile,       value: "98%",      label: "Customer Satisfaction", sub: "Based on real customer feedback" },
                { icon: Clock,       value: "1–3 Days", label: "Average Turnaround",    sub: "Most repairs completed within 1–3 days" },
                { icon: ShieldCheck, value: "90 Days",  label: "Warranty Protected",    sub: "Warranty on parts and labor" },
              ].map((s, i) => (
                <Reveal key={s.label} delay={i * 0.06}>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-400">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-slate-900">{s.value}</div>
                      <div className="text-xs font-semibold text-slate-700">{s.label}</div>
                      <div className="text-[10px] text-slate-400 leading-tight mt-0.5">{s.sub}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPRESS SERVICE ── */}
      <section className="py-24 bg-white relative">
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
              <div className="relative w-full aspect-[4/3] lg:aspect-square bg-gradient-to-br from-[#f0f6ff] to-[#e0edff] rounded-[2.5rem] overflow-hidden flex items-center justify-center shadow-inner">
                {/* Float Card */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl w-48 z-10 border border-white/40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#005fee] mb-3">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="text-sm font-bold text-slate-900 leading-tight mb-1">Same-day<br/><span className="text-[#005fee]">Service</span></div>
                  <div className="text-[11px] text-slate-500 leading-tight">Most repairs completed in 30–60 minutes.</div>
                </div>
                {/* 3D Phone Image */}
                <img src={phoneLightning} alt="Express Repair Phone" className="h-[110%] object-contain drop-shadow-2xl translate-x-8" />
              </div>
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

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/60">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#005fee] mb-3">Testimonials</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Words From Our Customers</h2>
              <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Real reviews from real people across Nuneaton who trust us with their devices.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <Card className="group relative h-full p-8 rounded-[1.5rem] border border-slate-200/70 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.3)] hover:border-sky-300/60">
                  <div className="absolute top-6 right-6 text-7xl leading-none font-serif text-sky-500/10 select-none">&ldquo;</div>
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-6 relative">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 grid place-items-center text-white font-semibold text-sm shadow-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-slate-950">{t.name}</div>
                      <div className="text-xs text-slate-500">Verified Customer</div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIT OUR STORE ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-12 md:p-16 text-white shadow-[0_40px_120px_-50px_rgba(14,116,144,0.6)]">
              <motion.div className="absolute inset-0 opacity-25" initial={{ scale: 1.1 }} whileInView={{ scale: 1 }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }}>
                <img src={workshopImage} alt="" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-blue-950/70 to-slate-900/90" />
              </motion.div>
              <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
              <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="relative grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-sky-300 font-semibold mb-4">Visit Our Store</p>
                  <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight mb-2">Let&apos;s Fix It</h3>
                  <h3 className="font-serif italic text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight text-primary-glow mb-6">Together.</h3>
                  <p className="text-white/80 mb-8 leading-relaxed text-lg">Drop in for a free diagnostic, friendly advice, or to browse our refurbished stock and accessories.</p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 shrink-0">
                        <Wrench className="w-5 h-5 text-primary-glow" />
                      </div>
                      <div className="text-sm text-white/90 leading-relaxed">
                        <div className="font-semibold text-white">Address</div>
                        6 Harefield Road, Nuneaton, CV11 4HD
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 shrink-0">
                        <Award className="w-5 h-5 text-primary-glow" />
                      </div>
                      <div className="text-sm text-white/90 leading-relaxed">
                        <div className="font-semibold text-white">Call Us</div>
                        07415 278767
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="lg" className="rounded-sm bg-white text-slate-950 hover:bg-slate-100 px-8 h-12 uppercase tracking-widest text-xs font-semibold">
                      <Link to="/contact">Get Directions</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-sm border-white/40 text-white bg-transparent hover:bg-white/10 px-8 h-12 uppercase tracking-widest text-xs font-semibold">
                      <Link to="/book">Book a Repair</Link>
                    </Button>
                  </div>
                </div>
                <div className="hidden md:block text-right">
                  <div className="font-serif text-5xl lg:text-6xl font-normal text-white/95 leading-[1.05] tracking-tight">Express Phone</div>
                  <div className="font-serif italic text-5xl lg:text-6xl font-normal text-primary-glow leading-[1.05] tracking-tight">&amp; Laptop Repair</div>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
                    <span className="h-px w-8 bg-white/40" /> Nuneaton
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
