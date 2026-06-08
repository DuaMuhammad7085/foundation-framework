import { createFileRoute, Link } from "@tanstack/react-router";
import { Recycle, PoundSterling, CheckCircle2, Award, Truck, ShieldCheck, ArrowRight } from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { SectionBackdrop } from "@/components/SectionBackdrop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-devices.jpg";
import svcMobileRepair from "@/assets/svc-mobile-repair.jpg";
import svcLaptopRepair from "@/assets/svc-laptop-repair.jpg";

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
  return (
    <Layout>
      <PageHero
        image={heroImage}
        overlayClassName="bg-[linear-gradient(110deg,rgba(0,17,73,0.82)_0%,rgba(0,47,125,0.62)_40%,rgba(0,94,238,0.18)_75%,rgba(255,255,255,0.00)_100%)]"
        eyebrow="Trade In & Trade Up"
        eyebrowClassName="border-[#005fee]/55 bg-[#eff6ff] text-[#005fee]"
        title={
          <>
            Trade In. <span className="text-primary-glow">Trade Up.</span>
          </>
        }
        subtitle="Sell your used device for fair market value with instant payment. Or browse our curated selection of refurbished phones and laptops — all tested, warranted, and priced to save you money."
        actions={
          <>
            <Button asChild size="lg" className="bg-[#005fee] hover:bg-[#0047c4] text-white rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold shadow-sm">
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#005fee] text-[#005fee] bg-white hover:bg-[#eff6ff] rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold">
              <Link to="/contact">Browse Stock</Link>
            </Button>
          </>
        }
      />

      <div className="relative overflow-hidden bg-white">
        <SectionBackdrop />
        <div className="relative z-10">
          <section className="py-24 bg-transparent">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                <Reveal>
                  <Card className="group relative overflow-hidden rounded-[2rem] border border-emerald-200/80 bg-emerald-50 p-0 h-full shadow-sm transition-shadow duration-500 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={svcMobileRepair} alt="Sell your device" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                    </div>
                    <div className="p-8 lg:p-10 bg-white">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-emerald-200/60 bg-emerald-50 text-emerald-700 mb-6">
                        <Recycle className="w-6 h-6" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">Sell Your Device</h3>
                      <p className="text-slate-600 mb-8 text-lg leading-relaxed">Bring your old phone, tablet or laptop for an honest valuation and same-day payment. We accept all conditions — from like-new to heavily used.</p>
                      <div className="space-y-3 mb-10">
                        {["Instant device valuation", "Cash or bank transfer payment", "Full data security wipe", "Same-day payment guaranteed", "No fuss, no hassle", "Walk in with device, walk out with cash"].map((i) => (
                          <div key={i} className="flex gap-3 items-start">
                            <CheckCircle2 className="w-4 h-4 text-[#005fee] mt-1 shrink-0" />
                            <span className="text-base text-slate-700 leading-relaxed">{i}</span>
                          </div>
                        ))}
                      </div>
                      <Button asChild className="w-full rounded-sm bg-[#005fee] hover:bg-[#0047c4] text-white font-semibold h-12 uppercase tracking-widest text-xs">
                        <Link to="/contact">Get Your Quote Today <ArrowRight className="w-4 h-4 ml-2" /></Link>
                      </Button>
                    </div>
                  </Card>
                </Reveal>

                <Reveal delay={0.15}>
                  <Card className="group relative overflow-hidden rounded-[2rem] border border-amber-200/80 bg-amber-50 p-0 h-full shadow-sm transition-shadow duration-500 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={svcLaptopRepair} alt="Buy refurbished" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                    </div>
                    <div className="p-8 lg:p-10 bg-white">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-amber-200/60 bg-[#fff4ca] text-amber-700 mb-6">
                        <PoundSterling className="w-6 h-6" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">Buy Refurbished</h3>
                      <p className="text-slate-600 mb-8 text-lg leading-relaxed">Premium refurbished phones and laptops, fully tested and certified ready to go — save up to 40% vs new, with full warranty protection.</p>
                      <div className="space-y-3 mb-10">
                        {["Multi-point quality testing", "Full 12-month warranty included", "100% verified condition", "Expert in-store advice", "Quick device activation support", "30-day satisfaction guarantee"].map((i) => (
                          <div key={i} className="flex gap-3 items-start">
                            <CheckCircle2 className="w-4 h-4 text-[#005fee] mt-1 shrink-0" />
                            <span className="text-base text-slate-700 leading-relaxed">{i}</span>
                          </div>
                        ))}
                      </div>
                      <Button asChild className="w-full rounded-sm bg-[#005fee] hover:bg-[#0047c4] text-white font-semibold h-12 uppercase tracking-widest text-xs">
                        <Link to="/contact">Browse Our Stock <ArrowRight className="w-4 h-4 ml-2" /></Link>
                      </Button>
                    </div>
                  </Card>
                </Reveal>
              </div>

              <Reveal>
                <div className="relative rounded-[2rem] border border-sky-200/70 bg-[#e7f4ff] p-10 lg:p-14 shadow-sm mb-16">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#005fee] mb-3">Simple Process</p>
                      <h3 className="text-4xl md:text-5xl font-bold text-slate-950 mb-4">How It Works</h3>
                      <p className="text-slate-500 text-lg max-w-2xl mx-auto">Whether selling or buying, the entire process takes just a few minutes.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { n: "01", t: "Tell Us What You Have", d: "Describe your device condition, model, and any damage. We'll give you an instant valuation or show available inventory." },
                        { n: "02", t: "Get Your Quote", d: "Receive a fair market price quote with complete transparency. No hidden fees or surprises — you see everything upfront." },
                        { n: "03", t: "Visit Our Store", d: "Come see the device in person at 6 Harefield Road, Nuneaton. Final inspection and confirmation before payment." },
                        { n: "04", t: "Instant Payment", d: "Walk out with cash same day or choose bank transfer. For refurbished devices, leave with your new purchase ready to use." },
                      ].map((step, i) => (
                        <Reveal key={step.n} delay={i * 0.12}>
                          <Card className="group rounded-[1.75rem] border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.2)]">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#fff4ca] text-[#005fee] font-bold text-lg mb-5">
                              {step.n}
                            </div>
                            <h4 className="font-semibold text-slate-950 mb-3 text-lg">{step.t}</h4>
                            <p className="text-slate-600 leading-relaxed text-base">{step.d}</p>
                          </Card>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: Award, title: "Fair Valuation", desc: "Our technicians assess each device thoroughly to ensure you get the best price for your condition." },
                    { icon: Truck, title: "Fast & Convenient", desc: "Same-day service with no appointment needed. Quick assessment, instant payment, ready to go." },
                    { icon: ShieldCheck, title: "Data Security", desc: "All devices receive certified data destruction. Your privacy and security are our top priority." },
                  ].map((item, i) => (
                    <Reveal key={item.title} delay={i * 0.1}>
                      <Card className="rounded-[1.75rem] border border-slate-200/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.2)]">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-blue-200/60 bg-white/50 text-[#005fee] mb-5">
                          <item.icon className="h-6 w-6" />
                        </div>
                        <h4 className="font-semibold text-slate-950 mb-3 text-lg">{item.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                      </Card>
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-r from-[#005fee] via-[#0078ff] to-[#0095ff] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Ready to Sell or Upgrade?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Visit our store or get an instant quote online today.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-sm bg-white text-[#005fee] hover:bg-white/90 font-semibold h-12 uppercase tracking-widest text-xs px-8">
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
