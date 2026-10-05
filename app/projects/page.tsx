"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  IconArrowUpRight,
  IconX,
  IconMinus,
  IconChevronRight,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

/* ─────────────────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────────────────── */
interface ProjectItem {
  code: string;
  title: string;
  subtitle: string;
  category: "UGV" | "UAV" | "AI" | "HARDWARE";
  status: "DEPLOYED" | "TESTING" | "DEVELOPMENT" | "ARCHIVED";
  image?: string;
  desc: string;
  specs: { label: string; value: string }[];
  highlight: string;
  technologies: string[];
  hero?: boolean;
}

const PROJECTS: ProjectItem[] = [
  {
    code: "P-01",
    title: "WALRUS 2.0",
    subtitle: "Autonomous Unmanned Ground Vehicle",
    category: "UGV",
    status: "DEPLOYED",
    image: "/walrus-ugv.jpeg",
    desc: "Flagship military-grade unmanned ground platform featuring 360° solid-state LiDAR, real-time AI terrain classification, FPGA gunshot acoustic localization, and swappable mission payload interfaces.",
    specs: [
      { label: "Autonomy Level", value: "Level 4 — ROS2 + RTAB-Map" },
      { label: "Endurance", value: "6.5 hours continuous" },
      { label: "Payload Capacity", value: "45 kg modular quick-swap" },
      { label: "Chassis", value: "6061-T6 Aluminium, IP67" },
    ],
    highlight: "Featured at National Defence Expo 2025. Patent-filed terrain navigation system.",
    technologies: ["ROS2", "NVIDIA Jetson AGX", "LiDAR", "SolidWorks", "Xilinx Artix-7"],
    hero: true,
  },
  {
    code: "P-02",
    title: "AERIAL WING",
    subtitle: "Tethered ISR Scout Drone",
    category: "UAV",
    status: "TESTING",
    image: "/aerial-wing.jpeg",
    desc: "Agile rapid-deploy quadcopter scout tethered directly to WALRUS for synchronized land-to-air reconnaissance, aerial thermal mapping, and beyond-line-of-sight signal relay.",
    specs: [
      { label: "Operational Range", value: "2.0 km encrypted link" },
      { label: "Camera", value: "4K 60fps + 640×512 thermal" },
      { label: "Flight Time", value: "32 min battery / tethered infinite" },
      { label: "Link Latency", value: "28 ms real-time" },
    ],
    highlight: "Autonomous takeoff and landing from WALRUS top deck payload bay.",
    technologies: ["PX4 Autopilot", "STM32", "5.8 GHz Telemetry", "Thermal IR", "Carbon Fibre"],
    hero: true,
  },
  {
    code: "P-03",
    title: "Traffic Munda",
    subtitle: "AI Urban Traffic Intelligence",
    category: "AI",
    status: "DEPLOYED",
    desc: "Edge AI traffic optimization using live CCTV feeds — multi-lane density computation, vehicle re-identification, and emergency vehicle pre-emption.",
    specs: [
      { label: "Detection Accuracy", value: "98.4% mAP@50" },
      { label: "Processing Speed", value: "60 fps multi-stream" },
    ],
    highlight: "Top 5 finalist at Smart India Hackathon 2024.",
    technologies: ["PyTorch", "OpenCV", "TensorRT", "CUDA", "FastAPI"],
  },
  {
    code: "P-04",
    title: "Acoustic Array",
    subtitle: "FPGA Gunshot Localization",
    category: "HARDWARE",
    status: "DEPLOYED",
    desc: "Hardware-accelerated muzzle blast and shockwave detection using 4 high-bandwidth microphones with microsecond TDOA triangulation.",
    specs: [
      { label: "Sampling Rate", value: "192 kHz dedicated ADC" },
      { label: "Azimuth Accuracy", value: "±1.8°" },
    ],
    highlight: "Integrated into WALRUS 2.0 tactical bus.",
    technologies: ["Verilog", "Xilinx Vivado", "Altium Designer"],
  },
  {
    code: "P-05",
    title: "Gessure",
    subtitle: "Touchless Tactical Interface",
    category: "AI",
    status: "ARCHIVED",
    desc: "Contactless HMI for tactical terminals — facial biometric auth and hand-gesture navigation for gloved operators in the field.",
    specs: [
      { label: "End-to-End Latency", value: "16 ms" },
      { label: "Gesture Library", value: "12 tactical signals" },
    ],
    highlight: "1st Place at Def Hacks Global 2.0.",
    technologies: ["MediaPipe", "Python", "OpenCV", "C++"],
  },
  {
    code: "P-06",
    title: "LiFePO₄ Power System",
    subtitle: "48V Tactical Battery Module",
    category: "HARDWARE",
    status: "DEPLOYED",
    desc: "Custom high-density battery enclosure with isolated dual CAN-bus telemetry, active thermal management, and rapid hot-swap locking.",
    specs: [
      { label: "Capacity", value: "48V 25Ah (1.2 kWh)" },
      { label: "Max Discharge", value: "60A continuous" },
    ],
    highlight: "Primary power source for WALRUS 2.0.",
    technologies: ["Altium Designer", "STM32", "LiFePO4", "Thermal FEA"],
  },
];

