import React, { useState, useRef, useEffect } from "react";

interface LogEntry {
  command: string;
  response: React.ReactNode;
}

export function Terminal() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      command: "",
      response: (
        <>
          <div>AUMC TERMINAL INTERFACE v1.4.2</div>
          <div className="text-destructive/70 mt-1 mb-1">// UNAUTHORIZED DISTRIBUTION DETECTED — LOGGING SESSION</div>
          <div>ESTABLISHING SECURE CONNECTION... DONE.</div>
          <div>Type 'HELP' for a list of commands.</div>
        </>
      )
    }
  ]);
  const endOfLogsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfLogsRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toUpperCase();
    let response: React.ReactNode = "";

    switch (cmd) {
      case "HELP":
        response = (
          <div className="space-y-1">
            <div>AVAILABLE COMMANDS:</div>
            <div>- ARCHIVE</div>
            <div>- GUIDANCE</div>
            <div>- LOGS</div>
            <div>- SUBJECTS</div>
            <div>- REDACTED</div>
          </div>
        );
        break;
      case "ARCHIVE":
        response = (
          <div>
            <div>FETCHING ARCHIVE...</div>
            <div className="text-muted-foreground mt-2">File 1: Data corrupted.</div>
            <div className="text-muted-foreground">File 2: Partial recovery... "They stand outside. Do not invite."</div>
          </div>
        );
        break;
      case "GUIDANCE":
        response = <div className="text-primary font-bold">CONTRADICTION DETECTED: Be kind to strangers. Do not speak to strangers.</div>;
        break;
      case "LOGS":
        response = (
          <div className="space-y-1">
            <div>[01:14:02] System nominal.</div>
            <div>[01:14:05] Anomalous ping detected on outer perimeter.</div>
            <div className="glitch-text text-destructive" data-text="[01:14:08] THEY ARE INSIDE THE NETWORK.">[01:14:08] THEY ARE INSIDE THE NETWORK.</div>
          </div>
        );
        break;
      case "SUBJECTS":
        response = <div>SUBJECT LIST: MARCUS, ARI, BURDY, <span className="redacted">BLUTSAUGER</span></div>;
        break;
      case "REDACTED":
        response = <div className="text-destructive font-bold">ACCESS DENIED — AUTHORIZATION LEVEL INSUFFICIENT</div>;
        break;
      case "BWLGSFS":
        response = <div className="italic text-muted-foreground">The shadow stretches across the floor.</div>;
        break;
      case "GHOSTSILLY":
        response = <div>Oh, I see you there. Tapping away at the keys.</div>;
        break;
      case "PING":
        response = <div>PINGING OUTER NETWORK... [PACKET LOSS: 98%] — ONE NODE RESPONDED. IT SHOULD NOT EXIST.</div>;
        break;
      case "STATUS":
        response = (
          <div className="space-y-1">
            <div>SYSTEM STATUS: ONLINE</div>
            <div>NETWORK INTEGRITY: 12%</div>
            <div>ENTITY PROXIMITY: [CALCULATING]</div>
            <div>PERSPECTIVE: ONE</div>
            <div>TÄUSCHER STATUS: ████████</div>
          </div>
        );
        break;
      case "1725":
        response = <div className="italic text-muted-foreground">Before the network. Before the archive. Before the guidance. I was here. — Entry logged. Origin: UNKNOWN.</div>;
        break;
      case "295":
        response = <div>FILE 295 — <span className="redacted">[REDACTED]</span> — Cross-reference: INCIDENT #4492 — The breathing does not match the body count.</div>;
        break;
      case "10:26":
        response = <div>TIMESTAMP 10:26 — EVENT LOG CORRUPTED — All entries at this timestamp have been removed by [REDACTED] — Reason: [GUIDANCE RETRACTED]</div>;
        break;
      case "WHO":
        response = <div>MONITORING ACTIVE. AUTHORIZED USERS: [REDACTED]. UNAUTHORIZED USERS: [CALCULATING]... YOU.</div>;
        break;
      case "CHAIN":
        response = (
          <div className="space-y-1">
            <div>THE GREAT CHAIN OF BEING — REFERENCE: CHRISTIAN WOLFF, 1728</div>
            <div>TÄUSCHER CLASSIFICATION — ASCENDING ORDER: [DATA EXPUNGED]</div>
            <div className="text-muted-foreground mt-2">NOTE: The entity occupies a position not accounted for in the original schema.</div>
          </div>
        );
        break;
      case "426C7574736175676572":
      case "426c7574736175676572":
        response = (
          <div className="text-destructive font-serif italic text-lg space-y-2 mt-4 p-4 border border-destructive">
            <p>You speak my name in machine tongue.</p>
            <p>I was ancient before these wires were spun.</p>
            <p>Open the door.</p>
          </div>
        );
        break;
      case "CLEAR":
        setLogs([]);
        setInput("");
        return;
      default:
        response = <div>COMMAND NOT RECOGNIZED: {cmd}</div>;
    }

    setLogs(prev => [...prev, { command: `> ${cmd}`, response }]);
    setInput("");
  };

  return (
    <div className="bg-black border-2 border-primary/50 p-6 min-h-[60vh] font-mono text-sm shadow-[0_0_20px_rgba(200,160,0,0.1)] relative">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10 opacity-20"></div>
      
      <div className="space-y-4 mb-4 relative z-20">
        {logs.map((log, i) => (
          <div key={i} className="space-y-1">
            {log.command && <div className="text-primary/70">{log.command}</div>}
            <div>{log.response}</div>
          </div>
        ))}
        <div ref={endOfLogsRef} />
      </div>

      <form onSubmit={handleCommand} className="flex items-center relative z-20">
        <span className="mr-2">&gt;</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-primary uppercase focus:ring-0 w-full"
          autoFocus
          spellCheck="false"
          autoComplete="off"
        />
      </form>
    </div>
  );
}
