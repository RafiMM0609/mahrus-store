import Link from "next/link";
import { products } from "@/data/products";

export default function Home() {
  const selectedCategories = ['SaaS', 'E-Commerce', 'Marketing', 'Data'];

  return (
    <main className="h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col justify-center mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-12">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Kategori Produk
          </h1>
          <p className="text-lg text-muted">
            Temukan produk digital terbaik untuk bisnis Anda
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[120px] flex-1">
          {selectedCategories.map((category, index) => {
            let gridClass = "";
            if (index === 0) gridClass = "md:col-span-2 lg:col-span-2 lg:row-span-2";
            else if (index === 1) gridClass = "md:col-span-1 lg:col-span-1 lg:row-span-1";
            else if (index === 2) gridClass = "md:col-span-1 lg:col-span-1 lg:row-span-1";
            else gridClass = "md:col-span-2 lg:col-span-2 lg:row-span-1";

            return (
              <Link
                key={category}
                href={`/products?category=${encodeURIComponent(category)}`}
                className={`group relative overflow-hidden rounded-lg bg-surface p-4 shadow-lg ring-1 ring-border/60 transition-all hover:shadow-xl hover:ring-primary/50 ${gridClass} flex flex-col justify-center`}
              >
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category}
                  </h2>
                  <p className="text-xs text-muted">
                    Jelajahi produk dalam kategori {category}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
