"use client";

import React, { useRef, useState, useEffect } from "react";
import SplitFlapText from "@/components/ui/SplitFlapText";
import WarpText from "@/components/ui/WarpText";
import TacticalCard from "@/components/ui/TacticalCard";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
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
  { label: "Smart India Hackathon", value: "Top 5 Finalist", year: "2024", badge: "NATIONAL" },
  { label: "WALRUS 2.0 UGV Platform", value: "Field Deployed", year: "2024", badge: "HARDWARE" },
  { label: "National Defence Expo", value: "Official Feature", year: "2025", badge: "EXPO" },
  { label: "AI Terrain Navigation System", value: "Patent Filed", year: "2024", badge: "IPR" },
  { label: "e-Yantra — IIT Bombay", value: "AIR 10", year: "2023-24", badge: "ROBOTICS" },
  { label: "Guiding Gaze — OpenCV AI", value: "Global Rank 7", year: "2023", badge: "VISION" },
  { label: "AI for Change Hackathon", value: "1st Place Winners", year: "2024", badge: "AI" },
  { label: "Line Following Robot — BITS Goa", value: "Top 7 Finalist", year: "2024", badge: "AUTONOMY" },
  { label: "Covideate — IIT Bombay Techfest", value: "1st Place", year: "2020", badge: "EMBEDDED" },
  { label: "Def Hacks Global 2.0", value: "1st Place Champions", year: "2020", badge: "GLOBAL" },
];

const RESEARCH_PAPERS = [
  { title: "Autonomous Terrain Navigation Using Multi-Modal Sensor Fusion & Deep AI", publisher: "IEEE Transactions on Field Robotics", year: "2024", tag: "AI / SLAM" },
  { title: "Optimized Real-Time Pathfinding and Recovery in Extreme UGV Systems", publisher: "IEEE International Conference on Robotics and Automation (ICRA)", year: "2023", tag: "PATHFINDING" },
  { title: "FPGA-Accelerated Microsecond Acoustic Triangulation for Muzzle Flash Localization", publisher: "Elsevier Robotics & Autonomous Systems", year: "2023", tag: "DSP / FPGA" },
];

