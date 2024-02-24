"use client"

import { DeepPartial, TimeChartOptions, createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";

export const PortfolioChart = () => {

  const elementRef = useRef(null)
  const chartOptions: DeepPartial<TimeChartOptions> = {
    autoSize: true,
    layout: {
      textColor: 'black',
      background: { color: 'white' },

    },
    rightPriceScale: {
      visible: false,

    },

    timeScale: {
      fixLeftEdge: true,
      fixRightEdge: true,
      lockVisibleTimeRangeOnResize: true,
      rightBarStaysOnScroll: true,
      visible: false
    },
    handleScale: {
      mouseWheel: false,
      axisPressedMouseMove: false
    },
    grid: {
      vertLines: {
        visible: false
      },
      horzLines: {
        visible: false
      }
    },


  };
  const data = [
    { time: '2018-12-22', value: 32.51 },
    { time: '2018-12-23', value: 31.11 },
    { time: '2018-12-24', value: 27.02 },
    { time: '2018-12-25', value: 27.32 },
    { time: '2018-12-26', value: 25.17 },
    { time: '2018-12-27', value: 28.89 },
    { time: '2018-12-28', value: 25.46 },
    { time: '2018-12-29', value: 23.92 },
    { time: '2018-12-30', value: 22.68 },
    { time: '2018-12-31', value: 22.67 },
    { time: '2019-01-01', value: 50.67 },

  ]
  useEffect(() => {
    if (!elementRef.current) return;
    const element: HTMLDivElement = elementRef.current
    const chart = createChart(element, chartOptions);
    const lineSeries = chart.addLineSeries({
      color: '#2962FF',
      lastPriceAnimation: 1
    });


    lineSeries.setData(data);

    chart.timeScale().fitContent();
  }, [])



  return (
    <div className="w-full border border-yellow-500">
      <p className="text-xl font-normal">$120.00</p>
      <div ref={elementRef} className="h-[150px]">
      </div>
    </div>
  )
}