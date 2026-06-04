import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Smartphone, Laptop, Tablet, Battery, Droplets, MonitorSmartphone,
  Bug, ArrowRight, CheckCircle2, ShieldCheck,
} from "lucide-react";
import svcScreen from "@/assets/svc-screen.jpg";
import svcBattery from "@/assets/svc-battery.jpg";
import svcWater from "@/assets/svc-water.jpg";
import svcCamera from "@/assets/svc-camera.jpg";
import svcCharging from "@/assets/svc-charging.jpg";
import svcLaptopImg from "@/assets/svc-laptop.jpg";
import catLaptop from "@/assets/cat-laptop.jpg";
import catTablet from "@/assets/cat-tablet.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Repair Services — Express Phone & Laptop Repair Nuneaton" },
      { name: "description", content: "Phone, laptop, tablet & smartwatch repairs in Nuneaton. Screen, battery, water damage, charging port & unlocking. 90-day warranty." },
    ],
  }),
  component: ServicesPage,
});

const categories = [
  { icon: Smartphone, img: svcScreen, title: "Mobile Phone Repair", items: ["Screen replacement", "Charging port repair", "Speaker & microphone", "Camera repair", "Software issues"] },
  { icon: Laptop, img: svcLaptopImg, title: "Laptop Repair", items: ["Keyboard replacement", "Battery replacement", "Overheating & fan", "SSD / RAM upgrades", "Screen repair"] },
  { icon: Tablet, img: catTablet, title: "Tablet Repair", items: ["Display repair", "Charging repair", "Software troubleshooting", "Battery replacement"] },
  { icon: MonitorSmartphone, img: svcScreen, title: "Screen Replacement", items: ["All major brands", "Same-day service", "Original-quality displays", "90-day warranty"] },
  { icon: Battery, img: svcBattery, title: "Battery Replacement", items: ["Fast-draining batteries", "Swollen batteries", "Quality cells", "30-minute swap"] },
  { icon: Droplets, img: svcWater, title: "Water Damage", items: ["Free diagnostics", "Ultrasonic cleaning", "Component-level repair", "Emergency support"] },
  { icon: Bug, img: catLaptop, title: "Software Issues", items: ["Device lag", "Virus removal", "OS installation", "Data backup & recovery"] },
  { icon: ShieldCheck, img: svcCamera, title: "Phone Unlocking", items: ["Network unlocking", "iCloud assistance", "Most makes & models", "Fast turnaround"] },
  { icon: Smartphone, img: svcCharging, title: "Charging Port Repair", items: ["iPhone & Android", "Loose connections", "Genuine parts", "Same-day fix"] },
];

const pricing = [
  { label: "Screen Repair", price: "from £39" },
  { label: "Battery Replacement", price: "from £29" },
  { label: "Charging Port", price: "from £25" },
  { label: "Water Damage", price: "from £49" },
  { label: "Software Fix", price: "from £19" },
  { label: "Laptop Service", price: "from £39" },
];

function ServicesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Services"
        title="Repairs for Every Device"
        subtitle="From phones to laptops — fast, professional repairs backed by a 90-day warranty."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c) => (
            <Card key={c.title} className="overflow-hidden hover:shadow-card transition-all hover:-translate-y-1 p-0">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-gradient-brand grid place-items-center shadow-glow">
                  <c.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-3">{c.title}</h3>
                <ul className="space-y-2">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-soft">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Pricing Preview</p>
            <h2 className="text-3xl md:text-4xl font-bold">Transparent, Honest Pricing</h2>
            <p className="text-muted-foreground mt-2">Free diagnostics. No hidden fees. Final price confirmed before any repair.</p>
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
