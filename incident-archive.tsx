import React from "react";

const R = ({ children }: { children: React.ReactNode }) => (
  <span className="redacted select-none">{children}</span>
);

export function IncidentArchive() {
  return (
    <div className="space-y-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold uppercase border-b-2 border-primary pb-2">Incident Archive</h1>
        <p className="mt-2 text-sm text-muted-foreground">Classified incident reports: <R>Dec 18</R> — <R>Jan 1, 2021</R></p>
      </header>

      <div className="space-y-12">
        <article className="border border-primary/30 p-6 bg-black">
          <div className="flex justify-between text-xs mb-4 text-muted-foreground border-b border-primary/20 pb-2">
            <span>INCIDENT #4492</span>
            <span>DATE: <R>12.19.2020</R> [CORRUPTED]</span>
          </div>
          <p className="font-mono text-sm leading-relaxed mb-4">
            Unit responded to distress call at <R>0300 hrs</R>. Caller — identified as <R>████████</R> of <R>Sector 3, Block ██</R> — reported isolated household member exhibiting strange hand signals at the window. Upon arrival, officers found the residence <span className="redacted">empty and smelling heavily of copper</span>.
          </p>
          <p className="font-mono text-sm leading-relaxed">
            Witness testimony: "He was counting his breaths. He said he had to make sure he was still doing it himself. Then he opened the door for a voice that wasn't there."
          </p>
          <p className="text-xs text-muted-foreground mt-4 italic">Filed by: <R>Officer ████████</R> — <R>December 19, 2020</R> — Status: [REVISED]</p>
        </article>

        <article className="border border-primary/30 p-6 bg-black">
          <div className="flex justify-between text-xs mb-4 text-muted-foreground border-b border-primary/20 pb-2">
            <span>INCIDENT #4510</span>
            <span>DATE: <R>12.24.2020</R></span>
          </div>
          <p className="font-mono text-sm leading-relaxed mb-4">
            Subject observed moving between <R>Sector 4</R> and <R>Sector 5</R> at impossible movement speed. Security footage — camera ID <R>C-44-B</R> — shows subject covering 400 meters in 1.2 seconds, appearing as a blurred smear.
          </p>
          <div className="bg-primary/5 p-4 border border-dashed border-primary/20">
            <p className="text-xs text-destructive uppercase tracking-widest mb-2">[DATA EXPUNGED BY ORDER OF AUMC COMMAND — <R>December 31, 2020</R>]</p>
            <p className="font-mono text-sm leading-relaxed">
              <span className="redacted">The entity requested entry using the voice of</span> <R>Captain ██████</R>. <span className="redacted">████████ was standing right next to me when it happened. She heard it too. She let it in anyway.</span>
            </p>
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">Witness: <R>████████ ██████</R> — Status: <R>Missing as of December 25, 2020</R></p>
        </article>

        <article className="border border-primary/30 p-6 bg-black">
          <div className="flex justify-between text-xs mb-4 text-muted-foreground border-b border-primary/20 pb-2">
            <span>INCIDENT #4558</span>
            <span>DATE: <R>12.28.2020</R></span>
          </div>
          <p className="font-mono text-sm leading-relaxed mb-4">
            Subject <R>████████</R> documented breathing at 0.5 breaths per minute before losing control of voluntary movement. Phase transition from 3 to 4 took approximately <R>six minutes</R>. Bodycam footage <span className="redacted">has been deleted per High Command directive</span>.
          </p>
          <p className="font-mono text-sm leading-relaxed mb-4">
            Contradictory witness reports: Subject <R>████████</R> was simultaneously reported at <R>Sector 2 Block 7</R> and <R>Sector 4 Block 12</R> at <R>0147 hrs</R> on the same evening.
          </p>
          <p className="font-mono text-sm leading-relaxed italic opacity-70">
            "I thought I was watching him die. Then I realized I had been watching him die for three days and he kept standing up."
          </p>
        </article>

        <article className="border border-primary/30 p-6 bg-black relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10 text-9xl font-bold pointer-events-none">?</div>
          <div className="flex justify-between text-xs mb-4 text-muted-foreground border-b border-primary/20 pb-2">
            <span>INCIDENT #4601</span>
            <span>DATE: <R>01.01.2021</R></span>
          </div>
          <p className="font-mono text-sm leading-relaxed mb-4">
            Mass disappearance event in <R>Sector 2</R> block housing. 47 individuals missing. No forced entry detected. All doors were unlocked from the inside. Last known contact with residents: <R>December 31, 2020 — 23:48</R>.
          </p>
          <p className="font-mono text-sm leading-relaxed italic opacity-80">
            "They just wanted to be polite. They didn't want to leave him standing in the cold."
          </p>
          <div className="mt-4 text-xs text-destructive">
            <p>[NOTE: <R>47 names</R> have been removed from this report at the request of <R>██████████</R>. This action was logged.]</p>
          </div>
        </article>
      </div>
    </div>
  );
}
