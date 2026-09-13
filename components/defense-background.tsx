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
          --void: #030705;
          --dusk-teal: #081714;
          --horizon-amber: #FF8C42;
          
          /* Tactical, subdued UI colors */
          --tactical-green: #34d399;
          --tactical-amber: #fbbf24;
          --ember: #FF4438;
          --moon-crater: #9DBEB1;

          /* Clean, natural desert palette for daylight */
          --desert-sky-top: #FFF3D6;
          --desert-sky-mid: #FFD98F;
          --desert-sky-low: #FDB870;
          --desert-cloud: #FFEFCB;
          --desert-sandstone: #F3A968;
          --desert-sand: #E9884C;
          --desert-ridge: #FFE1AE;
          --desert-ground: #D97142;
          --desert-shadow: #A84E28;
          --desert-dust: #FFE7C2;
          --desert-sun-core: #FFFDF6;
          --desert-sun-ring: #FFEACB;
          --desert-hud: #4A2612; /* High contrast for day tags */

          /* Transition Timing */
          --transition-duration: 2.6s;
          --transition-timing: cubic-bezier(0.2, 0.9, 0.25, 1);
        }

        .hero-wrapper {
          position: relative;
          width: 100vw;
          height: 100vh;
          min-height: 100vh;
          background: #030705;
          overflow: hidden;
          transition: background-color var(--transition-duration) var(--transition-timing);
        }

        .light-mode .hero-wrapper {
          background: #FDB870;
        }

        .hero-wrapper svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* ── CELESTIAL MECHANICS: MOON SETS / SUN RISES ── */
        .moon-rig {
          transform-origin: 680px 260px;
          transform: translate3d(0, 0, 0) scale(1);
          opacity: 1;
          transition: transform var(--transition-duration) var(--transition-timing),
                      opacity var(--transition-duration) var(--transition-timing);
        }
        .light-mode .moon-rig {
          transform: translate3d(-340px, 480px, 0) scale(0.65);
          opacity: 0;
        }

        .sun-rig {
          transform-origin: 1060px 560px;
          transform: translate3d(140px, 340px, 0) scale(0.7);
          opacity: 0;
          transition: transform var(--transition-duration) var(--transition-timing),
                      opacity var(--transition-duration) var(--transition-timing);
        }
        .light-mode .sun-rig {
          transform: translate3d(0, -290px, 0) scale(1.15);
          opacity: 1;
        }

        .sun-halo-wrap,
        .sun-ring-wrap,
        .sun-disc-wrap {
          transform-origin: 1060px 560px;
          transition: transform var(--transition-duration) var(--transition-timing);
        }
        .light-mode .sun-halo-wrap { transform: scale(1.35); }
        .light-mode .sun-ring-wrap { transform: scale(1.15); }
        .light-mode .sun-disc-wrap { transform: scale(1.2); }

        .sun-corona-ring {
          opacity: 0;
          transition: opacity var(--transition-duration) var(--transition-timing);
        }
        .light-mode .sun-corona-ring { opacity: 0.4; }

        .sun-disc-core {
          fill: #FFC988;
          opacity: 0.9;
          transition: fill var(--transition-duration) var(--transition-timing),
                      opacity var(--transition-duration) var(--transition-timing);
        }
        .light-mode .sun-disc-core {
          fill: var(--desert-sun-core);
          opacity: 1;
        }

        .sun-morning-rays {
          opacity: 0;
          transform-origin: 1060px 560px;
          transition: opacity var(--transition-duration) var(--transition-timing);
          pointer-events: none;
        }
        .light-mode .sun-morning-rays {
          opacity: 0.25;
          animation: rotateRays 160s linear infinite;
        }

        @keyframes rotateRays {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .moon-telemetry-ring {
          transform-origin: 680px 260px;
          animation: rotateRays 220s linear infinite reverse;
        }

        .desert-morning-bloom {
          opacity: 0;
          transition: opacity var(--transition-duration) var(--transition-timing);
          pointer-events: none;
          mix-blend-mode: screen;
        }
        .light-mode .desert-morning-bloom { opacity: 0.35; }

        /* CLOUDS */
        .cloud-band {
          fill: var(--desert-cloud);
          opacity: 0;
          transition: opacity var(--transition-duration) var(--transition-timing);
        }
        .light-mode .cloud-band { opacity: 0.55; }

        /* SKY LAYERS */
        .sky-night-layer, .sky-day-layer {
          transition: opacity var(--transition-duration) var(--transition-timing);
        }
        .sky-night-layer { opacity: 1; }
        .sky-day-layer { opacity: 0; }
        .light-mode .sky-night-layer { opacity: 0; }
        .light-mode .sky-day-layer { opacity: 1; }

        .night-starfield {
          opacity: 1;
          transition: opacity calc(var(--transition-duration) * 0.75) var(--transition-timing);
        }
        .light-mode .night-starfield { opacity: 0; }

        /* TERRAIN LAYERS */
        .terrain-bg-path {
          fill: #0B1713;
          transition: fill var(--transition-duration) var(--transition-timing);
        }
        .light-mode .terrain-bg-path { fill: var(--desert-sandstone); }

        .terrain-mg-path {
          fill: #10221A;
          transition: fill var(--transition-duration) var(--transition-timing);
        }
        .light-mode .terrain-mg-path { fill: var(--desert-sand); }

        .terrain-fg-rect {
          fill: #060B08;
          transition: fill var(--transition-duration) var(--transition-timing);
        }
        .light-mode .terrain-fg-rect { fill: var(--desert-shadow); }

        .terrain-fg-ridge {
          fill: #14281B;
          transition: fill var(--transition-duration) var(--transition-timing);
        }
        .light-mode .terrain-fg-ridge { fill: var(--desert-ground); }

        .dune-crest-highlight {
          fill: none;
          stroke-linecap: round;
          opacity: 0;
          transition: opacity var(--transition-duration) var(--transition-timing);
        }
        .light-mode .dune-crest-highlight { opacity: 0.5; }

        .dune-shadow-scoop {
          fill: var(--desert-shadow);
          opacity: 0;
          transition: opacity var(--transition-duration) var(--transition-timing);
        }
        .light-mode .dune-shadow-scoop { opacity: 0.22; }

        .fog-haze-band ellipse {
          fill: var(--steel-blue);
          transition: fill var(--transition-duration) var(--transition-timing);
        }
        .scroll-fog {
          opacity: 0.12;
          transition: opacity var(--transition-duration) var(--transition-timing);
        }
        .light-mode .fog-haze-band ellipse { fill: var(--desert-dust); }
        .light-mode .scroll-fog { opacity: 0.3; }

        .tower-structural-lines line {
          stroke: #1B352E;
          transition: stroke var(--transition-duration) var(--transition-timing);
        }
        .light-mode .tower-structural-lines line { stroke: #A76241; }

        /* ── VOLUMETRIC VEHICLE LIGHTING ── */
        .ugv-headlight-beam {
          opacity: 0.15;
          mix-blend-mode: screen;
          transition: opacity var(--transition-duration) var(--transition-timing);
        }
        .light-mode .ugv-headlight-beam { opacity: 0; }

        .ugv-ground-spot {
          opacity: 0.15;
          mix-blend-mode: screen;
          transition: opacity var(--transition-duration) var(--transition-timing);
        }
        .light-mode .ugv-ground-spot { opacity: 0; }

        .drone-searchlight {
          opacity: 0.12;
          mix-blend-mode: screen;
          transition: opacity var(--transition-duration) var(--transition-timing);
        }
        .light-mode .drone-searchlight { opacity: 0; }

        .drone-ground-footprint {
          opacity: 0.1;
          mix-blend-mode: screen;
          transition: opacity var(--transition-duration) var(--transition-timing);
        }
        .light-mode .drone-ground-footprint { opacity: 0; }

        /* Tactical Matte Armor for UGV */
        .ugv-armor-plate, .ugv-armor-mid {
          stroke: #223B2A;
          stroke-width: 0.8px;
          stroke-linejoin: round;
          transition: stroke var(--transition-duration) var(--transition-timing),
                      fill var(--transition-duration) var(--transition-timing);
        }
        .ugv-chassis-lower { fill: #08120B; stroke: #182E20; stroke-width: 0.8px; }
        .ugv-armor-mid { fill: #0E1F14; }
        .ugv-armor-plate { fill: #142E1D; }
        .ugv-turret-mount { fill: #070F0A; stroke: #182E20; stroke-width: 0.8px; }
        .ugv-turret-dome { fill: #0F2115; stroke: #223B2A; stroke-width: 1px; }

        .light-mode .ugv-armor-plate,
        .light-mode .ugv-armor-mid { stroke: rgba(0,0,0,0.2); stroke-width: 0.5px; }
        .light-mode .ugv-chassis-lower { stroke: none; }
        .light-mode .ugv-turret-mount { stroke: none; }
        .light-mode .ugv-turret-dome { stroke: none; }

        .ugv-wheel-rim { fill: #172E1E; stroke: #2A4733; stroke-width: 0.5px; }
        .ugv-wheel-spoke { stroke: #204029; }
        .ugv-antenna-mast { stroke: #2E5C3B; }
        .ugv-motes { fill: var(--ember); }

        /* Drone Body Styling */
        .drone-body-dark {
          fill: #09120D;
          stroke: #1D3625;
          stroke-width: 0.8px;
          transition: fill var(--transition-duration) var(--transition-timing),
                      stroke var(--transition-duration) var(--transition-timing);
        }
        .drone-body-light {
          fill: #112117;
          stroke: #25422F;
          stroke-width: 0.6px;
          transition: fill var(--transition-duration) var(--transition-timing),
                      stroke var(--transition-duration) var(--transition-timing);
        }
        .drone-wing-line {
          stroke: #223E2B;
          transition: stroke var(--transition-duration) var(--transition-timing);
        }

        .light-mode .drone-body-dark { fill: #52392A; stroke: none; }
        .light-mode .drone-body-light { fill: #7D5C46; stroke: none; }
        .light-mode .drone-wing-line { stroke: #9E7A60; }

        /* Tactical HUD tags (More visible now) */
        .tactical-hud-text {
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.12em;
          fill: var(--tactical-green);
          opacity: 0.75;
          transition: fill var(--transition-duration) var(--transition-timing),
                      opacity var(--transition-duration) var(--transition-timing);
        }
        .light-mode .tactical-hud-text {
          fill: var(--desert-hud);
          opacity: 0.85; /* Clearly visible in day mode */
        }

        /* GROUND PENETRATING RADAR (GPR) - Enhanced Visibility */
        .subterranean-radar-feed {
          stroke: var(--tactical-green);
          opacity: 0.5; /* Much brighter at night */
          transition: stroke var(--transition-duration) var(--transition-timing),
                      opacity var(--transition-duration) var(--transition-timing);
        }
        .subterranean-radar-feed text {
          fill: var(--tactical-green);
          transition: fill var(--transition-duration) var(--transition-timing);
        }
        .subterranean-radar-pulse {
          stroke: var(--tactical-green);
          opacity: 0.45; /* Much brighter at night */
          transition: stroke var(--transition-duration) var(--transition-timing),
                      opacity var(--transition-duration) var(--transition-timing);
        }
        
        .light-mode .subterranean-radar-feed {
          stroke: #8B3A14; /* Copper/scorched earth tone */
          opacity: 0.55; 
        }
        .light-mode .subterranean-radar-feed text {
          fill: #5C260D; /* Darker brown for text */
        }
        .light-mode .subterranean-radar-pulse {
          stroke: #A0522D; /* Sienna */
          opacity: 0.5;
        }

        /* ── GPU PARALLAX LOOPING KEYFRAMES ── */
        @keyframes scrollLeft {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-1920px, 0, 0); }
        }

        .scroll-fg, .scroll-mg, .scroll-bg, .scroll-towers, .scroll-fog, .scroll-drones, .scroll-clouds {
          will-change: transform;
        }

        .scroll-fg { animation: scrollLeft 12s linear infinite; }
        .scroll-mg { animation: scrollLeft 28s linear infinite; }
        .scroll-bg { animation: scrollLeft 65s linear infinite; }
        .scroll-towers { animation: scrollLeft 65s linear infinite; }
        .scroll-fog { animation: scrollLeft 100s linear infinite; }
        .scroll-drones { animation: scrollLeft 45s linear infinite; }
        .scroll-clouds { animation: scrollLeft 130s linear infinite; }

        @keyframes drone-bob1 {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -25px, 0); }
        }
        @keyframes drone-bob2 {
          0%, 100% { transform: translate3d(0, 15px, 0); }
          50% { transform: translate3d(0, -10px, 0); }
        }
        @keyframes drone-bob3 {
          0%, 100% { transform: translate3d(0, -15px, 0); }
          50% { transform: translate3d(0, 15px, 0); }
        }

        .drone-1 { animation: drone-bob1 5.2s ease-in-out infinite; }
        .drone-2 { animation: drone-bob2 6.5s ease-in-out infinite; }
        .drone-3 { animation: drone-bob3 4.8s ease-in-out infinite; }

        @keyframes beacon-flash {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.6; }
        }
        .beacon { animation: beacon-flash 2s infinite; }

        @keyframes beacon-flash-ember {
          0%, 92% { opacity: 0.1; }
          96% { opacity: 0.7; }
          100% { opacity: 0.1; }
        }
        .beacon-ember { animation: beacon-flash-ember 3.6s infinite; }

        @keyframes beacon-flash-amber {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.6; }
        }
        .beacon-amber { animation: beacon-flash-amber 2.3s infinite; }

        @keyframes sat-drift {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-2200px, 0, 0); }
        }
        .sat-drift { animation: sat-drift 140s linear infinite; will-change: transform; }

        @keyframes ugv-bob {
          0%, 100% { transform: translate3d(480px, 800px, 0) rotate(0deg); }
          33% { transform: translate3d(480px, 798px, 0) rotate(-0.5deg); }
          66% { transform: translate3d(480px, 802px, 0) rotate(0.5deg); }
        }
        .ugv-anim {
          animation: ugv-bob 2.2s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes wheel-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .wheel {
          animation: wheel-spin 1.8s linear infinite;
        }

        @keyframes mote-rise-a {
          0% { transform: translate3d(0, 0, 0); opacity: 0; }
          15% { opacity: 0.4; }
          100% { transform: translate3d(-40px, -70px, 0); opacity: 0; }
        }
        @keyframes mote-rise-b {
          0% { transform: translate3d(0, 0, 0); opacity: 0; }
          20% { opacity: 0.35; }
          100% { transform: translate3d(-25px, -95px, 0); opacity: 0; }
        }
        @keyframes mote-rise-c {
          0% { transform: translate3d(0, 0, 0); opacity: 0; }
          10% { opacity: 0.3; }
          100% { transform: translate3d(-55px, -50px, 0); opacity: 0; }
        }
        .mote-a { animation: mote-rise-a 2.6s ease-out infinite; }
        .mote-b { animation: mote-rise-b 3.4s ease-out infinite 0.6s; }
        .mote-c { animation: mote-rise-c 2.1s ease-out infinite 1.3s; }

        .vignette {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          box-shadow: inset 0 0 160px rgba(0,0,0,0.95);
          pointer-events: none;
          transition: box-shadow var(--transition-duration) var(--transition-timing);
        }
        .light-mode .vignette {
          box-shadow: inset 0 0 120px rgba(168, 78, 40, 0.15);
        }

        .scanlines {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.15) 50%);
          background-size: 100% 4px;
          pointer-events: none;
          transition: opacity var(--transition-duration) var(--transition-timing);
        }
        .light-mode .scanlines { opacity: 0.08; }

        @media (prefers-reduced-motion: reduce) {
          .scroll-fg, .scroll-mg, .scroll-bg, .scroll-towers, .scroll-fog, .scroll-drones, .scroll-clouds, .sat-drift, .wheel, .ugv-anim, .sun-morning-rays, .moon-telemetry-ring {
            animation: none !important;
          }
        }
      `}</style>

      <div className="hero-wrapper">
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* SKY GRADIENTS */}
            <linearGradient id="skyGradNight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#020604" />
              <stop offset="38%" stopColor="#081814" />
              <stop offset="68%" stopColor="#122A21" />
              <stop offset="100%" stopColor="#2E1F0E" />
            </linearGradient>

            <linearGradient id="skyGradDay" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFF3D6" />
              <stop offset="38%" stopColor="#FFD98F" />
              <stop offset="72%" stopColor="#FDBE7D" />
              <stop offset="100%" stopColor="#FDB870" />
            </linearGradient>

            {/* MOON GRADIENTS */}
            <radialGradient id="moonGlowHalo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C8FFF0" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#34d399" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="moonDiscGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E2EDE7" />
              <stop offset="65%" stopColor="#C4DDD2" />
              <stop offset="100%" stopColor="#9CBEAE" />
            </linearGradient>

            {/* SUN GRADIENTS */}
            <radialGradient id="sunGlowDay" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="24%" stopColor="#FFF6DE" stopOpacity="0.85" />
              <stop offset="58%" stopColor="#FFE3AE" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#FFE3AE" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="morningBloom" cx="53%" cy="20%" r="70%">
              <stop offset="0%" stopColor="#FFF1CC" stopOpacity="0.4" />
              <stop offset="40%" stopColor="#FCD598" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#F8C27E" stopOpacity="0" />
            </radialGradient>

            {/* VOLUMETRIC LIGHTING GRADIENTS */}
            <linearGradient id="ugvHeadlightCone" x1="0" y1="0" x2="1" y2="0.3">
              <stop offset="0%" stopColor="#E6FFF6" stopOpacity="0.6" />
              <stop offset="30%" stopColor="#34D399" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
            </linearGradient>

            <radialGradient id="ugvGroundSpot" cx="40%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#E6FFF6" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#34D399" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="droneScanConeGreen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34D399" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#34D399" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="droneScanConeAmber" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFB347" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#FFB347" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FFB347" stopOpacity="0" />
            </linearGradient>

            <filter id="shadow" x="-10%" y="-30%" width="120%" height="160%">
              <feDropShadow dx="0" dy="-10" stdDeviation="15" floodColor="#000000" floodOpacity="0.75" />
            </filter>

            <filter id="soft-blur" x="-20%" y="-100%" width="140%" height="300%">
              <feGaussianBlur stdDeviation="14" />
            </filter>

            <filter id="cloud-blur" x="-40%" y="-100%" width="180%" height="300%">
              <feGaussianBlur stdDeviation="10" />
            </filter>

            {/* TERRAIN SHAPES */}
            <path id="path-bg" className="terrain-bg-path"
              d="M-10,560 C160,470 320,430 480,460 C640,490 760,380 940,360 C1120,340 1260,430 1420,410 C1580,390 1740,460 1930,480 L1930,1080 L-10,1080 Z" />

            <path id="path-mg" className="terrain-mg-path"
              d="M-10,700 C180,640 340,680 500,650 C660,620 780,700 950,670 C1120,640 1260,700 1430,680 C1600,660 1760,710 1930,690 L1930,1080 L-10,1080 Z" />

            <g id="path-fg">
              <rect className="terrain-fg-rect" x="0" y="830" width="1920" height="250" />
              <path className="terrain-fg-ridge"
                d="M-10,830 C160,780 300,820 460,790 C620,760 740,830 900,800 C1060,770 1180,830 1340,800 C1500,770 1660,820 1930,800 L1930,1080 L-10,1080 Z" />
            </g>

            {/* RELAY TOWER */}
            <g id="tower">
              <g className="tower-structural-lines">
                <line x1="0" y1="0" x2="0" y2="160" strokeWidth="4" />
                <line x1="-22" y1="160" x2="0" y2="0" strokeWidth="2" />
                <line x1="22" y1="160" x2="0" y2="0" strokeWidth="2" />
                <line x1="-14" y1="90" x2="14" y2="90" strokeWidth="2" />
                <line x1="-9" y1="45" x2="9" y2="45" strokeWidth="2" />
                <line x1="-18" y1="30" x2="18" y2="10" strokeWidth="2" />
              </g>
              <circle cx="0" cy="0" r="3" fill="var(--ember)" className="beacon-ember" />
            </g>

            {/* DRONE WITH SEARCHLIGHT (GREEN PHOSPHOR) */}
            <g id="drone" transform="scale(1.2)">
              <polygon points="-4,8 4,8 45,180 -45,180" fill="url(#droneScanConeGreen)" className="drone-searchlight" />
              <ellipse cx="0" cy="180" rx="45" ry="9" fill="url(#droneScanConeGreen)" className="drone-ground-footprint" />

              <polygon points="-15,0 15,-5 20,5 15,10 -10,10" className="drone-body-dark" />
              <polygon points="-5,-5 10,-5 10,0 -5,0" className="drone-body-light" />
              <line x1="-20" y1="5" x2="25" y2="5" className="drone-wing-line" strokeWidth="1.5" />
              <ellipse cx="-20" cy="3" rx="8" ry="2" stroke="rgba(52,211,153,0.3)" fill="none" strokeWidth="1" />
              <ellipse cx="25" cy="3" rx="8" ry="2" stroke="rgba(52,211,153,0.3)" fill="none" strokeWidth="1" />
              <circle cx="0" cy="8" r="1.5" fill="var(--tactical-green)" className="beacon" />

              {/* HUD Flight Bracket */}
              <g transform="translate(18, -12)">
                <text className="tactical-hud-text">UAV-01 // RECON</text>
              </g>
            </g>

            {/* DRONE WITH SEARCHLIGHT (AMBER) */}
            <g id="drone-amber" transform="scale(1.2)">
              <polygon points="-4,8 4,8 45,180 -45,180" fill="url(#droneScanConeAmber)" className="drone-searchlight" />
              <ellipse cx="0" cy="180" rx="45" ry="9" fill="url(#droneScanConeAmber)" className="drone-ground-footprint" />

              <polygon points="-15,0 15,-5 20,5 15,10 -10,10" className="drone-body-dark" />
              <polygon points="-5,-5 10,-5 10,0 -5,0" className="drone-body-light" />
              <line x1="-20" y1="5" x2="25" y2="5" className="drone-wing-line" strokeWidth="1.5" />
              <ellipse cx="-20" cy="3" rx="8" ry="2" stroke="rgba(251,191,36,0.3)" fill="none" strokeWidth="1" />
              <ellipse cx="25" cy="3" rx="8" ry="2" stroke="rgba(251,191,36,0.3)" fill="none" strokeWidth="1" />
              <circle cx="0" cy="8" r="1.5" fill="var(--tactical-amber)" className="beacon-amber" />

              <g transform="translate(18, -12)">
                <text className="tactical-hud-text" style={{ fill: "var(--tactical-amber)" }}>UAV-02 // FLIR</text>
              </g>
            </g>

            {/* SUBTERRANEAN GPR TELEMETRY */}
            <g id="wireframes" className="subterranean-radar-feed" fill="none" strokeWidth="2.5" fontFamily="monospace" fontSize="13">
              <line x1="0" y1="880" x2="1920" y2="880" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.4" />
              <line x1="0" y1="960" x2="1920" y2="960" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.4" />
              <line x1="0" y1="1040" x2="1920" y2="1040" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.4" />

              <rect x="250" y="910" width="160" height="70" />
              <line x1="250" y1="910" x2="410" y2="980" />
              <line x1="410" y1="910" x2="250" y2="980" />
              <text x="250" y="900" stroke="none" fontWeight="bold">TARGET.01: BURIED VAULT</text>

              <rect x="700" y="940" width="350" height="25" />
              <line x1="750" y1="940" x2="750" y2="965" />
              <line x1="820" y1="940" x2="820" y2="965" />
              <line x1="890" y1="940" x2="890" y2="965" />
              <line x1="960" y1="940" x2="960" y2="965" />
              <text x="700" y="930" stroke="none" fontWeight="bold">SCAN: HARDENED PIPELINE</text>

              <rect x="1350" y="890" width="220" height="120" />
              <rect x="1370" y="910" width="180" height="80" />
              <line x1="1460" y1="890" x2="1460" y2="1010" />
              <text x="1350" y="880" stroke="none" fontWeight="bold">GRID NODE SUBSURFACE</text>
            </g>

            <clipPath id="ground-clip">
              <rect x="0" y="850" width="1920" height="230" />
            </clipPath>

            <mask id="radar-mask">
              <rect x="0" y="0" width="1920" height="1080" fill="black" />
              <circle cx="480" cy="815" r="0" fill="white">
                <animate attributeName="r" values="0; 450" dur="3.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8; 0" dur="3.5s" repeatCount="indefinite" />
              </circle>
            </mask>
          </defs>

          {/* LAYER 0: SKY GRADIENTS */}
          <rect className="sky-night-layer" x="0" y="0" width="1920" height="1080" fill="url(#skyGradNight)" />
          <rect className="sky-day-layer" x="0" y="0" width="1920" height="1080" fill="url(#skyGradDay)" />

          {/* LAYER 1: SKY STARFIELD */}
          <g className="night-starfield" fill="rgba(255,255,255,0.18)">
            <circle cx="150" cy="120" r="1.5" />
            <circle cx="340" cy="200" r="1" />
            <circle cx="850" cy="80" r="2" />
            <circle cx="1250" cy="250" r="1.5" />
            <circle cx="1700" cy="140" r="1" />
            <circle cx="520" cy="90" r="1" />
            <circle cx="1050" cy="170" r="1" />
            <circle cx="1500" cy="60" r="1.5" />
            <circle cx="680" cy="140" r="1" />
            <circle cx="1820" cy="85" r="1.2" />
          </g>

          {/* LAYER 1a: CARTOON CLOUD SWOOSHES */}
          <g className="scroll-clouds" filter="url(#cloud-blur)">
            <ellipse className="cloud-band" cx="260" cy="230" rx="220" ry="18" />
            <ellipse className="cloud-band" cx="720" cy="160" rx="170" ry="14" />
            <ellipse className="cloud-band" cx="1480" cy="200" rx="260" ry="20" />
            <ellipse className="cloud-band" cx="2180" cy="230" rx="220" ry="18" />
            <ellipse className="cloud-band" cx="2640" cy="160" rx="170" ry="14" />
            <ellipse className="cloud-band" cx="3400" cy="200" rx="260" ry="20" />
          </g>

          {/* ── LAYER 1b: TACTICAL MOON (NIGHT TIME PROMINENCE) ── */}
          <g className="moon-rig" id="moonRig">
            <circle cx="680" cy="260" r="180" fill="url(#moonGlowHalo)" />
            <circle className="moon-telemetry-ring" cx="680" cy="260" r="76" fill="none" stroke="var(--tactical-green)" strokeWidth="0.5" strokeDasharray="4 16" opacity="0.15" />
            <circle cx="680" cy="260" r="90" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" strokeDasharray="2 30" />
            <circle cx="680" cy="260" r="54" fill="url(#moonDiscGrad)" />
            <circle cx="664" cy="245" r="10" fill="var(--moon-crater)" opacity="0.4" />
            <circle cx="698" cy="276" r="13" fill="var(--moon-crater)" opacity="0.35" />
            <circle cx="672" cy="285" r="7" fill="var(--moon-crater)" opacity="0.3" />
            <circle cx="704" cy="248" r="6" fill="var(--moon-crater)" opacity="0.25" />
          </g>

          {/* ── LAYER 1c: THE DESERT SUN (RISES ON LIGHT MODE) ── */}
          <g className="sun-rig" id="sunRig">
            <g className="sun-morning-rays">
              <path d="M 1060,560 Q 1020,300 990,200" stroke="#FFF3D6" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
              <path d="M 1060,560 Q 1110,320 1140,180" stroke="#FFF3D6" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
              <path d="M 1060,560 Q 940,420 860,370" stroke="#FFF3D6" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.4" />
            </g>
            <g className="sun-halo-wrap">
              <circle cx="1060" cy="560" r="220" fill="url(#sunGlowDay)" />
            </g>
            <g className="sun-ring-wrap">
              <circle className="sun-corona-ring" cx="1060" cy="560" r="96" fill="none" stroke="var(--desert-sun-ring)" strokeWidth="14" />
            </g>
            <g className="sun-disc-wrap">
              <circle className="sun-disc-core" cx="1060" cy="560" r="55" />
            </g>
          </g>

          {/* Atmospheric Morning Bloom */}
          <rect className="desert-morning-bloom" x="0" y="0" width="1920" height="1080" fill="url(#morningBloom)" />

          {/* HIGH ALTITUDE AVIATION BEACONS */}
          <g className="sat-drift" fill="none">
            <circle cx="300" cy="150" r="1.5" fill="var(--horizon-amber)" className="beacon-amber" />
            <circle cx="1600" cy="110" r="1.5" fill="var(--tactical-green)" className="beacon" />
          </g>

          {/* LAYER 2: RELAY TOWERS */}
          <g className="scroll-towers">
            <g transform="translate(430, 400)"><use href="#tower" /></g>
            <g transform="translate(1180, 350)"><use href="#tower" /></g>
            <g transform="translate(430, 400) translate(1920,0)"><use href="#tower" /></g>
            <g transform="translate(1180, 350) translate(1920,0)"><use href="#tower" /></g>
          </g>

          {/* LAYER 3: BACKGROUND DUNES */}
          <g className="scroll-bg" filter="url(#shadow)">
            <use href="#path-bg" x="0" />
            <use href="#path-bg" x="1920" />
            <path className="dune-crest-highlight" stroke="var(--desert-ridge)" strokeWidth="5"
              d="M-10,560 C160,470 320,430 480,460 C640,490 760,380 940,360 C1120,340 1260,430 1420,410 C1580,390 1740,460 1930,480" />
            <path className="dune-crest-highlight" stroke="var(--desert-ridge)" strokeWidth="5"
              d="M1910,560 C2080,470 2240,430 2400,460 C2560,490 2680,380 2860,360 C3040,340 3180,430 3340,410 C3500,390 3660,460 3850,480" />
          </g>

          {/* LAYER 3b: DRIFTING FOG / DUST HAZE */}
          <g className="scroll-fog fog-haze-band" filter="url(#soft-blur)">
            <ellipse cx="300" cy="640" rx="420" ry="40" />
            <ellipse cx="1000" cy="660" rx="500" ry="45" />
            <ellipse cx="1700" cy="635" rx="380" ry="38" />
            <ellipse cx="2220" cy="640" rx="420" ry="40" />
            <ellipse cx="2920" cy="660" rx="500" ry="45" />
            <ellipse cx="3620" cy="635" rx="380" ry="38" />
          </g>

          {/* ── LAYER 4: AUTONOMOUS DRONE PATROL (LOWERED ~200px) ── */}
          <g className="scroll-drones">
            <g transform="translate(0, 0)">
              <g transform="translate(250, 350)"><use href="#drone" className="drone-1" /></g>
              <g transform="translate(600, 320)"><use href="#drone-amber" className="drone-2" /></g>
              <g transform="translate(950, 420)"><use href="#drone" className="drone-3" /></g>
              <g transform="translate(1300, 380)"><use href="#drone-amber" className="drone-1" /></g>
              <g transform="translate(1750, 400)"><use href="#drone" className="drone-2" /></g>
            </g>
            <g transform="translate(1920, 0)">
              <g transform="translate(250, 350)"><use href="#drone" className="drone-1" /></g>
              <g transform="translate(600, 320)"><use href="#drone-amber" className="drone-2" /></g>
              <g transform="translate(950, 420)"><use href="#drone" className="drone-3" /></g>
              <g transform="translate(1300, 380)"><use href="#drone-amber" className="drone-1" /></g>
              <g transform="translate(1750, 400)"><use href="#drone" className="drone-2" /></g>
            </g>
          </g>

          {/* LAYER 5: MIDGROUND DUNES */}
          <g className="scroll-mg" filter="url(#shadow)">
            <use href="#path-mg" x="0" />
            <use href="#path-mg" x="1920" />
            <path className="dune-crest-highlight" stroke="var(--desert-ridge)" strokeWidth="6"
              d="M-10,700 C180,640 340,680 500,650 C660,620 780,700 950,670 C1120,640 1260,700 1430,680 C1600,660 1760,710 1930,690" />
            <path className="dune-crest-highlight" stroke="var(--desert-ridge)" strokeWidth="6"
              d="M1910,700 C2100,640 2260,680 2420,650 C2580,620 2700,700 2870,670 C3040,640 3180,700 3350,680 C3520,660 3680,710 3850,690" />
            <ellipse className="dune-shadow-scoop" cx="640" cy="760" rx="220" ry="55" />
            <ellipse className="dune-shadow-scoop" cx="1360" cy="760" rx="260" ry="60" />
            <ellipse className="dune-shadow-scoop" cx="2560" cy="760" rx="220" ry="55" />
          </g>

          {/* LAYER 6: FOREGROUND DUNES & SUBTERRANEAN SCAN */}
          <g className="scroll-fg" filter="url(#shadow)">
            <use href="#path-fg" x="0" />
            <use href="#path-fg" x="1920" />
            <path className="dune-crest-highlight" stroke="var(--desert-ridge)" strokeWidth="7"
              d="M-10,830 C160,780 300,820 460,790 C620,760 740,830 900,800 C1060,770 1180,830 1340,800 C1500,770 1660,820 1930,800" />
            <path className="dune-crest-highlight" stroke="var(--desert-ridge)" strokeWidth="7"
              d="M1910,830 C2080,780 2220,820 2380,790 C2540,760 2660,830 2820,800 C2980,770 3100,830 3260,800 C3420,770 3580,820 3850,800" />
            <ellipse className="dune-shadow-scoop" cx="900" cy="900" rx="260" ry="60" />
            <ellipse className="dune-shadow-scoop" cx="1600" cy="900" rx="240" ry="55" />

            <g mask="url(#radar-mask)">
              <use href="#wireframes" x="0" />
              <use href="#wireframes" x="1920" />
            </g>
          </g>

          {/* ── LAYER 7: TACTICAL UGV WALRUS 2.0 ── */}
          <g className="ugv-anim" transform="translate(480, 800) scale(1.4)">
            <polygon points="45,-6 45,6 260,35 220,-16" fill="url(#ugvHeadlightCone)" className="ugv-headlight-beam" />
            <ellipse cx="190" cy="25" rx="95" ry="16" fill="url(#ugvGroundSpot)" className="ugv-ground-spot" />

            <g className="ugv-motes" transform="translate(-45, 18)" opacity="0.6">
              <circle r="2.2" className="mote-a" />
              <circle r="1.8" className="mote-b" />
              <circle r="2.5" className="mote-c" />
            </g>

            <line className="ugv-antenna-mast" x1="-25" y1="-22" x2="-35" y2="-45" strokeWidth="1.5" />
            <circle cx="-35" cy="-45" r="1.5" fill="var(--ember)" className="beacon-ember" />

            <polygon className="ugv-chassis-lower" points="-50,5 50,5 40,15 -40,15" />
            <polygon className="ugv-armor-mid" points="-50,-10 -35,-25 10,-25 35,-15 50,-5 50,5 -50,5" />
            <polygon className="ugv-armor-plate" points="-35,-22 5,-22 25,-14 -30,-14" />

            <rect className="ugv-turret-mount" x="-15" y="-35" width="20" height="10" />
            <circle className="ugv-turret-dome" cx="-5" cy="-35" r="7" />
            <circle cx="-1" cy="-35" r="1.5" fill="var(--tactical-green)" className="beacon" />
            <circle cx="-6" cy="-35" r="1.2" fill="var(--ember)" />

            <g transform="translate(-35, 12)">
              <g className="wheel">
                <circle cx="0" cy="0" r="10" fill="#040805" />
                <circle className="ugv-wheel-rim" cx="0" cy="0" r="5" />
                <line className="ugv-wheel-spoke" x1="-10" y1="0" x2="10" y2="0" strokeWidth="1.5" />
                <line className="ugv-wheel-spoke" x1="0" y1="-10" x2="0" y2="10" strokeWidth="1.5" />
              </g>
            </g>
            <g transform="translate(-10, 12)">
              <g className="wheel">
                <circle cx="0" cy="0" r="10" fill="#040805" />
                <circle className="ugv-wheel-rim" cx="0" cy="0" r="5" />
                <line className="ugv-wheel-spoke" x1="-10" y1="0" x2="10" y2="0" strokeWidth="1.5" />
                <line className="ugv-wheel-spoke" x1="0" y1="-10" x2="0" y2="10" strokeWidth="1.5" />
              </g>
            </g>
            <g transform="translate(15, 12)">
              <g className="wheel">
                <circle cx="0" cy="0" r="10" fill="#040805" />
                <circle className="ugv-wheel-rim" cx="0" cy="0" r="5" />
                <line className="ugv-wheel-spoke" x1="-10" y1="0" x2="10" y2="0" strokeWidth="1.5" />
                <line className="ugv-wheel-spoke" x1="0" y1="-10" x2="0" y2="10" strokeWidth="1.5" />
              </g>
            </g>
            <g transform="translate(40, 12)">
              <g className="wheel">
                <circle cx="0" cy="0" r="10" fill="#040805" />
                <circle className="ugv-wheel-rim" cx="0" cy="0" r="5" />
                <line className="ugv-wheel-spoke" x1="-10" y1="0" x2="10" y2="0" strokeWidth="1.5" />
                <line className="ugv-wheel-spoke" x1="0" y1="-10" x2="0" y2="10" strokeWidth="1.5" />
              </g>
            </g>

            <g transform="translate(-40, -56)">
              <text className="tactical-hud-text">WALRUS 2.0 // AUTO-SLAM</text>
            </g>
          </g>

          {/* ── LAYER 8: SUBTERRANEAN SEISMIC RADAR PULSE ── */}
          <g clipPath="url(#ground-clip)">
            <circle className="subterranean-radar-pulse" cx="480" cy="815" r="0" fill="none">
              <animate attributeName="r" values="0; 450" dur="3.5s" repeatCount="indefinite" />
              <animate attributeName="strokeWidth" values="4; 1" dur="3.5s" repeatCount="indefinite" />
            </circle>
            <circle className="subterranean-radar-pulse" cx="480" cy="815" r="0" fill="none">
              <animate attributeName="r" values="0; 450" begin="1.75s" dur="3.5s" repeatCount="indefinite" />
              <animate attributeName="strokeWidth" values="4; 1" begin="1.75s" dur="3.5s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>

        <div className="scanlines" />
        <div className="vignette" />
      </div>
    </div>
  );
}