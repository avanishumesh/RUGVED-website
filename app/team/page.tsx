"use client";
import React, { useState } from "react";
import TacticalCard from "@/components/ui/TacticalCard";
import {
  IconUsersGroup,
  IconShieldLock,
  IconKey,
  IconMinus,
  IconUserCheck,
  IconRadio,
  IconArrowUpRight,
  IconCheck,
} from "@tabler/icons-react";
import Link from "next/link";

interface SquadUnit {
  id: string;
  division: string;
  code: string;
  headcount: string;
  clearanceRequired: "LEVEL 1" | "LEVEL 2" | "LEVEL 3" | "LEVEL 4";
  focus: string;
  status: "ACTIVE OPERATIONAL" | "RECRUITING" | "SEALED";
}

const SQUAD_UNITS: SquadUnit[] = [
  {
    id: "U-01",
    division: "THE BOARD",
    code: "CMD-SQUAD",
    headcount: "4 Officers",
    clearanceRequired: "LEVEL 4",
    focus: "Strategic direction, competition targets & defence liaison.",
    status: "ACTIVE OPERATIONAL",
  },
  {
    id: "U-02",
    division: "AI & ROBOTICS",
    code: "NEURAL-SQUAD",
    headcount: "8 Specialists",
    clearanceRequired: "LEVEL 3",
    focus: "3D SLAM, LiDAR perception, PyTorch edge AI & ROS2 autonomy.",
    status: "RECRUITING",
  },
  {
    id: "U-03",
    division: "ELECTRONICS & HARDWARE",
    code: "CIRCUIT-SQUAD",
    headcount: "7 Engineers",
    clearanceRequired: "LEVEL 3",
    focus: "FPGA signal processing, multi-layer PCBs & 48V power BMS.",
    status: "RECRUITING",
  },
  {
    id: "U-04",
    division: "MECHANICAL & CHASSIS",
    code: "FORGE-SQUAD",
    headcount: "6 Designers",
    clearanceRequired: "LEVEL 2",
    focus: "SolidWorks CAD, FEA stress modeling & precision CNC fabrication.",
    status: "ACTIVE OPERATIONAL",
  },
  {
    id: "U-05",
    division: "RESEARCH & PATENTS",
    code: "LAB-SQUAD",
    headcount: "4 Researchers",
    clearanceRequired: "LEVEL 3",
    focus: "IEEE publications, mathematical state estimation & IP filings.",
    status: "ACTIVE OPERATIONAL",
  },
  {
    id: "U-06",
    division: "MANAGEMENT & OPS",
    code: "OPS-SQUAD",
    headcount: "5 Coordinators",
    clearanceRequired: "LEVEL 1",
    focus: "Supply chain, sponsorship partnerships & media outreach.",
    status: "RECRUITING",
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

export default function TeamPage() {
  const [clearance, setClearance] = useState<"LEVEL 1" | "LEVEL 2" | "LEVEL 3" | "LEVEL 4">("LEVEL 2");

  return (
    <main className="mx-auto max-w-[1440px] px-6 pt-8 md:px-8 md:pt-10 space-y-12">
      <SectionLabel k="06" label="PERSONNEL &amp; SQUADS" />

      {/* Header Banner */}
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[#c2b8a3]/12 pb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-amber-400">
            <IconShieldLock className="h-4 w-4" />
            <span>SECURITY ENCLAVE // POLICY DIRECTIVE</span>
          </div>
          <h1 className="mt-2 font-mono text-[32px] font-black tracking-tight text-[#e8e6dc] md:text-[42px] leading-none">
            PERSONNEL // SQUAD MATRIX
          </h1>
          <p className="mt-3 max-w-[70ch] font-mono text-[13px] leading-relaxed text-[#8b8f6b]">
            Per institutional defence policy, individual personal identifiers are protected behind security enclave protocols. Below is the tactical squad matrix and headcount allocation across MIT Manipal.
          </p>
        </div>

        {/* Security Clearance Simulator */}
        <div className="rounded-xl border border-[#c2b8a3]/20 bg-[#111410] p-4 font-mono text-[11px]">
          <div className="text-[#8b8f6b] text-[10px] tracking-widest mb-2 flex items-center gap-1.5">
            <IconKey className="h-3.5 w-3.5 text-amber-400" /> SIMULATE CLEARANCE:
          </div>
          <div className="flex gap-1.5">
            {(["LEVEL 1", "LEVEL 2", "LEVEL 3", "LEVEL 4"] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setClearance(lvl)}
                className={`rounded border px-2.5 py-1 transition-all ${
                  clearance === lvl
                    ? "border-amber-400 bg-amber-500/20 text-amber-300 font-bold"
                    : "border-[#c2b8a3]/15 bg-black/40 text-[#8b8f6b] hover:text-[#c2b8a3]"
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Squad Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SQUAD_UNITS.map((unit) => {
          const isRecruiting = unit.status === "RECRUITING";
          return (
            <TacticalCard
              key={unit.id}
              badge={unit.clearanceRequired}
              className="p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[#8b8f6b]">
                  <span className="font-bold text-emerald-400">{unit.id}</span>
                  <span>{unit.code}</span>
                </div>

                <h3 className="mt-3 font-mono text-[22px] font-bold tracking-tight text-[#e8e6dc]">
                  {unit.division}
                </h3>

                <div className="mt-2 flex items-center gap-2 font-mono text-[11px] text-[#c2b8a3]">
                  <IconUsersGroup className="h-4 w-4 text-[#8b8f6b]" />
                  <span>STRENGTH: <span className="text-[#e8e6dc] font-bold">{unit.headcount}</span></span>
                </div>

                <p className="mt-4 font-mono text-[13px] leading-relaxed text-[#c2b8a3]/90">
                  {unit.focus}
                </p>
              </div>

              <div className="mt-6 border-t border-[#c2b8a3]/10 pt-4 flex items-center justify-between font-mono text-[11px]">
                <span
                  className={`inline-flex items-center gap-1.5 rounded border px-2 py-0.5 text-[10px] font-bold ${
                    isRecruiting
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                      : "border-[#c2b8a3]/20 bg-black/30 text-[#8b8f6b]"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${isRecruiting ? "bg-emerald-400 animate-pulse" : "bg-[#8b8f6b]"}`} />
                  {unit.status}
                </span>

                {isRecruiting && (
                  <Link
                    href="/contact"
                    className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    APPLY <IconArrowUpRight className="h-3 w-3" />
                  </Link>
                )}
              </div>
            </TacticalCard>
          );
        })}
      </div>

      {/* Recruitment Callout Banner */}
      <TacticalCard className="p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-bold text-emerald-300">
              <IconUserCheck className="h-4 w-4" /> RECRUITMENT CALL // MIT MANIPAL STUDENTS
            </div>
            <h2 className="mt-3 font-mono text-[24px] font-bold text-[#e8e6dc] md:text-[28px]">
              Join the Defence Robotics Initiative
            </h2>
            <p className="mt-2 font-mono text-[13px] leading-relaxed text-[#8b8f6b]">
              We recruit passionate student engineers across Electronics, Mechanical, Computer Science, and Data Science. Hands-on experience with ROS2, NVIDIA Jetson, Altium PCB design, and CNC fabrication.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:justify-end gap-3 font-mono text-[12px]">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c2b8a3] px-6 py-3.5 font-bold text-[#111410] hover:bg-[#ddd5c0] transition-colors"
            >
              TRANSMIT APPLICATION <IconArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </TacticalCard>
    </main>
  );
}
