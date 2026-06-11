import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  Lock,
  LogIn,
  LogOut,
  Mail,
  Phone,
  Search,
  ShieldCheck,
  UserPlus,
  Wrench,
  User,
  LayoutDashboard,
  AlertCircle,
  Package,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import workshopImage from "@/assets/workshop.jpg";

const API_BASE_URL = "http://localhost:8000/api";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "My Account - Fixora Repair" },
      {
        name: "description",
        content: "Track your repairs and manage your account.",
      },
    ],
  }),
  component: ProfilePage,
});

const fieldClass =
  "mt-2 h-12 rounded-lg border-slate-200 bg-slate-50/80 px-4 shadow-none focus-visible:ring-violet-500 focus-visible:border-violet-500";

function ProfilePage() {
  const router = useRouter();
  const [showPw, setShowPw] = useState(false);
  const [showSignupPw, setShowSignupPw] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("user_token");
    const adminToken = localStorage.getItem("admin_token");

    if (adminToken) {
      setLoggedIn(true);
      setUser({ name: "Admin" });
    } else if (token) {
      setLoggedIn(true);
      // Ideally fetch user profile here. For now just set state.
      setUser({ name: "Customer" });
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("user_token");
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_user");
    setLoggedIn(false);
    setUser(null);
      // notify the rest of the app that the user signed out
      window.dispatchEvent(new CustomEvent("auth-change", { detail: { type: "logout" } }));
  };

  return (
    <Layout>
      <div className="relative min-h-screen">
        <div className="pointer-events-none absolute inset-0 z-0" style={{ backgroundColor: "#F5F1ED" }}></div>
        <div className="relative z-10">
          <div className="min-h-[90vh] bg-[#f8fafc] pt-24 pb-16">
            <div className="mx-auto max-w-7xl px-4">
          {loggedIn ? (
            <SignedInDashboard onSignOut={handleSignOut} user={user} />
          ) : (
            <AuthPanel
              mode={mode}
              setMode={setMode}
              showPw={showPw}
              setShowPw={setShowPw}
              showSignupPw={showSignupPw}
              setShowSignupPw={setShowSignupPw}
              onLoginSuccess={() => setLoggedIn(true)}
              router={router}
            />
          )}
        </div>
      </div>
    </div>
    </div>
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
  onLoginSuccess,
  router,
}: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        if (data.user.role === "admin" || data.user.role === "technician") {
          localStorage.setItem("admin_token", data.token);
          localStorage.setItem("admin_user", JSON.stringify(data.user));
          router.navigate({ to: "/admin" });
            // notify header and other components about auth change
            window.dispatchEvent(new CustomEvent("auth-change", { detail: { type: "login", role: data.user.role } }));
        } else {
          localStorage.setItem("user_token", data.token);
          onLoginSuccess();
            window.dispatchEvent(new CustomEvent("auth-change", { detail: { type: "login", role: "user" } }));
        }
      } else {
        setError(data.message || "Invalid credentials.");
      }
    } catch {
      setError("Could not reach backend.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    // Add real signup endpoint logic here if available. For now simulating failure.
    setTimeout(() => {
      setError("Signup endpoint not implemented yet.");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white shadow-2xl shadow-slate-200/50 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 p-8 md:p-12">
        <div className="mb-8">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600 mb-6">
            <User className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">
            {mode === "login" ? "Welcome back" : "Create an account"}
          </h2>
          <p className="mt-2 text-slate-600">
            {mode === "login"
              ? "Sign in to track repairs and manage your devices."
              : "Register to keep all your repair history in one place."}
          </p>
        </div>

        <div className="mb-8 flex rounded-xl border border-slate-200 bg-slate-50 p-1">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
              mode === "login"
                ? "bg-white text-violet-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
              mode === "signup"
                ? "bg-white text-violet-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Sign Up
          </button>
        </div>

        {error && (
          <div className="mb-6 flex items-center gap-2 rounded-lg bg-rose-50 p-3 text-sm font-medium text-rose-600">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {error}
          </div>
        )}

        {mode === "login" ? (
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <Label className="text-sm font-semibold text-slate-700">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-[22px] h-4 w-4 text-slate-400" />
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={`${fieldClass} pl-11`}
                />
              </div>
            </div>
            <div>
              <Label className="text-sm font-semibold text-slate-700">Password</Label>
              <div className="relative">
                <Lock className="absolute left-4 top-[22px] h-4 w-4 text-slate-400" />
                <Input
                  type={showPw ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className={`${fieldClass} pl-11 pr-12`}
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-4 top-[22px] text-slate-400 hover:text-slate-600"
                >
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-600" />
                Remember me
              </label>
              <a href="#" className="text-sm font-medium text-violet-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="h-12 w-full rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/20 hover:from-violet-700 hover:to-indigo-700"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label className="text-sm font-semibold text-slate-700">Full Name</Label>
                <Input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className={fieldClass}
                />
              </div>
              <div>
                <Label className="text-sm font-semibold text-slate-700">Phone</Label>
                <Input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="07xxx xxxxxx"
                  className={fieldClass}
                />
              </div>
            </div>
            <div>
              <Label className="text-sm font-semibold text-slate-700">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-[22px] h-4 w-4 text-slate-400" />
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={`${fieldClass} pl-11`}
                />
              </div>
            </div>
            <div>
              <Label className="text-sm font-semibold text-slate-700">Password</Label>
              <div className="relative">
                <Lock className="absolute left-4 top-[22px] h-4 w-4 text-slate-400" />
                <Input
                  type={showSignupPw ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className={`${fieldClass} pl-11 pr-12`}
                />
                <button
                  type="button"
                  onClick={() => setShowSignupPw(!showSignupPw)}
                  className="absolute right-4 top-[22px] text-slate-400 hover:text-slate-600"
                >
                  {showSignupPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="h-12 w-full rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/20 hover:from-violet-700 hover:to-indigo-700"
            >
              {isLoading ? "Creating account..." : "Create Account"}
            </Button>
          </form>
        )}
      </div>
      <div className="hidden lg:block lg:w-1/2 relative bg-slate-900">
        <img
          src={workshopImage}
          alt="Workshop"
          className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/80 to-indigo-900/90" />
        <div className="absolute inset-0 flex flex-col justify-center p-12 text-white">
          <ShieldCheck className="h-12 w-12 text-violet-300 mb-6" />
          <h3 className="text-3xl font-bold mb-4">Secure & Transparent</h3>
          <p className="text-violet-100 text-lg mb-8 leading-relaxed">
            Access live updates on your repairs, view your history, and manage your warranties easily.
          </p>
          <ul className="space-y-4">
            {["Real-time status tracking", "Digital receipts & warranties", "Priority support"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/30">
                  <CheckCircle2 className="h-4 w-4 text-violet-200" />
                </div>
                <span className="font-medium text-violet-50">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function SignedInDashboard({ onSignOut, user }: { onSignOut: () => void, user: any }) {
  const [trackingIdInput, setTrackingIdInput] = useState("");
  const [repairData, setRepairData] = useState<any>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchTracking = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!trackingIdInput) return;
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch(`http://localhost:8000/api/repairs/track/${trackingIdInput}`);
      const data = await res.json();
      if (res.ok && data.success) {
        setRepairData(data.data);
      } else {
        setError(data.message || "Invalid tracking ID");
      }
    } catch (err) {
      setError("Failed to connect to server.");
    } finally {
      setIsLoading(false);
    }
  };

  const timeline = [
    { step: "Received", text: "Device checked in.", active: true },
    { step: "Diagnosed", text: "Fault confirmed.", active: false },
    { step: "Repairing", text: "Work in progress.", active: false },
    { step: "Testing", text: "Final quality checks.", active: false },
    { step: "Collection", text: "Ready for pickup.", active: false },
  ];

  const currentTimeline = timeline.map((t) => {
    const backendStatusIdx = [
      "received",
      "diagnosed",
      "repairing",
      "testing",
      "collection",
    ].indexOf(repairData?.status || "received");
    const timelineIdx = timeline.findIndex((x) => x.step === t.step);
    return { ...t, active: timelineIdx <= backendStatusIdx };
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 text-2xl font-bold">
            {user?.name?.charAt(0) || "C"}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Hello, {user?.name || "Customer"}</h1>
            <p className="text-slate-500">Manage your devices and track repairs.</p>
          </div>
        </div>
        <Button onClick={onSignOut} variant="outline" className="border-slate-200 text-slate-600 hover:bg-slate-50 gap-2">
          <LogOut className="h-4 w-4" /> Sign Out
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1 space-y-6">
          <Card className="p-6 rounded-2xl border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-violet-600">
              <Search className="h-5 w-5" />
              <h2 className="text-lg font-bold text-slate-900">Track Repair</h2>
            </div>
            <form onSubmit={fetchTracking} className="space-y-4">
              <Input
                placeholder="Enter Tracking ID (e.g. REP-...)"
                value={trackingIdInput}
                onChange={(e) => setTrackingIdInput(e.target.value)}
                className="h-12 border-slate-200 bg-slate-50"
              />
              <Button type="submit" disabled={isLoading} className="w-full h-12 bg-violet-600 hover:bg-violet-700 text-white font-semibold">
                {isLoading ? "Searching..." : "Track Now"}
              </Button>
              {error && <p className="text-sm text-rose-600 font-medium">{error}</p>}
            </form>
          </Card>

          <Card className="p-6 rounded-2xl border-slate-200 shadow-sm bg-gradient-to-br from-violet-500 to-indigo-600 text-white">
            <Package className="h-8 w-8 mb-4 text-violet-200" />
            <h3 className="text-xl font-bold mb-2">Repair History</h3>
            <p className="text-violet-100 text-sm mb-4">View your past repairs, receipts, and warranty information.</p>
            <Button variant="secondary" className="w-full bg-white text-violet-700 hover:bg-slate-50">
              View History
            </Button>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="h-full rounded-2xl border-slate-200 shadow-sm overflow-hidden">
            <div className="border-b border-slate-100 bg-slate-50/50 p-6">
              <h2 className="text-xl font-bold text-slate-900">Current Status</h2>
              <p className="text-slate-500 text-sm mt-1">
                {repairData ? `Tracking ID: ${repairData.tracking_id} (${repairData.device_model})` : "Enter a tracking ID to see live updates."}
              </p>
            </div>
            <div className="p-6">
              {repairData ? (
                <div className="relative border-l-2 border-slate-100 ml-4 space-y-8 pb-4">
                  {currentTimeline.map((item, idx) => (
                    <div key={item.step} className="relative pl-8">
                      <div className={`absolute -left-[11px] top-1 h-5 w-5 rounded-full border-4 border-white ${item.active ? "bg-violet-500" : "bg-slate-200"}`} />
                      <h4 className={`font-bold ${item.active ? "text-slate-900" : "text-slate-400"}`}>{item.step}</h4>
                      <p className={`text-sm mt-1 ${item.active ? "text-slate-600" : "text-slate-400"}`}>
                        {item.active && item.step.toLowerCase() === repairData.status.toLowerCase() && repairData.status_notes ? repairData.status_notes : item.text}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
                    <Activity className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900">No active repair selected</h3>
                  <p className="text-slate-500 max-w-sm mt-2">Use the tracking form to check the status of your device.</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Simple icon for placeholder
function Activity(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
