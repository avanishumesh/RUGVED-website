"use client";
import React, { useState } from "react";
import {
  IconShieldCheck,
  IconSettings,
  IconCircuitCapacitor,
  IconSearch,
  IconRobot,
  IconCpu,
  IconCamera,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "@/components/theme-provider";

/* ─────────────────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────────────────── */
interface Division {
  code: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  leadRole: string;
  summary: string;
  deliverables: string[];
}

const DIVISIONS: Division[] = [
  {
    code: "S-01",
    title: "The Board",
    category: "Command & Strategy",
    icon: IconShieldCheck,
    leadRole: "Team Lead & Technical Directors",
    summary:
      "The strategic apex of RUGVED Systems. Oversees inter-division synchronization, long-term technical roadmaps, competition targets, defence expo representation, and faculty advisory liaison.",
    deliverables: ["Annual Strategic Roadmap", "Defence Expo Dossiers", "System Architecture Specs"],
  },
  {
    code: "S-04",
    title: "Research",
    category: "Science & Innovation",
    icon: IconSearch,
    leadRole: "Research Director & Paper Authors",
    summary:
      "Conducts cutting-edge scientific exploration into robotic state estimation, terrain classification, and novel sensor fusion algorithms, converting lab breakthroughs into peer-reviewed papers and patents.",
    deliverables: ["Peer-Reviewed Papers", "Patent Filings", "Simulation Benchmarks"],
  },
  {
    code: "S-05",
    title: "Ai and Robotics",
    category: "Software & Autonomy",
    icon: IconRobot,
    leadRole: "Autonomy & Computer Vision Leads",
    summary:
      "The cognitive brain of our autonomous ground vehicles. Implements 3D SLAM, obstacle segmentation, deep learning perception, edge inference on NVIDIA Jetson, and reinforcement learning pathfinding.",
    deliverables: ["Autonomous Nav Stack", "Real-Time 3D SLAM", "Computer Vision Models"],
  },
  {
    code: "S-02",
    title: "Management",
    category: "Operations & Logistics",
    icon: IconSettings,
    leadRole: "Operations & PR Leads",
    summary:
      "Controls timelines, procurement chains, industry sponsorships, financial budgeting, and public outreach to keep our engineering cycles frictionless.",
    deliverables: ["Sponsorship Pitches", "Budget Audits", "Media Campaigns"],
  },
  {
    code: "S-03",
    title: "Electronics",
    category: "Hardware & Embedded",
    icon: IconCircuitCapacitor,
    leadRole: "Electronics Head & Firmware Engineers",
    summary:
      "The nervous system and power backbone of our robotic platforms. Engineers custom multi-layer PCBs, high-current power distribution, CAN bus telemetry, and real-time microcontroller firmware.",
    deliverables: ["Custom Motor Drivers", "FPGA Acoustic Board", "Redundant BMS Module"],
  },
  {
    code: "S-06",
    title: "Mechanical",
    category: "Engineering & Chassis",
    icon: IconCpu,
    leadRole: "Mechanical Lead & CAD Specialists",
    summary:
      "Engineers the physical armor, high-torque dual-track drivetrains, modular payload mounts, and environmental sealing to ensure our platforms survive extreme terrain and heavy impact.",
    deliverables: ["All-Terrain Track Assembly", "Armored Chassis", "Modular Payload Bays"],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────────────────────────────────────────── */

export default function SubsystemsPage() {
  const [activeCode, setActiveCode] = useState<string>("S-01");
  const activeDiv = DIVISIONS.find((d) => d.code === activeCode) || DIVISIONS[0];
  const ActiveIcon = activeDiv.icon;
  
  const { theme } = useTheme();
  // Fallback to dark if undefined
  const isDark = theme === "dark" || !theme;

  // Theme configuration dictionaries
  const colors = {
    bg: isDark ? "bg-[#0a0c0a]" : "bg-[#f2efe9]",
    textPrimary: isDark ? "text-[#e2e8e0]" : "text-[#2d2a25]",
    textSecondary: isDark ? "text-[#8b9984]" : "text-[#7a7261]",
    
    // Layer 1 (Outer shell)
    layer1Bg: isDark ? "bg-[#101410]" : "bg-[#e8e4db]",
    layer1Border: isDark ? "border-[#1e261d]" : "border-[#d8d1c1]",
    
    // Layer 2 (Inner shell)
    layer2Bg: isDark ? "bg-[#151a14]" : "bg-[#dfdacd]",
    layer2Border: isDark ? "border-[#242d22]" : "border-[#c4bbac]",
    
    // Accents & Tabs
    tabActiveBg: isDark ? "bg-[#1c241b]" : "bg-[#d1c9b6]",
    tabActiveBorder: isDark ? "border-[#364534]" : "border-[#a3977c]",
    tabInactiveHover: isDark ? "hover:bg-[#121711]" : "hover:bg-[#e3dec8]",
    
    // Deliverables tags
    tagBg: isDark ? "bg-[#1a2119]" : "bg-[#d4cdbd]",
    tagBorder: isDark ? "border-[#2d3a2c]" : "border-[#bfb7a4]",
  };

  return (
    <>
      {/* ── GLOBAL FONT OVERRIDE: IBM PLEX SERIF ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
        html, body, * { font-family: 'IBM Plex Serif', serif; }
        
        /* Hide scrollbar for the horizontal tab row */
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <main className={`mx-auto max-w-[1360px] px-4 pt-6 pb-20 md:px-8 space-y-6 min-h-screen transition-colors duration-500 ${colors.bg}`}>
        
        {/* ── HEADER (Centered & Shifted Up) ── */}
        <div className="flex flex-col items-center justify-center space-y-2 pt-2 pb-2">
          <div className="flex items-center gap-3 tracking-[0.15em] uppercase text-[11px]">
            <span className={`inline-flex items-center px-3 py-1 font-semibold border ${colors.layer1Bg} ${colors.textSecondary} ${colors.layer1Border}`}>
              05
            </span>
            <span className={`font-semibold tracking-widest ${colors.textSecondary}`}>
              Organization Structure
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`text-[42px] md:text-[56px] font-bold leading-none tracking-tight ${colors.textPrimary}`}>
              SubSystems
            </h1>
          </motion.div>
        </div>

        {/* ── HORIZONTAL TAB ROW (Centered on Desktop) ── */}
        <div className="relative">
          <div className={`flex overflow-x-auto hide-scrollbar gap-2 pb-3 border-b md:justify-center ${colors.layer1Border}`}>
            {DIVISIONS.map((d) => {
              const isSelected = d.code === activeCode;
              return (
                <button
                  key={d.code}
                  onClick={() => setActiveCode(d.code)}
                  className={`flex shrink-0 items-center gap-2.5 px-4 py-2.5 transition-all duration-300 border ${
                    isSelected
                      ? `${colors.tabActiveBg} ${colors.textPrimary} ${colors.tabActiveBorder}`
                      : `border-transparent bg-transparent ${colors.textSecondary} ${colors.tabInactiveHover}`
                  }`}
                >
                  <span className="text-[14px] font-medium tracking-wide">
                    {d.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── ACTIVE DIVISION DOSSIER (Layered Matte Design) ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDiv.code}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className={`p-2.5 md:p-3.5 border ${colors.layer1Bg} ${colors.layer1Border}`}
          >
            {/* Inner Shell Layer */}
            <div className={`border overflow-hidden flex flex-col ${colors.layer2Bg} ${colors.layer2Border}`}>
              
              {/* Header block */}
              <div className={`p-6 md:p-8 border-b flex flex-col md:flex-row md:items-center justify-between gap-4 ${colors.layer2Border}`}>
                <div className="flex items-center gap-5">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center border ${colors.layer1Bg} ${colors.textPrimary} ${colors.layer1Border}`}>
                    <ActiveIcon className="h-7 w-7 opacity-80" />
                  </div>
                  <div>
                    <div className={`text-[11px] tracking-widest uppercase mb-1 font-medium ${colors.textSecondary}`}>
                      {activeDiv.code} / {activeDiv.leadRole}
                    </div>
                    <h2 className={`text-[28px] md:text-[36px] font-bold leading-none ${colors.textPrimary}`}>
                      {activeDiv.title}
                    </h2>
                  </div>
                </div>
                <div className={`px-4 py-2 text-[12px] border shrink-0 tracking-wide font-medium ${colors.layer1Bg} ${colors.textSecondary} ${colors.layer1Border}`}>
                  {activeDiv.category}
                </div>
              </div>

              {/* Grid Content: Image Left, Text Right */}
              <div className="grid lg:grid-cols-[1.2fr_1fr] divide-y lg:divide-y-0 lg:divide-x divide-solid">
                
                {/* ── PHOTO PLACEHOLDER ── */}
                <div className={`w-full min-h-[300px] lg:min-h-[440px] flex flex-col items-center justify-center group transition-colors ${colors.layer1Bg} ${colors.layer1Border}`}>
                  <IconCamera className={`h-8 w-8 mb-3 opacity-40 group-hover:opacity-80 transition-opacity ${colors.textSecondary}`} />
                  <p className={`text-sm tracking-wide font-light ${colors.textSecondary}`}>
                    Reserved for {activeDiv.title} Division Photos
                  </p>
                </div>

                {/* ── TEXT & DELIVERABLES ── */}
                <div className={`p-8 lg:p-10 flex flex-col justify-center space-y-10 ${colors.layer1Border}`}>
                  
                  {/* Summary */}
                  <div className="space-y-4">
                    <div className={`text-[11px] uppercase tracking-[0.2em] font-bold ${colors.textSecondary}`}>
                      Operational Summary
                    </div>
                    <p className={`text-[17px] md:text-[19px] leading-relaxed font-light ${colors.textPrimary}`}>
                      {activeDiv.summary}
                    </p>
                  </div>

                  {/* Deliverables (Tags) */}
                  <div className="space-y-4 pt-4 border-t border-dashed" style={{ borderColor: 'inherit' }}>
                    <div className={`text-[11px] uppercase tracking-[0.2em] font-bold ${colors.textSecondary}`}>
                      Key Deliverables
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {activeDiv.deliverables.map((del) => (
                        <span
                          key={del}
                          className={`border px-3.5 py-1.5 text-[13px] font-medium ${colors.tagBg} ${colors.textPrimary} ${colors.tagBorder}`}
                        >
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </main>
    </>
  );
}