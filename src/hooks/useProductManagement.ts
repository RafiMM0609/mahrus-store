import { useState } from "react";
import { products as initialProducts, Product } from "@/data/products";

export function useProductManagement() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(p => p.id !== id));
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
    setEditingProduct(null);
    setIsAdding(false);
  };

  const handleCancel = () => {
    setEditingProduct(null);
    setIsAdding(false);
  };

  return {
    products,
    editingProduct,
    isAdding,
    handleDelete,
    handleEdit,
    handleAdd,
    handleSave,
    handleCancel,
  };
}