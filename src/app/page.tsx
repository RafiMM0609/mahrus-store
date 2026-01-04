import { ProductList } from "./_components/product-list";
import { ThemeToggle } from "./_components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 sm:px-8 lg:px-12 lg:py-14">
        <header className="flex flex-col gap-6 rounded-[var(--radius-lg)] bg-surface p-6 shadow-[var(--shadow-soft)] ring-1 ring-border/60 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex flex-col gap-3">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/25">
              Marketplace Bergambar
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Produk siap scale dengan visual.
              </h1>
              <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                Daftar produk digital dengan gaya clean code, server component untuk performa, serta tema terpusat
                (primary, secondary, accent) yang mendukung light dan dark mode. Detail produk muncul sebagai modal melalui route intercept.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-muted">
              <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 ring-1 ring-inset ring-border/70">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden /> Server Components
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 ring-1 ring-inset ring-border/70">
                <span className="h-2 w-2 rounded-full bg-secondary" aria-hidden /> Theming terpusat
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 ring-1 ring-inset ring-border/70">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden /> Intercepted modal detail
              </span>
            </div>
          </div>

          <ThemeToggle />
        </header>

        <ProductList />
      </div>
    </main>
  );
}
