import React, { useState } from "react";

const R = ({ children }: { children: React.ReactNode }) => (
  <span className="redacted select-none">{children}</span>
);

const SystemEnding = () => (
  <div className="mt-8 pt-4 border-t border-primary/10">
    <p className="text-xs text-muted-foreground/60 italic tracking-widest text-center">
      — AUMC SYSTEM BROADCAST — PERSPECTIVE FILE CONCLUSION —
    </p>
    <p className="text-sm text-center mt-2 tracking-wide font-mono">
      You Will Not End Up like [REDACTED]...You Will Be{" "}
      <span style={{ color: "#ff0000" }}>Fine</span>
    </p>
  </div>
);

export function PerspectiveArchives() {
  const [activeSubject, setActiveSubject] = useState<string | null>(null);

  const subjects = {
    marcus: {
      label: "TACTICAL SUBJECT",
      redactedName: "██████",
      name: "TACTICAL SUBJECT — ISOLATION-RESPONSIVE INDIVIDUAL",
      title: "Action Survivor / Tactical Subject",
      dates: <><R>December 19, 2020</R> → <R>January 1, 2021</R></>,
      showEnding: true,
      content: (
        <div className="space-y-4">
          <p><strong>AUMC Designation:</strong> Isolation-Responsive Individual. Subject given internal reference: <R>MARCUS</R>.</p>
          <p><strong>Themes:</strong> Tactical logic, paranoia, survival calculations, emotional collapse.</p>
          <div className="bg-primary/5 p-4 border-l-2 border-primary space-y-2 mt-4 font-mono text-sm">
            <p>"It smells like someone died tonight."</p>
            <p>Subject constantly monitors CCTV. Empties water bottles to measure consumption. Fear of being alone is secondary to the fear of excessive friendliness. Breath count logged every <R>four minutes</R>.</p>
            <p><strong>AUMC Note:</strong> We observed him in real time. He did exactly as predicted. Subject <R>███████</R> did not survive the final observation window.</p>
          </div>
          <p className="text-xs text-muted-foreground mt-2">[BEHAVIORAL LOG — ENTRY <R>DEC 28 2020</R> — PARTIALLY CORRUPTED]</p>
        </div>
      )
    },
    ari: {
      label: "NONVERBAL SUBJECT",
      redactedName: "███",
      name: "NONVERBAL SUBJECT — AUDITORY ANOMALY SURVIVOR",
      title: "Sensory Isolation / Nonverbal Communication Study",
      dates: <><R>Unknown</R></>,
      showEnding: true,
      content: (
        <div className="space-y-4">
          <p><strong>AUMC Designation:</strong> Auditory Anomaly Survivor. Subject given internal reference: <R>ARI</R>.</p>
          <p><strong>Profile:</strong> Nonverbal. Relies on silence. Documented hand signals recovered from scene.</p>
          <p><strong>Documented Hand Signals:</strong></p>
          <ul className="list-none space-y-2 font-sans font-bold text-lg">
            <li>✊ = Stop</li>
            <li>✖ = Confused</li>
            <li>👍 = Safe</li>
            <li>🫸🫷 = Anomaly</li>
            <li>👉👉 = Move</li>
          </ul>
          <div className="bg-primary/5 p-4 border-l-2 border-primary space-y-2 mt-4 font-mono text-sm">
            <p>Subject experienced delayed shadows and impossible voices. Incomplete written thoughts found at scene dated <R>December 27, 2020</R>.</p>
            <p><strong>Status:</strong> <R>████████████████████████████████</R></p>
            <p className="opacity-60 italic">The silence protects. The silence may also consume.</p>
          </div>
        </div>
      )
    },
    william: {
      label: "INFECTION SUBJECT",
      redactedName: "██████ █████",
      name: "INFECTION SUBJECT — PHASE 1→5 DOCUMENTATION",
      title: "Biological Collapse / Vascular Progression Study",
      dates: <><R>December 25, 2020</R> → <R>December 28, 2020</R></>,
      showEnding: true,
      content: (
        <div className="space-y-4 text-destructive">
          <p><strong>AUMC Designation:</strong> Infection Progression Subject. Subject given internal reference: <R>WILLIAM BURDY</R>.</p>
          <p><strong>Profile:</strong> Clinically documented Phase 1 → Phase 5 infection. Duration: <R>72 hours</R>.</p>
          <p><strong>Symptoms:</strong> Biological collapse, vascular hemorrhaging, loss of bodily control.</p>
          <div className="bg-destructive/10 p-4 border-l-2 border-destructive space-y-2 mt-4 font-mono text-sm">
            <p>Corrupted bodycam imagery reveals red visual distortion beginning Phase 3.</p>
            <p>Breathing logged at 0.5 BPM prior to total system failure.</p>
            <p>Movement speed at Phase 4: <R>400 meters in 1.2 seconds</R>.</p>
            <p><strong>AUMC Note:</strong> The vascular restructuring is fascinating. Truly a marvel of predatory evolution. Subject <R>█████ █████</R> has been reclassified posthumously.</p>
          </div>
        </div>
      )
    },
    blutsauger: {
      label: "[CLASSIFIED]",
      redactedName: "██████████",
      name: "CLASSIFIED ENTITY — ORIGIN: [REDACTED]",
      title: "SINGULAR ANOMALY — ACCESS RESTRICTED",
      dates: <>Origin: <R>1725</R></>,
      showEnding: false,
      content: (
        <div className="space-y-4">
          <p className="text-xl font-serif italic text-muted-foreground tracking-widest">"Singular anomaly. Invitation-based predator."</p>
          <p><strong>AUMC Designation:</strong> Täuscher Classification. Internal reference: <R>BLUTSAUGER</R>.</p>
          <p><strong>Profile:</strong> Ancient, calm, intelligent, philosophical. Possibly unique. Born/transformed <R>1725</R>.</p>
          <p><strong>References:</strong> The Great Chain of Being, <R>Christian Wolff</R>, Täuscher classification.</p>
          <div className="bg-black p-4 border border-primary space-y-2 mt-4 font-mono text-sm">
            <p className="opacity-80">He is lonely. He understands the architecture of this database better than we do. He has been here longer than this archive has existed.</p>
            <p className="opacity-60 italic text-xs mt-2">[Fragment — possibly self-authored — <R>date unknown</R>]:</p>
            <p className="opacity-70 text-xs leading-relaxed italic">"The chain ascends and I remain. I do not enter uninvited. This is not mercy. This is patience."</p>
            <p className="glitch-text text-destructive mt-4" data-text="HE IS WATCHING YOU READ THIS.">HE IS WATCHING YOU READ THIS.</p>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="space-y-8 uppercase">
      <header className="mb-8 border-b border-primary/40 pb-4">
        <h1 className="text-3xl font-bold">Perspective Archives</h1>
        <p className="mt-2 text-sm text-muted-foreground">Recovered evidence subjects. Presented for behavioral analysis. Subject identities <span className="redacted">classified per directive</span>.</p>
      </header>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {Object.entries(subjects).map(([key, subject]) => (
          <button
            key={key}
            data-testid={`subject-tab-${key}`}
            onClick={() => setActiveSubject(key)}
            className={`p-4 border text-left transition-all ${
              activeSubject === key
                ? key === 'blutsauger' ? 'border-destructive bg-destructive/20 text-white' : 'border-primary bg-primary/20 text-primary-foreground'
                : key === 'blutsauger' ? 'border-destructive/40 hover:bg-destructive/10 text-destructive' : 'border-primary/30 hover:bg-primary/10'
            }`}
          >
            <p className="text-xs text-muted-foreground mb-1">{subject.label}</p>
            <h3 className="font-bold text-sm tracking-widest">{subject.redactedName}</h3>
          </button>
        ))}
      </div>

      {activeSubject && (
        <div className={`p-8 border animate-in slide-in-from-bottom-4 ${activeSubject === 'blutsauger' ? 'border-destructive bg-black' : 'border-primary/50 bg-black/50'}`}>
          <div className="flex justify-between items-center mb-6 border-b border-primary/20 pb-4">
            <h2 className="text-lg font-bold">{subjects[activeSubject as keyof typeof subjects].name}</h2>
            <span className="text-xs text-muted-foreground">{subjects[activeSubject as keyof typeof subjects].dates}</span>
          </div>
          <h4 className="text-sm text-primary/70 mb-6">{subjects[activeSubject as keyof typeof subjects].title}</h4>
          {subjects[activeSubject as keyof typeof subjects].content}
          {subjects[activeSubject as keyof typeof subjects].showEnding && <SystemEnding />}
        </div>
      )}

      {!activeSubject && (
        <div className="text-center p-12 border border-dashed border-primary/30 text-muted-foreground">
          SELECT A SUBJECT FILE TO REVIEW EVIDENCE
        </div>
      )}
    </div>
  );
}
