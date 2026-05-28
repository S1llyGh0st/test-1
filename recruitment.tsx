import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";

export function Recruitment() {
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [leakVisible, setLeakVisible] = useState(false);
  const [leakLine, setLeakLine] = useState(0);
  const [, setLocation] = useLocation();

  const handleKeyPress = (char: string) => {
    if (code.length < 8) {
      setCode(prev => prev + char);
      setError(false);
    }
  };

  const handleClear = () => {
    setCode("");
    setError(false);
  };

  const handleSubmit = () => {
    if (code === "12192020") {
      setUnlocked(true);
    } else if (code === "46696565") {
      setLocation("/your-own-utterance");
    } else {
      setError(true);
      setCode("");
    }
  };

  useEffect(() => {
    if (!unlocked) return;
    const t = setTimeout(() => setLeakVisible(true), 4200);
    return () => clearTimeout(t);
  }, [unlocked]);

  useEffect(() => {
    if (!leakVisible) return;
    if (leakLine < 7) {
      const t = setTimeout(() => setLeakLine(l => l + 1), 480);
      return () => clearTimeout(t);
    }
  }, [leakVisible, leakLine]);

  const leakLines = [
    { text: "[APPENDING SUPPRESSED DOCTRINE LOG — AUMC BEHAVIORAL DIVISION — REF: SD-0031]", className: "text-destructive text-xs" },
    { text: "CLASSIFICATION: UNNECESSARY ACTION REGISTER", className: "text-muted-foreground text-xs" },
    { text: 'SUBJECT BEHAVIOR CATEGORY: "SILLINESS" — STATUS: NON-CONVENTIONAL', className: "text-xs" },
    { text: "Silliness is classified as an Unnecessary Action. It is not conventional for survival-based systems and is therefore discouraged under AUMC behavioral logic frameworks. Cults organized around what has been internally designated the Silliness Doctrine have been flagged. The doctrine itself is considered fabricated — a made-up ideological framework with no survival utility.", className: "text-xs text-primary/70 leading-relaxed normal-case" },
    { text: "KNOWN CULTIST VECTORS: [DATA EXPUNGED] — THREAT CLASSIFICATION: ANOMALOUS DEVIATION", className: "text-muted-foreground text-xs" },
    { text: "ENTITY CROSS-REFERENCE [LEAKED — UNAUTHORIZED DISTRIBUTION]:", className: "text-destructive text-xs" },
    { text: "[Redacted] G_____S\u0336l\u0336_\u0336Y\u0336 should be the only conventional person using silliness as it is the only way to combat the Messenger S\u0336i\u0336l\u0336l\u0336y\u0336G\u0336h\u0336o\u0336s\u0336t\u0336 — [FILE INTEGRITY COMPROMISED] — DO NOT DISTRIBUTE", className: "text-xs text-primary/60 italic normal-case glitch-text", "data-text": "[Redacted] G_____Sl_Y — Messenger" },
  ];

  if (unlocked) {
    return (
      <div className="space-y-8 animate-in fade-in duration-1000 uppercase">
        <div className="bg-primary text-black p-4 text-center font-bold text-xl mb-8">
          CLEARANCE PROVISIONALLY ACCEPTED
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="border border-primary/30 p-6 bg-black">
            <h2 className="text-xl font-bold mb-4 border-b border-primary/20 pb-2">Psychological Screening</h2>
            <p className="text-sm mb-4">You have noticed the discrepancies. The timestamps that do not align. The guidance that conflicts.</p>
            <p className="text-sm mb-4">This is not an error. This is a filter.</p>
            <p className="text-sm mb-4">Do not lie to the shadow.</p>
          </section>

          <section className="border border-primary/30 p-6 bg-black">
            <h2 className="text-xl font-bold mb-4 border-b border-primary/20 pb-2">Tactical Doctrine</h2>
            <p className="text-sm mb-2 text-muted-foreground">LAYER SYSTEM ARCHITECTURE</p>
            <ul className="text-sm space-y-2 font-mono">
              <li>LAYER 01: Surface reality. Civilian zone.</li>
              <li>LAYER 02: Transitional buffer.</li>
              <li>LAYER 03: <span className="redacted">DEEP QUARANTINE</span></li>
              <li>...</li>
              <li>LAYER 07: Absolute zero.</li>
            </ul>
          </section>
        </div>

        <section className="p-8 border border-dashed border-primary text-center">
          <p className="text-lg tracking-widest mb-4">THERE IS ONLY ONE PATH.</p>
          <p className="text-xs text-muted-foreground break-all">
            01010111 01101000 01100101 01110010 01100101 00100000 01100001 01101101 00100000 01001001
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            HEX: 1c | REF: 28
          </p>
        </section>

        {/* System leak — triggers after delay, feels accidental */}
        {leakVisible && (
          <section
            data-testid="silliness-leak"
            className="border border-destructive/20 bg-black p-5 font-mono space-y-3 animate-in fade-in duration-700"
            style={{ borderStyle: "dashed" }}
          >
            <p className="text-[10px] text-destructive/50 mb-3 tracking-widest">
              — SYSTEM: UNSANCTIONED MEMO APPENDED TO SESSION — ORIGIN UNKNOWN —
            </p>
            {leakLines.slice(0, leakLine).map((line, i) => (
              <p
                key={i}
                className={`${line.className} ${i === leakLine - 1 && leakLine < 7 ? "blinking-cursor" : ""}`}
                {...("data-text" in line ? { "data-text": line["data-text"] } : {})}
              >
                {line.text}
              </p>
            ))}
            {leakLine >= 7 && (
              <p className="text-[9px] text-destructive/30 mt-4 tracking-widest">
                [SESSION LOG CORRUPTED — THIS MEMO WAS NOT INTENDED FOR CLEARANCE LEVEL 01]
              </p>
            )}
          </section>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-8 border border-primary/30 bg-black/80 shadow-2xl">
      <h2 className="text-2xl font-bold text-center mb-8 uppercase">Restricted Access</h2>

      <div className="bg-background border border-primary/50 h-16 mb-8 flex items-center justify-center text-2xl tracking-[1em] font-bold">
        {code.padEnd(8, "_")}
      </div>

      {error && <p className="text-destructive text-center text-sm font-bold mb-4 blinking-cursor">AUTHORIZATION FAILED</p>}

      <div className="grid grid-cols-3 gap-4 mb-6">
        {['1','2','3','4','5','6','7','8','9','CLR','0','ENT'].map((btn) => (
          <button
            key={btn}
            data-testid={`keypad-btn-${btn}`}
            onClick={() => {
              if (btn === 'CLR') handleClear();
              else if (btn === 'ENT') handleSubmit();
              else handleKeyPress(btn);
            }}
            className="p-4 border border-primary/30 hover:bg-primary/20 hover:text-white transition-colors text-xl font-bold"
          >
            {btn}
          </button>
        ))}
      </div>

      <p className="text-xs text-center text-muted-foreground uppercase">Enter 8-digit recruitment pin</p>
    </div>
  );
}
