import React, { useEffect, useState } from "react";

//components
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import MultipleStyles from "@/components/MultipleStyles";

//assets
import logo from "../../../public/assets/mingu-black-logo.png";
import Image from "next/image";


export default function StorePage() {
  return (
    <main className="p-3 flex flex-col ">
      <Header backTo="/search" />
      <section className="flex text-center flex-col items-center justify-center gap-2">
        <Image
          src={logo}
          width={400}
          className="rounded-[42px] mx-12 overflow-hidden w-[300px] object-contain h-fit "
          alt="product"
        />
        <p className="text-2xl font-light">em breve...</p>
        <h1 className="text-4xl font-semibold">
          O Minguu te fornecerá os melhores preços pra te fazer chegar enfim no
          LOOK PERFEITO
        </h1>
        <p className="text-2xl font-light">em todas essas categorias:</p>
        <MultipleStyles isCenter />
      </section>
      <section className="flex flex-col gap-2 py-2 mt-12">
        <p className="text-2xl font-light">Explore e conheça mais do Minguu:</p>
        <ProductGrid />
      </section>
    </main>
  );
}
