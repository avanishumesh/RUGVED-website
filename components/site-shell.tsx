"use client";
import React from "react";
import MoltenMetal from "@/components/ui/MoltenMetal";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import ClickSpark from "@/components/ui/ClickSpark";
import { SiteDock } from "@/components/site-dock";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <ClickSpark sparkColor="#c2b8a3" sparkSize={10} sparkRadius={18} sparkCount={8} duration={420}>
      <div className="relative min-h-screen overflow-x-clip bg-[#070a07] text-[#e8e6dc] selection:bg-[#8b8f6b]/30">
        {/* Tactical background stack - fixed global */}
        <div className="pointer-events-none fixed inset-0">
          <MoltenMetal
            color1="#070a07"
            color2="#1a1d14"
            color3="#3d4030"
            speed={0.22}
            scale={3.2}
            detail={3}
            glow={1.1}
            coreSize={0.06}
            swirl={0.6}
            fold={-0.15}
            blackPoint={0.18}
            brightness={0.85}
            grain
            grainIntensity={0.06}
            mouseInteraction
            mouseStrength={0.18}
            opacity={0.9}
          />
        </div>
        <div className="pointer-events-none fixed inset-0 opacity-[0.9]">
          <DottedGlowBackground
            gap={18}
            radius={1.1}
            color="rgba(139,143,107,0.55)"
            glowColor="rgba(194,184,163,0.95)"
            opacity={0.42}
            backgroundOpacity={0}
            speedMin={0.25}
            speedMax={0.9}
            speedScale={0.7}
          />
        </div>
        <div
          className="pointer-events-none fixed inset-0 opacity-[0.04] mix-blend-screen"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent 0 2px, #c2b8a3 2px 3px), repeating-linear-gradient(90deg, transparent 0 40px, rgba(139,143,107,0.5) 40px 41px)`,
          }}
        />

        {/* Minimal brand strip - dock is the nav */}
        <div className="relative z-20 border-b border-[#c2b8a3]/10 bg-[#070a07]/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3 md:px-6">
            <div className="flex items-center gap-3">
              <div className="grid h-8 w-8 place-items-center border border-[#c2b8a3]/20 bg-[#111410] font-mono text-[10px] font-bold tracking-widest text-[#c2b8a3]">RVD</div>
              <div className="leading-tight">
                <div className="font-mono text-[11px] font-bold tracking-[0.28em] text-[#c2b8a3]">R.U.G.V.E.D</div>
                <div className="hidden font-mono text-[9px] tracking-[0.18em] text-[#8b8f6b] sm:block">MIT MANIPAL • EST. 2016 • DEFENCE ROBOTICS</div>
              </div>
            </div>
            <div className="flex items-center gap-2 font-mono text-[9px] tracking-widest text-[#8b8f6b]">
              <span className="hidden sm:inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" /> SYS ONLINE</span>
              <span className="border border-[#8b8f6b]/20 px-2 py-1">13.35°N 74.79°E</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 pb-28">{children}</div>

        <footer className="relative z-10 mx-auto max-w-[1280px] px-4 pb-28 md:px-6">
          <div className="border-t border-[#c2b8a3]/10 pt-6 font-mono text-[10px] tracking-[0.16em] text-[#8b8f6b]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span>© 2026 R.U.G.V.E.D — MIT MANIPAL • STUDENT PROJECT • UNCLASSIFIED</span>
              <span className="inline-flex items-center gap-2">BUILT WITH <span className="h-1.5 w-1.5 rounded-full bg-[#c2b8a3]" /> TACTICAL MINIMALISM</span>
            </div>
          </div>
        </footer>

        <SiteDock />
      </div>
    </ClickSpark>
  );
}
