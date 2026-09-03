"use client";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TacticalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  badge?: string;
  cornerReticles?: boolean;
  glowColor?: string;
  laserSweep?: boolean;
}

export const TacticalCard: React.FC<TacticalCardProps> = ({
  children,
  className,
  badge,
  cornerReticles = true,
  glowColor = "rgba(194, 184, 163, 0.15)",
  laserSweep = false,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, active: false }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-[#c2b8a3]/12 bg-[#0f120f]/75 p-6 backdrop-blur-xl transition-all duration-300",
        "hover:border-[#c2b8a3]/28 hover:shadow-[0_12px_48px_-12px_rgba(0,0,0,0.6)]",
        className
      )}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: mousePos.active
            ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 70%)`
            : "none",
        }}
      />

      {/* Laser Sweep Scanline (optional) */}
      {laserSweep && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-[#c2b8a3]/[0.04] to-transparent animate-laser-sweep" />
      )}

      {/* Corner Tactical Reticles */}
      {cornerReticles && (
        <>
          <span className="pointer-events-none absolute left-0 top-0 h-3.5 w-3.5 border-l-[1.5px] border-t-[1.5px] border-[#c2b8a3]/30 transition-colors group-hover:border-[#c2b8a3]/60" />
          <span className="pointer-events-none absolute right-0 top-0 h-3.5 w-3.5 border-r-[1.5px] border-t-[1.5px] border-[#c2b8a3]/30 transition-colors group-hover:border-[#c2b8a3]/60" />
          <span className="pointer-events-none absolute bottom-0 left-0 h-3.5 w-3.5 border-b-[1.5px] border-l-[1.5px] border-[#c2b8a3]/30 transition-colors group-hover:border-[#c2b8a3]/60" />
          <span className="pointer-events-none absolute bottom-0 right-0 h-3.5 w-3.5 border-b-[1.5px] border-r-[1.5px] border-[#c2b8a3]/30 transition-colors group-hover:border-[#c2b8a3]/60" />
        </>
      )}

      {/* Optional Top Right Tactical Badge */}
      {badge && (
        <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 font-mono text-[9px] tracking-[0.2em] text-[#8b8f6b]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          <span>{badge}</span>
        </div>
      )}

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default TacticalCard;
