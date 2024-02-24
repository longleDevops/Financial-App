import { Company } from '@prisma/client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  DoughnutChart,
  Portfolio,
  Activity
} from './index';

interface PortfolioProps {
  companies: Company[]
}

export function AccordionContainer({ companies }: PortfolioProps) {
  return (
    <Accordion type="multiple" className="w-full" defaultValue={["item-3"]}>
      <AccordionItem value="item-1" className="px-4 ">
        <AccordionTrigger className="text-sm font-semibold">Porfolio</AccordionTrigger>
        <AccordionContent>
          <Portfolio companies={companies} />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="px-4">
        <AccordionTrigger className="text-sm font-semibold">Recent Activity</AccordionTrigger>
        <AccordionContent>
          <Activity companies={companies} />
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
