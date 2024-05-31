import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { MenuWelcomeIcon } from "@/components/icons/MenuWelcomeIcon";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Welcome() {
  return (
    <section className="flex justify-center items-center border-y border-y-low-contrast bg-elevation-1">
      <div className="max-w-[520px]">
        <h1 className="text-white text-4xl font-bold">Boas vindas  ao <strong className="text-primary">Pigmo</strong>!</h1>
        <p className="text-low-contrast mt-3 text-xl font-semibold ">Jogue inteligente conosco. Crie sua conta
          ou entre agora para ganhar recompensas.
        </p>

        <div className="flex items-center gap-2 mt-8">
          <Button className="rounded-lg uppercase font-bold shadow-custom-banner bg-gradient-to-r from-gradient-start to-gradient-end">Quero me registrar</Button>

          <Button variant="ghost" size="icon" className="text-white border border-elevation-3 rounded-lg">
            <GoogleIcon />
          </Button>
          <Button variant="ghost" size="icon" className="border border-elevation-3 rounded-lg">
            <Image
              src="/assets/svg/fox.svg"
              alt="fox-icon"
              width={22}
              height={22}
              className="w-auto h-auto"
            />
          </Button>
          <Button variant="ghost" size="icon" className="text-white border border-elevation-3 rounded-lg">
            <MenuWelcomeIcon />
          </Button>
        </div>
      </div>

      <figure>
        <Image
          src="/assets/img/img-cassino.png"
          alt="img-cassino"
          width={850}
          height={940}
          className="w-auto h-auto"
        />
      </figure>
    </section>
  )
}