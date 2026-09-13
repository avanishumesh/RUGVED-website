"use client";
import React, { useState } from "react";
import TacticalCard from "@/components/ui/TacticalCard";
import {
  IconShieldCheck,
  IconSettings,
  IconCircuitCapacitor,
  IconSearch,
  IconRobot,
  IconCpu,
  IconMinus,
  IconArrowRight,
  IconCheck,
  IconTerminal,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

interface Division {
  code: string;
  short: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  leadRole: string;
  summary: string;
  responsibilities: string[];
  techStack: string[];
  deliverables: string[];
}

const DIVISIONS: Division[] = [
  {
    code: "S-01",
    short: "TB",
    title: "The Board",
    category: "COMMAND // STRATEGY",
    icon: IconShieldCheck,
    leadRole: "Team Lead & Technical Directors",
    summary:
      "The strategic apex of RUGVED Systems. Oversees inter-division synchronization, long-term technical roadmaps, competition targets, defence expo representation, and faculty/advisory liaison.",
    responsibilities: [
      "Strategic mission alignment and competition planning",
      "Resource allocation, safety compliance, and defence standards",
      "Final sign-off on hardware revisions and patent submissions",
    ],
    techStack: ["Mission Planner", "Notion", "Git Project Management", "Defence Protocols"],
    deliverables: ["Annual Strategic Roadmap", "Defence Expo Dossiers", "System Architecture Specs"],
  },
  {
    code: "S-02",
    short: "MG",
    title: "Management & Operations",
    category: "OPERATIONS // LOGISTICS",
    icon: IconSettings,
    leadRole: "Operations & PR Leads",
    summary:
      "Controls timelines, procurement chains, industry sponsorships, financial budgeting, and public outreach to keep our engineering cycles frictionless.",
    responsibilities: [
      "Component procurement & inventory supply-chain management",
      "Industrial sponsorship acquisition and corporate partnerships",
      "Media, public relations, and institutional documentation",
    ],
    techStack: ["Supply Chain Logistics", "Sponsor CRM", "Financial Modeling", "PR & Outreach"],
    deliverables: ["Sponsorship Pitches", "Budget Audits", "Media Campaigns"],
  },
  {
    code: "S-03",
    short: "EL",
    title: "Electronics & Embedded Hardware",
    category: "HARDWARE // EMBEDDED",
    icon: IconCircuitCapacitor,
    leadRole: "Electronics Head & Firmware Engineers",
    summary:
      "The nervous system and power backbone of our robotic platforms. Engineers custom multi-layer PCBs, high-current power distribution, CAN bus telemetry, and real-time microcontroller firmware.",
    responsibilities: [
      "Multi-layer high-speed PCB schematic & layout design",
      "48V LiFePO4 battery management system (BMS) integration",
      "Sensor interface routing (CAN 2.0B, RS485, UART, SPI, I2C)",
      "FPGA gunshot acoustic sensor signal processing",
    ],
    techStack: ["Altium Designer", "STM32 / ARM Cortex", "Xilinx Vivado", "CANoe", "KiCad"],
    deliverables: ["Custom Motor Drivers", "FPGA Acoustic Board", "Redundant BMS Module"],
  },
  {
    code: "S-04",
    short: "RD",
    title: "Research & Applied Innovation",
    category: "SCIENCE // INNOVATION",
    icon: IconSearch,
    leadRole: "Research Director & Paper Authors",
    summary:
      "Conducts cutting-edge scientific exploration into robotic state estimation, terrain classification, and novel sensor fusion algorithms, converting lab breakthroughs into peer-reviewed papers and patents.",
    responsibilities: [
      "Literature review of state-of-the-art military robotics",
      "Authoring and publishing papers in IEEE, ICRA, and Elsevier",
      "Drafting intellectual property patents for proprietary navigation AI",
    ],
    techStack: ["LaTeX", "MATLAB", "Python", "IEEE Xplore", "Gazebo Sim"],
    deliverables: ["Peer-Reviewed Papers", "Patent Filings", "Simulation Benchmarks"],
  },
  {
    code: "S-05",
    short: "AR",
    title: "AI & Autonomous Robotics",
    category: "SOFTWARE // AUTONOMY",
    icon: IconRobot,
    leadRole: "Autonomy & Computer Vision Leads",
    summary:
      "The cognitive brain of our autonomous ground vehicles. Implements 3D SLAM, obstacle segmentation, deep learning perception, edge inference on NVIDIA Jetson, and reinforcement learning pathfinding.",
    responsibilities: [
      "ROS2 Humble real-time node architecture & sensor fusion",
      "3D LiDAR SLAM (RTAB-Map / Fast-LIO) and point cloud filtering",
      "Terrain trafficability deep neural networks (YOLOv10 / PyTorch)",
      "Dynamic obstacle avoidance and self-recovery behaviors",
    ],
    techStack: ["ROS2 Humble", "NVIDIA Jetson / TensorRT", "PyTorch", "OpenCV", "C++20", "CUDA"],
    deliverables: ["Autonomous Nav Stack", "Real-Time 3D SLAM", "Computer Vision Models"],
  },
  {
    code: "S-06",
    short: "ME",
    title: "Mechanical & Structural Design",
    category: "ENGINEERING // CHASSIS",
    icon: IconCpu,
    leadRole: "Mechanical Lead & CAD Specialists",
    summary:
      "Engineers the physical armor, high-torque dual-track drivetrains, modular payload mounts, and environmental sealing to ensure our platforms survive extreme terrain and heavy impact.",
    responsibilities: [
      "3D parametric CAD modeling in SolidWorks & Autodesk Inventor",
      "Finite Element Analysis (FEA) for structural stress and shock load",
      "CNC milling, waterjet cutting, and precision TIG welding",
      "IP67 environmental seal design for water and dust ingress",
    ],
    techStack: ["SolidWorks", "ANSYS FEA", "Fusion 360", "CNC Milling", "3D Printing"],
    deliverables: ["All-Terrain Track Assembly", "Armored Chassis", "Modular Payload Bays"],
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

export default function SubsystemsPage() {
  const [activeCode, setActiveCode] = useState<string>("S-05");
  const activeDiv = DIVISIONS.find((d) => d.code === activeCode) || DIVISIONS[0];
  const ActiveIcon = activeDiv.icon;

  return (
    <main className="mx-auto max-w-[1440px] px-6 pt-8 md:px-8 md:pt-10 space-y-12">
      <SectionLabel k="05" label="SUBSYSTEMS ARCHITECTURE" />

      {/* Hero Header with Background Ripple Integration */}
      <div className="relative overflow-hidden rounded-2xl border border-[#c2b8a3]/15 bg-[#0e110e]/80 backdrop-blur-2xl p-8 md:p-12 shadow-2xl">
        <div className="pointer-events-none absolute inset-0 opacity-25">
         
        </div>

        <div className="relative z-10">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h1 className="font-mono text-[32px] font-black tracking-tight text-[#e8e6dc] md:text-[44px] leading-none">
              SIX DIVISIONS // ONE MISSION
            </h1>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-bold text-emerald-300">
              ● INTER-DIVISION HARMONY
            </span>
          </div>

          <p className="mt-4 max-w-[72ch] font-mono text-[13px] md:text-[14px] leading-relaxed text-[#8b8f6b]">
            Every RUGVED robotic platform is born from seamless interdisciplinary coordination across 6 core technical divisions — from structural mechanical engineering to deep neural autonomy and real-time electronics.
          </p>
        </div>
      </div>

      {/* Interactive Command Center: Division Switcher + Deep Inspector */}
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1.3fr]">
        {/* Left: Division Select Cards */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {DIVISIONS.map((d) => {
            const Icon = d.icon;
            const isSelected = d.code === activeCode;
            return (
              <button
                key={d.code}
                onClick={() => setActiveCode(d.code)}
                className={`group flex items-center justify-between rounded-xl border p-4 text-left font-mono transition-all ${
                  isSelected
                    ? "border-emerald-500/60 bg-[#141a13] shadow-[0_0_24px_rgba(16,185,129,0.25)] scale-[1.01]"
                    : "border-[#c2b8a3]/12 bg-[#0e120e]/80 hover:border-[#c2b8a3]/30 hover:bg-[#111611]"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-colors ${
                      isSelected
                        ? "border-emerald-400 bg-emerald-500/20 text-emerald-300"
                        : "border-[#c2b8a3]/20 bg-black/40 text-[#c2b8a3] group-hover:border-[#c2b8a3]/40"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-[#8b8f6b]">{d.code}</span>
                      <span className="text-[10px] text-[#8b8f6b]/70">// {d.short}</span>
                    </div>
                    <div
                      className={`text-[15px] font-bold tracking-wide transition-colors ${
                        isSelected ? "text-[#f2efe6]" : "text-[#c2b8a3] group-hover:text-white"
                      }`}
                    >
                      {d.title}
                    </div>
                  </div>
                </div>

                <IconArrowRight
                  className={`h-4 w-4 transition-transform ${
                    isSelected ? "text-emerald-400 translate-x-1" : "text-[#8b8f6b]/40"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right: Active Division Dossier & Specs */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDiv.code}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <TacticalCard
              badge={activeDiv.category}
              className="p-8 md:p-10 space-y-6 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/40 bg-emerald-500/15 text-emerald-300">
                    <ActiveIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] font-bold text-emerald-400">
                      {activeDiv.code} • {activeDiv.leadRole}
                    </div>
                    <h2 className="font-mono text-[26px] font-bold text-[#f2efe6] md:text-[30px]">
                      {activeDiv.title}
                    </h2>
                  </div>
                </div>

                <p className="mt-4 font-mono text-[14px] leading-relaxed text-[#c2b8a3]/90">
                  {activeDiv.summary}
                </p>

                {/* Core Responsibilities */}
                <div className="mt-6 space-y-3">
                  <div className="font-mono text-[11px] font-bold tracking-widest text-[#8b8f6b]">
                    PRIMARY TECHNICAL CHARGE:
                  </div>
                  <ul className="space-y-2 font-mono text-[13px] text-[#e8e6dc]">
                    {activeDiv.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-emerald-400 font-bold mt-0.5">▸</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Chips */}
                <div className="mt-6 space-y-2.5">
                  <div className="font-mono text-[11px] font-bold tracking-widest text-[#8b8f6b]">
                    TOOLCHAIN &amp; FRAMEWORKS:
                  </div>
                  <div className="flex flex-wrap gap-2 font-mono text-[11px]">
                    {activeDiv.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-[#c2b8a3]/20 bg-black/40 px-3 py-1 text-[#c2b8a3]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Deliverables Footer */}
              <div className="border-t border-[#c2b8a3]/12 pt-5">
                <div className="font-mono text-[11px] font-bold tracking-widest text-[#8b8f6b] mb-2">
                  KEY DIVISION DELIVERABLES:
                </div>
                <div className="flex flex-wrap gap-2 font-mono text-[11px]">
                  {activeDiv.deliverables.map((del) => (
                    <span
                      key={del}
                      className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-emerald-300"
                    >
                      ● {del}
                    </span>
                  ))}
                </div>
              </div>
            </TacticalCard>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Engineering Pipeline & Integration Flowchart */}
      <TacticalCard className="p-8 md:p-10 space-y-6">
        <div className="flex items-center justify-between border-b border-[#c2b8a3]/12 pb-4">
          <div>
            <h3 className="font-mono text-[18px] font-bold text-[#e8e6dc]">
              SYSTEM INTEGRATION PIPELINE
            </h3>
            <p className="mt-1 font-mono text-[12px] text-[#8b8f6b]">
              End-to-end development cycle from tactical problem formulation to battle-ready deployment.
            </p>
          </div>
          <span className="hidden sm:inline font-mono text-[10px] text-emerald-400 font-bold">
            CONTINUOUS INTEGRATION
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-4 font-mono text-[12px]">
          {[
            { step: "01", title: "RESEARCH & ALGO", desc: "Simulation in Gazebo, patent analysis & mathematical modeling." },
            { step: "02", title: "HARDWARE & CAD", desc: "SolidWorks stress FEA, custom PCB layout & CNC machining." },
            { step: "03", title: "AUTONOMY & ROS2", desc: "LiDAR SLAM tuning, PyTorch edge inference & motor control." },
            { step: "04", title: "FIELD DEPLOYMENT", desc: "Monsoon testing, obstacle clearance & national defence showcase." },
          ].map((pipe) => (
            <div
              key={pipe.step}
              className="rounded-lg border border-[#c2b8a3]/12 bg-black/40 p-4 transition-all hover:border-emerald-500/30"
            >
              <div className="text-emerald-400 font-bold text-[14px]">PHASE {pipe.step}</div>
              <div className="font-bold text-[#e8e6dc] text-[14px] mt-1">{pipe.title}</div>
              <p className="mt-2 text-[#8b8f6b] text-[11px] leading-relaxed">{pipe.desc}</p>
            </div>
          ))}
        </div>
      </TacticalCard>
    </main>
  );
}