const EVENTS = [
  { id: 1, year: "2023", type: "achievement", badge: "VISION", title: "Guiding Gaze — OpenCV AI", detail: "Global Rank 7", tag: "COMP_VISION" },
  { id: 2, year: "2023", type: "paper", badge: "PATHFINDING", title: "Optimized Real-Time Pathfinding and Recovery in Extreme UGV Systems", detail: "IEEE Int'l Conf. on Robotics & Automation (ICRA)", tag: "PEER_REVIEWED" },
  { id: 3, year: "2023", type: "paper", badge: "DSP / FPGA", title: "FPGA-Accelerated Microsecond Acoustic Triangulation for Muzzle Flash Localization", detail: "Elsevier Robotics & Autonomous Systems (Preprint)", tag: "HARDWARE_DSP" },
  { id: 4, year: "2023–24", type: "achievement", badge: "ROBOTICS", title: "e-Yantra — IIT Bombay", detail: "All India Rank 10", tag: "COMPETITION" },
  { id: 5, year: "2024", type: "achievement", badge: "NATIONAL", title: "Smart India Hackathon", detail: "Top 5 Finalist (Defence Theme)", tag: "MINISTRY_OF_DEF" },
  { id: 6, year: "2024", type: "achievement", badge: "HARDWARE", title: "WALRUS 2.0 UGV Platform", detail: "Field Deployed & Active Telemetry Validated", tag: "FLAGSHIP_PROT" },
  { id: 7, year: "2024", type: "achievement", badge: "IPR", title: "AI Terrain Navigation System", detail: "Provisional Patent Filed (IPR / Govt. of India)", tag: "PATENT_PENDING" },
  { id: 8, year: "2024", type: "paper", badge: "AI / SLAM", title: "Autonomous Terrain Navigation Using Multi-Modal Sensor Fusion & Deep AI", detail: "IEEE Transactions on Field Robotics", tag: "TRANSACTIONS" },
  { id: 9, year: "2025", type: "achievement", badge: "EXPO", title: "National Defence Expo", detail: "Official Feature & Live Platform Showcase", tag: "KEYNOTE_EXHIBIT" },
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

// Helper to continuously read scroll percentage without parent component re-renders
function DynamicPercent({ value }: { value: MotionValue<number> }) {
  const [num, setNum] = useState(0);
  useEffect(() => {
    return value.on("change", (latest) => setNum(latest));
  }, [value]);
  return <>{num}</>;
}

// Individual milestone card: Sleek, professional, precision design
function TimelineSpotlightItem({
  event,
  index,
}: {
  event: (typeof EVENTS)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  // Viewport tracking for center magnification
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 75%", "center 50%", "end 25%"],
  });

  // Very subtle motion transforms for a professional rigid feel
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 1, 0.35]);
  
  const isPaper = event.type === "paper";
  const accentColor = isPaper ? "#34d399" : "#fbbf24";
  
  // Dynamic border highlight for active state
  const borderLeftColor = useTransform(
    scrollYProgress,
    [0, 0.45, 0.5, 0.55, 1],
    ["transparent", accentColor, accentColor, accentColor, "transparent"]
  );

  // Dynamic node glow
  const nodeScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.3, 0.8]);
  const nodeColor = useTransform(
    scrollYProgress,
    [0, 0.45, 0.5, 0.55, 1],
    ["rgba(255,255,255,0.15)", accentColor, accentColor, accentColor, "rgba(255,255,255,0.15)"]
  );

  const Icon = isPaper ? IconFileText : IconTrophy;

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col md:flex-row items-center w-full my-4 md:my-6 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Content Container */}
      <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-10">
        <motion.div
          style={{ scale, opacity, borderLeftColor }}
          className="relative group rounded-r-md rounded-l-sm p-5 md:p-6 border-y border-r border-l-[3px] border-white/[0.04] bg-[#070a08]/80 backdrop-blur-xl transition-all duration-300"
        >
          {/* Header Metadata */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] tracking-[0.2em] font-bold text-[#8b8f6b] uppercase">
                {event.badge}
              </span>
              {event.tag && (
                <span className="font-mono text-[9px] text-[#5e6149] tracking-widest hidden sm:inline">
                  [{event.tag}]
                </span>
              )}
            </div>
            <span className="font-commissioner font-bold text-xs md:text-sm text-[#e8e6dc] tracking-tight">
              {event.year}
            </span>
          </div>

          {/* Title with Icon */}
          <div className="flex items-start gap-2.5">
            <Icon
              size={16}
              strokeWidth={2}
              style={{ color: accentColor, flexShrink: 0, marginTop: 3 }}
            />
            <h3 className="font-commissioner font-semibold text-[15px] md:text-[16px] leading-snug text-[#f2efe6] tracking-wide">
              {event.title}
            </h3>
          </div>

          {/* Detail Subtitle / Publisher */}
          <p className="font-mono text-[11px] md:text-[12px] font-medium mt-3 ml-6 tracking-wide leading-relaxed text-[#c2b8a3]/70">
            {event.detail}
          </p>

          {/* Card Micro-Telemetry Bar */}
          <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between font-mono text-[9px] text-[#5e6149]">
            <span className="tracking-widest uppercase">
              {isPaper ? "ARCHIVE // VALIDATED" : "MILESTONE // VERIFIED"}
            </span>
            <div className="flex items-center gap-1 text-[#8b8f6b]">
              <span>REC // {String(index + 1).padStart(2, "0")}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Central Precision Node (Diamond) */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center pointer-events-none z-20">
        <motion.div
          style={{
            scale: nodeScale,
            borderColor: nodeColor,
          }}
          className="w-3.5 h-3.5 md:w-4 md:h-4 rotate-45 border border-white/20 bg-[#070a08] flex items-center justify-center transition-colors shadow-lg"
        >
          <motion.div
            style={{ backgroundColor: nodeColor }}
            className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-sm"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function Home() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const schematicRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  
  // trackRef tightly wraps the items to map scroll progress exactly from the first to the last item
  const trackRef = useRef<HTMLDivElement>(null);

  // Smooth scroll rate-synced spine physics. Maps 0-100% as the track passes the center of the screen
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });

  const spineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const percentReadout = useTransform(smoothProgress, (val) =>
    Math.min(100, Math.max(0, Math.round(val * 100)))
  );

  const scrollToSchematic = () => {
    schematicRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTerminal = () => {
    terminalRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="mx-auto max-w-[1440px] px-6 pt-6 md:px-8 md:pt-8 space-y-20 md:space-y-28">
      {/* ── GLOBAL GOOGLE FONT INJECTION (COMMISSIONER) ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@300;400;500;600;700;800;900&display=swap');
        .font-commissioner {
          font-family: 'Commissioner', sans-serif;
        }
      `}</style>

      {/* Outer wrapper */}
      <div className="flex h-[calc(100vh-2rem)] w-full flex-col overflow-hidden">
        <div className="flex flex-1 items-center -translate-y-[12vh]">
          <WarpText
            text="RUGVED"
            color={isLight ? "#d9c490" : "#9ea3c7"}
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
      <motion.section
        ref={schematicRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:gap-8 items-stretch -translate-y-[7vh]">
          <TacticalCard
            laserSweep
            className="p-8 md:p-12 flex flex-col justify-between"
            glowColor={isLight ? "rgba(87,90,51,0.2)" : "rgba(194,184,163,0.2)"}
          >
            <div>
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

              <div className="mt-5 flex items-center gap-3 font-mono text-[10px] tracking-[0.28em] text-[#8b8f6b]">
                <div className="h-px w-10 bg-[#c2b8a3]/30 hidden sm:block" />
                <span>REMOTE UNMANNED GROUND VEHICULAR ELECTRONIC DEFENCE</span>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="rounded-lg border border-white/[0.12] bg-white/[0.05] backdrop-blur-md px-3.5 py-2">
                  <SplitFlapText
                    words={["DEFENCE ROBOTICS", "AUTONOMOUS UGVs", "FIELD DEPLOYED", "PATENT FILED"]}
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

              <p className="mt-6 max-w-[62ch] text-[15px] md:text-[16px] leading-[1.75] text-[#c2b8a3]/90 font-commissioner font-medium">
                {ABOUT.intro} Engineered from ground up: flagship{" "}
                <span className="font-bold text-[#f2efe6]">{ABOUT.flagship}</span>
                , FPGA-driven acoustic gunshot triangulation, and multi-modal AI
                terrain navigation.
              </p>

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

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-[#c2b8a3]/12 pt-6 font-mono">
              <div>
                <div className="text-[10px] tracking-[0.18em] text-[#8b8f6b]">OPERATIONAL SINCE</div>
                <div className="mt-1 text-[20px] font-bold tracking-tight text-[#e8e6dc]">2016</div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.18em] text-[#8b8f6b]">FLAGSHIP UGV</div>
                <div className="mt-1 text-[20px] font-bold tracking-tight text-[#e8e6dc]">WALRUS 2.0</div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.18em] text-[#8b8f6b]">DIVISIONS</div>
                <div className="mt-1 text-[20px] font-bold tracking-tight text-[#e8e6dc]">06 CORE</div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.18em] text-[#8b8f6b]">STATUS</div>
                <div className="mt-1 inline-flex items-center gap-1.5 text-[15px] font-bold text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  FIELD READY
                </div>
              </div>
            </div>
          </TacticalCard>

          <div className="flex flex-col gap-6">
            <TacticalCard badge="LIVE TELEMETRY" className="p-6 md:p-7">
              <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-[#8b8f6b]">
                <IconTarget className="h-4 w-4 text-[#c2b8a3]" />
                TACTICAL CAPABILITY READOUT
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { k: "ENDURANCE", v: "6.5H+", sub: "Continuous Field Ops", icon: IconBolt },
                  { k: "PAYLOAD", v: "45 KG", sub: "Modular Swappable Bay", icon: IconShield },
                  { k: "NAVIGATION", v: "AI SLAM", sub: "Terrain Classifier", icon: IconCompass },
                  { k: "SCOUT RANGE", v: "2.0 KM", sub: "Tethered Aerial Link", icon: IconRadar },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.02] backdrop-blur-md p-4 transition-all hover:border-white/[0.15] hover:bg-white/[0.05]"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.18em] text-[#8b8f6b]">
                      <span>{s.k}</span>
                      <s.icon className="h-3.5 w-3.5 text-[#8b8f6b]/70" />
                    </div>
                    <div className="mt-1.5 font-mono text-[18px] font-bold tracking-tight text-[#e8e6dc]">{s.v}</div>
                    <div className="font-mono text-[10px] text-[#8b8f6b] mt-0.5">{s.sub}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-[#c2b8a3]/10 pt-4 font-mono text-[10px] tracking-wider text-[#8b8f6b]">
                <span>PLATFORM ARCHITECTURE // LEVEL 4</span>
                <span className="text-emerald-400 font-bold">100% NOMINAL</span>
              </div>
            </TacticalCard>

            <TacticalCard badge="NDE 2025" className="p-6 md:p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[11px] tracking-[0.2em] text-[#8b8f6b]">PLATFORM SPOTLIGHT</div>
                <div className="mt-3 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.06] backdrop-blur-md">
                    <IconTank className="h-8 w-8 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-commissioner font-bold text-[18px] tracking-tight text-[#e8e6dc]">WALRUS 2.0 UGV</h3>
                    <p className="font-mono text-[11px] text-[#8b8f6b] mt-1">All-Terrain Heavy Duty Tactical Rover</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 font-mono text-[10px]">
                  <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-emerald-300">● 360° LiDAR &amp; Thermal</span>
                  <span className="rounded border border-white/[0.08] bg-white/[0.02] px-2 py-0.5 text-[#c2b8a3]">● FPGA Gunshot Detection</span>
                  <span className="rounded border border-white/[0.08] bg-white/[0.02] px-2 py-0.5 text-[#c2b8a3]">● Zero-Turn Pivot</span>
                </div>
              </div>

              <button
                onClick={scrollToSchematic}
                className="mt-6 flex items-center justify-between rounded-lg border border-white/[0.10] bg-white/[0.04] backdrop-blur-md px-4 py-3 font-mono text-[11px] tracking-wider text-[#c2b8a3] hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
              >
                <span>INSPECT INTERACTIVE BLUEPRINT</span>
                <IconChevronRight className="h-4 w-4" />
              </button>
            </TacticalCard>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 01: MILESTONES & SCIENTIFIC ARCHIVE (SLEEK TIMELINE) ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <SectionLabel k="01" label="MILESTONES & SCIENTIFIC ARCHIVE" />

        <div className="relative rounded-xl border border-white/[0.08] bg-[#070a08]/60 backdrop-blur-xl p-5 sm:p-8 md:p-12 shadow-2xl">
          
          {/* Archive Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.06]">
            <div>
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#34d399] uppercase font-bold">
                <span className="w-1.5 h-1.5 rounded-sm bg-[#34d399]" />
                <span>CHRONOLOGICAL TRAJECTORY & RESEARCH VECTOR</span>
              </div>
              <h2 className="font-commissioner font-bold text-xl md:text-2xl text-[#f2efe6] tracking-tight mt-2">
                MIT Manipal Defence Robotics History
              </h2>
            </div>

            {/* Scroll-Synced HUD Progress Pill */}
            <div className="flex items-center gap-3 px-3.5 py-2 rounded border border-white/[0.10] bg-white/[0.02] backdrop-blur-md self-start sm:self-center">
              <IconRadar className="h-3.5 w-3.5 text-[#34d399] animate-spin" />
              <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-[#8b8f6b]">
                <span>VECTOR</span>
                <span className="font-bold text-[#34d399] min-w-[28px]">
                  <DynamicPercent value={percentReadout} />%
                </span>
              </div>
              <div className="w-16 h-1 rounded-full bg-white/[0.05] overflow-hidden">
                <motion.div
                  style={{ width: spineHeight }}
                  className="h-full bg-gradient-to-r from-[#34d399] to-[#fbbf24]"
                />
              </div>
            </div>
          </div>

          {/* Timeline Center Track Area */}
          <div className="relative w-full" ref={trackRef}>
            {/* Inactive Background Rail */}
            <div className="absolute left-4 md:left-1/2 top-6 bottom-6 w-[1px] -translate-x-1/2 bg-white/[0.05]" />

            {/* Glowing Active Dynamic Spine */}
            <motion.div
              style={{ height: spineHeight }}
              className="absolute left-4 md:left-1/2 top-6 w-[1px] -translate-x-1/2 bg-gradient-to-b from-[#34d399] via-[#34d399] to-[#fbbf24] origin-top z-10"
            />

            {/* Tracer Bead Tracking the Scroll Head */}
            <motion.div
              style={{ top: spineHeight }}
              className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-6 z-30"
            >
              <div className="w-3 h-1.5 bg-[#34d399] rounded-sm shadow-[0_0_8px_#34d399]" />
            </motion.div>

            {/* Stream of Spotlight Milestones */}
            <div className="flex flex-col py-6">
              {EVENTS.map((event, index) => (
                <TimelineSpotlightItem
                  key={event.id}
                  event={event}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Footnote Notice */}
          <div className="mt-4 pt-5 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[10px] text-[#5e6149]">
            <p className="max-w-xl leading-relaxed">
              <span className="font-bold text-[#8b8f6b]">NOTE:</span> Research
              papers published under institutional review at MIT Manipal. Access
              full preprints via internal dossier or comms uplink.
            </p>
            <div className="flex items-center gap-2 tracking-widest uppercase">
              <span>SEC-LEVEL: UNCLASSIFIED</span>
              <span className="w-1.5 h-1.5 rounded-sm bg-[#34d399]" />
            </div>
          </div>
        </div>
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
          <TacticalCard badge="AI // VISION" className="p-7 md:col-span-2 lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded border border-white/[0.12] bg-white/[0.04] text-emerald-400">
                <IconEye className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-commissioner text-[20px] font-bold tracking-tight text-[#e8e6dc]">
                Multi-Modal AI Perception &amp; 3D SLAM
              </h3>
              <p className="mt-3 max-w-[65ch] font-commissioner text-[14px] leading-relaxed text-[#c2b8a3]/80">
                Our vision pipeline fuses 360° solid-state LiDAR point clouds
                with stereoscopic thermal cameras. Edge deep learning models
                segment terrain trafficability in real time, detecting
                ditches, obstacles, and foliage even in complete smoke and
                zero illumination.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[#c2b8a3]/10 pt-4 font-mono text-[10px]">
              <div className="border-r border-[#c2b8a3]/10 pr-2">
                <div className="text-[#8b8f6b]">LATENCY</div>
                <div className="font-bold text-[#e8e6dc] mt-0.5">18ms Edge Inference</div>
              </div>
              <div className="border-r border-[#c2b8a3]/10 pr-2">
                <div className="text-[#8b8f6b]">MAPPING</div>
                <div className="font-bold text-[#e8e6dc] mt-0.5">RTAB-Map 3D Voxel</div>
              </div>
              <div>
                <div className="text-[#8b8f6b]">COMPUTE</div>
                <div className="font-bold text-[#e8e6dc] mt-0.5">275 TOPS NVIDIA</div>
              </div>
            </div>
          </TacticalCard>

          <TacticalCard badge="FPGA // DSP" className="p-7 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded border border-white/[0.12] bg-white/[0.04] text-amber-400">
                <IconTarget className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-commissioner text-[18px] font-bold tracking-tight text-[#e8e6dc]">
                Acoustic Triangulation
              </h3>
              <p className="mt-2.5 font-commissioner text-[14px] leading-relaxed text-[#c2b8a3]/70">
                FPGA-accelerated 4-microphone array capturing microsecond
                acoustic shockwaves to triangulate sniper muzzle origin with
                ±1.8° azimuth accuracy.
              </p>
            </div>
            <div className="mt-5 rounded border border-amber-500/20 bg-amber-500/10 px-3 py-2 font-mono text-[10px] text-amber-300">
              ● AZIMUTH LOCALIZATION
            </div>
          </TacticalCard>

          <TacticalCard badge="PATENT FILED" className="p-7 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded border border-white/[0.12] bg-white/[0.04] text-cyan-400">
                <IconCompass className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-commissioner text-[18px] font-bold tracking-tight text-[#e8e6dc]">
                Adaptive Pathfinding
              </h3>
              <p className="mt-2.5 font-commissioner text-[14px] leading-relaxed text-[#c2b8a3]/70">
                Proprietary reinforcement learning algorithms for dynamic
                re-routing when encountering sudden rockfalls, collapsed
                trenches, or impassable wetlands.
              </p>
            </div>
            <div className="mt-5 rounded border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 font-mono text-[10px] text-cyan-300">
              ● IPR FILED 2024
            </div>
          </TacticalCard>

          <TacticalCard badge="MECHANICAL" className="p-7 md:col-span-2 lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded border border-white/[0.12] bg-white/[0.04] text-emerald-400">
                <IconShield className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-commissioner text-[20px] font-bold tracking-tight text-[#e8e6dc]">
                Battlefield-Ready Mechanical Architecture
              </h3>
              <p className="mt-3 max-w-[65ch] font-commissioner text-[14px] leading-relaxed text-[#c2b8a3]/80">
                Built from aircraft-grade 6061-T6 aluminum alloy and reinforced
                rubber-composite treads. IP67 sealed compartments protect
                electronics against fine dust, heavy monsoon rainfall, and
                river fording depths up to 0.6 meters.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 font-mono text-[10px]">
              <span className="rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[#c2b8a3]">45° SLOPE CLIMB</span>
              <span className="rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[#c2b8a3]">ZERO-RADIUS PIVOT</span>
              <span className="rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[#c2b8a3]">IP67 ENVIRONMENTAL SEAL</span>
            </div>
          </TacticalCard>
        </div>
      </motion.section>

      {/* ── SECTION 03: STRATEGIC SPONSORS & PARTNERS ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <SectionLabel k="03" label="STRATEGIC SPONSORS & PARTNERS" />

        <TacticalCard className="p-8 md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="font-commissioner text-[18px] font-bold tracking-wide text-[#e8e6dc]">
                SUPPORTING ARSENAL // INDUSTRIAL PARTNERS
              </h3>
              <p className="mt-2 max-w-[65ch] font-commissioner text-[14px] leading-relaxed text-[#8b8f6b]">
                Our partners enable precision machining, high-capacity battery
                fabrication, GPU compute clusters, and live terrain field
                trials.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded border border-white/[0.12] bg-white/[0.04] px-4 py-2.5 font-mono text-[11px] tracking-wider text-[#c2b8a3] hover:border-emerald-500 hover:text-emerald-300 transition-colors"
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
                className="grid h-24 place-items-center rounded border border-dashed border-white/[0.10] bg-white/[0.02] p-3 text-center font-mono text-[10px] tracking-wider text-[#8b8f6b] transition-colors hover:border-white/[0.25] hover:bg-white/[0.05]"
              >
                <div>
                  <div className="text-[11px] font-bold text-[#c2b8a3]/70">
                    SLOT {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="text-[9px] text-[#5e6149] mt-1.5">
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