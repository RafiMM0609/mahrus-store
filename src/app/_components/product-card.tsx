import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { formatCurrency } from "@/lib/format-currency";

const statusCopy: Record<
  NonNullable<Product["status"]>,
  { label: string; tone: "primary" | "secondary" | "accent" }
> = {
  ready: { label: "Tersedia", tone: "primary" },
  preorder: { label: "Preorder", tone: "secondary" },
  limited: { label: "Terbatas", tone: "accent" },
};

const toneClass: Record<"primary" | "secondary" | "accent", string> = {
  primary: "bg-primary/12 text-primary ring-1 ring-inset ring-primary/25",
  secondary: "bg-secondary/16 text-secondary ring-1 ring-inset ring-secondary/25",
  accent: "bg-accent/16 text-accent ring-1 ring-inset ring-accent/25",
};

const chipClass = "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold";

export function ProductCard({ product }: { product: Product }) {
  const tone = product.status ? statusCopy[product.status] : undefined;

  return (
    <Link href={`/product/${product.id}`} className="group block h-full" prefetch>
      <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] bg-card shadow-[var(--shadow-soft)] ring-1 ring-border/60 transition-transform duration-150 group-hover:-translate-y-1">
        <div className="relative h-48 w-full overflow-hidden bg-surface">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold text-foreground ring-1 ring-inset ring-border/70 backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
            {product.category}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-foreground leading-tight">{product.name}</h3>
            {product.badge ? (
              <span className="text-xs font-medium text-muted">{product.badge}</span>
            ) : null}
          </div>
          <p className="text-sm leading-relaxed text-muted line-clamp-2">{product.description}</p>

          <div className="mt-auto flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted">Harga mulai</span>
              <span className="text-lg font-semibold text-foreground">{formatCurrency(product.price)}</span>
            </div>
            <div className="flex flex-wrap items-center justify-end gap-2">
              {tone ? (
                <span className={`${chipClass} ${toneClass[tone.tone]}`}>
                  <span className="h-2 w-2 rounded-full bg-current opacity-80" aria-hidden />
                  {tone.label}
                </span>
              ) : null}
              {product.tags?.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-[11px] font-medium text-muted ring-1 ring-inset ring-border/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
