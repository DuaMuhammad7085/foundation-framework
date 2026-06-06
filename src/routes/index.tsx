import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Smartphone, Laptop, Tablet, Battery, Droplets, MonitorSmartphone, Bug,
  Zap, Award, ShieldCheck, Star, ArrowRight, CheckCircle2, Recycle, PoundSterling, Truck,
  Wrench, PackageCheck, Search, Shield, Cable, Headphones, Car, Tv,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-devices.jpg";
import workshopImage from "@/assets/workshop.jpg";
import explodedImage from "@/assets/repair-exploded.jpg";
import svcScreen from "@/assets/svc-screen.jpg";
import svcBattery from "@/assets/svc-battery.jpg";
import svcWater from "@/assets/svc-water.jpg";
import svcCamera from "@/assets/svc-camera.jpg";
import svcCharging from "@/assets/svc-charging.jpg";
import svcLaptopImg from "@/assets/svc-laptop.jpg";

import catLaptop from "@/assets/cat-laptop.jpg";
import catTablet from "@/assets/cat-tablet.jpg";
import catWatch from "@/assets/cat-watch.jpg";
import catTap from "@/assets/cat-tap.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Express Phone & Laptop Repair — Nuneaton | Repairs, Trade-In & Accessories" },
      { name: "description", content: "Same-day phone, laptop & tablet repairs in Nuneaton. Sell or buy refurbished devices, browse accessories. Free diagnostics, 90-day warranty. Call 07415 278767." },
    ],
  }),
  component: HomePage,
});

const serviceCategories = [
  { icon: Smartphone, img: svcScreen, title: "Mobile Phone Repair", items: ["Screen replacement", "Charging port repair", "Speaker & microphone", "Camera repair", "Software issues"] },
  { icon: Laptop, img: svcLaptopImg, title: "Laptop Repair", items: ["Keyboard replacement", "Battery replacement", "Overheating & fan", "SSD / RAM upgrades", "Screen repair"] },
  { icon: Tablet, img: catTablet, title: "Tablet Repair", items: ["Display repair", "Charging repair", "Software troubleshooting", "Battery replacement"] },
  { icon: MonitorSmartphone, img: svcScreen, title: "Screen Replacement", items: ["All major brands", "Same-day service", "Original-quality displays", "90-day warranty"] },
  { icon: Battery, img: svcBattery, title: "Battery Replacement", items: ["Fast-draining batteries", "Swollen batteries", "Quality cells", "30-minute swap"] },
  { icon: Droplets, img: svcWater, title: "Water Damage", items: ["Free diagnostics", "Ultrasonic cleaning", "Component-level repair", "Emergency support"] },
  { icon: Bug, img: catLaptop, title: "Software Issues", items: ["Device lag", "Virus removal", "OS installation", "Data backup & recovery"] },
  { icon: ShieldCheck, img: svcCamera, title: "Phone Unlocking", items: ["Network unlocking", "iCloud assistance", "Most makes & models", "Fast turnaround"] },
  { icon: Smartphone, img: svcCharging, title: "Charging Port Repair", items: ["iPhone & Android", "Loose connections", "Genuine parts", "Same-day fix"] },
];

const pricing = [
  { label: "Screen Repair", price: "from £39" },
  { label: "Battery Replacement", price: "from £29" },
  { label: "Charging Port", price: "from £25" },
  { label: "Water Damage", price: "from £49" },
  { label: "Software Fix", price: "from £19" },
  { label: "Laptop Service", price: "from £39" },
];

