import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Clock,
  HeartHandshake,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Truck,
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
  { value: "10,000+", label: "Devices repaired" },
  { value: "4.9★", label: "Average rating" },
  { value: "30–60 min", label: "Typical repair time" },
  { value: "90 days", label: "Warranty" },
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
  },
  {
    year: "2020",
    title: "Moved to Harefield Road",
    text: "A proper workshop space gave us room for better diagnostics and faster service.",
    icon: Truck,
  },
  {
    year: "2021",
    title: "Expanded to laptops and tablets",
    text: "More device expertise meant more people could stay connected without replacing their gear.",
    icon: Wrench,
  },
  {
    year: "2023",
    title: "Launched our warranty promise",
    text: "90 days of confidence on every repair, because we stand behind our work.",
    icon: ShieldCheck,
  },
  {
    year: "Today",
    title: "10,000+ devices repaired in Nuneaton",
    text: "We’re still local, still focused and still earned by doing repairs the right way.",
    icon: ArrowRight,
  },
];

const process = [
  {
    icon: Search,
    step: "Inspect",
    title: "Diagnosis first",
    description: "We inspect the fault, confirm the issue and explain your options clearly.",
  },
  {
    icon: Target,
    step: "Quote",
    title: "Transparent pricing",
    description: "You approve the exact price before we start any repair work.",
  },
  {
    icon: Wrench,
    step: "Repair",
    title: "Careful craftsmanship",
    description: "Skilled technicians use quality parts and proven techniques.",
  },
  {
    icon: CheckCircle2,
    step: "Test",
    title: "Full quality check",
    description: "We verify charging, display, battery life and connectivity before release.",
  },
];

