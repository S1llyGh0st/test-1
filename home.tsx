import React, { useState, useEffect } from "react";
import { Link } from "wouter";

const R = ({ children }: { children: React.ReactNode }) => (
  <span className="redacted select-none">{children}</span>
);

const fragments = [
  "Maintain visual continuity.",
  "Report excessive friendliness.",
  "Isolation increases susceptibility.",
  "Check their breathing.",
  "Compassion is the primary deterrent.",
  "Compassion may constitute permission.",
  "Do not lie to the shadow.",
  "Acknowledge them and they enter."
];

export function Home() {
  const [psaFragment, setPsaFragment] = useState(fragments[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % fragments.length;
      setPsaFragment(fragments[index]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8 uppercase">
      <section className="border border-primary/20 p-6 bg-primary/5">
        <h2 className="text-2xl font-bold mb-4 border-b border-primary/20 pb-2">Emergency Bulletins</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="text-muted-foreground"><R>12:00</R></span>
            <p>Civilian lockdown remains in effect across zones 01-04.</p>
          </div>
          <div className="flex gap-4">
            <span className="text-muted-foreground">14:22</span>
            <p>Report any auditory anomalies mimicking familiar voices immediately. Contact <R>Officer ██████</R> at sector command.</p>
          </div>
          <div className="flex gap-4">
            <span className="text-muted-foreground"><R>08:14</R></span>
            <p className="text-destructive">[REVISED] Prior guidance regarding physical contact is void. See <Link href="/civilian-guidance" className="underline">Civilian Guidance</Link>. Supersedes bulletin dated <R>December 19, 2020</R>.</p>
          </div>
          <div className="flex gap-4">
            <span className="text-muted-foreground">--:--</span>
            <p className="opacity-40 text-xs">NO YOU ARE NOT PERMITTED TO ENTER</p>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="border border-primary/20 p-6">
          <h2 className="text-xl font-bold mb-4">Active PSA</h2>
          <div className="h-24 flex items-center justify-center border border-dashed border-primary/30 bg-black/50 p-4">
            <p className="text-center font-bold tracking-widest text-lg blinking-cursor">
              {psaFragment}
            </p>
          </div>
        </section>

        <section className="border border-primary/20 p-6">
          <h2 className="text-xl font-bold mb-4">Recent Containment</h2>
          <ul className="list-disc list-inside space-y-2 text-sm ml-4">
            <li>Subject 402 — Terminated (<R>December 22, 2020</R> — Failed Visual Check)</li>
            <li>Subject 403 — Isolated (Pending Review)</li>
            <li>Subject 404 — <span className="redacted">MISSING FROM CONTAINMENT SINCE DEC 27</span></li>
            <li>Subject 405 — Relocated to Layer 02</li>
          </ul>
        </section>
      </div>

      <section className="p-6 bg-secondary/10">
        <h2 className="text-xl font-bold mb-4">Tactical Advisory</h2>
        <p className="text-sm leading-relaxed mb-4 text-justify">
          All citizens are reminded that observation is a form of protection. Do not avert your gaze from suspicious entities, but do not make eye contact. If an entity requests entry to your domicile, deny it verbally once and do not engage further. Any subsequent acknowledgment may be interpreted as an invitation.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Directive issued by: <R>Commander ████████</R> — AUMC High Command
        </p>
        <p className="text-xs text-muted-foreground mt-4 italic">
          Doc Ref: AUMC-TAC-098 / Last updated: <R>01.01.2021</R>
        </p>
      </section>

      <section className="border border-primary/10 p-4 bg-black text-xs text-muted-foreground space-y-1">
        <p>NETWORK STATUS: ACTIVE — SECTOR <R>04</R> OFFLINE</p>
        <p>LAST VERIFIED CONTACT: <R>January 1, 2021 — 00:00</R></p>
        <p>MONITORING PERSONNEL: <R>████████████</R></p>
        <p className="opacity-50 text-[10px]">INVITATION RECOGNIZED — <R>SUBJECT ███ — DEC 31 2020</R></p>
      </section>

      {/* NEW SECTIONS */}
      <section className="border border-primary/20 p-6 space-y-4">
        <h2 className="text-xl font-bold border-b border-primary/20 pb-2">THREAT ASSESSMENT [LEVEL 2 PUBLIC RELEASE]</h2>
        <ul className="list-disc list-inside space-y-2 text-sm ml-4">
          <li>Subjects may imitate distress.</li>
          <li>Some infected remain socially functional.</li>
          <li>Visual consistency is not guaranteed.</li>
          <li>Do not assume emotional authenticity.</li>
          <li>Perception discrepancies are under investigation.</li>
          <li>Household counting methods are no longer reliable.</li>
          <li>Cognitohazardous subjects have been identified in 3 of 4 monitored zones.</li>
        </ul>
        <p className="text-sm mt-4">
          KNOWN VECTORS: behavioral anomalies, hostile humanoid entities, viral vectors, threshold entities, acoustic mimics.
        </p>
        <p className="opacity-60 text-[10px] mt-8 text-right">You hear fewer breaths than bodies.</p>
      </section>

      <section className="border border-primary/20 p-6 space-y-4">
        <h2 className="text-xl font-bold border-b border-primary/20 pb-2">PUBLIC GUIDANCE — PROTECTIVE MEASURES</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
          <li>Avoid isolation when possible.</li>
          <li>Avoid excessive trust.</li>
          <li>Minimize verbal acknowledgment of unknown individuals.</li>
          <li>Keep interior lighting active during night hours.</li>
          <li>Record all breathing anomalies.</li>
          <li>Monitor household member counts continuously.</li>
          <li>Do not rely exclusively on visual identification.</li>
          <li>Report impossible movement patterns.</li>
          <li>If contradictory guidance is received, follow the most recent broadcast.</li>
          <li>If no broadcasts are received for over 24 hours, remain indoors.</li>
        </ol>
        <div className="mt-6 border border-destructive p-4 bg-destructive/10 text-destructive text-sm font-bold">
          [REVISED] Previous guidance (PSA-001) recommended compassion. This guidance has been retracted. Do not act on compassion.
        </div>
      </section>

      <section className="border border-primary/20 p-6 space-y-4">
        <h2 className="text-xl font-bold border-b border-primary/20 pb-2">INCIDENT PROGRESSION TIMELINE</h2>
        <div className="space-y-4 text-sm ml-2 border-l border-primary/30 pl-4 relative">
          <div className="relative"><span className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-primary" /><span className="font-bold">[<R>Dec 18, 2020</R>]</span>: Initial disappearances reported in Sector 2. Cause unknown.</div>
          <div className="relative"><span className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-primary" /><span className="font-bold">[Dec 19, 2020]</span>: Emergency broadcasts initiated. Shelter-in-place order issued.</div>
          <div className="relative"><span className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-primary" /><span className="font-bold">[Dec 22, 2020]</span>: Revised bite exposure guidance issued. PSA-014 supersedes PSA-001.</div>
          <div className="relative"><span className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-primary" /><span className="font-bold">[<R>Dec 24-25, 2020</R>]</span>: Quarantine failures in Sectors 3 and 4. <span className="text-destructive font-bold">[DATA EXPUNGED]</span></div>
          <div className="relative"><span className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-primary" /><span className="font-bold">[Dec 28, 2020]</span>: Communication collapse in outer sectors. Survivor counts inconsistent.</div>
          <div className="relative glitch-text" data-text="[Dec 31, 2020]: [GUIDANCE RETRACTED] [FILE CORRUPTED]"><span className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-destructive" /><span className="font-bold">[Dec 31, 2020]</span>: [GUIDANCE RETRACTED] [FILE CORRUPTED]</div>
          <div className="relative glitch-text opacity-80" data-text="[Jan 1, 2021 — TIMESTAMP CORRUPTED]: Last verified network entry."><span className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-destructive" /><span className="font-bold">[Jan 1, 2021 — TIMESTAMP CORRUPTED]</span>: Last verified network entry.</div>
        </div>
      </section>

      <section className="border border-primary/20 p-6 space-y-4 opacity-90">
        <h2 className="text-xl font-bold border-b border-primary/20 pb-2 glitch-text" data-text="KNOWN SIGNS — OBSERVE AND REPORT">KNOWN SIGNS — OBSERVE AND REPORT</h2>
        <div className="grid md:grid-cols-2 gap-8 text-sm">
          <div>
            <h3 className="font-bold mb-2 underline decoration-primary/50">Behavioral Indicators</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>exhaustion</li>
              <li>delayed responses</li>
              <li>changes in friendliness patterns</li>
              <li>auditory mimicry</li>
              <li>fixation on invitations</li>
              <li>sudden unnatural calmness</li>
              <li>excessive politeness</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 underline decoration-primary/50">Physical Indicators</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>reddish vision (subject-reported)</li>
              <li>breath inconsistencies</li>
              <li>sleep collapse</li>
              <li>unusual movement speed</li>
              <li>one heartbeat per minute (advanced stage)</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-primary/10">
          <p className="text-xs text-muted-foreground">This list is incomplete. Phase documentation is ongoing.</p>
          <p className="opacity-50 text-[10px] mt-2 italic">The breathing is inconsistent.</p>
        </div>
      </section>

      <section className="border border-primary/20 p-6 space-y-4 opacity-85">
        <h2 className="text-xl font-bold border-b border-primary/20 pb-2 glitch-text" data-text="RECENTLY RECOVERED FILES [ARCHIVE RESTORATION: 34%]">RECENTLY RECOVERED FILES [ARCHIVE RESTORATION: 34%]</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="border border-primary/30 bg-black/40 p-3 flex flex-col">
            <div className="text-xs font-bold mb-2 truncate">AUMC-CCTV-004-B.mp4</div>
            <div className="flex-1 min-h-20 bg-black border border-primary/20 flex items-center justify-center p-2 text-center text-xs opacity-60 font-mono overflow-hidden">
              [CCTV-C44-B] OBJECT AT 400M/1.2S — IDENTITY UNKNOWN
            </div>
            <div className="mt-2 flex justify-between items-center text-[10px] text-muted-foreground">
              <span>12.4MB</span>
              <span>12/24/2020</span>
            </div>
            <button className="mt-2 w-full border border-primary/40 py-1 text-xs hover:bg-primary/20" onClick={() => alert("AUTHORIZATION REQUIRED: LEVEL 4")}>DOWNLOAD</button>
          </div>
          <div className="border border-primary/30 bg-black/40 p-3 flex flex-col">
            <div className="text-xs font-bold mb-2 truncate">INCIDENT_REPORT_4558.pdf</div>
            <div className="flex-1 min-h-20 bg-black border border-primary/20 flex items-center justify-center p-2 text-center text-xs text-destructive glitch-text" data-text="[DECRYPTION FAILED]">
              [DECRYPTION FAILED]
            </div>
            <div className="mt-2 flex justify-between items-center text-[10px] text-muted-foreground">
              <span>2.1MB</span>
              <span>12/28/2020</span>
            </div>
            <button className="mt-2 w-full border border-primary/40 py-1 text-xs hover:bg-primary/20" onClick={() => alert("AUTHORIZATION REQUIRED: LEVEL 3")}>DOWNLOAD</button>
          </div>
          <div className="border border-primary/30 bg-black/40 p-3 flex flex-col">
            <div className="text-xs font-bold mb-2 truncate">PSA_AUDIO_LOG_DEC28.wav</div>
            <div className="flex-1 min-h-20 bg-black border border-primary/20 flex items-center justify-center p-2 text-center text-xs opacity-50 overflow-hidden">
              [FILE CORRUPTED]<br/><span className="text-[8px] mt-1 break-all">01001011 01001001 01001100 01001100</span>
            </div>
            <div className="mt-2 flex justify-between items-center text-[10px] text-muted-foreground">
              <span>8.9MB</span>
              <span>12/28/2020</span>
            </div>
            <button className="mt-2 w-full border border-primary/40 py-1 text-xs hover:bg-primary/20" onClick={() => alert("AUTHORIZATION REQUIRED: LEVEL 2")}>DOWNLOAD</button>
          </div>
        </div>
        <div className="mt-8 text-center text-destructive opacity-40 font-bold tracking-widest">
          [UNAUTHORIZED DISTRIBUTION DETECTED]
        </div>
        <div className="opacity-30 text-[10px] text-center mt-12">
          You were not supposed to receive this version.
        </div>
      </section>

      <div className="mt-12 overflow-hidden whitespace-nowrap bg-black text-primary border-t border-b border-primary/20 py-2">
        <div className="inline-block animate-[ticker_20s_linear_infinite] ticker-scroll">
          CIVILIAN LOCKDOWN ACTIVE — ZONES 01-04 — AUDITORY MIMICRY REPORTED — DO NOT RESPOND — GUIDANCE UPDATED — SEE PSA-055 — SECTOR 4 OFFLINE — YOU HEAR FEWER BREATHS THAN BODIES — THE DOOR WAS ALREADY UNLOCKED — PERSPECTIVE DETERMINES STRUCTURE — CIVILIAN LOCKDOWN ACTIVE — ZONES 01-04 — AUDITORY MIMICRY REPORTED — DO NOT RESPOND — GUIDANCE UPDATED — SEE PSA-055 — SECTOR 4 OFFLINE — YOU HEAR FEWER BREATHS THAN BODIES — THE DOOR WAS ALREADY UNLOCKED — PERSPECTIVE DETERMINES STRUCTURE — 
        </div>
      </div>

      {/* ARG anomaly — not intended for public distribution */}
      <div
        aria-hidden="true"
        style={{ opacity: 0.08, fontSize: "10px", letterSpacing: "0.08em", userSelect: "text", pointerEvents: "none" }}
        className="text-primary font-mono mt-6 text-center leading-relaxed"
      >
        [SYSTEM ANOMALY — LOG REF: 0419] S____G____ has hacked the [REDACTED] Page By putting the Code [REDACTED] In Base-16 and the only letter in the code in alphabetical order
      </div>
    </div>
  );
}
