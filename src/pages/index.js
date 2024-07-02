import React from "react";

//components
import Image from "next/image";

//assets
import logo from "../../public/assets/mingu-black-logo.png";
import bg from "../../public/assets/mingu-black-background.png";

//libs
import { MdDownload } from "react-icons/md";
import { CgSpinner } from "react-icons/cg";
import { usePWAInstall } from "react-use-pwa-install";
import Link from "next/link";
import InstallPWA from "@/components/Test";

export default function Home() {
  const install = usePWAInstall()

  return (
    <main className="px-3 py-12 flex flex-col gap-12 h-[100dvh] relative">
      <Image src={bg} width={900} height={900} className="absolute -left-[200px] z-10" />
      <section className="flex flex-col w-full h-full gap-3 z-20">
        <div className="flex flex-col h-full text-center items-center justify-center">
          <article className="text-center flex flex-col items-center justify-center">
            <Image src={logo} width={256} height={256} />
            <p className="font-light text-xl">
              um look de cada vez
            </p>
          </article>
          <h1 className="font-semibold text-4xl">
            Vista-se melhor com o flamingo mais fashion do Brasil
          </h1>
        </div>
        <section className="flex w-full bg-light-gray rounded-full">
          <InstallPWA onClick={install} className="w-full !flex-row gap-2 !flex-nowrap flex items-center justify-center bg-primary text-white capitalize font-semibold text-lg p-3 rounded-full " >
            {install ?
              <>
                <MdDownload size={32} />
                <p>
                  Baixar
                </p>
              </>
              :
              <CgSpinner size={32} className="animate-spin" />
            }
          </InstallPWA>
          <Link
            href="/signup"
            className="w-full font-normal text-lg flex items-center justify-center">
            comece agora
          </Link>
        </section>
      </section>
    </main>
  );
}
