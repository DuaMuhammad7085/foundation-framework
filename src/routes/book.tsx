import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero } from "@/components/Layout";
import { SectionBackdrop } from "@/components/SectionBackdrop";
import { Reveal } from "@/components/Reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Upload } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-devices.jpg";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Repair — Express Phone & Laptop Repair Nuneaton" },
      { name: "description", content: "Book your phone, laptop or tablet repair in Nuneaton. Free diagnostics, same-day service, 90-day warranty." },
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
      <PageHero
        image={heroImage}
        overlayClassName="bg-[linear-gradient(110deg,rgba(0,17,73,0.82)_0%,rgba(0,47,125,0.62)_40%,rgba(0,94,238,0.18)_75%,rgba(255,255,255,0.00)_100%)]"
        eyebrow="Book a Repair"
        eyebrowClassName="border-[#005fee]/55 bg-[#eff6ff] text-[#005fee]"
        title="Get Your Device Fixed Today"
        subtitle="Tell us what's wrong — we'll get back to you with a quote and a slot."
        actions={
          <>
            <Button asChild size="lg" className="bg-[#005fee] hover:bg-[#0047c4] text-white rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold shadow-sm">
              <a href="tel:+447415278767">Call 07415 278767</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#005fee] text-[#005fee] bg-white hover:bg-[#eff6ff] rounded-sm px-8 h-12 uppercase tracking-widest text-xs font-semibold">
              <a href="https://wa.me/447415278767">WhatsApp Us</a>
            </Button>
          </>
        }
      />

      <div className="relative overflow-hidden bg-white">
        <SectionBackdrop />
        <section className="relative z-10 py-24">
          <div className="max-w-4xl mx-auto px-4">
            <Reveal>
              {submitted ? (
                <Card className="p-10 text-center rounded-[2rem] border border-slate-200/70 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.2)]">
                  <div className="w-16 h-16 rounded-full bg-[#eff6ff] grid place-items-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#005fee]" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-slate-950">Booking Confirmed!</h2>
                  <p className="text-slate-600 mb-6">
                    We'll be in touch shortly on 07415 278767 to confirm your repair slot.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-sm border-[#005fee] text-[#005fee] hover:bg-[#eff6ff]">
                    Book Another Repair
                  </Button>
                </Card>
              ) : (
                <Card className="p-6 md:p-10 rounded-[2rem] border border-slate-200/70 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.2)]">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#005fee] mb-3">Repair Request</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-6">Tell us about your device</h2>
                  <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" required placeholder="John Doe" className="mt-1.5 rounded-xl border-slate-200" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" required placeholder="07xxx xxxxxx" className="mt-1.5 rounded-xl border-slate-200" />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="you@example.com" className="mt-1.5 rounded-xl border-slate-200" />
                    </div>
                    <div>
                      <Label>Device Type</Label>
                      <Select>
                        <SelectTrigger className="mt-1.5 rounded-xl border-slate-200"><SelectValue placeholder="Choose device" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mobile">Mobile Phone</SelectItem>
                          <SelectItem value="laptop">Laptop</SelectItem>
                          <SelectItem value="tablet">Tablet</SelectItem>
                          <SelectItem value="watch">Smartwatch</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Brand</Label>
                      <Select>
                        <SelectTrigger className="mt-1.5 rounded-xl border-slate-200"><SelectValue placeholder="Choose brand" /></SelectTrigger>
                        <SelectContent>
                          {["Apple", "Samsung", "Google", "Huawei", "OnePlus", "Dell", "HP", "Lenovo", "Other"].map((b) => (
                            <SelectItem key={b} value={b.toLowerCase()}>{b}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="problem">Problem Description</Label>
                      <Textarea id="problem" required placeholder="Describe what's wrong with your device..." rows={4} className="mt-1.5 rounded-xl border-slate-200" />
                    </div>
                    <div>
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input id="date" type="date" className="mt-1.5 rounded-xl border-slate-200" />
                    </div>
                    <div>
                      <Label>Service Urgency</Label>
                      <Select>
                        <SelectTrigger className="mt-1.5 rounded-xl border-slate-200"><SelectValue placeholder="Standard" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard (1–2 days)</SelectItem>
                          <SelectItem value="express">Express (same-day)</SelectItem>
                          <SelectItem value="emergency">Urgent (a few hours)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="sm:col-span-2">
                      <Label>Upload Image (optional)</Label>
                      <label className="mt-1.5 border-2 border-dashed border-slate-200 rounded-[1.25rem] p-6 flex flex-col items-center gap-2 cursor-pointer hover:bg-[#eff6ff]/50 transition-colors">
                        <Upload className="w-6 h-6 text-slate-400" />
                        <span className="text-sm text-slate-500">Click to upload device photos</span>
                        <input type="file" accept="image/*" multiple className="hidden" />
                      </label>
                    </div>
                    <Button type="submit" size="lg" className="sm:col-span-2 rounded-sm bg-[#005fee] hover:bg-[#0047c4] text-white h-12 uppercase tracking-widest text-xs font-semibold">
                      Confirm Booking
                    </Button>
                  </form>
                </Card>
              )}
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
}