const workshopShots = [
  { src: svcScreen, title: "Screen Repairs", description: "High-precision display replacements for phones and tablets." },
  { src: workshopImage, title: "Bench Craft", description: "A clean workshop with focused diagnostics and expert handling." },
  { src: svcLaptopImg, title: "Laptop Service", description: "Repairs, upgrades and maintenance for laptops of all makes." },
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

      <section className="bg-[#f8fbff] py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.35em] text-[#005fee] font-semibold mb-3">Our story</p>
              <h2 className="text-4xl md:text-5xl font-semibold text-slate-950 leading-tight">A longer story than the average repair page.</h2>
              <p className="mt-5 mx-auto max-w-3xl text-base leading-8 text-slate-600">This is the story of how local devices found a workshop that matches premium repair care with honest pricing and no fluff.</p>
            </Reveal>
          </div>

          <div className="relative grid gap-8 md:grid-cols-[0.35fr_0.65fr]">
            <div className="relative">
              <div className="sticky top-24 space-y-6 rounded-[2rem] border border-[#cfe4ff] bg-white/70 p-8 shadow-sm backdrop-blur-xl">
                <div className="text-xs uppercase tracking-[0.35em] text-[#005fee] font-semibold">Backstory</div>
                <p className="text-slate-600 leading-7">From the first repaired screen to the most complex laptop board, each job taught us how to make repairs faster, clearer and more dependable.</p>
                <p className="text-slate-600 leading-7">We keep our bench small enough to stay hands-on, while bringing every repair through the same exacting standards.</p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "A neighbourhood workshop",
                  copy: "Customers come in, talk through their issue, and leave with a clear plan rather than a confusing bill.",
                },
                {
                  title: "A better repair experience",
                  copy: "We keep the extra service in the repair, with fast diagnostics, regular updates, and a device returned in better shape.",
                },
                {
                  title: "A more thoughtful approach",
                  copy: "If a repair won’t make sense, we’ll tell you. If it will, we build the right solution and back it up.",
                },
              ].map((item) => (
                <Reveal key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-2xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-4 text-slate-600 leading-7">{item.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24">
        <SectionBackdrop wash="bg-white/70" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-[0.35em] text-[#005fee] font-semibold mb-4">Timeline</p>
                <h2 className="text-4xl md:text-5xl font-semibold text-slate-950 leading-tight">Our repair journey, step by step.</h2>
                <p className="mt-5 max-w-2xl text-slate-600 leading-8">A timeline that shows how we grew from a single table to a trusted local workshop, while keeping the same core values.</p>
              </Reveal>

              <div className="mt-12 space-y-8">
                {timeline.map((item, index) => (
                  <Reveal key={item.year} delay={index * 0.08}>
                    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#eff6ff] p-8 shadow-sm">
                      <div className="absolute left-6 top-6 h-12 w-12 rounded-3xl bg-[#005fee] text-white grid place-items-center text-lg font-semibold shadow-lg">
                        {item.year}
                      </div>
                      <div className="ml-24">
                        <div className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#005fee] shadow-sm">
                          <item.icon className="h-4 w-4" />
                          {item.title}
                        </div>
                        <p className="mt-5 text-slate-600 leading-7">{item.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              {workshopShots.map((shot, index) => (
                <Reveal key={shot.title} delay={index * 0.06}>
                  <Card className="overflow-hidden rounded-[2rem] border border-slate-200/70 shadow-sm">
                    <img src={shot.src} alt={shot.title} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-slate-950">{shot.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{shot.description}</p>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef6ff] py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.35em] text-[#005fee] font-semibold mb-3">How we work</p>
              <h2 className="text-4xl md:text-5xl font-semibold text-slate-950 leading-tight">A repair workflow designed to feel effortless.</h2>
              <p className="mt-5 mx-auto max-w-2xl text-base leading-8 text-slate-600">Repair should not be confusing. We keep the process visible, simple and fair from drop-off to collection.</p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <Reveal key={item.step}>
                <Card className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#005fee]/10 text-[#005fee]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.26em] text-[#005fee] font-semibold mb-3">{item.step}</p>
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24">
        <SectionBackdrop wash="bg-white/80" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-[0.35em] text-[#005fee] font-semibold mb-3">Workshop in numbers</p>
                <h2 className="text-4xl md:text-5xl font-semibold text-slate-950 leading-tight">What our work looks like in the real world.</h2>
              </Reveal>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {stats.map((item) => (
                  <Reveal key={item.label} className="h-full">
                    <div className="rounded-[2rem] border border-slate-200 bg-[#f8fbff] p-8 shadow-sm">
                      <div className="text-4xl font-semibold text-slate-950">{item.value}</div>
                      <div className="mt-3 text-sm uppercase tracking-[0.28em] text-slate-500">{item.label}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <Reveal>
                <Card className="overflow-hidden rounded-[2rem] border border-slate-200/70 shadow-sm">
                  <img src={explodedImage} alt="Repair exploded view" className="aspect-[4/3] w-full object-cover" loading="lazy" />
                </Card>
              </Reveal>
              <Reveal delay={0.08}>
                <Card className="rounded-[2rem] border border-slate-200/70 bg-[#005fee] p-10 text-white shadow-sm">
                  <div className="flex items-center gap-3 text-[#dbeafe] mb-5">
                    <HeartHandshake className="h-6 w-6" />
                    <span className="text-sm uppercase tracking-[0.28em] font-semibold">Care you can trust</span>
                  </div>
                  <h3 className="text-3xl font-semibold">Quality repair, every time.</h3>
                  <p className="mt-5 text-sm leading-7 text-white/85">We test every device before it leaves our bench and back it with a warranty that means something.</p>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#005fee] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-white/80 font-semibold mb-3">Ready for the right repair?</p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">Book online or drop in — we’ll make your repair feel easy.</h2>
            <p className="mt-5 mx-auto max-w-2xl text-base leading-8 text-white/80">Our Nuneaton workshop is built for same-day service, expert fixes and a better repair experience from start to finish.</p>
          </Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-sm bg-white text-[#005fee] hover:bg-slate-100 px-8 h-12 uppercase tracking-widest text-xs font-semibold">
              <Link to="/book">Book a Repair</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-sm border-white/40 bg-transparent px-8 text-white hover:bg-white/10 h-12 uppercase tracking-widest text-xs font-semibold">
              <Link to="/contact">Visit the Shop</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
