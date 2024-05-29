import { Button } from "@/components/ui/button"
import Image from "next/image"
import { HeartIcon } from "./icons/HeartIcon"

export function Topbar() {
  return (
    <div className="max-w-[240px] w-full flex justify-center gap-2 border border-elevation-3 rounded-xl p-1">
      <Button className="rounded-lg">
        <HeartIcon />
        Cassino
      </Button>
      <Button className="rounded-lg">
        <Image
          src="/assets/svg/troph.svg"
          alt="icon-troph"
          width={28}
          height={20}
        />
      </Button>
      <Button className="rounded-lg">
        <Image
          src="/assets/svg/med.svg"
          alt="icon-med"
          width={28}
          height={20}
        />
      </Button>
    </div>
  )
}
