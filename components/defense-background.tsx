"use client";
import React from "react";
import { useTheme } from "@/components/theme-provider";

export function DefenseBackground() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050806]">
      <style>{`
        :root {
          --void: #050806;
          --dusk-teal: #0A1B18;
          --horizon-amber: #FF8C42;
          --horizon-ember: #3A2712;
          --phosphor: #00ff9d;
          --steel-blue: #4A7A8C;
          --ember: #FF4438;
        }
        
        .defense-hero-wrapper {
          position: relative;
          width: 100vw;
          height: 100vh;
          min-height: 100vh;
          background: linear-gradient(180deg, #040A08 0%, var(--dusk-teal) 55%, var(--horizon-ember) 100%);
        }
        .defense-hero-wrapper svg {
          width: 100%;
          height: 100%;
          display: block;
        }
        
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-1920px); }
        }
        .scroll-fg { animation: scrollLeft 12s linear infinite; }
        .scroll-mg { animation: scrollLeft 28s linear infinite; }
        .scroll-bg { animation: scrollLeft 65s linear infinite; }
        .scroll-towers { animation: scrollLeft 65s linear infinite; }
        .scroll-fog { animation: scrollLeft 100s linear infinite; }
        .scroll-drones { animation: scrollLeft 45s linear infinite; }
        
        @keyframes drone-bob1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
        @keyframes drone-bob2 {
          0%, 100% { transform: translateY(15px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes drone-bob3 {
          0%, 100% { transform: translateY(-15px); }
          50% { transform: translateY(15px); }
        }
        .drone-1 { animation: drone-bob1 5.2s ease-in-out infinite; }
        .drone-2 { animation: drone-bob2 6.5s ease-in-out infinite; }
        .drone-3 { animation: drone-bob3 4.8s ease-in-out infinite; }
        
        @keyframes beacon-flash {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; filter: drop-shadow(0 0 4px var(--phosphor)); }
        }
        .beacon { animation: beacon-flash 2s infinite; }
        
        @keyframes beacon-flash-ember {
          0%, 92% { opacity: 0.15; }
          96% { opacity: 1; filter: drop-shadow(0 0 6px var(--ember)); }
          100% { opacity: 0.15; }
        }
        .beacon-ember { animation: beacon-flash-ember 3.6s infinite; }
        
        @keyframes beacon-flash-amber {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 1; filter: drop-shadow(0 0 4px var(--horizon-amber)); }
        }
        .beacon-amber { animation: beacon-flash-amber 2.3s infinite; }
        
        @keyframes sat-drift {
          from { transform: translateX(0); }
          to { transform: translateX(-2200px); }
        }
        .sat-drift { animation: sat-drift 140s linear infinite; }
        
        @keyframes ugv-bob {
          0%, 100% { transform: translate(480px, 800px) rotate(0deg); }
          33% { transform: translate(480px, 798px) rotate(-0.5deg); }
          66% { transform: translate(480px, 802px) rotate(0.5deg); }
        }
        .ugv-anim { animation: ugv-bob 2.2s ease-in-out infinite; }
        
        @keyframes wheel-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .wheel { animation: wheel-spin 1.8s linear infinite; }
        
        @keyframes mote-rise-a {
          0% { transform: translate(0, 0); opacity: 0; }
          15% { opacity: 0.8; }
          100% { transform: translate(-40px, -70px); opacity: 0; }
        }
        @keyframes mote-rise-b {
          0% { transform: translate(0, 0); opacity: 0; }
          20% { opacity: 0.7; }
          100% { transform: translate(-25px, -95px); opacity: 0; }
        }
        @keyframes mote-rise-c {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.6; }
          100% { transform: translate(-55px, -50px); opacity: 0; }
        }
        .mote-a { animation: mote-rise-a 2.6s ease-out infinite; }
        .mote-b { animation: mote-rise-b 3.4s ease-out infinite 0.6s; }
        .mote-c { animation: mote-rise-c 2.1s ease-out infinite 1.3s; }
        
        .defense-vignette {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          box-shadow: inset 0 0 160px rgba(0,0,0,0.9);
          pointer-events: none;
        }
        .defense-scanlines {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.2) 50%);
          background-size: 100% 4px;
          pointer-events: none;
        }
        
        html.light .defense-hero-wrapper {
          filter: saturate(0.75) brightness(1.25) contrast(0.92);
        }
      `}</style>

      <div className="defense-hero-wrapper">
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#040A08" />
              <stop offset="42%" stopColor="#0A1B18" />
              <stop offset="70%" stopColor="#17251C" />
              <stop offset="100%" stopColor="#3A2712" />
            </linearGradient>

            <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFC988" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#FF8C42" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FF8C42" stopOpacity="0" />
            </radialGradient>

            <filter id="shadow" x="-10%" y="-30%" width="120%" height="160%">
              <feDropShadow dx="0" dy="-10" stdDeviation="15" floodColor="#000000" floodOpacity="0.85" />
            </filter>

            <filter id="soft-blur" x="-20%" y="-100%" width="140%" height="300%">
              <feGaussianBlur stdDeviation="14" />
            </filter>

            <path id="path-bg" d="M0,600 L150,500 L350,550 L600,400 L850,520 L1150,450 L1400,580 L1650,480 L1920,600 L1920,1080 L0,1080 Z" fill="#0C1A16" stroke="#2E4A44" strokeWidth="1.5" strokeOpacity="0.35" />
            <path id="path-mg" d="M0,720 L200,680 L400,750 L650,650 L900,760 L1200,670 L1500,740 L1750,680 L1920,720 L1920,1080 L0,1080 Z" fill="#132720" stroke="#3A5A55" strokeWidth="1.5" strokeOpacity="0.3" />

            <g id="path-fg">
              <rect x="0" y="865" width="1920" height="215" fill="#080D09" />
              <path d="M0,850 L150,830 L300,860 L450,840 L600,855 L750,835 L900,860 L1050,840 L1200,865 L1350,835 L1500,850 L1700,835 L1920,850 L1920,1080 L0,1080 Z" fill="#172C1E" />
            </g>

            <g id="tower">
              <line x1="0" y1="0" x2="0" y2="160" stroke="#1F3730" strokeWidth="4" />
              <line x1="-22" y1="160" x2="0" y2="0" stroke="#1F3730" strokeWidth="2" />
              <line x1="22" y1="160" x2="0" y2="0" stroke="#1F3730" strokeWidth="2" />
              <line x1="-14" y1="90" x2="14" y2="90" stroke="#1F3730" strokeWidth="2" />
              <line x1="-9" y1="45" x2="9" y2="45" stroke="#1F3730" strokeWidth="2" />
              <line x1="-18" y1="30" x2="18" y2="10" stroke="#1F3730" strokeWidth="2" />
              <circle cx="0" cy="0" r="4" fill="var(--ember)" className="beacon-ember" />
            </g>

            <g id="drone" transform="scale(1.2)">
              <polygon points="-15,0 15,-5 20,5 15,10 -10,10" fill="#0D1812" />
              <polygon points="-5,-5 10,-5 10,0 -5,0" fill="#172C1E" />
              <line x1="-20" y1="5" x2="25" y2="5" stroke="#1A3021" strokeWidth="2" />
              <ellipse cx="-20" cy="3" rx="8" ry="2" stroke="rgba(100,160,120,0.3)" fill="none" strokeWidth="1" />
              <ellipse cx="25" cy="3" rx="8" ry="2" stroke="rgba(100,160,120,0.3)" fill="none" strokeWidth="1" />
              <circle cx="0" cy="8" r="2.5" fill="var(--phosphor)" className="beacon" />
            </g>

            <g id="drone-amber" transform="scale(1.2)">
              <polygon points="-15,0 15,-5 20,5 15,10 -10,10" fill="#0D1812" />
              <polygon points="-5,-5 10,-5 10,0 -5,0" fill="#172C1E" />
              <line x1="-20" y1="5" x2="25" y2="5" stroke="#1A3021" strokeWidth="2" />
              <ellipse cx="-20" cy="3" rx="8" ry="2" stroke="rgba(160,130,90,0.3)" fill="none" strokeWidth="1" />
              <ellipse cx="25" cy="3" rx="8" ry="2" stroke="rgba(160,130,90,0.3)" fill="none" strokeWidth="1" />
              <circle cx="0" cy="8" r="2.5" fill="var(--horizon-amber)" className="beacon-amber" />
            </g>

            <g id="wireframes" stroke="var(--phosphor)" fill="none" strokeWidth="2" fontFamily="monospace" fontSize="14">
              <line x1="0" y1="880" x2="1920" y2="880" strokeWidth="1" strokeDasharray="5 5" opacity="0.4" />
              <line x1="0" y1="960" x2="1920" y2="960" strokeWidth="1" strokeDasharray="5 5" opacity="0.4" />
              <line x1="0" y1="1040" x2="1920" y2="1040" strokeWidth="1" strokeDasharray="5 5" opacity="0.4" />

              <rect x="250" y="910" width="160" height="70" />
              <line x1="250" y1="910" x2="410" y2="980" />
              <line x1="410" y1="910" x2="250" y2="980" />
              <text x="250" y="900" fill="var(--phosphor)" stroke="none" fontWeight="bold">TARGET.01: BURIED VAULT</text>

              <rect x="700" y="940" width="350" height="25" />
              <line x1="750" y1="940" x2="750" y2="965" />
              <line x1="820" y1="940" x2="820" y2="965" />
              <line x1="890" y1="940" x2="890" y2="965" />
              <line x1="960" y1="940" x2="960" y2="965" />
              <text x="700" y="930" fill="var(--phosphor)" stroke="none" fontWeight="bold">SCAN: HARDENED PIPELINE</text>

              <rect x="1350" y="890" width="220" height="120" />
              <rect x="1370" y="910" width="180" height="80" />
              <line x1="1460" y1="890" x2="1460" y2="1010" />
              <text x="1350" y="880" fill="var(--phosphor)" stroke="none" fontWeight="bold">GRID NODE SUBSURFACE</text>
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

          {/* LAYER 0: SKY GRADIENT */}
          <rect x="0" y="0" width="1920" height="1080" fill="url(#skyGrad)" />

          {/* LAYER 1: SKY STARFIELD / SATELLITES */}
          <g fill="rgba(255,255,255,0.15)">
            <circle cx="150" cy="120" r="1.5" />
            <circle cx="340" cy="200" r="1" />
            <circle cx="850" cy="80" r="2" />
            <circle cx="1250" cy="250" r="1.5" />
            <circle cx="1700" cy="140" r="1" />
            <circle cx="520" cy="90" r="1" />
            <circle cx="1050" cy="170" r="1" />
            <circle cx="1500" cy="60" r="1.5" />
          </g>

          {/* LAYER 1b: LOW SUN */}
          <circle cx="1020" cy="560" r="220" fill="url(#sunGlow)" />
          <circle cx="1020" cy="560" r="55" fill="#FFC988" opacity="0.85" />

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

          {/* LAYER 3: BACKGROUND MOUNTAINS */}
          <g className="scroll-bg" filter="url(#shadow)">
            <use href="#path-bg" x="0" />
            <use href="#path-bg" x="1920" />
          </g>

          {/* LAYER 3b: DRIFTING FOG BAND */}
          <g className="scroll-fog" opacity="0.16" filter="url(#soft-blur)">
            <ellipse cx="300" cy="640" rx="420" ry="40" fill="var(--steel-blue)" />
            <ellipse cx="1000" cy="660" rx="500" ry="45" fill="var(--steel-blue)" />
            <ellipse cx="1700" cy="635" rx="380" ry="38" fill="var(--steel-blue)" />
            <ellipse cx="2220" cy="640" rx="420" ry="40" fill="var(--steel-blue)" />
            <ellipse cx="2920" cy="660" rx="500" ry="45" fill="var(--steel-blue)" />
            <ellipse cx="3620" cy="635" rx="380" ry="38" fill="var(--steel-blue)" />
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

          {/* LAYER 5: MIDGROUND HILLS */}
          <g className="scroll-mg" filter="url(#shadow)">
            <use href="#path-mg" x="0" />
            <use href="#path-mg" x="1920" />
          </g>

          {/* LAYER 6: FOREGROUND TERRAIN */}
          <g className="scroll-fg" filter="url(#shadow)">
            <use href="#path-fg" x="0" />
            <use href="#path-fg" x="1920" />

            <g mask="url(#radar-mask)">
              <use href="#wireframes" x="0" />
              <use href="#wireframes" x="1920" />
            </g>
          </g>

          {/* LAYER 7: TACTICAL UGV GROUND VEHICLE */}
          <g className="ugv-anim" transform="translate(480, 800) scale(1.4)">
            <g transform="translate(-45, 18)" fill="var(--ember)" opacity="0.7">
              <circle r="2" className="mote-a" />
              <circle r="1.6" className="mote-b" />
              <circle r="2.2" className="mote-c" />
            </g>

            <line x1="-25" y1="-22" x2="-35" y2="-45" stroke="#24422D" strokeWidth="1.5" />
            <circle cx="-35" cy="-45" r="1.5" fill="var(--phosphor)" className="beacon" />

            <polygon points="-50,5 50,5 40,15 -40,15" fill="#0F1A12" />
            <polygon points="-50,-10 -35,-25 10,-25 35,-15 50,-5 50,5 -50,5" fill="#1A3021" />
            <polygon points="-35,-22 5,-22 25,-14 -30,-14" fill="#24422D" />

            <rect x="-15" y="-35" width="20" height="10" fill="#0B120D" />
            <circle cx="-5" cy="-35" r="7" fill="#14261A" />
            <circle cx="0" cy="-35" r="2" fill="var(--phosphor)" className="beacon" />

            <g transform="translate(-35, 12)">
              <g className="wheel">
                <circle cx="0" cy="0" r="10" fill="#060A07" />
                <circle cx="0" cy="0" r="5" fill="#1A3021" />
                <line x1="-10" y1="0" x2="10" y2="0" stroke="#24422D" strokeWidth="1.5" />
                <line x1="0" y1="-10" x2="0" y2="10" stroke="#24422D" strokeWidth="1.5" />
              </g>
            </g>
            <g transform="translate(-10, 12)">
              <g className="wheel">
                <circle cx="0" cy="0" r="10" fill="#060A07" />
                <circle cx="0" cy="0" r="5" fill="#1A3021" />
                <line x1="-10" y1="0" x2="10" y2="0" stroke="#24422D" strokeWidth="1.5" />
                <line x1="0" y1="-10" x2="0" y2="10" stroke="#24422D" strokeWidth="1.5" />
              </g>
            </g>
            <g transform="translate(15, 12)">
              <g className="wheel">
                <circle cx="0" cy="0" r="10" fill="#060A07" />
                <circle cx="0" cy="0" r="5" fill="#1A3021" />
                <line x1="-10" y1="0" x2="10" y2="0" stroke="#24422D" strokeWidth="1.5" />
                <line x1="0" y1="-10" x2="0" y2="10" stroke="#24422D" strokeWidth="1.5" />
              </g>
            </g>
            <g transform="translate(40, 12)">
              <g className="wheel">
                <circle cx="0" cy="0" r="10" fill="#060A07" />
                <circle cx="0" cy="0" r="5" fill="#1A3021" />
                <line x1="-10" y1="0" x2="10" y2="0" stroke="#24422D" strokeWidth="1.5" />
                <line x1="0" y1="-10" x2="0" y2="10" stroke="#24422D" strokeWidth="1.5" />
              </g>
            </g>

            <rect x="-20" y="15" width="40" height="6" fill="#070D09" />
            <rect x="-18" y="17" width="36" height="2" fill="var(--phosphor)" />
          </g>

          {/* LAYER 8: GROUND PENETRATING RADAR */}
          <g clipPath="url(#ground-clip)">
            <circle cx="480" cy="815" r="0" fill="none" stroke="var(--phosphor)">
              <animate attributeName="r" values="0; 450" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="strokeWidth" values="6; 1" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1; 0" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="480" cy="815" r="0" fill="none" stroke="var(--phosphor)">
              <animate attributeName="r" values="0; 450" begin="1.2s" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="strokeWidth" values="6; 1" begin="1.2s" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1; 0" begin="1.2s" dur="2.4s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
        <div className="defense-scanlines" />
        <div className="defense-vignette" />
      </div>
    </div>
  );
}