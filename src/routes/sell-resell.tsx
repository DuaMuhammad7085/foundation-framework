import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { Recycle, PoundSterling, CheckCircle2, Award, Truck, ShieldCheck, ArrowRight } from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-devices.jpg";
import svcScreen from "@/assets/svc-screen.jpg";
import catLaptop from "@/assets/cat-laptop.jpg";

export const Route = createFileRoute("/sell-resell")({
  head: () => ({
    meta: [
      { title: "Sell Your Device or Buy Refurbished - Express Phone & Laptop Repair" },
      { name: "description", content: "Sell your old phone, laptop or tablet for fair value. Or buy refurbished devices — fully tested, warranted, and save up to 40%. Instant valuation." },
    ],
  }),
  component: SellResellPage,
});

function SellResellPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroScale = useTransform(scrollY, [0, 600], [1.05, 1.15]);

  return (
    <Layout>
      <PageHero
        image={heroImage}
        eyebrow="Trade In & Trade Up"
        title={
          <>
            Trade In. <span className="text-primary-glow">Trade Up.</span>
          </>
        }
        subtitle="Sell your used device for fair market value with instant payment. Or browse our curated selection of refurbished phones and laptops — all tested, warranted, and priced to save you money."
      />

      {/* ========== SELL & RESELL ========== */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          {/* Main Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <Reveal>
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200/60 shadow-[0_28px_90px_-48px_rgba(15,23,42,0.28)] transition-all duration-500 h-full hover:shadow-[0_40px_120px_-60px_rgba(15,23,42,0.4)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
                  <img src={svcScreen} alt="Sell your device" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-emerald-400/20 to-transparent" />
                </div>
                <div className="relative px-10 py-12 bg-white">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 text-sky-700 mb-6 shadow-sm">
                    <Recycle className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold text-slate-950 mb-4">Sell Your Device</h3>
                  <p className="text-slate-700 mb-8 text-lg leading-relaxed">Bring your old phone, tablet or laptop for an honest valuation and same-day payment. We accept all conditions — from like-new to heavily used.</p>
                  <div className="space-y-4 mb-10">
                    {["Instant device valuation", "Cash or bank transfer payment", "Full data security wipe", "Same-day payment guaranteed", "No fuss, no hassle", "Walk in with device, walk out with cash"].map((i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-sky-700 mt-0.5 shrink-0 flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-base text-slate-700 leading-relaxed">{i}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full rounded-sm bg-[#005fee] hover:bg-[#0047c4] text-white font-semibold py-3 text-base h-12 uppercase tracking-widest text-xs">
                    <Link to="/contact">Get Your Quote Today <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="group relative overflow-hidden rounded-2xl border border-slate-700/40 shadow-[0_28px_90px_-48px_rgba(14,116,144,0.35)] transition-all duration-500 h-full hover:shadow-[0_40px_120px_-60px_rgba(14,116,144,0.45)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                  <img src={catLaptop} alt="Buy refurbished" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/30 to-transparent" />
                  <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-white/10 to-transparent" />
                </div>
                <div className="relative px-10 py-12 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/20 text-yellow-400 mb-6 shadow-sm">
                    <PoundSterling className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold mb-4">Buy Refurbished</h3>
                  <p className="text-white/90 mb-8 text-lg leading-relaxed">Premium refurbished phones and laptops, fully tested and certified ready to go — save up to 40% vs new, with full warranty protection.</p>
                  <div className="space-y-4 mb-10">
                    {["Multi-point quality testing", "Full 12-month warranty included", "100% verified condition", "Expert in-store advice", "Quick device activation support", "30-day satisfaction guarantee"].map((i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-300 mt-0.5 shrink-0 flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-base text-white/95 leading-relaxed">{i}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full rounded-sm bg-white text-slate-950 font-semibold py-3 text-base h-12 uppercase tracking-widest text-xs hover:bg-slate-100">
                    <Link to="/contact">Browse Our Stock <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* How It Works Section */}
          <Reveal>
            <div className="relative rounded-2xl border border-slate-200/60 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 p-16 shadow-md mb-20">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <p className="text-xs uppercase tracking-[0.35em] text-primary font-semibold mb-3">Simple Process</p>
                  <h3 className="text-4xl md:text-5xl font-semibold text-slate-950 mb-4">How It Works</h3>
                  <p className="text-slate-600 text-lg max-w-2xl mx-auto">Whether selling or buying, the entire process takes just a few minutes.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { 
                      n: "01", 
                      t: "Tell Us What You Have", 
                      d: "Describe your device condition, model, and any damage. We'll give you an instant valuation or show available inventory." 
                    },
                    { 
                      n: "02", 
                      t: "Get Your Quote", 
                      d: "Receive a fair market price quote with complete transparency. No hidden fees or surprises — you see everything upfront." 
                    },
                    { 
                      n: "03", 
                      t: "Visit Our Store", 
                      d: "Come see the device in person at 6 Harefield Road, Nuneaton. Final inspection and confirmation before payment." 
                    },
                    { 
                      n: "04", 
                      t: "Instant Payment", 
                      d: "Walk out with cash same day or choose bank transfer. For refurbished devices, leave with your new purchase ready to use." 
                    },
                  ].map((step, i) => (
                    <Reveal key={step.n} delay={i * 0.12}>
                      <div className="group rounded-lg border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/60">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg mb-5 group-hover:bg-primary/20 transition-all">
                          {step.n}
                        </div>
                        <h4 className="font-semibold text-slate-950 mb-3 text-lg">{step.t}</h4>
                        <p className="text-slate-600 leading-relaxed text-base">{step.d}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Info Cards */}
          <Reveal>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Fair Valuation",
                  desc: "Our technicians assess each device thoroughly to ensure you get the best price for your condition.",
                  color: "from-emerald-500/20 to-emerald-500/10",
                  textColor: "text-sky-700",
                },
                {
                  icon: Truck,
                  title: "Fast & Convenient",
                  desc: "Same-day service with no appointment needed. Quick assessment, instant payment, ready to go.",
                  color: "from-primary/20 to-primary/10",
                  textColor: "text-primary",
                },
                {
                  icon: ShieldCheck,
                  title: "Data Security",
                  desc: "All devices receive certified data destruction. Your privacy and security are our top priority.",
                  color: "from-slate-500/20 to-slate-500/10",
                  textColor: "text-slate-600",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div className={`rounded-lg border border-slate-200/60 bg-gradient-to-br ${item.color} p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${item.textColor} mb-5`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold text-slate-950 mb-3 text-lg">{item.title}</h4>
                    <p className="text-slate-700 leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Ready to Sell or Upgrade?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Visit our store or get an instant quote online today.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-sm bg-white text-primary hover:bg-white/90 font-semibold h-12 uppercase tracking-widest text-xs px-8">
                <Link to="/contact">Get a Quote</Link>
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
