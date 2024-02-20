"use client"

import { AiOutlineRise } from "react-icons/ai";
import { MdAccountBalance, MdCardTravel } from "react-icons/md";
import { LuWallet } from "react-icons/lu";
import { useEffect, useRef } from "react";
import { DeepPartial, LastPriceAnimationMode, TimeChartOptions, createChart } from 'lightweight-charts';
interface BalanceCardProps {
  title: string,
  value: string,
  percentChange: string
  index: number
}

const icons = [
  {
    icon: MdAccountBalance
  },
  {
    icon: LuWallet
  },
  {
    icon: MdCardTravel
  }
]

export const BalanceCard = (
  { title, value, percentChange, index }: BalanceCardProps
) => {

  const selectedIcon = icons[index]

  const containerRef = useRef<HTMLDivElement>(null)
  const upTrend = true;
  useEffect(() => {
    if (!containerRef.current) {
      console.log("null")
      return;
    }
    console.log("not null")
    const chartOptions: DeepPartial<TimeChartOptions> = { layout: { textColor: 'black', background: { color: 'transparent' } }, grid: { vertLines: { visible: false }, horzLines: { visible: false } }, rightPriceScale: { visible: false }, timeScale: { visible: false } };
    const chart = createChart(containerRef.current, chartOptions);

    const areaSeries = chart.addAreaSeries({ lineColor: upTrend ? '#14a34a' : '#ea2c2b', topColor: '#14a34a', bottomColor: '#F0F3FA', lastPriceAnimation: LastPriceAnimationMode.Continuous, priceLineVisible: false });

    areaSeries.setData([
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
    ]);

    chart.timeScale().fitContent();
  }, [])


  return (
    <div className={`p-4 border border-muted-foreground/30 rounded-lg w-[250px] flex flex-col gap-3 ${index === 0 && "bg-[#6149cd] shadow-black/25"} text-xs shadow-lg`}>
      <div className="flex items-end">
        <selectedIcon.icon
          size={18}
          className={`${index === 0 && "text-white"}`}
        />
        <p className={`${index === 0 ? "text-white/90" : "text-muted-foreground"} ml-2 font-semibold`}>{title}
        </p>
      </div>
      <p className={`${index === 0 && "text-white"} font-semibold text-xl mt-1`}>
        ${value}
      </p>

      <div className={`${index === 0 && "text-white"} flex items-end justify-between mt-2`}>
        <div className="flex items-center gap-2">
          <AiOutlineRise
            size={25}
          />
          <p className="font-medium">+30.23%</p>
        </div>
        <div ref={containerRef} className="w-[80px] h-[60px]"></div>
      </div>
    </div>
  )
}

