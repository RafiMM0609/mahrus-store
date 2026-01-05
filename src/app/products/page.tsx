import { ProductList } from "../_components/product-list";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 sm:px-8 lg:px-12 lg:py-14">
        <ProductList searchParams={params} />
      </div>
    </main>
  );
}