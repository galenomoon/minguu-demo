import React, { useEffect, useState } from "react";

//components
import Image from "next/image";
import Button from "@/components/Button";
import Header from "@/components/Header";

//morra ryan morra
import { usePWAInstall } from 'react-use-pwa-install'

//assets
import logo from "../../../public/assets/mingu-black-logo.png";


export default function StorePage() {
  const install = usePWAInstall()

  return (
    <main className="p-3 flex flex-col h-[100dvh]">
      <Header backTo="/search" />
      <section className="flex text-center h-full flex-col items-center justify-center gap-2">
        <Image
          src={logo}
          width={400}
          className="rounded-[42px] mx-12 overflow-hidden w-[300px] object-contain h-fit "
          alt="product"
        />
        <p className="text-2xl font-light">
          Minguu é uma aplicação que te ajuda a encontrar roupas que combinam com você.
        </p>
        <h1 className="text-4xl font-semibold">
          Baixe o Minguu agora e encontre roupas que combinam com você!
        </h1>
        {install && (
          <button type="button" onClick={install} className="flex mt-6 items-center justify-center bg-primary text-white capitalize font-semibold text-lg w-full py-3 rounded-full">
            Baixar Agora!
          </button>
        )}
      </section>
    </main>
  );
}
