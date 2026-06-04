import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Express Phone & Laptop Repair Nuneaton" },
      { name: "description", content: "Answers to common questions about phone & laptop repairs, warranty, pricing and data safety in Nuneaton." },
    ],
  }),
  component: FaqPage,
});

const sections = [
  {
    title: "General",
    items: [
      { q: "What are your business hours?", a: "Monday to Saturday, 10:00 AM to 6:00 PM. Closed Sundays." },
      { q: "Where are you located?", a: "6 Harefield Road, Nuneaton, CV11 4HD." },
      { q: "Do you accept walk-ins?", a: "Yes — walk-ins are welcome. Calling ahead on 07415 278767 helps us prepare for your visit." },
    ],
  },
  {
    title: "Repairs",
    items: [
      { q: "How long do repairs take?", a: "Most common repairs (screens, batteries, charging ports) are completed the same day, often within 30–60 minutes." },
      { q: "What devices do you repair?", a: "Smartphones, tablets, laptops, smartwatches and most other electronic devices." },
      { q: "Will my repair void the manufacturer warranty?", a: "Third-party repairs may affect your manufacturer warranty, but every repair we do is backed by our own 90-day warranty." },
    ],
  },
  {
    title: "Warranty",
    items: [
      { q: "How long is the repair warranty?", a: "90 days on parts and labour for every repair we carry out." },
      { q: "What does the warranty cover?", a: "Failure of the replaced part under normal use. Accidental damage and liquid damage are not covered." },
      { q: "How do I claim warranty?", a: "Bring your device and the repair receipt back to our Nuneaton store and we'll take care of it." },
    ],
  },
  {
    title: "Pricing",
    items: [
      { q: "Are diagnostics free?", a: "Yes — diagnostics are 100% free, with no obligation to repair." },
      { q: "Are there hidden fees?", a: "Never. You always get a clear price before we start any work." },
      { q: "What payment methods do you accept?", a: "Cash and all major credit/debit cards." },
    ],
  },
  {
    title: "Data Safety",
    items: [
      { q: "Is my data safe during repair?", a: "Yes. We follow strict privacy protocols and don't access your personal data." },
      { q: "Should I back up my device?", a: "We recommend a backup before any repair, although most repairs preserve all data." },
      { q: "Can you recover lost data?", a: "Yes — we offer professional data recovery for many damaged devices." },
    ],
  },
];

function FaqPage() {
  return (
    <Layout>
      <PageHero eyebrow="Help Center" title="Frequently Asked Questions" subtitle="Everything you need to know about repairs at Express Phone & Laptop Repair." />

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
          <p className="text-muted-foreground mb-6">Our team is happy to help — give us a call or pop in.</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Button asChild className="bg-gradient-brand">
              <Link to="/contact"><MessageCircle className="w-4 h-4 mr-2" /> Contact Us</Link>
            </Button>
            <Button asChild variant="outline">
              <a href="tel:+447415278767"><Phone className="w-4 h-4 mr-2" /> 07415 278767</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
