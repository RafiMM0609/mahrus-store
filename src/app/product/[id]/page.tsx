import { notFound } from "next/navigation";
import { ProductDetail } from "@/app/_components/product-detail";
import { formatCurrency } from "@/lib/format-currency";
import { getProductById, products } from "@/data/products";
import Link from "next/link";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12 sm:px-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-muted">Detail produk</p>
            <h1 className="text-3xl font-semibold text-foreground">{product.name}</h1>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-semibold text-muted ring-1 ring-inset ring-border/70 transition-colors hover:text-foreground"
          >
            ← Kembali
          </Link>
        </div>

        <div className="rounded-[var(--radius-lg)] bg-surface p-6 shadow-[var(--shadow-soft)] ring-1 ring-border/60">
          <ProductDetail product={product} />
        </div>

        <div className="flex flex-col gap-3 rounded-[var(--radius-md)] bg-card p-4 ring-1 ring-border/60">
          <p className="text-sm font-semibold text-foreground">Next action</p>
          <p className="text-sm text-muted">
            Siapkan integrasi dan pricing plan. Starting price {formatCurrency(product.price)} dapat disesuaikan untuk paket enterprise.
          </p>
        </div>
      </div>
    </main>
  );
}
