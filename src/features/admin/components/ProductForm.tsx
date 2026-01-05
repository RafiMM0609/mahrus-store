"use client";

import { useState, useEffect } from "react";
import { Product } from "@/data/products";

type ProductFormProps = {
  product: Product | null;
  onSave: (product: Product) => void;
  onCancel: () => void;
};

const CATEGORIES = ["SaaS", "E-Commerce", "Marketing", "Data", "Ops", "Logistics"];

export function ProductForm({ product, onSave, onCancel }: ProductFormProps) {
  const [formData, setFormData] = useState<Product>({
    id: "",
    name: "",
    description: "",
    price: 0,
    category: "",
    image: { src: "", alt: "" },
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    } else {
      setFormData({
        id: "",
        name: "",
        description: "",
        price: 0,
        category: "",
        image: { src: "", alt: "" },
      });
    }
  }, [product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface p-6 rounded-lg shadow-xl border-b-4 border-black mb-8"
    >
      <h2 className="text-xl font-bold mb-4">
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
            className="w-full p-2 border-b-2 border-black rounded-lg shadow-md font-medium bg-background"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-black rounded-lg shadow-md font-medium bg-background"
            required
          >
            <option value="">Select category</option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
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
            className="w-full p-2 border-b-2 border-black rounded-lg shadow-md font-medium bg-background"
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
            className="w-full p-2 border-b-2 border-black rounded-lg shadow-md font-medium bg-background"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-black rounded-lg shadow-md font-medium bg-background"
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
            className="w-full p-2 border-b-2 border-black rounded-lg shadow-md font-medium bg-background"
            required
          />
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg border-b-4 border-black shadow-lg hover:shadow-xl hover:translate-y-0.5 transition-all font-bold"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg border-b-4 border-black shadow-lg hover:shadow-xl hover:translate-y-0.5 transition-all font-bold"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
