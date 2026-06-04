import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Phone, MapPin, Clock, MessageCircle, Facebook, Instagram,
  ArrowRight, Sparkles, Headphones, Wrench, HelpCircle,
} from "lucide-react";
import { toast } from "sonner";
import { Layout } from "@/components/Layout";
import { GradientBackdrop } from "@/components/GradientBackdrop";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal, Stagger, StaggerItem } from "@/components/about/Reveal";
import { cn } from "@/lib/utils";
import workshopImage from "@/assets/workshop.jpg";
import logoAsset from "@/assets/express-logo.png.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Express Phone & Laptop Repair Nuneaton" },
      { name: "description", content: "Contact Express Phone & Laptop Repair in Nuneaton. Call 07415 278767, pop into 6 Harefield Road, CV11 4HD, or send us a message." },
    ],
  }),
  component: ContactPage,
});

const contactChannels = [
  { icon: Phone, title: "Phone", value: "07415 278767", href: "tel:+447415278767", note: "Call for quotes or to book in" },
  { icon: MapPin, title: "Visit us", value: "6 Harefield Road, Nuneaton, CV11 4HD", note: "Walk-ins welcome" },
  { icon: Clock, title: "Hours", value: "Mon–Sat: 10 AM – 6 PM", note: "Same-day repairs available" },
  { icon: MessageCircle, title: "WhatsApp", value: "07415 278767", href: "https://wa.me/447415278767", note: "Fastest way to get a quote" },
];

const helpTopics = [
  { icon: Wrench, title: "Book a repair", text: "Schedule your repair online.", to: "/book" as const },
  { icon: Headphones, title: "Track your device", text: "Check your repair status.", to: "/profile" as const },
  { icon: HelpCircle, title: "Browse FAQ", text: "Warranty, pricing & turnaround answers.", to: "/faq" as const },
];

const iconTile =
  "grid place-items-center shrink-0 rounded-xl bg-muted text-foreground border border-border/60 group-hover:bg-accent transition-colors";

function ContactPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden text-primary-foreground min-h-[380px] md:min-h-[420px]">
        <GradientBackdrop variant="hero" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_20%,white,transparent_40%)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-22 grid lg:grid-cols-2 gap-8 items-center min-h-[380px] md:min-h-[420px]">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs uppercase tracking-widest mb-5">
              <Sparkles className="w-3.5 h-3.5" /> Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-[1.05]">
              Let's <span className="text-primary-glow">talk.</span>
            </h1>
            <p className="mt-5 text-lg text-white/85 max-w-xl leading-relaxed">
              Quotes, warranty questions, or directions to the shop — reach us any way you prefer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 shadow-md border-0">
                <a href="tel:+447415278767">Call 07415 278767 <ArrowRight className="w-4 h-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/35 text-white bg-white/10 hover:bg-white/15">
                <a href="https://wa.me/447415278767">WhatsApp Us</a>
              </Button>
            </div>
          </Reveal>
          <Reveal variant="slideLeft" className="hidden lg:block">
            <img src={logoAsset.url} alt="Express Phone & Laptop Repair" className="w-full max-w-sm mx-auto drop-shadow-2xl" />
          </Reveal>
        </div>
      </section>

      {/* Quick help */}
      <section className="py-12 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4">
          <Stagger className="grid sm:grid-cols-3 gap-4">
            {helpTopics.map((h) => (
              <StaggerItem key={h.title}>
                <Link to={h.to} className="group flex gap-4 p-5 rounded-2xl border border-border/80 bg-card hover:shadow-card hover:border-primary/25 transition-all">
                  <div className={cn(iconTile, "w-11 h-11")}>
                    <h.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold group-hover:text-foreground transition-colors">{h.title}</div>
                    <p className="text-sm text-muted-foreground mt-0.5">{h.text}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Contact channels */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">Get in touch</p>
            <h2 className="text-3xl md:text-4xl font-bold">Every channel, one team</h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactChannels.map((c) => (
              <StaggerItem key={c.title}>
                <Card className="p-6 h-full bg-card hover:shadow-card hover:-translate-y-0.5 transition-all group border-border">
                  <div className={cn(iconTile, "w-12 h-12 rounded-2xl mb-4")}>
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.title}</div>
                  {c.href ? (
                    <a href={c.href} className="font-semibold mt-1 block text-lg text-foreground hover:underline underline-offset-4 transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <div className="font-semibold mt-1 text-lg">{c.value}</div>
                  )}
                  <p className="text-sm text-muted-foreground mt-2">{c.note}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-3">
            <Card className="p-8 md:p-10 border-border shadow-card overflow-hidden relative bg-card">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 relative">Send us a message</h2>
              <p className="text-muted-foreground mb-8 relative">
                Fill out the form and we'll get back to you as soon as possible.
              </p>
              <form
                onSubmit={(e) => { e.preventDefault(); toast.success("Message sent! We'll get back to you soon."); }}
                className="space-y-5 relative"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cname">Name</Label>
                    <Input id="cname" required className="mt-1.5" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="cphone">Phone</Label>
                    <Input id="cphone" type="tel" className="mt-1.5" placeholder="07xxx xxxxxx" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="cemail">Email</Label>
                  <Input id="cemail" type="email" required className="mt-1.5" placeholder="you@email.com" />
                </div>
                <div>
                  <Label htmlFor="csubject">Subject</Label>
                  <Input id="csubject" className="mt-1.5" placeholder="Repair quote, warranty, etc." />
                </div>
                <div>
                  <Label htmlFor="cmsg">Message</Label>
                  <Textarea id="cmsg" required rows={5} className="mt-1.5" placeholder="Tell us about your device and the issue…" />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full bg-gradient-brand shadow-glow">
                  Send Message
                </Button>
              </form>
            </Card>
          </Reveal>

          <div className="lg:col-span-2 space-y-6">
            <Reveal delay={0.08}>
              <Card className="p-8 border border-[#25D366]/25 bg-[#25D366]/[0.06] shadow-card">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 grid place-items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-[#128C7E]" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Chat on WhatsApp</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Send photos of the damage, get instant quotes, and book in — all in one chat.
                </p>
                <Button asChild className="w-full rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] border-0 shadow-sm">
                  <a href="https://wa.me/447415278767">Open WhatsApp</a>
                </Button>
              </Card>
            </Reveal>

            <Reveal delay={0.12}>
              <Card className="p-0 overflow-hidden border-border/80">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={workshopImage} alt="Our store" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Visit our store</h3>
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                    6 Harefield Road, Nuneaton, CV11 4HD
                  </p>
                  <div className="flex gap-3 mt-4">
                    <Button variant="outline" className="flex-1 rounded-full" asChild>
                      <a href="https://www.google.com/maps/search/?api=1&query=6+Harefield+Road+Nuneaton+CV11+4HD" target="_blank" rel="noreferrer">
                        Get Directions
                      </a>
                    </Button>
                  </div>
                  <div className="flex gap-3 mt-3">
                    <Button variant="outline" className="flex-1 rounded-full" asChild>
                      <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <Facebook className="w-4 h-4 mr-2" /> Facebook
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1 rounded-full" asChild>
                      <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <Instagram className="w-4 h-4 mr-2" /> Instagram
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Hours banner */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="rounded-3xl p-8 md:p-12 bg-card border border-border shadow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">Visit in person</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Walk in — no appointment needed</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Bring your device to our Nuneaton store for a free diagnosis. Most repairs are completed
                  the same day while you wait.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Weekdays", time: "10 AM – 6 PM" },
                  { label: "Saturday", time: "10 AM – 6 PM" },
                  { label: "Sunday", time: "Closed" },
                  { label: "Avg. wait", time: "Under 15 min" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl bg-muted/50 border border-border p-4 text-center">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</div>
                    <div className="font-semibold mt-1 text-foreground">{item.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
