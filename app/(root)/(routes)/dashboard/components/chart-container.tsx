import PieChart from "./pie-chart"
import { PortfolioChart } from "./portfolio-chart"
const ChartContainer = () => {

  return (

    <div className="relative flex w-full gap-8 mt-8 text-lg font-semibold border rounded-t-lg border-muted-foreground/30" >
      <PortfolioChart />
      <PieChart />

    </div>

  )
}

export default ChartContainer