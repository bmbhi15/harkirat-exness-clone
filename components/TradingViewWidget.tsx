// TradingViewWidget.jsx
"use client";
import useTradingViewWidget from "@/hooks/useTradingViewWidget";
import { useEffect, useRef, memo } from "react";

interface TradingViewWidgetProps {
  scriptURL: string;
  config: Record<string, any>;
  height: string;
  title: string;
}
function TradingViewWidget({
  scriptURL,
  config,
  height = "600px",
  title,
}: TradingViewWidgetProps) {
  const containerRef = useTradingViewWidget(scriptURL, config, height);

  return (
    <div className="space-y-4 mx-5 my-10">
      <h1 className="text-2xl text-white ">{title}</h1>
      <div className="tradingview-widget-container" ref={containerRef}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
