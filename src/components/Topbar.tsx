import { Button } from "@/components/ui/button"
import { HeartIcon } from "./icons/HeartIcon"
import { MedIcon } from "./icons/MedIcon"
import { TrophIcon } from "./icons/TrophIcon"

export function Topbar() {
  return (
    <div className="flex gap-2 border border-low-contrast rounded-xl p-1 mx-5">
      <Button className="bg-gradient-to-r from-gradient-start to-gradient-end rounded-lg uppercase font-bold">
        <HeartIcon />
        Casino
      </Button>
      <Button className="rounded-lg bg-transparent hover:bg-transparent px-2">
        <TrophIcon className="text-low-contrast" />
      </Button>
      <Button className="rounded-lg bg-transparent hover:bg-transparent px-2">
        <MedIcon className="text-low-contrast" />
      </Button>
    </div>
  )
}
