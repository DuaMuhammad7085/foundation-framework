import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { Smartphone, Shield, Zap, Cable, Laptop, Headphones, Car, Tv, Award, Truck, ShieldCheck, ArrowRight } from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-devices.jpg";
import svcScreen from "@/assets/svc-screen.jpg";
import svcCharging from "@/assets/svc-charging.jpg";
import catLaptop from "@/assets/cat-laptop.jpg";
import catTablet from "@/assets/cat-tablet.jpg";

export const Route = createFileRoute("/accessories")({
  head: () => ({
    meta: [
      { title: "Phone, Laptop & Tablet Accessories - Express Phone & Laptop Repair Nuneaton" },
      { name: "description", content: "Quality accessories for phones, laptops, tablets and more. Cases, chargers, cables, screen protectors & more in stock. Visit our Nuneaton store." },
    ],
  }),
  component: AccessoriesPage,
});

const accessoryCategories = [
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
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroScale = useTransform(scrollY, [0, 600], [1.05, 1.15]);

  return (
    <Layout>
      <PageHero
        image={heroImage}
        eyebrow="Premium Accessories"
        title={
          <>
            Power Up Your <span className="text-primary-glow">Devices.</span>
          </>
        }
        subtitle="Quality accessories for phones, laptops, tablets and more — carefully selected and tested. Available in our Nuneaton store."
      />

      {/* ========== ACCESSORIES ========== */}
      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {accessoryCategories.map((cat, i) => (
              <Reveal key={cat.title} delay={(i % 4) * 0.06}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-0 group h-full border border-slate-200/60 rounded-lg">
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-200">
                    <img src={cat.img} alt={cat.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary shadow-lg">
                      <cat.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-slate-950 mb-3">{cat.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((it) => (
                        <span key={it} className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-sm font-medium">{it}</span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="relative rounded-2xl border border-slate-200/60 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 p-12 shadow-sm">
              <div className="max-w-3xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  {[
                    { icon: Award, t: "Premium Quality", d: "Carefully sourced and tested accessories." },
                    { icon: Truck, t: "In-Stock Selection", d: "Browse and purchase in our Nuneaton location." },
                    { icon: ShieldCheck, t: "30-Day Guarantee", d: "Full satisfaction guarantee on all accessories." },
                  ].map((item, i) => (
                    <Reveal key={item.t} delay={i * 0.1}>
                      <div className="text-center">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <item.icon className="h-6 w-6" />
                        </div>
                        <h4 className="font-semibold text-slate-950 mb-2">{item.t}</h4>
                        <p className="text-sm text-slate-600">{item.d}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="rounded-sm bg-primary text-white hover:bg-primary/90 font-semibold h-12 uppercase tracking-widest text-xs px-8">
                    <Link to="/contact">Shop Accessories</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-sm border-slate-300 hover:bg-slate-100 h-12 uppercase tracking-widest text-xs px-8 font-semibold">
                    <Link to="/contact">Request an Item</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Need Something We Don't Have?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Got a specific accessory in mind? Let us know and we'll source it for you.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-sm bg-white text-primary hover:bg-white/90 font-semibold h-12 uppercase tracking-widest text-xs px-8">
                <Link to="/contact">Request an Item</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-sm border-white/40 text-white bg-transparent hover:bg-white/10 h-12 uppercase tracking-widest text-xs px-8 font-semibold">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
