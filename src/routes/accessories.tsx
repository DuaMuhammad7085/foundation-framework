import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Car, Laptop, Tv, Shield, Cable, Zap, Headphones } from "lucide-react";
import catLaptop from "@/assets/cat-laptop.jpg";
import catTablet from "@/assets/cat-tablet.jpg";
import svcCharging from "@/assets/svc-charging.jpg";
import svcScreen from "@/assets/svc-screen.jpg";

export const Route = createFileRoute("/accessories")({
  head: () => ({
    meta: [
      { title: "Accessories — Express Phone & Laptop Repair Nuneaton" },
      { name: "description", content: "Cases, chargers, cables, screen protectors and accessories for phones, laptops and tablets — available in our Nuneaton store." },
    ],
  }),
  component: AccessoriesPage,
});

const categories = [
  { icon: Smartphone, img: svcScreen, title: "Phone Cases", items: ["Silicone", "Clear", "Rugged", "Wallet", "Leather", "MagSafe"] },
  { icon: Shield, img: svcScreen, title: "Screen Protectors", items: ["Tempered Glass", "Privacy", "Anti-Glare", "Camera Lens"] },
  { icon: Zap, img: svcCharging, title: "Chargers & Power", items: ["Fast Chargers", "Power Banks", "Wireless Pads", "Travel Adapters"] },
  { icon: Cable, img: svcCharging, title: "Cables", items: ["USB-C", "Lightning", "Micro USB", "HDMI", "Laptop Charging"] },
  { icon: Laptop, img: catLaptop, title: "Laptop Accessories", items: ["Chargers", "Bags & Sleeves", "Wireless Mice", "Keyboards", "USB Hubs"] },
  { icon: Headphones, img: catTablet, title: "Audio & Headphones", items: ["Wired Earphones", "Wireless Earbuds", "Headphones", "Bluetooth Speakers"] },
  { icon: Car, img: svcCharging, title: "Car Accessories", items: ["Phone Holders", "Car Chargers", "AUX Cables", "Bluetooth Adapters"] },
  { icon: Tv, img: catLaptop, title: "TV Accessories", items: ["HDMI Cables", "Wall Mounts", "Remotes", "Streaming Sticks"] },
];

function AccessoriesPage() {
  return (
    <Layout>
      <PageHero eyebrow="Accessories" title="Power Up Your Devices" subtitle="Quality accessories for phones, laptops and tablets — all available in our Nuneaton store." />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Card key={cat.title} className="overflow-hidden hover:shadow-card transition-all hover:-translate-y-1 p-0">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={cat.img} alt={cat.title} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-gradient-brand grid place-items-center shadow-glow">
                  <cat.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-3">{cat.title}</h3>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cat.items.map((i) => (
                    <span key={i} className="text-xs px-2.5 py-1 bg-accent/50 text-accent-foreground rounded-full">
                      {i}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full">Browse {cat.title}</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-soft">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Can't find what you need?</h2>
          <p className="text-muted-foreground mb-6">Pop into the shop or call us — we'll do our best to source it for you.</p>
          <Button asChild size="lg" className="bg-gradient-brand shadow-glow">
            <a href="/contact">Request an Accessory</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
