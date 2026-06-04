import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, LogIn, Wrench, Package, Calendar } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "My Account — Express Phone & Laptop Repair Nuneaton" },
      { name: "description", content: "Track your repairs and manage your account at Express Phone & Laptop Repair, Nuneaton." },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const [showPw, setShowPw] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return (
      <Layout>
        <PageHero eyebrow="My Account" title="Welcome back!" />
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-3 gap-6">
            {[
              { icon: Wrench, t: "Active Repair", d: "iPhone 14 — Screen", s: "In Progress" },
              { icon: Calendar, t: "Next Appointment", d: "Tomorrow • 3:00 PM", s: "Confirmed" },
              { icon: Package, t: "Order History", d: "3 completed repairs", s: "View all" },
            ].map((c) => (
              <Card key={c.t} className="p-6">
                <c.icon className="w-8 h-8 text-primary mb-3" />
                <div className="text-xs uppercase text-muted-foreground tracking-wider">{c.t}</div>
                <div className="font-semibold mt-1">{c.d}</div>
                <div className="text-sm text-primary mt-2">{c.s}</div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" onClick={() => setLoggedIn(false)}>Sign Out</Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHero eyebrow="Profile" title="Welcome Back" subtitle="Sign in to track your repairs and manage your account." />

      <section className="py-20">
        <div className="max-w-md mx-auto px-4">
          <Card className="p-8">
            <form onSubmit={(e) => { e.preventDefault(); setLoggedIn(true); }} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="you@example.com" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-1.5">
                  <Input id="password" type={showPw ? "text" : "password"} required placeholder="••••••••" />
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  >
                    {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2"><input type="checkbox" /> Remember me</label>
                <a href="#" className="text-primary hover:underline">Forgot password?</a>
              </div>
              <Button type="submit" className="w-full bg-gradient-brand shadow-glow">
                <LogIn className="w-4 h-4 mr-2" /> Sign In
              </Button>
              <div className="flex items-center gap-3 my-2">
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground uppercase">or</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <Button type="button" variant="outline" className="w-full">
                Continue with Google
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                New here? <a href="#" className="text-primary font-medium">Create an account</a>
              </p>
            </form>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
