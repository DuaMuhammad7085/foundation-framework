import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Facebook,
  Headphones,
  HelpCircle,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Wrench,
  Zap,
  Laptop,
  Tablet,
  Cpu,
  HeartHandshake,
} from "lucide-react";
import { toast } from "sonner";
import { Layout, PageHero } from "@/components/Layout";
import { SectionBackdrop } from "@/components/SectionBackdrop";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-devices.jpg";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal, Stagger, StaggerItem } from "@/components/about/Reveal";
import workshopImage from "@/assets/workshop.jpg";
import svcScreen from "@/assets/svc-screen.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Express Phone & Laptop Repair Nuneaton" },
      {
        name: "description",
        content:
          "Contact Express Phone & Laptop Repair in Nuneaton. Call 07415 278767, visit 6 Harefield Road, CV11 4HD, or send us a message. Free diagnostics, same-day repairs.",
      },
    ],
  }),
  component: ContactPage,
});

const contactChannels = [
  {
    icon: Phone,
    title: "Call us",
    value: "07415 278767",
    href: "tel:+447415278767",
    note: "Quotes, bookings and quick repair advice.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Send a photo",
    href: "https://wa.me/447415278767",
    note: "Fastest way to get a rough quote.",
  },
  {
    icon: MapPin,
    title: "Visit the shop",
    value: "6 Harefield Road",
    href: "https://www.google.com/maps/search/?api=1&query=6+Harefield+Road+Nuneaton+CV11+4HD",
    note: "Nuneaton, CV11 4HD. Walk-ins welcome.",
  },
];

const helpTopics = [
  { icon: Wrench, title: "Book a repair", text: "Choose your device and issue.", to: "/book" as const },
  { icon: Headphones, title: "Track your device", text: "Check repair progress.", to: "/profile" as const },
  { icon: HelpCircle, title: "Read the FAQ", text: "Warranty, pricing and timing.", to: "/faq" as const },
];

const hours = [
  { label: "Monday-Friday", time: "10 AM - 6 PM" },
  { label: "Saturday", time: "10 AM - 6 PM" },
  { label: "Sunday", time: "Closed" },
  { label: "Typical wait", time: "Under 15 min" },
];

const testimonials = [
  { name: "James W.", text: "Fast screen replacement and excellent service. Highly recommend." },
  { name: "Sophie L.", text: "Very professional staff and affordable pricing — couldn't be happier." },
  { name: "David R.", text: "My laptop was repaired the same day. Brilliant local service." },
  { name: "Emma T.", text: "Highly recommended local repair shop. Friendly and reliable." },
];

const servicesOverview = [
  { icon: Smartphone, title: "Phone Repair", desc: "Screen, battery, charging port & more", link: "/services" },
  { icon: Laptop, title: "Laptop Repair", desc: "Keyboard, battery, SSD upgrades & more", link: "/services" },
  { icon: Tablet, title: "Tablet Repair", desc: "Display, charging & software fixes", link: "/services" },
  { icon: Cpu, title: "Phone Unlocking", desc: "Network unlock for most models", link: "/services" },
];

const trustItems = [
  { icon: Star, label: "4.9★ Average Rating", desc: "From 1,000+ reviews" },
  { icon: Zap, label: "Same-Day Service", desc: "Most repairs completed same day" },
  { icon: Search, label: "Free Diagnostics", desc: "No charge to check the issue" },
  { icon: ShieldCheck, label: "90-Day Warranty", desc: "On every repair we complete" },
];

const pricingPreview = [
  { service: "Screen Repair", price: "from £39" },
  { service: "Battery Replacement", price: "from £29" },
  { service: "Charging Port Fix", price: "from £25" },
  { service: "Water Damage Repair", price: "from £49" },
  { service: "Software Issue", price: "from £19" },
  { service: "Laptop Service", price: "from £39" },
];

const fieldClass =
  "mt-2 h-12 rounded-sm border-slate-200 bg-slate-50/80 px-4 shadow-none focus-visible:ring-[#005fee]";

