import { PigmoIconHeader } from "./icons/PigmoIconHeader";
import { PigmoMenu } from "./icons/PigmoMenu";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-elevation-1">
      <div className="flex items-center gap-3">
        <PigmoMenu className="text-primary" />
        <PigmoIconHeader className="min-w-[100px] min-h-[24px]" />
      </div>

      <div>
        <Button className="mr-5 uppercase bg-transparent hover:bg-transparent">Login</Button>
        <Button className="rounded-lg uppercase bg-gradient-to-r from-gradient-start to-gradient-end shadow-custom-banner">Register</Button>
      </div>
    </header>
  )
}