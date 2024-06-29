import React from "react";

//components
import Image from "next/image";
import Button from "@/components/Button";

//assets
import logo from "../../public/assets/mingu-black-logo.png";
import bg from "../../public/assets/mingu-black-background.png";

export default function Home() {

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
          <Button href="/signup" className="w-full !font-normal !lowercase" >
            sou novo por aqui
          </Button>
          <button
            onClick={() => alert("Impossível ser fashion sem o Minguu")}
            className="w-full font-normal text-lg">
            já sou fashion
          </button>
        </section>
      </section>
    </main>
  );
}
