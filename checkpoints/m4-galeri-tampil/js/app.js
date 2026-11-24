/* CHECKPOINT M4 - GALERI TAMPIL.
   Salin seluruh isi file ini ke js/app.js milikmu, lalu lanjut dari sini. */

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

tombol.addEventListener("click", async function () {
  const response = await fetch(ALAMAT_API);
  if (!response.ok) {
    throw new Error("Karcis balasan: " + response.status);
  }
  const data = await response.json();
  renderGaleri(data.message);
});
