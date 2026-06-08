import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cpu,
  FileText,
  Heart,
  HeartHandshake,
  Home,
  Laptop,
  MessagesSquare,
  ReceiptText,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Store,
  Timer,
  Truck,
  Wrench,
} from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/about/Reveal";
import workshopImage from "@/assets/workshop.jpg";
import explodedImage from "@/assets/repair-exploded.jpg";
import svcScreen from "@/assets/svc-screen.jpg";
import svcLaptopImg from "@/assets/svc-laptop.jpg";
import heroImage from "@/assets/hero-repair-shop.jpg";
import backgroundImage from "@/assets/background.png";
import logoAsset from "@/assets/express-logo.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Express Phone & Laptop Repair Nuneaton" },
      {
        name: "description",
        content:
          "Express Phone & Laptop Repair is Nuneaton's trusted local repair shop for phones, laptops and tablets. Same-day service, free diagnostics and a 90-day warranty.",
      },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "10,000+", label: "Devices repaired", icon: Smartphone },
  { value: "4.9★", label: "Average rating", icon: Star },
  { value: "30–60 min", label: "Typical repair time", icon: Clock },
  { value: "90 days", label: "Warranty", icon: ShieldCheck },
];

const readyFeatures = [
  { icon: Timer, title: "Same-day service", desc: "Most repairs completed the same day." },
  { icon: ShieldCheck, title: "Expert technicians", desc: "Skilled professionals you can rely on." },
  { icon: Award, title: "Quality parts", desc: "We use reliable, high-quality parts." },
  { icon: Heart, title: "Customer first", desc: "Honest advice and friendly support." },
];

const promiseList = [
  "Free diagnostics before any work begins.",
  "Transparent quotes and no hidden fees.",
  "Genuine parts and careful testing.",
  "90-day warranty on every repair.",
];

const timeline = [
  {
    year: "2019",
    title: "Started as a small local bench",
    text: "One technician, one bench and one promise: honest repairs for our neighbours.",
    icon: Sparkles,
    current: false,
  },
  {
    year: "2020",
    title: "Moved to Harefield Road",
    text: "A proper workshop space gave us room for better diagnostics and faster service.",
    icon: Home,
    current: false,
  },
  {
    year: "2021",
    title: "Expanded to laptops and tablets",
    text: "More device expertise meant more people could stay connected without replacing their gear.",
    icon: Laptop,
    current: false,
  },
  {
    year: "2023",
    title: "Launched our warranty promise",
    text: "90 days of confidence on every repair, because we stand behind our work.",
    icon: ShieldCheck,
    current: false,
  },
  {
    year: "Today",
    title: "10,000+ devices repaired in Nuneaton",
    text: "We’re still local, still focused and still earned by doing repairs the right way.",
    icon: Star,
    current: true,
  },
];

const process = [
  {
    number: "01",
    icon: Search,
    step: "Inspect",
    title: "Diagnosis first",
    description: "We inspect the fault, confirm the issue and explain your options clearly.",
  },
  {
    number: "02",
    icon: ReceiptText,
    step: "Quote",
    title: "Transparent pricing",
    description: "You approve the exact price before we start any repair work.",
  },
  {
    number: "03",
    icon: Wrench,
    step: "Repair",
    title: "Careful craftsmanship",
    description: "Skilled technicians use quality parts and proven techniques to get it right.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    step: "Test",
    title: "Full quality check",
    description: "We verify charging, display, battery life and connectivity before release.",
  },
];

const trustBadges = [
  { icon: ShieldCheck, title: "Trusted by thousands", desc: "5★ service, every time" },
  { icon: Clock, title: "Most repairs same-day", desc: "Get back to your day faster" },
  { icon: Award, title: "Quality parts & tools", desc: "We do it right, not rush it" },
  { icon: MessagesSquare, title: "Clear updates", desc: "You're always in the loop" },
];

const workshopShots = [
  { src: svcScreen, title: "Screen Repairs", description: "High-precision display replacements for phones and tablets.", icon: Smartphone },
  { src: workshopImage, title: "Bench Craft", description: "A clean workshop with focused diagnostics and expert handling.", icon: Wrench },
  { src: explodedImage, title: "Expert Repairs", description: "Careful workmanship. Quality parts. Built to last.", icon: Cpu },
];

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

