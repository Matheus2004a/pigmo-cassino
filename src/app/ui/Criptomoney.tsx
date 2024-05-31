import { Card } from "@/components/Card";
import { ArrowLeftIcon } from "@/components/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { HeartIcon } from "@/components/icons/HeartIcon";
import { Badge } from "@/components/ui/badge";

export function Criptomoney() {
  return (
    <section className="flex flex-col gap-4 mt-10">
      <div className="flex items-center gap-24 text-white uppercase">
        <div className="flex items-center gap-1">
          <HeartIcon className="text-primary" />
          <h2 className="font-bold">Criptomoedas</h2>
        </div>

        <div className="flex items-center">
          <span>Total 24h volume:</span>
          <span className="text-success">$2.27B</span>
          <Badge className="ml-4 rounded-lg mr-2 text-sm font-bold">Trade</Badge>

          <ArrowLeftIcon />
          <ArrowRightIcon />
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