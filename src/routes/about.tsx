import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Award, Heart, Target, ShieldCheck, Zap, Wrench, Clock, MapPin,
  Sparkles, CheckCircle2, ArrowRight, Building2, Leaf,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { GradientBackdrop } from "@/components/GradientBackdrop";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/about/Reveal";
import workshopImage from "@/assets/workshop.jpg";
import explodedImage from "@/assets/repair-exploded.jpg";
import svcScreen from "@/assets/svc-screen.jpg";
import svcLaptopImg from "@/assets/svc-laptop.jpg";
import logoAsset from "@/assets/express-logo.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Express Phone & Laptop Repair Nuneaton" },
      { name: "description", content: "Express Phone & Laptop Repair is Nuneaton's trusted local repair shop for phones, laptops and tablets. Same-day service, 90-day warranty." },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "10,000+", label: "Devices Repaired" },
  { value: "4.9★", label: "Customer Rating" },
  { value: "30–60 min", label: "Avg. Repair Time" },
  { value: "90 Days", label: "Repair Warranty" },
];

const values = [
  { icon: ShieldCheck, title: "Transparency First", text: "Clear diagnostics, upfront pricing, no surprise fees. You approve before we proceed." },
  { icon: Award, title: "Quality Craftsmanship", text: "Skilled technicians, quality parts and meticulous testing on every repair." },
  { icon: Heart, title: "Friendly Service", text: "We treat every device like our own and explain everything in plain language." },
  { icon: Zap, title: "Speed Without Shortcuts", text: "Same-day turnaround for most repairs, fully tested before handoff." },
];

const process = [
  { step: "01", title: "Free Diagnosis", text: "Pop in or book online. We inspect your device and explain the issue in plain English." },
  { step: "02", title: "Clear Quote", text: "You receive an upfront price and a realistic time estimate." },
  { step: "03", title: "Expert Repair", text: "Our technicians carry out the repair using quality replacement parts." },
  { step: "04", title: "Quality Check", text: "Multi-point testing for display, battery, sensors and connectivity." },
  { step: "05", title: "Warranty Handoff", text: "Pick up your device with a 90-day warranty and care tips." },
];

