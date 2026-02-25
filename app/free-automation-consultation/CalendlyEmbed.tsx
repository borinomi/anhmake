"use client";

import { useEffect } from "react";

// ─────────────────────────────────────────────────────────────
//  📌  여기에 본인의 Calendly 링크를 붙여넣으세요.
//  예시: "https://calendly.com/your-name/free-consultation"
//  Calendly 계정이 없으면 https://calendly.com 에서 무료로 생성하세요.
// ─────────────────────────────────────────────────────────────
const CALENDLY_URL = "https://calendly.com/anhmakecom/30min";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
    };
  }
}

export default function CalendlyEmbed() {
  useEffect(() => {
    // Load Calendly widget script
    const existingScript = document.getElementById("calendly-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }

    // Load Calendly CSS
    const existingLink = document.getElementById("calendly-css");
    if (!existingLink) {
      const link = document.createElement("link");
      link.id = "calendly-css";
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    // Init inline widget after script loads
    const tryInit = () => {
      const container = document.getElementById("calendly-inline-container");
      if (window.Calendly && container) {
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: container,
        });
      }
    };

    // Retry until Calendly is ready
    const interval = setInterval(() => {
      if (window.Calendly) {
        tryInit();
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Calendly inline widget container */}
      <div
        id="calendly-inline-container"
        style={{ minWidth: "320px", height: "700px" }}
        className="w-full"
      />
    </div>
  );
}
