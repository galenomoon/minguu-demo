import React, { useEffect, useState } from "react";

//next
import Link from "next/link";

//mocks
import products from "@/mocks/products-mock";

export default function ProductGrid({ stylesIds = [] }) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (stylesIds.length) {
      const filteredProducts = products.filter((product) =>
        product.styles.some((style) => stylesIds.includes(style))
      );
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [stylesIds]);

  return (
    <section className="grid grid-cols-3 grid-flow-row-dense w-full h-full overflow-auto gap-2 rounded-3xl">
      {filteredProducts.map((product) => (
        <Link
          href={`/${product.name}`}
          key={product.id}
          className="relative flex  rounded-3xl "
        >
          <img
            key={product.id}
            src={product.image}
            alt={product.name}
            className="w-full  object-cover rounded-3xl"
          />
          <div className="absolute rounded-3xl z-20 w-full bg-gradient-to-b px-4 py-2 from-black/5 to-black/80 h-full flex flex-col items-center justify-end">
            <p className="text-[14px] leading-4 font-mono text-white">
              {product.priceRange}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}
