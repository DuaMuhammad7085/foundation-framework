import { createFileRoute, Link } from "@tanstack/react-router";

import { motion } from "framer-motion";

import {
  Recycle,
  PoundSterling,
  CheckCircle2,
  Award,
  ShieldCheck,
  ArrowRight,
  Smartphone,
  Laptop,
  Tablet,
  MessageCircle,
  Phone,
  Clock,
  Sparkles,
  Database,
  HelpCircle,
  Star,
  Wrench,
  Calendar,
  HeartHandshake,
  TrendingUp,
  Package,
} from "lucide-react";

import { Layout, PageHero } from "@/components/Layout";
import { GoogleMapsIcon } from "@/components/GoogleMapsIcon";

import { Reveal } from "@/components/Reveal";

import { Stagger, StaggerItem } from "@/components/about/Reveal";

import { SectionBackdrop } from "@/components/SectionBackdrop";

import { Button } from "@/components/ui/button";

import { Card } from "@/components/ui/card";

import { themedCard, CARD_CREAM, CARD_BLUE, CARD_INTERACTIVE, CARD_GRID } from "@/lib/theme-card";

import { cn } from "@/lib/utils";

import heroImage from "@/assets/herosection-buy-sell.png";

import workshopImage from "@/assets/workshop.jpg";

export const Route = createFileRoute("/buy-and-sell")({
  head: () => ({
    meta: [
      { title: "Buy & Sell Devices - Express Phone & Laptop Repair Nuneaton" },

      {
        name: "description",
        content:
          "Sell your old phone, laptop or tablet for fair value. Or buy refurbished devices — fully tested, warranted, and save up to 40%. Instant valuation in Nuneaton.",
      },
    ],
  }),

  component: BuyAndSellPage,
});

const stats = [
  { icon: PoundSterling, label: "Savings", value: "Up to 40%" },

  { icon: ShieldCheck, label: "Buy warranty", value: "12 months" },

  { icon: Clock, label: "Sell payment", value: "Same day" },

  { icon: Database, label: "Data wipe", value: "Certified" },
];

const acceptedDevices = [
  {
    icon: Smartphone,
    title: "Phones",
    items: ["iPhone", "Samsung", "Google Pixel", "All major brands"],
  },

  { icon: Tablet, title: "Tablets", items: ["iPad", "Samsung Tab", "Amazon Fire", "Most models"] },

  {
    icon: Laptop,
    title: "Laptops",
    items: ["MacBook", "Windows laptops", "Chromebooks", "Most conditions"],
  },
];

const sellBenefits = [
  "Instant device valuation",

  "Cash or bank transfer payment",

  "Full data security wipe",

  "Same-day payment guaranteed",

  "No fuss, no hassle",

  "Walk in with device, walk out with cash",
];

const buyBenefits = [
  "Multi-point quality testing",

  "Full 12-month warranty included",

  "100% verified condition",

  "Expert in-store advice",

  "Quick device activation support",

  "30-day satisfaction guarantee",
];

const steps = [
  {
    n: "01",
    t: "Tell us what you have",
    d: "Describe your device condition, model, and any damage. We'll give you an instant valuation or show available inventory.",
  },

  {
    n: "02",
    t: "Get your quote",
    d: "Receive a fair market price quote with complete transparency. No hidden fees or surprises.",
  },

  {
    n: "03",
    t: "Visit our store",
    d: "Come see the device in person at 6 Harefield Road, Nuneaton. Final inspection before payment.",
  },

  {
    n: "04",
    t: "Instant payment",
    d: "Walk out with cash same day or choose bank transfer. For refurbished devices, leave ready to use.",
  },
];

