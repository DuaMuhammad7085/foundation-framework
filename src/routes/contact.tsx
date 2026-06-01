import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Fixora Smart Repair" },
      { name: "description", content: "Get in touch with Fixora. Visit our store or message us on WhatsApp." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <PageHero eyebrow="Contact" title="Let's Talk" subtitle="Reach out for support, quotes or directions." />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-6">
          {[
            { icon: Phone, t: "Phone", d: "+91 98765 43210", h: "tel:+919876543210" },
            { icon: Mail, t: "Email", d: "support@fixora.com", h: "mailto:support@fixora.com" },
            { icon: MapPin, t: "Address", d: "123 Tech Street, Mega City, India — 400001" },
            { icon: Clock, t: "Hours", d: "Mon–Sun: 10:00 AM – 8:00 PM" },
            { icon: MessageCircle, t: "WhatsApp", d: "+91 98765 43210", h: "https://wa.me/919876543210" },
            { icon: Instagram, t: "Social", d: "@fixora.repair" },
          ].map((c) => (
            <Card key={c.t} className="p-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-brand grid place-items-center mb-3 shadow-glow">
                <c.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.t}</div>
              {c.h ? (
                <a href={c.h} className="font-semibold mt-1 block hover:text-primary">{c.d}</a>
              ) : (
                <div className="font-semibold mt-1">{c.d}</div>
              )}
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
            <p className="text-muted-foreground mb-6">We typically reply within 1 business hour.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); toast.success("Message sent! We'll get back to you soon."); }}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cname">Name</Label>
                  <Input id="cname" required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="cphone">Phone</Label>
                  <Input id="cphone" type="tel" className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="cemail">Email</Label>
                <Input id="cemail" type="email" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="cmsg">Message</Label>
                <Textarea id="cmsg" required rows={5} className="mt-1.5" />
              </div>
              <Button type="submit" className="bg-gradient-brand shadow-glow w-full">Send Message</Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8 bg-gradient-card-blue text-white border-0">
              <MessageCircle className="w-10 h-10 mb-3" />
              <h3 className="text-2xl font-bold mb-2">Chat on WhatsApp</h3>
              <p className="text-white/80 mb-6">Quick replies, instant quotes, hassle-free support.</p>
              <Button asChild className="bg-white text-primary hover:bg-white/90">
                <a href="https://wa.me/919876543210">Open WhatsApp</a>
              </Button>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-3">Find Us</h3>
              <div className="aspect-video rounded-xl bg-gradient-soft grid place-items-center text-muted-foreground">
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-1 text-primary" />
                  <div className="text-sm">123 Tech Street, Mega City</div>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <Button variant="outline" className="flex-1"><Facebook className="w-4 h-4 mr-2" /> Facebook</Button>
                <Button variant="outline" className="flex-1"><Instagram className="w-4 h-4 mr-2" /> Instagram</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
