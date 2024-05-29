import { AmericanBall } from "@/components/icons/AmericanBall";
import { Card, CardContent } from "@/components/ui/card";
import { cardsSport } from "@/lib/data";

export function Sports() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-1 uppercase">
        <AmericanBall className="text-primary" />
        <h2 className="font-bold text-white mr-2">Sports</h2>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {cardsSport.map((card) => {
          const CardIcon = card.icon;

          return (
            <Card key={card.title} className="bg-elevation-1 border border-low-contrast h-[150px] p-8">
              <CardContent className="grid justify-center items-center place-items-center gap-5 text-low-contrast font-bold uppercase">
                <CardIcon />
                <p>{card.title}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}