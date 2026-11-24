/* ============================================================
   GALERI ANJING - reference/app-final.js
   Versi final SETELAH M6, identik dengan Lampiran A materi.
   Bagian M7 ada di bawah, dipisah dengan jelas.
   ============================================================ */

const ALAMAT_API = "https://dog.ceo/api/breeds/image/random/3";

const tombol = document.getElementById("btn-ambil");
const galeri = document.getElementById("galeri");
const status = document.getElementById("status");

function renderGaleri(daftarUrl) {
  galeri.innerHTML = "";
  for (const url of daftarUrl) {
    const img = document.createElement("img");
    img.src = url;
    img.className = "foto";
    galeri.append(img);
  }
}

async function ambilFoto() {
  try {
    status.textContent = "Mengambil foto...";
    status.className = "loading";
    tombol.disabled = true;
    const response = await fetch(ALAMAT_API);
    if (!response.ok) {
      throw new Error("Karcis balasan: " + response.status);
    }
    const data = await response.json();
    renderGaleri(data.message);
    status.textContent = "";
    status.className = "";
  } catch (error) {
    status.textContent = "Gagal mengambil data. Cek internet, lalu coba lagi.";
    status.className = "error";
    console.log(error);
  } finally {
    tombol.disabled = false;
  }
}

tombol.addEventListener("click", ambilFoto);

/* ============================================================
   M7 - hanya setelah demo ngrok
   1) Ganti ALAMAT_API di atas dengan alamat kelas:
      const ALAMAT_API = "https://xxxx.ngrok.io/menu-harian.json";
   2) Tambahkan renderMenu di bawah, lalu di dalam ambilFoto,
      setelah paketnya dibongkar, panggil renderMenu(data.menu).
   ============================================================ */

// const ALAMAT_API = "https://xxxx.ngrok.io/menu-harian.json"; // ganti dengan alamat kelas

// function renderMenu(daftarMenu) {
//   galeri.innerHTML = "";
//   for (const item of daftarMenu) {
//     const kartu = document.createElement("div");
//     kartu.className = "kartu";
//     kartu.textContent = `${item.nama} - Rp${item.harga}`;
//     galeri.append(kartu);
//   }
// }
