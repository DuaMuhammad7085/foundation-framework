import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, PoundSterling, ShieldCheck, Truck } from "lucide-react";
import catLaptop from "@/assets/cat-laptop.jpg";
import svcScreen from "@/assets/svc-screen.jpg";

export const Route = createFileRoute("/sell-resell")({
  head: () => ({
    meta: [
      { title: "Sell & Buy Refurbished — Express Phone & Laptop Repair Nuneaton" },
      { name: "description", content: "Sell your old phone or laptop for a fair price, or buy a quality refurbished device with warranty in Nuneaton." },
    ],
  }),
  component: SellResellPage,
});

function SellResellPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Sell & Resell"
        title="Trade In. Trade Up."
        subtitle="Sell your used device for a fair price, or pick up a quality refurbished phone or laptop — with warranty included."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-6">
          <Card className="overflow-hidden p-0">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img src={svcScreen} alt="Sell your device" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-8">
              <Recycle className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Sell Your Device</h3>
              <p className="text-muted-foreground mb-6">Bring your old phone, tablet or laptop in for an honest valuation and same-day payment.</p>
              <ul className="space-y-2 text-sm mb-6">
                {["Honest, transparent valuation", "Cash or bank transfer payment", "Safe data wiping included"].map((i) => (
                  <li key={i} className="flex gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> {i}</li>
                ))}
              </ul>
              <Button asChild className="bg-gradient-brand shadow-glow">
                <Link to="/contact">Get a Quote <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </div>
          </Card>

          <Card className="overflow-hidden p-0 bg-gradient-card-blue text-white border-0">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img src={catLaptop} alt="Buy refurbished" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.3_0.18_258)] to-transparent" />
            </div>
            <div className="p-8">
              <PoundSterling className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Buy Refurbished</h3>
              <p className="text-white/80 mb-6">Quality refurbished phones and laptops, fully tested and ready to go — at unbeatable prices.</p>
              <ul className="space-y-2 text-sm mb-6">
                {["Tested across multiple checkpoints", "Warranty included", "Friendly in-store advice"].map((i) => (
                  <li key={i} className="flex gap-2"><Truck className="w-4 h-4" /> {i}</li>
                ))}
              </ul>
              <Button asChild className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Browse Devices <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gradient-soft">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">How It Works</h2>
          <p className="text-muted-foreground mb-10">Selling or buying — both take just a few minutes.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Tell us about your device" },
              { n: "02", t: "Get an honest quote" },
              { n: "03", t: "Bring it to our store" },
              { n: "04", t: "Walk out with cash" },
            ].map((s) => (
              <div key={s.n}>
                <div className="text-4xl font-bold text-gradient-brand mb-2">{s.n}</div>
                <div className="text-sm font-medium">{s.t}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-gradient-brand">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
