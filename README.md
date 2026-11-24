# Galeri Anjing

Template live coding **Modul 2: Introduction to Web APIs** (90 menit). Vanilla JavaScript murni: tanpa build, tanpa dependensi, tanpa instalasi, tanpa server. Cukup double-click `index.html`.

> Aplikasi target: satu tombol "Ambil Foto" yang menampilkan tiga foto anjing dari internet (API dog.ceo), lengkap dengan tulisan "sedang menyiapkan" dan pagar error. Modul 1 membangun rak; modul ini mengisi rak dari luar.

## 1. Cara membuka proyek

1. Clone atau download repo ini, lalu ekstrak bila perlu.
2. Buka foldernya di file manager.
3. Klik dua kali `index.html`. Selesai.

Alternatif: buka lewat VS Code dengan ekstensi Live Server. Karena semua API yang dipakai membuka akses lintas asal (CORS terbuka), hasilnya sama dengan membuka file langsung.

## 2. Ritual tiga gerakan

Simpan (Ctrl+S), refresh (F5), lihat hasilnya di Console (F12). Ditambah satu: kalau hasilnya aneh, buka tab Network untuk melihat kurirnya berangkat.

## 3. Peta milestone M1-M7

Seluruh JavaScript kamu tulis sendiri di `js/app.js` mengikuti instruktur:

| Milestone | Isi satu kalimat | Checkpoint |
| --- | --- | --- |
| M0 | Gerbang Console: `console.log` lalu hapus | - |
| M1 | Tombol berbunyi: `addEventListener` klik | `checkpoints/m1-tombol-berbunyi` |
| M2 | Kurir pergi: `async` + `await fetch(ALAMAT_API)` | `checkpoints/m2-kurir-pergi` |
| M3 | Bongkar paket: `response.json()` + penjaga karcis | `checkpoints/m3-bongkar-paket` |
| M4 | Galeri tampil: `renderGaleri(data.message)` | `checkpoints/m4-galeri-tampil` |
| M5 | Tulisan "Mengambil foto..." + tombol disabled | `checkpoints/m5-sedang-menyiapkan` |
| M6 | Pagar `try/catch/finally`: versi final | `checkpoints/m6-pagar-try-catch` |
| M7 | Bonus Restoran Kelas: ganti `ALAMAT_API` ke alamat ngrok + `renderMenu` | `checkpoints/m7-restoran-kelas` |

M7 bersifat bonus: aplikasi sudah lengkap setelah M6.

## 4. Cara memakai checkpoint

Tertinggal? Buka folder checkpoint pada perhentian terakhir yang selesai, buka `js/app.js` di dalamnya, salin seluruh isinya ke `js/app.js` milikmu, simpan, refresh, angkat tangan, lanjut ikut.

Catatan khusus `m7-restoran-kelas`: sebelum `ALAMAT_API` diganti dengan alamat ngrok kelas yang dibagikan instruktur, menekan tombol menampilkan pesan gagal yang sopan. Itu wajar, bukan bug: alamat placeholder memang belum menunjuk ke mana pun.

## 5. Pemecahan masalah

| Gejala | Penyebab | Obat |
| --- | --- | --- |
| "await is only valid in async function" | Lupa `async` | Tambah `async` di depan `function` |
| `data.message` undefined | Salah jalur JSON | `console.log(data)` dulu, telusuri raknya |
| Kode diam, tak ada error | Salah kapital field, atau 404 tak diperiksa | Cek `response.status`, cek ejaan kunci |
| Tombol beku selamanya | `disabled = true` lalu error sebelum menghidupkan | Hidupkan di `finally` |
| Lupa kutip di alamat | `ALAMAT_API` dianggap variabel | Alamat selalu teks berkutip |

Kalau muncul "Failed to fetch": tiga tersangka urut: internet mati, salah ketik alamat, atau kebijakan CORS (pilih API yang terbuka). Cara deteksi: buka alamat API langsung di tab baru; kalau terbuka tapi fetch gagal, tersangka utamanya CORS.

## 6. Katalog API untuk proyekmu

Kriteria ramah pemula: tanpa API key, cukup GET, dokumentasi punya contoh alamat yang bisa dibuka, dan sudah kamu cicip dulu di Postman.

| Nama | Contoh alamat | Balasan |
| --- | --- | --- |
| Dog CEO | `https://dog.ceo/api/breeds/image/random/3` | array URL foto |
| PokeAPI | `https://pokeapi.co/api/v2/pokemon?limit=10` | daftar nama + url |
| Open-Meteo | `https://open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&current_weather=true` | cuaca kini |
| GitHub | `https://api.github.com/users/nama` | profil publik |
| DummyJSON | `https://dummyjson.com/quotes?limit=5` | daftar kutipan |
| Katalog besar global | github.com/public-apis/public-apis | ratusan pilihan |
| Katalog lokal Indonesia | github.com/farizdotid/DAFTAR-API-LOKAL-INDONESIA | API buatan lokal |

## 7. Struktur folder

```
.
├── README.md
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js             (file live coding: kamu yang mengisi)
├── checkpoints/
│   ├── m1-tombol-berbunyi/
│   ├── m2-kurir-pergi/
│   ├── m3-bongkar-paket/
│   ├── m4-galeri-tampil/
│   ├── m5-sedang-menyiapkan/
│   ├── m6-pagar-try-catch/
│   └── m7-restoran-kelas/
└── reference/
    └── app-final.js       (solusi lengkap versi instruktur)
```

## 8. Kontrak penamaan

Nama berikut terikat dengan slide dan naskah instruktur. Jangan diganti tanpa koordinasi:

- ID: `btn-ambil`, `galeri`, `status`
- Konstanta: `ALAMAT_API`
- Fungsi: `ambilFoto`, `renderGaleri`, `renderMenu`
- Kelas CSS: `foto`, `kartu`, `loading`, `error`
- Jalur data: `data.message` (dog.ceo), `data.menu` (menu kelas)

---

Template untuk sesi live coding Hitlab. Selamat memesan.
