import { Link } from "@tanstack/react-router";
import { Wrench } from "lucide-react";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <div className="relative">
        <div className="w-10 h-10 rounded-xl bg-gradient-brand grid place-items-center shadow-glow group-hover:scale-105 transition-transform">
          <Wrench className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-display font-bold text-lg ${light ? "text-white" : "text-foreground"}`}>
          Fixora
        </span>
        <span className={`text-[10px] uppercase tracking-widest ${light ? "text-white/70" : "text-muted-foreground"}`}>
          Smart Repair
        </span>
      </div>
    </Link>
  );
}