const STATUS_COLORS: Record<ProjectItem["status"], string> = {
  DEPLOYED:    "text-emerald-400 bg-emerald-400/10 border-emerald-400/25",
  TESTING:     "text-amber-400  bg-amber-400/10  border-amber-400/25",
  DEVELOPMENT: "text-sky-400    bg-sky-400/10    border-sky-400/25",
  ARCHIVED:    "text-zinc-500   bg-zinc-500/10   border-zinc-500/25",
};

const FILTER_OPTIONS = [
  { id: "ALL", label: "All" },
  { id: "UGV",      label: "Ground" },
  { id: "UAV",      label: "Aerial" },
  { id: "AI",       label: "AI Vision" },
  { id: "HARDWARE", label: "Hardware" },
];

/* ─────────────────────────────────────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────────────────────────────────────── */

function StatusPill({ status }: { status: ProjectItem["status"] }) {
  const label =
    status === "DEPLOYED"    ? "Deployed"    :
    status === "TESTING"     ? "In Testing"  :
    status === "DEVELOPMENT" ? "In Dev"      : "Archived";
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide ${STATUS_COLORS[status]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}

/* Hero product card — Apple-style, image-first */
function HeroCard({
  project,
  reversed,
  onOpen,
}: {
  project: ProjectItem;
  reversed: boolean;
  onOpen: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 0.9, 0.26, 1] }}
      className="relative w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0e0b]"
    >
      <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}>

        {/* ── IMAGE PANEL ── */}
        <div className="relative lg:w-[55%] min-h-[340px] lg:min-h-[520px] bg-[#f5f3ee] overflow-hidden flex items-center justify-center">
          <Image
            src={project.image!}
            alt={project.title}
            fill
            className="object-contain p-8 lg:p-12"
            sizes="(max-width: 1024px) 100vw, 55vw"
            priority
          />
          {/* Bottom fade into the content panel */}
          <div
            className={`absolute inset-0 pointer-events-none hidden lg:block
              ${reversed
                ? "bg-gradient-to-l from-[#0a0e0b] via-transparent to-transparent"
                : "bg-gradient-to-r from-[#0a0e0b] via-transparent to-transparent"
              }
            `}
          />
          <div className="absolute inset-0 pointer-events-none lg:hidden bg-gradient-to-b from-transparent via-transparent to-[#0a0e0b]" />
        </div>

        {/* ── INFO PANEL ── */}
        <div className="flex flex-col justify-center lg:w-[45%] px-8 py-10 lg:px-12 lg:py-14 gap-6">

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.28em] text-zinc-500">{project.code}</span>
            <span className="h-px w-8 bg-zinc-700" />
            <StatusPill status={project.status} />
          </div>

          {/* Title */}
          <div>
            <h2 className="text-[38px] lg:text-[48px] font-bold tracking-[-0.03em] leading-none text-white">
              {project.title}
            </h2>
            <p className="mt-2 text-[15px] text-zinc-400 font-light tracking-wide">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-[14px] leading-[1.8] text-zinc-300/80 max-w-[48ch]">
            {project.desc}
          </p>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-px border border-white/[0.06] rounded-xl overflow-hidden bg-white/[0.04]">
            {project.specs.map((s, i) => (
              <div
                key={s.label}
                className={`px-4 py-3 bg-[#0d1210] ${
                  i < project.specs.length - 2 ? "border-b border-white/[0.05]" : ""
                } ${i % 2 === 0 ? "border-r border-white/[0.05]" : ""}`}
              >
                <div className="text-[9px] tracking-[0.18em] text-zinc-500 uppercase mb-1">{s.label}</div>
                <div className="text-[13px] font-semibold text-zinc-100">{s.value}</div>
              </div>
            ))}
          </div>

          {/* Highlight callout */}
          <p className="text-[12px] text-zinc-500 border-l-2 border-zinc-700 pl-3 leading-relaxed">
            {project.highlight}
          </p>

          {/* Tech stack + CTA */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/[0.05]">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-0.5 text-[10px] text-zinc-400 tracking-wide"
                >
                  {t}
                </span>
              ))}
            </div>
            <button
              onClick={onOpen}
              className="group flex items-center gap-1.5 text-[12px] text-zinc-400 hover:text-white transition-colors tracking-wide"
            >
              Full specs
              <IconChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* Compact project card — for non-hero items */
