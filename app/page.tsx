"use client";

import React, { useRef } from "react";
import SplitFlapText from "@/components/ui/SplitFlapText";
import WarpText from "@/components/ui/WarpText";
import TacticalCard from "@/components/ui/TacticalCard";
import TacticalSchematic from "@/components/ui/TacticalSchematic";
import InteractiveTerminal from "@/components/ui/InteractiveTerminal";
import { motion } from "motion/react";
import {
  IconTank,
  IconCpu,
  IconTarget,
  IconRadar,
  IconTrophy,
  IconFileText,
  IconChevronRight,
  IconMinus,
  IconCrosshair,
  IconShield,
  IconBolt,
  IconEye,
  IconCompass,
  IconTerminal,
  IconArrowUpRight,
} from "@tabler/icons-react";
import Link from "next/link";
import { useTheme } from "@/components/theme-provider";

const ABOUT = {
  fullForm: "Remote Unmanned Ground Vehicular Electronic Defence Systems",
  intro:
    "R.U.G.V.E.D Systems is MIT Manipal's premier defence robotics collective — engineering autonomous, ruggedized unmanned ground platforms that scout, patrol, and protect in high-risk theatres where human personnel shouldn't have to go.",
  mission:
    "Founded in 2016 at the Manipal Institute of Technology, we synthesize mechanical engineering, embedded electronics, high-speed FPGA signal processing, and AI edge compute into battle-ready robotic platforms.",
  flagship: "WALRUS 2.0",
};

const ACHIEVEMENTS = [
  {
    label: "Smart India Hackathon",
    value: "Top 5 Finalist",
    year: "2024",
    badge: "NATIONAL",
  },
  {
    label: "WALRUS 2.0 UGV Platform",
    value: "Field Deployed",
    year: "2024",
    badge: "HARDWARE",
  },
  {
    label: "National Defence Expo",
    value: "Official Feature",
    year: "2025",
    badge: "EXPO",
  },
  {
    label: "AI Terrain Navigation System",
    value: "Patent Filed",
    year: "2024",
    badge: "IPR",
  },
  {
    label: "e-Yantra — IIT Bombay",
    value: "AIR 10",
    year: "2023-24",
    badge: "ROBOTICS",
  },
  {
    label: "Guiding Gaze — OpenCV AI",
    value: "Global Rank 7",
    year: "2023",
    badge: "VISION",
  },
  {
    label: "AI for Change Hackathon",
    value: "1st Place Winners",
    year: "2024",
    badge: "AI",
  },
  {
    label: "Line Following Robot — BITS Goa",
    value: "Top 7 Finalist",
    year: "2024",
    badge: "AUTONOMY",
  },
  {
    label: "Covideate — IIT Bombay Techfest",
    value: "1st Place",
    year: "2020",
    badge: "EMBEDDED",
  },
  {
    label: "Def Hacks Global 2.0",
    value: "1st Place Champions",
    year: "2020",
    badge: "GLOBAL",
  },
];

const RESEARCH_PAPERS = [
  {
    title: "Autonomous Terrain Navigation Using Multi-Modal Sensor Fusion & Deep AI",
    publisher: "IEEE Transactions on Field Robotics",
    year: "2024",
    tag: "AI / SLAM",
  },
  {
    title: "Optimized Real-Time Pathfinding and Recovery in Extreme UGV Systems",
    publisher:
      "IEEE International Conference on Robotics and Automation (ICRA)",
    year: "2023",
    tag: "PATHFINDING",
  },
  {
    title:
      "FPGA-Accelerated Microsecond Acoustic Triangulation for Muzzle Flash Localization",
    publisher: "Elsevier Robotics & Autonomous Systems",
    year: "2023",
    tag: "DSP / FPGA",
  },
];

