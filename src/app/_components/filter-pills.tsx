"use client";

import { useRouter } from "next/navigation";

function FilterPills({
  categories,
  currentCategory,
}: {
  categories: string[];
  currentCategory?: string;
}) {
  const router = useRouter();

  const handleFilter = (href: string) => {
    router.push(href, { scroll: false });
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => handleFilter("?")}
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset transition-colors cursor-pointer ${
          !currentCategory
            ? "bg-primary text-primary-foreground ring-primary/25"
            : "bg-card text-muted ring-border/70 hover:text-primary"
        }`}
      >
        <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
        Semua
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleFilter(`?category=${encodeURIComponent(cat)}`)}
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset transition-colors cursor-pointer ${
            currentCategory === cat
              ? "bg-primary text-primary-foreground ring-primary/25"
              : "bg-card text-muted ring-border/70 hover:text-primary"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
          {cat}
        </button>
      ))}
    </div>
  );
}

export { FilterPills };