const accessoryCategories = [
  { icon: Smartphone, img: svcScreen, title: "Phone Cases", items: ["Silicone", "Clear", "Rugged", "Wallet", "Leather", "MagSafe"] },
  { icon: Shield, img: svcScreen, title: "Screen Protectors", items: ["Tempered Glass", "Privacy", "Anti-Glare", "Camera Lens"] },
  { icon: Zap, img: svcCharging, title: "Chargers & Power", items: ["Fast Chargers", "Power Banks", "Wireless Pads", "Travel Adapters"] },
  { icon: Cable, img: svcCharging, title: "Cables", items: ["USB-C", "Lightning", "Micro USB", "HDMI", "Laptop Charging"] },
  { icon: Laptop, img: catLaptop, title: "Laptop Accessories", items: ["Chargers", "Bags & Sleeves", "Wireless Mice", "Keyboards", "USB Hubs"] },
  { icon: Headphones, img: catTablet, title: "Audio & Headphones", items: ["Wired Earphones", "Wireless Earbuds", "Headphones", "Bluetooth Speakers"] },
  { icon: Car, img: svcCharging, title: "Car Accessories", items: ["Phone Holders", "Car Chargers", "AUX Cables", "Bluetooth Adapters"] },
  { icon: Tv, img: catLaptop, title: "TV Accessories", items: ["HDMI Cables", "Wall Mounts", "Remotes", "Streaming Sticks"] },
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

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-white/15 backdrop-blur-sm rounded-xl px-3 py-2 min-w-[60px] text-center">
      <div className="text-2xl md:text-3xl font-bold tabular-nums">{String(value).padStart(2, "0")}</div>
      <div className="text-[10px] uppercase tracking-wider text-white/70">{label}</div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function HomePage() {
  const target = new Date(Date.now() + 3 * 86400000);
  const { d, h, m, s } = useCountdown(target);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroScale = useTransform(scrollY, [0, 600], [1.05, 1.15]);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative text-white overflow-hidden min-h-[88vh] flex items-center">
        <motion.img
          src={heroImage}
          alt="Phone and laptop ready for repair"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y: heroY, scale: heroScale }}
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,oklch(0.18_0.08_258)/0.92_0%,oklch(0.25_0.18_258)/0.6_45%,transparent_75%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,oklch(0.55_0.23_258)/0.35,transparent_60%)] mix-blend-screen" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

        <div className="relative max-w-7xl mx-auto px-4 pt-28 pb-40 w-full">
          <div className="max-w-2xl">
            <motion.span
              custom={0} initial="hidden" animate="show" variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary-glow/40 bg-primary/20 backdrop-blur-sm text-[11px] uppercase tracking-[0.2em] text-primary-glow font-medium mb-8"
            >
              <Award className="w-3.5 h-3.5" /> Nuneaton&apos;s Trusted Repair Shop
            </motion.span>
            <motion.h1 custom={1} initial="hidden" animate="show" variants={fadeUp}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.02] mb-2 tracking-tight">
              Express Repair.
            </motion.h1>
            <motion.h1 custom={2} initial="hidden" animate="show" variants={fadeUp}
              className="font-serif italic text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.02] mb-8 tracking-tight text-primary-glow">
              Done Right.
            </motion.h1>
            <motion.p custom={3} initial="hidden" animate="show" variants={fadeUp}
              className="text-base md:text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
              Professional same-day repairs for phones, laptops, tablets and electronic devices —
              fast service, free diagnostics, quality parts and fair local pricing in the heart of Nuneaton.
            </motion.p>
            <motion.div custom={4} initial="hidden" animate="show" variants={fadeUp}
              className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
              {["Same Day Repair", "Free Diagnostics", "90-Day Warranty"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-primary-glow" /> {t}
                </span>
              ))}
            </motion.div>
            <motion.div custom={5} initial="hidden" animate="show" variants={fadeUp}
              className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold">
                <Link to="/book">Book a Repair</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/50 text-white bg-transparent hover:bg-white/10 rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold">
                <Link to="/profile">Track My Repair</Link>
              </Button>
            </motion.div>
            <motion.div custom={6} initial="hidden" animate="show" variants={fadeUp}
              className="flex items-center gap-4 mt-10">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-glow to-white border-2 border-white/30" />
                ))}
              </div>
              <div>
                <div className="text-sm font-medium">Trusted by 10,000+ happy customers</div>
                <div className="text-xs text-white/70 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-primary-glow text-primary-glow" /> 4.9 average rating
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </section>
      <div className="h-16" />

      {/* ========== SERVICES ========== */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Repairs for Every Device</h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">From phones to laptops — fast, professional repairs backed by a 90-day warranty.</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCategories.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.08}>
                <Card className="overflow-hidden hover:shadow-card transition-all hover:-translate-y-1 group p-0 h-full">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-gradient-brand grid place-items-center shadow-glow">
                      <c.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-xl mb-3">{c.title}</h3>
                    <ul className="space-y-2">
                      {c.items.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* Pricing strip */}
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/40 bg-white/95 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.45)] px-8 py-12 mt-20 mb-10">
              <div className="absolute inset-x-8 top-0 h-44 rounded-b-[2rem] bg-gradient-to-b from-primary/20 to-transparent blur-2xl" />
              <div className="relative max-w-3xl mx-auto text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-600 font-semibold mb-3">Pricing Preview</p>
                <h3 className="text-3xl md:text-4xl font-semibold text-slate-950">Transparent, Honest Pricing</h3>
                <p className="text-slate-600 mt-3">Free diagnostics. No hidden fees. Final price confirmed before any repair.</p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                {pricing.map((p, i) => (
                  <Reveal key={p.label} delay={(i % 3) * 0.06}>
                    <Card className="group p-6 flex items-center justify-between rounded-3xl border border-slate-200/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <span className="font-medium text-slate-900">{p.label}</span>
                      <span className="text-sky-600 font-semibold">{p.price}</span>
                    </Card>
                  </Reveal>
                ))}
              </div>
              <div className="relative mt-10 text-center">
                <Button asChild size="lg" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-blue-500 px-8 py-3 text-white shadow-glow transition duration-300 hover:scale-[1.02] hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.8)]">
                  <Link to="/book">Book Repair Now <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why choose us + tracker */}
      <section className="relative py-28 overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.08),transparent_30%)]">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <img src={workshopImage} alt="Workshop background" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white shadow-[0_28px_90px_-48px_rgba(15,23,42,0.28)] p-8 sm:p-10">
                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-sky-100/70 blur-3xl" />
                <span className="relative inline-flex text-xs uppercase tracking-[0.35em] text-sky-600 font-semibold mb-6">Why Choose Us</span>
                <h2 className="relative text-4xl md:text-5xl font-semibold tracking-tight text-slate-950 max-w-2xl mb-4">Repair experience like never before</h2>
                <p className="text-slate-600 max-w-xl mb-8">Fast, honest repairs backed by quality parts and expert technicians. We keep every step clear, quick and dependable.</p>
                <div className="space-y-4">
                  {[
                    { icon: Zap, t: "Same Day Repairs", d: "Most repairs completed quickly." },
                    { icon: Search, t: "Free Diagnostics", d: "Know the problem before paying." },
                    { icon: ShieldCheck, t: "Quality Parts", d: "Reliable replacement components." },
                    { icon: Wrench, t: "Experienced Technicians", d: "Skilled repair specialists." },
                    { icon: Award, t: "Affordable Pricing", d: "Competitive local pricing." },
                  ].map((f) => (
                    <div key={f.t} className="group flex gap-4 rounded-3xl border border-slate-200/80 bg-slate-50/90 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/60">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600">
                        <f.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-950">{f.t}</div>
                        <div className="text-sm text-slate-500">{f.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-700 via-blue-600 to-indigo-700 p-8 sm:p-10 text-white shadow-[0_28px_90px_-48px_rgba(14,116,144,0.55)]">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_25%)]" />
                <div className="relative">
                  <span className="inline-flex text-xs uppercase tracking-[0.35em] text-sky-200 font-semibold mb-3">Track Your Repair</span>
                  <h3 className="text-4xl font-semibold mb-3">Track your repair</h3>
                  <p className="text-sky-100 text-sm max-w-xl mb-8">Stay updated on your repair status in real time.</p>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Input placeholder="Enter your tracking ID" className="flex-1 rounded-3xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-sky-200 focus:border-white/40" />
                    <Button className="w-full sm:w-auto rounded-3xl bg-white text-slate-950 font-semibold hover:bg-slate-100">Track Now</Button>
                  </div>
                  <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-5">
                    {[
                      { icon: PackageCheck, l: "Received" },
                      { icon: Search, l: "Diagnosis" },
                      { icon: Wrench, l: "Repairing" },
                      { icon: ShieldCheck, l: "Testing" },
                      { icon: CheckCircle2, l: "Collection" },
                    ].map((step) => (
                      <div key={step.l} className="rounded-3xl bg-white/10 p-4 text-center transition-all duration-300 hover:bg-white/20">
                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-3xl bg-white/15 text-white">
                          <step.icon className="w-5 h-5" />
                        </div>
                        <div className="text-xs text-sky-100">{step.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== ACCESSORIES ========== */}
      <section id="accessories" className="py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50/80">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.35em] text-sky-600 font-semibold mb-3">Accessories</p>
              <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4">Power Up Your Devices</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">Premium quality accessories for phones, laptops, tablets and more — carefully selected and tested. Available in our Nuneaton store.</p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {accessoryCategories.map((cat, i) => (
              <Reveal key={cat.title} delay={(i % 4) * 0.06}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-0 group h-full border border-slate-200/60 rounded-[1.5rem]">
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-200">
                    <img src={cat.img} alt={cat.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/90 shadow-lg">
                      <cat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-slate-950 mb-3">{cat.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((it) => (
                        <span key={it} className="text-xs px-3 py-1.5 bg-sky-500/10 text-sky-700 rounded-full font-medium">{it}</span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="relative rounded-[2rem] border border-sky-200/60 bg-gradient-to-br from-sky-50 to-blue-50/50 p-12 shadow-sm">
              <div className="max-w-3xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  {[
                    { icon: Award, t: "Premium Quality", d: "Carefully sourced and tested accessories." },
                    { icon: Truck, t: "In-Stock Selection", d: "Browse and purchase in our Nuneaton location." },
                    { icon: ShieldCheck, t: "30-Day Guarantee", d: "Full satisfaction guarantee on all accessories." },
                  ].map((item, i) => (
                    <Reveal key={item.t} delay={i * 0.1}>
                      <div className="text-center">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600">
                          <item.icon className="h-6 w-6" />
                        </div>
                        <h4 className="font-semibold text-slate-950 mb-2">{item.t}</h4>
                        <p className="text-sm text-slate-600">{item.d}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-sky-600 to-blue-500 text-white font-semibold hover:shadow-lg">
                    <Link to="/contact">Shop Accessories</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full border-slate-300 hover:bg-slate-100">
                    <Link to="/contact">Request an Item</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== SELL & RESELL ========== */}
      <section id="sell-resell" className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-20">
              <p className="text-xs uppercase tracking-[0.35em] text-sky-600 font-semibold mb-4">Sell & Resell</p>
              <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">Trade In. Trade Up.</h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">Sell your used device for fair market value with instant payment. Or browse our curated selection of refurbished phones and laptops — all tested, warranted, and priced to save you money.</p>
            </div>
          </Reveal>

          {/* Main Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <Reveal>
              <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200/60 shadow-[0_28px_90px_-48px_rgba(15,23,42,0.28)] transition-all duration-500 h-full hover:shadow-[0_40px_120px_-60px_rgba(15,23,42,0.4)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
                  <img src={svcScreen} alt="Sell your device" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-emerald-400/20 to-transparent" />
                </div>
                <div className="relative px-10 py-12 bg-white">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-emerald-600 mb-6 shadow-sm">
                    <Recycle className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold text-slate-950 mb-4">Sell Your Device</h3>
                  <p className="text-slate-700 mb-8 text-lg leading-relaxed">Bring your old phone, tablet or laptop for an honest valuation and same-day payment. We accept all conditions — from like-new to heavily used.</p>
                  <div className="space-y-4 mb-10">
                    {["Instant device valuation", "Cash or bank transfer payment", "Full data security wipe", "Same-day payment guaranteed", "No fuss, no hassle", "Walk in with device, walk out with cash"].map((i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 mt-0.5 shrink-0 flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-base text-slate-700 leading-relaxed">{i}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-6 text-base hover:shadow-xl transition-all">
                    <Link to="/contact">Get Your Quote Today <ArrowRight className="w-5 h-5 ml-2" /></Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="group relative overflow-hidden rounded-[2.5rem] border border-sky-200/40 shadow-[0_28px_90px_-48px_rgba(14,116,144,0.35)] transition-all duration-500 h-full hover:shadow-[0_40px_120px_-60px_rgba(14,116,144,0.45)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-sky-400 to-blue-600">
                  <img src={catLaptop} alt="Buy refurbished" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/30 to-transparent" />
                  <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-white/10 to-transparent" />
                </div>
                <div className="relative px-10 py-12 bg-gradient-to-b from-slate-950/95 via-slate-950 to-slate-900 text-white">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500/30 to-amber-500/10 text-yellow-300 mb-6 shadow-sm">
                    <PoundSterling className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold mb-4">Buy Refurbished</h3>
                  <p className="text-white/90 mb-8 text-lg leading-relaxed">Premium refurbished phones and laptops, fully tested and certified ready to go — save up to 40% vs new, with full warranty protection.</p>
                  <div className="space-y-4 mb-10">
                    {["Multi-point quality testing", "Full 12-month warranty included", "100% verified condition", "Expert in-store advice", "Quick device activation support", "30-day satisfaction guarantee"].map((i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-300 mt-0.5 shrink-0 flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-base text-white/95 leading-relaxed">{i}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full rounded-full bg-white text-slate-950 font-semibold py-6 text-base hover:bg-slate-100 transition-all hover:shadow-xl">
                    <Link to="/contact">Browse Our Stock <ArrowRight className="w-5 h-5 ml-2" /></Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* How It Works Section */}
          <Reveal>
            <div className="relative rounded-[2rem] border border-slate-200/60 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-16 shadow-md mb-20">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <p className="text-xs uppercase tracking-[0.35em] text-sky-600 font-semibold mb-3">Simple Process</p>
                  <h3 className="text-4xl md:text-5xl font-semibold text-slate-950 mb-4">How It Works</h3>
                  <p className="text-slate-600 text-lg max-w-2xl mx-auto">Whether selling or buying, the entire process takes just a few minutes.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { 
                      n: "01", 
                      t: "Tell Us What You Have", 
                      d: "Describe your device condition, model, and any damage. We'll give you an instant valuation or show available inventory." 
                    },
                    { 
                      n: "02", 
                      t: "Get Your Quote", 
                      d: "Receive a fair market price quote with complete transparency. No hidden fees or surprises — you see everything upfront." 
                    },
                    { 
                      n: "03", 
                      t: "Visit Our Store", 
                      d: "Come see the device in person at 6 Harefield Road, Nuneaton. Final inspection and confirmation before payment." 
                    },
                    { 
                      n: "04", 
                      t: "Instant Payment", 
                      d: "Walk out with cash same day or choose bank transfer. For refurbished devices, leave with your new purchase ready to use." 
                    },
                  ].map((step, i) => (
                    <Reveal key={step.n} delay={i * 0.12}>
                      <div className="group rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-sky-300/60">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-500/10 text-sky-700 font-bold text-lg mb-5 group-hover:bg-sky-500/30 transition-all">
                          {step.n}
                        </div>
                        <h4 className="font-semibold text-slate-950 mb-3 text-lg">{step.t}</h4>
                        <p className="text-slate-600 leading-relaxed text-base">{step.d}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Info Cards */}
          <Reveal>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Fair Valuation",
                  desc: "Our technicians assess each device thoroughly to ensure you get the best price for your condition.",
                  color: "from-emerald-500/20 to-teal-500/10",
                  textColor: "text-emerald-700",
                },
                {
                  icon: Truck,
                  title: "Fast & Convenient",
                  desc: "Same-day service with no appointment needed. Quick assessment, instant payment, ready to go.",
                  color: "from-sky-500/20 to-blue-500/10",
                  textColor: "text-sky-700",
                },
                {
                  icon: ShieldCheck,
                  title: "Data Security",
                  desc: "All devices receive certified data destruction. Your privacy and security are our top priority.",
                  color: "from-indigo-500/20 to-purple-500/10",
                  textColor: "text-indigo-700",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div className={`rounded-2xl border border-slate-200/60 bg-gradient-to-br ${item.color} p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} ${item.textColor} mb-5`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold text-slate-950 mb-3 text-lg">{item.title}</h4>
                    <p className="text-slate-700 leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Countdown promo */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="relative overflow-hidden bg-gradient-card-blue rounded-3xl p-8 md:p-12 text-white shadow-glow">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_50%,white,transparent_50%)]" />
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/80">Express Service</span>
                  <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-2">Fast Repairs. Fair Prices.</h3>
                  <p className="text-white/80 mb-5">Same-day repairs available for most devices.</p>
                  <div className="flex gap-2 mb-6">
                    <CountdownBox value={d} label="Days" />
                    <CountdownBox value={h} label="Hours" />
                    <CountdownBox value={m} label="Mins" />
                    <CountdownBox value={s} label="Secs" />
                  </div>
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Link to="/book">Book a Repair</Link>
                  </Button>
                </div>
                <div className="hidden md:flex justify-end">
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0 rounded-full bg-primary-glow/30 blur-3xl" />
                    <div className="relative w-full h-full grid place-items-center">
                      <Zap className="w-32 h-32 text-primary-glow drop-shadow-[0_0_30px_oklch(0.78_0.16_235)]" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background border-y">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gradient-brand">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* More than phones */}
      <section className="py-28 bg-gradient-to-b from-white via-slate-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.35em] text-sky-600 font-semibold mb-3">More Than Phones</p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-950">We Also Repair</h2>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Beyond mobile — our workshop handles laptops, tablets, unlocking and curated accessories under one roof.</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: catLaptop, t: "Laptop Repair", d: "Slow, broken or not booting? We bring laptops back to life." },
              { img: catTablet, t: "Tablet Repair", d: "Cracked screens, charging issues and battery swaps — sorted." },
              { img: catWatch, t: "Phone Unlocking", d: "Network unlocking for most makes and models, fast turnaround." },
              { img: catTap, t: "Accessories", d: "Cases, chargers, cables and audio — quality picks in store." },
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

      {/* Testimonials */}
      <section className="py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/60">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.35em] text-sky-600 font-semibold mb-3">Testimonials</p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-950">Words From Our Customers</h2>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Real reviews from real people across Nuneaton who trust us with their devices.</p>
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

      {/* Visit Our Store */}
      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-12 md:p-16 text-white shadow-[0_40px_120px_-50px_rgba(14,116,144,0.6)]">
              <motion.div
                className="absolute inset-0 opacity-25"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
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
                  <div className="font-serif italic text-5xl lg:text-6xl font-normal text-primary-glow leading-[1.05] tracking-tight">& Laptop Repair</div>
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
