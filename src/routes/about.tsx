import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Leaf,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
  Zap,
} from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal, Stagger, StaggerItem } from "@/components/about/Reveal";
import workshopImage from "@/assets/workshop.jpg";
import explodedImage from "@/assets/repair-exploded.jpg";
import svcScreen from "@/assets/svc-screen.jpg";
import svcLaptopImg from "@/assets/svc-laptop.jpg";
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
  { value: "10,000+", label: "Devices repaired" },
  { value: "4.9", label: "Average rating" },
  { value: "30-60", label: "Minute repairs" },
  { value: "90", label: "Day warranty" },
];

const promises = [
  "Free diagnostics before any work begins",
  "Clear pricing approved by you first",
  "Quality parts fitted by experienced technicians",
  "Multi-point testing before collection",
];

const values = [
  {
    icon: ShieldCheck,
    title: "Straight answers",
    text: "We explain the fault, the cost and the realistic turnaround before you commit.",
  },
  {
    icon: Award,
    title: "Careful workmanship",
    text: "Every repair is handled with the kind of bench discipline small electronics deserve.",
  },
  {
    icon: HeartHandshake,
    title: "Local service",
    text: "A friendly, familiar shop where you can speak to the people fixing your device.",
  },
  {
    icon: Zap,
    title: "Quick turnarounds",
    text: "Most common phone repairs are completed the same day, without cutting corners.",
  },
];

const process = [
  {
    icon: Search,
    step: "01",
    title: "Inspect",
    text: "We check the device, confirm the fault and talk you through the options.",
  },
  {
    icon: Target,
    step: "02",
    title: "Quote",
    text: "You get a clear price and time estimate before any repair starts.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Repair",
    text: "A technician carries out the fix using reliable replacement parts.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Test",
    text: "Display, battery, sensors, charging and connectivity are checked before handoff.",
  },
];

const workshopShots = [
  { src: svcScreen, title: "Screen Repairs", text: "Precise display replacements and careful fitting." },
  { src: workshopImage, title: "Bench Work", text: "Clean, focused diagnostics for everyday faults." },
  { src: svcLaptopImg, title: "Laptop Care", text: "Repairs, upgrades and troubleshooting under one roof." },
];

const statBorders = [
  "border-b border-r md:border-b-0",
  "border-b md:border-b-0 md:border-r",
  "border-r",
  "",
];

