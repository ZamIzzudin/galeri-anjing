/* CHECKPOINT M7 - RESTORAN KELAS (bonus).
   Salin seluruh isi file ini ke js/app.js milikmu, lalu GANTI
   alamat di ALAMAT_API dengan alamat ngrok kelas yang dibagikan
   instruktur (tanyakan bila belum). Sebelum diganti, menekan
   tombol akan menampilkan pesan gagal yang sopan: itu wajar,
   bukan bug; alamatnya memang belum tujuan mana pun. */

const ALAMAT_API = "https://GANTI-ALAMAT-NGROK-DISINI/menu-harian.json";

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

function renderMenu(daftarMenu) {
  galeri.innerHTML = "";
  for (const item of daftarMenu) {
    const kartu = document.createElement("div");
    kartu.className = "kartu";
    kartu.textContent = `${item.nama} - Rp${item.harga}`;
    galeri.append(kartu);
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
    renderMenu(data.menu);
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
