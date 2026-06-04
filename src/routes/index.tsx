import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Smartphone, Laptop, Tablet, Watch, Cpu, Droplets,
  Zap, Award, ShieldCheck, Star, ArrowRight, CheckCircle2,
  Wrench, PackageCheck, Search,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { GradientBackdrop } from "@/components/GradientBackdrop";
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
import svcTap from "@/assets/svc-tap.jpg";
import catLaptop from "@/assets/cat-laptop.jpg";
import catTablet from "@/assets/cat-tablet.jpg";
import catWatch from "@/assets/cat-watch.jpg";
import catTap from "@/assets/cat-tap.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Express Phone & Laptop Repair — Nuneaton | Same-Day Device Repairs" },
      { name: "description", content: "Professional same-day phone, laptop & tablet repairs in Nuneaton. Free diagnostics, quality parts, 90-day warranty. Call 07415 278767." },
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

const services = [
  { img: svcScreen, title: "Screen Replacement", desc: "Cracked or broken screen? We'll make it brand new." },
  { img: svcBattery, title: "Battery Replacement", desc: "Fast battery drain? We'll power you up again." },
  { img: svcWater, title: "Water Damage Repair", desc: "Don't panic — we can save your device." },
  { img: svcCamera, title: "Camera Repair", desc: "Blurry shots? We'll bring clarity back." },
  { img: svcCharging, title: "Charging Port Repair", desc: "Not charging? We'll fix the connection." },
  { img: svcLaptopImg, title: "Laptop Repair", desc: "From hardware to software, we fix it all." },
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

function HomePage() {
  const target = new Date(Date.now() + 3 * 86400000);
  const { d, h, m, s } = useCountdown(target);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative text-primary-foreground overflow-hidden">
        <GradientBackdrop variant="hero" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_20%,white,transparent_40%)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs uppercase tracking-widest mb-6">
              <Award className="w-3.5 h-3.5" /> Nuneaton's Trusted Repair Shop
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
              Express Phone<br />
              <span className="text-primary-glow">& Laptop Repair</span>
            </h1>
            <p className="text-lg text-white/80 max-w-md mb-8">
              Professional same-day repairs for phones, laptops, tablets and electronic devices. Fast service, free diagnostics, quality parts, and affordable prices.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Same Day Repair", "Free Diagnostics", "Genuine Quality Parts"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-primary-glow" /> {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
                <Link to="/book">Book a Repair</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white bg-white/10 hover:bg-white/20">
                <Link to="/profile">Track My Repair</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-8">
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
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Device repair showcase"
              className="rounded-3xl shadow-glow"
              width={1280}
              height={1024}
            />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-lg rounded-2xl px-4 py-3 flex items-center gap-3 shadow-card">
              <div className="w-10 h-10 rounded-full bg-gradient-brand grid place-items-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Quick Repair</div>
                <div className="text-sm font-semibold text-foreground">30–60 min</div>
              </div>
            </div>
          </div>
        </div>

        {/* Device categories floating bar */}
        <div className="relative max-w-7xl mx-auto px-4 -mb-12">
          <div className="bg-white rounded-2xl shadow-card p-4 grid grid-cols-3 md:grid-cols-6 gap-2">
            {deviceCategories.map((cat) => (
              <div key={cat.label} className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-accent/40 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-gradient-soft grid place-items-center">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-center">
                  <div className="text-xs font-semibold text-foreground">{cat.label}</div>
                  <div className="text-[10px] text-muted-foreground">Repair</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Expert Repairs. Every Device.</h2>
            <p className="text-muted-foreground mt-3">No matter the issue, we've got the fix.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((s) => (
              <Card key={s.title} className="overflow-hidden hover:shadow-card transition-all hover:-translate-y-1 group p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" width={640} height={480} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-lg bg-gradient-brand grid place-items-center shadow-glow">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-base mb-1">{s.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{s.desc}</p>
                  <Link to="/services" className="text-xs font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-gradient-brand shadow-glow">
              <Link to="/services">View All Services <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why choose us + tracker */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-6">
          <Card className="p-8 bg-white/80 backdrop-blur-sm">
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
                <img src={explodedImage} alt="Exploded view of phone repair" loading="lazy" width={900} height={900} className="w-full h-auto" />
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-card-blue text-white border-0">
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
        </div>
      </section>

      {/* Countdown promo */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4">
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
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background border-y">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-gradient-brand">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* More than phones */}
      <section className="py-16 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">More Than Phones</p>
            <h2 className="text-3xl md:text-4xl font-bold">We Also Repair</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { img: catLaptop, t: "Laptop Repair", d: "Performance issues? We'll get your laptop running like new." },
              { img: catTablet, t: "Tablet Repair", d: "Cracked screen or not charging? We fix tablets too." },
              { img: catWatch, t: "Phone Unlocking", d: "Network unlocking for most makes and models." },
              { img: catTap, t: "Accessories", d: "Cases, chargers, cables and more in store." },
            ].map((c) => (
              <Card key={c.t} className="relative overflow-hidden p-0 bg-gradient-card-blue text-white border-0 hover:shadow-glow transition-shadow min-h-[220px] flex">
                <div className="relative z-10 p-6 flex flex-col justify-between w-1/2">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{c.t}</h3>
                    <p className="text-xs text-white/80">{c.d}</p>
                  </div>
                  <Link to="/services" className="mt-3 self-start text-xs font-medium inline-flex items-center gap-1 bg-black/30 hover:bg-black/50 px-3 py-1.5 rounded-full transition-colors">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-3/5">
                  <img src={c.img} alt={c.t} loading="lazy" width={800} height={640} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.5_0.22_258)] via-[oklch(0.5_0.22_258)]/40 to-transparent" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Testimonials</p>
            <h2 className="text-4xl font-bold">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t) => (
              <Card key={t.name} className="p-6">
                <div className="flex gap-3 items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-brand" />
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-primary-glow text-primary-glow" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{t.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop CTA */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
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
        </div>
      </section>
    </Layout>
  );
}