function AboutPage() {
  return (
    <Layout>
      <PageHero
        image={heroImage}
        imageAlt="Technician repairing a device at a repair bench"
        overlayClassName="bg-[linear-gradient(110deg,rgba(8,15,31,0.84)_0%,rgba(13,35,76,0.58)_38%,rgba(8,15,31,0.18)_72%,rgba(8,15,31,0.08)_100%)]"
        eyebrow="Nuneaton repair specialists"
        eyebrowClassName="border-[#005fee]/55 bg-[#eff6ff] text-[#005fee]"
        title={
          <>
            <span className="block font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.02] tracking-tight mb-2">
              Repair. Restore.
            </span>
            <span className="block font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.02] tracking-tight text-primary-glow">
              Keep moving forward.
            </span>
          </>
        }
        subtitle={
          <>We started as a neighbourhood bench and grew into a full-service workshop. Our About page tells the story of how honest repairs, quality parts and real local care became Nuneaton’s trusted choice.</>
        }
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
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.24)] backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-center rounded-3xl bg-white/10 p-4">
              <img src={logoAsset.url} alt="Express Phone & Laptop Repair" className="h-14 object-contain" />
            </div>
            <div className="space-y-4">
              {promiseList.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-white/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="relative overflow-hidden bg-white py-24">
        <SectionBackdrop wash="bg-white/85" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-[0.35em] text-[#005fee] font-semibold mb-4">Our identity</p>
                <h2 className="text-4xl md:text-5xl font-semibold text-slate-950 leading-tight">Local repair, premium polish, honest care.</h2>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">We’re not a faceless chain. We’re a team of local technicians who examine each device, explain the fix, and finish every repair with care so it lasts.</p>
              </Reveal>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Started on trust",
                    copy: "Our first customers came from word of mouth because we fixed devices fairly and transparently.",
                  },
                  {
                    title: "Built for devices",
                    copy: "Phones, tablets and laptops get equal focus, with the right parts and the right attention.",
                  },
                  {
                    title: "Open communication",
                    copy: "We tell you what’s wrong, what will be done, and what your options are.",
                  },
                  {
                    title: "Nuneaton owned",
                    copy: "A local repair shop for local people, with a real address and a real warranty.",
                  },
                ].map((item) => (
                  <Reveal key={item.title} className="h-full">
                    <Card className="h-full rounded-[2rem] border border-slate-200/70 bg-[#f8fbff] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className="text-lg font-semibold text-slate-950 mb-3">{item.title}</div>
                      <p className="text-sm leading-7 text-slate-600">{item.copy}</p>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal>
              <Card className="overflow-hidden rounded-[2rem] border border-slate-200/70 shadow-sm">
                <img src={workshopImage} alt="Repair workshop interior" className="aspect-[4/5] w-full object-cover" loading="lazy" />
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fffaf0] py-20">
        <div
          className="pointer-events-none absolute -left-32 -top-20 h-80 w-80 rounded-full bg-[#fef3c7]/80"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#ede9fe]/70"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-12 top-10 hidden w-32 opacity-50 md:block"
          style={{
            backgroundImage: "radial-gradient(circle, #c4b5fd 1.5px, transparent 1.5px)",
            backgroundSize: "12px 12px",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-12 bottom-10 hidden w-32 opacity-50 md:block"
          style={{
            backgroundImage: "radial-gradient(circle, #c4b5fd 1.5px, transparent 1.5px)",
            backgroundSize: "12px 12px",
          }}
          aria-hidden
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] items-start">
            <div>
              <Reveal>
                <div className="inline-block">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#005fee] font-semibold">Our story</p>
                  <span className="mt-2 block h-[2px] w-10 bg-[#fbbf24]" aria-hidden />
                </div>
                <h2 className="mt-5 text-[34px] md:text-[44px] font-semibold text-slate-950 leading-[1.1]">
                  A longer story than the average <span className="text-[#005fee]">repair page</span><span className="text-[#fbbf24]">.</span>
                </h2>
                <p className="mt-4 max-w-md text-slate-500 leading-6 text-[14px]">
                  This is the story of how local devices found a workshop that matches premium repair care with honest pricing and no fluff.
                </p>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200/80 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.18)]">
                  <img src={workshopImage} alt="Repair workshop interior" className="aspect-[16/10] w-full object-cover" loading="lazy" />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-6 grid grid-cols-3 gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.12)]">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#eff6ff] text-[#005fee]">
                      <Smartphone className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div className="text-2xl font-bold text-slate-950">10,000+</div>
                    <div className="text-[12px] font-semibold text-slate-950 mt-1">Devices Repaired</div>
                    <div className="text-[10.5px] text-slate-500">and counting</div>
                  </div>
                  <div className="flex flex-col items-center text-center border-x border-slate-100">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#fef3c7] text-[#b45309]">
                      <Star className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div className="text-2xl font-bold text-slate-950">4.9 ★</div>
                    <div className="text-[12px] font-semibold text-slate-950 mt-1">Customer Rating</div>
                    <div className="text-[10.5px] text-slate-500">from 1,000+ reviews</div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#ecfdf5] text-[#047857]">
                      <ShieldCheck className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div className="text-2xl font-bold text-slate-950">90 Days</div>
                    <div className="text-[12px] font-semibold text-slate-950 mt-1">Warranty</div>
                    <div className="text-[10.5px] text-slate-500">on every repair</div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="space-y-5">
              {[
                {
                  number: "01",
                  icon: Smartphone,
                  title: "A neighbourhood workshop",
                  copy: "Customers come in, talk through their issue, and leave with a clear plan rather than a confusing bill.",
                },
                {
                  number: "02",
                  icon: MessagesSquare,
                  title: "A better repair experience",
                  copy: "We keep the extra service in the repair, with fast diagnostics, regular updates, and a device returned in better shape.",
                },
                {
                  number: "03",
                  icon: ShieldCheck,
                  title: "A more thoughtful approach",
                  copy: "If a repair won’t make sense, we’ll tell you. If it will, we build the right solution and back it with our warranty.",
                },
              ].map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-22px_rgba(15,23,42,0.18)]">
                    <div className="flex items-start gap-5">
                      <div className="relative shrink-0">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eef2ff]">
                          <item.icon className="h-7 w-7 text-[#1e40af]" strokeWidth={1.5} />
                        </div>
                        <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#005fee] shadow-sm">
                          {item.number}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-950 leading-tight">{item.title}</h3>
                        <span className="mt-2 block h-[2px] w-8 bg-[#fbbf24]" aria-hidden />
                        <p className="mt-3 text-[13.5px] leading-6 text-slate-500">{item.copy}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15}>
            <div className="mt-12 relative rounded-2xl border border-slate-200/60 bg-white/40 backdrop-blur-sm p-6">
              <div
                className="absolute left-0 right-0 top-[58px] hidden h-px border-t-2 border-dashed border-[#a5b4fc] lg:block"
                aria-hidden
              />
              <div className="relative grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
                {[
                  { year: "2019", icon: Wrench, title: "Started as a small local bench" },
                  { year: "2020", icon: Home, title: "Moved to our first workshop" },
                  { year: "2021", icon: Laptop, title: "Expanded to laptops & tablets" },
                  { year: "2023", icon: ShieldCheck, title: "Launched our warranty promise" },
                  { year: "Today", icon: Star, title: "10,000+ devices repaired and trusted", current: true },
                ].map((item, index) => (
                  <div key={item.year} className="flex flex-col items-center text-center">
                    <div
                      className={`relative flex h-[56px] w-[56px] items-center justify-center rounded-2xl border-2 bg-white ${
                        item.current
                          ? "border-[#fbbf24] shadow-[0_8px_24px_-10px_rgba(251,191,36,0.4)]"
                          : "border-[#005fee] shadow-sm"
                      }`}
                    >
                      <item.icon className={`h-5 w-5 ${item.current ? "text-[#fbbf24]" : "text-[#005fee]"}`} strokeWidth={1.75} />
                      <span
                        className={`absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full px-2.5 py-0.5 text-[10px] font-bold shadow-sm ${
                          item.current ? "bg-[#fbbf24] text-slate-900" : "bg-[#005fee] text-white"
                        }`}
                      >
                        {item.year}
                      </span>
                    </div>
                    <p className="mt-5 text-[12px] font-semibold leading-snug text-slate-700 max-w-[140px]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20">
        <div
          className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#fef3c7]/60"
          aria-hidden
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-10 items-start">
            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-[0.3em] text-[#005fee] font-semibold">
                  Timeline
                </p>
                <span className="mt-2 block h-[2px] w-10 bg-[#fbbf24]" aria-hidden />
                <h2 className="mt-4 text-[28px] md:text-[34px] font-semibold text-slate-950 leading-[1.15]">
                  Our repair journey, <span className="text-[#005fee]">step by step</span>.
                </h2>
                <p className="mt-3 max-w-xs text-slate-500 leading-6 text-[13px]">
                  A timeline that shows how we grew from a single table to a trusted local workshop, while keeping the same core values.
                </p>
              </Reveal>

              <div className="relative mt-8 pl-7">
                <div
                  className="absolute left-[22px] top-2 bottom-2 w-px border-l-2 border-dashed border-[#a5b4fc]"
                  aria-hidden
                />

                <div className="space-y-3.5">
                  {timeline.map((item, index) => (
                    <Reveal key={item.year} delay={index * 0.05}>
                      <div className="relative">
                        <div
                          className="absolute -left-7 top-2 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#3b82f6] text-white text-[11px] font-semibold ring-4 ring-white shadow-[0_6px_18px_-6px_rgba(59,130,246,0.55)]"
                        >
                          {item.year}
                        </div>

                        <div className="ml-3 rounded-xl bg-[#eef2ff] px-4 py-3">
                          <div className="flex items-center gap-2.5">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#1e40af] shadow-sm">
                              <item.icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                            </div>
                            <h3 className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#005fee] leading-tight">
                              {item.title}
                            </h3>
                          </div>
                          <p className="mt-1.5 ml-9.5 text-[12px] leading-[1.5] text-slate-500">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {workshopShots.map((shot, index) => (
                <Reveal key={shot.title} delay={index * 0.08}>
                  <div className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_10px_30px_-20px_rgba(15,23,42,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-22px_rgba(15,23,42,0.22)]">
                    <img
                      src={shot.src}
                      alt={shot.title}
                      className="aspect-[5/3] w-full object-cover"
                      loading="lazy"
                    />
                    <div className="flex items-center gap-3 px-4 py-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef2ff] text-[#005fee]">
                        <shot.icon className="h-4 w-4" strokeWidth={1.75} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[14px] font-semibold text-slate-950 leading-tight">
                          {shot.title}
                        </h3>
                        <p className="mt-0.5 text-[11.5px] leading-5 text-slate-500">
                          {shot.description}
                        </p>
                      </div>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eef2ff] text-[#005fee] transition-transform duration-300 group-hover:translate-x-0.5">
                        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fff7e8] py-24">
        <div
          className="pointer-events-none absolute -left-20 -top-16 h-64 w-64 rounded-full bg-[#ffe9b8]/70"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#f4ebff]/80"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-6 hidden w-24 opacity-60 md:block"
          style={{
            backgroundImage: "radial-gradient(circle, #f4c772 1.5px, transparent 1.5px)",
            backgroundSize: "12px 12px",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-6 hidden w-24 opacity-60 md:block"
          style={{
            backgroundImage: "radial-gradient(circle, #c4b5fd 1.5px, transparent 1.5px)",
            backgroundSize: "12px 12px",
          }}
          aria-hidden
        />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <Sparkles className="h-3.5 w-3.5 text-[#fbbf24]" />
                <span className="inline-flex items-center gap-2 rounded-full border border-[#fcd9a0] bg-white px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#005fee] shadow-sm">
                  <Wrench className="h-3.5 w-3.5" />
                  How we work
                </span>
                <Sparkles className="h-3.5 w-3.5 text-[#fbbf24]" />
              </div>
              <h2 className="mt-7 font-serif text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight text-slate-950">
                A repair workflow <br className="hidden md:block" />
                designed to feel{" "}
                <span className="relative inline-block text-[#005fee]">
                  effortless
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 220 12"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 8 C 60 1, 160 1, 217 8"
                      stroke="#fbbf24"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </h2>
              <p className="mt-6 mx-auto max-w-2xl text-base leading-8 text-slate-500">
                Repair should not be confusing. We keep the process visible, simple and fair from drop-off to collection.
              </p>
            </Reveal>
          </div>

          <div className="relative">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 right-0 z-0 hidden lg:block"
              aria-hidden
            >
              <div className="relative h-full w-full">
                <div className="absolute inset-y-1/2 left-[12.5%] right-[87.5%] -translate-y-1/2 border-t-2 border-dashed border-[#c7d2fe]" />
                <div className="absolute inset-y-1/2 left-[37.5%] right-[62.5%] -translate-y-1/2 border-t-2 border-dashed border-[#c7d2fe]" />
                <div className="absolute inset-y-1/2 left-[62.5%] right-[37.5%] -translate-y-1/2 border-t-2 border-dashed border-[#c7d2fe]" />

                <div className="absolute left-[12.5%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm text-[#6366f1]">
                  <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                </div>
                <div className="absolute left-[37.5%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm text-[#6366f1]">
                  <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                </div>
                <div className="absolute left-[62.5%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm text-[#6366f1]">
                  <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <Reveal key={item.step} className="relative h-full">
                  <div className="relative h-full rounded-[1.5rem] border border-slate-200/80 bg-white px-5 pt-10 pb-7 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.22)]">
                    <div className="absolute -left-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#fde9a8] text-[10px] font-bold text-slate-900 shadow-sm">
                      {item.number}
                    </div>

                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eef2ff]">
                      <item.icon className="h-8 w-8 text-[#1e3a8a]" strokeWidth={1.5} />
                    </div>

                    <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[#005fee] mb-2">
                      {item.step}
                    </p>
                    <h3 className="text-center text-lg font-semibold text-slate-950 leading-snug">
                      {item.title}
                    </h3>
                    <div className="mx-auto my-3 h-[2px] w-8 rounded-full bg-[#c7d2fe]" />
                    <p className="text-center text-[13px] leading-6 text-slate-500">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 rounded-[1.75rem] border border-[#fde6b8] bg-[#fdf3d8] p-6 shadow-[0_24px_60px_-50px_rgba(146,99,18,0.35)] md:p-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {trustBadges.map((badge) => (
                  <div key={badge.title} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ffe9b8] text-[#005fee]">
                      <badge.icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-950">{badge.title}</p>
                      <p className="mt-1 text-xs leading-6 text-slate-600">{badge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WORKSHOP IN NUMBERS + READY FOR THE RIGHT REPAIR ── */}
      <div className="relative overflow-hidden bg-[#fdfbf4]">
        <SectionBackdrop wash="bg-[#fdfbf4]/45" />

      <section className="relative z-10 py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(circle, #d4a853 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#fef9c3] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#005fee] mb-6">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fff4ca]">
                    <Wrench className="h-3.5 w-3.5" />
                  </span>
                  Workshop in numbers
                </span>
                <h2 className="text-4xl md:text-[2.75rem] font-bold leading-[1.12] tracking-tight text-slate-950">
                  What our work looks like in the{" "}
                  <span className="text-[#005fee]">
                    real world
                    <span className="text-[#fbbf24]">.</span>
                  </span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-500">
                  Real results from real devices. We test every device before it leaves our bench and back it with a warranty that means something.
                </p>
              </Reveal>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {stats.map((item, index) => (
                  <Reveal key={item.label} delay={index * 0.06} className="h-full">
                    <div className="flex h-full flex-col items-center rounded-[1.25rem] border border-slate-100 bg-white px-6 py-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#eff6ff] text-[#005fee]">
                        <item.icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <div className="text-3xl font-bold text-slate-950">{item.value}</div>
                      <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">{item.label}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <Reveal delay={0.08}>
                <div className="overflow-hidden rounded-[1.5rem] shadow-[0_20px_60px_-30px_rgba(15,23,42,0.18)]">
                  <img
                    src={explodedImage}
                    alt="Exploded view of smartphone repair components"
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="relative overflow-hidden rounded-[1.25rem] bg-[#fff9e5] px-7 py-7 md:px-8 md:py-8">
                  <ShieldCheck
                    className="pointer-events-none absolute -right-2 bottom-0 h-32 w-32 text-[#fef3c7]/80"
                    strokeWidth={1}
                    aria-hidden
                  />
                  <div className="relative flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#fef3c7] text-[#005fee] shadow-sm">
                      <HeartHandshake className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#005fee] mb-2">Care you can trust</p>
                      <h3 className="text-2xl font-bold text-slate-950">Quality repair, every time.</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-500">
                        We test every device before it leaves our bench and back it with a warranty that means something.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-24 pt-8">
        <div
          className="pointer-events-none absolute left-8 top-8 h-24 w-24 opacity-30 md:left-16 md:top-12"
          style={{
            backgroundImage: "radial-gradient(circle, #d4a853 1.5px, transparent 1.5px)",
            backgroundSize: "10px 10px",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-8 top-8 h-24 w-24 opacity-30 md:right-16 md:top-12"
          style={{
            backgroundImage: "radial-gradient(circle, #d4a853 1.5px, transparent 1.5px)",
            backgroundSize: "10px 10px",
          }}
          aria-hidden
        />

        <div className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 lg:block" aria-hidden>
          <div className="relative ml-[-3rem]">
            <div className="h-56 w-56 rounded-full bg-[#fef9c3]/70 blur-[1px]" />
            <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#fff7dd] shadow-[0_20px_50px_-20px_rgba(251,191,36,0.45)]">
              <Calendar className="h-10 w-10 text-[#fbbf24]" strokeWidth={1.5} />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block" aria-hidden>
          <div className="relative mr-[-3rem]">
            <div className="h-56 w-56 rounded-full bg-[#fef9c3]/70 blur-[1px]" />
            <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#fff7dd] shadow-[0_20px_50px_-20px_rgba(251,191,36,0.45)]">
              <Wrench className="h-10 w-10 text-[#fbbf24]" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fef9c3] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#005fee] mb-6">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fff4ca]">
                <Wrench className="h-3.5 w-3.5" />
              </span>
              Ready for the right repair?
            </span>
            <h2 className="text-4xl md:text-[2.75rem] font-bold leading-[1.12] tracking-tight text-slate-950">
              Book online or drop in — we&apos;ll make your{" "}
              <span className="text-[#005fee]">
                repair feel easy
                <span className="text-[#fbbf24]">.</span>
              </span>
            </h2>
            <p className="mt-5 mx-auto max-w-2xl text-base leading-8 text-slate-500">
              Our Nuneaton workshop is built for same-day service, expert fixes and a better repair experience from start to finish.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-xl bg-[#005fee] hover:bg-[#0047c4] text-white px-8 h-12 text-xs font-semibold uppercase tracking-widest shadow-sm">
                <Link to="/book">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a Repair
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-[#005fee] bg-white text-[#005fee] hover:bg-[#eff6ff] px-8 h-12 text-xs font-semibold uppercase tracking-widest">
                <Link to="/contact">
                  <Store className="mr-2 h-4 w-4" />
                  Visit the Shop
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 mt-16">
          <Reveal delay={0.12}>
            <div className="rounded-[1.5rem] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:p-10">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {readyFeatures.map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex flex-col items-center text-center ${
                      index < readyFeatures.length - 1 ? "lg:border-r lg:border-slate-100 lg:pr-6" : ""
                    }`}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fef9c3] text-[#005fee]">
                      <item.icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <h4 className="text-sm font-bold text-slate-950">{item.title}</h4>
                    <p className="mt-2 text-xs leading-6 text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      </div>
    </Layout>
  );
}
