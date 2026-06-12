import { createFileRoute, Link } from "@tanstack/react-router";
import { Smartphone, Shield, Zap, Cable, Laptop, Headphones, Car, Tv, Award, Truck, ShieldCheck, ArrowRight } from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { SectionBackdrop } from "@/components/SectionBackdrop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-devices.jpg";
import accPhoneCases from "@/assets/acc-phone-cases.jpg";
import accScreenProtectors from "@/assets/acc-screen-protectors.jpg";
import accChargersPower from "@/assets/acc-chargers-power.jpg";
import accCables from "@/assets/acc-cables.jpg";
import accLaptopAccessories from "@/assets/acc-laptop-accessories.jpg";
import accAudioHeadphones from "@/assets/acc-audio-headphones.jpg";
import accCarAccessories from "@/assets/acc-car-accessories.jpg";
import accTvAccessories from "@/assets/acc-tv-accessories.jpg";

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
  { icon: Smartphone, img: accPhoneCases, title: "Phone Cases", items: ["Silicone", "Clear", "Rugged", "Wallet", "Leather", "MagSafe"], cardBg: "bg-sky-100", cardBorder: "border-sky-300/80" },
  { icon: Shield, img: accScreenProtectors, title: "Screen Protectors", items: ["Tempered Glass", "Privacy", "Anti-Glare", "Camera Lens"], cardBg: "bg-violet-50", cardBorder: "border-violet-200/80" },
  { icon: Zap, img: accChargersPower, title: "Chargers & Power", items: ["Fast Chargers", "Power Banks", "Wireless Pads", "Travel Adapters"], cardBg: "bg-amber-50", cardBorder: "border-amber-200/80" },
  { icon: Cable, img: accCables, title: "Cables", items: ["USB-C", "Lightning", "Micro USB", "HDMI", "Laptop Charging"], cardBg: "bg-emerald-50", cardBorder: "border-emerald-200/80" },
  { icon: Laptop, img: accLaptopAccessories, title: "Laptop Accessories", items: ["Chargers", "Bags & Sleeves", "Wireless Mice", "Keyboards", "USB Hubs"], cardBg: "bg-sky-100", cardBorder: "border-sky-300/80" },
  { icon: Headphones, img: accAudioHeadphones, title: "Audio & Headphones", items: ["Wired Earphones", "Wireless Earbuds", "Headphones", "Bluetooth Speakers"], cardBg: "bg-rose-50", cardBorder: "border-rose-200/80" },
  { icon: Car, img: accCarAccessories, title: "Car Accessories", items: ["Phone Holders", "Car Chargers", "AUX Cables", "Bluetooth Adapters"], cardBg: "bg-teal-50", cardBorder: "border-teal-200/80" },
  { icon: Tv, img: accTvAccessories, title: "TV Accessories", items: ["HDMI Cables", "Wall Mounts", "Remotes", "Streaming Sticks"], cardBg: "bg-slate-50", cardBorder: "border-slate-200/80" },
];

function AccessoriesPage() {
  return (
    <Layout>
      <PageHero
        image={heroImage}
        overlayClassName="bg-[linear-gradient(110deg,rgba(0,17,73,0.82)_0%,rgba(0,47,125,0.62)_40%,rgba(0,94,238,0.18)_75%,rgba(255,255,255,0.00)_100%)]"
        eyebrow="Premium Accessories"
        eyebrowClassName="border-[#005fee]/55 bg-[#eff6ff] text-[#005fee]"
        title={
          <>
            Power Up Your <span className="text-primary-glow">Devices.</span>
          </>
        }
        subtitle="Quality accessories for phones, laptops, tablets and more — carefully selected and tested. Available in our Nuneaton store."
        actions={
          <>
            <Button asChild size="lg" className="bg-[#005fee] hover:bg-[#0047c4] text-white rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold shadow-sm">
              <Link to="/contact">Shop Accessories</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#005fee] text-[#005fee] bg-white hover:bg-[#eff6ff] rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold">
              <Link to="/contact">Request an Item</Link>
            </Button>
          </>
        }
      />

      <div className="relative overflow-hidden bg-white">
        <SectionBackdrop />
        <div className="relative z-10">
          <section className="py-24 bg-transparent">
            <div className="max-w-7xl mx-auto px-4">
              <Reveal>
                <div className="text-center mb-14">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#005fee] mb-3">In-Store Selection</p>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Accessories for every device.</h2>
                  <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Carefully sourced cases, chargers, cables and audio — quality picks you can browse and buy in our Nuneaton shop.</p>
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {accessoryCategories.map((cat, i) => (
                  <Reveal key={cat.title} delay={(i % 4) * 0.06}>
                    <Card className={`group relative overflow-hidden rounded-[1.75rem] border ${cat.cardBorder} ${cat.cardBg} p-0 h-full shadow-sm transition-shadow duration-500 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]`}>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img src={cat.img} alt={cat.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                        <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#005fee] shadow-lg">
                          <cat.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="absolute bottom-4 left-5 right-5">
                          <h3 className="text-xl font-semibold text-white drop-shadow">{cat.title}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2">
                          {cat.items.map((it) => (
                            <span key={it} className="text-xs px-3 py-1.5 bg-[#fff4ca] text-[#005fee] rounded-full font-medium">{it}</span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <div className="relative rounded-[2rem] border border-sky-200/70 bg-[#e7f4ff] p-10 lg:p-12 shadow-sm">
                  <div className="max-w-3xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-10">
                      {[
                        { icon: Award, t: "Premium Quality", d: "Carefully sourced and tested accessories." },
                        { icon: Truck, t: "In-Stock Selection", d: "Browse and purchase in our Nuneaton location." },
                        { icon: ShieldCheck, t: "30-Day Guarantee", d: "Full satisfaction guarantee on all accessories." },
                      ].map((item, i) => (
                        <Reveal key={item.t} delay={i * 0.1}>
                          <div className="text-center">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-blue-200/60 bg-white/50 text-[#005fee]">
                              <item.icon className="h-6 w-6" />
                            </div>
                            <h4 className="font-semibold text-slate-950 mb-2">{item.t}</h4>
                            <p className="text-sm text-slate-600">{item.d}</p>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg" className="rounded-sm bg-[#005fee] hover:bg-[#0047c4] text-white font-semibold h-12 uppercase tracking-widest text-xs px-8">
                        <Link to="/contact">Shop Accessories</Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="rounded-sm border-[#005fee] text-[#005fee] hover:bg-[#eff6ff] h-12 uppercase tracking-widest text-xs px-8 font-semibold">
                        <Link to="/contact">Request an Item</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-r from-[#005fee] via-[#0078ff] to-[#0095ff] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Need Something We Don't Have?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Got a specific accessory in mind? Let us know and we'll source it for you.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-sm bg-white text-[#005fee] hover:bg-white/90 font-semibold h-12 uppercase tracking-widest text-xs px-8">
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
