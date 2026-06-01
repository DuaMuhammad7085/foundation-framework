import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, IndianRupee, ShieldCheck, Truck } from "lucide-react";

export const Route = createFileRoute("/sell-resell")({
  head: () => ({
    meta: [
      { title: "Sell & Resell Devices — Fixora" },
      { name: "description", content: "Get the best price for your old phone, laptop or tablet. Or buy a quality refurbished device." },
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
        subtitle="Sell your used device at the best market price or grab a quality refurbished device with warranty."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-6">
          <Card className="p-8">
            <Recycle className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3">Sell Your Device</h3>
            <p className="text-muted-foreground mb-6">Get an instant quote in under 60 seconds. Doorstep pickup with same-day payment.</p>
            <ul className="space-y-2 text-sm mb-6">
              {["Free pickup at your doorstep", "Instant payment via UPI / bank transfer", "Honest, transparent valuation"].map((i) => (
                <li key={i} className="flex gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> {i}</li>
              ))}
            </ul>
            <Button className="bg-gradient-brand shadow-glow">Get Instant Quote <ArrowRight className="w-4 h-4 ml-1" /></Button>
          </Card>

          <Card className="p-8 bg-gradient-card-blue text-white border-0">
            <IndianRupee className="w-10 h-10 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Buy Refurbished</h3>
            <p className="text-white/80 mb-6">Premium refurbished phones and laptops, tested across 50+ checkpoints. Save up to 60% off retail.</p>
            <ul className="space-y-2 text-sm mb-6">
              {["6-month device warranty", "Free shipping across India", "7-day no-questions return"].map((i) => (
                <li key={i} className="flex gap-2"><Truck className="w-4 h-4" /> {i}</li>
              ))}
            </ul>
            <Button className="bg-white text-primary hover:bg-white/90">Browse Devices <ArrowRight className="w-4 h-4 ml-1" /></Button>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gradient-soft">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">How It Works</h2>
          <p className="text-muted-foreground mb-10">Selling or buying — both take under 10 minutes.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Tell us about your device" },
              { n: "02", t: "Get an instant quote" },
              { n: "03", t: "Free doorstep pickup" },
              { n: "04", t: "Get paid instantly" },
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
