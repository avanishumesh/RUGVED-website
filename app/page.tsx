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

// ─────────────────────────────────────────────────────────────────────────────
// THEME TOKENS — solid layered colours, no glow, swaps on light-mode
// ─────────────────────────────────────────────────────────────────────────────
const TL_NIGHT = {
  panelBg:       "bg-[#070d09]",
  panelBorder:   "border-[#1a3021]",
  innerGrid:     "rgba(42,90,60,1)",
  bracketBorder: "border-[#243d2e]",
  headerBorder:  "border-[#1a3021]",
  rail:          "bg-[#1a3021]",
  spine:         "bg-[#2d5a3d]",
  head:          "bg-[#3a7a52]",
  readoutBg:     "bg-[#070d09]",
  readoutBorder: "border-[#1a3021]",
  readoutFill:   "bg-[#3a7a52]",
  progressTrack: "bg-[#1a3021]",
  cardBg:        "bg-[#0b1510]",
  cardBorder:    "border-[#1f3a28]",
  cardActiveBg:  "bg-[#112018]",
  cardAccentLeft:"border-l-[#3a7a52]",
  tagBg:         "bg-[#1e3a28]",
  tagBorder:     "border-[#1f3a28]",
  tagText:       "text-[#4a8c62]",
  yearPillBg:    "bg-[#0f1e14]",
  yearPillBorder:"border-[#243d2e]",
  yearPillText:  "text-[#4a7a5c]",
  dotIdle:       "bg-[#243d2e]",
  dotActive:     "bg-[#3a7a52]",
  connectorLine: "bg-[#1f3a28]",
  footerBorder:  "border-[#1a3021]",
  badgeBg:       "bg-[#1e3a28]",
  badgeBorder:   "border-[#2a5040]",
  badgeText:     "text-[#4a8c62]",
  textPrimary:   "text-[#d4e8da]",
  textSecondary: "text-[#6b8c75]",
  textMuted:     "text-[#3a5244]",
  accentDot:     "bg-[#3a7a52]",
  metaSep:       "bg-[#1a3021]",
  iconColor:     "#3a7a52",
};

const TL_DAY = {
  panelBg:       "bg-[#c8a882]",
  panelBorder:   "border-[#8c6a48]",
  innerGrid:     "rgba(90,58,30,1)",
  bracketBorder: "border-[#7a5535]",
  headerBorder:  "border-[#8c6a48]",
  rail:          "bg-[#a07850]",
  spine:         "bg-[#7a5535]",
  head:          "bg-[#5a3a1e]",
  readoutBg:     "bg-[#b89a70]",
  readoutBorder: "border-[#8c6a48]",
  readoutFill:   "bg-[#5a3a1e]",
  progressTrack: "bg-[#a07850]",
  cardBg:        "bg-[#b89a70]",
  cardBorder:    "border-[#8c6a48]",
  cardActiveBg:  "bg-[#c4a87e]",
  cardAccentLeft:"border-l-[#5a3a1e]",
  tagBg:         "bg-[#a07050]",
  tagBorder:     "border-[#8c6a48]",
  tagText:       "text-[#2a1408]",
  yearPillBg:    "bg-[#a07850]",
  yearPillBorder:"border-[#7a5535]",
  yearPillText:  "text-[#2a1408]",
  dotIdle:       "bg-[#8c6a48]",
  dotActive:     "bg-[#5a3a1e]",
  connectorLine: "bg-[#8c6a48]",
  footerBorder:  "border-[#8c6a48]",
  badgeBg:       "bg-[#a07050]",
  badgeBorder:   "border-[#8c6a48]",
  badgeText:     "text-[#2a1408]",
  textPrimary:   "text-[#1e0e04]",
  textSecondary: "text-[#4a2e14]",
  textMuted:     "text-[#7a5535]",
  accentDot:     "bg-[#5a3a1e]",
  metaSep:       "bg-[#8c6a48]",
  iconColor:     "#5a3a1e",
};

