"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ClickSpark from "@/components/ui/ClickSpark";
import { SiteDock } from "@/components/site-dock";
import { useTheme } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { DefenseBackground } from "@/components/defense-background";
import { IconRadio, IconShieldCheck, IconCpu, IconBrandGithub, IconBrandInstagram } from "@tabler/icons-react";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const pathname = usePathname();

  const [militaryTime, setMilitaryTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istStr = now.toLocaleTimeString("en-GB", {
        timeZone: "Asia/Kolkata",
        hour12: false,
      });
      setMilitaryTime(`${istStr} IST`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: "ARSENAL", href: "/projects" },
    { label: "SUBSYSTEMS", href: "/subsystems" },
    { label: "PERSONNEL", href: "/team" },
    { label: "COMMS", href: "/contact" },
  ];

  return (
    <ClickSpark sparkColor={isLight ? "#575a33" : "#c2b8a3"} sparkSize={10} sparkRadius={18} sparkCount={8} duration={420}>
      <div className="relative min-h-screen overflow-x-clip text-[#e8e6dc] selection:bg-[#8b8f6b]/30">
        {/* Defense Robotics SVG Parallax — global background for everything */}
        <DefenseBackground />

        {/* Tactical Header Strip */}
        <header className="sticky top-0 z-40 border-b border-[#c2b8a3]/12 bg-[#070a07]/85 backdrop-blur-2xl">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3.5 md:px-8">
            {/* Left Brand Badge */}
            <Link href="/" className="group flex items-center gap-3.5 focus:outline-none">
              <div className="relative grid h-9 w-9 place-items-center rounded-lg border border-[#c2b8a3]/25 bg-[#111410] font-mono text-[11px] font-bold tracking-widest text-[#c2b8a3] transition-all group-hover:border-emerald-500/50 group-hover:text-emerald-300">
                <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                RVD
              </div>
              <div className="leading-tight">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[13px] font-bold tracking-[0.26em] text-[#e8e6dc] group-hover:text-emerald-300 transition-colors">
                    R.U.G.V.E.D
                  </span>
                  <span className="hidden lg:inline-flex rounded border border-[#8b8f6b]/20 bg-[#8b8f6b]/10 px-1.5 py-0.2 font-mono text-[9px] tracking-widest text-[#8b8f6b]">
                    DEFENCE TECH
                  </span>
                </div>
                <div className="hidden font-mono text-[10px] tracking-[0.16em] text-[#8b8f6b] sm:block">
                  MIT MANIPAL • EST. 2016 • STUDENT DEFENCE ROBOTICS
                </div>
              </div>
            </Link>

            {/* Center Desktop Quick Links */}
            <nav className="hidden md:flex items-center gap-1 border border-[#c2b8a3]/12 bg-black/30 rounded-full px-3 py-1 font-mono text-[11px] tracking-widest text-[#8b8f6b]">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-3 py-1 transition-all ${
                      isActive
                        ? "bg-[#c2b8a3]/15 text-[#f2efe6] font-bold border border-[#c2b8a3]/20"
                        : "hover:text-[#c2b8a3]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Telemetry & Controls */}
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-widest text-[#8b8f6b]">
              <div className="hidden sm:flex items-center gap-2 border border-[#c2b8a3]/15 bg-black/40 rounded-lg px-2.5 py-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                <span className="text-[#e8e6dc] font-semibold">{militaryTime || "LIVE"}</span>
              </div>
              <span className="hidden lg:inline-block border border-[#8b8f6b]/20 bg-[#111410] px-2.5 py-1 rounded">
                13.35°N 74.79°E
              </span>
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Page Content Container */}
        <div className="relative z-10 pb-32">{children}</div>

        {/* Refined Tactical Footer */}
        <footer className="relative z-10 mx-auto max-w-[1440px] px-6 pb-28 md:px-8">
          <div className="border-t border-[#c2b8a3]/12 pt-8 font-mono text-[11px] tracking-[0.16em] text-[#8b8f6b]">
            <div className="grid gap-6 md:grid-cols-3 md:items-center">
              <div>
                <div className="font-bold text-[#e8e6dc]">R.U.G.V.E.D SYSTEMS — MIT MANIPAL</div>
                <div className="mt-1 text-[10px]">Remote Unmanned Ground Vehicular Electronic Defence • Est. 2016</div>
              </div>

              <div className="flex justify-start md:justify-center items-center gap-4 text-[11px]">
                <a
                  href="https://github.com/RUGVED-Systems-MIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#e8e6dc] transition-colors"
                >
                  <IconBrandGithub className="h-4 w-4" /> GITHUB
                </a>
                <span>•</span>
                <a
                  href="https://www.instagram.com/rugved_systems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#e8e6dc] transition-colors"
                >
                  <IconBrandInstagram className="h-4 w-4" /> INSTAGRAM
                </a>
              </div>

              <div className="text-left md:text-right text-[10px]">
                <div>UNCLASSIFIED ARCHIVE • ALL RIGHTS RESERVED © 2026</div>
                <div className="mt-0.5 text-emerald-400">STATUS // 100% OPERATIONAL</div>
              </div>
            </div>
          </div>
        </footer>

        {/* Floating Dock Navigation */}
        <SiteDock />
      </div>
    </ClickSpark>
  );
}

export default SiteShell;
