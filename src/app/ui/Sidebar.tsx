import { Accordion } from "@/components/Accordion";
import { Topbar } from "@/components/Topbar";
import { BadgePercentage } from "@/components/badge-percentage";
import { BalonIcon } from "@/components/icons/BalonIcon";
import { BrazilIcon } from "@/components/icons/BrazilIcon";
import { PigmoIconSidebar } from "@/components/icons/PigmoIconSidebar";
import { StarIcon } from "@/components/icons/StarIcon";

import Image from "next/image";

export function Sidebar() {
  return (
    <aside className="h-full flex flex-col gap-4 py-3 bg-elevation-1 border-r border-r-low-contrast">
      <Topbar />

      <figure className="flex items-center gap-[10px] px-5">
        <PigmoIconSidebar />
        <figcaption className="text-sm">
          <h5 className="text-white font-bold">Pigmo Coin</h5>
          <span className="text-low-contrast">$0.0000</span>
        </figcaption>
        <BadgePercentage className="ml-auto" direction="up" />
      </figure>

      <nav className="grid gap-5">
        <ul className="px-5">
          <li className="flex items-center gap-2 text-low-contrast">
            <BalonIcon />
            $PIG Airdrop
          </li>
          <li className="flex items-center gap-2 text-low-contrast">
            <StarIcon />
            NFT Staking
          </li>
        </ul>

        <Accordion />

        <div className="grid items-center border-2 border-primary rounded-lg mt-20 p-3 mx-5 relative">
          <h4 className="text-white">Fale conosco</h4>
          <p className="text-low-contrast mt-2 max-w-[150px] text-sm">Se precisar de ajuda nós estamos aqui</p>
          <Image
            src="/assets/svg/cube.svg"
            alt="icon-cube"
            width={120}
            height={100}
            className="absolute right-[-20px] bottom-[-30px]"
          />
        </div>

        <div className="flex justify-between items-center py-3 px-5 cursor-pointer mt-4">
          <span className="text-white">Idioma</span>

          <BrazilIcon />
        </div>
      </nav>
    </aside>
  );
}