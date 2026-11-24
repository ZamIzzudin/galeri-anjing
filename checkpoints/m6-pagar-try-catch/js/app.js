/* CHECKPOINT M6 - PAGAR TRY CATCH. Versi final aplikasi.
   Salin seluruh isi file ini ke js/app.js milikmu. */

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
