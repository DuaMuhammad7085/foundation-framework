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
        eyebrow="Professional Repairs"
        title={
          <>
            Expert Repair <span className="text-primary-glow">For Every Device.</span>
          </>
        }
        subtitle="Professional phone, laptop, and tablet repair services. Expert technicians, quality parts, 90-day warranty on every repair."
      />

      {/* ========== SERVICES ========== */}
      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4">
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
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/40 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.45)] px-8 py-12 mt-20 mb-10">
              <div className="absolute -inset-x-8 top-0 h-44 rounded-b-[2rem] bg-gradient-to-b from-primary/20 to-transparent blur-2xl" />
              <div className="relative max-w-3xl mx-auto text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-primary font-semibold mb-3">Transparent Pricing</p>
                <h3 className="text-3xl md:text-4xl font-semibold text-slate-950">Fair Prices. No Hidden Fees.</h3>
                <p className="text-slate-600 mt-3">Free diagnostics. Final price confirmed before any repair.</p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                {pricing.map((p, i) => (
                  <Reveal key={p.label} delay={(i % 3) * 0.06}>
                    <Card className="group p-6 flex items-center justify-between rounded-lg border border-slate-200/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <span className="font-medium text-slate-900">{p.label}</span>
                      <span className="text-primary font-semibold">{p.price}</span>
                    </Card>
                  </Reveal>
                ))}
              </div>
              <div className="relative mt-10 text-center">
                <Button asChild size="lg" className="rounded-sm bg-primary text-white hover:bg-primary/90 px-8 h-12 uppercase tracking-widest text-xs font-semibold">
                  <Link to="/book">Book Repair Now <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/50">
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
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Ready to Get Your Device Fixed?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Drop in for a free diagnostic or book a repair online.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-sm bg-white text-primary hover:bg-white/90 font-semibold h-12 uppercase tracking-widest text-xs px-8">
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
