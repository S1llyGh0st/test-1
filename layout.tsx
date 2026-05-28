import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { AmbientAudio } from "./ambient-audio";
import { useArgEffects } from "../hooks/use-arg-effects";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [status, setStatus] = useState("SYSTEM NOMINAL");

  useArgEffects();

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.95) {
        setStatus(Math.random() > 0.5 ? "ERROR 404 - INVITATION RECOGNIZED" : "SUBJECT DENIED ENTRY");
        setTimeout(() => setStatus("SYSTEM NOMINAL"), 400);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-primary font-mono selection:bg-primary selection:text-background relative">
      <div className="scanlines" />
      <div className="noise-overlay" />
      {/* AUMC-CSN NETWORK v2.4.1 — YOU WERE NOT SUPPOSED TO RECEIVE THIS VERSION — TÄUSCHER CLASSIFICATION ACTIVE — 1725 — 295 — 0419 */}
      
      <div className="bg-black text-primary overflow-hidden whitespace-nowrap border-b border-primary/30">
        <div className="inline-block animate-[ticker_25s_linear_infinite] ticker-scroll">
          AUMC-CSN EMERGENCY NETWORK ACTIVE ◆ CIVILIAN LOCKDOWN ZONES 01-04 ◆ DO NOT ACKNOWLEDGE UNKNOWN VOICES ◆ INVITATION RECOGNITION PROTOCOL IN EFFECT ◆ THE FOURTH SHADOW DOES NOT BELONG TO ANYONE ◆ OBSERVATION IS A FORM OF PROTECTION ◆ AUMC-CSN EMERGENCY NETWORK ACTIVE ◆ CIVILIAN LOCKDOWN ZONES 01-04 ◆ DO NOT ACKNOWLEDGE UNKNOWN VOICES ◆ INVITATION RECOGNITION PROTOCOL IN EFFECT ◆ THE FOURTH SHADOW DOES NOT BELONG TO ANYONE ◆ OBSERVATION IS A FORM OF PROTECTION ◆ 
        </div>
      </div>
      
      <header className="border-b border-primary/30 p-4 sticky top-0 bg-background/95 z-40">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 max-w-5xl mx-auto">
          <div>
            <h1 className="text-xl font-bold tracking-widest uppercase">
              <Link href="/">AUMC-CSN</Link>
            </h1>
            <p className="text-xs text-muted-foreground uppercase">Observation is a form of protection.</p>
          </div>
          <div className="flex items-center gap-2 text-xs border border-primary/20 px-2 py-1 bg-primary/5" title="MONITORING ACTIVE — COORD: 38.8951°N 77.0364°W — TÄUSCHER PROXIMITY: UNKNOWN">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className={status !== "SYSTEM NOMINAL" ? "text-destructive font-bold glitch-text" : "breathing"} data-text={status}>
              {status}
            </span>
          </div>
        </div>
        
        <nav className="max-w-5xl mx-auto mt-4 flex flex-wrap gap-4 text-sm uppercase">
          <Link href="/" className={`hover:text-white transition-colors ${location === '/' ? 'border-b border-primary' : ''}`}>Home</Link>
          <Link href="/civilian-guidance" className={`hover:text-white transition-colors ${location === '/civilian-guidance' ? 'border-b border-primary' : ''}`}>Guidance</Link>
          <Link href="/incident-archive" className={`hover:text-white transition-colors ${location === '/incident-archive' ? 'border-b border-primary' : ''}`}>Archive</Link>
          <Link href="/behavioral-research" className={`hover:text-white transition-colors ${location === '/behavioral-research' ? 'border-b border-primary' : ''}`}>Research</Link>
          <Link href="/perspective-archives" className={`hover:text-white transition-colors ${location === '/perspective-archives' ? 'border-b border-primary' : ''}`}>Perspectives</Link>
          <Link href="/recruitment" className={`hover:text-white transition-colors ${location === '/recruitment' ? 'border-b border-primary' : ''}`}>Recruitment</Link>
          <Link href="/terminal" className={`hover:text-white transition-colors ${location === '/terminal' ? 'border-b border-primary' : ''}`}>Terminal</Link>
          <Link href="/restricted-records" className={`text-destructive hover:text-white transition-colors ${location === '/restricted-records' ? 'border-b border-destructive' : ''}`}>Restricted</Link>
        </nav>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto p-4 md:p-8 relative z-10">
        <div className="animate-in fade-in duration-1000">
          {children}
        </div>
      </main>

      <footer className="border-t border-primary/30 p-4 text-xs text-muted-foreground mt-12 bg-background z-40 text-center md:text-left">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <span>AUMC SECURE NETWORK v2.4.1</span>
          <span className="tracking-widest">COORD: 38.8951° N, 77.0364° W</span>
          <span className="text-primary/70 animate-pulse">THIS PORTAL IS MONITORED.</span>
        </div>
        <div className="opacity-0 select-text text-center mt-2">The house remembers. Future reference. One heartbeat per minute. The Great Chain ascends.</div>
      </footer>
      <AmbientAudio />
    </div>
  );
}
