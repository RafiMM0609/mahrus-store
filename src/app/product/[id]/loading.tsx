export default function LoadingProductPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12 sm:px-10 animate-pulse">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="h-4 w-28 rounded-md bg-card" />
            <div className="h-8 w-64 rounded-md bg-card" />
          </div>
          <div className="h-10 w-28 rounded-full bg-card" />
        </div>
        <div className="h-72 rounded-[var(--radius-lg)] bg-card" />
        <div className="h-24 rounded-[var(--radius-md)] bg-card" />
      </div>
    </main>
  );
}
