import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Eye,
  EyeOff,
  FileText,
  Headphones,
  Lock,
  LogIn,
  LogOut,
  Mail,
  Package,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  UserPlus,
  Wrench,
} from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal, Stagger, StaggerItem } from "@/components/about/Reveal";
import heroImage from "@/assets/hero-devices.jpg";
import workshopImage from "@/assets/workshop.jpg";
import logoAsset from "@/assets/express-logo.png.asset.json";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "My Account - Express Phone & Laptop Repair Nuneaton" },
      {
        name: "description",
        content:
          "Track your repairs and manage your account at Express Phone & Laptop Repair, Nuneaton.",
      },
    ],
  }),
  component: ProfilePage,
});

const portalBenefits = [
  "Track active repairs",
  "Save your contact details",
  "View repair history",
  "Get warranty reminders",
];

const dashboardCards = [
  {
    icon: Wrench,
    label: "Active Repair",
    title: "iPhone 14 - Screen",
    status: "In Progress",
    tone: "text-sky-700",
  },
  {
    icon: Calendar,
    label: "Next Appointment",
    title: "Tomorrow - 3:00 PM",
    status: "Confirmed",
    tone: "text-emerald-700",
  },
  {
    icon: Package,
    label: "Repair History",
    title: "3 completed repairs",
    status: "View all",
    tone: "text-indigo-700",
  },
];

const timeline = [
  { step: "Received", text: "Device checked into the workshop.", active: true },
  { step: "Diagnosis", text: "Fault confirmed by technician.", active: true },
  { step: "Repairing", text: "Replacement screen being fitted.", active: true },
  { step: "Testing", text: "Final quality checks next.", active: false },
  { step: "Ready", text: "Collection notification pending.", active: false },
];

const fieldClass =
  "mt-2 h-12 rounded-sm border-slate-200 bg-slate-50/80 px-4 shadow-none focus-visible:ring-sky-500";

