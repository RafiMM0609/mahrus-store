import Image from "next/image";
import type { Product } from "@/data/products";
import { formatCurrency } from "@/lib/format-currency";

const statusLabel: Record<NonNullable<Product["status"]>, string> = {
  ready: "Tersedia",
  preorder: "Preorder",
  limited: "Terbatas",
};

export function ProductDetail({ product }: { product: Product }) {
  const chips = [product.category, ...(product.tags ?? [])];
  const specs = product.specs ?? [];

  return (
    <div className="flex flex-col gap-6">
      <div className="relative h-64 w-full overflow-hidden rounded-[var(--radius-lg)] bg-card ring-1 ring-border/60">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="(min-width: 1024px) 720px, 100vw"
          className="object-cover"
          priority
        />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold text-foreground ring-1 ring-inset ring-border/70 backdrop-blur">
          <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
          {product.category}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-3">
          {product.status ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/25">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
              {statusLabel[product.status]}
            </span>
          ) : null}
          {product.badge ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/14 px-3 py-1 text-xs font-semibold text-secondary ring-1 ring-inset ring-secondary/25">
              <span className="h-2 w-2 rounded-full bg-secondary" aria-hidden />
              {product.badge}
            </span>
          ) : null}
        </div>
        <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">{product.name}</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{product.description}</p>
      </div>

      <div className="flex flex-col gap-4 rounded-[var(--radius-lg)] bg-surface p-4 ring-1 ring-border/60 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-muted">Harga mulai</span>
          <span className="text-2xl font-semibold text-foreground">{formatCurrency(product.price)}</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <ActionButton priority="primary" label={product.ctaPrimary ?? "Lihat demo"} />
          <ActionButton priority="secondary" label={product.ctaSecondary ?? "Hubungi sales"} />
        </div>
        <div className="grid w-full gap-2 text-sm sm:w-auto sm:grid-cols-2 sm:gap-3">
          <div className="rounded-[var(--radius-sm)] bg-card px-3 py-2 ring-1 ring-border/70">
            <p className="text-xs font-semibold text-muted">Kategori</p>
            <p className="text-sm font-semibold text-foreground">{product.category}</p>
          </div>
          <div className="rounded-[var(--radius-sm)] bg-card px-3 py-2 ring-1 ring-border/70">
            <p className="text-xs font-semibold text-muted">Status</p>
            <p className="text-sm font-semibold text-foreground">{product.status ? statusLabel[product.status] : "N/A"}</p>
          </div>
        </div>
      </div>

      {chips.length ? (
        <div className="flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-semibold text-muted ring-1 ring-inset ring-border/70"
            >
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
              {chip}
            </span>
          ))}
        </div>
      ) : null}

      <div className="grid gap-4 rounded-[var(--radius-lg)] bg-card p-5 ring-1 ring-border/60 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-foreground">Nilai utama</h3>
          <p className="text-sm leading-relaxed text-muted">
            Dirancang modular untuk integrasi cepat, dokumentasi jelas, dan performa stabil untuk skala tim produk.
          </p>
        </div>
        <div className="grid gap-3">
          {specs.map((item) => (
            <Feature key={item} title={item} body="" />
          ))}
        </div>
      </div>
    </div>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[var(--radius-md)] bg-surface px-4 py-3 ring-1 ring-border/70">
      <p className="text-sm font-semibold text-foreground">{title}</p>
      {body ? <p className="text-sm leading-relaxed text-muted">{body}</p> : null}
    </div>
  );
}

function ActionButton({ priority, label }: { priority: "primary" | "secondary"; label: string }) {
  const styles =
    priority === "primary"
      ? "bg-primary text-primary-foreground hover:opacity-90"
      : "bg-card text-foreground ring-1 ring-inset ring-border/70 hover:text-primary";

  return (
    <button
      type="button"
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${styles}`}
    >
      {label}
    </button>
  );
}
