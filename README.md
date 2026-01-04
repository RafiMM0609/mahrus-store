# Marketplace UI

Frontend Next.js (App Router, TypeScript, Tailwind v4) dengan daftar produk bergambar berbasis server component, tema terpusat (primary/secondary/accent), light/dark mode, dan detail produk via modal intercept.

## Jalankan secara lokal

```bash
npm install
npm run dev
# buka http://localhost:3000
```

## Fitur utama
- Server Component product list bergambar dengan data dummy.
- Tema warna terpusat (primary, secondary, accent) + light/dark mode via CSS custom properties.
- Detail produk muncul sebagai modal (route intercept @modal) atau halaman penuh /product/[id].
- Toggle tema, CTA action, dan specs per produk.

## Perintah yang tersedia
- `npm run dev` menjalankan pengembangan.
- `npm run lint` menjalankan ESLint.
- `npm run build` membangun aplikasi produksi.
