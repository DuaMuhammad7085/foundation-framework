import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Smartphone, Laptop, Tablet, Battery, Droplets, MonitorSmartphone, Bug,
  ArrowRight, CheckCircle2, Award, Truck, ShieldCheck, Zap, Search, Wrench,
} from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-devices.jpg";
import svcScreen from "@/assets/svc-screen.jpg";
import svcBattery from "@/assets/svc-battery.jpg";
import svcWater from "@/assets/svc-water.jpg";
import svcCamera from "@/assets/svc-camera.jpg";
import svcCharging from "@/assets/svc-charging.jpg";
import svcLaptopImg from "@/assets/svc-laptop.jpg";
import catLaptop from "@/assets/cat-laptop.jpg";
import catTablet from "@/assets/cat-tablet.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Repair Services - Express Phone & Laptop Repair Nuneaton" },
      { name: "description", content: "Professional phone, laptop, and tablet repair services in Nuneaton. Same-day repairs, free diagnostics, quality parts, 90-day warranty." },
    ],
  }),
  component: ServicesPage,
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

function ServicesPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroScale = useTransform(scrollY, [0, 600], [1.05, 1.15]);

  return (
    <Layout>
      <PageHero
        image={heroImage}
        overlayClassName="bg-[linear-gradient(110deg,rgba(0,17,73,0.82)_0%,rgba(0,47,125,0.62)_40%,rgba(0,94,238,0.18)_75%,rgba(255,255,255,0.00)_100%)]"
        eyebrow="Professional Repairs"
        eyebrowClassName="border-[#005fee]/55 bg-[#eff6ff] text-[#005fee]"
        title={
          <>
            Expert Repair <span className="text-primary-glow">For Every Device.</span>
          </>
        }
        subtitle="Same-day phone, laptop and tablet repairs in Nuneaton. Expert diagnostics, quality parts, and a 90-day warranty on every repair."
        actions={
          <>
            <Button asChild size="lg" className="bg-[#005fee] hover:bg-[#0047c4] text-white rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold shadow-sm">
              <Link to="/book">Book a Repair</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#005fee] text-[#005fee] bg-white hover:bg-[#eff6ff] rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold">
              <Link to="/contact">Visit the Shop</Link>
            </Button>
          </>
        }
        aside={
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.22)] backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-white/80 font-semibold mb-5">Nuneaton workshop</p>
            <div className="space-y-4">
              {[
                { icon: Zap, label: "Same-day repairs" },
                { icon: Search, label: "Free diagnostics" },
                { icon: ShieldCheck, label: "90-day warranty" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#005fee] shadow-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-white">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* ========== SERVICES ========== */}
      <section className="py-28 bg-[#f8fbff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-[#005fee] font-semibold mb-3">Our Services</p>
              <h2 className="text-4xl md:text-5xl font-semibold text-slate-950">Repair solutions for phones, tablets and laptops.</h2>
              <p className="text-slate-600 mt-4 max-w-2xl">Trusted repairs with honest advice, transparent pricing and expert support from our Nuneaton workshop.</p>
            </div>
            <Button asChild size="lg" className="self-start rounded-sm bg-[#005fee] hover:bg-[#0047c4] text-white px-8 h-12 uppercase tracking-widest text-xs font-semibold shadow-sm">
              <Link to="/book">Book a Repair</Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCategories.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.08}>
                <Card className="overflow-hidden border border-slate-200/70 bg-white shadow-sm hover:shadow-card transition-all hover:-translate-y-1 group p-0 h-full">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-[#005fee] grid place-items-center shadow-sm">
                      <c.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="font-semibold text-xl mb-3 text-slate-950">{c.title}</h3>
                    <ul className="space-y-2">
                      {c.items.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#005fee] mt-0.5 shrink-0" /> {it}
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
            <div className="relative overflow-hidden rounded-3xl border border-[#dbeafe] bg-gradient-to-br from-[#eff6ff] via-[#f8fbff] to-[#ffffff] shadow-[0_40px_120px_-70px_rgba(0,95,238,0.15)] px-8 py-12 mt-20 mb-10">
              <div className="absolute -inset-x-8 top-0 h-44 rounded-b-[2rem] bg-gradient-to-b from-[#005fee]/12 to-transparent blur-2xl" />
              <div className="relative max-w-3xl mx-auto text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-[#005fee] font-semibold mb-3">Transparent Pricing</p>
                <h3 className="text-3xl md:text-4xl font-semibold text-slate-950">Fair Prices. No Hidden Fees.</h3>
                <p className="text-slate-600 mt-3">Free diagnostics. Final price confirmed before any repair.</p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                {pricing.map((p, i) => (
                  <Reveal key={p.label} delay={(i % 3) * 0.06}>
                    <Card className="group p-6 flex items-center justify-between rounded-xl border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <span className="font-medium text-slate-900">{p.label}</span>
                      <span className="text-[#005fee] font-semibold">{p.price}</span>
                    </Card>
                  </Reveal>
                ))}
              </div>
              <div className="relative mt-10 text-center">
                <Button asChild size="lg" className="rounded-sm bg-[#005fee] hover:bg-[#0047c4] text-white px-8 h-12 uppercase tracking-widest text-xs font-semibold">
                  <Link to="/book">Book Repair Now <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-28 bg-[#eef6ff]">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.35em] text-primary font-semibold mb-3">Why Choose Us</p>
              <h2 className="text-4xl md:text-5xl font-semibold text-slate-950">Repair Experience Like Never Before</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-4">Fast, honest repairs backed by quality parts and expert technicians.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, t: "Same Day Repairs", d: "Most repairs completed quickly." },
              { icon: Search, t: "Free Diagnostics", d: "Know the problem before paying." },
              { icon: ShieldCheck, t: "Quality Parts", d: "Reliable replacement components." },
              { icon: Wrench, t: "Experienced Technicians", d: "Skilled repair specialists." },
              { icon: Award, t: "Affordable Pricing", d: "Competitive local pricing." },
              { icon: Truck, t: "Fast Turnaround", d: "Quick service without cutting corners." },
            ].map((f, i) => (
              <Reveal key={f.t} delay={i * 0.06}>
                <Card className="group flex flex-col gap-4 rounded-lg border border-slate-200/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/60">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-950 text-lg">{f.t}</div>
                    <div className="text-sm text-slate-600 mt-1">{f.d}</div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#005fee] via-[#0078ff] to-[#0095ff] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Ready to Get Your Device Fixed?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Drop in for a free diagnostic or book a repair online.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-sm bg-white text-[#005fee] hover:bg-white/90 font-semibold h-12 uppercase tracking-widest text-xs px-8">
                <Link to="/book">Book a Repair</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-sm border-white/40 text-white bg-transparent hover:bg-white/10 h-12 uppercase tracking-widest text-xs px-8 font-semibold">
                <Link to="/contact">Visit the Shop</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
