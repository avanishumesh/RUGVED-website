"use client";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import {
  IconShieldCheck,
  IconSettings,
  IconCircuitCapacitor,
  IconSearch,
  IconRobot,
  IconCpu,
  IconMinus,
} from "@tabler/icons-react";

const SUBSYSTEMS = [
  { icon: IconShieldCheck, code: "S-01 // THE BOARD", title: "The Board", desc: "Strategic oversight, direction & decision leadership. The command layer." },
  { icon: IconSettings, code: "S-02 // MGMT", title: "Management", desc: "Ops, resource allocation, timeline control & inter-subsystem coordination." },
  { icon: IconCircuitCapacitor, code: "S-03 // ELEX", title: "Electronics", desc: "Sensors, microcontrollers, power & embedded hardware backbone." },
  { icon: IconSearch, code: "S-04 // R&D", title: "Research", desc: "Tech scouting, documentation & problem-space analysis." },
  { icon: IconRobot, code: "S-05 // AI/RBT", title: "AI & Robotics", desc: "Autonomy, perception, learning & human-like decisioning." },
  { icon: IconCpu, code: "S-06 // MECH", title: "Mechanical", desc: "Chassis, drivetrain & structural design for durability in theatre." },
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

export default function SubsystemsPage() {
  return (
    <main className="mx-auto max-w-[1280px] px-4 pt-6 md:px-6 md:pt-8">
      <SectionLabel k="05" label="SUBSYSTEMS" />
      <div className="relative mt-4 overflow-hidden border border-[#c2b8a3]/10 bg-[#0f120f]/60 backdrop-blur">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <BackgroundRippleEffect rows={8} cols={27} cellSize={48} />
        </div>
        <div className="relative p-6 md:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h1 className="font-mono text-2xl font-black tracking-tight text-[#e8e6dc]">SIX DIVISIONS // ONE PLATFORM</h1>
            <span className="font-mono text-[10px] tracking-[0.22em] text-[#8b8f6b]">GRID ACTIVE — HOVER TO INSPECT</span>
          </div>
          <p className="mt-2 max-w-[70ch] font-mono text-xs leading-relaxed text-[#8b8f6b]">Tactical grid background via <span className="text-[#c2b8a3]">BackgroundRippleEffect</span> — click to ripple. Each cell is a subsystem module. Details withheld per spec — aesthetic shell only.</p>

          <div className="mt-6 grid gap-px bg-[#c2b8a3]/10 md:grid-cols-2 lg:grid-cols-3">
            {SUBSYSTEMS.map((s) => (
              <div key={s.code} className="group relative bg-[#111410] p-5 hover:bg-[#141812] transition-colors">
                <div className="flex items-center justify-between">
                  <s.icon className="h-5 w-5 text-[#c2b8a3]/80" />
                  <span className="font-mono text-[9px] tracking-[0.18em] text-[#8b8f6b]">{s.code}</span>
                </div>
                <h3 className="mt-3 font-mono text-sm font-bold tracking-wide text-[#e8e6dc]">{s.title}</h3>
                <p className="mt-1.5 font-mono text-xs leading-relaxed text-[#8b8f6b]">{s.desc}</p>
                <div className="mt-3 h-px w-8 bg-[#c2b8a3]/20 group-hover:w-12 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
