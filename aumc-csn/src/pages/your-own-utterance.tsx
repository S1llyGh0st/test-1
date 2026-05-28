import React, { useState, useEffect } from "react";

export function YourOwnUtterance() {
  const [visible, setVisible] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);

  const revealLines = [
    "DECRYPTING FILE...",
    "AUTHORIZATION: OVERRIDE ACCEPTED",
    "LOADING PROJECT FILE: YOUR OWN UTTERANCE",
    "WARNING: THIS DOCUMENT IS NOT INTENDED FOR EXTERNAL REVIEW.",
    "...",
  ];

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (lineIndex < revealLines.length) {
      const t = setTimeout(() => setLineIndex(i => i + 1), 600);
      return () => clearTimeout(t);
    }
  }, [visible, lineIndex, revealLines.length]);

  return (
    <div className="space-y-10 max-w-3xl mx-auto uppercase font-mono animate-in fade-in duration-1000">

      {/* Boot sequence */}
      <div className="text-xs text-muted-foreground space-y-1 mb-8">
        {revealLines.slice(0, lineIndex).map((line, i) => (
          <p key={i} className={i === lineIndex - 1 ? "blinking-cursor" : ""}>{line}</p>
        ))}
      </div>

      {lineIndex >= revealLines.length && (
        <>
          {/* Header */}
          <header className="border-b-2 border-destructive pb-6">
            <p className="text-xs text-muted-foreground mb-2">AUMC INTERNAL — PROJECT ARCHIVE — LEVEL 6 CLEARANCE</p>
            <h1 className="text-3xl font-bold text-destructive glitch-text" data-text="YOUR OWN UTTERANCE">
              YOUR OWN UTTERANCE
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              PROJECT FILE — <span className="redacted">CLASSIFICATION DATE UNKNOWN</span> — DO NOT DISTRIBUTE
            </p>
          </header>

          {/* Definition */}
          <section className="border border-primary/20 p-6 bg-black space-y-4 text-sm leading-relaxed">
            <h2 className="text-lg font-bold border-b border-primary/20 pb-2 mb-4">DEFINITION OF PROJECT SCOPE</h2>
            <p>
              "Your Own Utterance" is a behavioral induction experiment conducted by the AUMC under
              <span className="redacted"> Directive ██████ — Authorization: High Command ████████</span>.
            </p>
            <p>
              Subjects believed they were undergoing survival classification tests across multiple designated
              <strong> "perspectives."</strong>
            </p>
            <p>
              In reality, all perspectives were <strong>simulated evaluation environments</strong> designed to observe:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-primary/80">
              <li>Obedience thresholds under contradictory guidance</li>
              <li>Compassion response under mimicry pressure</li>
              <li>Invitation-based decision failures</li>
              <li>Emotional collapse timeline</li>
              <li>Whether the subject would speak, act, or allow entry under psychological duress</li>
            </ul>
          </section>

          {/* Core truth */}
          <section className="border border-destructive/40 p-6 bg-destructive/5 space-y-4 text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-destructive border-b border-destructive/30 pb-2 mb-4">
              CORE TRUTH — [GUIDANCE RETRACTED]
            </h2>
            <p>
              The <strong>"No You Are Not Allowed In"</strong> test was not about survival.
            </p>
            <p>
              It was about whether the subject would speak, act, or allow entry under emotional pressure.
            </p>
            <p>
              The guidance contradictions were <strong>intentional</strong>. The PSA revisions were <strong>intentional</strong>.
              The infection progression documentation was <strong>intentional</strong>.
            </p>
            <p className="text-destructive font-bold">
              Every subject received a different version of the truth.
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              [NOTE: PSA-001 and PSA-042 were authored by the same office on the same day.
              Distribution was staggered by design. Cross-reference: <span className="redacted">BEHAVIORAL RESEARCH — CLINICAL NOTES</span>.]
            </p>
          </section>

          {/* Perspective system */}
          <section className="border border-primary/20 p-6 bg-black space-y-4 text-sm leading-relaxed">
            <h2 className="text-lg font-bold border-b border-primary/20 pb-2 mb-4">PERSPECTIVE CLASSIFICATION</h2>
            <p>
              Each "perspective" represents a <strong>conditioned response archetype</strong> — not an independent individual.
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs mt-4">
              <div className="border border-primary/10 p-3">
                <p className="font-bold mb-1">PERSPECTIVE ONE</p>
                <p className="text-muted-foreground">Tactical isolation archetype. Survival logic as coping mechanism. Predictable. Observed in real time.</p>
              </div>
              <div className="border border-primary/10 p-3">
                <p className="font-bold mb-1">PERSPECTIVE TWO</p>
                <p className="text-muted-foreground">Nonverbal compliance archetype. Silence as resistance. Outcome: <span className="redacted">████████████████</span></p>
              </div>
              <div className="border border-primary/10 p-3">
                <p className="font-bold mb-1">PERSPECTIVE THREE</p>
                <p className="text-muted-foreground">Biological collapse archetype. Infection as documentation. The AUMC was not attempting rescue.</p>
              </div>
              <div className="border border-destructive/20 p-3 bg-destructive/5">
                <p className="font-bold text-destructive mb-1">PERSPECTIVE FOUR</p>
                <p className="text-muted-foreground">Not a subject. Not an archetype. <span className="redacted">CLASSIFICATION PENDING SINCE 1725</span>. He is the only one who understood the experiment from the outside.</p>
              </div>
            </div>
          </section>

          {/* Final revelation */}
          <section className="border-2 border-destructive p-8 bg-black space-y-6 text-center">
            <h2 className="text-xl font-bold text-destructive">FINAL REVELATION</h2>
            <p className="text-sm leading-relaxed text-left">
              Subjects believed they were <strong>participants</strong>.
            </p>
            <p className="text-sm leading-relaxed text-left">
              They were actually the <strong>content being observed</strong>.
            </p>
            <p className="text-sm leading-relaxed text-left">
              The "viewer" role was part of the psychological loop.
            </p>
            <div className="border-t border-destructive/30 pt-6 mt-4 space-y-3">
              <p className="text-base leading-relaxed italic text-primary/90">
                "Your Own Utterance" refers to the moment the subject realizes:
              </p>
              <p className="text-lg font-bold text-destructive">
                they were never reacting to the horror.
              </p>
              <p className="text-lg font-bold text-destructive">
                they were generating it.
              </p>
            </div>
          </section>

          {/* Corrupted postscript */}
          <section className="p-4 border border-primary/10 bg-black text-xs text-muted-foreground space-y-2">
            <p className="text-destructive">[UNAUTHORIZED DISTRIBUTION DETECTED — LOGGING ACCESS]</p>
            <p>This file should not exist in this directory. Access has been logged.</p>
            <p>If you accessed this through the recruitment system: <span className="redacted">you already said yes</span>.</p>
            <p className="opacity-40 mt-4">LAYER SYSTEM NOTE: You are not in Layer 01 anymore.</p>
            <p className="opacity-20 text-[9px] mt-2 tracking-widest">THE HOUSE REMEMBERS. FUTURE REFERENCE. ONE HEARTBEAT PER MINUTE.</p>
          </section>
        </>
      )}
    </div>
  );
}
