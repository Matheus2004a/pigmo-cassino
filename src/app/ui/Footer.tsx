import { DiscordIcon } from "@/components/icons/DiscordIcon";
import { PigmoBrandIcon } from "@/components/icons/PigmoBrandIcon";
import { PigmoEyeIcon } from "@/components/icons/PigmoEyeIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { XIcon } from "@/components/icons/XIcon";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="grid bg-elevation-1">
      <div className="grid items-center justify-center p-6">
        <article className="flex items-center justify-between">
          <section className="flex items-center gap-10">
            <PigmoBrandIcon className="text-white min-w-[150px] min-h-[150px]" />

            <figure className="flex items-center">
              <PigmoEyeIcon />
              <figcaption>
                <h3 className="uppercase text-low-contrast tracking-[30px]">
                  Beyond <strong className="text-white">Luck</strong>
                </h3>
              </figcaption>
              <PigmoEyeIcon />
            </figure>
          </section>

          <section className="flex items-center gap-14">
            <div className="grid gap-3">
              <h3 className="uppercase text-white">Plataform</h3>
              <ul className="text-low-contrast">
                <li>About</li>
                <li>Support</li>
                <li>Provably Fair</li>
              </ul>
            </div>

            <div className="grid gap-3">
              <h3 className="uppercase text-white">Policy</h3>
              <ul className="text-low-contrast">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>License</li>
              </ul>
            </div>

            <div className="grid gap-3">
              <h3 className="uppercase text-white">Community</h3>
              <ul className="flex items-center gap-10 text-low-contrast">
                <div>
                  <li>Twitter</li>
                  <li>Instagram</li>
                  <li>Facebook</li>
                </div>

                <div>
                  <li>Telegram</li>
                  <li>Discord</li>
                  <li>Zealy</li>
                </div>
              </ul>
            </div>
          </section>
        </article>

        <section className="flex justify-center items-center max-w-7xl text-white gap-5">
          <figure className="w-fit rounded-lg min-w-[290px] min-h-[90px] p-4 flex items-center gap-4 shadow-custom-discord bg-gradient-to-r from-gradient-end to-gradient-start">
            <DiscordIcon />
            <figcaption className="text-xl overflow-auto">Join <strong>Discord largest community</strong> of players now!</figcaption>
          </figure>

          <figure className="w-fit rounded-lg min-w-[290px] min-h-[90px] p-4 flex items-center gap-4 shadow-custom-telegram bg-gradient-to-r from-gradient-start-telegram to-gradient-end-telegram">
            <TelegramIcon />
            <figcaption className="text-xl overflow-auto">Pigmo is also on Telegram. <strong>Discover more now</strong></figcaption>
          </figure>

          <figure className="w-fit rounded-lg min-w-[290px] min-h-[90px] p-4 flex items-center gap-4 shadow-custom-x border border-elevation-3 bg-gradient-to-r from-gradient-start-x to-gradient-end-x">
            <XIcon />
            <figcaption className="text-xl overflow-auto"><strong>Follow us on X</strong> and keep up everything about us</figcaption>
          </figure>
        </section>
      </div>

      <div className="flex justify-evenly items-center p-6 border-t border-t-low-contrast">
        <p className="text-low-contrast">
          <strong className="text-white">@2024 Pigmo</strong> - All rights reserved. Pigmo is licensed and authorized, operating under the Game Service Provider Master License.
        </p>

        <figure className="flex items-center gap-4">
          <Mail className="text-primary" />
          <figcaption className="uppercase text-low-contrast font-bold">Contact US</figcaption>
        </figure>
      </div>
    </footer>
  )
}