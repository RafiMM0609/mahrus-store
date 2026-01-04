export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  status?: "preorder" | "ready" | "limited";
  badge?: string;
  tags?: string[];
  specs?: string[];
  ctaPrimary?: string;
  ctaSecondary?: string;
  image: {
    src: string;
    alt: string;
  };
};

export const products: Product[] = [
  {
    id: "prd-analytics-kit",
    name: "Analytics Insight Kit",
    description: "Dashboard siap pakai untuk memantau performa produk dan funnel konversi.",
    price: 1490000,
    category: "SaaS",
    status: "ready",
    badge: "Stabil & Production",
    tags: ["dashboard", "growth", "monitoring"],
    specs: ["Grafik real-time", "Alert funnel", "Export CSV/JSON"],
    ctaPrimary: "Lihat demo",
    ctaSecondary: "Hubungi sales",
    image: {
      src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
      alt: "Analytics dashboard preview",
    },
  },
  {
    id: "prd-checkout",
    name: "Modul Checkout",
    description: "Flow checkout teruji dengan dukungan pembayaran kartu, VA, dan e-wallet.",
    price: 990000,
    category: "E-Commerce",
    status: "ready",
    badge: "Optimized",
    tags: ["payment", "conversion"],
    specs: ["Pembayaran multi gateway", "Fraud rule basic", "Kustomisasi UI"],
    ctaPrimary: "Coba sandbox",
    ctaSecondary: "Jadwalkan demo",
    image: {
      src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
      alt: "Checkout flow UI",
    },
  },
  {
    id: "prd-landing",
    name: "Landing Builder",
    description: "Template landing page modular dengan SEO meta otomatis dan blok konten siap pakai.",
    price: 690000,
    category: "Marketing",
    status: "ready",
    badge: "No-Code Friendly",
    tags: ["seo", "templates"],
    specs: ["SEO meta otomatis", "Komponen blok siap pakai", "Publikasi 1 klik"],
    ctaPrimary: "Gunakan template",
    ctaSecondary: "Konsultasi konten",
    image: {
      src: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=80",
      alt: "Landing builder preview",
    },
  },
  {
    id: "prd-insights",
    name: "Customer Insights",
    description: "Segmentasi pelanggan, cohort retention, dan rekomendasi otomatis berbasis perilaku.",
    price: 1890000,
    category: "Data",
    status: "limited",
    badge: "Private Beta",
    tags: ["cohort", "personalization"],
    specs: ["Segmentasi perilaku", "Cohort retention", "Rekomendasi otomatis"],
    ctaPrimary: "Join waitlist",
    ctaSecondary: "Diskusi solusi",
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      alt: "Customer analytics dashboard",
    },
  },
  {
    id: "prd-support",
    name: "Support Desk",
    description: "Inbox terpadu dengan SLA tracking, macro balasan cepat, dan automasi tagging.",
    price: 890000,
    category: "Ops",
    status: "ready",
    badge: "Team Ready",
    tags: ["support", "automation"],
    specs: ["Inbox terpadu", "Macro & SLA", "Automasi tagging"],
    ctaPrimary: "Mulai trial",
    ctaSecondary: "Tonton demo",
    image: {
      src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=900&q=80",
      alt: "Support dashboard",
    },
  },
  {
    id: "prd-warehouse",
    name: "Warehouse Sync",
    description: "Sinkronisasi stok multi-gudang, notifikasi restock, dan audit log real-time.",
    price: 1290000,
    category: "Logistics",
    status: "preorder",
    badge: "Rilis Q1",
    tags: ["inventory", "alerts"],
    specs: ["Sinkron stok multi-gudang", "Restock alert", "Audit log"],
    ctaPrimary: "Daftar early access",
    ctaSecondary: "Hubungi tim produk",
    image: {
      src: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
      alt: "Warehouse operations",
    },
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((item) => item.id === id);
}
