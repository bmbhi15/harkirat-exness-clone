// TradingViewWidget.jsx
"use client";
import useTradingViewWidget from "@/hooks/useTradingViewWidget";
import { useEffect, useRef, memo } from "react";

interface TradingViewWidgetProps {
  scriptURL: string;
  config: Record<string, any>;
  height: number;
  title: string;
}
function TradingViewWidget({
  scriptURL,
  config,
  height = 600,
  title,
}: TradingViewWidgetProps) {
  const containerRef = useTradingViewWidget(scriptURL, config, height);

  return (
    <div className="space-y-4 mx-5 my-10">
      <h1 className="text-2xl text-white ">{title}</h1>
      <div className="tradingview-widget-container" ref={containerRef}>
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/markets/"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="blue-text">Market summary</span>
          </a>
          <span className="trademark"> by TradingView</span>
        </div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
