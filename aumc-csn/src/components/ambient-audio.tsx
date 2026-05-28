import { useEffect, useRef } from "react";

export function AmbientAudio() {
  const initialized = useRef(false);

  useEffect(() => {
    const handleInteraction = () => {
      if (initialized.current) return;
      initialized.current = true;

      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();

      // Master Gain
      const masterGain = ctx.createGain();
      masterGain.gain.value = 1;
      masterGain.connect(ctx.destination);

      // Breathing effect
      const breathingGain = ctx.createGain();
      breathingGain.gain.value = 0.015;
      breathingGain.connect(masterGain);

      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      
      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = buffer;
      noiseSource.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 400;

      noiseSource.connect(filter);
      filter.connect(breathingGain);
      noiseSource.start();

      const breathe = () => {
        const now = ctx.currentTime;
        breathingGain.gain.setValueAtTime(0.005, now);
        breathingGain.gain.linearRampToValueAtTime(0.02, now + 2);
        breathingGain.gain.linearRampToValueAtTime(0.005, now + 4);
      };
      breathe();
      setInterval(breathe, 4000);

      // Occasional static burst
      const triggerStatic = () => {
        const burstGain = ctx.createGain();
        burstGain.gain.value = 0.025;
        burstGain.connect(masterGain);

        const bSource = ctx.createBufferSource();
        bSource.buffer = buffer;

        const bFilter = ctx.createBiquadFilter();
        bFilter.type = "highpass";
        bFilter.frequency.value = 2000;

        bSource.connect(bFilter);
        bFilter.connect(burstGain);

        bSource.start();
        bSource.stop(ctx.currentTime + 0.3);

        const nextTime = Math.random() * 45000 + 45000; // 45 to 90 seconds
        setTimeout(triggerStatic, nextTime);
      };
      setTimeout(triggerStatic, Math.random() * 45000 + 45000);

      // Heartbeat
      const triggerHeartbeat = () => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.type = "sine";
        
        osc.connect(oscGain);
        oscGain.connect(masterGain);

        const now = ctx.currentTime;
        osc.frequency.setValueAtTime(40, now);
        osc.frequency.exponentialRampToValueAtTime(0.01, now + 0.1);
        
        oscGain.gain.setValueAtTime(0.02, now);
        oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

        osc.start(now);
        osc.stop(now + 0.1);

        const osc2 = ctx.createOscillator();
        const oscGain2 = ctx.createGain();
        osc2.type = "sine";
        osc2.connect(oscGain2);
        oscGain2.connect(masterGain);

        osc2.frequency.setValueAtTime(45, now + 0.2);
        osc2.frequency.exponentialRampToValueAtTime(0.01, now + 0.3);
        
        oscGain2.gain.setValueAtTime(0.02, now + 0.2);
        oscGain2.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

        osc2.start(now + 0.2);
        osc2.stop(now + 0.3);
      };
      setInterval(triggerHeartbeat, 60000);

      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("keydown", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };
  }, []);

  return null;
}