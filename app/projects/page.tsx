"use client";
import React, { useState } from "react";
import {
  IconTank,
  IconDrone,
  IconCpu,
  IconTarget,
  IconChevronRight,
  IconMinus,
  IconShield,
  IconBolt,
  IconLayersLinked,
  IconCheck,
  IconX,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import TacticalCard from "@/components/ui/TacticalCard";

interface ProjectItem {
  code: string;
  title: string;
  category: "UGV" | "UAV" | "AI" | "HARDWARE";
  status: "DEPLOYED" | "TESTING" | "DEVELOPMENT" | "ARCHIVED";
  tag: string;
  desc: string;
  specs: { label: string; value: string }[];
  highlight: string;
  technologies: string[];
  tall?: boolean;
}

const PROJECTS: ProjectItem[] = [
  {
    code: "P-01",
    title: "WALRUS 2.0 UGV",
    category: "UGV",
    status: "DEPLOYED",
    tag: "Autonomous • Modular • All-Terrain",
    desc: "Flagship military-grade unmanned ground platform featuring 360° solid-state LiDAR, real-time AI terrain classification, FPGA gunshot acoustic localization, and swappable mission payload interfaces.",
    specs: [
      { label: "AUTONOMY", value: "Level 4 (ROS2 + RTAB-Map)" },
      { label: "ENDURANCE", value: "6.5h Continuous Ops" },
      { label: "PAYLOAD", value: "45 kg Modular Quick-Swap" },
      { label: "CHASSIS", value: "6061-T6 Aluminum / IP67" },
    ],
    highlight: "Featured at National Defence Expo 2025 • Patent-Filed Terrain Navigation System",
    technologies: ["ROS2", "NVIDIA Jetson AGX", "LiDAR", "SolidWorks", "Xilinx Artix-7"],
    tall: true,
  },
  {
    code: "P-02",
    title: "WALRUS AERIAL WING (DRONE)",
    category: "UAV",
    status: "TESTING",
    tag: "Tethered UAV • 2KM Range • Live Feed",
    desc: "Agile, rapid-deploy quadcopter scout tethered directly to WALRUS for synchronized land-to-air reconnaissance, aerial thermal mapping, and beyond-line-of-sight signal relay.",
    specs: [
      { label: "OPERATIONAL RANGE", value: "2.0 km Encrypted Link" },
      { label: "CAMERA", value: "4K 60FPS + 640x512 Thermal" },
      { label: "FLIGHT TIME", value: "32 mins (Battery) / Infinite (Tether)" },
      { label: "LINK LATENCY", value: "< 28 ms Real-Time" },
    ],
    highlight: "Autonomous takeoff & landing from WALRUS top deck payload bay",
    technologies: ["PX4 Autopilot", "STM32", "5.8GHz Telemetry", "Thermal IR", "Carbon Fiber"],
    tall: false,
  },
  {
    code: "P-03",
    title: "TRAFFIC MUNDA (AI VISION)",
    category: "AI",
    status: "DEPLOYED",
    tag: "Computer Vision • CCTV • Flow AI",
    desc: "Autonomous smart urban traffic flow optimization engine utilizing edge CCTV camera feeds. Performs real-time multi-lane density computation, vehicle re-identification, and emergency vehicle pre-emption.",
    specs: [
      { label: "DETECTION ACCURACY", value: "98.4% mAP@50" },
      { label: "PROCESSING SPEED", value: "60 FPS Multi-Stream" },
      { label: "EDGE INFERENCE", value: "YOLOv10 DeepSORT" },
      { label: "INTEGRATION", value: "Smart City MQTT Broker" },
    ],
    highlight: "Top 5 at Smart India Hackathon (SIH 2024)",
    technologies: ["PyTorch", "OpenCV", "TensorRT", "CUDA", "FastAPI"],
    tall: false,
  },
  {
    code: "P-04",
    title: "FPGA GUNSHOT ACOUSTIC ARRAY",
    category: "HARDWARE",
    status: "DEPLOYED",
    tag: "Sub-Millisecond • Azimuth Localization",
    desc: "Hardware-accelerated muzzle blast and ballistic shockwave detection system using 4 high-bandwidth ultrasonic microphones with microsecond time-difference-of-arrival (TDOA) math.",
    specs: [
      { label: "SAMPLING RATE", value: "192 kHz Dedicated ADC" },
      { label: "TRIANGULATION ACC", value: "±1.8° Azimuth Angle" },
      { label: "RESPONSE TIME", value: "0.4 ms to Bus" },
      { label: "CHIPSET", value: "Xilinx Artix-7 FPGA" },
    ],
    highlight: "Integrated directly into WALRUS tactical battle-bus",
    technologies: ["Verilog", "Xilinx Vivado", "High-Speed PCB", "Altium"],
    tall: false,
  },
  {
    code: "P-05",
    title: "GESSURE INTERFACE",
    category: "AI",
    status: "ARCHIVED",
    tag: "Facial Auth • Touchless Gesture GUI",
    desc: "Contactless human-machine interface for tactical terminals allowing operators wearing protective gloves to authenticate via facial biometrics and navigate mission maps through hand gestures.",
    specs: [
      { label: "LATENCY", value: "16 ms End-to-End" },
      { label: "GESTURE SET", value: "12 Tactical Signals" },
      { label: "FRAMEWORK", value: "MediaPipe + ONNX" },
      { label: "PLATFORM", value: "Linux Embedded" },
    ],
    highlight: "1st Place Winner at Def Hacks Global 2.0",
    technologies: ["MediaPipe", "Python", "OpenCV", "C++"],
    tall: false,
  },
  {
    code: "P-06",
    title: "TACTICAL LiFePO4 POWER SYSTEM",
    category: "HARDWARE",
    status: "DEPLOYED",
    tag: "48V 1.2kWh • Isolated Redundant BMS",
    desc: "Custom high-density battery enclosure with integrated dual isolated CAN bus telemetry, active cell thermal management, and rapid hot-swap mechanical locking mechanism.",
    specs: [
      { label: "VOLTAGE / CAP", value: "48V 25Ah (1.2 kWh)" },
      { label: "MAX DISCHARGE", value: "60A Continuous" },
      { label: "ENCLOSURE", value: "IP67 Shockproof Aluminum" },
      { label: "COMMUNICATION", value: "Isolated CAN 2.0B" },
    ],
    highlight: "Powers WALRUS 2.0 UGV and high-draw motor controllers",
    technologies: ["Altium Designer", "STM32", "LiFePO4 Chemistry", "Thermal FEA"],
    tall: false,
  },
];

function SectionLabel({ k, label }: { k: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.32em] text-[#8b8f6b]">
      <span className="inline-flex items-center gap-1.5 rounded border border-[#8b8f6b]/20 bg-[#8b8f6b]/10 px-2.5 py-1 text-[#c2b8a3]">
        <IconMinus className="h-3 w-3" /> {k}
      </span>
      <span className="h-px w-12 bg-[#8b8f6b]/20 hidden sm:block" />
      <span className="font-bold tracking-[0.24em] text-[#e8e6dc]">{label}</span>
    </div>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("ALL");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    filter === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <main className="mx-auto max-w-[1440px] px-6 pt-8 md:px-8 md:pt-10 space-y-12">
      <SectionLabel k="04" label="ARSENAL &amp; PLATFORMS" />

      {/* Header Banner */}
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[#c2b8a3]/12 pb-6">
        <div>
          <h1 className="font-mono text-[32px] font-black tracking-tight text-[#e8e6dc] md:text-[42px] leading-none">
            DEFENCE ARSENAL // DEPLOYED &amp; ACTIVE
          </h1>
          <p className="mt-3 max-w-[70ch] font-mono text-[13px] leading-relaxed text-[#8b8f6b]">
            Explore our deployed unmanned ground vehicles, aerial scouts, tactical computer vision systems, and military-grade hardware modules engineered at MIT Manipal.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 font-mono text-[11px] tracking-wider">
          {[
            { id: "ALL", label: "ALL PLATFORMS" },
            { id: "UGV", label: "UGVs" },
            { id: "UAV", label: "AERIAL WING" },
            { id: "AI", label: "AI & VISION" },
            { id: "HARDWARE", label: "HARDWARE / FPGA" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`rounded-lg border px-3 py-1.5 transition-all ${
                filter === tab.id
                  ? "border-emerald-500/50 bg-emerald-500/15 text-emerald-300 font-bold shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                  : "border-[#c2b8a3]/15 bg-black/40 text-[#8b8f6b] hover:border-[#c2b8a3]/30 hover:text-[#c2b8a3]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, idx) => (
          <TacticalCard
            key={project.code}
            badge={project.status}
            className={`p-7 flex flex-col justify-between ${
              project.tall && filter === "ALL" ? "md:col-span-2 lg:col-span-2" : ""
            }`}
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[#8b8f6b]">
                <span className="font-bold text-emerald-400">{project.code}</span>
                <span>{project.category} DIVISION</span>
              </div>

              <h3 className="mt-3 font-mono text-[22px] font-bold tracking-tight text-[#e8e6dc]">
                {project.title}
              </h3>

              <div className="mt-2 inline-flex items-center gap-2 rounded border border-[#c2b8a3]/15 bg-black/30 px-2.5 py-1 font-mono text-[10px] tracking-wide text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {project.tag}
              </div>

              <p className="mt-4 font-mono text-[13px] leading-relaxed text-[#c2b8a3]/90">
                {project.desc}
              </p>

              {/* Highlight Callout */}
              <div className="mt-4 rounded border border-emerald-500/20 bg-emerald-500/5 p-2.5 font-mono text-[11px] text-emerald-300/90">
                ★ {project.highlight}
              </div>

              {/* Specs Table */}
              <div className="mt-5 grid grid-cols-2 gap-2 border-t border-[#c2b8a3]/10 pt-4 font-mono text-[11px]">
                {project.specs.map((s) => (
                  <div key={s.label} className="rounded border border-[#c2b8a3]/10 bg-black/30 p-2.5">
                    <div className="text-[9px] tracking-wider text-[#8b8f6b]">{s.label}</div>
                    <div className="font-bold text-[#e8e6dc] text-[12px] mt-0.5">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills & Modal Trigger */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#c2b8a3]/10 pt-4">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded border border-[#8b8f6b]/20 bg-[#8b8f6b]/10 px-2 py-0.5 font-mono text-[9px] text-[#c2b8a3]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="flex items-center gap-1 font-mono text-[11px] tracking-wider text-[#c2b8a3] hover:text-emerald-300 transition-colors"
              >
                VIEW FULL SPEC <IconArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </TacticalCard>
        ))}
      </div>

      {/* Technical Spec Sheet Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-[#c2b8a3]/25 bg-[#0e120e] p-6 md:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.9)]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute right-5 top-5 rounded-full border border-[#c2b8a3]/20 bg-black/40 p-1.5 text-[#c2b8a3] hover:text-white transition-colors"
              >
                <IconX className="h-5 w-5" />
              </button>

              <div className="font-mono text-[10px] tracking-widest text-[#8b8f6b]">
                SYSTEM DOSSIER // {selectedProject.code}
              </div>
              <h2 className="mt-1 font-mono text-[26px] font-bold text-[#f2efe6]">
                {selectedProject.title}
              </h2>

              <p className="mt-3 font-mono text-[13px] leading-relaxed text-[#c2b8a3]">
                {selectedProject.desc}
              </p>

              <div className="mt-5 space-y-3">
                <div className="font-mono text-[11px] tracking-wider text-[#8b8f6b]">
                  FULL TECHNICAL METRICS:
                </div>
                <div className="grid grid-cols-2 gap-3 font-mono">
                  {selectedProject.specs.map((s) => (
                    <div key={s.label} className="rounded-lg border border-[#c2b8a3]/15 bg-black/50 p-3">
                      <div className="text-[10px] text-[#8b8f6b]">{s.label}</div>
                      <div className="text-[14px] font-bold text-emerald-400 mt-1">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <div className="font-mono text-[11px] tracking-wider text-[#8b8f6b]">
                  TECHNOLOGY STACK:
                </div>
                <div className="mt-2 flex flex-wrap gap-2 font-mono text-[11px]">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-emerald-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg bg-[#c2b8a3] px-5 py-2 font-mono text-[12px] font-bold text-[#111410] hover:bg-[#ddd5c0] transition-colors"
                >
                  CLOSE DOSSIER
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