function SectionLabel({ k, label }: { k: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.32em] text-[#8b8f6b]">
      <span className="inline-flex items-center gap-1.5 rounded border border-[#8b8f6b]/20 bg-white/[0.04] backdrop-blur-md px-2.5 py-1 text-[#c2b8a3]">
        <IconMinus className="h-3 w-3" /> {k}
      </span>

      <span className="h-px w-12 bg-[#8b8f6b]/20 hidden sm:block" />

      <span className="font-bold tracking-[0.24em] text-[#e8e6dc]">
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const schematicRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const scrollToSchematic = () => {
    schematicRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTerminal = () => {
    terminalRef.current?.scrollIntoView({ behavior: "smooth" });
  };

   return (
    <main className="mx-auto max-w-[1440px] px-6 pt-6 md:px-8 md:pt-8 space-y-20 md:space-y-28">
      
      {/* Outer wrapper to perfectly split the HUD bar and Title across full visible height */}
      <div className="flex h-[calc(100vh-2rem)] w-full flex-col overflow-hidden">
        
        {/* ── TOP HUD TELEMETRY BAR ── */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/[0.12] bg-white/[0.05] px-5 py-3 font-mono text-[10px] tracking-[0.2em] text-[#8b8f6b] backdrop-blur-xl shadow-lg shrink-0">
          <div className="flex items-center gap-2">
            <IconCrosshair className="h-4 w-4 text-emerald-400" />
            <span className="text-[#e8e6dc] font-bold">
              MISSION PROFILE : DEFENCE ROBOTICS
            </span>
            <span className="hidden sm:inline text-[#8b8f6b]">
              | SECTOR // AUTONOMOUS GROUND SYSTEMS
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400 font-bold">
                RADAR SWEEP ACTIVE
              </span>
            </span>
            <span className="text-[#c2b8a3]/60">•</span>
            <span>CLASSIFICATION // UNCLASSIFIED</span>
          </div>

          <div className="flex items-center gap-2 text-[#c2b8a3]">
            <IconRadar className="h-4 w-4 text-emerald-400" />
            <span>FREQ: 5.8 GHz LINK</span>
          </div>
        </div>

        {/* ── TITLED HERO CONTAINER (Occupies exactly 100% of remaining height below HUD) ── */}
        <div className="flex flex-1 items-center -translate-y-[12vh]">
          <WarpText
            text="RUGVED"
            color={isLight ? "#1a1d14" : "#f2efe6"}
            warpStrength={0.055}
            warpScale={1.35}
            speed={0.4}
            pointerInfluence={0.42}
            pointerStrength={0.35}
            refraction={0.012}
            ripple
            fontSize={168}
            fontWeight={900}
            letterSpacing={-0.07}
            lineHeight={0.82}
          />
        </div>

      </div>

      {/* ── HERO SECTION ── */}


      {/* ── HERO SECTION ── */}

      <motion.section
        ref={schematicRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
      <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:gap-8 items-stretch -translate-y-[7vh]">
        {/* Left Hero Main Card */}
        <TacticalCard
          laserSweep
          className="p-8 md:p-12 flex flex-col justify-between"
          glowColor={
            isLight
              ? "rgba(87,90,51,0.2)"
              : "rgba(194,184,163,0.2)"
          }
        >
          <div>
            {/* System Tag */}
            <div className="flex flex-wrap items-center gap-2.5 font-mono text-[11px] tracking-[0.28em] text-[#8b8f6b]">
              <span className="rounded bg-[#c2b8a3] px-2.5 py-1 font-bold text-[#111410]">
                MIT MANIPAL
              </span>

              <span className="rounded border border-white/[0.12] bg-white/[0.05] backdrop-blur-md px-2.5 py-1 text-[#e8e6dc]">
                EST. 2016
              </span>

              <span className="hidden sm:inline text-[10px] text-[#8b8f6b]">
                — STUDENT DEFENCE ROBOTICS
              </span>
            </div>

            {/* Giant Dynamic Refractive Title */}
            <div className="relative mt-5 w-full max-w-[760px] -ml-1">
              <div
                className="absolute inset-0 blur-3xl opacity-25"
                style={{
                  background: isLight
                    ? "radial-gradient(ellipse 70% 50% at 30% 50%, rgba(87,90,51,0.2), transparent 70%)"
                    : "radial-gradient(ellipse 70% 50% at 30% 50%, rgba(194,184,163,0.22), transparent 70%)",
                }}
              />

              
                
              
            </div>

            {/* Stencil Sub-headline */}
            <div className="mt-3 flex items-center gap-3 font-mono text-[10px] tracking-[0.28em] text-[#8b8f6b]">
              <div className="h-px w-10 bg-[#c2b8a3]/30 hidden sm:block" />
              <span>
                REMOTE UNMANNED GROUND VEHICULAR ELECTRONIC DEFENCE
              </span>
            </div>

            {/* Split Flap Terminal Banner */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="rounded-lg border border-white/[0.12] bg-white/[0.05] backdrop-blur-md px-3.5 py-2">
                <SplitFlapText
                  words={[
                    "DEFENCE ROBOTICS",
                    "AUTONOMOUS UGVs",
                    "FIELD DEPLOYED",
                    "PATENT FILED",
                  ]}
                  flipDuration={0.09}
                  stagger={0.04}
                  cycleDelay={2400}
                  charset="alphanumeric"
                  flipsPerChar={6}
                  tileColor="rgba(0,0,0,0)"
                  textColor={isLight ? "#575a33" : "#c2b8a3"}
                  gap={2}
                  fontSize={14}
                  loop
                  padTo={18}
                />
              </div>

              <span className="font-mono text-[11px] tracking-[0.2em] text-[#8b8f6b]">
                PATROL • SCOUT • DEFEND
              </span>
            </div>

            {/* Main Bio Paragraph */}
            <p className="mt-6 max-w-[62ch] text-[15px] md:text-[16px] leading-[1.75] text-[#c2b8a3]/90">
              {ABOUT.intro} Engineered from ground up: flagship{" "}
              <span className="font-bold text-[#f2efe6]">
                {ABOUT.flagship}
              </span>
              , FPGA-driven acoustic gunshot triangulation, and multi-modal AI
              terrain navigation.
            </p>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-[#c2b8a3] px-6 py-3.5 font-mono text-[13px] font-bold tracking-[0.18em] text-[#111410] hover:bg-[#ddd5c0] shadow-[0_4px_24px_rgba(194,184,163,0.3)] transition-all hover:scale-[1.02]"
              >
                EXPLORE ARSENAL
                <IconChevronRight className="h-4 w-4" />
              </Link>

              <button
                onClick={scrollToSchematic}
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.05] backdrop-blur-md px-5 py-3.5 font-mono text-[13px] tracking-[0.18em] text-[#c2b8a3] hover:border-emerald-500/50 hover:text-emerald-300 transition-all"
              >
                <IconCpu className="h-4 w-4" /> WALRUS BLUEPRINT
              </button>

              <button
                onClick={scrollToTerminal}
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.10] bg-white/[0.04] backdrop-blur-md px-4 py-3.5 font-mono text-[13px] tracking-[0.18em] text-[#8b8f6b] hover:text-[#e8e6dc] hover:border-[#c2b8a3]/30 transition-all"
              >
                <IconTerminal className="h-4 w-4" /> CLI CONSOLE
              </button>
            </div>
          </div>

          {/* Bottom KPI Bar */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-[#c2b8a3]/12 pt-6 font-mono">
            <div>
              <div className="text-[10px] tracking-[0.18em] text-[#8b8f6b]">
                OPERATIONAL SINCE
              </div>
              <div className="mt-1 text-[20px] font-bold tracking-tight text-[#e8e6dc]">
                2016
              </div>
            </div>

            <div>
              <div className="text-[10px] tracking-[0.18em] text-[#8b8f6b]">
                FLAGSHIP UGV
              </div>
              <div className="mt-1 text-[20px] font-bold tracking-tight text-[#e8e6dc]">
                WALRUS 2.0
              </div>
            </div>

            <div>
              <div className="text-[10px] tracking-[0.18em] text-[#8b8f6b]">
                DIVISIONS
              </div>
              <div className="mt-1 text-[20px] font-bold tracking-tight text-[#e8e6dc]">
                06 CORE
              </div>
            </div>

            <div>
              <div className="text-[10px] tracking-[0.18em] text-[#8b8f6b]">
                STATUS
              </div>

              <div className="mt-1 inline-flex items-center gap-1.5 text-[15px] font-bold text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                FIELD READY
              </div>
            </div>
          </div>
        </TacticalCard>

        {/* Right Tactical Telemetry Bento */}
        <div className="flex flex-col gap-6">
          {/* Tactical Readout Metrics */}
          <TacticalCard
            badge="LIVE TELEMETRY"
            className="p-6 md:p-7"
          >
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-[#8b8f6b]">
              <IconTarget className="h-4 w-4 text-[#c2b8a3]" />
              TACTICAL CAPABILITY READOUT
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                {
                  k: "ENDURANCE",
                  v: "6.5H+",
                  sub: "Continuous Field Ops",
                  icon: IconBolt,
                },
                {
                  k: "PAYLOAD",
                  v: "45 KG",
                  sub: "Modular Swappable Bay",
                  icon: IconShield,
                },
                {
                  k: "NAVIGATION",
                  v: "AI SLAM",
                  sub: "Terrain Classifier (Patent)",
                  icon: IconCompass,
                },
                {
                  k: "SCOUT RANGE",
                  v: "2.0 KM",
                  sub: "Tethered Aerial Link",
                  icon: IconRadar,
                },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-lg border border-white/[0.10] bg-white/[0.05] backdrop-blur-md p-4 transition-all hover:border-white/[0.20] hover:bg-white/[0.07]"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.18em] text-[#8b8f6b]">
                    <span>{s.k}</span>
                    <s.icon className="h-3.5 w-3.5 text-[#8b8f6b]/70" />
                  </div>

                  <div className="mt-1.5 font-mono text-[18px] font-bold tracking-tight text-[#e8e6dc]">
                    {s.v}
                  </div>

                  <div className="font-mono text-[10px] text-[#8b8f6b] mt-0.5">
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-[#c2b8a3]/10 pt-4 font-mono text-[10px] tracking-wider text-[#8b8f6b]">
              <span>PLATFORM ARCHITECTURE // LEVEL 4</span>
              <span className="text-emerald-400 font-bold">
                100% NOMINAL
              </span>
            </div>
          </TacticalCard>

          {/* Quick Platform Preview Card */}
          <TacticalCard
            badge="NDE 2025"
            className="p-6 md:p-7 flex-1 flex flex-col justify-between"
          >
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] text-[#8b8f6b]">
                PLATFORM SPOTLIGHT
              </div>

              <div className="mt-3 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.06] backdrop-blur-md">
                  <IconTank className="h-8 w-8 text-emerald-400" />
                </div>

                <div>
                  <h3 className="font-mono text-[18px] font-bold tracking-tight text-[#e8e6dc]">
                    WALRUS 2.0 UGV
                  </h3>

                  <p className="font-mono text-[12px] text-[#8b8f6b]">
                    All-Terrain Heavy Duty Tactical Unmanned Rover
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 font-mono text-[10px]">
                <span className="rounded border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm px-2 py-0.5 text-emerald-300">
                  ● 360° LiDAR &amp; Thermal
                </span>

                <span className="rounded border border-white/[0.10] bg-white/[0.04] backdrop-blur-sm px-2 py-0.5 text-[#c2b8a3]">
                  ● FPGA Gunshot Detection
                </span>

                <span className="rounded border border-white/[0.10] bg-white/[0.04] backdrop-blur-sm px-2 py-0.5 text-[#c2b8a3]">
                  ● Zero-Turn Pivot
                </span>
              </div>
            </div>

            <button
              onClick={scrollToSchematic}
              className="mt-6 flex items-center justify-between rounded-lg border border-white/[0.10] bg-white/[0.04] backdrop-blur-md px-4 py-3 font-mono text-[12px] tracking-wider text-[#c2b8a3] hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
            >
              <span>INSPECT INTERACTIVE BLUEPRINT</span>
              <IconChevronRight className="h-4 w-4" />
            </button>
          </TacticalCard>
        </div>
      </div>
      </motion.section>

      {/* ── SECTION 01: INTERACTIVE BLUEPRINT & SCHEMATIC ── */}
      <motion.section
        ref={schematicRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <SectionLabel k="01" label="TACTICAL PLATFORM BLUEPRINT" />
        <TacticalSchematic />
      </motion.section>

      {/* ── SECTION 02: CAPABILITIES BENTO GRID ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <SectionLabel k="02" label="CORE CAPABILITIES & ENGINEERING" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Bento Card 1 */}
          <TacticalCard
            badge="AI // VISION"
            className="p-7 md:col-span-2 lg:col-span-2 flex flex-col justify-between"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.06] backdrop-blur-md text-emerald-400">
                <IconEye className="h-5 w-5" />
              </div>

              <h3 className="mt-4 font-mono text-[22px] font-bold tracking-tight text-[#e8e6dc]">
                Multi-Modal AI Perception &amp; 3D SLAM
              </h3>

              <p className="mt-3 max-w-[65ch] font-mono text-[13px] leading-relaxed text-[#c2b8a3]/90">
                Our vision pipeline fuses 360° solid-state LiDAR point clouds
                with stereoscopic thermal cameras. Edge deep learning models
                segment terrain trafficability in real time, detecting
                ditches, obstacles, and foliage even in complete smoke and
                zero illumination.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[#c2b8a3]/10 pt-4 font-mono text-[11px]">
              <div className="border-r border-[#c2b8a3]/10 pr-2">
                <div className="text-[10px] text-[#8b8f6b]">LATENCY</div>
                <div className="font-bold text-[#e8e6dc]">
                  18ms Edge Inference
                </div>
              </div>

              <div className="border-r border-[#c2b8a3]/10 pr-2">
                <div className="text-[10px] text-[#8b8f6b]">MAPPING</div>
                <div className="font-bold text-[#e8e6dc]">
                  RTAB-Map 3D Voxel
                </div>
              </div>

              <div>
                <div className="text-[10px] text-[#8b8f6b]">COMPUTE</div>
                <div className="font-bold text-[#e8e6dc]">
                  275 TOPS NVIDIA Jetson
                </div>
              </div>
            </div>
          </TacticalCard>

          {/* Bento Card 2 */}
          <TacticalCard
            badge="FPGA // DSP"
            className="p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.06] backdrop-blur-md text-amber-400">
                <IconTarget className="h-5 w-5" />
              </div>

              <h3 className="mt-4 font-mono text-[20px] font-bold tracking-tight text-[#e8e6dc]">
                Acoustic Gunshot Triangulation
              </h3>

              <p className="mt-2.5 font-mono text-[13px] leading-relaxed text-[#c2b8a3]/80">
                FPGA-accelerated 4-microphone array capturing microsecond
                acoustic shockwaves to triangulate sniper muzzle origin with
                ±1.8° azimuth accuracy.
              </p>
            </div>

            <div className="mt-5 rounded border border-amber-500/20 bg-amber-500/10 backdrop-blur-sm px-3 py-2 font-mono text-[11px] text-amber-300">
              ● REAL-TIME AZIMUTH LOCALIZATION
            </div>
          </TacticalCard>

          {/* Bento Card 3 */}
          <TacticalCard
            badge="PATENT FILED"
            className="p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.06] backdrop-blur-md text-cyan-400">
                <IconCompass className="h-5 w-5" />
              </div>

              <h3 className="mt-4 font-mono text-[20px] font-bold tracking-tight text-[#e8e6dc]">
                Adaptive Terrain Pathfinding
              </h3>

              <p className="mt-2.5 font-mono text-[13px] leading-relaxed text-[#c2b8a3]/80">
                Proprietary reinforcement learning algorithms for dynamic
                re-routing when encountering sudden rockfalls, collapsed
                trenches, or impassable wetlands.
              </p>
            </div>

            <div className="mt-5 rounded border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-sm px-3 py-2 font-mono text-[11px] text-cyan-300">
              ● INTELLECTUAL PROPERTY FILED 2024
            </div>
          </TacticalCard>

          {/* Bento Card 4 */}
          <TacticalCard
            badge="MECHANICAL"
            className="p-7 md:col-span-2 lg:col-span-2 flex flex-col justify-between"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.06] backdrop-blur-md text-emerald-400">
                <IconShield className="h-5 w-5" />
              </div>

              <h3 className="mt-4 font-mono text-[22px] font-bold tracking-tight text-[#e8e6dc]">
                Battlefield-Ready Mechanical Architecture
              </h3>

              <p className="mt-3 max-w-[65ch] font-mono text-[13px] leading-relaxed text-[#c2b8a3]/90">
                Built from aircraft-grade 6061-T6 aluminum alloy and reinforced
                rubber-composite treads. IP67 sealed compartments protect
                electronics against fine dust, heavy monsoon rainfall, and
                river fording depths up to 0.6 meters.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px]">
              <span className="rounded border border-white/[0.10] bg-white/[0.04] backdrop-blur-sm px-3 py-1 text-[#c2b8a3]">
                45° SLOPE CLIMB
              </span>

              <span className="rounded border border-white/[0.10] bg-white/[0.04] backdrop-blur-sm px-3 py-1 text-[#c2b8a3]">
                ZERO-RADIUS PIVOT
              </span>

              <span className="rounded border border-white/[0.10] bg-white/[0.04] backdrop-blur-sm px-3 py-1 text-[#c2b8a3]">
                IP67 ENVIRONMENTAL SEAL
              </span>
            </div>
          </TacticalCard>
        </div>
      </motion.section>

      {/* ── SECTION 03: INTERACTIVE TERMINAL ── */}
      <motion.section
        ref={terminalRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <SectionLabel k="03" label="TACTICAL TELEMETRY CONSOLE" />
        <InteractiveTerminal />
      </motion.section>

      {/* ── SECTION 04: ACHIEVEMENTS & RESEARCH PAPERS ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <SectionLabel k="04" label="MILESTONES & SCIENTIFIC ARCHIVE" />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Milestones Grid */}
          <TacticalCard className="p-7">
            <div className="flex items-center justify-between border-b border-[#c2b8a3]/12 pb-4">
              <div className="flex items-center gap-2 font-mono text-[13px] font-bold tracking-wider text-[#e8e6dc]">
                <IconTrophy className="h-4 w-4 text-amber-400" />
                DECORATIONS &amp; PODIUMS
              </div>

              <span className="font-mono text-[10px] tracking-widest text-[#8b8f6b]">
                UNCLASSIFIED
              </span>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ACHIEVEMENTS.slice(0, 6).map((a) => (
                <div
                  key={a.label}
                  className="rounded-lg border border-white/[0.10] bg-white/[0.05] backdrop-blur-md p-3.5 transition-colors hover:border-white/[0.20] hover:bg-white/[0.07]"
                >
                  <div className="flex items-center justify-between font-mono text-[9px]">
                    <span className="rounded border border-[#8b8f6b]/20 bg-[#8b8f6b]/10 px-1.5 py-0.2 text-[#8b8f6b]">
                      {a.badge}
                    </span>

                    <span className="text-[#8b8f6b]">{a.year}</span>
                  </div>

                  <div className="mt-2 font-mono text-[13px] font-bold text-[#e8e6dc]">
                    {a.label}
                  </div>

                  <div className="font-mono text-[12px] font-semibold text-emerald-400 mt-0.5">
                    {a.value}
                  </div>
                </div>
              ))}
            </div>
          </TacticalCard>

          {/* Research Publications */}
          <TacticalCard className="p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#c2b8a3]/12 pb-4">
                <div className="flex items-center gap-2 font-mono text-[13px] font-bold tracking-wider text-[#e8e6dc]">
                  <IconFileText className="h-4 w-4 text-emerald-400" />
                  PEER-REVIEWED RESEARCH
                </div>

                <span className="font-mono text-[10px] tracking-widest text-[#8b8f6b]">
                  IEEE // ICRA
                </span>
              </div>

              <div className="mt-5 space-y-4">
                {RESEARCH_PAPERS.map((paper, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-white/[0.10] bg-white/[0.05] backdrop-blur-md p-4 transition-all hover:border-emerald-500/30 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] text-[#8b8f6b]">
                      <span className="font-bold text-emerald-400">
                        {paper.tag}
                      </span>

                      <span>{paper.year}</span>
                    </div>

                    <div className="mt-2 font-mono text-[13px] font-bold leading-snug text-[#e8e6dc]">
                      {paper.title}
                    </div>

                    <div className="mt-1 font-mono text-[11px] text-[#8b8f6b]">
                      — {paper.publisher}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-white/[0.10] bg-white/[0.04] backdrop-blur-md p-4 font-mono text-[11px] text-[#c2b8a3]">
              <span className="font-bold text-emerald-400">NOTE:</span>{" "}
              Research papers published under institutional review at MIT
              Manipal. Access full preprints via internal dossier or comms
              uplink.
            </div>
          </TacticalCard>
        </div>
      </motion.section>

      {/* ── SECTION 05: SPONSOR ARSENAL ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <SectionLabel k="05" label="STRATEGIC SPONSORS & PARTNERS" />

        <TacticalCard className="p-8 md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="font-mono text-[18px] font-bold tracking-wide text-[#e8e6dc]">
                SUPPORTING ARSENAL // INDUSTRIAL PARTNERS
              </h3>

              <p className="mt-2 max-w-[65ch] font-mono text-[13px] leading-relaxed text-[#8b8f6b]">
                Our partners enable precision machining, high-capacity battery
                fabrication, GPU compute clusters, and live terrain field
                trials.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.12] bg-white/[0.05] backdrop-blur-md px-4 py-2 font-mono text-[11px] tracking-wider text-[#c2b8a3] hover:border-emerald-500 hover:text-emerald-300 transition-colors"
            >
              BECOME A SPONSOR
              <IconArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              "TIER I // COMPUTE",
              "TIER I // MOTORS",
              "TIER II // FABRICATION",
              "TIER II // SENSORS",
              "TIER III // TELEMETRY",
              "TIER III // ENCLOSURES",
            ].map((slot, i) => (
              <div
                key={i}
                className="grid h-24 place-items-center rounded-lg border border-dashed border-white/[0.12] bg-white/[0.04] backdrop-blur-md p-3 text-center font-mono text-[10px] tracking-wider text-[#8b8f6b] transition-colors hover:border-white/[0.25] hover:bg-white/[0.06]"
              >
                <div>
                  <div className="text-[11px] font-bold text-[#c2b8a3]/80">
                    SLOT {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="text-[9px] text-[#8b8f6b] mt-1">
                    {slot}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TacticalCard>
      </motion.section>
    </main>
  );
}