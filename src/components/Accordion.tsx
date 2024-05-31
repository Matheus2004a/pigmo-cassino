import {
  Accordion as AccordionComponent,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { typeCasino } from "@/lib/data"

export function Accordion() {
  return (
    <AccordionComponent type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-b border-b-low-contrast px-5">
        <AccordionTrigger className="text-low-contrast uppercase [&[data-state=open]]:text-primary">
          Cassino
        </AccordionTrigger>
        <AccordionContent>
          <ul className="text-low-contrast text-base font-semibold">
            {typeCasino.map((type) => {
              const TypeIcon = type.icon

              return (
                <li key={type.title} className="flex items-center gap-2 py-2">
                  <TypeIcon />
                  {type.title}
                </li>
              )
            })}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b border-b-low-contrast px-5">
        <AccordionTrigger className="text-low-contrast uppercase">Trade</AccordionTrigger>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-b border-b-low-contrast px-5">
        <AccordionTrigger className="text-low-contrast uppercase">Esportes</AccordionTrigger>
      </AccordionItem>
    </AccordionComponent>
  )
}
