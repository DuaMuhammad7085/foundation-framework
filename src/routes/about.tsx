import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Award,
  Heart,
  Target,
  Users,
  ShieldCheck,
  Zap,
  Wrench,
  Clock,
  MapPin,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Building2,
  Cpu,
  Handshake,
  Leaf,
  TrendingUp,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { GradientBackdrop } from "@/components/GradientBackdrop";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ABOUT_IMAGES, TEAM_PHOTOS } from "@/assets/about-images";
import { ImagePlaceholder } from "@/components/about/ImagePlaceholder";
import { Reveal, Stagger, StaggerItem } from "@/components/about/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Fixora Smart Repair" },
      {
        name: "description",
        content:
          "Discover Fixora's story, mission, team and commitment to fast, transparent device repairs with genuine parts and a 90-day warranty.",
      },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "10,000+", label: "Devices Repaired" },
  { value: "4.9★", label: "Customer Rating" },
  { value: "30–60 min", label: "Avg. Repair Time" },
  { value: "90 Days", label: "Repair Warranty" },
  { value: "50+", label: "Expert Technicians" },
  { value: "12+", label: "Service Centers" },
];

const timeline = [
  {
    year: "2016",
    title: "The Beginning",
    text: "Fixora started as a small neighborhood repair desk with one bench, one microscope, and a promise: repairs should be honest, fast, and explained in plain language.",
  },
  {
    year: "2019",
    title: "Scaling Quality",
    text: "We invested in ESD-safe workstations, genuine-part sourcing, and technician certification programs — raising our quality bar with every device we touched.",
  },
  {
    year: "2022",
    title: "Smart Repair Platform",
    text: "Customers gained real-time repair tracking, digital estimates, and doorstep pickup — turning a traditional repair shop into a modern service experience.",
  },
  {
    year: "Today",
    title: "Nationwide Trust",
    text: "Thousands of repairs later, Fixora is trusted for phones, laptops, tablets, smartwatches, and more — backed by warranties, transparency, and care.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Transparency First",
    text: "Clear diagnostics, upfront pricing, and no surprise fees. You approve every step before we proceed.",
  },
  {
    icon: Award,
    title: "Craftsmanship",
    text: "Micro-soldering, component-level repair, and meticulous QA — because “good enough” isn’t good enough.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    text: "Your device holds your memories and work. We treat every repair like it’s our own phone on the line.",
  },
  {
    icon: Zap,
    title: "Speed With Safety",
    text: "Express turnaround without cutting corners — tested, cleaned, and warrantied before handoff.",
  },
];

const process = [
  {
    step: "01",
    title: "Free Diagnosis",
    text: "Walk in or book online. We inspect your device and explain the issue in simple terms — no jargon.",
  },
  {
    step: "02",
    title: "Clear Estimate",
    text: "You receive a transparent quote with part options (OEM / premium-grade) and an estimated timeline.",
  },
  {
    step: "03",
    title: "Expert Repair",
    text: "Certified technicians repair at component level when possible — saving data and reducing waste.",
  },
  {
    step: "04",
    title: "Quality Check",
    text: "Multi-point testing: display, battery health, sensors, connectivity, and cosmetic finish.",
  },
  {
    step: "05",
    title: "Warranty Handoff",
    text: "Pick up in-store or get doorstep delivery — with a 90-day warranty and care tips for longevity.",
  },
];

const team = [
  { name: "Arjun Singh", role: "Founder & CEO", bio: "15+ years in hardware repair and service operations." },
  { name: "Meera Joshi", role: "Head of Operations", bio: "Built Fixora’s multi-city logistics and QC systems." },
  { name: "Rahul Verma", role: "Lead Technician", bio: "Board-level and micro-soldering specialist." },
  { name: "Anika Roy", role: "Customer Success", bio: "Ensures every customer feels informed and supported." },
  { name: "Vikram Patel", role: "Parts & Supply", bio: "Genuine-part sourcing and inventory quality control." },
  { name: "Sana Khan", role: "Training Lead", bio: "Runs technician certification and SOP programs." },
];

const certifications = [
  "ESD-Safe Workstation Certified",
  "Component-Level Repair Training",
  "OEM-Grade Parts Sourcing",
  "Data Privacy & Handling SOPs",
  "ISO-Aligned Quality Checklists",
  "Customer Service Excellence",
];

