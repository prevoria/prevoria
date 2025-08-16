import { CheckCircle } from "lucide-react";
export function Tile({ icon, title, desc }){
  return (<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <div className="flex items-center gap-2 text-emerald-300">{icon}<span className="text-slate-200 font-medium">{title}</span></div>
    <p className="mt-2 text-sm text-slate-300">{desc}</p></div>);
}
export function FeatureCard({ icon, title, bullets }){
  return (<div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
    <div className="flex items-center gap-2 text-emerald-300">{icon}<span className="text-slate-100 font-medium">{title}</span></div>
    <ul className="mt-3 space-y-1 text-slate-300 text-sm">
      {bullets.map((b)=>(<li key={b} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400"/> {b}</li>))}
    </ul></div>);
}