function AboutPage() {
  return (
    <Layout>
      <PageHero
        image="/about/about-hero-bg.jpg"
        imageAlt="Express Phone & Laptop Repair workshop"
        eyebrow="About the shop"
        title={
          <>
            Repair work with a <span className="text-primary-glow">sharper standard.</span>
          </>
        }
        subtitle={
          <>Express Phone & Laptop Repair is a trusted Nuneaton workshop for phones, laptops, tablets and accessories. Fast diagnostics, honest pricing and careful repair work sit at the centre of everything we do.</>
        }
        actions={
          <>
            <Button asChild size="lg" className="rounded-sm bg-white px-7 text-slate-950 hover:bg-slate-100">
              <Link to="/book">Book a Repair <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-sm border-white/40 bg-transparent px-7 text-white hover:bg-white/10"
            >
              <Link to="/contact">Visit the Shop</Link>
            </Button>
          </>
        }
        aside={
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-glow via-white to-sky-400" />
            <img
              src={logoAsset.url}
              alt="Express Phone & Laptop Repair"
              className="mx-auto mb-7 max-h-32 w-full object-contain drop-shadow-xl"
            />
            <div className="space-y-4 border-t border-white/15 pt-6">
              {promises.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-white/82">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="relative z-10 -mt-20 pb-14">
        <div className="mx-auto max-w-7xl px-4">
          <Stagger className="grid grid-cols-2 overflow-hidden border border-slate-200 bg-white shadow-[0_30px_90px_-50px_rgba(14,116,144,0.42)] md:grid-cols-4">
            {stats.map((stat, index) => (
              <StaggerItem key={stat.label} className="h-full">
                <div className={`relative flex h-full min-h-32 flex-col items-center justify-center border-slate-200 p-6 text-center ${statBorders[index]}`}>
                  <div className="absolute inset-x-8 top-0 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-70" />
                  <div className="text-3xl font-semibold text-sky-700 md:text-4xl">{stat.value}</div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {stat.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="overflow-hidden bg-[linear-gradient(180deg,white_0%,rgb(248,250,252)_100%)] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal variant="slideRight">
            <div className="relative">
              <img
                src="/about/about-story-workshop.jpg"
                alt="Repair technician workspace"
                className="aspect-[4/5] w-full object-cover shadow-[0_32px_90px_-55px_rgba(15,23,42,0.45)]"
                loading="lazy"
              />
              <div className="absolute -bottom-8 right-6 hidden max-w-xs border border-sky-300/20 bg-slate-950 p-6 text-white shadow-[0_24px_70px_-40px_rgba(2,132,199,0.75)] sm:block">
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-glow">
                  Nuneaton based
                </div>
                <p className="mt-3 text-sm leading-6 text-white/78">
                  Friendly advice, practical repair options and a real shop you can visit.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lg:pl-8">
            <Reveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">
                Our story
              </p>
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-slate-950 md:text-6xl">
                A local repair shop built around trust.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600">
                We are a friendly, family-run repair shop based at 6 Harefield Road,
                Nuneaton. The idea has always been simple: repairs should feel clear,
                fairly priced and handled by people who know what they are doing.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Phones, laptops and tablets",
                  "Same-day help for common repairs",
                  "Plain-English advice",
                  "Warranty-backed workmanship",
                ].map((item) => (
                  <div key={item} className="group flex items-center gap-3 border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-[0_18px_45px_-35px_rgba(2,132,199,0.7)]">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-sky-600" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />
        <div className="absolute -right-24 top-20 h-96 w-96 bg-sky-500/15 blur-3xl" />
        <div className="absolute -left-24 bottom-10 h-96 w-96 bg-indigo-500/12 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div className="relative h-full overflow-hidden bg-gradient-card-blue p-8 shadow-[0_28px_90px_-58px_rgba(56,189,248,0.75)] md:p-10">
                <div className="absolute inset-0 opacity-20">
                  <img src={explodedImage} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="relative">
                  <Target className="mb-6 h-10 w-10 text-primary-glow" />
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-sky-100">
                    Mission
                  </p>
                  <h2 className="max-w-xl text-3xl font-semibold leading-tight md:text-5xl">
                    Make device repair feel easy, honest and worth choosing.
                  </h2>
                  <p className="mt-6 max-w-xl leading-8 text-white/78">
                    We want every customer to leave knowing what was fixed, why it
                    mattered and how to keep their device working for longer.
                  </p>
                </div>
              </div>
            </Reveal>

            <Stagger className="grid items-stretch gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <StaggerItem key={value.title} className="h-full">
                  <Card className="h-full rounded-sm border-white/10 bg-white/[0.06] p-6 text-white shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/30 hover:bg-white/[0.1]">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center bg-sky-400/10 text-primary-glow ring-1 ring-sky-200/15">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/68">{value.text}</p>
                  </Card>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,rgb(248,250,252)_0%,white_55%,rgb(240,249,255)_100%)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <Reveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">
                How we work
              </p>
              <h2 className="text-4xl font-semibold leading-tight text-slate-950 md:text-5xl">
                A calmer repair journey.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="max-w-2xl text-base leading-8 text-slate-600 md:ml-auto">
                The process is intentionally simple, so you always know where your
                device is, what is happening and what comes next.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            {process.map((item) => (
              <Reveal key={item.step} className="h-full">
                <div className="group relative flex h-full min-h-64 flex-col overflow-hidden border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_26px_70px_-50px_rgba(2,132,199,0.45)]">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-primary-glow to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-sm font-semibold text-sky-700">{item.step}</span>
                    <item.icon className="h-6 w-6 text-slate-400 transition-colors group-hover:text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">
              Behind the bench
            </p>
            <h2 className="text-4xl font-semibold leading-tight text-slate-950 md:text-5xl">
              The workshop, not just the words.
            </h2>
          </Reveal>

          <div className="grid items-stretch gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal className="h-full">
              <div className="relative h-full min-h-[520px] overflow-hidden bg-slate-950 shadow-[0_34px_100px_-62px_rgba(15,23,42,0.65)]">
                <img
                  src="/about/about-timeline.jpg"
                  alt="Phone repair tools and parts"
                  className="absolute inset-0 h-full w-full object-cover opacity-72"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 max-w-xl p-8 text-white md:p-10">
                  <Leaf className="mb-5 h-8 w-8 text-primary-glow" />
                  <h3 className="text-3xl font-semibold">Repair beats replace.</h3>
                  <p className="mt-4 text-sm leading-7 text-white/76">
                    A repaired device saves money, reduces waste and often gets you
                    back to normal much faster than buying new.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="grid h-full gap-5">
              {workshopShots.map((shot, index) => (
                <Reveal key={shot.title} delay={index * 0.06} className="h-full">
                  <div className="group grid h-full grid-cols-[120px_1fr] overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-[0_20px_55px_-42px_rgba(2,132,199,0.65)] sm:grid-cols-[170px_1fr]">
                    <img src={shot.src} alt={shot.title} className="h-full min-h-36 w-full object-cover" loading="lazy" />
                    <div className="flex flex-col justify-center p-5">
                      <h3 className="font-semibold text-slate-950">{shot.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{shot.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="relative grid items-stretch overflow-hidden bg-slate-950 text-white shadow-[0_36px_100px_-60px_rgba(15,23,42,0.6)] lg:grid-cols-[0.95fr_1.05fr]">
              <div className="absolute h-1 w-full bg-gradient-to-r from-primary-glow via-white to-sky-500" />
              <div className="p-8 md:p-12">
                <Building2 className="mb-6 h-9 w-9 text-primary-glow" />
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-sky-200">
                  Visit us
                </p>
                <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                  Pop into the shop and talk it through.
                </h2>
                <div className="mt-8 space-y-5 text-white/78">
                  <div className="flex gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary-glow" />
                    <p>
                      Express Phone & Laptop Repair
                      <br />
                      6 Harefield Road, Nuneaton, CV11 4HD
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="mt-1 h-5 w-5 shrink-0 text-primary-glow" />
                    <p>Mon-Sat: 10 AM - 6 PM</p>
                  </div>
                </div>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-sm bg-white px-7 text-slate-950 hover:bg-slate-100">
                    <Link to="/book">Book a Repair</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-sm border-white/35 bg-transparent px-7 text-white hover:bg-white/10"
                  >
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative min-h-[380px] lg:min-h-full">
                <img src={workshopImage} alt="Repair shop counter" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
