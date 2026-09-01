"use client";
import { IconMapPin, IconMail, IconDrone, IconMinus } from "@tabler/icons-react";

function SectionLabel({ k, label }: { k: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.32em] text-[#8b8f6b]">
      <span className="inline-flex items-center gap-2 border border-[#8b8f6b]/20 bg-[#8b8f6b]/10 px-2 py-1 text-[#c2b8a3]"><IconMinus className="h-3 w-3" /> {k}</span>
      <span className="h-px w-8 bg-[#8b8f6b]/20 hidden sm:block" />
      <span>{label}</span>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-[1280px] px-4 pt-6 md:px-6 md:pt-8">
      <SectionLabel k="07" label="CONTACT" />
      <div className="mt-4 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="border border-[#c2b8a3]/10 bg-[#0f120f]/70 p-6 backdrop-blur">
          <h1 className="font-mono text-xl font-black tracking-tight text-[#e8e6dc]">ESTABLISH COMMS</h1>
          <p className="mt-2 font-mono text-xs leading-relaxed text-[#8b8f6b]">Aesthetic shell — form is non-functional placeholder. Wire to your endpoint when ready. Coordinates and channels below are thematic.</p>

          <div className="mt-6 space-y-3 font-mono text-xs">
            <div className="flex items-center gap-3 border border-[#c2b8a3]/10 bg-black/30 px-3 py-2.5 text-[#c2b8a3]"><IconMapPin className="h-4 w-4 text-[#8b8f6b]" /> MIT Manipal, Udupi, Karnataka — IN</div>
            <div className="flex items-center gap-3 border border-[#c2b8a3]/10 bg-black/30 px-3 py-2.5 text-[#c2b8a3]"><IconMail className="h-4 w-4 text-[#8b8f6b]" /> rugved@manipal.edu — [PLACEHOLDER]</div>
            <div className="flex items-center gap-3 border border-[#c2b8a3]/10 bg-black/30 px-3 py-2.5 text-[#c2b8a3]"><IconDrone className="h-4 w-4 text-[#8b8f6b]" /> instagram.com/rugved_systems • github.com/RUGVED-Systems-MIT</div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2 font-mono text-[10px] tracking-[0.16em] text-[#8b8f6b]">
            <div className="border border-[#c2b8a3]/10 bg-[#080a07] p-3">
              <div>GRID REF</div><div className="text-[#c2b8a3]">13.347°N 74.792°E</div>
            </div>
            <div className="border border-[#c2b8a3]/10 bg-[#080a07] p-3">
              <div>COMMS WINDOW</div><div className="text-[#c2b8a3]">0900—1800 IST</div>
            </div>
          </div>
        </div>

        <div className="border border-[#c2b8a3]/10 bg-[#111410]/70 p-6 backdrop-blur">
          <div className="font-mono text-[10px] tracking-[0.2em] text-[#8b8f6b]">TRANSMISSION FORM — SHELL ONLY</div>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 space-y-3">
            <div className="grid gap-3 md:grid-cols-2">
              <label className="space-y-1.5">
                <span className="font-mono text-[10px] tracking-[0.18em] text-[#8b8f6b]">CALLSIGN</span>
                <input placeholder="YOUR NAME" className="w-full border border-[#c2b8a3]/15 bg-black/40 px-3 py-2.5 font-mono text-xs tracking-wide text-[#c2b8a3] placeholder:text-[#8b8f6b]/60 focus:border-[#c2b8a3]/30 focus:outline-none" />
              </label>
              <label className="space-y-1.5">
                <span className="font-mono text-[10px] tracking-[0.18em] text-[#8b8f6b]">FREQUENCY (EMAIL)</span>
                <input placeholder="you@domain.com" className="w-full border border-[#c2b8a3]/15 bg-black/40 px-3 py-2.5 font-mono text-xs tracking-wide text-[#c2b8a3] placeholder:text-[#8b8f6b]/60 focus:border-[#c2b8a3]/30 focus:outline-none" />
              </label>
            </div>
            <label className="block space-y-1.5">
              <span className="font-mono text-[10px] tracking-[0.18em] text-[#8b8f6b]">SUBJECT</span>
              <input placeholder="SPONSORSHIP / COLLAB / RECRUITMENT" className="w-full border border-[#c2b8a3]/15 bg-black/40 px-3 py-2.5 font-mono text-xs tracking-wide text-[#c2b8a3] placeholder:text-[#8b8f6b]/60 focus:border-[#c2b8a3]/30 focus:outline-none" />
            </label>
            <label className="block space-y-1.5">
              <span className="font-mono text-[10px] tracking-[0.18em] text-[#8b8f6b]">MESSAGE</span>
              <textarea rows={4} placeholder="TRANSMIT YOUR MESSAGE..." className="w-full resize-none border border-[#c2b8a3]/15 bg-black/40 px-3 py-2.5 font-mono text-xs leading-relaxed tracking-wide text-[#c2b8a3] placeholder:text-[#8b8f6b]/60 focus:border-[#c2b8a3]/30 focus:outline-none" />
            </label>
            <button type="button" className="w-full border border-[#c2b8a3] bg-[#c2b8a3] py-3 font-mono text-xs font-bold tracking-[0.18em] text-[#111410] hover:bg-[#ddd5c0] transition-colors">
              TRANSMIT — (DISABLED IN SHELL MODE)
            </button>
            <div className="text-center font-mono text-[10px] tracking-[0.16em] text-[#8b8f6b]">Forms, validation &amp; endpoints to be wired in next iteration</div>
          </form>
        </div>
      </div>
    </main>
  );
}
