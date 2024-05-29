import { Card } from "@/components/Card";
import { HeartIcon } from "@/components/icons/HeartIcon";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function Criptomoney() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-24 text-white uppercase">
        <div className="flex items-center gap-1">
          <HeartIcon className="text-primary" />
          <h2 className="font-bold">Criptomoedas</h2>
        </div>

        <div className="flex items-center">
          <span>Total 24h volume:</span>
          <span className="text-success">$2.27B</span>
          <Badge className="ml-4 rounded-lg mr-2 text-sm font-bold">Trade</Badge>
          
          <ArrowLeft />
          <ArrowRight />
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} direction={index % 3 === 0 ? "up" : "down"} />
        ))}
      </div>
    </section>
  )
}