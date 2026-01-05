"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import { useProductManagement } from "@/hooks/useProductManagement";

export default function AdminPage() {
  const {
    products,
    editingProduct,
    isAdding,
    handleDelete,
    handleEdit,
    handleAdd,
    handleSave,
    handleCancel,
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
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
          >
            Add Product
          </button>
        </header>

        {(isAdding || editingProduct) && (
          <ProductForm
            product={editingProduct}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="bg-surface p-4 rounded-lg shadow">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-muted">{product.category}</p>
              <p className="text-sm">Price: {product.price.toLocaleString()}</p>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => handleEdit(product)}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded hover:bg-secondary/90"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="px-3 py-1 bg-destructive text-destructive-foreground rounded hover:bg-destructive/90"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function ProductForm({
  product,
  onSave,
  onCancel,
}: {
  product: Product | null;
  onSave: (product: Product) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState<Product>(
    product || {
      id: "",
      name: "",
      description: "",
      price: 0,
      category: "",
      image: { src: "", alt: "" },
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "price") {
      setFormData({ ...formData, [name]: Number(value) });
    } else if (name.startsWith("image.")) {
      const key = name.split(".")[1] as "src" | "alt";
      setFormData({
        ...formData,
        image: { ...formData.image, [key]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const categories = ["SaaS", "E-Commerce", "Marketing", "Data", "Ops", "Logistics"];

  return (
    <form onSubmit={handleSubmit} className="bg-surface p-6 rounded-lg shadow mb-8">
      <h2 className="text-xl font-semibold mb-4">
        {product ? "Edit Product" : "Add Product"}
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select category</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Image Src</label>
          <input
            type="text"
            name="image.src"
            value={formData.image.src}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={3}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Image Alt</label>
          <input
            type="text"
            name="image.alt"
            value={formData.image.alt}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-secondary/90"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}