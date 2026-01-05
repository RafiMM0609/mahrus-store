"use client";

import { NativeDialog } from "@/components/NativeDialog";

type NotificationDialogProps = {
  isOpen: boolean;
  type: "success" | "error";
  message: string;
  onClose: () => void;
};

export function NotificationDialog({
  isOpen,
  type,
  message,
  onClose,
}: NotificationDialogProps) {
  return (
    <NativeDialog
      isOpen={isOpen}
      onClose={onClose}
      title={type === "success" ? "Success" : "Error"}
    >
      <div className="p-4">
        <p
          className={`text-lg mb-4 ${
            type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg border-b-4 border-black shadow-lg hover:shadow-xl hover:translate-y-0.5 transition-all font-bold"
        >
          OK
        </button>
      </div>
    </NativeDialog>
  );
}
