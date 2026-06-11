import { createFileRoute, Link } from "@tanstack/react-router";

import {
  Smartphone, Laptop, Tablet, Battery, Droplets, MonitorSmartphone, Bug,
  ArrowRight, CheckCircle2, Award, Truck, ShieldCheck, Zap, Search, Wrench,
} from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { SectionBackdrop } from "@/components/SectionBackdrop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/services-hero-section.png";
import svcMobileRepair from "@/assets/svc-mobile-repair.jpg";
import svcLaptopRepair from "@/assets/svc-laptop-repair.jpg";
import svcTabletRepair from "@/assets/svc-tablet-repair.jpg";
import svcScreenReplacement from "@/assets/svc-screen-replacement.jpg";
import svcBatteryReplacement from "@/assets/svc-battery-replacement.jpg";
import svcWaterDamage from "@/assets/svc-water-damage.jpg";
import svcSoftwareIssues from "@/assets/svc-software-issues.jpg";
import svcPhoneUnlocking from "@/assets/svc-phone-unlocking.jpg";
import svcChargingPort from "@/assets/svc-charging-port.jpg";

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
  { icon: Smartphone, img: svcMobileRepair, title: "Mobile Phone Repair", items: ["Screen replacement", "Charging port repair", "Speaker & microphone", "Camera repair", "Software issues"] },
  { icon: Laptop, img: svcLaptopRepair, title: "Laptop Repair", items: ["Keyboard replacement", "Battery replacement", "Overheating & fan", "SSD / RAM upgrades", "Screen repair"] },
  { icon: Tablet, img: svcTabletRepair, title: "Tablet Repair", items: ["Display repair", "Charging repair", "Software troubleshooting", "Battery replacement"] },
  { icon: MonitorSmartphone, img: svcScreenReplacement, title: "Screen Replacement", items: ["All major brands", "Same-day service", "Original-quality displays", "90-day warranty"], wip: false },
  { icon: Battery, img: svcBatteryReplacement, title: "Battery Replacement", items: ["Fast-draining batteries", "Swollen batteries", "Quality cells", "30-minute swap"], wip: false },
  { icon: Droplets, img: svcWaterDamage, title: "Water Damage", items: ["Free diagnostics", "Ultrasonic cleaning", "Component-level repair", "Emergency support"], wip: false },
  { icon: Bug, img: svcSoftwareIssues, title: "Software Issues", items: ["Device lag", "Virus removal", "OS installation", "Data backup & recovery"], wip: false },
  { icon: ShieldCheck, img: svcPhoneUnlocking, title: "Phone Unlocking", items: ["Network unlocking", "iCloud assistance", "Most makes & models", "Fast turnaround"], wip: false },
  { icon: Smartphone, img: svcChargingPort, title: "Charging Port Repair", items: ["iPhone & Android", "Loose connections", "Genuine parts", "Same-day fix"], wip: true },
  { icon: Search, img: svcMobileRepair, title: "Device Diagnostics", items: ["Hardware testing", "Software analysis", "Performance check", "Free consultation"], wip: true },
  { icon: Wrench, img: svcLaptopRepair, title: "Component Upgrade", items: ["RAM upgrades", "SSD installation", "GPU replacement", "Thermal pasting"], wip: true },
  { icon: Zap, img: svcBatteryReplacement, title: "Fast Charging Fix", items: ["Charger diagnostics", "Cable replacement", "Power adapter repair", "Quick fix available"], wip: true },
  { icon: Award, img: svcPhoneUnlocking, title: "Warranty Check", items: ["Service verification", "Repair history", "Part coverage", "Certification review"], wip: true },
  { icon: Truck, img: svcWaterDamage, title: "Express Pickup", items: ["Schedule collection", "Safe transport", "Rapid return", "Tracking updates"], wip: true },
  { icon: ShieldCheck, img: svcSoftwareIssues, title: "Security Tune-Up", items: ["Malware removal", "System hardening", "Backup setup", "Performance boost"], wip: true },
  { icon: MonitorSmartphone, img: svcScreenReplacement, title: "Display Upgrade", items: ["Higher-res screens", "Anti-glare coating", "Touch sensitivity", "Premium glass"], wip: true },
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
  return (
    <Layout>
      <PageHero
        image={heroImage}
        overlayClassName="bg-[linear-gradient(110deg,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.22)_40%,rgba(0,0,0,0.08)_75%,transparent_100%)]"
        eyebrow="Professional Repairs"
        eyebrowClassName="border-purple-500/55 bg-purple-50 text-purple-700"
        title={
          <>
            Expert Repair <span className="text-primary-glow">For Every Device.</span>
          </>
        }
        subtitle="Same-day phone, laptop and tablet repairs in Nuneaton. Expert diagnostics, quality parts, and a 90-day warranty on every repair."
        actions={
          <>
            <Button asChild size="lg" className="bg-purple-500 hover:bg-purple-600 text-white rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold shadow-sm">
              <Link to="/book">Book a Repair</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-purple-500 text-purple-700 bg-white hover:bg-purple-50 rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold">
              <Link to="/contact">Visit the Shop</Link>
            </Button>
          </>
        }
      />

      <div className="relative overflow-hidden bg-white">
        <SectionBackdrop />
        <div className="relative z-10">
          <section className="py-24 bg-transparent">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-14">
                <div className="max-w-3xl">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-purple-700 mb-3">Our Services</p>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Repair solutions for phones, tablets and laptops.</h2>
                  <p className="text-slate-500 mt-4 max-w-2xl">Trusted repairs with honest advice, transparent pricing and expert support from our Nuneaton workshop.</p>
                </div>
                <Button asChild size="lg" className="self-start rounded-sm bg-purple-500 hover:bg-purple-600 text-white px-8 h-12 uppercase tracking-widest text-xs font-semibold shadow-sm">
                  <Link to="/book">Book a Repair</Link>
                </Button>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviceCategories.map((c, i) => (
                  <Reveal key={c.title} delay={(i % 4) * 0.08}>
                    <Card className="group relative overflow-hidden rounded-[1.75rem] border border-purple-200 bg-white p-0 h-full shadow-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/40 to-transparent pointer-events-none" />
                      <div className="relative aspect-[4/3] overflow-hidden">
                        {c.wip ? (
                          <div className="absolute inset-0 flex items-center justify-center bg-purple-50 text-purple-700 text-3xl font-bold tracking-[0.24em] uppercase">
                            WIP
                          </div>
                        ) : (
                          <>
                            <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                          </>
                        )}
                        <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 shadow-lg">
                          <c.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="absolute bottom-4 left-5 right-5">
                          <h3 className="text-xl font-semibold text-white drop-shadow">{c.title}</h3>
                        </div>
                      </div>
                      <div className="p-6 relative z-10">
                        <ul className="space-y-2">
                          {c.items.map((it) => (
                            <li key={it} className="flex items-start gap-2 text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" /> {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <div className="relative overflow-hidden rounded-[2rem] border border-purple-200 bg-gradient-to-br from-purple-50 via-white to-purple-50/20 shadow-lg px-8 py-12 mt-20">
                  <div className="absolute -inset-x-8 top-0 h-44 rounded-b-[2rem] bg-gradient-to-b from-purple-300/10 to-transparent blur-2xl" />
                  <div className="relative max-w-3xl mx-auto text-center">
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-purple-700 mb-3">Transparent Pricing</p>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-950">Fair Prices. No Hidden Fees.</h3>
                    <p className="text-slate-500 mt-3">Free diagnostics. Final price confirmed before any repair.</p>
                  </div>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                    {pricing.map((p, i) => (
                      <Reveal key={p.label} delay={(i % 3) * 0.06}>
                        <Card className="group p-6 flex items-center justify-between rounded-[1.25rem] border border-purple-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-purple-300">
                          <span className="font-medium text-slate-900">{p.label}</span>
                          <span className="text-purple-600 font-semibold">{p.price}</span>
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
        </div>
      </div>

      <section className="relative py-24 bg-[#eef6ff]">
        <SectionBackdrop wash="bg-[#eef6ff]/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#005fee] mb-3">Why Choose Us</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Repair Experience Like Never Before</h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto mt-4">Fast, honest repairs backed by quality parts and expert technicians.</p>
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
                <Card className="group flex flex-col gap-4 rounded-[1.75rem] border border-slate-200/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.2)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-200/60 bg-white/50 text-[#005fee]">
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

      <section className="py-20 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Ready to Get Your Device Fixed?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Drop in for a free diagnostic or book a repair online.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-sm bg-white text-purple-600 hover:bg-white/90 font-semibold h-12 uppercase tracking-widest text-xs px-8">
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

export default ServicesPage;
