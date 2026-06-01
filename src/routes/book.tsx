import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Upload } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Repair — Fixora" },
      { name: "description", content: "Book your device repair in under 60 seconds. Free pickup available." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Booking received! We'll contact you shortly.");
  }

  return (
    <Layout>
      <PageHero eyebrow="Book a Repair" title="Get Your Device Fixed Today" subtitle="Tell us what's wrong — we'll handle the rest." />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          {submitted ? (
            <Card className="p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-success/15 grid place-items-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-success" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
              <p className="text-muted-foreground mb-6">
                Our team will contact you within 30 minutes to schedule pickup or your in-store visit.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline">Book Another Repair</Button>
            </Card>
          ) : (
            <Card className="p-6 md:p-10">
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required placeholder="John Doe" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" required placeholder="+91 98765 43210" className="mt-1.5" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" className="mt-1.5" />
                </div>
                <div>
                  <Label>Device Type</Label>
                  <Select>
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="Choose device" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mobile">Mobile</SelectItem>
                      <SelectItem value="laptop">Laptop</SelectItem>
                      <SelectItem value="tablet">Tablet</SelectItem>
                      <SelectItem value="watch">Smartwatch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Brand</Label>
                  <Select>
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="Choose brand" /></SelectTrigger>
                    <SelectContent>
                      {["Apple", "Samsung", "Xiaomi", "OnePlus", "Dell", "HP", "Lenovo", "Other"].map((b) => (
                        <SelectItem key={b} value={b.toLowerCase()}>{b}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="problem">Problem Description</Label>
                  <Textarea id="problem" required placeholder="Describe what's wrong with your device..." rows={4} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input id="date" type="date" className="mt-1.5" />
                </div>
                <div>
                  <Label>Service Urgency</Label>
                  <Select>
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="Standard" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard (1–2 days)</SelectItem>
                      <SelectItem value="express">Express (same-day)</SelectItem>
                      <SelectItem value="emergency">Emergency (2 hours)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2">
                  <Label>Upload Image (optional)</Label>
                  <label className="mt-1.5 border-2 border-dashed border-border rounded-xl p-6 flex flex-col items-center gap-2 cursor-pointer hover:bg-accent/30 transition-colors">
                    <Upload className="w-6 h-6 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Click to upload device photos</span>
                    <input type="file" accept="image/*" multiple className="hidden" />
                  </label>
                </div>
                <Button type="submit" size="lg" className="sm:col-span-2 bg-gradient-brand shadow-glow">
                  Confirm Booking
                </Button>
              </form>
            </Card>
          )}
        </div>
      </section>
    </Layout>
  );
}
