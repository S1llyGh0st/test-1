import React from "react";

const R = ({ children }: { children: React.ReactNode }) => (
  <span className="redacted select-none">{children}</span>
);

export function BehavioralResearch() {
  return (
    <div className="space-y-8 uppercase">
      <header className="mb-8">
        <h1 className="text-3xl font-bold border-b border-primary pb-2">Behavioral Research Database</h1>
        <p className="mt-2 text-sm text-muted-foreground">Clinical psychological research & anomalous interaction studies. Period: <R>December 18, 2020</R> — <R>January 1, 2021</R>.</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-bold bg-primary/10 p-2 border-l-4 border-primary">Experimentation Logs</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-primary/40 bg-black">
                <th className="p-3">Subject ID</th>
                <th className="p-3">Stimulus</th>
                <th className="p-3">Response</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/20">
              <tr>
                <td className="p-3">T-091</td>
                <td className="p-3">Isolated vocal mimicry</td>
                <td className="p-3">Severe paranoia, barricading</td>
                <td className="p-3 text-destructive">TERMINATED — <R>Dec 22</R></td>
              </tr>
              <tr>
                <td className="p-3">T-112</td>
                <td className="p-3">Prolonged eye contact</td>
                <td className="p-3"><span className="redacted">Unknown biological collapse — see William Burdy file</span></td>
                <td className="p-3">MISSING — <R>Dec 28</R></td>
              </tr>
              <tr>
                <td className="p-3 font-bold glitch-text" data-text="[REDACTED]"><R>MARCUS</R></td>
                <td className="p-3">Tactical isolation — <R>monitored Dec 19–Jan 1</R></td>
                <td className="p-3">Survival calculations, emotional collapse</td>
                <td className="p-3">OBSERVED</td>
              </tr>
              <tr>
                <td className="p-3"><R>ARI</R></td>
                <td className="p-3">Auditory anomaly exposure — <R>date unknown</R></td>
                <td className="p-3">Nonverbal survival, silence-based avoidance</td>
                <td className="p-3 text-muted-foreground"><R>████████</R></td>
              </tr>
              <tr>
                <td className="p-3">T-144</td>
                <td className="p-3">Excessive friendliness — <R>Dec 31</R></td>
                <td className="p-3">Invitation granted</td>
                <td className="p-3 text-destructive">INFECTED</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4 mt-12">
        <h2 className="text-xl font-bold bg-primary/10 p-2 border-l-4 border-primary">Clinical Notes</h2>
        <div className="border border-primary/20 p-6 bg-black space-y-4 text-sm leading-relaxed">
          <p>
            It is hypothesized that the AUMC inadvertently accelerated the infection rate by issuing contradictory guidance.
            Experimentation indicates that civilians rely heavily on <span className="underline decoration-dotted">authoritative instruction</span> when faced with ontological threats.
          </p>
          <p>
            By intentionally altering the rules of engagement (e.g., PSA-001 vs PSA-042), we observed the psychological breakdown required to force an "invitation" state. Study conducted between <R>December 18</R> and <R>December 30, 2020</R> by <R>Dr. ██████████</R> under directive from <R>High Command ████████</R>.
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            [NOTE: This entry has been flagged for redaction by <R>High Command</R>. Pending deletion. As of <R>January 1, 2021</R> — deletion has not occurred.]
          </p>
        </div>
      </section>
    </div>
  );
}