function ContactPage() {
  return (
    <Layout>
      <PageHero
        image={heroImage}
        overlayClassName="bg-[linear-gradient(110deg,rgba(8,15,31,0.84)_0%,rgba(13,35,76,0.58)_38%,rgba(8,15,31,0.18)_72%,rgba(8,15,31,0.08)_100%)]"
        eyebrow="Contact the workshop"
        eyebrowClassName="border-[#005fee]/55 bg-[#eff6ff] text-[#005fee]"
        title="Need help with a device? Talk to us."
        subtitle="Call, message or visit the Nuneaton shop for quotes, warranty help, directions and same-day repair advice."
        actions={
          <>
            <Button asChild size="lg" className="bg-[#005fee] hover:bg-[#0047c4] text-white rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold shadow-sm">
              <a href="tel:+447415278767">Call 07415 278767</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#005fee] text-[#005fee] bg-white hover:bg-[#eff6ff] rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold"
            >
              <a href="https://wa.me/447415278767">WhatsApp us</a>
            </Button>
          </>
        }
      />

      {/* ── CONTACT CHANNELS ── */}
      <section className="relative z-10 -mt-20 pb-14">
        <div className="mx-auto max-w-7xl px-4">
          <Stagger className="grid overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.2)] md:grid-cols-3">
            {contactChannels.map((channel, index) => (
              <StaggerItem key={channel.title} className="h-full">
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`group relative flex h-full min-h-44 flex-col justify-between border-slate-200 p-6 transition-all hover:bg-[#eef2ff]/60 ${
                    index < contactChannels.length - 1 ? "border-b md:border-b-0 md:border-r" : ""
                  }`}
                >
                  <div className="absolute inset-x-8 top-0 h-1 bg-gradient-to-r from-transparent via-[#005fee] to-transparent opacity-50" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                        {channel.title}
                      </div>
                      <div className="mt-3 text-2xl font-semibold text-slate-950 transition-colors group-hover:text-[#005fee]">
                        {channel.value}
                      </div>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#eef2ff] text-[#005fee] ring-1 ring-[#c7d2fe]">
                      <channel.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-slate-600">{channel.note}</p>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── QUICK ROUTES ── */}
      <section className="relative py-20 md:py-24 bg-[#f8fbff]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <Reveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#005fee]">
                Quick routes
              </p>
              <h2 className="text-4xl font-semibold leading-tight text-slate-950 md:text-5xl">
                Get to the right place faster.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="max-w-2xl text-base leading-8 text-slate-600 md:ml-auto">
                Whether you are ready to book, checking a current repair, or just
                comparing options, these shortcuts keep things moving.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid gap-4 md:grid-cols-3">
            {helpTopics.map((topic) => (
              <StaggerItem key={topic.title} className="h-full">
                <Link
                  to={topic.to}
                  className="group flex h-full min-h-44 flex-col justify-between rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#005fee]/40 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.2)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c7d2fe]/60 bg-[#eef2ff] text-[#005fee]">
                      <topic.icon className="h-5 w-5" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#005fee]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{topic.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{topic.text}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── CONTACT FORM + SIDEBAR ── */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-white">
        <SectionBackdrop />
        <div className="relative z-10">
        <div className="mx-auto grid max-w-7xl items-start gap-6 px-4 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="h-full">
            <Card className="relative h-full overflow-hidden rounded-[2rem] border-slate-200/70 bg-white p-7 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.2)] md:p-10">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#005fee] via-[#c7d2fe] to-[#005fee]" />
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#005fee]">
                Send a message
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                Tell us what needs fixing.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                Include the device model, the issue, and any photos you can send by
                WhatsApp later. We will get back to you as soon as possible.
              </p>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  toast.success("Message sent! We'll get back to you soon.");
                }}
                className="mt-8 space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="cname" className="text-sm font-semibold text-slate-700">
                      Name
                    </Label>
                    <Input id="cname" required className={fieldClass} placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="cphone" className="text-sm font-semibold text-slate-700">
                      Phone
                    </Label>
                    <Input id="cphone" type="tel" className={fieldClass} placeholder="07xxx xxxxxx" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="cemail" className="text-sm font-semibold text-slate-700">
                      Email
                    </Label>
                    <Input id="cemail" type="email" required className={fieldClass} placeholder="you@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="csubject" className="text-sm font-semibold text-slate-700">
                      Subject
                    </Label>
                    <Input id="csubject" className={fieldClass} placeholder="Repair quote, warranty, etc." />
                  </div>
                </div>
                <div>
                  <Label htmlFor="cmsg" className="text-sm font-semibold text-slate-700">
                    Message
                  </Label>
                  <Textarea
                    id="cmsg"
                    required
                    rows={6}
                    className="mt-2 rounded-sm border-slate-200 bg-slate-50/80 px-4 py-3 shadow-none focus-visible:ring-[#005fee]"
                    placeholder="Tell us about your device and the issue..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-sm bg-[#005fee] text-white hover:bg-[#0047c4]">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.08}>
              <Card className="overflow-hidden rounded-[2rem] border-slate-200/70 bg-white text-slate-950 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.2)]">
                <div className="relative min-h-72">
                  <img src={workshopImage} alt="Express repair shop" className="absolute inset-0 h-full w-full object-cover opacity-68" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-7">
                    <MapPin className="mb-4 h-7 w-7 text-[#005fee]" />
                    <h3 className="text-3xl font-semibold text-white">Visit our store</h3>
                    <p className="mt-3 text-sm leading-7 text-white/80">
                      6 Harefield Road, Nuneaton, CV11 4HD
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 p-6 sm:grid-cols-2">
                  <Button asChild className="rounded-sm bg-[#005fee] text-white hover:bg-[#0047c4]">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=6+Harefield+Road+Nuneaton+CV11+4HD"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-sm border-[#005fee] text-[#005fee] hover:bg-[#eff6ff]"
                  >
                    <a href="tel:+447415278767">Call the Shop</a>
                  </Button>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.12}>
              <Card className="rounded-[1.75rem] border-[#25D366]/25 bg-[#25D366]/[0.07] p-7 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#25D366]/15 text-[#128C7E] ring-1 ring-[#25D366]/25">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-950">Chat on WhatsApp</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Send photos of the damage and we can usually point you in the
                      right direction quickly.
                    </p>
                  </div>
                </div>
                <Button asChild className="mt-6 w-full rounded-sm bg-[#25D366] text-white hover:bg-[#20bd5a]">
                  <a href="https://wa.me/447415278767">Open WhatsApp</a>
                </Button>
              </Card>
            </Reveal>
          </div>
        </div>
        </div>
      </section>

      {/* ── OPENING HOURS ── */}
      <section className="py-20 md:py-24 bg-[#eef6ff]">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="relative overflow-hidden rounded-[2rem] bg-[#005fee] text-white shadow-[0_30px_80px_-40px_rgba(0,95,238,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#c7d2fe] via-white to-[#c7d2fe]" />
            <div className="absolute right-0 top-0 hidden h-full w-1/2 opacity-30 md:block">
              <img src={svcScreen} alt="" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#005fee] to-[#005fee]/55" />
            </div>

            <div className="relative grid gap-8 p-8 md:grid-cols-[0.85fr_1.15fr] md:p-12">
              <div>
                <Clock className="mb-5 h-9 w-9 text-[#c7d2fe]" />
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#c7d2fe]">
                  Opening hours
                </p>
                <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                  Walk in when it suits.
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/72">
                  Bring your device in for a free initial diagnosis. Most common
                  repairs can be handled the same day.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {hours.map((item) => (
                  <div key={item.label} className="border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c7d2fe]/80">
                      {item.label}
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">{item.time}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex flex-wrap gap-3 border-t border-white/10 p-8 md:px-12">
              <Button asChild className="rounded-sm bg-white text-slate-950 hover:bg-slate-100">
                <Link to="/book">Book a Repair</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-sm border-white/35 bg-transparent text-white hover:bg-white/10"
              >
                <a href="https://wa.me/447415278767">Ask on WhatsApp</a>
              </Button>
              <div className="ml-auto flex gap-2">
                <Button asChild size="icon" variant="outline" className="rounded-sm border-white/20 bg-transparent text-white hover:bg-white/10">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="icon" variant="outline" className="rounded-sm border-white/20 bg-transparent text-white hover:bg-white/10">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── NEW: TESTIMONIALS ── */}
      <section className="relative overflow-hidden py-24 bg-white">
        <SectionBackdrop wash="bg-white/30"/>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <Sparkles className="h-3.5 w-3.5 text-[#fbbf24]" />
                <span className="inline-flex items-center gap-2 rounded-full border border-[#c7d2fe]/60 bg-[#eef2ff] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#005fee] shadow-sm">
                  <Star className="h-3.5 w-3.5" />
                  What our customers say
                </span>
                <Sparkles className="h-3.5 w-3.5 text-[#fbbf24]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Trusted by the Nuneaton community</h2>
              <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Real reviews from real customers who brought their devices in for repair.</p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <Card className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#fcd9a0]/60 bg-[#fff7d2] p-8 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.16)] transition-shadow duration-500 hover:shadow-[0_35px_90px_-40px_rgba(15,23,42,0.22)]">
                  <div className="absolute -top-5 right-5 h-24 w-24 rounded-full bg-[#fbbf24]/10 blur-2xl" aria-hidden="true" />
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#005fee] shadow-sm">
                        <Star className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">5.0</div>
                        <div className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Rating</div>
                      </div>
                    </div>
                    <div className="text-4xl leading-none text-[#005fee]">"</div>
                  </div>

                  <p className="text-slate-700 leading-relaxed mb-8 flex-1">{t.text}</p>

                  <div className="mt-4 border-t border-slate-100 pt-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#005fee] text-white shadow-sm text-sm font-semibold">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{t.name}</div>
                        <div className="text-xs text-slate-500">Verified Customer</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 text-center">
              <p className="max-w-2xl mx-auto text-sm text-slate-500 mb-6">Our customers rate us highly for fast turnaround, honest pricing and reliable repair work.</p>
              <Link to="/about" className="inline-flex items-center justify-center rounded-full bg-[#005fee] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#005fee]/10 transition hover:bg-[#0047c4]">
                Read More Reviews
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── NEW: OUR SERVICES OVERVIEW ── */}
      <section className="relative py-24 overflow-hidden bg-[#f8fbff]">
        <div className="pointer-events-none absolute -left-24 -top-16 h-72 w-72 rounded-full bg-[#fef3c7]/80" aria-hidden />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#ede9fe]/70" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#c7d2fe]/60 bg-[#eef2ff] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#005fee] shadow-sm mb-4">
                <Wrench className="h-3.5 w-3.5" />
                What we repair
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                We fix more than just phones.
              </h2>
              <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                From smartphones to laptops and tablets — our Nuneaton workshop handles it all.
              </p>
            </div>
          </Reveal>

          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicesOverview.map((svc) => (
              <StaggerItem key={svc.title} className="h-full">
                <Link
                  to={svc.link}
                  className="group flex h-full flex-col items-center rounded-[1.75rem] border border-[#c7d2fe]/40 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#005fee]/40 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.2)]"
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#005fee] transition-colors group-hover:bg-[#005fee] group-hover:text-white">
                    <svc.icon className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950">{svc.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{svc.desc}</p>
                  <div className="mt-5 flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[#005fee] opacity-0 transition-all group-hover:opacity-100">
                    Learn More <ChevronRight className="h-3 w-3" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <div className="mt-10 text-center">
              <Button asChild size="lg" className="rounded-full bg-[#005fee] hover:bg-[#0047c4] text-white px-8 h-12 uppercase tracking-widest text-xs font-semibold shadow-sm">
                <Link to="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── NEW: PRICING PREVIEW ── */}
      <section className="relative overflow-hidden py-24 bg-white">
        <SectionBackdrop wash="bg-white/30"/>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#fcd9a0]/60 bg-[#fff7d2] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#005fee] shadow-sm mb-4">
                <Award className="h-3.5 w-3.5" />
                Transparent pricing
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Fair prices. No surprises.
              </h2>
              <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                Free diagnostics before any work begins. You approve the price before we start.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {pricingPreview.map((item, i) => (
              <Reveal key={item.service} delay={i * 0.06}>
                <Card className="group flex items-center justify-between rounded-[1.25rem] border border-[#eef2ff] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#005fee]/30 hover:shadow-[0_20px_60px_-30px_rgba(15,23,42,0.18)]">
                  <span className="font-medium text-slate-900">{item.service}</span>
                  <span className="text-[#005fee] font-semibold">{item.price}</span>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-10 text-center">
              <p className="text-sm text-slate-500 mb-5">Prices are estimates. Final quote provided after free diagnostic.</p>
              <Button asChild size="lg" className="rounded-full bg-[#005fee] hover:bg-[#0047c4] text-white px-8 h-12 uppercase tracking-widest text-xs font-semibold shadow-sm">
                <Link to="/book">Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── NEW: TRUST BADGES ── */}
      <section className="relative py-24 bg-[#f8fbff] overflow-hidden">
        <div className="pointer-events-none absolute -right-32 -top-20 h-80 w-80 rounded-full bg-[#fef3c7]/70" aria-hidden />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#ede9fe]/70" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#c7d2fe]/60 bg-[#eef2ff] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#005fee] shadow-sm mb-4">
                <HeartHandshake className="h-3.5 w-3.5" />
                Why choose us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Repairs you can count on.
              </h2>
              <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                We keep things simple: honest advice, expert work, and a warranty that backs it all.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center rounded-[1.75rem] border border-[#fcd9a0]/40 bg-[#fff7d2] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.18)]">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#005fee] text-white shadow-sm">
                    <item.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">{item.label}</h3>
                  <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEW: MAP & LOCATION ── */}
      <section className="relative py-24 overflow-hidden bg-white">
        <SectionBackdrop wash="bg-white/40"/>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#c7d2fe]/60 bg-[#eef2ff] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#005fee] shadow-sm mb-4">
                  <MapPin className="h-3.5 w-3.5" />
                  Find us
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-950 mt-5 mb-4">
                  Right in the heart of Nuneaton.
                </h2>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Drop by our Harefield Road workshop for a free diagnostic, friendly advice, or to browse our accessories. No appointment needed for walk-ins.
                </p>
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eef2ff] text-[#005fee]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Address</div>
                    <div className="text-sm text-slate-600 mt-1">6 Harefield Road, Nuneaton, CV11 4HD</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="rounded-sm bg-[#005fee] text-white hover:bg-[#0047c4]">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=6+Harefield+Road+Nuneaton+CV11+4HD"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-sm border-[#005fee] text-[#005fee] hover:bg-[#eff6ff]">
                    <a href="https://wa.me/447415278767">Message for Directions</a>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[2rem] border border-[#c7d2fe]/40 bg-[#eef2ff] shadow-[0_30px_80px_-40px_rgba(15,23,42,0.2)]">
                <div className="aspect-[4/3] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.5!2d-1.466!3d52.523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMxJzIyLjgiTiAxwrAyOCcwMC4wIlc!5e0!3m2!1sen!2suk!4v1"
                    width="100%"
                    height="100%"
                    style={{ minHeight: 400 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Express Phone & Laptop Repair - Nuneaton Location"
                    className="rounded-[2rem]"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl bg-white/95 backdrop-blur-sm px-5 py-4 shadow-lg ring-1 ring-white/80">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#005fee] text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-slate-950">Express Phone & Laptop Repair</div>
                    <div className="text-xs text-slate-500">6 Harefield Road, Nuneaton, CV11 4HD</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── NEW: FINAL CTA ── */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-[#005fee] via-[#0066ff] to-[#0078ff] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <Sparkles className="h-6 w-6 text-[#c7d2fe] mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Ready to get your device fixed?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Drop in for a free diagnostic, or book online and we'll have a slot ready for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-sm bg-white text-[#005fee] hover:bg-white/90 font-semibold h-12 uppercase tracking-widest text-xs px-8 shadow-lg">
                <Link to="/book">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a Repair
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-sm border-white/40 text-white bg-transparent hover:bg-white/10 h-12 uppercase tracking-widest text-xs px-8 font-semibold">
                <a href="tel:+447415278767">
                  <Phone className="mr-2 h-4 w-4" />
                  Call 07415 278767
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}