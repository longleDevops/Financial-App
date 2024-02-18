import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Company } from '@prisma/client';
import Image from 'next/image';
import Portfolio from "./Portfolio";
import { Activity } from ".";

interface PortfolioProps {
  companies: Company[]
}

export function AccordionPanel({ companies }: PortfolioProps) {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1" className="px-4">
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
    </Accordion>
  )
}
