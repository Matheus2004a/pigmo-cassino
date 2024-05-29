import {
  Accordion as AccordionComponent,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { typeCasino } from "@/lib/data"
import Image from "next/image"

export function Accordion() {
  return (
    <AccordionComponent type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-primary uppercase">Cassino</AccordionTrigger>
        <AccordionContent>
          <ul className="text-low-contrast text-base font-semibold">
            {typeCasino.map((type) => (
              <li key={type.title} className="flex items-center gap-2 py-2">
                <Image
                  src={type.icon}
                  alt={`icon-${type.title}`}
                  width={20}
                  height={20}
                  className="w-auto h-auto"
                />
                {type.title}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-primary uppercase">Trade</AccordionTrigger>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-primary uppercase">Esportes</AccordionTrigger>
      </AccordionItem>
    </AccordionComponent>
  )
}
