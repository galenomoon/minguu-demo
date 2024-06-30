import React, { useState } from "react";

//components
import Input from "@/components/Input";
import ProductGrid from "@/components/ProductGrid";
import MultipleStyles from "@/components/MultipleStyles";

//libs
import { CiSearch } from "react-icons/ci";
import Header from "@/components/Header";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [stylesIds, setStylesIds] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <main className="p-3 flex flex-col h-[100dvh]">
      <Header />
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
      {!isFocused ? <ProductGrid stylesIds={stylesIds} /> : null}
    </main>
  );
}
