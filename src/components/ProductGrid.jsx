import React, { useEffect, useState } from "react";

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
    <section className="grid grid-cols-3 w-full h-full overflow-auto gap-2 rounded-3xl">
      {filteredProducts.map((product) => (
        <img
          key={product.id}
          src={product.image}
          alt={product.name}
          className="w-full object-cover rounded-3xl"
        />
      ))}
    </section>
  );
}
