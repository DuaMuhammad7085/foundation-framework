import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Car, Laptop, Tv, Shield, Cable, Zap } from "lucide-react";

export const Route = createFileRoute("/accessories")({
  head: () => ({
    meta: [
      { title: "Accessories — Fixora" },
      { name: "description", content: "Cases, chargers, cables and accessories for phones, laptops, cars and more." },
    ],
  }),
  component: AccessoriesPage,
});

const categories = [
  {
    icon: Smartphone,
    title: "iPhone Cases",
    items: ["Silicone Cases", "Clear Cases", "Rugged Cases", "Wallet Cases", "Leather Cases", "MagSafe Cases"],
  },
  {
    icon: Smartphone,
    title: "Samsung Cases",
    items: ["Silicone Cases", "Clear Cases", "Rugged Cases", "Flip Cases", "Wallet Cases"],
  },
  {
    icon: Car,
    title: "Car Accessories",
    items: ["Phone Holders", "Magnetic Mounts", "Wireless Car Chargers", "USB Car Chargers", "Bluetooth Adapters", "AUX Cables"],
  },
  {
    icon: Laptop,
    title: "Laptop Accessories",
    items: ["Chargers", "Bags & Sleeves", "Cooling Pads", "Wireless Mice", "Keyboards", "USB Hubs", "Docking Stations"],
  },
  {
    icon: Tv,
    title: "TV Accessories",
    items: ["Wall Mounts", "HDMI Cables", "Universal Remotes", "Streaming Accessories", "Power Cables"],
  },
  {
    icon: Shield,
    title: "Screen Protectors",
    items: ["Tempered Glass", "Privacy Protectors", "Anti-Glare", "Camera Lens Protectors"],
  },
  {
    icon: Cable,
    title: "Cable Collection",
    items: ["USB-C", "Lightning", "Micro USB", "HDMI", "DisplayPort", "Ethernet", "AUX", "VGA", "Power", "Laptop Charging"],
  },
  {
    icon: Zap,
    title: "Chargers & Power",
    items: ["Fast Chargers", "Power Banks", "Wireless Pads", "MagSafe Chargers", "Travel Adapters"],
  },
];

function AccessoriesPage() {
  return (
    <Layout>
      <PageHero eyebrow="Accessories" title="Power Up Your Devices" subtitle="Premium accessories for phones, laptops, cars and more — all in one place." />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Card key={cat.title} className="p-6 hover:shadow-card transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-brand grid place-items-center mb-4 shadow-glow">
                <cat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {cat.items.map((i) => (
                  <span key={i} className="text-xs px-2.5 py-1 bg-accent/50 text-accent-foreground rounded-full">
                    {i}
                  </span>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full">Browse {cat.title}</Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-soft">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Can't find what you need?</h2>
          <p className="text-muted-foreground mb-6">Contact us and we'll source it for you within 48 hours.</p>
          <Button asChild size="lg" className="bg-gradient-brand shadow-glow">
            <a href="/contact">Request an Accessory</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
