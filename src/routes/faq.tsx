import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Fixora Smart Repair" },
      { name: "description", content: "Answers to common questions about repairs, warranty, pricing and data safety." },
    ],
  }),
  component: FaqPage,
});

const sections = [
  {
    title: "General",
    items: [
      { q: "What are your business hours?", a: "Monday to Sunday, 10:00 AM to 8:00 PM." },
      { q: "Where are you located?", a: "123, Tech Street, Mega City, India — 400001. We also offer doorstep pickup." },
      { q: "Do you accept walk-ins?", a: "Yes, but booking online ensures priority service." },
    ],
  },
  {
    title: "Repairs",
    items: [
      { q: "How long do repairs take?", a: "Most repairs are done within 30–60 minutes. Complex issues may take 1–2 days." },
      { q: "What devices do you repair?", a: "All major smartphones, tablets, laptops, smartwatches and audio devices." },
      { q: "Will my repair void the warranty?", a: "Original warranty may be void, but every repair we do includes our own 90-day warranty." },
    ],
  },
  {
    title: "Warranty",
    items: [
      { q: "How long is the repair warranty?", a: "90 days on parts and labor for every repair." },
      { q: "What does the warranty cover?", a: "Failure of the replaced part under normal use. Physical damage is excluded." },
      { q: "How do I claim warranty?", a: "Bring your device and the repair receipt to any Fixora location." },
    ],
  },
  {
    title: "Pricing",
    items: [
      { q: "Are diagnostics free?", a: "Yes — diagnostics are 100% free, no obligation to repair." },
      { q: "Are there hidden fees?", a: "Never. You'll always get a written estimate before we start work." },
      { q: "Do you accept UPI/Cards?", a: "We accept UPI, all major cards, net banking and cash." },
    ],
  },
  {
    title: "Data Safety",
    items: [
      { q: "Is my data safe during repair?", a: "Yes. We follow strict privacy protocols and never access your personal data." },
      { q: "Should I back up my device?", a: "We recommend a backup before repair, though most repairs preserve all data." },
      { q: "Can you recover lost data?", a: "Yes, we offer professional data recovery for damaged devices." },
    ],
  },
];

function FaqPage() {
  return (
    <Layout>
      <PageHero eyebrow="Help Center" title="Frequently Asked Questions" subtitle="Everything you need to know about Fixora repairs." />

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-2xl font-bold mb-4">{s.title}</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {s.items.map((f) => (
                  <AccordionItem key={f.q} value={f.q} className="bg-card rounded-xl border px-5">
                    <AccordionTrigger>{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-soft">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">Our team is happy to help — reach out anytime.</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Button asChild className="bg-gradient-brand">
              <Link to="/contact"><MessageCircle className="w-4 h-4 mr-2" /> Contact Support</Link>
            </Button>
            <Button asChild variant="outline">
              <a href="tel:+919876543210"><Phone className="w-4 h-4 mr-2" /> Call Us</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
