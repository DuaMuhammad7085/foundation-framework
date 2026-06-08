import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Battery,
  CheckCircle2,
  Clock,
  Database,
  HelpCircle,
  MapPin,
  MessageCircle,
  Phone,
  PoundSterling,
  Search,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";
import { SectionBackdrop } from "@/components/SectionBackdrop";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal, Stagger, StaggerItem } from "@/components/about/Reveal";
import heroImage from "@/assets/hero-devices.jpg";
import svcScreen from "@/assets/svc-screen.jpg";
import workshopImage from "@/assets/workshop.jpg";
import logoAsset from "@/assets/express-logo.png.asset.json";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ - Express Phone & Laptop Repair Nuneaton" },
      {
        name: "description",
        content:
          "Answers to common questions about phone and laptop repairs, warranty, pricing and data safety in Nuneaton.",
      },
    ],
  }),
  component: FaqPage,
});

const sections = [
  {
    title: "General",
    icon: HelpCircle,
    summary: "Opening hours, location and walk-ins.",
    items: [
      { q: "What are your business hours?", a: "Monday to Saturday, 10:00 AM to 6:00 PM. Closed Sundays." },
      { q: "Where are you located?", a: "6 Harefield Road, Nuneaton, CV11 4HD." },
      { q: "Do you accept walk-ins?", a: "Yes. Walk-ins are welcome. Calling ahead on 07415 278767 helps us prepare for your visit." },
    ],
  },
  {
    title: "Repairs",
    icon: Wrench,
    summary: "Devices, timings and common repair questions.",
    items: [
      { q: "How long do repairs take?", a: "Most common repairs such as screens, batteries and charging ports are completed the same day, often within 30-60 minutes." },
      { q: "What devices do you repair?", a: "Smartphones, tablets, laptops, smartwatches and most other electronic devices." },
      { q: "Will my repair void the manufacturer warranty?", a: "Third-party repairs may affect your manufacturer warranty, but every repair we do is backed by our own 90-day warranty." },
    ],
  },
  {
    title: "Warranty",
    icon: ShieldCheck,
    summary: "What is covered after a repair.",
    items: [
      { q: "How long is the repair warranty?", a: "90 days on parts and labour for every repair we carry out." },
      { q: "What does the warranty cover?", a: "Failure of the replaced part under normal use. Accidental damage and liquid damage are not covered." },
      { q: "How do I claim warranty?", a: "Bring your device and the repair receipt back to our Nuneaton store and we'll take care of it." },
    ],
  },
  {
    title: "Pricing",
    icon: PoundSterling,
    summary: "Diagnostics, quotes and payment methods.",
    items: [
      { q: "Are diagnostics free?", a: "Yes. Diagnostics are 100% free, with no obligation to repair." },
      { q: "Are there hidden fees?", a: "Never. You always get a clear price before we start any work." },
      { q: "What payment methods do you accept?", a: "Cash and all major credit/debit cards." },
    ],
  },
  {
    title: "Data Safety",
    icon: Database,
    summary: "Privacy, backups and recovery options.",
    items: [
      { q: "Is my data safe during repair?", a: "Yes. We follow strict privacy protocols and do not access your personal data." },
      { q: "Should I back up my device?", a: "We recommend a backup before any repair, although most repairs preserve all data." },
      { q: "Can you recover lost data?", a: "Yes. We offer professional data recovery for many damaged devices." },
    ],
  },
];

const popular = [
  { icon: Clock, label: "Most repairs", value: "Same day" },
  { icon: ShieldCheck, label: "Warranty", value: "90 days" },
  { icon: Search, label: "Diagnostics", value: "Free" },
  { icon: Battery, label: "Common fixes", value: "30-60 min" },
];