const faqSnippet = [
  {
    q: "What condition devices do you accept?",
    a: "We accept devices in all conditions — from like-new to heavily used. Condition affects valuation.",
  },

  {
    q: "How is refurbished stock tested?",
    a: "Every device goes through multi-point testing: battery, display, cameras, speakers and connectivity.",
  },

  {
    q: "Is my data safe when I sell?",
    a: "Yes. We perform a certified data wipe on every device we purchase.",
  },

  {
    q: "Do I need an appointment to sell?",
    a: "No. Walk in with your device for an instant valuation — same-day payment available.",
  },

  {
    q: "Can I trade in and upgrade same day?",
    a: "Yes. Sell your old device and browse refurbished stock in one visit.",
  },

  {
    q: "What payment methods do you offer?",
    a: "Cash or bank transfer when selling. Card accepted when buying refurbished devices.",
  },
];

const conditionTiers = [
  {
    grade: "Like New",
    desc: "Minimal signs of use, fully functional, original box a plus.",
    payout: "Highest value",
  },

  {
    grade: "Good",
    desc: "Light wear, screen and body in good shape, all features working.",
    payout: "Strong value",
  },

  {
    grade: "Fair",
    desc: "Visible wear, minor cracks or scratches, still powers on and works.",
    payout: "Fair offer",
  },

  {
    grade: "Faulty",
    desc: "Broken screen, battery issues or won't turn on — we still buy for parts.",
    payout: "Part value",
  },
];

const testingChecklist = [
  "Battery health and charging cycle check",

  "Display, touch and dead pixel test",

  "Front and rear camera inspection",

  "Speaker, microphone and earpiece test",

  "Wi-Fi, Bluetooth and mobile connectivity",

  "Buttons, ports and biometric sensors",

  "Cosmetic grading and condition report",
];

const savingsExamples = [
  { device: "iPhone 13", newPrice: "£599", refurbPrice: "from £349", save: "42%" },

  { device: "Samsung Galaxy S22", newPrice: "£549", refurbPrice: "from £299", save: "46%" },

  { device: "iPad 9th Gen", newPrice: "£349", refurbPrice: "from £199", save: "43%" },

  { device: "MacBook Air M1", newPrice: "£899", refurbPrice: "from £549", save: "39%" },

  { device: "HP Laptop 15", newPrice: "£499", refurbPrice: "from £279", save: "44%" },

  { device: "Google Pixel 7", newPrice: "£449", refurbPrice: "from £249", save: "45%" },
];

const testimonials = [
  { name: "Kevin R.", text: "Sold my old iPhone and got a fair price same day. No hassle at all." },

  { name: "Nina T.", text: "Bought a refurbished laptop — works perfectly and saved a fortune." },

  {
    name: "Paul J.",
    text: "Traded in my cracked Samsung and upgraded to a refurbished one in one visit.",
  },

  {
    name: "Hannah C.",
    text: "They explained the condition grading clearly. Honest and transparent.",
  },

  { name: "Alex M.", text: "Data wipe certificate gave me peace of mind when selling." },

  { name: "Jordan B.", text: "12-month warranty on my refurbished phone — brilliant value." },
];

const relatedPages = [
  {
    to: "/services" as const,
    icon: Wrench,
    title: "Repair Services",
    desc: "Fix your current device before you trade.",
  },

  {
    to: "/accessories" as const,
    icon: Package,
    title: "Accessories",
    desc: "Cases and chargers for your new device.",
  },

  {
    to: "/book" as const,
    icon: Calendar,
    title: "Book a Repair",
    desc: "Schedule a diagnostic before selling.",
  },
];

const hours = [
  { day: "Monday – Friday", time: "10 AM – 6 PM" },

  { day: "Saturday", time: "10 AM – 6 PM" },

  { day: "Sunday", time: "Closed" },

  { day: "Sell payment", time: "Same day" },
];

