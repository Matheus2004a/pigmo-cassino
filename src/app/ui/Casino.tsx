import { ArrowLeftIcon } from "@/components/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { SevenIcon } from "@/components/icons/SevenIcon";
import { imagesCasino } from "@/lib/data";
import Image from "next/image";

export function Casino() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-24 text-white uppercase">
        <div className="flex items-center gap-1">
          <SevenIcon className="text-primary" />
          <h2 className="font-bold mr-2">Cassino</h2>

          <ArrowLeftIcon />
          <ArrowRightIcon />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {imagesCasino.map((image) => (
          <figure key={image.alt}>
            <Image
              src={image.src}
              alt={image.alt}
              width={200}
              height={200}
              className="rounded-lg"
            />
          </figure>
        ))}
      </div>
    </section>
  )
}