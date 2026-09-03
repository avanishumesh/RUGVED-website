"use client";
import React, { useState } from "react";
import TacticalCard from "@/components/ui/TacticalCard";
import {
  IconMapPin,
  IconMail,
  IconRadio,
  IconMinus,
  IconSend,
  IconCheck,
  IconBrandGithub,
  IconBrandInstagram,
  IconCrosshair,
  IconTerminal,
  IconLock,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactPage() {
  const [callsign, setCallsign] = useState("");
  const [frequency, setFrequency] = useState("5.8 GHz // MESH UPLINK");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("SPONSORSHIP");
  const [message, setMessage] = useState("");
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmitted, setTransmitted] = useState(false);

  const handleQuickCallsign = () => {
    const prefixes = ["OPERATOR", "CADET", "SPONSOR", "RECON", "RESEARCHER"];
    const random = `${prefixes[Math.floor(Math.random() * prefixes.length)]}-${Math.floor(10 + Math.random() * 90)}`;
    setCallsign(random);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    setIsTransmitting(true);
    setTimeout(() => {
      setIsTransmitting(false);
      setTransmitted(true);
    }, 1600);
  };

  return (
    <main className="mx-auto max-w-[1440px] px-6 pt-8 md:px-8 md:pt-10 space-y-12">
      <SectionLabel k="07" label="SECURE TRANSMISSION TERMINAL" />

      {/* Header */}
      <div className="border-b border-[#c2b8a3]/12 pb-6">
        <h1 className="font-mono text-[32px] font-black tracking-tight text-[#e8e6dc] md:text-[42px] leading-none">
          ESTABLISH SECURE COMMS
        </h1>
        <p className="mt-3 max-w-[70ch] font-mono text-[13px] leading-relaxed text-[#8b8f6b]">
          Transmit operational inquiries, sponsorship proposals, recruitment queries, or technical collaborations directly to the RUGVED command station at MIT Manipal.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        {/* Left: Base Station Telemetry */}
        <div className="space-y-6">
          <TacticalCard badge="BASE STATION" className="p-7 space-y-6">
            <div>
              <div className="font-mono text-[11px] tracking-widest text-[#8b8f6b]">
                COMMAND POST TELEMETRY
              </div>
              <h2 className="mt-2 font-mono text-[22px] font-bold text-[#e8e6dc]">
                MIT Manipal Node
              </h2>
            </div>

            <div className="space-y-3 font-mono text-[13px]">
              <div className="flex items-center gap-3 rounded-lg border border-[#c2b8a3]/12 bg-black/40 p-3.5 text-[#c2b8a3]">
                <IconMapPin className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Manipal Institute of Technology, Udupi, Karnataka, India</span>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-[#c2b8a3]/12 bg-black/40 p-3.5 text-[#c2b8a3]">
                <IconMail className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>rugved.systems@manipal.edu</span>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-[#c2b8a3]/12 bg-black/40 p-3.5 text-[#c2b8a3]">
                <IconRadio className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Active Frequency: {frequency}</span>
              </div>
            </div>

            {/* Coordinates Grid */}
            <div className="grid grid-cols-2 gap-3 font-mono text-[11px]">
              <div className="rounded-lg border border-[#c2b8a3]/12 bg-black/40 p-3">
                <div className="text-[10px] text-[#8b8f6b]">GPS COORDINATES</div>
                <div className="font-bold text-[#e8e6dc] text-[13px] mt-1">13.347°N, 74.792°E</div>
              </div>
              <div className="rounded-lg border border-[#c2b8a3]/12 bg-black/40 p-3">
                <div className="text-[10px] text-[#8b8f6b]">ELEVATION</div>
                <div className="font-bold text-[#e8e6dc] text-[13px] mt-1">73m MSL</div>
              </div>
            </div>

            <div className="flex items-center gap-3 border-t border-[#c2b8a3]/10 pt-4 font-mono text-[11px] text-[#8b8f6b]">
              <a
                href="https://github.com/RUGVED-Systems-MIT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#e8e6dc] transition-colors"
              >
                <IconBrandGithub className="h-4 w-4" /> GITHUB
              </a>
              <span>•</span>
              <a
                href="https://www.instagram.com/rugved_systems"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#e8e6dc] transition-colors"
              >
                <IconBrandInstagram className="h-4 w-4" /> INSTAGRAM
              </a>
            </div>
          </TacticalCard>
        </div>

        {/* Right: Interactive Transmission Form */}
        <TacticalCard badge="ENCRYPTED UPLINK" className="p-8 md:p-10">
          <AnimatePresence mode="wait">
            {transmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center font-mono space-y-4"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/50 bg-emerald-500/15 text-emerald-400">
                  <IconCheck className="h-8 w-8" />
                </div>
                <h3 className="text-[24px] font-bold text-[#f2efe6]">
                  TRANSMISSION DISPATCHED // SUCCESS
                </h3>
                <p className="max-w-[48ch] mx-auto text-[13px] text-[#8b8f6b]">
                  Packet successfully routed to the RUGVED command hub via frequency <span className="text-[#c2b8a3]">{frequency}</span>. Stand by for operator handshake.
                </p>
                <button
                  onClick={() => {
                    setTransmitted(false);
                    setMessage("");
                  }}
                  className="mt-4 rounded-lg bg-[#c2b8a3] px-6 py-2.5 text-[12px] font-bold text-[#111410] hover:bg-[#ddd5c0] transition-colors"
                >
                  TRANSMIT ANOTHER PACKET
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-mono text-[12px]">
                {/* Callsign & Email */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[#8b8f6b] text-[10px] tracking-wider">
                      <span>OPERATOR CALLSIGN</span>
                      <button
                        type="button"
                        onClick={handleQuickCallsign}
                        className="text-emerald-400 underline hover:text-emerald-300"
                      >
                        GENERATE
                      </button>
                    </div>
                    <input
                      type="text"
                      value={callsign}
                      onChange={(e) => setCallsign(e.target.value)}
                      placeholder="e.g. OPERATOR-07"
                      className="w-full rounded-lg border border-[#c2b8a3]/15 bg-black/50 px-4 py-3 text-[#e8e6dc] placeholder:text-[#8b8f6b]/50 focus:border-emerald-500/50 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-[#8b8f6b] text-[10px] tracking-wider">
                      COMMUNICATION FREQUENCY (EMAIL) *
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="operator@domain.com"
                      className="w-full rounded-lg border border-[#c2b8a3]/15 bg-black/50 px-4 py-3 text-[#e8e6dc] placeholder:text-[#8b8f6b]/50 focus:border-emerald-500/50 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Purpose Selector */}
                <div className="space-y-1.5">
                  <div className="text-[#8b8f6b] text-[10px] tracking-wider">
                    TRANSMISSION OBJECTIVE
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[10px]">
                    {[
                      { id: "SPONSORSHIP", label: "SPONSORSHIP" },
                      { id: "RECRUITMENT", label: "RECRUITMENT" },
                      { id: "RESEARCH", label: "RESEARCH" },
                      { id: "GENERAL", label: "INQUIRY" },
                    ].map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPurpose(p.id)}
                        className={`rounded border py-2 text-center transition-all ${
                          purpose === p.id
                            ? "border-emerald-500 bg-emerald-500/20 text-emerald-300 font-bold"
                            : "border-[#c2b8a3]/15 bg-black/30 text-[#8b8f6b] hover:text-[#c2b8a3]"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Body */}
                <div className="space-y-1.5">
                  <div className="text-[#8b8f6b] text-[10px] tracking-wider">
                    TRANSMISSION PAYLOAD (MESSAGE) *
                  </div>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Input detailed transmission message..."
                    className="w-full resize-none rounded-lg border border-[#c2b8a3]/15 bg-black/50 px-4 py-3 text-[#e8e6dc] placeholder:text-[#8b8f6b]/50 focus:border-emerald-500/50 focus:outline-none leading-relaxed"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isTransmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#c2b8a3] py-4 font-mono text-[13px] font-bold tracking-widest text-[#111410] hover:bg-[#ddd5c0] shadow-[0_4px_24px_rgba(194,184,163,0.3)] transition-all disabled:opacity-50"
                >
                  {isTransmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#111410] border-t-transparent" />
                      <span>ENCRYPTING &amp; TRANSMITTING...</span>
                    </>
                  ) : (
                    <>
                      <IconSend className="h-4 w-4" />
                      <span>TRANSMIT ENCRYPTED PACKET</span>
                    </>
                  )}
                </button>

                <div className="text-center font-mono text-[10px] text-[#8b8f6b] flex items-center justify-center gap-1">
                  <IconLock className="h-3 w-3 text-emerald-400" />
                  <span>END-TO-END ENCRYPTED VIA CLIENT-SIDE DISPATCH</span>
                </div>
              </form>
            )}
          </AnimatePresence>
        </TacticalCard>
      </div>
    </main>
  );
}

function SectionLabel({ k, label }: { k: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.32em] text-[#8b8f6b]">
      <span className="inline-flex items-center gap-1.5 rounded border border-[#8b8f6b]/20 bg-[#8b8f6b]/10 px-2.5 py-1 text-[#c2b8a3]">
        <IconMinus className="h-3 w-3" /> {k}
      </span>
      <span className="h-px w-12 bg-[#8b8f6b]/20 hidden sm:block" />
      <span className="font-bold tracking-[0.24em] text-[#e8e6dc]">{label}</span>
    </div>
  );
}
