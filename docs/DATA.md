# Kontrak data dan kurasi
## plants.json
Array objek dengan id unik stabil, localName, scientificName, family, morphology (leafVenation, leafShape, habit), verificationStatus, dan notes. Status awal seluruh entri: contoh-belum-divalidasi.
Nama ilmiah adalah contoh awal dan belum dilengkapi referensi botani terverifikasi. Sebelum dipakai di kelas, guru perlu mencocokkan spesimen dan nama melalui sumber botani yang dapat ditelusuri; tambahkan references, reviewedBy dan reviewedAt pada iterasi kurasi.

## key.json
start menunjuk ID simpul awal. nodes memetakan ID ke simpul pertanyaan (question dan tepat dua options berisi label serta next), atau hasil (plantId yang ada pada katalog).
Jangan mencampur pertanyaan dan hasil dalam satu simpul. Jangan membuat siklus, referensi putus, simpul atau tumbuhan tanpa jalur.
Pilihan belum tahu ditangani antarmuka dan tidak dialihkan ke kandidat.

## Menambah tumbuhan
1. Amati spesimen lokal, dokumentasikan variasi beberapa individu.
2. Verifikasi identitas dan referensi bersama guru; jangan mengisi observasi yang belum dilakukan.
3. Tambahkan entri dan revisi pasangan kunci agar saling membedakan dalam cakupan dataset.
4. Tambahkan uji jalur, uji dengan spesimen yang tidak ada di katalog, lalu jalankan node --test.
5. Cantumkan batasan dan tanggal validasi. Foto disimpan bersama atribusi dan izin.
