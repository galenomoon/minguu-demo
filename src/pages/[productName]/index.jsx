import React, { useEffect, useState } from "react";

//components
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import MultipleStyles from "@/components/MultipleStyles";

//next
import { useParams } from "next/navigation";

//mocks
import products from "@/mocks/products-mock";
import Link from "next/link";

export default function ProductPage() {
  const { productName } = useParams() || {};
  const [product, setProduct] = useState("");

  useEffect(() => {
    getProduct(productName);
  }, [productName]);

  const getProduct = async (productName) => {
    try {
      const currentProduct = products.find(
        (product) => product.name === productName
      );
      setProduct(currentProduct);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="p-3 flex flex-col ">
      <Header backTo="/search" />
      <section className="flex text-center flex-col items-center justify-center gap-2">
        <img
          src={product?.image || 'https://via.placeholder.com/800x800.png'}
          className="rounded-[42px] border-2 border-light-gray overflow-hidden w-full object-cover "
          alt="product"
        />
        <p className="text-2xl font-light">{product?.priceRange}</p>
        <h1 className="text-4xl font-semibold">{product?.name}</h1>
        <MultipleStyles isRow stylesIds={product?.styles} />
      </section>
      <section className="flex flex-col gap-2 my-4 text-center">
        <p className="text-lg font-light">
          Encontre o melhor preço para o produto:
        </p>
        <div className="flex  gap-2 w-full flex-wrap items-center justify-center">
          {product?.stores?.map((store) => (
            <Link
              href={'/store'}
              key={store.id}
              className="border-2 font-mono font-medium rounded-full h-full w-fit text-nowrap whitespace-nowrap px-2 py-1"
            >
              {store.name} - {store.price}
            </Link>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-2 py-2 mt-12">
        <p className="text-2xl font-light">Veja também</p>
        <ProductGrid  />
      </section>
    </main>
  );
}
