import React from "react";

const R = ({ children }: { children: React.ReactNode }) => (
  <span className="redacted select-none">{children}</span>
);

export function RestrictedRecords() {
  return (
    <div className="space-y-12 uppercase max-w-4xl mx-auto">
      <header className="mb-12 border-b-4 border-destructive pb-4">
        <h1 className="text-4xl font-bold text-destructive glitch-text" data-text="RESTRICTED RECORDS">RESTRICTED RECORDS</h1>
        <p className="mt-2 font-bold bg-destructive text-white inline-block px-2">LEVEL 5 CLEARANCE REQUIRED</p>
      </header>

      <div className="space-y-8 text-sm leading-loose">
        <div className="p-6 border border-destructive/30 bg-black relative">
          <div className="absolute top-2 right-2 text-destructive/50 text-xs">DOC-992-A — <R>Dec 31, 2020</R></div>
          <p>
            <span className="redacted">The entire purpose of the civilian network was to monitor the</span> spread.
            We needed to know how fast the <span className="redacted">mimicry</span> evolved.
            When they realized <span className="redacted">the entities require an invitation</span>, we issued guidance.
            Then we <span className="redacted">changed the guidance to see if the entities could</span> adapt to new rules.
          </p>
          <p className="mt-4">
            They adapted. <span className="redacted">God help us, they are so much smarter than</span> we anticipated.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            — <R>████████████</R>, AUMC Oversight Division, <R>December 31, 2020</R>
          </p>
        </div>

        <div className="p-6 border border-destructive/30 bg-black relative">
          <div className="absolute top-2 right-2 text-destructive/50 text-xs">DOC-994-C — <R>Jan 1, 2021</R></div>
          <p className="opacity-50 italic mb-4">Fragment recovered from <R>Sector 04</R> terminal — author: <R>████████</R>...</p>
          <p>
            I am rewriting the history logs <R>today</R>. <R>Command</R> says if the public knows we <span className="redacted">used them as bait</span>, there will be riots.
            So <R>Marcus</R> is a "tactical subject" now. Not a man we locked in a room to watch him die.
            <R>Ari</R> is an "auditory anomaly survivor." Not a child who <span className="redacted">we abandoned in Sector 2 on December 27th</span>.
            <R>William Burdy</R> is an "infection progression subject." Not a <span className="redacted">person who begged us to end it on day three</span>.
          </p>
        </div>

        <div className="p-6 border border-destructive/30 bg-black relative">
          <div className="absolute top-2 right-2 text-destructive/50 text-xs">DOC-997-X — <R>████████</R></div>
          <p className="opacity-50 italic mb-4">The following entry was not authored by AUMC personnel.</p>
          <p className="italic opacity-80 leading-relaxed">
            "I have watched your network grow. I have watched you name things you do not understand.
            I have been patient since <R>1725</R>. I am patient still.
            You have archived me. You have categorized me. You have written my name in your databases.
            <span className="redacted">You have invited me in.</span>"
          </p>
          <p className="text-xs text-destructive mt-4">[ORIGIN OF THIS ENTRY: UNKNOWN — <R>timestamp corrupted</R>]</p>
        </div>

        <div className="p-12 border border-destructive bg-destructive/10 text-center space-y-6">
          <p className="text-2xl font-bold blinking-cursor">THERE IS NO CURE.</p>
          <p className="text-xl">THERE IS ONLY QUARANTINE.</p>
          <p className="text-lg text-muted-foreground">Do not look at the windows.</p>
          <p className="text-xs opacity-30 mt-4"><R>January 1, 2021 — 00:01 — LAST VERIFIED NETWORK ENTRY</R></p>
        </div>
      </div>
    </div>
  );
}
