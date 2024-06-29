import React, { useState } from "react";

//next
import Link from "next/link";

//components
import Input from "@/components/Input";
import Button from "@/components/Button";
import MultipleStyles from "@/components/MultipleStyles";

//libs
import { CiSearch } from "react-icons/ci";
import { PiArrowLeftLight } from "react-icons/pi";

export default function SelectStyle() {
  const [search, setSearch] = useState("");

  return (
    <main className="p-3 flex flex-col gap-12 h-fit min-h-[100dvh]">
      <Link href="/signup">
        <PiArrowLeftLight size={38} />
      </Link>
      <h1 className="font-semibold text-5xl">
        Selecione seu <br />
        Estilo
      </h1>
      <div className="flex flex-col h-full pb-4">
        <section className="flex w-full justify-center gap-3">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar Estilos..."
            iconProps={{
              Element: CiSearch,
              size: 28,
            }}
          />
        </section>
        <section className="min-h-[60dvh]">
          <MultipleStyles />
        </section>
        <Button href="/search" className="my-3">
          Próximo
        </Button>
      </div>
    </main>
  );
}
