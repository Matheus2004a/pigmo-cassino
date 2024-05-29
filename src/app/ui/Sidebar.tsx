import { Accordion } from "@/components/Accordion";
import { Topbar } from "@/components/Topbar";
import { BadgePercentage } from "@/components/badge-percentage";
import { StarIcon } from "@/components/icons/StarIcon";

import Image from "next/image";

export function Sidebar() {
  return (
    <aside className="h-full flex flex-col gap-4 px-5 py-3 bg-elevation-1 border-r border-r-low-contrast">
      <Topbar />

      <figure className="flex items-center gap-[10px]">
        <Image
          src="/assets/svg/pigmo-logo.svg"
          alt="icon-pigmo-logo"
          width={40}
          height={40}
        />
        <figcaption>
          <h5 className="text-white">Pigmo Coin</h5>
          <span className="text-low-contrast">$0.0000</span>
        </figcaption>
        <BadgePercentage direction="up" />
      </figure>

      <nav>
        <ul>
          <li className="flex items-center gap-2 text-low-contrast">
            $PIG Airdrop
          </li>
          <li className="flex items-center gap-2 text-low-contrast">
            <StarIcon />
            NFT Staking
          </li>
        </ul>

        <Accordion />

        <div className="flex items-center border-2 border-primary rounded-lg mt-3 p-3 relative">
          <div>
            <h4 className="text-white">Fale conosco</h4>
            <p className="text-low-contrast">Se precisar de ajuda nós estamos aqui</p>
          </div>
          <Image
            src="/assets/svg/cube.svg"
            alt="icon-cube"
            width={120}
            height={60}
            className="absolute right-0 bottom-0"
          />
        </div>

        <div className="flex justify-between items-center py-3 cursor-pointer">
          <span className="text-white">Idioma</span>

          <Image
            src="/assets/svg/brazil.svg"
            alt="icon-brazil"
            width={28}
            height={20}
          />
        </div>
      </nav>
    </aside>
  );
}