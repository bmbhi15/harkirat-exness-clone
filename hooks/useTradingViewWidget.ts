"use client";
import { useRef, useEffect } from "react";

const useTradingViewWidget = (
  scriptURL: string,
  config: Record<string, any>,
  height = "600px"
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = `<div class="tradingview-widget-container" height=${height}>
      <div class="tradingview-widget-container__widget"></div>
    </div>`;

    if (containerRef.current.dataset.loaded) return;
    const script = document.createElement("script");
    script.src = scriptURL;
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify(config);
    containerRef.current.appendChild(script);
    containerRef.current.dataset.loaded = "true";

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        delete containerRef.current.dataset.loaded;
      }
    };
  }, [scriptURL, config, height]);
  return containerRef;
};

export default useTradingViewWidget;
