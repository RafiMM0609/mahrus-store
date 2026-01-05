import { useState } from "react";
import { products as initialProducts, Product } from "@/data/products";

export function useProductManagement() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleDelete = (id: string) => {
    setConfirmDeleteId(id);
  };

  const handleConfirmDelete = () => {
    if (confirmDeleteId) {
      setProducts(products.filter(p => p.id !== confirmDeleteId));
      setNotification({ type: 'success', message: 'Product deleted successfully!' });
      setConfirmDeleteId(null);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsAdding(false);
  };

  const handleAdd = () => {
    setIsAdding(true);
    setEditingProduct(null);
  };

  const handleSave = (product: Product) => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === product.id ? product : p));
    } else {
      setProducts([...products, { ...product, id: `prd-${Date.now()}` }]);
    }
    setNotification({ type: 'success', message: 'Product saved successfully!' });
    setEditingProduct(null);
    setIsAdding(false);
  };

  const handleCancel = () => {
    setEditingProduct(null);
    setIsAdding(false);
  };

  const handleCloseNotification = () => {
    setNotification(null);
  };

  return {
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
  };
}