function FaqPage() {
  return (
    <Layout>
      <PageHero
        image={heroImage}
        overlayClassName="bg-[linear-gradient(110deg,rgba(0,17,73,0.82)_0%,rgba(0,47,125,0.62)_40%,rgba(0,94,238,0.18)_75%,rgba(255,255,255,0.00)_100%)]"
        eyebrow="Help centre"
        eyebrowClassName="border-[#005fee]/55 bg-[#eff6ff] text-[#005fee]"
        title="Clear answers before you book a repair."
        subtitle="Find quick answers about repair times, warranty, pricing, data safety and visiting the Nuneaton shop."
        actions={
          <>
            <Button asChild size="lg" className="bg-[#005fee] hover:bg-[#0047c4] text-white rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold shadow-sm">
              <Link to="/book">Book a Repair <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#005fee] text-[#005fee] bg-white hover:bg-[#eff6ff] rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold"
            >
              <Link to="/contact">Ask a Question</Link>
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
              {['Free diagnostics', 'Clear repair quotes', '90-day repair warranty'].map((item) => (
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
          <Stagger className="grid grid-cols-2 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.2)] md:grid-cols-4">
            {popular.map((item, index) => (
              <StaggerItem key={item.label} className="h-full">
                <div
                  className={`relative flex h-full min-h-32 flex-col justify-center border-slate-200 p-6 ${
                    index === 0 ? "border-b border-r md:border-b-0" : ""
                  } ${index === 1 ? "border-b md:border-b-0 md:border-r" : ""} ${
                    index === 2 ? "border-r" : ""
                  }`}
                >
                  <div className="absolute inset-x-8 top-0 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-70" />
                  <item.icon className="mb-3 h-5 w-5 text-[#005fee]" />
                  <div className="text-2xl font-semibold text-slate-950">{item.value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {item.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="relative py-20 md:py-24 bg-[#f8fbff]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <Reveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#005fee]">
                Browse by topic
              </p>
              <h2 className="text-4xl font-semibold leading-tight text-slate-950 md:text-5xl">
                Jump straight to the answer.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="max-w-2xl text-base leading-8 text-slate-600 md:ml-auto">
                Questions are grouped by the things customers ask us most often:
                repairs, warranty, pricing, data and visiting the shop.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {sections.map((section) => (
              <StaggerItem key={section.title} className="h-full">
                <a
                  href={`#${section.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group flex h-full min-h-48 flex-col justify-between rounded-[1.75rem] border border-slate-200/70 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#005fee]/40 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.2)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-200/60 bg-[#eff6ff] text-[#005fee]">
                      <section.icon className="h-5 w-5" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#005fee]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{section.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{section.summary}</p>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="relative py-20 md:py-24 overflow-hidden bg-white">
        <SectionBackdrop />
        <div className="relative z-10">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 lg:grid-cols-[0.76fr_1.24fr]">
          <Reveal className="lg:sticky lg:top-24">
            <div className="overflow-hidden bg-slate-950 text-white shadow-[0_34px_100px_-62px_rgba(15,23,42,0.65)]">
              <div className="relative min-h-80">
                <img src={workshopImage} alt="Express repair workshop" className="absolute inset-0 h-full w-full object-cover opacity-68" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
                <div className="absolute bottom-0 left-0 p-7">
                  <MessageCircle className="mb-4 h-8 w-8 text-primary-glow" />
                  <h2 className="text-3xl font-semibold">Need a human answer?</h2>
                  <p className="mt-3 text-sm leading-7 text-white/74">
                    Send a photo on WhatsApp or call the shop. We can usually point
                    you in the right direction quickly.
                  </p>
                </div>
              </div>
              <div className="grid gap-3 p-6">
                <Button asChild className="rounded-sm bg-white text-slate-950 hover:bg-slate-100">
                  <a href="https://wa.me/447415278767">Ask on WhatsApp</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-sm border-white/35 bg-transparent text-white hover:bg-white/10"
                >
                  <a href="tel:+447415278767">Call 07415 278767</a>
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            {sections.map((section) => (
              <Reveal key={section.title}>
                <Card
                  id={section.title.toLowerCase().replace(/\s+/g, "-")}
                  className="scroll-mt-28 overflow-hidden rounded-[1.75rem] border-slate-200/70 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.2)]"
                >
                  <div className="border-b border-slate-200 bg-slate-50/80 p-6 md:p-7">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-200/60 bg-[#eff6ff] text-[#005fee]">
                        <section.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-semibold text-slate-950">{section.title}</h2>
                        <p className="mt-1 text-sm text-slate-600">{section.summary}</p>
                      </div>
                    </div>
                  </div>
                  <Accordion type="single" collapsible className="divide-y divide-slate-200">
                    {section.items.map((item) => (
                      <AccordionItem key={item.q} value={item.q} className="border-0 px-6 md:px-7">
                        <AccordionTrigger className="py-5 text-left text-base font-semibold text-slate-950 hover:text-[#005fee] hover:no-underline">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="pb-6 text-sm leading-7 text-slate-600">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[#eef6ff]">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="relative overflow-hidden rounded-[2rem] bg-[#005fee] text-white shadow-[0_30px_80px_-40px_rgba(0,95,238,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-glow via-white to-sky-500" />
            <div className="absolute right-0 top-0 hidden h-full w-1/2 opacity-28 md:block">
              <img src={svcScreen} alt="" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-slate-950/55" />
            </div>

            <div className="relative grid gap-8 p-8 md:grid-cols-[0.92fr_1.08fr] md:p-12">
              <div>
                <MapPin className="mb-5 h-9 w-9 text-primary-glow" />
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-sky-200">
                  Still unsure?
                </p>
                <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                  Pop in or message us first.
                </h2>
              </div>
              <div className="flex flex-col justify-end">
                <p className="max-w-2xl text-sm leading-7 text-white/74">
                  Bring your device to 6 Harefield Road, Nuneaton, CV11 4HD for a
                  free initial diagnosis, or send us the details before you visit.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild className="rounded-sm bg-white text-slate-950 hover:bg-slate-100">
                    <Link to="/contact">
                      Contact Us <MessageCircle className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-sm border-white/35 bg-transparent text-white hover:bg-white/10"
                  >
                    <a href="tel:+447415278767">
                      <Phone className="mr-2 h-4 w-4" /> 07415 278767
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
