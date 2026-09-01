"use client";
import { IconUsersGroup, IconMinus } from "@tabler/icons-react";

function SectionLabel({ k, label }: { k: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.32em] text-[#8b8f6b]">
      <span className="inline-flex items-center gap-2 border border-[#8b8f6b]/20 bg-[#8b8f6b]/10 px-2 py-1 text-[#c2b8a3]"><IconMinus className="h-3 w-3" /> {k}</span>
      <span className="h-px w-8 bg-[#8b8f6b]/20 hidden sm:block" />
      <span>{label}</span>
    </div>
  );
}

export default function TeamPage() {
  return (
    <main className="mx-auto max-w-[1280px] px-4 pt-6 md:px-6 md:pt-8">
      <SectionLabel k="06" label="TEAM" />
      <div className="mt-4 border border-[#c2b8a3]/10 bg-[#111410]/70 backdrop-blur p-6 md:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h1 className="font-mono text-2xl font-black tracking-tight text-[#e8e6dc]">PERSONNEL // CLASSIFIED</h1>
          <span className="border border-amber-500/20 bg-amber-500/10 px-2 py-1 font-mono text-[10px] tracking-[0.18em] text-amber-300">REDACTED PER POLICY — THEME ONLY</span>
        </div>
        <p className="mt-2 max-w-[70ch] font-mono text-xs leading-relaxed text-[#8b8f6b]">Per your direction: no personnel details rendered. This is an aesthetic holding pattern — roster, roles and imagery intentionally withheld. The shell below preserves the military layout, ready to hydrate with real data when cleared.</p>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border border-[#c2b8a3]/10 bg-[#080a07] p-3">
              <div className="aspect-[4/3] grid place-items-center border border-dashed border-[#c2b8a3]/15 bg-[#0f120f] font-mono text-[10px] tracking-[0.18em] text-[#8b8f6b]">
                <IconUsersGroup className="h-6 w-6 opacity-40" />
              </div>
              <div className="mt-2 h-2 w-3/4 bg-[#c2b8a3]/10" />
              <div className="mt-1.5 h-1.5 w-1/2 bg-[#8b8f6b]/15" />
              <div className="mt-2 font-mono text-[9px] tracking-[0.18em] text-[#8b8f6b]">UNIT {String(i + 1).padStart(2, "0")} — [REDACTED]</div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2 font-mono text-[10px] tracking-[0.16em] text-[#8b8f6b]">
          <span className="border border-[#c2b8a3]/10 bg-black/30 px-2 py-1">BOARD</span>
          <span className="border border-[#c2b8a3]/10 bg-black/30 px-2 py-1">ELECTRONICS</span>
          <span className="border border-[#c2b8a3]/10 bg-black/30 px-2 py-1">RESEARCH</span>
          <span className="border border-[#c2b8a3]/10 bg-black/30 px-2 py-1">AI &amp; ROBOTICS</span>
          <span className="border border-[#c2b8a3]/10 bg-black/30 px-2 py-1">MECHANICAL</span>
          <span className="border border-[#c2b8a3]/10 bg-black/30 px-2 py-1">MANAGEMENT</span>
        </div>
      </div>
    </main>
  );
}
