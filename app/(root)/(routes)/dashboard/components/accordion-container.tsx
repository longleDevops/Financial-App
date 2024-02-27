import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn-ui/accordion"
import {
  DoughnutChart,
  PortfolioItem,
  Watchlist
} from './index';

export function AccordionContainer() {
  return (
    <Accordion type="multiple" className="w-full" defaultValue={["item-3"]}>
      <AccordionItem value="item-1" className="px-4 ">
        <AccordionTrigger className="text-sm font-semibold">Porfolio</AccordionTrigger>
        <AccordionContent>
          <PortfolioItem />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="px-4">
        <AccordionTrigger className="text-sm font-semibold">Watchlist</AccordionTrigger>
        <AccordionContent>
          <Watchlist />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="px-4 ">
        <AccordionTrigger className="text-sm font-semibold">Distribution</AccordionTrigger>
        <AccordionContent>
          <DoughnutChart />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
