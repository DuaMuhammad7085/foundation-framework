import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Smartphone, Laptop, Tablet, Battery, Droplets, MonitorSmartphone,
  Bug, ArrowRight, CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Fixora Smart Repair" },
      { name: "description", content: "All our repair services: screens, batteries, water damage, software and more." },
    ],
  }),
  component: ServicesPage,
});

const categories = [
  { icon: Smartphone, title: "Mobile Repair", items: ["Screen repair", "Charging issues", "Speaker problems", "Camera repair", "Software issues"] },
  { icon: Laptop, title: "Laptop Repair", items: ["Keyboard replacement", "Battery replacement", "Overheating", "SSD upgrades", "Screen repair"] },
  { icon: Tablet, title: "Tablet Repair", items: ["Display repair", "Charging repair", "Software troubleshooting", "Battery replacement"] },
  { icon: MonitorSmartphone, title: "Screen Replacement", items: ["All major brands", "Same-day service", "Original-quality displays", "90-day warranty"] },
  { icon: Battery, title: "Battery Replacement", items: ["Fast-draining batteries", "Swollen batteries", "Genuine cells", "30-minute swap"] },
  { icon: Droplets, title: "Water Damage", items: ["Free diagnostics", "Ultrasonic cleaning", "Component-level repair", "Emergency support"] },
  { icon: Bug, title: "Software Issues", items: ["Device lag", "Virus removal", "OS installation", "Data backup & recovery"] },
];

const pricing = [
  { label: "Screen Repair", price: "from ₹1,499" },
  { label: "Battery Replacement", price: "from ₹999" },
  { label: "Charging Port", price: "from ₹799" },
  { label: "Water Damage", price: "from ₹1,999" },
  { label: "Software Fix", price: "from ₹499" },
  { label: "Laptop Service", price: "from ₹1,299" },
];

function ServicesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Services"
        title="Repairs for Every Device"
        subtitle="From mobiles to laptops — we cover every fix you need, backed by a 90-day warranty."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c) => (
            <Card key={c.title} className="p-6 hover:shadow-card transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-brand grid place-items-center mb-4 shadow-glow">
                <c.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{c.title}</h3>
              <ul className="space-y-2">
                {c.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {i}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-soft">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Pricing Preview</p>
            <h2 className="text-3xl md:text-4xl font-bold">Transparent, Honest Pricing</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {pricing.map((p) => (
              <Card key={p.label} className="p-5 flex items-center justify-between">
                <span className="font-medium">{p.label}</span>
                <span className="text-primary font-semibold">{p.price}</span>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-gradient-brand shadow-glow">
              <Link to="/book">Book Repair Now <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
