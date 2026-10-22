# Kunci Determinasi Tumbuhan
Media pembelajaran Biologi kelas X SMA Negeri 1 Cisalak untuk mengamati tumbuhan di sekolah dan rumah berdasarkan ciri morfologi.

## Status
Scaffold awal, dibangun dari repository kosong yang diverifikasi pada 22 Oktober 2026. Tidak mengimpor atau mengasumsikan aplikasi terdahulu. Demo hanya membedakan tiga kandidat contoh; hasil bukan kepastian identitas semua tumbuhan.

## Menjalankan
Prasyarat: Python 3 untuk server lokal dan Node.js 22 atau lebih baru untuk pengujian.
```sh
python3 -m http.server 8000
# Buka http://localhost:8000
node --test
```
Tidak ada instalasi paket atau kunci API. Jangan membuka index.html langsung melalui file:// karena data dimuat melalui fetch.

## Struktur
- index.html: halaman demo.
- src/app.js: interaksi pertanyaan, kembali, mulai ulang, dan hasil.
- src/core/determination.js: penelusuran kunci dan validasi struktur.
- src/styles/main.css: tampilan responsif.
- data/plants.json: katalog contoh dengan ciri dan status validasi.
- data/key.json: pasangan pilihan kunci.
- public/images/README.md: aturan aset visual.
- tests/determination.test.js: pemeriksaan alur dan integritas data.
- docs/FEATURES.md: rancangan fitur inti dan batas lingkup.
- docs/DATA.md: kontrak data serta panduan kurasi.
- docs/ROADMAP.md: langkah pengembangan berikutnya.

## Tujuan pembelajaran
Siswa mengamati ciri yang terlihat, mengikuti pasangan pernyataan, menjelaskan alasan pengelompokan, lalu memeriksa kembali bukti dan merefleksikan keterbatasan hasil.

## Alur contoh
Daun bertulang sejajar → kandidat nanas.
Daun bertulang menjala → daun menjari dengan lekukan dalam → kandidat singkong.
Daun bertulang menjala → daun tidak menjari berlekuk dalam dan batang menjalar → kandidat ubi jalar.
Jika ciri tidak cocok atau belum terlihat, hentikan penentuan dan lakukan pengamatan tambahan. Pilihan ini tersedia pada setiap langkah.

## Pengembangan
Baca [rancangan fitur](docs/FEATURES.md), [panduan data](docs/DATA.md), dan [langkah berikutnya](docs/ROADMAP.md).
Demo belum menyimpan data siswa, belum memiliki akun, unggah foto, integrasi PUSPAMANAH, atau identifikasi AI.
Lisensi belum ditetapkan oleh pemilik repository.
