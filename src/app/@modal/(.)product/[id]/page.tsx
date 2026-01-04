import { notFound } from "next/navigation";
import { ProductDetail } from "@/app/_components/product-detail";
import { ModalShell } from "@/app/_components/modal-shell";
import { getProductById, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductModalPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <ModalShell entityId={product.id} title={product.name}>
      <ProductDetail product={product} />
    </ModalShell>
  );
}