function BuyAndSellPage() {
  return (
    <Layout>
      <div className="relative min-h-screen">
        <div className="pointer-events-none absolute inset-0 z-0" style={{ backgroundColor: "#F5F1ED" }}></div>
        <div className="relative z-10">
          <PageHero
        image={heroImage}
        overlayClassName="bg-[linear-gradient(110deg,rgba(8,15,31,0.84)_0%,rgba(13,35,76,0.58)_38%,rgba(8,15,31,0.18)_72%,rgba(8,15,31,0.08)_100%)]"
        eyebrow="Buy & Sell"
        eyebrowClassName="border-[#10B981]/55 bg-[#d1fae5] text-[#059669]"
        title={
          <>
            <span className="block font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.02] tracking-tight mb-2">
              Sell your device.
            </span>

            <span className="block font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.02] tracking-tight text-primary-glow">
              Buy with confidence.
            </span>
          </>
        }
        subtitle="Sell your used device for fair market value with instant payment. Or browse our curated selection of refurbished phones and laptops — all tested, warranted, and priced to save you money."
        actions={
          <>
            <Button
              asChild
              size="lg"
              className="bg-gradient-purple-blue hover:bg-gradient-purple-blue-hover text-white rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold shadow-sm"
            >
              <Link to="/contact">Get a Quote</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#0095ff] text-[#0095ff] bg-white hover:bg-[#f0f9ff] rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold"
            >
              <Link to="/contact">Browse Stock</Link>
            </Button>
          </>
        }
      />

      <section className="relative z-10 -mt-20 pb-14">
        <div className="mx-auto max-w-7xl px-4">
          <Stagger className="grid grid-cols-2 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.2)] md:grid-cols-4">
            {stats.map((item, index) => (
              <StaggerItem key={item.label} className="h-full">
                <div
                  className={`relative flex h-full min-h-32 flex-col justify-center border-slate-200 p-6 ${
                    index === 0 ? "border-b border-r md:border-b-0" : ""
                  } ${index === 1 ? "border-b md:border-b-0 md:border-r" : ""} ${
                    index === 2 ? "border-r" : ""
                  }`}
                >
                  <div className="absolute inset-x-8 top-0 h-1 bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent opacity-80" />

                  <item.icon className="mb-3 h-5 w-5 text-[#0095ff]" />

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

      <section className="relative overflow-hidden py-20 md:py-24 bg-[#f8fafc]">
        <div
          className="pointer-events-none absolute -left-24 -top-16 h-72 w-72 rounded-full bg-[#e0f2fe]/60 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className={cn(CARD_GRID, "gap-8 lg:grid-cols-2")}>
            <Reveal className="h-full">
              <Card
                className={cn(
                  CARD_CREAM,
                  CARD_INTERACTIVE,
                  "group overflow-hidden rounded-[2rem] p-0 flex flex-col",
                )}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-purple-50 text-purple-700 text-3xl font-bold uppercase tracking-[0.24em]">
                    WIP
                  </div>
                </div>

                <div className="p-8 lg:p-10">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#e0f2fe] text-[#0095ff]">
                    <Recycle className="h-6 w-6" />
                  </div>

                  <h3 className="text-3xl font-semibold text-[#0095ff] md:text-4xl">
                    Sell Your Device
                  </h3>

                  <p className="mb-8 mt-4 text-lg leading-relaxed text-slate-600">
                    Bring your old phone, tablet or laptop for an honest valuation and same-day
                    payment. We accept all conditions.
                  </p>

                  <div className="mb-10 space-y-3">
                    {sellBenefits.map((i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#0095ff]" />

                        <span className="text-base leading-relaxed text-slate-700">{i}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="w-full rounded-xl bg-gradient-purple-blue text-white hover:bg-gradient-purple-blue-hover"
                  >
                    <Link to="/contact">
                      Get Your Quote Today <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.15} className="h-full">
              <Card
                className={cn(
                  CARD_BLUE,
                  CARD_INTERACTIVE,
                  "group overflow-hidden rounded-[2rem] p-0 flex flex-col",
                )}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-purple-50 text-purple-700 text-3xl font-bold uppercase tracking-[0.24em]">
                    WIP
                  </div>
                </div>

                <div className="p-8 lg:p-10">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#e0f2fe] text-[#0095ff]">
                    <PoundSterling className="h-6 w-6" />
                  </div>

                  <h3 className="text-3xl font-semibold text-[#0095ff] md:text-4xl">
                    Buy Refurbished
                  </h3>

                  <p className="mb-8 mt-4 text-lg leading-relaxed text-slate-600">
                    Premium refurbished phones and laptops, fully tested — save up to 40% vs new,
                    with full warranty protection.
                  </p>

                  <div className="mb-10 space-y-3">
                    {buyBenefits.map((i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#0095ff]" />

                        <span className="text-base leading-relaxed text-slate-700">{i}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="w-full rounded-xl bg-gradient-purple-blue text-white hover:bg-gradient-purple-blue-hover"
                  >
                    <Link to="/contact">
                      Browse Our Stock <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>


      <section className="relative overflow-hidden py-20 md:py-24 bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe]/30 to-white">
        <SectionBackdrop wash="bg-[#f0f9ff]/50" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div
            className="overflow-hidden rounded-[2.5rem] border border-[#0095ff]/15 bg-gradient-to-br from-[#f0f9ff] via-[#dbeafe] to-[#f8fbff] p-8 md:p-14 shadow-[0_30px_90px_-30px_rgba(15,23,42,0.12)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <div>
                  <TrendingUp className="mb-5 h-9 w-9 text-[#0095ff]" />

                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0095ff]">
                    Refurbished savings
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold text-[#0095ff] md:text-4xl">
                    Save up to 40% vs buying new.
                  </h2>

                  <p className="mt-4 text-slate-600 leading-7">
                    Every refurbished device is tested, graded and backed by a 12-month warranty —
                    at a fraction of new retail price.
                  </p>
                </div>
              </Reveal>

              <div className="grid gap-3 sm:grid-cols-2">
                {savingsExamples.map((ex, i) => (
                  <Reveal key={ex.device} delay={i * 0.05}>
                    <div className="rounded-xl border border-[#0095ff]/40 bg-white/80 p-4">
                      <div className="font-semibold text-slate-950">{ex.device}</div>

                      <div className="mt-2 flex items-center justify-between text-sm">
                        <span className="text-slate-400 line-through">{ex.newPrice}</span>

                        <span className="font-semibold text-[#0095ff]">{ex.refurbPrice}</span>
                      </div>

                      <div className="mt-1 text-xs font-semibold text-[#0095ff]">
                        Save {ex.save}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 md:py-24 overflow-hidden bg-white">
        <SectionBackdrop wash="bg-white/30" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0095ff]">
                  Quality testing
                </p>

                <h2 className="mt-4 text-3xl font-semibold text-slate-950 md:text-4xl">
                  What we check before we sell.
                </h2>

                <p className="mt-4 text-slate-600 leading-7">
                  Refurbished doesn't mean risky. Every device goes through our full multi-point
                  inspection before it hits the shelf.
                </p>

                <Button
                  asChild
                  className="mt-8 rounded-xl bg-gradient-purple-blue text-white hover:bg-gradient-purple-blue-hover"
                >
                  <Link to="/contact">
                    Browse Stock <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className={cn(CARD_CREAM, "rounded-[2rem] p-8 shadow-sm")}>
                <ul className="space-y-4">
                  {testingChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0095ff]" />

                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-24 overflow-hidden bg-white">
        <SectionBackdrop wash="bg-white/30" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="mb-12 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0095ff]">
              </p>

              <h2 className="mt-4 text-4xl font-semibold text-slate-950 md:text-5xl">
                Phones, tablets and laptops.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                All conditions welcome — from like-new to heavily used.
              </p>
            </div>
          </Reveal>

          <div className={`${CARD_GRID} md:grid-cols-3`}>
            {acceptedDevices.map((device, i) => (
              <Reveal key={device.title} delay={i * 0.08} className="h-full">
                <Card className={themedCard(i, "p-8")}>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e0f2fe] text-[#0095ff]">
                    <device.icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-950">{device.title}</h3>

                  <ul className="mt-4 space-y-2">
                    {device.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#0095ff]" /> {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-24 bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe]/30 to-white">
        <SectionBackdrop wash="bg-[#f0f9ff]/50" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div
            className="overflow-hidden rounded-[2.5rem] border border-[#0095ff]/15 bg-gradient-to-br from-[#f0f9ff] via-[#dbeafe] to-[#f8fbff] p-8 md:p-14 shadow-[0_30px_90px_-30px_rgba(15,23,42,0.12)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-14 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0095ff]">
                Simple Process
              </p>

              <h3 className="mt-3 text-4xl font-semibold text-[#0095ff] md:text-5xl">
                How it works.
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                Whether selling or buying, the entire process takes just a few minutes.
              </p>
            </div>

            <div className={`${CARD_GRID} sm:grid-cols-2 lg:grid-cols-4`}>
              {steps.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.1} className="h-full">
                  <Card className={themedCard(i, "rounded-[1.75rem] p-8")}>
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#e0f2fe] font-bold text-[#0095ff]">
                      {step.n}
                    </div>

                    <h4 className="mb-3 text-lg font-semibold text-slate-950">{step.t}</h4>

                    <p className="text-sm leading-relaxed text-slate-600">{step.d}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </motion.div>
        </div>
      </section>



     

    

    
   

      <section className="relative overflow-hidden py-20 md:py-24 bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe]/30 to-white">
        <SectionBackdrop wash="bg-[#f0f9ff]/50" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div
            className="overflow-hidden rounded-[2.5rem] border border-[#0095ff]/15 bg-gradient-to-br from-[#f0f9ff] via-[#dbeafe] to-[#f8fbff] p-8 md:p-12 shadow-[0_30px_90px_-30px_rgba(15,23,42,0.12)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
              <div>
                <Clock className="mb-5 h-9 w-9 text-[#0095ff]" />

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#0095ff]">
                  Opening hours
                </p>

                <h2 className="text-3xl font-semibold text-[#0095ff] md:text-4xl">
                  Visit us today.
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Walk in for an instant valuation or to browse refurbished stock — no appointment
                  needed.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {hours.map((item) => (
                  <div
                    key={item.day}
                    className="rounded-xl border border-[#0095ff]/40 bg-white/80 p-5"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      {item.day}
                    </div>

                    <div className="mt-2 text-lg font-semibold text-[#0095ff]">{item.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-24 bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe]/30 to-white">
        <SectionBackdrop wash="bg-[#f0f9ff]/50" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <Reveal>
            <div className="rounded-[2.5rem] border border-[#0095ff]/15 bg-gradient-to-br from-[#f0f9ff] via-[#dbeafe] to-[#f8fbff] p-10 md:p-14 shadow-[0_30px_90px_-30px_rgba(15,23,42,0.12)]">
              <Sparkles className="mx-auto mb-4 h-6 w-6 text-[#06b6d4]" />

              <h2 className="text-4xl font-semibold text-[#0095ff] md:text-5xl">
                Ready to sell or upgrade?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                Visit our store or get an instant quote today.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl bg-gradient-purple-blue text-white hover:bg-gradient-purple-blue-hover font-semibold h-12 uppercase tracking-widest text-xs px-8"
                >
                  <Link to="/contact">Get a Quote</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-2 border-[#0095ff] text-[#0078d4] bg-white hover:bg-[#e0f2fe]/40 h-12 uppercase tracking-widest text-xs px-8 font-semibold"
                >
                  <a href="tel:+447415278767">
                    <Phone className="mr-2 h-4 w-4" /> 07415 278767
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      </div>
    </div>
    </Layout>
  );
}
