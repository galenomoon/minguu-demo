import React, { useState } from "react";

//next
import Image from "next/image";

//components
import Input from "@/components/Input";
import ProductGrid from "@/components/ProductGrid";
import MultipleStyles from "@/components/MultipleStyles";

//libs
import { CiSearch } from "react-icons/ci";
import { ProfileIcon } from "@/components/ProfileIcon";

//assets
import logo from "../../../public/assets/mingu-black-horizontal-logo.png";
import Link from "next/link";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [stylesids, setStylesIds] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <main className="p-3 flex flex-col h-[100dvh]">
      <header className="flex justify-between items-center py-3">
        <Link href="/">
          <Image src={logo} width={128} />
        </Link>
        <ProfileIcon />
      </header>
      <Input
        value={search}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar Estilos..."
        iconProps={{
          Element: CiSearch,
          size: 28,
        }}
      />
      <MultipleStyles
        search={search}
        isRow={!isFocused}
        setStylesIds={setStylesIds}
      />
      {
        !isFocused 
        ? <ProductGrid stylesIds={stylesids} />
        : null
      }
    </main>
  );
}
