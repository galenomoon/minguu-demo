import React from "react";

//next
import Link from "next/link";

//components
import Input from "@/components/Input";
import Button from "@/components/Button";
import MultipleRadioBox from "@/components/MultipleRadioBox";

//libs
import { MdOutlineLock } from "react-icons/md";
import { TiUserOutline } from "react-icons/ti";
import { PiArrowLeftLight } from "react-icons/pi";

export default function SignUpPage() {
  return (
    <main className="p-3 flex flex-col gap-12 h-[120dvh]">
      <Link href="/launch-screen">
        <PiArrowLeftLight size={38} />
      </Link>
      <h1 className="font-bold text-5xl">
        Seja bem <br />
        vindo!
      </h1>
      <section className="flex flex-col w-full h-full gap-3">
        <Input
          label="Seu Nome"
          placeholder="Digite seu nome"
          iconProps={{
            Element: TiUserOutline,
            size: 28,
          }}
        />
        <Input
          label="Senha"
          placeholder="Digite sua senha"
          iconProps={{
            Element: MdOutlineLock,
            size: 26,
          }}
          isPassword={true}
        />
        <Input
          label="Confirmar Senha"
          placeholder="Confirme sua senha"
          iconProps={{
            Element: MdOutlineLock,
            size: 26,
          }}
          isPassword={true}
        />
        <MultipleRadioBox />
        <Button href="/select-style" className="mt-3">
					Próximo
				</Button>
        <p className="w-full text-center mt-4 flex items-center justify-center gap-1">
          Já é um dos fashions?
          <Link href="/" className="underline font-semibold">
            Entrar
          </Link>
        </p>
      </section>
    </main>
  );
}
