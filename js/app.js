// ============================================================
//  GALERI ANJING - Modul 2: Web APIs
//  Peta perhentian:
//  M0 gerbang Console (console.log lalu hapus)
//  M1 tombol berbunyi (addEventListener)
//  M2 kurir pergi (async + fetch)
//  M3 bongkar paket (response.json + penjaga karcis)
//  M4 galeri tampil (renderGaleri)
//  M5 tulisan sedang menyiapkan (status + disabled)
//  M6 pagar try catch + finally
//  M7 restoran kelas (ganti ALAMAT_API + renderMenu)
// ============================================================


// ------------------------------------------------------------
// M0 - GERBANG CONSOLE
// Tulis dulu: console.log("Halo dari galeri");
// Simpan, refresh, pastikan Console berbicara, lalu hapus.
// ------------------------------------------------------------


// ------------------------------------------------------------
// M1 - TOMBOL BERBUNYI
// 1) const ALAMAT_API = "https://dog.ceo/api/breeds/image/random/3"
// 2) Tiga pegangan di bagian atas file:
//      tombol <- elemen ber-ID "btn-ambil"
//      galeri <- elemen ber-ID "galeri"
//      status <- elemen ber-ID "status"
// 3) tombol.addEventListener("click", function () { ... })
//    isi resepnya dulu: console.log("tombol ditekan")
// ------------------------------------------------------------


// ------------------------------------------------------------
// M2 - KURIR PERGI
// Ubah handler jadi async function, lalu di dalamnya:
//   const response = await fetch(ALAMAT_API);
//   console.log(response);
// Tekan tombol: jeda kecil (kurir berjalan), lalu Response
// tampil: status 200, ok true. Paket tersegel di tangan.
// ------------------------------------------------------------


// ------------------------------------------------------------
// M3 - BONGKAR PAKET
// 1) const data = await response.json();
// 2) console.log(data);  // kunci message, array tiga alamat
// 3) Penjaga karcis, TULIS SEKARANG juga:
//    if (!response.ok) {
//      throw new Error("Karcis balasan: " + response.status);
//    }
// Kebiasaan tidak boleh menunggu musibah.
// ------------------------------------------------------------


// ------------------------------------------------------------
// M4 - TAMPILKAN GALERI
// Tulis fungsi renderGaleri(daftarUrl): kosongkan galeri,
// loop for of, createElement("img"), img.src = url,
// img.className = "foto", galeri.append(img).
// Lalu panggil dari handler: renderGaleri(data.message)
// ------------------------------------------------------------


// ------------------------------------------------------------
// M5 - TULISAN SEDANG MENYIAPKAN
// Sebelum fetch:
//   status.textContent = "Mengambil foto...";
//   status.className = "loading";
//   tombol.disabled = true;
// Setelah render: kosongkan textContent, kembalikan className,
// tombol.disabled = false. Latihan: tab Network, Slow 3G.
// ------------------------------------------------------------


// ------------------------------------------------------------
// M6 - PAGAR TRY CATCH
// Bungkus isi handler dengan try { ... }
// catch (error): status "Gagal mengambil data. Cek internet,
// lalu coba lagi." + className "error" + console.log(error)
// finally: tombol.disabled = false
// Uji: ganti dog.ceo jadi dog.cek, tekan tombol, perbaiki lagi.
// ------------------------------------------------------------


// ------------------------------------------------------------
// M7 - RESTORAN KELAS (bonus, hanya setelah demo ngrok)
// Ganti ALAMAT_API jadi alamat ngrok kelas + "/menu-harian.json"
// Tulis renderMenu(daftarMenu): kosongkan galeri, loop,
// createElement("div"), className "kartu",
// kartu.textContent = `${item.nama} - Rp${item.harga}`
// panggil renderMenu(data.menu) setelah paketnya dibongkar.
// ------------------------------------------------------------