function CompactCard({ project, onOpen }: { project: ProjectItem; onOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 0.9, 0.26, 1] }}
      className="group flex flex-col rounded-2xl border border-white/[0.06] bg-[#0a0e0b] overflow-hidden hover:border-white/[0.12] transition-colors duration-500"
    >
      <div className="flex flex-col flex-1 p-6 gap-5">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3">
          <span className="font-mono text-[10px] tracking-[0.22em] text-zinc-600">{project.code}</span>
          <StatusPill status={project.status} />
        </div>

        {/* Title */}
        <div>
          <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-white leading-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-[12px] text-zinc-500 font-light">{project.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-[13px] leading-[1.75] text-zinc-400 flex-1">
          {project.desc}
        </p>

        {/* Key specs (just 2) */}
        <div className="grid grid-cols-2 gap-px border border-white/[0.05] rounded-lg overflow-hidden bg-white/[0.03]">
          {project.specs.map((s, i) => (
            <div
              key={s.label}
              className={`px-3 py-2.5 bg-[#0d1210] ${i === 0 ? "border-r border-white/[0.05]" : ""}`}
            >
              <div className="text-[9px] tracking-[0.16em] text-zinc-600 uppercase mb-0.5">{s.label}</div>
              <div className="text-[12px] font-semibold text-zinc-200">{s.value}</div>
            </div>
          ))}
        </div>

        {/* Highlight */}
        <p className="text-[11px] text-zinc-600 border-l border-zinc-700 pl-2.5 leading-relaxed">
          {project.highlight}
        </p>
      </div>

      {/* Card footer */}
      <div className="flex items-center justify-between px-6 py-3.5 border-t border-white/[0.05] bg-white/[0.015]">
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 2).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/[0.06] px-2 py-0.5 text-[9px] text-zinc-500 tracking-wide"
            >
              {t}
            </span>
          ))}
        </div>
        <button
          onClick={onOpen}
          className="flex items-center gap-1 text-[11px] text-zinc-500 hover:text-white transition-colors"
        >
          Specs <IconArrowUpRight className="h-3 w-3" />
        </button>
      </div>
    </motion.div>
  );
}

