"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

type NativeDialogProps = {
  children: React.ReactNode;
  entityId?: string;
  title?: string;
  isOpen: boolean;
  onClose: () => void;
};

export function NativeDialog({ children, entityId, title, isOpen, onClose }: NativeDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      trackEvent({ name: "dialog_open", data: { entityId, title } });
    } else {
      dialog.close();
      trackEvent({ name: "dialog_close", data: { entityId, title } });
    }
  }, [isOpen, entityId, title]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    dialog.addEventListener("keydown", handleEscape);
    return () => dialog.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-50 m-0 h-full w-full bg-transparent backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      onClick={(event) => {
        if (event.target === dialogRef.current) {
          onClose();
        }
      }}
    >
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-3xl max-h-[calc(100vh-3rem)] overflow-y-auto bg-surface p-6 rounded-lg shadow-xl border-b-4 border-black ring-1 ring-border/70">
          <button
            type="button"
            aria-label="Tutup"
            onClick={onClose}
            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-card text-muted ring-1 ring-inset ring-border/70 transition-all hover:shadow-lg hover:translate-y-0.5 font-bold border-b-2 border-black"
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    </dialog>
  );
}