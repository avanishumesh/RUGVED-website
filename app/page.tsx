"use client";
import React from "react";
import SplitFlapText from "@/components/ui/SplitFlapText";
import WarpText from "@/components/ui/WarpText";
import {
  IconTank,
  IconCpu,
  IconTarget,
  IconRadar,
  IconTrophy,
  IconFileText,
  IconMapPin,
  IconChevronRight,
  IconMinus,
  IconCrosshair,
} from "@tabler/icons-react";
import Link from "next/link";

// ─────────────────────────────────────────────
// Non-personnel data pulled from https://rugved.co.in
// ─────────────────────────────────────────────
const ABOUT = {
  fullForm: "Remote Unmanned Ground Vehicular Electronic Defence Systems",
  intro:
    "R.U.G.V.E.D Systems is MIT Manipal's defence robotics collective — building autonomous ground vehicles that patrol, scout and carry where humans shouldn't have to.",
  mission:
    "A student-led defence-tech initiative bridging innovation and application in military-grade automation, AI, robotics and electronics. Student-run since 2016, fusing mechanical, electronics and intelligence into field-ready platforms.",
  flagship: "WALRUS",
};

const ACHIEVEMENTS = [
  { label: "Smart India Hackathon 2024", value: "Top 5", year: "2024" },
  { label: "WALRUS 2.0 Prototype", value: "Deployed", year: "2024" },
  { label: "National Defence Expo", value: "Featured", year: "2025" },
  { label: "AI Terrain Navigation", value: "Patent Filed", year: "2024" },
  { label: "e-Yantra — IIT Bombay", value: "AIR 10", year: "2023-24" },
  { label: "Guiding Gaze — OpenCV AI", value: "Intl Rank 7", year: "2023" },
  { label: "AI for Change Hackathon", value: "Winners", year: "2024" },
  { label: "Line Following Robot — BITS Goa", value: "Top 7", year: "2024" },
  { label: "Pragyaan Fusion Hackathon", value: "1st Place", year: "2021" },
  { label: "Covideate — IIT Bombay Techfest", value: "1st Place", year: "2020" },
  { label: "Def Hacks Global 2.0", value: "1st Place", year: "2020" },
];

const RESEARCH_PAPERS = [
  "Autonomous Terrain Navigation Using AI — IEEE, 2024",
  "Optimized Pathfinding in UGV Systems — ICRA, 2023",
  "Reinforcement Learning for Obstacle Avoidance — Elsevier Robotics Journal, 2023",
];

