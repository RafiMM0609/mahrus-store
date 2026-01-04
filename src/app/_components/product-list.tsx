import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "./product-card";
import { FilterPills } from "./filter-pills";

export async function ProductList({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const category = searchParams?.category as string;
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <section className="flex flex-col gap-6">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-muted">Katalog produk digital bergambar</p>
          <h2 className="text-2xl font-semibold text-foreground">Pilihan terbaik untuk go-to-market</h2>
        </div>
        <span className="inline-flex items-center gap-2 self-start rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted ring-1 ring-inset ring-border/70">
          <span className="h-2.5 w-2.5 rounded-full bg-secondary" aria-hidden />
          {filteredProducts.length} produk
        </span>
      </header>

      <FilterPills categories={categories} currentCategory={category} />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
