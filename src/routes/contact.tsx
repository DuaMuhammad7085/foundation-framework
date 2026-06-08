import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Facebook,
  Headphones,
  HelpCircle,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Wrench,
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
import logoAsset from "@/assets/express-logo.png.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Express Phone & Laptop Repair Nuneaton" },
      {
        name: "description",
        content:
          "Contact Express Phone & Laptop Repair in Nuneaton. Call 07415 278767, pop into 6 Harefield Road, CV11 4HD, or send us a message.",
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

const fieldClass =
  "mt-2 h-12 rounded-sm border-slate-200 bg-slate-50/80 px-4 shadow-none focus-visible:ring-sky-500";

function ContactPage() {
  return (
    <Layout>
      <PageHero
        image={heroImage}
        overlayClassName="bg-[linear-gradient(110deg,rgba(0,17,73,0.82)_0%,rgba(0,47,125,0.62)_40%,rgba(0,94,238,0.18)_75%,rgba(255,255,255,0.00)_100%)]"
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
        aside={
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-glow via-white to-sky-400" />
            <img
              src={logoAsset.url}
              alt="Express Phone & Laptop Repair"
              className="mx-auto mb-7 max-h-32 w-full object-contain drop-shadow-xl"
            />
            <div className="space-y-4 border-t border-white/15 pt-6">
              {["Walk-ins welcome", "Free initial diagnostics", "Same-day repairs available"].map((item) => (
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
          <Stagger className="grid overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.2)] md:grid-cols-3">
            {contactChannels.map((channel, index) => (
              <StaggerItem key={channel.title} className="h-full">
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`group relative flex h-full min-h-44 flex-col justify-between border-slate-200 p-6 transition-all hover:bg-sky-50/60 ${
                    index < contactChannels.length - 1 ? "border-b md:border-b-0 md:border-r" : ""
                  }`}
                >
                  <div className="absolute inset-x-8 top-0 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-70" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                        {channel.title}
                      </div>
                      <div className="mt-3 text-2xl font-semibold text-slate-950 transition-colors group-hover:text-[#005fee]">
                        {channel.value}
                      </div>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-sky-500/10 text-[#005fee] ring-1 ring-sky-200">
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-200/60 bg-[#eff6ff] text-[#005fee]">
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

      <section className="relative py-20 md:py-24 overflow-hidden bg-white">
        <SectionBackdrop />
        <div className="relative z-10">
        <div className="mx-auto grid max-w-7xl items-start gap-6 px-4 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="h-full">
            <Card className="relative h-full overflow-hidden rounded-[2rem] border-slate-200/70 bg-white p-7 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.2)] md:p-10">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-primary-glow to-sky-400" />
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
                    className="mt-2 rounded-sm border-slate-200 bg-slate-50/80 px-4 py-3 shadow-none focus-visible:ring-sky-500"
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
            <div className="absolute right-0 top-0 hidden h-full w-1/2 opacity-30 md:block">
              <img src={svcScreen} alt="" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-slate-950/55" />
            </div>

            <div className="relative grid gap-8 p-8 md:grid-cols-[0.85fr_1.15fr] md:p-12">
              <div>
                <Clock className="mb-5 h-9 w-9 text-primary-glow" />
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-sky-200">
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
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/80">
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
    </Layout>
  );
}
