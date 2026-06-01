import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Award, Heart, Target, Users, ShieldCheck as ShieldCheckIcon } from "lucide-react";
import workshop from "@/assets/workshop.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Fixora Smart Repair" },
      { name: "description", content: "Learn about Fixora's mission, expertise and commitment to fast, trustworthy device repairs." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHero eyebrow="About Us" title="Repair, Reimagined." subtitle="A modern repair experience built on trust, speed and craftsmanship." />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <img src={workshop} alt="Fixora workshop" className="rounded-3xl shadow-card" loading="lazy" width={1536} height={768} />
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Our Story</p>
            <h2 className="text-4xl font-bold mb-4">10 Years of Fixing What Matters</h2>
            <p className="text-muted-foreground mb-4">
              Fixora started in 2016 with a simple mission: make device repair fast, transparent and trustworthy.
              Today, we've repaired over 10,000 devices for customers across the country.
            </p>
            <p className="text-muted-foreground">
              We use only genuine parts, employ certified technicians, and back every repair with a 90-day warranty.
              Because your device isn't just a gadget — it's your lifeline.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Why Customers Trust Us</p>
            <h2 className="text-4xl font-bold">Built on Four Promises</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Award, t: "Certified Experts", d: "Trained technicians with industry certifications." },
              { icon: ShieldCheckIcon, t: "Genuine Parts", d: "Only original or top-grade replacement parts." },
              { icon: Heart, t: "Customer-First", d: "Your satisfaction guides every decision we make." },
              { icon: Target, t: "Quick Turnaround", d: "Most repairs done within an hour." },
            ].map((v) => (
              <Card key={v.t} className="p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-brand grid place-items-center mx-auto mb-4 shadow-glow">
                  <v.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{v.t}</h3>
                <p className="text-sm text-muted-foreground">{v.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Users className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Meet the Team</h2>
          <p className="text-muted-foreground mb-10">A passionate crew of engineers, technicians and customer-care specialists.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: "Arjun Singh", r: "Founder & CEO" },
              { n: "Meera Joshi", r: "Head of Operations" },
              { n: "Rahul Verma", r: "Lead Technician" },
              { n: "Anika Roy", r: "Customer Success" },
            ].map((p) => (
              <Card key={p.n} className="p-6">
                <div className="w-20 h-20 rounded-full bg-gradient-brand mx-auto mb-3" />
                <div className="font-semibold">{p.n}</div>
                <div className="text-xs text-muted-foreground">{p.r}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { ShieldCheck as ShieldCheckIcon } from "lucide-react";