function ProfilePage() {
  const [showPw, setShowPw] = useState(false);
  const [showSignupPw, setShowSignupPw] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <Layout>
      <PageHero
        image={heroImage}
        eyebrow="Repair portal"
        title="Track repairs and manage your account."
        subtitle="Sign in to follow repair progress, view appointments and keep your warranty details in one place."
        actions={
          <>
            <Button asChild size="lg" className="rounded-sm bg-white px-7 text-slate-950 hover:bg-slate-100">
              <Link to="/book">Book a Repair <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-sm border-white/40 bg-transparent px-7 text-white hover:bg-white/10"
            >
              <Link to="/contact">Need Help?</Link>
            </Button>
          </>
        }
        aside={
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-glow via-white to-sky-400" />
            <img
              src={logoAsset.url}
              alt="Express Phone & Laptop Repair"
              className="mx-auto mb-7 max-h-32 w-full object-contain drop-shadow-xl"
            />
            <div className="space-y-4 border-t border-white/15 pt-6">
              {portalBenefits.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-white/82">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        }
      />

      {loggedIn ? (
        <SignedInDashboard onSignOut={() => setLoggedIn(false)} />
      ) : (
        <AuthPanel
          mode={mode}
          setMode={setMode}
          showPw={showPw}
          setShowPw={setShowPw}
          showSignupPw={showSignupPw}
          setShowSignupPw={setShowSignupPw}
          onLogin={() => setLoggedIn(true)}
        />
      )}
    </Layout>
  );
}

function AuthPanel({
  mode,
  setMode,
  showPw,
  setShowPw,
  showSignupPw,
  setShowSignupPw,
  onLogin,
}: {
  mode: "login" | "signup";
  setMode: (mode: "login" | "signup") => void;
  showPw: boolean;
  setShowPw: (value: boolean) => void;
  showSignupPw: boolean;
  setShowSignupPw: (value: boolean) => void;
  onLogin: () => void;
}) {
  return (
    <>
      <section className="relative z-10 -mt-20 pb-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid overflow-hidden border border-slate-200 bg-white shadow-[0_30px_90px_-50px_rgba(14,116,144,0.42)] lg:grid-cols-[1.08fr_0.92fr]">
            <Reveal>
              <div className="relative h-full p-7 md:p-10">
                <div className="absolute inset-x-8 top-0 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-80" />
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">
                  Account access
                </p>
                <h2 className="text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                  {mode === "login" ? "Welcome back." : "Create your repair account."}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                  {mode === "login"
                    ? "Use your account to track active repairs, appointments and warranty details."
                    : "Create an account so future repairs, receipts and warranty details are easier to manage."}
                </p>

                <div className="mt-8 grid grid-cols-2 border border-slate-200 bg-slate-50 p-1">
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className={`h-11 text-sm font-semibold transition-colors ${
                      mode === "login" ? "bg-slate-950 text-white" : "text-slate-600 hover:text-slate-950"
                    }`}
                  >
                    Sign in
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("signup")}
                    className={`h-11 text-sm font-semibold transition-colors ${
                      mode === "signup" ? "bg-slate-950 text-white" : "text-slate-600 hover:text-slate-950"
                    }`}
                  >
                    Sign up
                  </button>
                </div>

                {mode === "login" ? (
                  <LoginForm showPw={showPw} setShowPw={setShowPw} onLogin={onLogin} />
                ) : (
                  <SignupForm showPw={showSignupPw} setShowPw={setShowSignupPw} onLogin={onLogin} />
                )}
              </div>
            </Reveal>

            <Reveal variant="slideLeft">
              <div className="relative flex h-full min-h-[520px] flex-col justify-end overflow-hidden bg-slate-950 text-white">
                <img src={workshopImage} alt="Repair tracking support" className="absolute inset-0 h-full w-full object-cover opacity-62" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent" />
                <div className="relative p-7 md:p-10">
                  <ShieldCheck className="mb-5 h-9 w-9 text-primary-glow" />
                  <h3 className="text-3xl font-semibold">Track without calling twice.</h3>
                  <p className="mt-4 text-sm leading-7 text-white/74">
                    Your repair status, appointment time and warranty notes stay
                    easy to find whenever you need them.
                  </p>
                  <div className="mt-7 grid gap-3">
                    {["Live repair status", "Warranty details", "Appointment reminders"].map((item) => (
                      <div key={item} className="flex items-center gap-3 border border-white/10 bg-white/[0.07] p-4">
                        <CheckCircle2 className="h-4 w-4 text-primary-glow" />
                        <span className="text-sm text-white/84">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,white_0%,rgb(248,250,252)_100%)] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Stagger className="grid gap-4 md:grid-cols-3">
            {[
              { icon: Search, title: "Repair lookup", text: "Find progress updates by account or tracking ID." },
              { icon: FileText, title: "Receipts saved", text: "Keep repair notes and warranty info in one place." },
              { icon: Headphones, title: "Support ready", text: "Ask us anything before or after collection." },
            ].map((item) => (
              <StaggerItem key={item.title} className="h-full">
                <Card className="group h-full rounded-sm border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_26px_70px_-50px_rgba(2,132,199,0.45)]">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center bg-slate-950 text-primary-glow">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}

function LoginForm({
  showPw,
  setShowPw,
  onLogin,
}: {
  showPw: boolean;
  setShowPw: (value: boolean) => void;
  onLogin: () => void;
}) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onLogin();
      }}
      className="mt-8 space-y-5"
    >
      <div>
        <Label htmlFor="email" className="text-sm font-semibold text-slate-700">
          Email
        </Label>
        <div className="relative">
          <Mail className="absolute left-4 top-[22px] h-4 w-4 text-slate-400" />
          <Input id="email" type="email" required placeholder="you@example.com" className={`${fieldClass} pl-11`} />
        </div>
      </div>
      <PasswordField
        id="password"
        label="Password"
        show={showPw}
        setShow={setShowPw}
        placeholder="Enter your password"
      />
      <div className="flex items-center justify-between gap-4 text-sm">
        <label className="flex items-center gap-2 text-slate-600">
          <input type="checkbox" className="h-4 w-4 accent-sky-700" /> Remember me
        </label>
        <a href="#reset" className="font-medium text-sky-700 hover:underline">
          Forgot password?
        </a>
      </div>
      <Button type="submit" size="lg" className="w-full rounded-sm bg-slate-950 text-white hover:bg-sky-800">
        <LogIn className="mr-2 h-4 w-4" /> Sign In
      </Button>
    </form>
  );
}

function SignupForm({
  showPw,
  setShowPw,
  onLogin,
}: {
  showPw: boolean;
  setShowPw: (value: boolean) => void;
  onLogin: () => void;
}) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onLogin();
      }}
      className="mt-8 space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="signup-name" className="text-sm font-semibold text-slate-700">
            Name
          </Label>
          <Input id="signup-name" required placeholder="Your name" className={fieldClass} />
        </div>
        <div>
          <Label htmlFor="signup-phone" className="text-sm font-semibold text-slate-700">
            Phone
          </Label>
          <Input id="signup-phone" type="tel" placeholder="07xxx xxxxxx" className={fieldClass} />
        </div>
      </div>
      <div>
        <Label htmlFor="signup-email" className="text-sm font-semibold text-slate-700">
          Email
        </Label>
        <Input id="signup-email" type="email" required placeholder="you@example.com" className={fieldClass} />
      </div>
      <PasswordField
        id="signup-password"
        label="Create password"
        show={showPw}
        setShow={setShowPw}
        placeholder="Choose a password"
      />
      <Button type="submit" size="lg" className="w-full rounded-sm bg-slate-950 text-white hover:bg-sky-800">
        <UserPlus className="mr-2 h-4 w-4" /> Create Account
      </Button>
    </form>
  );
}

