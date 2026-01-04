"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

type ModalShellProps = {
  children: React.ReactNode;
  entityId?: string;
  title?: string;
};

export function ModalShell({ children, entityId, title }: ModalShellProps) {
  const router = useRouter();

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        router.back();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [router]);

  useEffect(() => {
    trackEvent({ name: "modal_open", data: { entityId, title } });
    return () => {
      trackEvent({ name: "modal_close", data: { entityId, title } });
    };
  }, [entityId, title]);

  const close = () => router.back();

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm"
      onClick={close}
      role="presentation"
    >
      <div
        className="relative w-full max-w-3xl rounded-[var(--radius-lg)] bg-surface p-6 shadow-[var(--shadow-soft)] ring-1 ring-border/70"
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Tutup"
          onClick={close}
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-card text-muted ring-1 ring-inset ring-border/70 transition-colors hover:text-foreground"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}