function AboutPage() {
  return (
    <Layout>
      {/* Hero — background photo + brand gradient overlay */}
      <section className="relative overflow-hidden text-primary-foreground min-h-[520px] md:min-h-[580px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${ABOUT_IMAGES.heroBg}')` }}
          role="img"
          aria-label="Fixora repair workshop background"
        />
        <GradientBackdrop variant="hero" className="opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#051f45]/75 via-[#0a56d3]/35 to-transparent pointer-events-none" />
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-glow/20 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" /> About Fixora
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl leading-[1.05]">
              Repair, <span className="text-primary-glow">Reimagined.</span>
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-2xl leading-relaxed">
              We&apos;re building India&apos;s most trusted smart repair experience — where expert technicians,
              genuine parts, and radical transparency come together to bring your devices back to life.
            </p>
          </Reveal>
          <Stagger className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-4 text-center hover:bg-white/15 transition-colors">
                  <div className="text-xl md:text-2xl font-bold">{s.value}</div>
                  <div className="text-[11px] uppercase tracking-wider text-white/70 mt-1">{s.label}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal variant="slideRight">
            <ImagePlaceholder
              src={ABOUT_IMAGES.storyWorkshop}
              label="Our workshop / storefront"
              hint="about-story-workshop.jpg"
              aspect="video"
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Our Story</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">A decade of fixing what matters</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fixora began when a cracked screen meant weeks of waiting, vague quotes, and uncertain outcomes.
                We believed repair could be better — faster, clearer, and worthy of the devices you rely on every day.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Today we serve students, professionals, creators, and businesses with the same core promise: diagnose
                honestly, repair expertly, and stand behind every job with a real warranty.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted-foreground leading-relaxed">
                From screen swaps to board-level recovery, our workshops combine precision tools with human care —
                because behind every device is a person who needs it working again.
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
                  To make premium device repair accessible, transparent, and fast — using genuine parts,
                  certified expertise, and technology that keeps customers informed at every step.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="relative overflow-hidden p-8 md:p-10 h-full hover:shadow-glow transition-shadow">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-brand opacity-10 rounded-full blur-2xl" />
                <Building2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted smart repair brand — where every city has a Fixora standard:
                  honest diagnostics, sustainable repair practices, and delight in every handoff.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Milestones</p>
            <h2 className="text-3xl md:text-5xl font-bold">How we got here</h2>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.06}>
                  <div className="relative pl-8 pb-10 border-l-2 border-primary/20 last:pb-0">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-brand shadow-glow" />
                    <span className="text-sm font-bold text-primary">{item.year}</span>
                    <h3 className="text-xl font-semibold mt-1 mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal variant="slideLeft">
              <ImagePlaceholder
                src={ABOUT_IMAGES.timeline}
                label="Timeline / heritage collage"
                hint="about-timeline.jpg"
                aspect="portrait"
                className="lg:sticky lg:top-24"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">What we stand for</p>
            <h2 className="text-3xl md:text-5xl font-bold">Core values</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              These principles guide every diagnosis, every repair, and every conversation at Fixora.
            </p>
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
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <Reveal>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">How we work</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">The Fixora repair journey</h2>
              <p className="text-muted-foreground leading-relaxed">
                Every device follows a structured workflow — from intake to warranty — so you always know
                what&apos;s happening and when to expect your device back.
              </p>
            </Reveal>
            <Reveal variant="slideLeft">
              <ImagePlaceholder
                src={ABOUT_IMAGES.process}
                label="Repair process in action"
                hint="about-process.jpg"
                aspect="video"
              />
            </Reveal>
          </div>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {process.map((p) => (
              <StaggerItem key={p.step}>
                <div className="relative p-6 rounded-2xl bg-accent/40 border border-border/60 h-full hover:border-primary/30 hover:shadow-soft transition-all">
                  <span className="text-3xl font-bold text-gradient-brand opacity-90">{p.step}</span>
                  <h3 className="font-semibold mt-3 mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Workshop & tech */}
      <section className="py-20 bg-gradient-soft overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Behind the bench</p>
            <h2 className="text-3xl md:text-5xl font-bold">Workshop & technology</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            <Reveal>
              <ImagePlaceholder
                src={ABOUT_IMAGES.workshopBench}
                label="ESD-safe workbench"
                hint="about-workshop-bench.jpg"
                aspect="square"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <ImagePlaceholder
                src={ABOUT_IMAGES.workshopSolder}
                label="Micro-soldering station"
                hint="about-workshop-solder.jpg"
                aspect="square"
              />
            </Reveal>
            <Reveal delay={0.16}>
              <ImagePlaceholder
                src={ABOUT_IMAGES.workshopDiagnostics}
                label="Diagnostic & QA tools"
                hint="about-workshop-diagnostics.jpg"
                aspect="square"
              />
            </Reveal>
          </div>
          <Reveal delay={0.1} className="mt-10">
            <Card className="p-8 md:p-10 bg-white/80 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-3">
                    <Cpu className="w-4 h-4" /> Smart repair stack
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Tools that match the problem</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    We use professional-grade hot air stations, microscopes, battery analyzers, and
                    ultrasonic cleaners — paired with software diagnostics for phones, tablets, and laptops.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Real-time repair tracking for customers",
                      "Digital intake with photo documentation",
                      "Battery health & display calibration checks",
                      "Secure data-handling protocols",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <ImagePlaceholder
                  src={ABOUT_IMAGES.techDashboard}
                  label="Technology / dashboard screenshot"
                  hint="about-tech-dashboard.jpg"
                  aspect="video"
                />
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Quality promise */}
      <section className="py-20 md:py-24">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">The Fixora quality promise</h2>
                <p className="text-white/85 leading-relaxed mb-6">
                  Every repair includes genuine or premium-grade parts, multi-point testing, and a 90-day
                  warranty. If something isn&apos;t right, we make it right — no runaround.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["90-Day Warranty", "Genuine Parts", "Free Re-Inspection"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/15 text-xs font-medium border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ImagePlaceholder
                src={ABOUT_IMAGES.qualityHandoff}
                label="Quality check / happy handoff"
                hint="about-quality-handoff.jpg"
                aspect="video"
                className="border-white/30 bg-white/5 [&_p]:text-white [&_p.text-muted-foreground]:text-white/70"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-14">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Our people</p>
            <h2 className="text-3xl md:text-5xl font-bold">Meet the team</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Engineers, technicians, and customer-care specialists united by one goal: repair done right.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((p) => (
              <StaggerItem key={p.name}>
                <Card className="overflow-hidden hover:shadow-card transition-all hover:-translate-y-1 group">
                  <ImagePlaceholder
                    src={TEAM_PHOTOS[p.name]}
                    label={`${p.name} — photo`}
                    hint={TEAM_PHOTOS[p.name]?.split("/").pop()}
                    aspect="square"
                    className="rounded-none border-0 border-b-2 border-dashed"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-lg">{p.name}</h3>
                    <p className="text-sm text-primary font-medium">{p.role}</p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.bio}</p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Standards</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & practices</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We invest continuously in training, equipment, and process — so your device is handled by
              people who know exactly what they&apos;re doing.
            </p>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-accent grid place-items-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal variant="slideLeft">
            <div className="grid grid-cols-2 gap-4">
              <ImagePlaceholder src={ABOUT_IMAGES.cert1} label="Certification badge 1" hint="about-cert-1.png" aspect="square" />
              <ImagePlaceholder src={ABOUT_IMAGES.cert2} label="Certification badge 2" hint="about-cert-2.png" aspect="square" />
              <ImagePlaceholder src={ABOUT_IMAGES.partner1} label="Partner logo 1" hint="about-partner-1.png" aspect="square" />
              <ImagePlaceholder src={ABOUT_IMAGES.partner2} label="Partner logo 2" hint="about-partner-2.png" aspect="square" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal variant="slideRight">
              <ImagePlaceholder
                src={ABOUT_IMAGES.community}
                label="Community / sustainability"
                hint="about-community.jpg"
                aspect="video"
              />
            </Reveal>
            <Reveal>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-3">
                <Leaf className="w-4 h-4" /> Community & sustainability
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Repair over replace</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every device we save from the landfill is a win for the planet and your wallet. We promote
                responsible repair, responsible recycling of e-waste, and education on device longevity.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Fixora partners with local communities for repair awareness workshops, student discounts,
                and business device-care programs — because access to trustworthy repair should be universal.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="p-4 flex gap-3 items-start">
                  <Handshake className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm">Business partnerships</div>
                    <p className="text-xs text-muted-foreground mt-1">Fleet care & bulk repair SLAs for teams.</p>
                  </div>
                </Card>
                <Card className="p-4 flex gap-3 items-start">
                  <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm">Education programs</div>
                    <p className="text-xs text-muted-foreground mt-1">Workshops on device care and safety.</p>
                  </div>
                </Card>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Visit us</p>
            <h2 className="text-3xl md:text-4xl font-bold">Where to find Fixora</h2>
          </Reveal>
          <Stagger className="grid md:grid-cols-3 gap-6">
            {[
              { city: "Mumbai", address: "123 Tech Street, Mega City — 400001", hours: "Mon–Sun: 10 AM – 8 PM" },
              { city: "Delhi NCR", address: "45 Cyber Hub, Gurugram — 122002", hours: "Mon–Sat: 10 AM – 7 PM" },
              { city: "Bangalore", address: "88 Innovation Road, Koramangala — 560034", hours: "Mon–Sun: 10 AM – 8 PM" },
            ].map((loc) => (
              <StaggerItem key={loc.city}>
                <Card className="p-6 h-full hover:shadow-card transition-shadow">
                  <MapPin className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-semibold text-lg">{loc.city}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{loc.address}</p>
                  <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {loc.hours}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-8">
            <ImagePlaceholder
              src={ABOUT_IMAGES.storesMap}
              label="Store locator map or exterior photos"
              hint="about-stores-map.jpg"
              aspect="wide"
            />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to experience Fixora?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Book a repair, track your device, or visit a center near you — we&apos;re here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-gradient-brand shadow-glow hover:opacity-95">
                <Link to="/book">
                  Book a Repair <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
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
