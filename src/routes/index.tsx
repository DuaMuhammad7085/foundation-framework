import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Smartphone, Laptop, Tablet, Cpu, Battery, Droplets, MonitorSmartphone, Bug,
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

const deviceCategories = [
  { icon: Smartphone, label: "iPhone" },
  { icon: Smartphone, label: "Android" },
  { icon: Tablet, label: "Tablet" },
  { icon: Laptop, label: "Laptop" },
  { icon: ShieldCheck, label: "Unlocking" },
  { icon: Cpu, label: "Accessories" },
];

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

          <div className="hidden md:flex absolute right-6 bottom-44 bg-white/95 backdrop-blur-lg rounded-2xl px-4 py-3 items-center gap-3 shadow-card">
            <div className="w-10 h-10 rounded-full bg-gradient-brand grid place-items-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Quick Repair</div>
              <div className="text-sm font-semibold text-foreground">30–60 min</div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 max-w-7xl mx-auto px-4 z-10">
          <div className="bg-white rounded-2xl shadow-card p-4 grid grid-cols-3 md:grid-cols-6 gap-2">
            {deviceCategories.map((cat) => (
              <a key={cat.label} href="#services" className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-accent/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-gradient-soft grid place-items-center">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-center">
                  <div className="text-xs font-semibold text-foreground">{cat.label}</div>
                  <div className="text-[10px] text-muted-foreground">Repair</div>
                </div>
              </a>
            ))}
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
            <div className="text-center mt-20 mb-8">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Pricing Preview</p>
              <h3 className="text-3xl md:text-4xl font-bold">Transparent, Honest Pricing</h3>
              <p className="text-muted-foreground mt-2">Free diagnostics. No hidden fees. Final price confirmed before any repair.</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {pricing.map((p, i) => (
              <Reveal key={p.label} delay={(i % 3) * 0.06}>
                <Card className="p-5 flex items-center justify-between">
                  <span className="font-medium">{p.label}</span>
                  <span className="text-primary font-semibold">{p.price}</span>
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-gradient-brand shadow-glow">
              <Link to="/book">Book Repair Now <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why choose us + tracker */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <Card className="p-8 bg-white/80 backdrop-blur-sm h-full">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <span className="text-xs uppercase tracking-widest text-primary font-semibold">Why Choose Us</span>
                  <h3 className="text-3xl font-bold mt-2 mb-6">Repair Experience<br />Like Never Before</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Zap, t: "Same Day Repairs", d: "Most repairs completed quickly." },
                      { icon: Search, t: "Free Diagnostics", d: "Know the problem before paying." },
                      { icon: ShieldCheck, t: "Quality Parts", d: "Reliable replacement components." },
                      { icon: Wrench, t: "Experienced Technicians", d: "Skilled repair specialists." },
                      { icon: Award, t: "Affordable Pricing", d: "Competitive local pricing." },
                    ].map((f) => (
                      <div key={f.t} className="flex gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent grid place-items-center shrink-0">
                          <f.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm">{f.t}</div>
                          <div className="text-xs text-muted-foreground">{f.d}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden md:block">
                  <img src={explodedImage} alt="Exploded view of phone repair" loading="lazy" className="w-full h-auto" />
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="p-8 bg-gradient-card-blue text-white border-0 h-full">
              <span className="text-xs uppercase tracking-widest text-white/80 font-semibold">Track Your Repair</span>
              <h3 className="text-3xl font-bold mt-2 mb-2">Track Your Repair</h3>
              <p className="text-white/80 text-sm mb-6">Stay updated on your repair status in real time.</p>
              <div className="flex gap-2 mb-8">
                <Input placeholder="Enter your tracking ID" className="bg-white/20 border-white/30 text-white placeholder:text-white/60" />
                <Button className="bg-white text-primary hover:bg-white/90 whitespace-nowrap">Track Now</Button>
              </div>
              <div className="grid grid-cols-5 gap-2 text-center text-[10px]">
                {[
                  { icon: PackageCheck, l: "Received" },
                  { icon: Search, l: "Diagnosis" },
                  { icon: Wrench, l: "Repairing" },
                  { icon: ShieldCheck, l: "Testing" },
                  { icon: CheckCircle2, l: "Collection" },
                ].map((step) => (
                  <div key={step.l}>
                    <div className="w-10 h-10 rounded-full bg-white/20 grid place-items-center mx-auto mb-2">
                      <step.icon className="w-4 h-4" />
                    </div>
                    {step.l}
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* ========== SELL & RESELL ========== */}
      <section id="sell-resell" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Sell & Resell</p>
              <h2 className="text-4xl md:text-5xl font-bold">Trade In. Trade Up.</h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Sell your used device for a fair price, or pick up a quality refurbished phone or laptop — with warranty included.</p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-6">
            <Reveal>
              <Card className="overflow-hidden p-0 h-full">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={svcScreen} alt="Sell your device" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-8">
                  <Recycle className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Sell Your Device</h3>
                  <p className="text-muted-foreground mb-6">Bring your old phone, tablet or laptop in for an honest valuation and same-day payment.</p>
                  <ul className="space-y-2 text-sm mb-6">
                    {["Honest, transparent valuation", "Cash or bank transfer payment", "Safe data wiping included"].map((i) => (
                      <li key={i} className="flex gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> {i}</li>
                    ))}
                  </ul>
                  <Button asChild className="bg-gradient-brand shadow-glow">
                    <Link to="/contact">Get a Quote <ArrowRight className="w-4 h-4 ml-1" /></Link>
                  </Button>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="overflow-hidden p-0 bg-gradient-card-blue text-white border-0 h-full">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={catLaptop} alt="Buy refurbished" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.3_0.18_258)] to-transparent" />
                </div>
                <div className="p-8">
                  <PoundSterling className="w-10 h-10 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Buy Refurbished</h3>
                  <p className="text-white/80 mb-6">Quality refurbished phones and laptops, fully tested and ready to go — at unbeatable prices.</p>
                  <ul className="space-y-2 text-sm mb-6">
                    {["Tested across multiple checkpoints", "Warranty included", "Friendly in-store advice"].map((i) => (
                      <li key={i} className="flex gap-2"><Truck className="w-4 h-4" /> {i}</li>
                    ))}
                  </ul>
                  <Button asChild className="bg-white text-primary hover:bg-white/90">
                    <Link to="/contact">Browse Devices <ArrowRight className="w-4 h-4 ml-1" /></Link>
                  </Button>
                </div>
              </Card>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-16 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">How It Works</h3>
              <p className="text-muted-foreground mb-10">Selling or buying — both take just a few minutes.</p>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { n: "01", t: "Tell us about your device" },
                  { n: "02", t: "Get an honest quote" },
                  { n: "03", t: "Bring it to our store" },
                  { n: "04", t: "Walk out with cash" },
                ].map((step, i) => (
                  <Reveal key={step.n} delay={i * 0.08}>
                    <div>
                      <div className="text-4xl font-bold text-gradient-brand mb-2">{step.n}</div>
                      <div className="text-sm font-medium">{step.t}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== ACCESSORIES ========== */}
      <section id="accessories" className="py-24 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Accessories</p>
              <h2 className="text-4xl md:text-5xl font-bold">Power Up Your Devices</h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Quality accessories for phones, laptops and tablets — all available in our Nuneaton store.</p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {accessoryCategories.map((cat, i) => (
              <Reveal key={cat.title} delay={(i % 4) * 0.06}>
                <Card className="overflow-hidden hover:shadow-card transition-all hover:-translate-y-1 p-0 group h-full">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={cat.img} alt={cat.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-gradient-brand grid place-items-center shadow-glow">
                      <cat.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-3">{cat.title}</h3>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cat.items.map((it) => (
                        <span key={it} className="text-xs px-2.5 py-1 bg-accent/50 text-accent-foreground rounded-full">{it}</span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="text-center mt-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Can't find what you need?</h3>
              <p className="text-muted-foreground mb-6">Pop into the shop or call us — we'll do our best to source it for you.</p>
              <Button asChild size="lg" className="bg-gradient-brand shadow-glow">
                <Link to="/contact">Request an Accessory</Link>
              </Button>
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
      <section className="py-16 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">More Than Phones</p>
              <h2 className="text-3xl md:text-4xl font-bold">We Also Repair</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { img: catLaptop, t: "Laptop Repair", d: "Performance issues? We'll get your laptop running like new." },
              { img: catTablet, t: "Tablet Repair", d: "Cracked screen or not charging? We fix tablets too." },
              { img: catWatch, t: "Phone Unlocking", d: "Network unlocking for most makes and models." },
              { img: catTap, t: "Accessories", d: "Cases, chargers, cables and more in store." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <Card className="relative overflow-hidden p-0 bg-gradient-card-blue text-white border-0 hover:shadow-glow transition-shadow min-h-[220px] flex h-full">
                  <div className="relative z-10 p-6 flex flex-col justify-between w-1/2">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{c.t}</h3>
                      <p className="text-xs text-white/80">{c.d}</p>
                    </div>
                    <a href="#services" className="mt-3 self-start text-xs font-medium inline-flex items-center gap-1 bg-black/30 hover:bg-black/50 px-3 py-1.5 rounded-full transition-colors">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="absolute right-0 top-0 bottom-0 w-3/5">
                    <img src={c.img} alt={c.t} loading="lazy" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.5_0.22_258)] via-[oklch(0.5_0.22_258)]/40 to-transparent" />
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Testimonials</p>
              <h2 className="text-4xl font-bold">What Our Customers Say</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <Card className="p-6 h-full">
                  <div className="flex gap-3 items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-brand" />
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className="w-3 h-3 fill-primary-glow text-primary-glow" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{t.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop CTA */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-card-blue p-10 md:p-14 text-white">
              <div className="absolute inset-0 opacity-20">
                <img src={workshopImage} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="relative grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/80 mb-2">Visit Our Store</p>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Let's Fix It Together!</h3>
                  <p className="text-white/80 mb-6">6 Harefield Road<br />Nuneaton, CV11 4HD<br />Call us: 07415 278767</p>
                  <Button asChild className="bg-white text-primary hover:bg-white/90">
                    <Link to="/contact">Get Directions</Link>
                  </Button>
                </div>
                <div className="text-right hidden md:block">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-primary-glow drop-shadow-lg leading-tight">Express Phone<br />& Laptop Repair</div>
                  <div className="text-white/70 mt-2">Nuneaton</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
