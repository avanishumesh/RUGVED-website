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
        .n-sky, .n-ember, .n-haze, .n-grade { transition: opacity var(--td) var(--tt); }
        .d-sky, .d-haze, .d-grade, .d-bloom, .d-cloud, .d-bird { transition: opacity var(--td) var(--tt); }

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
        .t-bg, .t-mg, .t-fg, .t-base { transition: fill var(--td) var(--tt); }
        .t-bg   { fill: #0f2a23; } .light-mode .t-bg   { fill: #f0b78a; }
        .t-mg   { fill: #0a1a15; } .light-mode .t-mg   { fill: #dd8f60; }
        .t-fg   { fill: #06120e; } .light-mode .t-fg   { fill: #bd6440; }
        .t-base { fill: #020706; } .light-mode .t-base { fill: #8b4230; }

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

        /* ── GROUND PENETRATING RADAR ───────────────────────────── */
        .gpr {
          stroke: var(--hud);
          opacity: 0.42;
          transition: stroke var(--td) var(--tt), opacity var(--td) var(--tt);
        }
        .gpr text { fill: var(--hud); transition: fill var(--td) var(--tt); }
        .gpr-pulse {
          stroke: var(--hud);
          opacity: 0.38;
          transition: stroke var(--td) var(--tt), opacity var(--td) var(--tt);
        }
        .light-mode .gpr       { stroke: #7a3311; opacity: 0.4; }
        .light-mode .gpr text  { fill: #542307; }
        .light-mode .gpr-pulse { stroke: #96481f; opacity: 0.36; }

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

        @keyframes blink   { 50% { opacity: 0.65; } }
        @keyframes strobe  { 0%, 92%, 100% { opacity: 0.1; } 96% { opacity: 0.75; } }
        .beacon        { opacity: 0.15; animation: blink 2s infinite; }
        .beacon-amber  { opacity: 0.15; animation: blink 2.3s infinite; }
        .beacon-ember  { animation: strobe 3.6s infinite; }

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
          .hero-wrapper *, .hero-wrapper *::before { animation: none !important; }
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
              <stop offset="0%" stopColor="#FF7A2E" stopOpacity="0.30" />
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

            {/* ── TERRAIN SILHOUETTES ── */}
            <path
              id="ridgeBg"
              d="M-10,560 C160,470 320,430 480,460 C640,490 760,380 940,360 C1120,340 1260,430 1420,410 C1580,390 1740,460 1930,480"
            />
            <path
              id="ridgeMg"
              d="M-10,700 C180,640 340,680 500,650 C660,620 780,700 950,670 C1120,640 1260,700 1430,680 C1600,660 1760,710 1930,690"
            />
            <path
              id="ridgeFg"
              d="M-10,830 C160,780 300,820 460,790 C620,760 740,830 900,800 C1060,770 1180,830 1340,800 C1500,770 1660,820 1930,800"
            />

            <path
              id="massBg"
              className="t-bg"
              d="M-10,560 C160,470 320,430 480,460 C640,490 760,380 940,360 C1120,340 1260,430 1420,410 C1580,390 1740,460 1930,480 L1930,1080 L-10,1080 Z"
            />
            <path
              id="massMg"
              className="t-mg"
              d="M-10,700 C180,640 340,680 500,650 C660,620 780,700 950,670 C1120,640 1260,700 1430,680 C1600,660 1760,710 1930,690 L1930,1080 L-10,1080 Z"
            />
            <g id="massFg">
              <rect className="t-base" x="-10" y="830" width="1940" height="250" />
              <path
                className="t-fg"
                d="M-10,830 C160,780 300,820 460,790 C620,760 740,830 900,800 C1060,770 1180,830 1340,800 C1500,770 1660,820 1930,800 L1930,1080 L-10,1080 Z"
              />
            </g>

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

            {/* ── BIRD (day only, 2D-art detail) ── */}
            <path id="bird" d="M0,0 c4,-5 8,-5 11,0 c3,-5 7,-5 11,0" fill="none" stroke="#7A3C22" strokeWidth="1.6" strokeLinecap="round" />

            {/* ── SUBSURFACE SCAN READOUT ── */}
            <g id="scanFeed" fill="none" strokeWidth="2.2" fontFamily="ui-monospace, monospace" fontSize="12">
              <line x1="0" y1="884" x2="1920" y2="884" strokeWidth="1.2" strokeDasharray="5 7" opacity="0.45" />
              <line x1="0" y1="964" x2="1920" y2="964" strokeWidth="1.2" strokeDasharray="5 7" opacity="0.45" />
              <line x1="0" y1="1044" x2="1920" y2="1044" strokeWidth="1.2" strokeDasharray="5 7" opacity="0.45" />

              <rect x="250" y="912" width="160" height="70" />
              <line x1="250" y1="912" x2="410" y2="982" />
              <line x1="410" y1="912" x2="250" y2="982" />
              <text x="250" y="902" stroke="none">TARGET·01 BURIED VAULT</text>

              <rect x="700" y="940" width="350" height="26" />
              <line x1="770" y1="940" x2="770" y2="966" />
              <line x1="840" y1="940" x2="840" y2="966" />
              <line x1="910" y1="940" x2="910" y2="966" />
              <line x1="980" y1="940" x2="980" y2="966" />
              <text x="700" y="930" stroke="none">SCAN HARDENED PIPELINE</text>

              <rect x="1350" y="892" width="220" height="118" />
              <rect x="1372" y="912" width="176" height="78" />
              <line x1="1460" y1="892" x2="1460" y2="1010" />
              <text x="1350" y="882" stroke="none">GRID NODE SUBSURFACE</text>
            </g>

            <clipPath id="groundClip">
              <rect x="0" y="848" width="1920" height="232" />
            </clipPath>

            <mask id="scanReveal">
              <rect x="0" y="0" width="1920" height="1080" fill="black" />
              <circle cx="480" cy="815" r="0" fill="white">
                <animate attributeName="r" values="0;460" dur="3.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.9;0" dur="3.6s" repeatCount="indefinite" />
              </circle>
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
            <g transform="translate(430,400)"><use href="#mast" /></g>
            <g transform="translate(1180,350)"><use href="#mast" /></g>
            <g transform="translate(2350,400)"><use href="#mast" /></g>
            <g transform="translate(3100,350)"><use href="#mast" /></g>
          </g>

          {/* LAYER 1 — FAR DUNES */}
          <g className="scroll-bg">
            <use href="#massBg" x="0" />
            <use href="#massBg" x="1920" />
            <use href="#ridgeBg" className="crest" x="0" strokeWidth="4" />
            <use href="#ridgeBg" className="crest" x="1920" strokeWidth="4" />
          </g>

          <rect className="n-haze" x="0" y="400" width="1920" height="250" fill="url(#hazeNight)" />
          <rect className="d-haze" x="0" y="400" width="1920" height="250" fill="url(#hazeDay)" />

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

          {/* LAYER 2 — MID DUNES */}
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

          <rect className="n-haze" x="0" y="596" width="1920" height="220" fill="url(#hazeNight)" />
          <rect className="d-haze" x="0" y="596" width="1920" height="220" fill="url(#hazeDay)" />

          {/* LAYER 3 — NEAR DUNES */}
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

          {/* SUBSURFACE SCAN */}
          <g clipPath="url(#groundClip)">
            <g className="gpr" mask="url(#scanReveal)">
              <use href="#scanFeed" />
            </g>
            <circle className="gpr-pulse" cx="480" cy="815" r="0" fill="none">
              <animate attributeName="r" values="0;460" dur="3.6s" repeatCount="indefinite" />
              <animate attributeName="stroke-width" values="4;1" dur="3.6s" repeatCount="indefinite" />
            </circle>
            <circle className="gpr-pulse" cx="480" cy="815" r="0" fill="none">
              <animate attributeName="r" values="0;460" begin="1.8s" dur="3.6s" repeatCount="indefinite" />
              <animate attributeName="stroke-width" values="4;1" begin="1.8s" dur="3.6s" repeatCount="indefinite" />
            </circle>
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

            <text className="hud" x="-40" y="-56">WALRUS 2.0 · AUTO-SLAM</text>
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
