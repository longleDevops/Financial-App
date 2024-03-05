"use client"
import React, { useEffect, useRef, memo } from 'react';

export const Chart = () => {
  const container = useRef(null);

  useEffect(
    () => {
      if (!container.current) return;
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "watchlist": [
            "NASDAQ:TSLA",
            "NASDAQ:AMD"
          ],
          "details": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
    }
    ,
    []
  );

  return (
    <div className='w-[500px] h-[600px]'>
      <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
        <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      </div>
    </div>
  );
}

