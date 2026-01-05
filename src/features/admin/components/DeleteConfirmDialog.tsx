"use client";

import { NativeDialog } from "@/components/NativeDialog";

type DeleteConfirmDialogProps = {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export function DeleteConfirmDialog({
  isOpen,
  onConfirm,
  onCancel,
}: DeleteConfirmDialogProps) {
  return (
    <NativeDialog isOpen={isOpen} onClose={onCancel} title="Confirm Delete">
      <div className="p-4">
        <p className="text-lg mb-4">Are you sure you want to delete this product?</p>
        <div className="mt-4 flex gap-2">
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg border-b-4 border-black shadow-lg hover:shadow-xl hover:translate-y-0.5 transition-all font-bold"
          >
            Yes, Delete
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg border-b-4 border-black shadow-lg hover:shadow-xl hover:translate-y-0.5 transition-all font-bold"
          >
            Cancel
          </button>
        </div>
      </div>
    </NativeDialog>
  );
}