/* Full-screen detail modal */
function DetailModal({
  project,
  onClose,
}: {
  project: ProjectItem;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/85 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0,  scale: 1 }}
        exit={{   opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 0.9, 0.26, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-t-2xl sm:rounded-2xl bg-[#0c100d] border border-white/[0.08] overflow-hidden max-h-[92vh] flex flex-col"
      >
        {/* Modal header */}
        <div className="flex items-start justify-between p-6 border-b border-white/[0.06]">
          <div>
            <span className="font-mono text-[10px] tracking-[0.24em] text-zinc-600">{project.code}</span>
            <h2 className="mt-1 text-[24px] font-bold tracking-[-0.025em] text-white">{project.title}</h2>
            <p className="text-[13px] text-zinc-400 mt-0.5 font-light">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="mt-1 rounded-full p-2 text-zinc-500 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <IconX className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto overscroll-contain flex-1 p-6 space-y-6">
          {/* If hero, show image */}
          {project.image && (
            <div className="relative h-48 rounded-xl overflow-hidden bg-[#f5f3ee]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-4"
                sizes="640px"
              />
            </div>
          )}

          <p className="text-[14px] leading-[1.8] text-zinc-300">{project.desc}</p>

          {/* Status + category */}
          <div className="flex items-center gap-3">
            <StatusPill status={project.status} />
            <span className="font-mono text-[10px] tracking-widest text-zinc-600 uppercase">{project.category}</span>
          </div>

          {/* All specs */}
          <div>
            <h4 className="text-[11px] tracking-[0.22em] text-zinc-500 uppercase mb-3">Technical Specifications</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-white/[0.05] rounded-xl overflow-hidden bg-white/[0.03]">
              {project.specs.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-4 py-3 bg-[#0d1210]
                    ${i < project.specs.length - 2 ? "border-b border-white/[0.05]" : ""}
                    ${i % 2 === 0 ? "sm:border-r border-white/[0.05]" : ""}
                  `}
                >
                  <div className="text-[9px] tracking-[0.18em] text-zinc-500 uppercase mb-1">{s.label}</div>
                  <div className="text-[14px] font-semibold text-zinc-100">{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight */}
          <div className="border-l-2 border-zinc-700 pl-4">
            <p className="text-[13px] text-zinc-400 leading-relaxed">{project.highlight}</p>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="text-[11px] tracking-[0.22em] text-zinc-500 uppercase mb-3">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[12px] text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal footer */}
        <div className="p-4 border-t border-white/[0.06] bg-white/[0.02]">
          <button
            onClick={onClose}
            className="w-full rounded-xl bg-white text-black text-[13px] font-semibold py-3 hover:bg-zinc-100 transition-colors tracking-wide"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("ALL");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const heroes   = PROJECTS.filter((p) => p.hero);
  const rest     = PROJECTS.filter((p) => !p.hero);

  const visibleRest =
    filter === "ALL"
      ? rest
      : filter === "UGV" || filter === "UAV"
        ? [] // heroes already shown
        : rest.filter((p) => p.category === filter);

  const showHeroes =
    filter === "ALL" || filter === "UGV" || filter === "UAV";

  return (
    <>
      {/* ── FONT ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800&display=swap');
        html, body, * { font-family: 'Open Sans', system-ui, sans-serif; }
      `}</style>

      <main className="mx-auto max-w-[1360px] px-5 pt-10 pb-24 md:px-10 md:pt-14 space-y-8">

        {/* ── PAGE HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 border-b border-white/[0.06] pb-8"
        >
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.28em] text-zinc-600">
            <IconMinus className="h-3 w-3" />
            <span>04</span>
            <span className="h-px w-8 bg-zinc-700" />
            <span>PLATFORMS</span>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="text-[36px] md:text-[52px] font-bold tracking-[-0.035em] leading-none text-white">
                Defence Arsenal
              </h1>
              <p className="mt-3 max-w-[60ch] text-[14px] leading-relaxed text-zinc-400 font-light">
                Deployed unmanned platforms, aerial scouts, computer vision systems and military-grade hardware modules — engineered at MIT Manipal.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {FILTER_OPTIONS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`rounded-full border px-4 py-1.5 text-[12px] font-medium tracking-wide transition-all duration-200 ${
                    filter === tab.id
                      ? "border-white/20 bg-white text-black"
                      : "border-white/[0.08] bg-white/[0.04] text-zinc-400 hover:border-white/[0.16] hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── HERO PLATFORMS (WALRUS + AERIAL WING) ── */}
        {showHeroes && (
          <div className="space-y-6">
            {heroes
              .filter((p) =>
                filter === "ALL"
                  ? true
                  : filter === "UGV"
                    ? p.category === "UGV"
                    : filter === "UAV"
                      ? p.category === "UAV"
                      : true
              )
              .map((project, i) => (
                <HeroCard
                  key={project.code}
                  project={project}
                  reversed={i % 2 === 1}
                  onOpen={() => setSelectedProject(project)}
                />
              ))}
          </div>
        )}

        {/* ── DIVIDER (only when both sections present) ── */}
        {showHeroes && visibleRest.length > 0 && (
          <div className="flex items-center gap-4 pt-4">
            <span className="h-px flex-1 bg-white/[0.05]" />
            <span className="font-mono text-[10px] tracking-[0.24em] text-zinc-600">SYSTEMS</span>
            <span className="h-px flex-1 bg-white/[0.05]" />
          </div>
        )}

        {/* ── COMPACT PROJECT GRID ── */}
        {visibleRest.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleRest.map((project) => (
              <CompactCard
                key={project.code}
                project={project}
                onOpen={() => setSelectedProject(project)}
              />
            ))}
          </div>
        )}

        {/* ── EMPTY STATE ── */}
        {!showHeroes && visibleRest.length === 0 && (
          <div className="py-24 text-center text-zinc-600 text-[14px]">
            No platforms in this category yet.
          </div>
        )}

      </main>

      {/* ── MODAL ── */}
      <AnimatePresence>
        {selectedProject && (
          <DetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}