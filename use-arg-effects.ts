import { useEffect } from "react";

export function useArgEffects() {
  useEffect(() => {
    // 1. Console ARG Clues
    console.warn("AUMC-CSN NETWORK INTERFACE ACTIVE");

    const t1 = setTimeout(() => {
      console.log("%c[REDACTED]", "color: transparent; background: black");
      console.log("If you can read this: 1725. The chain ascends.");
    }, 2000);

    const t2 = setTimeout(() => {
      console.log("PERSPECTIVE DETERMINES STRUCTURE. YOU ARE IN PERSPECTIVE ONE.");
    }, 5000);

    const t3 = setTimeout(() => {
      console.warn("The subject may already be inside.");
    }, 10000);

    const t4 = setTimeout(() => {
      console.log("426c7574736175676572 — he is patient. He has always been patient.");
    }, 20000);

    const t5 = setTimeout(() => {
      console.log("%cDO NOT TRUST EXCESSIVE FRIENDLINESS", "color: #cc0000; font-weight: bold; font-size: 14px");
    }, 45000);

    // 2. Heartbeat pulse effect
    const heartbeatInterval = setInterval(() => {
      document.body.classList.add("heartbeat-flash");
      setTimeout(() => {
        document.body.classList.remove("heartbeat-flash");
      }, 300);
    }, 60000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearInterval(heartbeatInterval);
    };
  }, []);
}
