/* CHECKPOINT M1 - TOMBOL BERBUNYI.
   Salin seluruh isi file ini ke js/app.js milikmu, lalu lanjut dari sini. */

const ALAMAT_API = "https://dog.ceo/api/breeds/image/random/3";

const tombol = document.getElementById("btn-ambil");
const galeri = document.getElementById("galeri");
const status = document.getElementById("status");

tombol.addEventListener("click", function () {
  console.log("tombol ditekan");
});