function SectionLabel({ k, label }: { k: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.32em] text-[#8b8f6b]">
      <span className="inline-flex items-center gap-2 border border-[#8b8f6b]/20 bg-[#8b8f6b]/10 px-2 py-1 text-[#c2b8a3]">
        <IconMinus className="h-3 w-3" /> {k}
      </span>
      <span className="h-px w-8 bg-[#8b8f6b]/20 hidden sm:block" />
      <span>{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-[1280px] px-4 pt-6 md:px-6 md:pt-8">
      {/* HUD top */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border border-[#c2b8a3]/10 bg-[#111410]/60 px-3 py-2 font-mono text-[9px] tracking-[0.2em] text-[#8b8f6b] backdrop-blur">
        <span className="inline-flex items-center gap-2"><IconCrosshair className="h-3 w-3 text-[#c2b8a3]" /> MISSION PROFILE : AUTONOMOUS GROUND SYSTEMS</span>
        <span className="hidden sm:inline-flex items-center gap-2"><span className="h-px w-6 bg-[#8b8f6b]/30" /> CLASSIFICATION // UNCLASSIFIED — STUDENT PROJECT</span>
        <span className="inline-flex items-center gap-1.5 text-[#c2b8a3]"><IconRadar className="h-3 w-3" /> SCAN ACTIVE</span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.75fr]">
        {/* Left — Title block */}
        <div className="relative overflow-hidden border border-[#c2b8a3]/10 bg-[#0f120f]/70 backdrop-blur p-6 md:p-8">
          <span className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l border-t border-[#c2b8a3]/30" />
          <span className="pointer-events-none absolute right-0 top-0 h-6 w-6 border-r border-t border-[#c2b8a3]/30" />
          <span className="pointer-events-none absolute bottom-0 left-0 h-6 w-6 border-b border-l border-[#c2b8a3]/30" />
          <span className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b border-r border-[#c2b8a3]/30" />

          <div className="font-mono text-[10px] tracking-[0.3em] text-[#8b8f6b]">REMOTE UNMANNED GROUND VEHICULAR ELECTRONIC DEFENCE SYSTEMS</div>

          <div className="mt-2 w-full max-w-[560px]">
            <WarpText
              text="RUGVED"
              color="#e8e6dc"
              warpStrength={0.06}
              warpScale={1.5}
              speed={0.45}
              pointerInfluence={0.38}
              pointerStrength={0.32}
              refraction={0.012}
              ripple
              fontSize={96}
              fontWeight={900}
              letterSpacing={-0.06}
              lineHeight={0.88}
            />
          </div>

          <div className="mt-1 flex flex-wrap items-center gap-2 font-mono text-[10px] tracking-[0.22em] text-[#8b8f6b]">
            <span className="bg-[#c2b8a3] px-2 py-1 font-bold tracking-[0.2em] text-[#111410]">MIT MANIPAL</span>
            <span className="border border-[#c2b8a3]/20 px-2 py-1">EST. 2016</span>
            <span className="hidden sm:inline">— STUDENT DEFENCE ROBOTICS</span>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <div className="rounded border border-[#c2b8a3]/10 bg-black/30 px-2 py-1">
              <SplitFlapText
                words={["DEFENCE ROBOTICS", "AUTONOMOUS UGVs", "FIELD READY SYSTEMS"]}
                flipDuration={0.09}
                stagger={0.04}
                cycleDelay={2200}
                charset="alphanumeric"
                flipsPerChar={6}
                tileColor="rgba(0,0,0,0)"
                textColor="#c2b8a3"
                gap={2}
                fontSize={13}
                loop
                padTo={18}
              />
            </div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#8b8f6b]">PATROL • SCOUT • CARRY</span>
          </div>

          <p className="mt-5 max-w-[58ch] text-sm leading-relaxed text-[#c2b8a3]/90">
            {ABOUT.intro} <span className="text-[#e8e6dc]">{ABOUT.flagship}</span> and FPGA gunshot detection to terrain-nav AI — engineered where humans shouldn&apos;t have to go.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link href="/projects" className="inline-flex items-center gap-2 bg-[#c2b8a3] px-5 py-2.5 font-mono text-xs font-bold tracking-[0.18em] text-[#111410] hover:bg-[#ddd5c0] transition-colors">
              EXPLORE ARSENAL <IconChevronRight className="h-4 w-4" />
            </Link>
            <Link href="/subsystems" className="inline-flex items-center gap-2 border border-[#c2b8a3]/20 bg-[#111410] px-5 py-2.5 font-mono text-xs tracking-[0.18em] text-[#c2b8a3] hover:bg-[#1a1d14]">
              <IconCpu className="h-4 w-4" /> SUBSYSTEMS
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2 border-t border-[#c2b8a3]/10 pt-4 font-mono text-[10px]">
            <div>
              <div className="tracking-[0.2em] text-[#8b8f6b]">OPERATIONAL SINCE</div>
              <div className="text-sm font-bold text-[#e8e6dc]">2016</div>
            </div>
            <div>
              <div className="tracking-[0.2em] text-[#8b8f6b]">PLATFORM</div>
              <div className="text-sm font-bold text-[#e8e6dc]">WALRUS 2.0</div>
            </div>
            <div>
              <div className="tracking-[0.2em] text-[#8b8f6b]">STATUS</div>
              <div className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-400"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> FIELD TESTED</div>
            </div>
          </div>
        </div>

        {/* Right — Tactical readout */}
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden border border-[#c2b8a3]/10 bg-[#111410]/70 p-4 backdrop-blur">
            <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-[#8b8f6b]">
              <span className="inline-flex items-center gap-1.5"><IconTarget className="h-3.5 w-3.5 text-[#c2b8a3]" /> TACTICAL READOUT</span>
              <span className="text-[#c2b8a3]">● REC</span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {[
                { k: "ENDURANCE", v: "6H+", sub: "field ops" },
                { k: "PAYLOAD", v: "MODULAR", sub: "swappable" },
                { k: "NAV", v: "AI TERRAIN", sub: "patent filed" },
                { k: "RANGE", v: "2KM", sub: "aerial link" },
              ].map((s) => (
                <div key={s.k} className="border border-[#c2b8a3]/10 bg-black/30 p-3">
                  <div className="font-mono text-[9px] tracking-[0.18em] text-[#8b8f6b]">{s.k}</div>
                  <div className="font-mono text-sm font-bold tracking-wide text-[#e8e6dc]">{s.v}</div>
                  <div className="font-mono text-[9px] text-[#8b8f6b]">{s.sub}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 font-mono text-[9px] tracking-[0.18em] text-[#8b8f6b]">
              <span className="h-px flex-1 bg-[#c2b8a3]/10" /> MANIPAL INSTITUTE OF TECHNOLOGY
            </div>
          </div>

          <div className="relative overflow-hidden border border-[#c2b8a3]/10 bg-[#0f120f]/70 p-4 backdrop-blur">
            <div className="font-mono text-[10px] tracking-[0.2em] text-[#8b8f6b]">FIELD HIGHLIGHT</div>
            <div className="mt-2 aspect-[16/9] overflow-hidden border border-[#c2b8a3]/10 bg-[#080a07] grid place-items-center">
              <div className="text-center p-6">
                <IconTank className="mx-auto h-10 w-10 text-[#8b8f6b]/60" />
                <div className="mt-2 font-mono text-xs tracking-[0.2em] text-[#c2b8a3]">WALRUS 2.0 — UGV</div>
                <div className="font-mono text-[10px] text-[#8b8f6b]">Autonomous • Terrain Mapping • Landmine Detection</div>
              </div>
            </div>
            <div className="mt-3 flex gap-2 font-mono text-[10px]">
              <span className="border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-emerald-300">● LIVE PROTOTYPE</span>
              <span className="border border-[#c2b8a3]/15 px-2 py-1 text-[#8b8f6b]">NDE 2025 FEATURED</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="mx-auto mt-10 max-w-[1280px]">
        <SectionLabel k="01" label="ABOUT US" />
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border border-[#c2b8a3]/10 bg-[#111410]/70 p-6 md:p-8 backdrop-blur">
            <h2 className="font-mono text-xl font-bold tracking-tight text-[#e8e6dc] md:text-2xl">Built where it matters.</h2>
            <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-[#c2b8a3]/90">{ABOUT.mission}</p>
            <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-[#c2b8a3]/70">
              From flagship UGV <span className="font-bold text-[#e8e6dc]">WALRUS</span> to FPGA-based gunshot detection, we integrate AI, electronics &amp; mechanical engineering into field-ready machines. National podiums. Peer-reviewed research. Patent filed.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 font-mono">
              <div className="border border-[#c2b8a3]/10 bg-black/20 p-3 text-center">
                <div className="text-lg font-bold text-[#e8e6dc]">09+</div>
                <div className="text-[9px] tracking-[0.18em] text-[#8b8f6b]">YEARS OPS</div>
              </div>
              <div className="border border-[#c2b8a3]/10 bg-black/20 p-3 text-center">
                <div className="text-lg font-bold text-[#e8e6dc]">06</div>
                <div className="text-[9px] tracking-[0.18em] text-[#8b8f6b]">SUBSYSTEMS</div>
              </div>
              <div className="border border-[#c2b8a3]/10 bg-black/20 p-3 text-center">
                <div className="text-lg font-bold text-[#e8e6dc]">06</div>
                <div className="text-[9px] tracking-[0.18em] text-[#8b8f6b]">PLATFORMS</div>
              </div>
            </div>
          </div>
          <div className="border border-[#c2b8a3]/10 bg-[#0f120f]/70 p-6 backdrop-blur">
            <div className="font-mono text-[10px] tracking-[0.2em] text-[#8b8f6b]">FULL DESIGNATION</div>
            <div className="mt-1 font-mono text-sm font-bold leading-tight tracking-wide text-[#c2b8a3]">{ABOUT.fullForm}</div>
            <div className="mt-4 h-px bg-[#c2b8a3]/10" />
            <div className="mt-4 space-y-3 font-mono text-xs leading-relaxed">
              <div className="flex gap-3"><span className="text-[#8b8f6b]">▸</span><span className="text-[#c2b8a3]/90">MIT Manipal — student-run, faculty-advised. No personnel data displayed per policy.</span></div>
              <div className="flex gap-3"><span className="text-[#8b8f6b]">▸</span><span className="text-[#c2b8a3]/90">Focus: UGV autonomy, terrain navigation, embedded AI &amp; defence robotics.</span></div>
              <div className="flex gap-3"><span className="text-[#8b8f6b]">▸</span><span className="text-[#c2b8a3]/90">Output: Deployable prototypes, research papers, open innovation.</span></div>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 border border-[#c2b8a3]/15 bg-black/30 px-3 py-2 font-mono text-[10px] tracking-[0.18em] text-[#8b8f6b]">
              <IconMapPin className="h-3.5 w-3.5 text-[#c2b8a3]" /> MANIPAL, KARNATAKA — 13.347°N 74.792°E
            </div>
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="mx-auto mt-10 max-w-[1280px]">
        <SectionLabel k="02" label="ACHIEVEMENTS & RECOGNITION" />
        <div className="mt-4 border border-[#c2b8a3]/10 bg-[#111410]/70 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#c2b8a3]/10 px-4 py-3 md:px-6">
            <h3 className="font-mono text-sm font-bold tracking-[0.14em] text-[#e8e6dc]">DECORATIONS &amp; MILESTONES</h3>
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#8b8f6b]">UNCLASSIFIED ARCHIVE</span>
          </div>
          <div className="grid gap-px bg-[#c2b8a3]/10 md:grid-cols-3 lg:grid-cols-4">
            {ACHIEVEMENTS.map((a) => (
              <div key={a.label} className="bg-[#0f120f] p-4">
                <div className="flex items-start justify-between gap-2">
                  <IconTrophy className="h-4 w-4 shrink-0 text-[#c2b8a3]/70" />
                  <span className="rounded border border-[#8b8f6b]/20 bg-[#8b8f6b]/10 px-1.5 py-0.5 font-mono text-[9px] tracking-widest text-[#8b8f6b]">{a.year}</span>
                </div>
                <div className="mt-3 font-mono text-[11px] font-bold tracking-wide text-[#e8e6dc]">{a.label}</div>
                <div className="font-mono text-xs tracking-wide text-[#c2b8a3]">{a.value}</div>
              </div>
            ))}
          </div>
          <div className="grid gap-4 border-t border-[#c2b8a3]/10 bg-[#0a0f0a]/50 p-4 md:grid-cols-[1.1fr_0.9fr] md:p-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-[#8b8f6b]"><IconFileText className="h-3.5 w-3.5 text-[#c2b8a3]" /> RESEARCH PAPERS</div>
              <ul className="mt-3 space-y-2">
                {RESEARCH_PAPERS.map((r) => (
                  <li key={r} className="flex gap-2 font-mono text-xs leading-relaxed text-[#c2b8a3]/90"><span className="text-[#8b8f6b]">—</span>{r}</li>
                ))}
              </ul>
            </div>
            <div className="border border-[#c2b8a3]/10 bg-[#111410] p-4">
              <div className="font-mono text-[10px] tracking-[0.2em] text-[#8b8f6b]">COMMENDATION</div>
              <div className="mt-2 font-mono text-sm leading-relaxed text-[#e8e6dc]">
                &quot;Student engineering for national relevance — rapid prototyping to peer review.&quot;
              </div>
              <div className="mt-2 font-mono text-[10px] tracking-[0.18em] text-[#8b8f6b]">— EXTERNAL REVIEW • 2024-25</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPONSORS ── */}
      <section className="mx-auto mt-10 max-w-[1280px]">
        <SectionLabel k="03" label="SPONSORS & SUPPORT" />
        <div className="mt-4 border border-[#c2b8a3]/10 bg-[#111410]/70 p-6 backdrop-blur md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="font-mono text-sm font-bold tracking-[0.16em] text-[#e8e6dc]">SUPPORTING ARSENAL</h3>
              <p className="mt-1 max-w-[60ch] font-mono text-xs leading-relaxed text-[#8b8f6b]">Our sponsors enable field testing, fabrication and compute. Placeholder grid — wire your logos here. Monochrome, tactical, minimal.</p>
            </div>
            <span className="border border-[#c2b8a3]/15 bg-black/30 px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] text-[#8b8f6b]">TIER I — STRATEGIC</span>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="grid h-20 place-items-center border border-dashed border-[#c2b8a3]/15 bg-[#080a07] font-mono text-[10px] tracking-[0.18em] text-[#8b8f6b]">
                LOGO — SLOT {String(i + 1).padStart(2, "0")}
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2 font-mono text-[10px] tracking-[0.18em] text-[#8b8f6b]">
            <span className="border border-[#c2b8a3]/10 bg-black/20 px-2 py-1">TIER II — TECHNICAL</span>
            <span className="border border-[#c2b8a3]/10 bg-black/20 px-2 py-1">TIER III — COMMUNITY</span>
            <span className="ml-auto hidden sm:inline">Interested? → <Link href="/contact" className="text-[#c2b8a3] underline decoration-[#c2b8a3]/30">Contact</Link></span>
          </div>
        </div>
      </section>
    </main>
  );
}