function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden text-primary-foreground min-h-[480px] md:min-h-[540px]">
        <GradientBackdrop variant="hero" />
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-glow/20 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" /> About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold max-w-2xl leading-[1.05]">
              Nuneaton's trusted <span className="text-primary-glow">repair shop.</span>
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-xl leading-relaxed">
              Express Phone & Laptop Repair is a local Nuneaton business offering fast, honest repairs
              for phones, laptops, tablets and more — with friendly service and a 90-day warranty.
            </p>
            <Stagger className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
              {stats.map((s) => (
                <StaggerItem key={s.label}>
                  <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-4 text-center">
                    <div className="text-xl md:text-2xl font-bold">{s.value}</div>
                    <div className="text-[11px] uppercase tracking-wider text-white/70 mt-1">{s.label}</div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
          <Reveal variant="slideLeft" className="hidden lg:block">
            <img src={logoAsset.url} alt="Express Phone & Laptop Repair" className="w-full max-w-md mx-auto drop-shadow-2xl" />
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal variant="slideRight">
            <img src={workshopImage} alt="Our workshop" className="rounded-2xl shadow-card w-full h-auto" loading="lazy" />
          </Reveal>
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Our Story</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Local repair done right</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We're a friendly, family-run repair shop based at 6 Harefield Road, Nuneaton. We started with
                a simple idea: repairs should be fast, fairly priced, and clearly explained.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-muted-foreground leading-relaxed mb-4">
                From cracked screens and tired batteries to water damage and software issues, we take the
                stress out of getting your device working again — usually the same day.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted-foreground leading-relaxed">
                Thousands of repairs later, we're proud to be one of Nuneaton's most-recommended local
                repair shops — and we still treat every customer like our first.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Purpose</p>
            <h2 className="text-3xl md:text-5xl font-bold">Mission & Vision</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal delay={0.05}>
              <Card className="relative overflow-hidden p-8 md:p-10 border-0 bg-gradient-card-blue text-white h-full">
                <Target className="w-10 h-10 text-primary-glow mb-4" />
                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                <p className="text-white/85 leading-relaxed">
                  To make device repair easy, affordable and trustworthy for everyone in Nuneaton and the
                  surrounding area — with honest advice and quality workmanship.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="relative overflow-hidden p-8 md:p-10 h-full hover:shadow-glow transition-shadow">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-brand opacity-10 rounded-full blur-2xl" />
                <Building2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the first place locals think of when their phone, laptop or tablet needs fixing —
                  known for honesty, speed and friendly service.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">What we stand for</p>
            <h2 className="text-3xl md:text-5xl font-bold">Core values</h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <Card className="p-6 h-full hover:shadow-card hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-brand grid place-items-center mb-4 shadow-glow group-hover:scale-105 transition-transform">
                    <v.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <Reveal>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">How we work</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our repair journey</h2>
              <p className="text-muted-foreground leading-relaxed">
                Every device follows a simple, structured workflow — so you always know what's happening
                and when to expect your device back.
              </p>
            </Reveal>
            <Reveal variant="slideLeft">
              <img src={explodedImage} alt="Phone repair process" className="w-full h-auto" loading="lazy" />
            </Reveal>
          </div>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {process.map((p) => (
              <StaggerItem key={p.step}>
                <div className="relative p-6 rounded-2xl bg-white/70 backdrop-blur border border-border/60 h-full hover:border-primary/30 hover:shadow-soft transition-all">
                  <span className="text-3xl font-bold text-gradient-brand opacity-90">{p.step}</span>
                  <h3 className="font-semibold mt-3 mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Workshop gallery */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Behind the bench</p>
            <h2 className="text-3xl md:text-5xl font-bold">Our workshop</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            <Reveal>
              <img src={svcScreen} alt="Screen repair workstation" className="rounded-2xl w-full aspect-square object-cover shadow-card" loading="lazy" />
            </Reveal>
            <Reveal delay={0.08}>
              <img src={workshopImage} alt="Repair bench" className="rounded-2xl w-full aspect-square object-cover shadow-card" loading="lazy" />
            </Reveal>
            <Reveal delay={0.16}>
              <img src={svcLaptopImg} alt="Laptop diagnostics" className="rounded-2xl w-full aspect-square object-cover shadow-card" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quality promise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-card-blue text-white p-10 md:p-14 shadow-glow"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_80%_20%,white,transparent_50%)]" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <Wrench className="w-10 h-10 text-primary-glow mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our quality promise</h2>
                <p className="text-white/85 leading-relaxed mb-6">
                  Every repair includes quality parts, multi-point testing and a 90-day warranty. If
                  something isn't right, we'll make it right — no fuss.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["90-Day Warranty", "Quality Parts", "Free Re-Inspection"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/15 text-xs font-medium border border-white/20">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <img src={logoAsset.url} alt="Express Phone & Laptop Repair" className="w-full max-w-sm drop-shadow-2xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal variant="slideRight">
              <img src={explodedImage} alt="Repair, don't replace" className="w-full h-auto" loading="lazy" />
            </Reveal>
            <Reveal>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-3">
                <Leaf className="w-4 h-4" /> Repair, don't replace
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Better for you, better for the planet</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every device we repair is one less in landfill — and a lot less spent on a brand-new phone
                or laptop. We're proud to be part of a more sustainable approach to technology.
              </p>
              <ul className="space-y-2">
                {[
                  "Responsible recycling of old parts",
                  "Honest advice on whether repair is worth it",
                  "Local service — no shipping, no waiting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Visit us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Visit us</p>
            <h2 className="text-3xl md:text-4xl font-bold">Pop into the shop</h2>
          </Reveal>
          <Card className="p-8 max-w-2xl mx-auto text-center">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-xl">Express Phone & Laptop Repair</h3>
            <p className="text-muted-foreground mt-2">6 Harefield Road<br />Nuneaton, CV11 4HD</p>
            <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> Mon–Sat: 10 AM – 6 PM
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to get your device fixed?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Book a repair online, give us a ring, or pop into the shop — we're here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-gradient-brand shadow-glow hover:opacity-95">
                <Link to="/book">Book a Repair <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
