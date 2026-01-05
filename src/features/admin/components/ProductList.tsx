"use client";

import { Product } from "@/data/products";
import { formatCurrency } from "@/lib/format-currency";

type ProductListProps = {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
};

export function ProductList({ products, onEdit, onDelete }: ProductListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-surface p-4 rounded-lg shadow-xl border-b-4 border-black transform hover:translate-y-0.5 transition-transform"
        >
          <h3 className="font-bold">{product.name}</h3>
          <p className="text-sm text-muted font-medium">{product.category}</p>
          <p className="text-sm font-medium">
            Price: {formatCurrency(product.price)}
          </p>
          <div className="mt-2 flex gap-2">
            <button
              onClick={() => onEdit(product)}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg border-b-2 border-black shadow-md hover:shadow-lg hover:translate-y-0.5 transition-all font-bold"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(product.id)}
              className="px-3 py-1 bg-destructive text-destructive-foreground rounded-lg border-b-2 border-black shadow-md hover:shadow-lg hover:translate-y-0.5 transition-all font-bold"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
