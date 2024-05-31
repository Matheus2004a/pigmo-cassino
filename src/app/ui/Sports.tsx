import { AmericanBall } from "@/components/icons/AmericanBall";
import { Card, CardContent } from "@/components/ui/card";
import { cardsSport } from "@/lib/data";

export function Sports() {
  return (
    <section className="flex flex-col gap-4 pb-10">
      <div className="flex items-center gap-1 uppercase">
        <AmericanBall className="text-primary" />
        <h2 className="font-bold text-white mr-2">Sports</h2>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {cardsSport.map((card) => {
          const CardIcon = card.icon;

          return (
            <Card key={card.title} className="card-sports bg-elevation-1 border border-low-contrast p-10">
              <CardContent className="grid justify-center items-center place-items-center gap-5 text-low-contrast font-bold uppercase transition-colors duration-300 p-0 hover:text-white">
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