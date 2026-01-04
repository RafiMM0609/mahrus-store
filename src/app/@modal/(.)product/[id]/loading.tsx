import { ModalShell } from "@/app/_components/modal-shell";

export default function LoadingProductModal() {
  return (
    <ModalShell title="Memuat produk">
      <div className="flex flex-col gap-4 animate-pulse">
        <div className="flex flex-wrap items-center gap-2">
          <div className="h-6 w-24 rounded-full bg-card" />
          <div className="h-6 w-24 rounded-full bg-card" />
        </div>
        <div className="space-y-3">
          <div className="h-8 w-56 rounded-md bg-card" />
          <div className="h-4 w-full rounded-md bg-card" />
          <div className="h-4 w-2/3 rounded-md bg-card" />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="h-20 rounded-md bg-card" />
          <div className="h-20 rounded-md bg-card" />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="h-16 rounded-md bg-card" />
          <div className="h-16 rounded-md bg-card" />
        </div>
      </div>
    </ModalShell>
  );
}
