"use client";

import { useProductManagement } from "@/hooks/useProductManagement";
import { NativeDialog } from "@/components/NativeDialog";
import { ProductList } from "@/features/admin/components/ProductList";
import { ProductForm } from "@/features/admin/components/ProductForm";
import { DeleteConfirmDialog } from "@/features/admin/components/DeleteConfirmDialog";
import { NotificationDialog } from "@/features/admin/components/NotificationDialog";

export default function AdminPage() {
  const {
    products,
    editingProduct,
    isAdding,
    confirmDeleteId,
    setConfirmDeleteId,
    notification,
    handleDelete,
    handleConfirmDelete,
    handleEdit,
    handleAdd,
    handleSave,
    handleCancel,
    handleCloseNotification,
  } = useProductManagement();

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12 lg:py-14">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Product Management
          </h1>
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg border-b-4 border-black shadow-lg hover:shadow-xl hover:translate-y-0.5 transition-all font-bold"
          >
            Add Product
          </button>
        </header>

        <NativeDialog
          isOpen={isAdding || !!editingProduct}
          onClose={handleCancel}
          title={editingProduct ? "Edit Product" : "Add Product"}
        >
          <ProductForm
            product={editingProduct}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        </NativeDialog>

        <DeleteConfirmDialog
          isOpen={!!confirmDeleteId}
          onConfirm={handleConfirmDelete}
          onCancel={() => setConfirmDeleteId(null)}
        />

        {notification && (
          <NotificationDialog
            isOpen={!!notification}
            type={notification.type}
            message={notification.message}
            onClose={handleCloseNotification}
          />
        )}

        <ProductList
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </main>
  );
}
