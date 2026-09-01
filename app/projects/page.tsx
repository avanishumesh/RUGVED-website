"use client";
import { IconTank, IconChevronRight, IconMinus } from "@tabler/icons-react";

const PROJECTS_FLAGSHIP = [
  { code: "P-01", title: "WALRUS 2.0", tag: "UGV • Autonomous • Modular", desc: "Autonomous, modular military UGV with AI terrain mapping, landmine detection and swappable payloads." },
  { code: "P-02", title: "DRONE — WALRUS AIR WING", tag: "UAV • 2KM Range • Live Feed", desc: "Agile aerial scout tethered to WALRUS for land-to-air recon and live video feed." },
  { code: "P-03", title: "TRAFFIC MUNDA", tag: "CV • CCTV • AI", desc: "AI traffic control using real-time CCTV — flow optimization & violation detection." },
];
const PROJECTS_PAST = [
  { code: "P-04", title: "GESSURE", tag: "Face Auth • Gesture GUI" },
  { code: "P-05", title: "RASPICO DEV", tag: "RP2040 • LoRa • Dev Board" },
  { code: "P-06", title: "BATTERY PACK", tag: "16-Cell • 12V • BMS" },
];

function SectionLabel({ k, label }: { k: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.32em] text-[#8b8f6b]">
      <span className="inline-flex items-center gap-2 border border-[#8b8f6b]/20 bg-[#8b8f6b]/10 px-2 py-1 text-[#c2b8a3]"><IconMinus className="h-3 w-3" /> {k}</span>
      <span className="h-px w-8 bg-[#8b8f6b]/20 hidden sm:block" />
      <span>{label}</span>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-[1280px] px-4 pt-6 md:px-6 md:pt-8">
      <SectionLabel k="04" label="PROJECTS" />
      <div className="mt-4 flex flex-wrap items-baseline justify-between gap-3">
        <h1 className="font-mono text-2xl font-black tracking-tight text-[#e8e6dc]">ARSENAL // DEPLOYED &amp; IN DEV</h1>
        <span className="font-mono text-[10px] tracking-[0.22em] text-[#8b8f6b]">AESTHETIC SHELL — DETAILS WITHHELD</span>
      </div>
      <p className="mt-2 max-w-[70ch] font-mono text-xs leading-relaxed text-[#8b8f6b]">Theme &amp; motion only — wire real specs when cleared. Cards use tactical hover + sand/olive palette.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {PROJECTS_FLAGSHIP.map((p) => (
          <div key={p.code} className="group relative overflow-hidden border border-[#c2b8a3]/10 bg-[#0f120f]/70 p-5 backdrop-blur hover:border-[#c2b8a3]/20 transition-colors">
            <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.18em] text-[#8b8f6b]">
              <span>{p.code}</span><span className="h-1.5 w-1.5 rounded-full bg-emerald-500/70 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            </div>
            <div className="mt-3 inline-flex items-center gap-2 border border-[#c2b8a3]/10 bg-black/30 px-2 py-1 font-mono text-[9px] tracking-[0.16em] text-[#8b8f6b]"><IconTank className="h-3 w-3" /> {p.tag}</div>
            <h3 className="mt-3 font-mono text-sm font-bold tracking-wide text-[#e8e6dc]">{p.title}</h3>
            <p className="mt-2 font-mono text-xs leading-relaxed text-[#c2b8a3]/80">{p.desc}</p>
            <div className="mt-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-[#8b8f6b]">VIEW SPEC <IconChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" /></div>
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "radial-gradient(600px circle at 0% 0%, rgba(194,184,163,0.06), transparent 40%)" }} />
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {PROJECTS_PAST.map((p) => (
          <div key={p.code} className="border border-dashed border-[#c2b8a3]/15 bg-[#080a07]/60 p-4 backdrop-blur">
            <div className="font-mono text-[10px] tracking-[0.18em] text-[#8b8f6b]">{p.code} • PAST PROJECT</div>
            <div className="mt-1 font-mono text-xs font-bold tracking-wide text-[#c2b8a3]">{p.title}</div>
            <div className="font-mono text-[10px] tracking-wide text-[#8b8f6b]">{p.tag}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-right font-mono text-[10px] tracking-[0.18em] text-[#8b8f6b]">— Full project archive accessible via internal dossier</div>
    </main>
  );
}
