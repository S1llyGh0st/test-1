import React from "react";

const R = ({ children }: { children: React.ReactNode }) => (
  <span className="redacted select-none">{children}</span>
);

export function CivilianGuidance() {
  return (
    <div className="space-y-8 uppercase max-w-3xl mx-auto">
      <div className="border-b border-primary/40 pb-4 mb-8">
        <h1 className="text-3xl font-bold tracking-wider">Civilian Guidance Database</h1>
        <p className="text-sm text-muted-foreground">Official PSAs and emergency broadcasts. Follow most recent guidance. <span className="text-destructive">[SOME ENTRIES REVISED]</span></p>
      </div>

      <div className="space-y-6">
        <GuidanceCard
          docNum="PSA-001"
          date={<>Dec <R>18</R>, 2020</>}
          title="Initial Containment Protocol"
          content="Remain indoors. Lock all points of entry. Compassion is the primary deterrent to panic."
        />

        <GuidanceCard
          docNum="PSA-014"
          date={<><R>Dec 22, 2020</R></>}
          title="Auditory Mimicry Warning"
          content="Entities may utilize familiar voices to request entry. Do not respond to loved ones who are supposed to be elsewhere. Do not rely on visual continuity."
        />

        <GuidanceCard
          docNum="PSA-029"
          date={<>Dec <R>25</R>, 2020</>}
          title="Bite Exposure & Breathing"
          content="Monitor breathing irregularities in cohabitants. A resting rate below 4 breaths per minute requires immediate reporting. Isolation increases susceptibility."
        />

        <GuidanceCard
          docNum="PSA-042"
          date={<><R>Dec 28, 2020</R> [REVISED]</>}
          title="Revision of Protocol 001"
          content="Previously issued guidance is incomplete. Compassion may constitute permission. Excessive friendliness from strangers is a primary indicator of anomalous presence."
          revised
        />

        <GuidanceCard
          docNum="PSA-055"
          date={<>Dec <R>30</R>, 2020</>}
          title="Invitation Rules [CRITICAL]"
          content="Any acknowledgment may be interpreted as invitation. Do not say 'yes', 'come in', 'hello', or nod affirmatively towards windows. Emotional compromise leads to physical compromise."
          critical
        />

        <div className="border border-primary/10 p-4 bg-black text-xs text-muted-foreground space-y-1">
          <p>Guidance authored by: <R>Dr. ██████████</R> — AUMC Behavioral Division</p>
          <p>Distribution approved: <R>December 17, 2020</R></p>
          <p className="text-destructive text-[10px] opacity-60 mt-2">[NOTE: PSA-001 and PSA-042 cannot both be correct. This discrepancy has been logged and <R>ignored</R>.]</p>
        </div>
      </div>
    </div>
  );
}

function GuidanceCard({
  docNum,
  date,
  title,
  content,
  critical = false,
  revised = false,
}: {
  docNum: string;
  date: React.ReactNode;
  title: string;
  content: string;
  critical?: boolean;
  revised?: boolean;
}) {
  return (
    <div className={`border p-4 ${critical ? 'border-destructive bg-destructive/10' : revised ? 'border-primary/40 bg-primary/5' : 'border-primary/20 bg-background'}`}>
      <div className="flex justify-between items-center mb-2 border-b border-primary/10 pb-2">
        <span className={`font-bold ${critical ? 'text-destructive' : 'text-primary'}`}>{docNum}</span>
        <span className="text-xs text-muted-foreground">{date}</span>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed text-primary/80">{content}</p>
    </div>
  );
}
