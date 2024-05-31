import { BadgePercentage } from "./badge-percentage";
import { BitcoinIcon } from "./icons/BitcoinIcon";
import { CardContent, CardFooter, CardHeader, Card as CardMain } from "./ui/card";

export function Card({ direction }: { direction: "up" | "down" }) {
  return (
    <CardMain className="w-full bg-elevation-1 border border-low-contrast text-white bg-gradient-to-r from-gradient-start-main to-gradient-end-main">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <BitcoinIcon />
          <span className="text-white">BTC</span>
        </div>
        <BadgePercentage className="ml-8 border-2" direction={direction} />
      </CardHeader>
      <CardContent className="flex items-center border-y border-t-low-contrast border-b-low-contrast">
        <span className="text-lg font-semibold">$ 60,390.85</span>
      </CardContent>
      <CardFooter className="grid">
        <div className="flex items-center justify-between">
          <p className="text-low-contrast font-semibold">24 VOL</p>
          <p>$757M</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-low-contrast font-semibold">LEVERAGE</p>
          <p>1000x</p>
        </div>
      </CardFooter>
    </CardMain>
  )
}