function PasswordField({
  id,
  label,
  show,
  setShow,
  placeholder,
}: {
  id: string;
  label: string;
  show: boolean;
  setShow: (value: boolean) => void;
  placeholder: string;
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm font-semibold text-slate-700">
        {label}
      </Label>
      <div className="relative">
        <Lock className="absolute left-4 top-[22px] h-4 w-4 text-slate-400" />
        <Input
          id={id}
          type={show ? "text" : "password"}
          required
          placeholder={placeholder}
          className={`${fieldClass} pl-11 pr-12`}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-[22px] text-slate-400 transition-colors hover:text-slate-700"
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}

function SignedInDashboard({ onSignOut }: { onSignOut: () => void }) {
  return (
    <>
      <section className="relative z-10 -mt-20 pb-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-hidden border border-slate-200 bg-white shadow-[0_30px_90px_-50px_rgba(14,116,144,0.42)]">
            <div className="relative grid gap-6 p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="absolute inset-x-8 top-0 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-80" />
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">
                  My account
                </p>
                <h2 className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                  Welcome back, Alex.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                  Your latest repair is in progress. We will notify you when final
                  testing is complete and the device is ready for collection.
                </p>
              </div>
              <Button variant="outline" className="rounded-sm" onClick={onSignOut}>
                <LogOut className="mr-2 h-4 w-4" /> Sign Out
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Stagger className="grid gap-4 lg:grid-cols-3">
            {dashboardCards.map((card) => (
              <StaggerItem key={card.label} className="h-full">
                <Card className="group h-full rounded-sm border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_26px_70px_-50px_rgba(2,132,199,0.45)]">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center bg-slate-950 text-primary-glow">
                      <card.icon className="h-5 w-5" />
                    </div>
                    <span className={`text-sm font-semibold ${card.tone}`}>{card.status}</span>
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {card.label}
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-slate-950">{card.title}</div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <Card className="overflow-hidden rounded-sm border-slate-200 bg-white shadow-[0_24px_70px_-58px_rgba(15,23,42,0.35)]">
                <div className="border-b border-slate-200 bg-slate-50/80 p-6 md:p-7">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-slate-950 text-primary-glow">
                      <Wrench className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-950">Repair progress</h3>
                      <p className="mt-1 text-sm text-slate-600">Tracking ID: EX-2048</p>
                    </div>
                  </div>
                </div>
                <div className="divide-y divide-slate-200">
                  {timeline.map((item) => (
                    <div key={item.step} className="flex gap-4 p-6">
                      <div
                        className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                          item.active ? "bg-sky-600 text-white" : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-950">{item.step}</div>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>

            <Reveal variant="slideLeft">
              <div className="relative flex h-full min-h-[440px] flex-col justify-end overflow-hidden bg-slate-950 text-white shadow-[0_34px_100px_-62px_rgba(15,23,42,0.65)]">
                <img src={workshopImage} alt="Repair account support" className="absolute inset-0 h-full w-full object-cover opacity-62" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent" />
                <div className="relative p-7 md:p-10">
                  <Phone className="mb-5 h-9 w-9 text-primary-glow" />
                  <h3 className="text-3xl font-semibold">Need an update?</h3>
                  <p className="mt-4 text-sm leading-7 text-white/74">
                    Call the shop or send a WhatsApp message with your tracking ID.
                  </p>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    <Button asChild className="rounded-sm bg-white text-slate-950 hover:bg-slate-100">
                      <a href="tel:+447415278767">Call Shop</a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-sm border-white/35 bg-transparent text-white hover:bg-white/10"
                    >
                      <a href="https://wa.me/447415278767">WhatsApp</a>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
