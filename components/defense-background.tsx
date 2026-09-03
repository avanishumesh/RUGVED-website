"use client";
import React from "react";
import { useTheme } from "@/components/theme-provider";

export function DefenseBackground() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050806]">
      <style>{`
        .defense-hero-wrapper {
          position: relative;
          width: 100vw;
          height: 100vh;
          min-height: 100vh;
          background: linear-gradient(180deg, #030604 0%, #07120A 60%, #040805 100%);
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
          50% { opacity: 1; filter: drop-shadow(0 0 4px #00ff9d); }
        }
        .beacon { animation: beacon-flash 2s infinite; }
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
        /* Light mode softening - overridden via overlay */
        html.light .defense-hero-wrapper {
          filter: saturate(0.75) brightness(1.25) contrast(0.92);
        }
      `}</style>

      <div className="defense-hero-wrapper">
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="shadow" x="-10%" y="-30%" width="120%" height="160%">
              <feDropShadow dx="0" dy="-10" stdDeviation="15" floodColor="#000000" floodOpacity="0.85" />
            </filter>
            <path id="path-bg" d="M0,600 L150,500 L350,550 L600,400 L850,520 L1150,450 L1400,580 L1650,480 L1920,600 L1920,1080 L0,1080 Z" fill="#0B150E" />
            <path id="path-mg" d="M0,720 L200,680 L400,750 L650,650 L900,760 L1200,670 L1500,740 L1750,680 L1920,720 L1920,1080 L0,1080 Z" fill="#112116" />
            <g id="path-fg">
              <rect x="0" y="865" width="1920" height="215" fill="#080D09" />
              <path d="M0,850 L150,830 L300,860 L450,840 L600,855 L750,835 L900,860 L1050,840 L1200,865 L1350,835 L1500,850 L1700,835 L1920,850 L1920,1080 L0,1080 Z" fill="#172C1E" />
            </g>
            <g id="drone" transform="scale(1.2)">
              <polygon points="-15,0 15,-5 20,5 15,10 -10,10" fill="#0D1812" />
              <polygon points="-5,-5 10,-5 10,0 -5,0" fill="#172C1E" />
              <line x1="-20" y1="5" x2="25" y2="5" stroke="#1A3021" strokeWidth="2" />
              <ellipse cx="-20" cy="3" rx="8" ry="2" stroke="rgba(100,160,120,0.3)" fill="none" strokeWidth="1" />
              <ellipse cx="25" cy="3" rx="8" ry="2" stroke="rgba(100,160,120,0.3)" fill="none" strokeWidth="1" />
              <circle cx="0" cy="8" r="2.5" fill="#00ff9d" className="beacon" />
            </g>
            <g id="wireframes" stroke="#00ff9d" fill="none" strokeWidth="2" fontFamily="monospace" fontSize="14">
              <line x1="0" y1="880" x2="1920" y2="880" strokeWidth="1" strokeDasharray="5 5" opacity="0.4" />
              <line x1="0" y1="960" x2="1920" y2="960" strokeWidth="1" strokeDasharray="5 5" opacity="0.4" />
              <line x1="0" y1="1040" x2="1920" y2="1040" strokeWidth="1" strokeDasharray="5 5" opacity="0.4" />
              <rect x="250" y="910" width="160" height="70" />
              <line x1="250" y1="910" x2="410" y2="980" />
              <line x1="410" y1="910" x2="250" y2="980" />
              <text x="250" y="900" fill="#00ff9d" stroke="none" fontWeight="bold">TARGET.01: BURIED VAULT</text>
              <rect x="700" y="940" width="350" height="25" />
              <line x1="750" y1="940" x2="750" y2="965" />
              <line x1="820" y1="940" x2="820" y2="965" />
              <line x1="890" y1="940" x2="890" y2="965" />
              <line x1="960" y1="940" x2="960" y2="965" />
              <text x="700" y="930" fill="#00ff9d" stroke="none" fontWeight="bold">SCAN: HARDENED PIPELINE</text>
              <rect x="1350" y="890" width="220" height="120" />
              <rect x="1370" y="910" width="180" height="80" />
              <line x1="1460" y1="890" x2="1460" y2="1010" />
              <text x="1350" y="880" fill="#00ff9d" stroke="none" fontWeight="bold">GRID NODE SUBSURFACE</text>
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

          <g fill="rgba(255,255,255,0.15)">
            <circle cx="150" cy="120" r="1.5" />
            <circle cx="340" cy="200" r="1" />
            <circle cx="850" cy="80" r="2" />
            <circle cx="1250" cy="250" r="1.5" />
            <circle cx="1700" cy="140" r="1" />
          </g>

          <g className="scroll-drones">
            <g transform="translate(0, 0)">
              <g transform="translate(250, 150)"><use href="#drone" className="drone-1" /></g>
              <g transform="translate(600, 120)"><use href="#drone" className="drone-2" /></g>
              <g transform="translate(950, 220)"><use href="#drone" className="drone-3" /></g>
              <g transform="translate(1300, 180)"><use href="#drone" className="drone-1" /></g>
              <g transform="translate(1750, 200)"><use href="#drone" className="drone-2" /></g>
            </g>
            <g transform="translate(1920, 0)">
              <g transform="translate(250, 150)"><use href="#drone" className="drone-1" /></g>
              <g transform="translate(600, 120)"><use href="#drone" className="drone-2" /></g>
              <g transform="translate(950, 220)"><use href="#drone" className="drone-3" /></g>
              <g transform="translate(1300, 180)"><use href="#drone" className="drone-1" /></g>
              <g transform="translate(1750, 200)"><use href="#drone" className="drone-2" /></g>
            </g>
          </g>

          <g className="scroll-bg" filter="url(#shadow)">
            <use href="#path-bg" x="0" />
            <use href="#path-bg" x="1920" />
          </g>

          <g className="scroll-mg" filter="url(#shadow)">
            <use href="#path-mg" x="0" />
            <use href="#path-mg" x="1920" />
          </g>

          <g className="scroll-fg" filter="url(#shadow)">
            <use href="#path-fg" x="0" />
            <use href="#path-fg" x="1920" />
            <g mask="url(#radar-mask)">
              <use href="#wireframes" x="0" />
              <use href="#wireframes" x="1920" />
            </g>
          </g>

          <g className="ugv-anim" transform="translate(480, 800) scale(1.4)">
            <line x1="-25" y1="-22" x2="-35" y2="-45" stroke="#24422D" strokeWidth="1.5" />
            <circle cx="-35" cy="-45" r="1.5" fill="#00ff9d" className="beacon" />
            <polygon points="-50,5 50,5 40,15 -40,15" fill="#0F1A12" />
            <polygon points="-50,-10 -35,-25 10,-25 35,-15 50,-5 50,5 -50,5" fill="#1A3021" />
            <polygon points="-35,-22 5,-22 25,-14 -30,-14" fill="#24422D" />
            <rect x="-15" y="-35" width="20" height="10" fill="#0B120D" />
            <circle cx="-5" cy="-35" r="7" fill="#14261A" />
            <circle cx="0" cy="-35" r="2" fill="#00ff9d" className="beacon" />
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
            <rect x="-18" y="17" width="36" height="2" fill="#00ff9d" />
          </g>

          <g clipPath="url(#ground-clip)">
            <circle cx="480" cy="815" r="0" fill="none" stroke="#00ff9d">
              <animate attributeName="r" values="0; 450" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="strokeWidth" values="6; 1" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1; 0" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="480" cy="815" r="0" fill="none" stroke="#00ff9d">
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
