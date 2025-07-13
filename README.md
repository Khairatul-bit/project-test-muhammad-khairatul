# Suitmedia Ideas Page

Implementasi halaman list ideas dengan Next.js sesuai dengan desain yang diberikan.

## Fitur

1. **Header**
   - Fixed position dengan efek scroll (menghilang saat scroll ke bawah, muncul kembali saat scroll ke atas)
   - Active state menu sesuai halaman yang sedang dikunjungi

2. **Banner**
   - Banner dengan efek parallax antara image dan text
   - Desain dengan area miring pada bagian bawah banner

3. **List Post**
   - Fungsi sort berdasarkan terbaru dan terlama
   - Pilihan jumlah item per page (10, 20, 50)
   - Status items yang ditampilkan (showing 1-10 of 100)
   - State yang tersimpan saat refresh halaman
   - Ratio thumbnail yang konsisten
   - Lazyloading pada image
   - Title post dibatasi maksimal 3 baris dengan ellipsis

4. **API**
   - Menggunakan proxy untuk mengakses API
   - API URL: `https://suitmedia-backend.suitdev.com/api/ideas`

## Teknologi yang Digunakan

- Next.js 14
- TypeScript
- Tailwind CSS
- Axios untuk fetching data
- React Intersection Observer untuk lazy loading

## Cara Menjalankan

1. Install dependencies:
   ```bash
   npm install
   ```

2. Jalankan development server:
   ```bash
   npm run dev
   ```

3. Buka [http://localhost:3000](http://localhost:3000) di browser.

## Build untuk Production

```bash
npm run build
npm start
```