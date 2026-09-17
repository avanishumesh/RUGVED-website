"use client";
import React from "react";
import { useTheme } from "@/components/theme-provider";

export function DefenseBackground() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div
      className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden ${
        isLight ? "light-mode" : ""
      }`}
    >
      <style>{`
        :root {
          --td: 2.4s;
          --tt: cubic-bezier(0.22, 0.9, 0.26, 1);
          --hud: #35d399;
          --amber: #fbbf24;
          --ember: #ff5a3c;
          --sweep: 3.8s;
        }

        .hero-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          background: #010507;
          overflow: hidden;
          transition: background-color var(--td) var(--tt);
        }
        .light-mode .hero-wrapper { background: #f2a066; }
        .hero-wrapper svg { width: 100%; height: 100%; display: block; }

        /* ── DAY / NIGHT CROSSFADE PRIMITIVES ───────────────────── */
        .n-sky, .n-ember, .n-haze, .n-grade,
        .d-sky, .d-haze, .d-grade, .d-bloom, .d-cloud, .d-bird {
          transition: opacity var(--td) var(--tt);
        }

        .n-sky   { opacity: 1; }    .light-mode .n-sky   { opacity: 0; }
        .n-ember { opacity: 0.55; } .light-mode .n-ember { opacity: 0; }
        .n-haze  { opacity: 0.30; } .light-mode .n-haze  { opacity: 0; }
        .n-grade { opacity: 1; }    .light-mode .n-grade { opacity: 0; }

        .d-sky   { opacity: 0; } .light-mode .d-sky   { opacity: 1; }
        .d-haze  { opacity: 0; } .light-mode .d-haze  { opacity: 0.62; }
        .d-grade { opacity: 0; } .light-mode .d-grade { opacity: 1; }
        .d-bloom { opacity: 0; } .light-mode .d-bloom { opacity: 0.42; }
        .d-cloud { opacity: 0; } .light-mode .d-cloud { opacity: 0.9; }
        .d-bird  { opacity: 0; } .light-mode .d-bird  { opacity: 0.55; }

        .starfield { opacity: 1; transition: opacity calc(var(--td) * 0.6) var(--tt); }
        .light-mode .starfield { opacity: 0; }

        /* ── CELESTIAL RIG ──────────────────────────────────────── */
        .moon-rig {
          transform-origin: 680px 260px;
          transform: translate3d(0, 0, 0) scale(1);
          opacity: 1;
          transition: transform var(--td) var(--tt), opacity var(--td) var(--tt);
        }
        .light-mode .moon-rig {
          transform: translate3d(-320px, 440px, 0) scale(0.6);
          opacity: 0;
        }

        .sun-rig {
          transform-origin: 1060px 560px;
          transform: translate3d(90px, 300px, 0) scale(0.62);
          opacity: 0;
          transition: transform var(--td) var(--tt), opacity var(--td) var(--tt);
        }
        .light-mode .sun-rig {
          transform: translate3d(0, -258px, 0) scale(1.05);
          opacity: 1;
        }

        .sun-rays {
          opacity: 0;
          transform-origin: 1060px 560px;
          transition: opacity var(--td) var(--tt);
        }
        .light-mode .sun-rays { opacity: 0.3; animation: spin 220s linear infinite; }

        .moon-ring {
          transform-origin: 680px 260px;
          animation: spin 260s linear infinite reverse;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── TERRAIN: ATMOSPHERIC PERSPECTIVE LADDER ────────────── */
        /* stroke matches fill so tiled copies join without a hairline seam */
        .t-bg, .t-mg, .t-fg {
          stroke-width: 1;
          transition: fill var(--td) var(--tt), stroke var(--td) var(--tt);
        }
        .t-bg { fill: #0f2a23; stroke: #0f2a23; }
        .t-mg { fill: #0a1a15; stroke: #0a1a15; }
        .t-fg { fill: #06120e; stroke: #06120e; }
        .light-mode .t-bg { fill: #f0b78a; stroke: #f0b78a; }
        .light-mode .t-mg { fill: #dd8f60; stroke: #dd8f60; }
        .light-mode .t-fg { fill: #bd6440; stroke: #bd6440; }

        /* Rim light along every crest — moonlight at night, sunlight by day */
        .crest {
          fill: none;
          stroke: #2f6d59;
          stroke-linecap: round;
          opacity: 0.26;
          transition: stroke var(--td) var(--tt), opacity var(--td) var(--tt);
        }
        .light-mode .crest { stroke: #ffe8c4; opacity: 0.85; }

        .scoop {
          fill: #000000;
          opacity: 0.22;
          transition: fill var(--td) var(--tt), opacity var(--td) var(--tt);
        }
        .light-mode .scoop { fill: #8b4230; opacity: 0.26; }

        .tower line {
          stroke: #16332b;
          transition: stroke var(--td) var(--tt);
        }
        .light-mode .tower line { stroke: #a7613f; }

        /* ── VEHICLES ───────────────────────────────────────────── */
        .beam, .spot, .searchlight, .footprint {
          mix-blend-mode: screen;
          transition: opacity var(--td) var(--tt);
        }
        .beam        { opacity: 0.22; }
        .spot        { opacity: 0.18; }
        .searchlight { opacity: 0.16; }
        .footprint   { opacity: 0.12; }
        .light-mode .beam,
        .light-mode .spot,
        .light-mode .searchlight,
        .light-mode .footprint { opacity: 0; }

        .hull-1, .hull-2, .hull-3, .hull-line {
          transition: fill var(--td) var(--tt), stroke var(--td) var(--tt);
        }
        .hull-1    { fill: #060f0a; stroke: #1b3225; stroke-width: 0.8; stroke-linejoin: round; }
        .hull-2    { fill: #0d2015; stroke: #22402d; stroke-width: 0.8; stroke-linejoin: round; }
        .hull-3    { fill: #16311f; stroke: #2b4d35; stroke-width: 0.8; stroke-linejoin: round; }
        .hull-line { stroke: #2b5638; }

        .light-mode .hull-1    { fill: #48281c; stroke: #331a12; }
        .light-mode .hull-2    { fill: #6b3c28; stroke: #45241a; }
        .light-mode .hull-3    { fill: #8f5537; stroke: #5a2f20; }
        .light-mode .hull-line { stroke: #b0764f; }

        .rim-light {
          stroke: #4f8f72;
          fill: none;
          opacity: 0.35;
          transition: stroke var(--td) var(--tt), opacity var(--td) var(--tt);
        }
        .light-mode .rim-light { stroke: #ffdcae; opacity: 0.8; }

        .hud {
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.14em;
          fill: var(--hud);
          opacity: 0.6;
          transition: fill var(--td) var(--tt), opacity var(--td) var(--tt);
        }
        .light-mode .hud { fill: #4a2411; opacity: 0.6; }

        /* ── SUBSURFACE RADAR — localised survey box under the UGV ─ */
        .gpr-grid {
          stroke: var(--hud);
          opacity: 0.1;
          transition: stroke var(--td) var(--tt), opacity var(--td) var(--tt);
        }
        .gpr-pulse { stroke: var(--hud); transition: stroke var(--td) var(--tt); }
        .gpr-target { stroke: var(--hud); transition: stroke var(--td) var(--tt); }
        .gpr-target text { fill: var(--hud); transition: fill var(--td) var(--tt); }

        .light-mode .gpr-grid        { stroke: #96481f; opacity: 0.14; }
        .light-mode .gpr-pulse       { stroke: #96481f; }
        .light-mode .gpr-target      { stroke: #7a3311; }
        .light-mode .gpr-target text { fill: #54250b; }

        /* A return only shows while the wavefront is passing over it */
        @keyframes gpr-return {
          0%   { opacity: 0; }
          4%   { opacity: 0.6; }
          12%  { opacity: 0.4; }
          40%  { opacity: 0; }
          100% { opacity: 0; }
        }
        .gpr-target { opacity: 0; animation: gpr-return var(--sweep) linear infinite; }
        .ret-1 { animation-delay: 0.70s; }
        .ret-2 { animation-delay: 2.20s; }
        .ret-3 { animation-delay: 2.66s; }

        /* ── PARALLAX ───────────────────────────────────────────── */
        @keyframes drift { to { transform: translate3d(-1920px, 0, 0); } }

        .scroll-fg, .scroll-mg, .scroll-bg, .scroll-towers,
        .scroll-drones, .scroll-clouds, .sat-drift, .ugv-anim {
          will-change: transform;
        }

        .scroll-fg     { animation: drift 13s linear infinite; }
        .scroll-mg     { animation: drift 30s linear infinite; }
        .scroll-bg     { animation: drift 70s linear infinite; }
        .scroll-towers { animation: drift 70s linear infinite; }
        .scroll-drones { animation: drift 48s linear infinite; }
        .scroll-clouds { animation: drift 150s linear infinite; }

        @keyframes bob-a { 50% { transform: translate3d(0, -24px, 0); } }
        @keyframes bob-b { 0%, 100% { transform: translate3d(0, 14px, 0); } 50% { transform: translate3d(0, -10px, 0); } }
        @keyframes bob-c { 0%, 100% { transform: translate3d(0, -14px, 0); } 50% { transform: translate3d(0, 14px, 0); } }
        .bob-a { animation: bob-a 5.2s ease-in-out infinite; }
        .bob-b { animation: bob-b 6.5s ease-in-out infinite; }
        .bob-c { animation: bob-c 4.8s ease-in-out infinite; }

        @keyframes blink  { 50% { opacity: 0.65; } }
        @keyframes strobe { 0%, 92%, 100% { opacity: 0.1; } 96% { opacity: 0.75; } }
        .beacon       { opacity: 0.15; animation: blink 2s infinite; }
        .beacon-amber { opacity: 0.15; animation: blink 2.3s infinite; }
        .beacon-ember { animation: strobe 3.6s infinite; }

        /* UGV emitter ticks once per sweep, in time with the wavefront */
        @keyframes emit { 0%, 7% { opacity: 0.7; } 20%, 100% { opacity: 0.1; } }
        .emitter { animation: emit var(--sweep) linear infinite; }

        @keyframes sat { to { transform: translate3d(-2200px, 0, 0); } }
        .sat-drift { animation: sat 150s linear infinite; }

        @keyframes ugv-bob {
          0%, 100% { transform: translate3d(480px, 800px, 0) rotate(0deg); }
          33%      { transform: translate3d(480px, 798px, 0) rotate(-0.45deg); }
          66%      { transform: translate3d(480px, 802px, 0) rotate(0.45deg); }
        }
        .ugv-anim { animation: ugv-bob 2.4s ease-in-out infinite; }

        @keyframes wheel { to { transform: rotate(360deg); } }
        .wheel { animation: wheel 1.8s linear infinite; }

        @keyframes mote-a { 0% { transform: translate3d(0,0,0); opacity: 0; } 15% { opacity: 0.45; } 100% { transform: translate3d(-42px,-72px,0); opacity: 0; } }
        @keyframes mote-b { 0% { transform: translate3d(0,0,0); opacity: 0; } 20% { opacity: 0.35; } 100% { transform: translate3d(-26px,-96px,0); opacity: 0; } }
        @keyframes mote-c { 0% { transform: translate3d(0,0,0); opacity: 0; } 10% { opacity: 0.3;  } 100% { transform: translate3d(-56px,-52px,0); opacity: 0; } }
        .mote-a { animation: mote-a 2.6s ease-out infinite; }
        .mote-b { animation: mote-b 3.4s ease-out infinite 0.6s; }
        .mote-c { animation: mote-c 2.1s ease-out infinite 1.3s; }
        .mote   { fill: var(--ember); transition: fill var(--td) var(--tt); }
        .light-mode .mote { fill: #ffd9a8; }

        /* ── FILM GRADE OVERLAYS ────────────────────────────────── */
        .vignette {
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 200px 30px rgba(0, 0, 0, 0.9);
          transition: box-shadow var(--td) var(--tt);
        }
        .light-mode .vignette {
          box-shadow: inset 0 0 180px 20px rgba(122, 51, 17, 0.22);
        }

        .scanlines {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            to bottom,
            transparent 0 2px,
            rgba(0, 0, 0, 0.16) 2px 4px
          );
          opacity: 1;
          transition: opacity var(--td) var(--tt);
        }
        .light-mode .scanlines { opacity: 0.06; }

        @media (prefers-reduced-motion: reduce) {
          .hero-wrapper * { animation: none !important; }
          .gpr-target { opacity: 0.35 !important; }
        }
      `}</style>

      <div className="hero-wrapper">
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* ── SKY ── */}
            <linearGradient id="skyNight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#01060A" />
              <stop offset="40%" stopColor="#04130F" />
              <stop offset="72%" stopColor="#0A211B" />
              <stop offset="100%" stopColor="#16261A" />
            </linearGradient>

            <linearGradient id="skyDay" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#BCD9DD" />
              <stop offset="34%" stopColor="#F2DCBA" />
              <stop offset="68%" stopColor="#FAC58C" />
              <stop offset="100%" stopColor="#F5A468" />
            </linearGradient>

            <radialGradient id="emberHorizon" cx="50%" cy="100%" r="62%">
              <stop offset="0%" stopColor="#FF7A2E" stopOpacity="0.3" />
              <stop offset="55%" stopColor="#C2431A" stopOpacity="0.09" />
              <stop offset="100%" stopColor="#C2431A" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="dayBloom" cx="55%" cy="28%" r="62%">
              <stop offset="0%" stopColor="#FFF2D2" stopOpacity="0.85" />
              <stop offset="45%" stopColor="#FFD79C" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFC98A" stopOpacity="0" />
            </radialGradient>

            {/* ── ATMOSPHERIC HAZE (replaces blur filters) ── */}
            <linearGradient id="hazeNight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2B6B59" stopOpacity="0" />
              <stop offset="46%" stopColor="#3E8C74" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2B6B59" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="hazeDay" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFE9C6" stopOpacity="0" />
              <stop offset="44%" stopColor="#FFE9C6" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FFD9A8" stopOpacity="0" />
            </linearGradient>

            {/* ── DEPTH GRADE ── */}
            <linearGradient id="gradeNight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#000000" stopOpacity="0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.62" />
            </linearGradient>

            <linearGradient id="gradeDay" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7A3311" stopOpacity="0" />
              <stop offset="100%" stopColor="#6B2B10" stopOpacity="0.34" />
            </linearGradient>

            {/* ── CLOUDS (gradient-filled, no blur) ── */}
            <radialGradient id="cloudFill" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF6E2" stopOpacity="0.95" />
              <stop offset="55%" stopColor="#FFEED2" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FFE6C2" stopOpacity="0" />
            </radialGradient>

            {/* ── MOON ── */}
            <radialGradient id="moonHalo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#CFFFF0" stopOpacity="0.26" />
              <stop offset="48%" stopColor="#35D399" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#35D399" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="moonDisc" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#EAF3EE" />
              <stop offset="60%" stopColor="#C6DED3" />
              <stop offset="100%" stopColor="#93B4A5" />
            </linearGradient>

            {/* ── SUN ── */}
            <radialGradient id="sunHalo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="22%" stopColor="#FFF7E3" stopOpacity="0.7" />
              <stop offset="56%" stopColor="#FFE0AC" stopOpacity="0.26" />
              <stop offset="100%" stopColor="#FFD79C" stopOpacity="0" />
            </radialGradient>

            {/* ── VOLUMETRIC LIGHTING ── */}
            <linearGradient id="ugvBeam" x1="0" y1="0" x2="1" y2="0.3">
              <stop offset="0%" stopColor="#E8FFF7" stopOpacity="0.65" />
              <stop offset="28%" stopColor="#35D399" stopOpacity="0.26" />
              <stop offset="100%" stopColor="#35D399" stopOpacity="0" />
            </linearGradient>

            <radialGradient id="ugvSpot" cx="40%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#E8FFF7" stopOpacity="0.5" />
              <stop offset="58%" stopColor="#35D399" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#35D399" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="coneGreen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#35D399" stopOpacity="0.45" />
              <stop offset="55%" stopColor="#35D399" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#35D399" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="coneAmber" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFB347" stopOpacity="0.45" />
              <stop offset="55%" stopColor="#FFB347" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#FFB347" stopOpacity="0" />
            </linearGradient>

            {/* ── RIDGELINES ──────────────────────────────────────
                Each path starts and ends at the same height AND the
                same tangent, so tile N's tail meets tile N+1's head
                with no step and no kink. The join sits in a trough,
                where it is hardest to read.                        */}
            <path
              id="ridgeBg"
              d="M0,545 C170,552 330,466 500,442 C670,418 790,338 950,350 C1110,362 1250,438 1420,416 C1590,394 1750,538 1920,545"
            />
            <path
              id="ridgeMg"
              d="M0,682 C170,690 330,646 500,636 C670,626 790,700 950,684 C1110,668 1250,704 1420,690 C1590,676 1750,674 1920,682"
            />
            <path
              id="ridgeFg"
              d="M0,814 C160,822 300,800 460,786 C620,772 740,824 900,808 C1060,792 1180,826 1340,806 C1500,786 1760,806 1920,814"
            />

            <path
              id="massBg"
              className="t-bg"
              d="M0,545 C170,552 330,466 500,442 C670,418 790,338 950,350 C1110,362 1250,438 1420,416 C1590,394 1750,538 1920,545 L1920,1080 L0,1080 Z"
            />
            <path
              id="massMg"
              className="t-mg"
              d="M0,682 C170,690 330,646 500,636 C670,626 790,700 950,684 C1110,668 1250,704 1420,690 C1590,676 1750,674 1920,682 L1920,1080 L0,1080 Z"
            />
            <path
              id="massFg"
              className="t-fg"
              d="M0,814 C160,822 300,800 460,786 C620,772 740,824 900,808 C1060,792 1180,826 1340,806 C1500,786 1760,806 1920,814 L1920,1080 L0,1080 Z"
            />

            {/* ── RELAY MAST ── */}
            <g id="mast" className="tower">
              <line x1="0" y1="0" x2="0" y2="160" strokeWidth="3.5" />
              <line x1="-22" y1="160" x2="0" y2="0" strokeWidth="1.8" />
              <line x1="22" y1="160" x2="0" y2="0" strokeWidth="1.8" />
              <line x1="-14" y1="92" x2="14" y2="92" strokeWidth="1.6" />
              <line x1="-9" y1="46" x2="9" y2="46" strokeWidth="1.6" />
              <line x1="-18" y1="30" x2="18" y2="10" strokeWidth="1.6" />
              <circle cx="0" cy="0" r="2.6" fill="var(--ember)" className="beacon-ember" />
            </g>

            {/* ── UAV: RECON (green) ── */}
            <g id="uavRecon" transform="scale(1.2)">
              <polygon points="-4,8 4,8 44,178 -44,178" fill="url(#coneGreen)" className="searchlight" />
              <ellipse cx="0" cy="178" rx="44" ry="9" fill="url(#coneGreen)" className="footprint" />
              <polygon points="-15,0 15,-5 20,5 15,10 -10,10" className="hull-1" />
              <polygon points="-5,-5 10,-5 10,0 -5,0" className="hull-2" />
              <path d="M-15,-1 L13,-4.5" className="rim-light" strokeWidth="1" />
              <line x1="-20" y1="5" x2="25" y2="5" className="hull-line" strokeWidth="1.5" />
              <circle cx="0" cy="8" r="1.5" fill="var(--hud)" className="beacon" />
              <text className="hud" x="27" y="-9">UAV·01 RECON</text>
            </g>

            {/* ── UAV: FLIR (amber) ── */}
            <g id="uavFlir" transform="scale(1.2)">
              <polygon points="-4,8 4,8 44,178 -44,178" fill="url(#coneAmber)" className="searchlight" />
              <ellipse cx="0" cy="178" rx="44" ry="9" fill="url(#coneAmber)" className="footprint" />
              <polygon points="-15,0 15,-5 20,5 15,10 -10,10" className="hull-1" />
              <polygon points="-5,-5 10,-5 10,0 -5,0" className="hull-2" />
              <path d="M-15,-1 L13,-4.5" className="rim-light" strokeWidth="1" />
              <line x1="-20" y1="5" x2="25" y2="5" className="hull-line" strokeWidth="1.5" />
              <circle cx="0" cy="8" r="1.5" fill="var(--amber)" className="beacon-amber" />
              <text className="hud" x="27" y="-9">UAV·02 FLIR</text>
            </g>

            {/* ── BIRD (day only) ── */}
            <path id="bird" d="M0,0 c4,-5 8,-5 11,0 c3,-5 7,-5 11,0" fill="none" stroke="#7A3C22" strokeWidth="1.6" strokeLinecap="round" />

            {/* ── SURVEY WINDOW ──────────────────────────────────
                The subsurface readout is confined to a band around
                the vehicle and feathered at both ends, so it reads
                as the UGV's own sensor footprint rather than a
                full-width overlay.                                */}
            <linearGradient id="gprFade" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="14%" stopColor="#ffffff" />
              <stop offset="76%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>

            <mask id="gprZone" maskUnits="userSpaceOnUse" x="130" y="846" width="660" height="234">
              <rect x="130" y="846" width="660" height="234" fill="url(#gprFade)" />
            </mask>
          </defs>

          {/* SKY */}
          <rect className="n-sky" x="0" y="0" width="1920" height="1080" fill="url(#skyNight)" />
          <rect className="d-sky" x="0" y="0" width="1920" height="1080" fill="url(#skyDay)" />
          <rect className="n-ember" x="0" y="300" width="1920" height="780" fill="url(#emberHorizon)" />

          {/* STARFIELD */}
          <g className="starfield" fill="#ffffff">
            <circle cx="150" cy="120" r="1.4" opacity="0.22" />
            <circle cx="340" cy="200" r="1" opacity="0.14" />
            <circle cx="850" cy="80" r="1.8" opacity="0.28" />
            <circle cx="1250" cy="250" r="1.3" opacity="0.18" />
            <circle cx="1700" cy="140" r="1" opacity="0.15" />
            <circle cx="520" cy="90" r="1" opacity="0.13" />
            <circle cx="1050" cy="170" r="1" opacity="0.16" />
            <circle cx="1500" cy="60" r="1.6" opacity="0.24" />
            <circle cx="680" cy="140" r="1" opacity="0.12" />
            <circle cx="1820" cy="85" r="1.2" opacity="0.2" />
            <circle cx="1120" cy="300" r="1" opacity="0.1" />
            <circle cx="260" cy="320" r="1.1" opacity="0.12" />
          </g>

          {/* MOON — sets on theme switch */}
          <g className="moon-rig">
            <circle cx="680" cy="260" r="180" fill="url(#moonHalo)" />
            <circle className="moon-ring" cx="680" cy="260" r="76" fill="none" stroke="var(--hud)" strokeWidth="0.5" strokeDasharray="4 18" opacity="0.16" />
            <circle cx="680" cy="260" r="92" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="2 32" opacity="0.14" />
            <circle cx="680" cy="260" r="54" fill="url(#moonDisc)" />
            <circle cx="664" cy="245" r="9" fill="#9DBEB1" opacity="0.38" />
            <circle cx="699" cy="277" r="12" fill="#9DBEB1" opacity="0.32" />
            <circle cx="671" cy="286" r="6" fill="#9DBEB1" opacity="0.26" />
          </g>

          {/* SUN — rises behind the dune line */}
          <g className="sun-rig">
            <g className="sun-rays">
              <path d="M1060,560 Q1022,296 992,188" stroke="#FFF6E0" strokeWidth="2.4" strokeLinecap="round" fill="none" opacity="0.7" />
              <path d="M1060,560 Q1112,318 1144,172" stroke="#FFF6E0" strokeWidth="1.9" strokeLinecap="round" fill="none" opacity="0.55" />
              <path d="M1060,560 Q938,420 858,368" stroke="#FFF6E0" strokeWidth="1.7" strokeLinecap="round" fill="none" opacity="0.4" />
              <path d="M1060,560 Q1210,438 1300,392" stroke="#FFF6E0" strokeWidth="1.7" strokeLinecap="round" fill="none" opacity="0.4" />
            </g>
            <circle cx="1060" cy="560" r="255" fill="url(#sunHalo)" />
            <circle cx="1060" cy="560" r="96" fill="none" stroke="#FFEACB" strokeWidth="12" opacity="0.32" />
            <circle cx="1060" cy="560" r="58" fill="#FFFDF6" />
          </g>

          {/* CLOUD BANDS */}
          <g className="scroll-clouds">
            <g className="d-cloud">
              <ellipse cx="260" cy="232" rx="230" ry="26" fill="url(#cloudFill)" />
              <ellipse cx="200" cy="222" rx="130" ry="18" fill="url(#cloudFill)" />
              <ellipse cx="740" cy="164" rx="180" ry="20" fill="url(#cloudFill)" />
              <ellipse cx="1480" cy="204" rx="270" ry="28" fill="url(#cloudFill)" />
              <ellipse cx="1560" cy="192" rx="150" ry="18" fill="url(#cloudFill)" />
              <ellipse cx="2180" cy="232" rx="230" ry="26" fill="url(#cloudFill)" />
              <ellipse cx="2120" cy="222" rx="130" ry="18" fill="url(#cloudFill)" />
              <ellipse cx="2660" cy="164" rx="180" ry="20" fill="url(#cloudFill)" />
              <ellipse cx="3400" cy="204" rx="270" ry="28" fill="url(#cloudFill)" />
              <ellipse cx="3480" cy="192" rx="150" ry="18" fill="url(#cloudFill)" />
            </g>
            <g className="d-bird">
              <g transform="translate(420,300)"><use href="#bird" /></g>
              <g transform="translate(452,288) scale(0.8)"><use href="#bird" /></g>
              <g transform="translate(408,276) scale(0.7)"><use href="#bird" /></g>
              <g transform="translate(1610,246)"><use href="#bird" /></g>
              <g transform="translate(1644,236) scale(0.75)"><use href="#bird" /></g>
              <g transform="translate(2340,300)"><use href="#bird" /></g>
              <g transform="translate(2372,288) scale(0.8)"><use href="#bird" /></g>
              <g transform="translate(3530,246)"><use href="#bird" /></g>
            </g>
          </g>

          {/* HIGH ALTITUDE BEACONS */}
          <g className="sat-drift">
            <circle cx="300" cy="150" r="1.5" fill="#FF8C42" className="beacon-amber" />
            <circle cx="1600" cy="110" r="1.5" fill="var(--hud)" className="beacon" />
          </g>

          {/* RELAY MASTS */}
          <g className="scroll-towers">
            <g transform="translate(430,392)"><use href="#mast" /></g>
            <g transform="translate(1180,344)"><use href="#mast" /></g>
            <g transform="translate(2350,392)"><use href="#mast" /></g>
            <g transform="translate(3100,344)"><use href="#mast" /></g>
          </g>

          {/* LAYER 1 — FAR RANGE */}
          <g className="scroll-bg">
            <use href="#massBg" x="0" />
            <use href="#massBg" x="1920" />
            <use href="#ridgeBg" className="crest" x="0" strokeWidth="4" />
            <use href="#ridgeBg" className="crest" x="1920" strokeWidth="4" />
          </g>

          <rect className="n-haze" x="0" y="404" width="1920" height="250" fill="url(#hazeNight)" />
          <rect className="d-haze" x="0" y="404" width="1920" height="250" fill="url(#hazeDay)" />

          {/* DRONE PATROL */}
          <g className="scroll-drones">
            <g transform="translate(250,352)"><use href="#uavRecon" className="bob-a" /></g>
            <g transform="translate(640,318)"><use href="#uavFlir" className="bob-b" /></g>
            <g transform="translate(1040,418)"><use href="#uavRecon" className="bob-c" /></g>
            <g transform="translate(1480,376)"><use href="#uavFlir" className="bob-a" /></g>
            <g transform="translate(2170,352)"><use href="#uavRecon" className="bob-a" /></g>
            <g transform="translate(2560,318)"><use href="#uavFlir" className="bob-b" /></g>
            <g transform="translate(2960,418)"><use href="#uavRecon" className="bob-c" /></g>
            <g transform="translate(3400,376)"><use href="#uavFlir" className="bob-a" /></g>
          </g>

          {/* LAYER 2 — MID RANGE */}
          <g className="scroll-mg">
            <use href="#massMg" x="0" />
            <use href="#massMg" x="1920" />
            <use href="#ridgeMg" className="crest" x="0" strokeWidth="5" />
            <use href="#ridgeMg" className="crest" x="1920" strokeWidth="5" />
            <ellipse className="scoop" cx="640" cy="762" rx="220" ry="54" />
            <ellipse className="scoop" cx="1360" cy="762" rx="260" ry="58" />
            <ellipse className="scoop" cx="2560" cy="762" rx="220" ry="54" />
            <ellipse className="scoop" cx="3280" cy="762" rx="260" ry="58" />
          </g>

          <rect className="n-haze" x="0" y="600" width="1920" height="220" fill="url(#hazeNight)" />
          <rect className="d-haze" x="0" y="600" width="1920" height="220" fill="url(#hazeDay)" />

          {/* LAYER 3 — NEAR RANGE */}
          <g className="scroll-fg">
            <use href="#massFg" x="0" />
            <use href="#massFg" x="1920" />
            <use href="#ridgeFg" className="crest" x="0" strokeWidth="6" />
            <use href="#ridgeFg" className="crest" x="1920" strokeWidth="6" />
            <ellipse className="scoop" cx="900" cy="902" rx="260" ry="58" />
            <ellipse className="scoop" cx="1600" cy="902" rx="240" ry="54" />
            <ellipse className="scoop" cx="2820" cy="902" rx="260" ry="58" />
            <ellipse className="scoop" cx="3520" cy="902" rx="240" ry="54" />
          </g>

          {/* DEPTH GRADE */}
          <rect className="n-grade" x="0" y="700" width="1920" height="380" fill="url(#gradeNight)" />
          <rect className="d-grade" x="0" y="700" width="1920" height="380" fill="url(#gradeDay)" />

          {/* ── SUBSURFACE RADAR ─────────────────────────────────
              One wavefront leaves the UGV every 3.8s and reaches
              the edge of the survey window. Each buried structure
              holds a return only while the front is over it.     */}
          <g mask="url(#gprZone)">
            <g className="gpr-grid" fill="none" strokeWidth="1" strokeDasharray="4 8">
              <line x1="130" y1="886" x2="790" y2="886" />
              <line x1="130" y1="966" x2="790" y2="966" />
              <line x1="130" y1="1046" x2="790" y2="1046" />
            </g>

            <circle className="gpr-pulse" cx="480" cy="815" r="0" fill="none">
              <animate attributeName="r" values="0;460" dur="3.8s" repeatCount="indefinite" />
              <animate attributeName="stroke-width" values="3.5;0.7" dur="3.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0.22;0" dur="3.8s" repeatCount="indefinite" />
            </circle>

            {/* T1 — shallow conduit, directly beneath the vehicle */}
            <g className="gpr-target ret-1" fill="none" strokeWidth="1.6" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.2">
              <rect x="400" y="892" width="180" height="18" />
              <line x1="445" y1="892" x2="445" y2="910" strokeWidth="0.9" />
              <line x1="490" y1="892" x2="490" y2="910" strokeWidth="0.9" />
              <line x1="535" y1="892" x2="535" y2="910" strokeWidth="0.9" />
              <text x="400" y="884" stroke="none">T1 CONDUIT · 1.2M</text>
            </g>

            {/* T2 — reinforced vault, off to the left */}
            <g className="gpr-target ret-2" fill="none" strokeWidth="1.6" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.2">
              <rect x="205" y="938" width="130" height="56" />
              <line x1="205" y1="938" x2="335" y2="994" strokeWidth="0.9" />
              <line x1="335" y1="938" x2="205" y2="994" strokeWidth="0.9" />
              <text x="205" y="930" stroke="none">T2 VAULT · 3.4M</text>
            </g>

            {/* T3 — metallic cluster, off to the right */}
            <g className="gpr-target ret-3" fill="none" strokeWidth="1.6" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.2">
              <circle cx="690" cy="1022" r="11" />
              <circle cx="722" cy="1040" r="7" />
              <circle cx="664" cy="1046" r="6" />
              <rect x="640" y="1000" width="110" height="62" strokeWidth="0.9" strokeDasharray="3 5" />
              <text x="640" y="992" stroke="none">T3 CLUSTER · 4.8M</text>
            </g>
          </g>

          {/* UGV — WALRUS 2.0 */}
          <g className="ugv-anim" transform="translate(480,800) scale(1.4)">
            <polygon points="45,-6 45,6 262,35 222,-16" fill="url(#ugvBeam)" className="beam" />
            <ellipse cx="192" cy="25" rx="95" ry="16" fill="url(#ugvSpot)" className="spot" />

            <g className="mote" transform="translate(-45,18)" opacity="0.6">
              <circle r="2.2" className="mote-a" />
              <circle r="1.8" className="mote-b" />
              <circle r="2.5" className="mote-c" />
            </g>

            <line className="hull-line" x1="-25" y1="-22" x2="-35" y2="-45" strokeWidth="1.4" />
            <circle cx="-35" cy="-45" r="1.5" fill="var(--ember)" className="beacon-ember" />

            <polygon className="hull-1" points="-50,5 50,5 40,15 -40,15" />
            <polygon className="hull-2" points="-50,-10 -35,-25 10,-25 35,-15 50,-5 50,5 -50,5" />
            <polygon className="hull-3" points="-35,-22 5,-22 25,-14 -30,-14" />
            <path className="rim-light" d="M-35,-22.5 L5,-22.5 L25,-14.5" strokeWidth="1.1" />

            {/* GPR emitter array — ticks with each wavefront */}
            <rect className="hull-1" x="-20" y="8" width="34" height="5" rx="1" />
            <rect className="emitter" x="-20" y="8" width="34" height="5" rx="1" fill="var(--hud)" />

            <rect className="hull-1" x="-15" y="-35" width="20" height="10" />
            <circle className="hull-3" cx="-5" cy="-35" r="7" />
            <path className="rim-light" d="M-11,-38.5 A7,7 0 0 1 -0.5,-39.5" strokeWidth="1" />
            <circle cx="-1" cy="-35" r="1.5" fill="var(--hud)" className="beacon" />
            <circle cx="-6" cy="-35" r="1.2" fill="var(--ember)" opacity="0.7" />

            {[-35, -10, 15, 40].map((x) => (
              <g key={x} transform={`translate(${x},12)`}>
                <g className="wheel">
                  <circle cx="0" cy="0" r="10" className="hull-1" />
                  <circle cx="0" cy="0" r="5" className="hull-3" />
                  <line className="hull-line" x1="-9" y1="0" x2="9" y2="0" strokeWidth="1.4" />
                  <line className="hull-line" x1="0" y1="-9" x2="0" y2="9" strokeWidth="1.4" />
                </g>
              </g>
            ))}

            <text className="hud" x="-40" y="-56">WALRUS 2.0 · GPR SWEEP</text>
          </g>

          {/* DAY BLOOM — final warm light wash */}
          <rect className="d-bloom" x="0" y="0" width="1920" height="1080" fill="url(#dayBloom)" />
        </svg>

        <div className="scanlines" />
        <div className="vignette" />
      </div>
    </div>
  );
}
