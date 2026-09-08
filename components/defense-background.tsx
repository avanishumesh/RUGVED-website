"use client";
import React from "react";
import { useTheme } from "@/components/theme-provider";

export function DefenseBackground() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden ${isLight ? "light-mode" : ""}`}>
      <style>{`
        :root {
          --void: #050806;
          --dusk-teal: #0A1B18;
          --horizon-amber: #FF8C42;
          --horizon-ember: #3A2712;
          --phosphor: #00ff9d;
          --steel-blue: #4A7A8C;
          --ember: #FF4438;

          /* Cartoon Desert Palette (matched to reference illustration) */
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
          --desert-hud: #A84E28;

          /* Transition Timing */
          --transition-duration: 2.6s;
          --transition-timing: cubic-bezier(0.2, 0.9, 0.25, 1);
        }

        .hero-wrapper {
          position: relative;
          width: 100vw;
          height: 100vh;
          min-height: 100vh;
          background: #040A08;
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

        /* SUN RIG — scale via transform, never animate r/geometry attributes.
           Animating SVG r on transition is not compositor-friendly and is the
           usual source of jank; every size change below moves through a
           wrapping <g> transform instead. */
        .sun-rig {
          transform: translateY(0px);
          transition: transform var(--transition-duration) var(--transition-timing);
          transform-origin: 1020px 560px;
        }

        .light-mode .sun-rig {
          transform: translateY(-290px);
        }

        .sun-halo-wrap,
        .sun-ring-wrap,
        .sun-disc-wrap {
          transform-origin: 1020px 560px;
          transition: transform var(--transition-duration) var(--transition-timing);
        }

        .light-mode .sun-halo-wrap { transform: scale(1.35); }
        .light-mode .sun-ring-wrap { transform: scale(1.15); }
        .light-mode .sun-disc-wrap { transform: scale(1.2); }

        .sun-halo-a, .sun-halo-b {
          transition: opacity var(--transition-duration) var(--transition-timing);
        }
        .sun-halo-a { opacity: 1; }
        .sun-halo-b { opacity: 0; }
        .light-mode .sun-halo-a { opacity: 0; }
        .light-mode .sun-halo-b { opacity: 1; }

        .sun-corona-ring {
          opacity: 0;
          transition: opacity var(--transition-duration) var(--transition-timing);
        }
        .light-mode .sun-corona-ring { opacity: 0.55; }

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
          transform-origin: 1020px 560px;
          transition: opacity var(--transition-duration) var(--transition-timing);
          pointer-events: none;
        }

        .light-mode .sun-morning-rays {
          opacity: 0.3;
          animation: rotateRays 160s linear infinite;
        }

        @keyframes rotateRays {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .desert-morning-bloom {
          opacity: 0;
          transition: opacity var(--transition-duration) var(--transition-timing);
          pointer-events: none;
          mix-blend-mode: screen;
        }

        .light-mode .desert-morning-bloom {
          opacity: 0.35;
        }

        /* CLOUD SWOOSHES — soft flat cartoon cloud bands, slow parallax drift */
        .cloud-band {
          fill: var(--desert-cloud);
          opacity: 0;
          transition: opacity var(--transition-duration) var(--transition-timing);
        }
        .light-mode .cloud-band { opacity: 0.55; }

        /* SKY LAYERS CROSS-FADE */
        .sky-night-layer,
        .sky-day-layer {
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

        /* DESERT TERRAIN — smooth rounded cartoon dune silhouettes */
        .terrain-bg-path {
          fill: #0C1A16;
          transition: fill var(--transition-duration) var(--transition-timing);
        }
        .light-mode .terrain-bg-path {
          fill: var(--desert-sandstone);
        }

        .terrain-mg-path {
          fill: #132720;
          transition: fill var(--transition-duration) var(--transition-timing);
        }
        .light-mode .terrain-mg-path {
          fill: var(--desert-sand);
        }

        .terrain-fg-rect {
          fill: #080D09;
          transition: fill var(--transition-duration) var(--transition-timing);
        }
        .light-mode .terrain-fg-rect { fill: var(--desert-shadow); }

        .terrain-fg-ridge {
          fill: #172C1E;
          transition: fill var(--transition-duration) var(--transition-timing);
        }
        .light-mode .terrain-fg-ridge { fill: var(--desert-ground); }

        /* Sunlit crest lines — thin highlight strokes tracing the top of each
           dune layer, only visible in day mode, matching the reference's
           sun-facing ridge highlights */
        .dune-crest-highlight {
          fill: none;
          stroke-linecap: round;
          opacity: 0;
          transition: opacity var(--transition-duration) var(--transition-timing);
        }
        .light-mode .dune-crest-highlight { opacity: 0.7; }

        /* Soft shadow scoops at dune bases — flat cartoon shading */
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
          opacity: 0.16;
          transition: opacity var(--transition-duration) var(--transition-timing);
        }
        .light-mode .fog-haze-band ellipse { fill: var(--desert-dust); }
        .light-mode .scroll-fog { opacity: 0.3; }

        .tower-structural-lines line {
          stroke: #1F3730;
          transition: stroke var(--transition-duration) var(--transition-timing);
        }
        .light-mode .tower-structural-lines line { stroke: #A76241; }

        /* TACTICAL DRONES & UGV */
        .drone-body-dark { fill: #0D1812; transition: fill var(--transition-duration) var(--transition-timing); }
        .drone-body-light { fill: #172C1E; transition: fill var(--transition-duration) var(--transition-timing); }
        .drone-wing-line { stroke: #1A3021; transition: stroke var(--transition-duration) var(--transition-timing); }
        .light-mode .drone-body-dark { fill: #52392A; }
        .light-mode .drone-body-light { fill: #7D5C46; }
        .light-mode .drone-wing-line { stroke: #9E7A60; }

        /* UGV explicitly maintains its darkish green color profile across both modes */
        .ugv-chassis-lower { fill: #0F1A12; }
        .ugv-armor-mid { fill: #1A3021; }
        .ugv-armor-plate { fill: #24422D; }
        .ugv-turret-mount { fill: #0B120D; }
        .ugv-turret-dome { fill: #14261A; }
        .ugv-wheel-rim { fill: #1A3021; }
        .ugv-wheel-spoke { stroke: #24422D; }
        .ugv-antenna-mast { stroke: #24422D; }
        .ugv-motes { fill: var(--ember); }

        .subterranean-radar-feed { stroke: var(--phosphor); transition: stroke var(--transition-duration) var(--transition-timing); }
        .subterranean-radar-feed text { fill: var(--phosphor); transition: fill var(--transition-duration) var(--transition-timing); }
        .subterranean-radar-pulse { stroke: var(--phosphor); transition: stroke var(--transition-duration) var(--transition-timing); }

        .light-mode .subterranean-radar-feed { stroke: #5C220E; }
        .light-mode .subterranean-radar-feed text { fill: #5C220E; }
        .light-mode .subterranean-radar-pulse { stroke: #5C220E; }

        /* MATHEMATICAL PARALLAX LOOPING KEYFRAMES — all transform-based
           (translate3d), which stays on the compositor and avoids stutter
           regardless of how many layers are running at once. */
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
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        .beacon { animation: beacon-flash 2s infinite; }

        @keyframes beacon-flash-ember {
          0%, 92% { opacity: 0.15; }
          96% { opacity: 1; }
          100% { opacity: 0.15; }
        }
        .beacon-ember { animation: beacon-flash-ember 3.6s infinite; }

        @keyframes beacon-flash-amber {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 1; }
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
          15% { opacity: 0.8; }
          100% { transform: translate3d(-40px, -70px, 0); opacity: 0; }
        }
        @keyframes mote-rise-b {
          0% { transform: translate3d(0, 0, 0); opacity: 0; }
          20% { opacity: 0.7; }
          100% { transform: translate3d(-25px, -95px, 0); opacity: 0; }
        }
        @keyframes mote-rise-c {
          0% { transform: translate3d(0, 0, 0); opacity: 0; }
          10% { opacity: 0.6; }
          100% { transform: translate3d(-55px, -50px, 0); opacity: 0; }
        }
        .mote-a { animation: mote-rise-a 2.6s ease-out infinite; }
        .mote-b { animation: mote-rise-b 3.4s ease-out infinite 0.6s; }
        .mote-c { animation: mote-rise-c 2.1s ease-out infinite 1.3s; }

        .vignette {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          box-shadow: inset 0 0 160px rgba(0,0,0,0.9);
          pointer-events: none;
          transition: box-shadow var(--transition-duration) var(--transition-timing);
        }

        .light-mode .vignette {
          box-shadow: inset 0 0 120px rgba(168, 78, 40, 0.18);
        }

        .scanlines {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.2) 50%);
          background-size: 100% 4px;
          pointer-events: none;
          transition: opacity var(--transition-duration) var(--transition-timing);
        }

        .light-mode .scanlines {
          opacity: 0.15;
        }
      `}</style>

      <div className="hero-wrapper">
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="skyGradNight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#040A08" />
              <stop offset="42%" stopColor="#0A1B18" />
              <stop offset="70%" stopColor="#17251C" />
              <stop offset="100%" stopColor="#3A2712" />
            </linearGradient>

            <linearGradient id="skyGradDay" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFF3D6" />
              <stop offset="38%" stopColor="#FFD98F" />
              <stop offset="72%" stopColor="#FDBE7D" />
              <stop offset="100%" stopColor="#FDB870" />
            </linearGradient>

            <radialGradient id="sunGlowNight" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFC988" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#FF8C42" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FF8C42" stopOpacity="0" />
            </radialGradient>

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

            <filter id="shadow" x="-10%" y="-30%" width="120%" height="160%">
              <feDropShadow dx="0" dy="-10" stdDeviation="15" floodColor="#000000" floodOpacity="0.85" />
            </filter>

            <filter id="soft-blur" x="-20%" y="-100%" width="140%" height="300%">
              <feGaussianBlur stdDeviation="14" />
            </filter>

            <filter id="cloud-blur" x="-40%" y="-100%" width="180%" height="300%">
              <feGaussianBlur stdDeviation="10" />
            </filter>

            {/* Smooth rounded dune silhouettes — replaces the old jagged
                zig-zag lines with cartoon-style bezier curves like the
                reference illustration. */}
            <path id="path-bg" className="terrain-bg-path"
              d="M-10,560 C160,470 320,430 480,460 C640,490 760,380 940,360 C1120,340 1260,430 1420,410 C1580,390 1740,460 1930,480 L1930,1080 L-10,1080 Z" />

            <path id="path-mg" className="terrain-mg-path"
              d="M-10,700 C180,640 340,680 500,650 C660,620 780,700 950,670 C1120,640 1260,700 1430,680 C1600,660 1760,710 1930,690 L1930,1080 L-10,1080 Z" />

            <g id="path-fg">
              <rect className="terrain-fg-rect" x="0" y="830" width="1920" height="250" />
              <path className="terrain-fg-ridge"
                d="M-10,830 C160,780 300,820 460,790 C620,760 740,830 900,800 C1060,770 1180,830 1340,800 C1500,770 1660,820 1930,800 L1930,1080 L-10,1080 Z" />
            </g>

            <g id="tower">
              <g className="tower-structural-lines">
                <line x1="0" y1="0" x2="0" y2="160" strokeWidth="4" />
                <line x1="-22" y1="160" x2="0" y2="0" strokeWidth="2" />
                <line x1="22" y1="160" x2="0" y2="0" strokeWidth="2" />
                <line x1="-14" y1="90" x2="14" y2="90" strokeWidth="2" />
                <line x1="-9" y1="45" x2="9" y2="45" strokeWidth="2" />
                <line x1="-18" y1="30" x2="18" y2="10" strokeWidth="2" />
              </g>
              <circle cx="0" cy="0" r="4" fill="var(--ember)" className="beacon-ember" />
            </g>

            <g id="drone" transform="scale(1.2)">
              <polygon points="-15,0 15,-5 20,5 15,10 -10,10" className="drone-body-dark" />
              <polygon points="-5,-5 10,-5 10,0 -5,0" className="drone-body-light" />
              <line x1="-20" y1="5" x2="25" y2="5" className="drone-wing-line" strokeWidth="2" />
              <ellipse cx="-20" cy="3" rx="8" ry="2" stroke="rgba(100,160,120,0.3)" fill="none" strokeWidth="1" />
              <ellipse cx="25" cy="3" rx="8" ry="2" stroke="rgba(100,160,120,0.3)" fill="none" strokeWidth="1" />
              <circle cx="0" cy="8" r="2.5" fill="var(--phosphor)" className="beacon" />
            </g>

            <g id="drone-amber" transform="scale(1.2)">
              <polygon points="-15,0 15,-5 20,5 15,10 -10,10" className="drone-body-dark" />
              <polygon points="-5,-5 10,-5 10,0 -5,0" className="drone-body-light" />
              <line x1="-20" y1="5" x2="25" y2="5" className="drone-wing-line" strokeWidth="2" />
              <ellipse cx="-20" cy="3" rx="8" ry="2" stroke="rgba(160,130,90,0.3)" fill="none" strokeWidth="1" />
              <ellipse cx="25" cy="3" rx="8" ry="2" stroke="rgba(160,130,90,0.3)" fill="none" strokeWidth="1" />
              <circle cx="0" cy="8" r="2.5" fill="var(--horizon-amber)" className="beacon-amber" />
            </g>

            <g id="wireframes" className="subterranean-radar-feed" fill="none" strokeWidth="2" fontFamily="monospace" fontSize="14">
              <line x1="0" y1="880" x2="1920" y2="880" strokeWidth="1" strokeDasharray="5 5" opacity="0.4" />
              <line x1="0" y1="960" x2="1920" y2="960" strokeWidth="1" strokeDasharray="5 5" opacity="0.4" />
              <line x1="0" y1="1040" x2="1920" y2="1040" strokeWidth="1" strokeDasharray="5 5" opacity="0.4" />

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
                <animate attributeName="r" values="0; 450" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1; 0" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="480" cy="815" r="0" fill="white">
                <animate attributeName="r" values="0; 450" begin="1.2s" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1; 0" begin="1.2s" dur="2.4s" repeatCount="indefinite" />
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

          {/* LAYER 1a: CARTOON CLOUD SWOOSHES (day only, slow drift) */}
          <g className="scroll-clouds" filter="url(#cloud-blur)">
            <ellipse className="cloud-band" cx="260" cy="230" rx="220" ry="18" />
            <ellipse className="cloud-band" cx="720" cy="160" rx="170" ry="14" />
            <ellipse className="cloud-band" cx="1480" cy="200" rx="260" ry="20" />
            <ellipse className="cloud-band" cx="2180" cy="230" rx="220" ry="18" />
            <ellipse className="cloud-band" cx="2640" cy="160" rx="170" ry="14" />
            <ellipse className="cloud-band" cx="3400" cy="200" rx="260" ry="20" />
          </g>

          {/* LAYER 1b: THE SUN RIG — cartoon halo + corona ring + solid disc,
              styled after the reference image's sun treatment. Every size
              change is a transform on a wrapping <g>, never an r/attribute
              animation, so the crossfade stays smooth. */}
          <g className="sun-rig" id="sunRig">
            <g className="sun-morning-rays">
              <path d="M 1020,560 Q 980,300 950,200" stroke="#FFF3D6" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
              <path d="M 1020,560 Q 1070,320 1100,180" stroke="#FFF3D6" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
            </g>
            <g className="sun-halo-wrap">
              <circle className="sun-halo-a" cx="1020" cy="560" r="180" fill="url(#sunGlowNight)" />
              <circle className="sun-halo-b" cx="1020" cy="560" r="220" fill="url(#sunGlowDay)" />
            </g>
            <g className="sun-ring-wrap">
              <circle className="sun-corona-ring" cx="1020" cy="560" r="95" fill="none" stroke="var(--desert-sun-ring)" strokeWidth="14" />
            </g>
            <g className="sun-disc-wrap">
              <circle className="sun-disc-core" cx="1020" cy="560" r="55" />
            </g>
          </g>

          {/* Atmospheric Morning Desert Sun Bloom */}
          <rect className="desert-morning-bloom" x="0" y="0" width="1920" height="1080" fill="url(#morningBloom)" />

          {/* LAYER 1c: DISTANT AIR TRAFFIC */}
          <g className="sat-drift" fill="none">
            <circle cx="300" cy="150" r="2" fill="var(--horizon-amber)" className="beacon-amber" />
            <circle cx="1600" cy="110" r="1.6" fill="var(--phosphor)" className="beacon" />
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

          {/* LAYER 4: AUTONOMOUS DRONE SWARM */}
          <g className="scroll-drones">
            <g transform="translate(0, 0)">
              <g transform="translate(250, 150)"><use href="#drone" className="drone-1" /></g>
              <g transform="translate(600, 120)"><use href="#drone-amber" className="drone-2" /></g>
              <g transform="translate(950, 220)"><use href="#drone" className="drone-3" /></g>
              <g transform="translate(1300, 180)"><use href="#drone-amber" className="drone-1" /></g>
              <g transform="translate(1750, 200)"><use href="#drone" className="drone-2" /></g>
            </g>
            <g transform="translate(1920, 0)">
              <g transform="translate(250, 150)"><use href="#drone" className="drone-1" /></g>
              <g transform="translate(600, 120)"><use href="#drone-amber" className="drone-2" /></g>
              <g transform="translate(950, 220)"><use href="#drone" className="drone-3" /></g>
              <g transform="translate(1300, 180)"><use href="#drone-amber" className="drone-1" /></g>
              <g transform="translate(1750, 200)"><use href="#drone" className="drone-2" /></g>
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

          {/* LAYER 6: FOREGROUND DESERT TERRAIN */}
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

          {/* LAYER 7: TACTICAL UGV GROUND VEHICLE (Darkish Green Maintained in both modes) */}
          <g className="ugv-anim" transform="translate(480, 800) scale(1.4)">
            <g className="ugv-motes" transform="translate(-45, 18)" opacity="0.75">
              <circle r="2.2" className="mote-a" />
              <circle r="1.8" className="mote-b" />
              <circle r="2.5" className="mote-c" />
            </g>

            <line className="ugv-antenna-mast" x1="-25" y1="-22" x2="-35" y2="-45" strokeWidth="1.5" />
            <circle cx="-35" cy="-45" r="1.5" fill="var(--phosphor)" className="beacon" />

            <polygon className="ugv-chassis-lower" points="-50,5 50,5 40,15 -40,15" />
            <polygon className="ugv-armor-mid" points="-50,-10 -35,-25 10,-25 35,-15 50,-5 50,5 -50,5" />
            <polygon className="ugv-armor-plate" points="-35,-22 5,-22 25,-14 -30,-14" />

            <rect className="ugv-turret-mount" x="-15" y="-35" width="20" height="10" />
            <circle className="ugv-turret-dome" cx="-5" cy="-35" r="7" />
            <circle cx="0" cy="-35" r="2" fill="var(--phosphor)" className="beacon" />

            <g transform="translate(-35, 12)">
              <g className="wheel">
                <circle cx="0" cy="0" r="10" fill="#060A07" />
                <circle className="ugv-wheel-rim" cx="0" cy="0" r="5" />
                <line className="ugv-wheel-spoke" x1="-10" y1="0" x2="10" y2="0" strokeWidth="1.5" />
                <line className="ugv-wheel-spoke" x1="0" y1="-10" x2="0" y2="10" strokeWidth="1.5" />
              </g>
            </g>
            <g transform="translate(-10, 12)">
              <g className="wheel">
                <circle cx="0" cy="0" r="10" fill="#060A07" />
                <circle className="ugv-wheel-rim" cx="0" cy="0" r="5" />
                <line className="ugv-wheel-spoke" x1="-10" y1="0" x2="10" y2="0" strokeWidth="1.5" />
                <line className="ugv-wheel-spoke" x1="0" y1="-10" x2="0" y2="10" strokeWidth="1.5" />
              </g>
            </g>
            <g transform="translate(15, 12)">
              <g className="wheel">
                <circle cx="0" cy="0" r="10" fill="#060A07" />
                <circle className="ugv-wheel-rim" cx="0" cy="0" r="5" />
                <line className="ugv-wheel-spoke" x1="-10" y1="0" x2="10" y2="0" strokeWidth="1.5" />
                <line className="ugv-wheel-spoke" x1="0" y1="-10" x2="0" y2="10" strokeWidth="1.5" />
              </g>
            </g>
            <g transform="translate(40, 12)">
              <g className="wheel">
                <circle cx="0" cy="0" r="10" fill="#060A07" />
                <circle className="ugv-wheel-rim" cx="0" cy="0" r="5" />
                <line className="ugv-wheel-spoke" x1="-10" y1="0" x2="10" y2="0" strokeWidth="1.5" />
                <line className="ugv-wheel-spoke" x1="0" y1="-10" x2="0" y2="10" strokeWidth="1.5" />
              </g>
            </g>

            <rect x="-20" y="15" width="40" height="6" fill="#070D09" />
            <rect x="-18" y="17" width="36" height="2" fill="var(--phosphor)" />
          </g>

          {/* LAYER 8: GROUND PENETRATING RADAR */}
          <g clipPath="url(#ground-clip)">
            <circle className="subterranean-radar-pulse" cx="480" cy="815" r="0" fill="none">
              <animate attributeName="r" values="0; 450" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="strokeWidth" values="6; 1" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1; 0" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle className="subterranean-radar-pulse" cx="480" cy="815" r="0" fill="none">
              <animate attributeName="r" values="0; 450" begin="1.2s" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="strokeWidth" values="6; 1" begin="1.2s" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1; 0" begin="1.2s" dur="2.4s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>

        <div className="scanlines"></div>
        <div className="vignette"></div>
      </div>
    </div>
  );
}