// ─────────────────────────────────────────────────────────────────────────────
// SectionLabel
// ─────────────────────────────────────────────────────────────────────────────
function SectionLabel({ k, label }: { k: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.32em] text-[#8b8f6b]">
      <span className="inline-flex items-center gap-1.5 rounded border border-[#8b8f6b]/20 bg-white/[0.04] backdrop-blur-md px-2.5 py-1 text-[#c2b8a3]">
        <IconMinus className="h-3 w-3" /> {k}
      </span>
      <span className="h-px w-12 bg-[#8b8f6b]/20 hidden sm:block" />
      <span className="font-bold tracking-[0.24em] text-[#e8e6dc]">{label}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DynamicPercent — reads a MotionValue without re-rendering parent
// ─────────────────────────────────────────────────────────────────────────────
function DynamicPercent({ value }: { value: MotionValue<number> }) {
  const [num, setNum] = useState(0);
  useEffect(() => value.on("change", (v) => setNum(v)), [value]);
  return <>{num}</>;
}

// ─────────────────────────────────────────────────────────────────────────────
// TimelineSpotlightItem — card pops to full scale when centred in viewport
// ─────────────────────────────────────────────────────────────────────────────
function TimelineSpotlightItem({
  event,
  index,
  tk,
}: {
  event: (typeof EVENTS)[0];
  index: number;
  tk: typeof TL_NIGHT;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;
  const isPaper = event.type === "paper";
  const Icon = isPaper ? IconFileText : IconTrophy;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 80%", "center 50%", "end 20%"],
  });

  const scale   = useTransform(scrollYProgress, [0, 0.45, 0.5, 0.55, 1], [0.87, 1, 1, 1, 0.87]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.6, 1],   [0.3,  1, 1, 1, 0.3]);
  const dotScale= useTransform(scrollYProgress, [0, 0.5, 1],              [0.75, 1.5, 0.75]);

  // Smooth springs so the pop/shrink feels physical
  const scaleS   = useSpring(scale,   { stiffness: 280, damping: 32 });
  const opacityS = useSpring(opacity, { stiffness: 280, damping: 32 });
  const dotS     = useSpring(dotScale,{ stiffness: 280, damping: 32 });

  // Active left-border highlight (solid, no glow)
  const isActive = useTransform(scrollYProgress, (v) => v > 0.35 && v < 0.65);

  return (
    <div
      ref={cardRef}
      className={`relative flex items-center w-full my-3 md:my-5 ${
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col`}
    >
      {/* ── CARD ── */}
      <div
        className={`w-full md:w-[calc(50%-28px)] pl-10 md:pl-0 ${
          isEven ? "md:pr-10" : "md:pl-10"
        }`}
      >
        <motion.div
          style={{ scale: scaleS, opacity: opacityS }}
          className={`
            relative rounded-md border-y border-r border-l-[3px]
            ${tk.cardBg} ${tk.cardBorder} ${tk.cardAccentLeft}
            p-5 md:p-6
            transition-colors duration-700
            will-change-transform
          `}
        >
          {/* Header row */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className={`font-mono text-[10px] tracking-[0.2em] font-bold uppercase ${tk.tagText}`}>
                {event.badge}
              </span>
              {event.tag && (
                <span className={`font-mono text-[9px] tracking-widest hidden sm:inline ${tk.textMuted}`}>
                  [{event.tag}]
                </span>
              )}
            </div>
            <span className={`font-mono text-[11px] font-bold ${tk.textSecondary}`}>
              {event.year}
            </span>
          </div>

          {/* Title + icon */}
          <div className="flex items-start gap-2.5">
            <Icon
              size={15}
              strokeWidth={2}
              style={{ color: tk.iconColor, flexShrink: 0, marginTop: 2 }}
            />
            <h3 className={`font-commissioner font-semibold text-[14px] md:text-[15px] leading-snug tracking-tight ${tk.textPrimary}`}>
              {event.title}
            </h3>
          </div>

          {/* Detail line */}
          <p className={`font-mono text-[11px] font-medium mt-3 ml-[23px] leading-relaxed ${tk.textSecondary}`}>
            {event.detail}
          </p>

          {/* Micro telemetry bar */}
          <div className={`mt-4 pt-3 border-t ${tk.headerBorder} flex items-center justify-between font-mono text-[9px] ${tk.textMuted}`}>
            <span className="tracking-widest uppercase">
              {isPaper ? "ARCHIVE // VALIDATED" : "MILESTONE // VERIFIED"}
            </span>
            <span>REC // {String(index + 1).padStart(2, "0")}</span>
          </div>
        </motion.div>
      </div>

      {/* ── CENTRE NODE (diamond) ── */}
      <div className="absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center z-20 pointer-events-none">
        {/* Connector arms — only visible on md+ */}
        <div
          className={`
            hidden md:block absolute top-1/2 -translate-y-px
            h-px w-7
            ${tk.connectorLine}
            ${isEven ? "right-full" : "left-full"}
          `}
        />
        <motion.div
          style={{ scale: dotS }}
          className={`
            w-3.5 h-3.5 rotate-45 border
            ${tk.dotIdle} ${tk.cardBorder}
            flex items-center justify-center
            transition-colors duration-500
          `}
        >
          <div className={`w-1.5 h-1.5 rounded-sm ${tk.dotActive}`} />
        </motion.div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HOME PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function Home() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const tk = isLight ? TL_DAY : TL_NIGHT;

  const schematicRef = useRef<HTMLDivElement>(null);
  const terminalRef  = useRef<HTMLDivElement>(null);
  const trackRef     = useRef<HTMLDivElement>(null);

  // Spine progress: maps scroll from first→last item passing the screen centre
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 38,
    restDelta: 0.001,
  });

  const spineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const percentReadout = useTransform(smoothProgress, (v) =>
    Math.min(100, Math.max(0, Math.round(v * 100)))
  );

  return (
    <main className="mx-auto max-w-[1440px] px-6 pt-6 md:px-8 md:pt-8 space-y-20 md:space-y-28">
      {/* ── FONT ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@300;400;500;600;700;800;900&display=swap');
        .font-commissioner { font-family: 'Commissioner', sans-serif; }
      `}</style>

      {/* ── HERO WARP TEXT ── */}
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

      {/* ── SECTION HERO ── */}
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
                <span className="rounded bg-[#c2b8a3] px-2.5 py-1 font-bold text-[#111410]">MIT MANIPAL</span>
                <span className="rounded border border-white/[0.12] bg-white/[0.05] backdrop-blur-md px-2.5 py-1 text-[#e8e6dc]">EST. 2016</span>
                <span className="hidden sm:inline text-[10px] text-[#8b8f6b]">— STUDENT DEFENCE ROBOTICS</span>
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
                <span className="font-mono text-[11px] tracking-[0.2em] text-[#8b8f6b]">PATROL • SCOUT • DEFEND</span>
              </div>

              <p className="mt-6 max-w-[62ch] text-[15px] md:text-[16px] leading-[1.75] text-[#c2b8a3]/90 font-commissioner font-medium">
                {ABOUT.intro} Engineered from ground up: flagship{" "}
                <span className="font-bold text-[#f2efe6]">{ABOUT.flagship}</span>,
                FPGA-driven acoustic gunshot triangulation, and multi-modal AI terrain navigation.
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
                  onClick={() => schematicRef.current?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.05] backdrop-blur-md px-5 py-3.5 font-mono text-[13px] tracking-[0.18em] text-[#c2b8a3] hover:border-emerald-500/50 hover:text-emerald-300 transition-all"
                >
                  <IconCpu className="h-4 w-4" /> WALRUS BLUEPRINT
                </button>

                <button
                  onClick={() => terminalRef.current?.scrollIntoView({ behavior: "smooth" })}
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
                onClick={() => schematicRef.current?.scrollIntoView({ behavior: "smooth" })}
                className="mt-6 flex items-center justify-between rounded-lg border border-white/[0.10] bg-white/[0.04] backdrop-blur-md px-4 py-3 font-mono text-[11px] tracking-wider text-[#c2b8a3] hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
              >
                <span>INSPECT INTERACTIVE BLUEPRINT</span>
                <IconChevronRight className="h-4 w-4" />
              </button>
            </TacticalCard>
          </div>
        </div>
      </motion.section>

                 {/* ── SECTION 01: MILESTONES & SCIENTIFIC ARCHIVE ── */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-6"
      >
        <SectionLabel k="01" label="MILESTONES & SCIENTIFIC ARCHIVE" />

        {/* ── PANEL SHELL (Removed overflow-hidden here to fix sticky!) ── */}
        <div
          className={`
            relative rounded-2xl border
            ${tk.panelBg} ${tk.panelBorder}
            transition-colors duration-1000 ease-out
          `}
        >
          {/* ── BACKGROUND WRAPPER (Handles the overflow so sticky isn't broken) ── */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(to right, ${tk.innerGrid} 1px, transparent 1px), linear-gradient(to bottom, ${tk.innerGrid} 1px, transparent 1px)`,
                backgroundSize: "64px 64px",
              }}
            />
          </div>

          {/* Corner brackets */}
          <div aria-hidden className={`pointer-events-none absolute left-0 top-0 h-7 w-7 border-l-2 border-t-2 rounded-tl-2xl ${tk.bracketBorder} transition-colors duration-1000`} />
          <div aria-hidden className={`pointer-events-none absolute right-0 bottom-0 h-7 w-7 border-r-2 border-b-2 rounded-br-2xl ${tk.bracketBorder} transition-colors duration-1000`} />

          <div className="relative p-5 sm:p-8 md:p-10">

            {/* ── HEADER ── */}
            <header
              className={`
                pb-6 mb-0 border-b
                ${tk.headerBorder}
                transition-colors duration-1000 ease-out
              `}
            >
              <div className="max-w-2xl">
                <h2 className={`font-commissioner font-bold text-2xl md:text-[26px] leading-tight tracking-tight ${tk.textPrimary} transition-colors duration-1000`}>
                  MIT Manipal Defence Robotics History
                </h2>
                <p className={`mt-2 text-[13px] leading-relaxed ${tk.textSecondary} transition-colors duration-1000`}>
                  Every fielded platform, competition result and published paper, in the order it happened.
                </p>
                <div className={`mt-3 flex items-center gap-3 font-mono text-[10px] tracking-[0.18em] ${tk.textMuted} transition-colors duration-1000`}>
                  <span className={`h-[5px] w-[5px] rounded-full ${tk.accentDot}`} />
                  <span>{EVENTS.length} RECORDS</span>
                  <span className={`h-px w-5 ${tk.metaSep}`} />
                  <span>RESEARCH VECTOR</span>
                </div>
              </div>
            </header>

            {/* ── CONTENT WRAPPER ── */}
            <div className="relative flex flex-col lg:flex-row lg:items-start gap-8 pt-6 sm:pt-8">
              
              {/* ── PROGRESS READOUT OVERLAY (Now perfectly sticky) ── */}
              <div
                className={`
                  sticky top-24 lg:top-32 z-50
                  self-end lg:self-start
                  w-full max-w-[200px] sm:max-w-[240px] shrink-0
                  order-1 lg:order-2
                  shadow-2xl lg:shadow-none
                `}
              >
                <div
                  className={`
                    rounded-lg border px-4 py-3
                    ${tk.readoutBg} ${tk.readoutBorder}
                    backdrop-blur-xl
                    transition-all duration-1000 ease-out
                  `}
                >
                  {/* Top row: label + live number */}
                  <div className="flex items-baseline justify-between font-mono mb-2">
                    <span className={`flex items-center gap-2 text-[9px] tracking-[0.18em] ${tk.textMuted}`}>
                      <span
                        className={`h-[5px] w-[5px] rounded-full ${tk.accentDot} animate-[pulse_2s_ease-in-out_infinite]`}
                      />
                      VECTOR
                    </span>
                    <span className={`text-[20px] font-bold tabular-nums leading-none ${tk.textPrimary} transition-colors duration-1000`}>
                      <DynamicPercent value={percentReadout} />
                      <span className={`ml-0.5 text-[10px] font-medium ${tk.textSecondary}`}>%</span>
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className={`relative h-[3px] w-full overflow-hidden rounded-full ${tk.progressTrack} transition-colors duration-1000`}>
                    <motion.div
                      style={{ width: spineHeight }}
                      className={`h-full rounded-full ${tk.readoutFill} transition-colors duration-1000`}
                    />
                  </div>

                  {/* Quarter tick labels */}
                  <div aria-hidden className={`mt-1.5 flex justify-between font-mono text-[8px] tracking-widest ${tk.textMuted} transition-colors duration-1000`}>
                    <span>0</span><span>25</span><span>50</span><span>75</span><span>100</span>
                  </div>
                </div>
              </div>

              {/* ── TIMELINE TRACK ── */}
              <div className="relative flex-1 w-full min-w-0 pb-8 order-2 lg:order-1" ref={trackRef}>

                {/* Inactive rail */}
                <div
                  className={`
                    absolute left-4 md:left-1/2
                    top-2 bottom-8
                    w-px -translate-x-1/2
                    ${tk.rail}
                    transition-colors duration-1000 ease-out
                  `}
                />

                {/* Active spine */}
                <motion.div
                  style={{ height: spineHeight }}
                  className={`
                    absolute left-4 md:left-1/2
                    top-2 w-px -translate-x-1/2
                    origin-top z-10
                    ${tk.spine}
                    transition-colors duration-1000 ease-out
                  `}
                />

                {/* Tracer head */}
                <motion.div
                  style={{ top: spineHeight }}
                  className="absolute left-4 md:left-1/2 mt-2 -translate-x-1/2 z-30"
                >
                  <span
                    className={`
                      relative block h-2 w-2 rotate-45
                      ${tk.head}
                      transition-colors duration-1000 ease-out
                    `}
                  />
                </motion.div>

                {/* Items */}
                <div className="flex flex-col">
                  {EVENTS.map((event, index) => (
                    <TimelineSpotlightItem
                      key={event.id}
                      event={event}
                      index={index}
                      tk={tk}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ── FOOTNOTE ── */}
            <footer
              className={`
                mt-0 pt-5 border-t ${tk.footerBorder}
                flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between
                transition-colors duration-1000 ease-out
              `}
            >
              <p className={`max-w-xl font-mono text-[9px] leading-relaxed ${tk.textMuted} transition-colors duration-1000`}>
                <span className={tk.textSecondary}>Note —</span>{" "}
                Papers published under institutional review at MIT Manipal.
                Full preprints are available through the internal dossier or on request.
              </p>
              <div
                className={`
                  flex shrink-0 items-center gap-2 rounded border
                  ${tk.badgeBg} ${tk.badgeBorder} ${tk.badgeText}
                  px-2.5 py-1 font-mono text-[8px] tracking-[0.18em]
                  transition-colors duration-1000 ease-out
                `}
              >
                <span className={`h-[5px] w-[5px] rounded-full ${tk.accentDot}`} />
                SEC-LEVEL · UNCLASSIFIED
              </div>
            </footer>

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
                Our vision pipeline fuses 360° solid-state LiDAR point clouds with stereoscopic thermal cameras.
                Edge deep learning models segment terrain trafficability in real time, detecting ditches, obstacles,
                and foliage even in complete smoke and zero illumination.
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
              <h3 className="mt-5 font-commissioner text-[18px] font-bold tracking-tight text-[#e8e6dc]">Acoustic Triangulation</h3>
              <p className="mt-2.5 font-commissioner text-[14px] leading-relaxed text-[#c2b8a3]/70">
                FPGA-accelerated 4-microphone array capturing microsecond acoustic shockwaves to triangulate
                sniper muzzle origin with ±1.8° azimuth accuracy.
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
              <h3 className="mt-5 font-commissioner text-[18px] font-bold tracking-tight text-[#e8e6dc]">Adaptive Pathfinding</h3>
              <p className="mt-2.5 font-commissioner text-[14px] leading-relaxed text-[#c2b8a3]/70">
                Proprietary reinforcement learning algorithms for dynamic re-routing when encountering sudden
                rockfalls, collapsed trenches, or impassable wetlands.
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
                Built from aircraft-grade 6061-T6 aluminum alloy and reinforced rubber-composite treads. IP67 sealed
                compartments protect electronics against fine dust, heavy monsoon rainfall, and river fording depths
                up to 0.6 meters.
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
        ref={terminalRef}
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
                Our partners enable precision machining, high-capacity battery fabrication, GPU compute clusters,
                and live terrain field trials.
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
                  <div className="text-[11px] font-bold text-[#c2b8a3]/70">SLOT {String(i + 1).padStart(2, "0")}</div>
                  <div className="text-[9px] text-[#5e6149] mt-1.5">{slot}</div>
                </div>
              </div>
            ))}
          </div>
        </TacticalCard>
      </motion.section>
    </main>
  );
}