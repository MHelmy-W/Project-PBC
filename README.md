# Atlas Vertebrata
**Atlas Struktur & Perkembangan Hewan — Kelompok 5**  
Pendidikan Biologi, FMIPA, Universitas Negeri Jakarta

---

## Struktur Folder

```
atlas-hewan/
├── index.html              ← Halaman beranda
├── animals/
│   ├── ikan-mas.html       ← Cyprinus carpio
│   ├── katak.html          ← Rana sp.
│   ├── kadal.html          ← Mabuya multifasciata
│   ├── marmut.html         ← Cavia cobaya
│   └── burung-dara.html    ← Columba livia (tab ♂ / ♀)
├── css/
│   └── style.css           ← Seluruh desain & responsif
├── js/
│   └── main.js             ← Navigasi mobile, tab, lightbox
└── images/
    ├── ikan-mas/           ← Foto praktikum ikan mas
    ├── katak/              ← Foto praktikum katak
    ├── kadal/              ← Foto praktikum kadal
    ├── marmut/             ← Foto praktikum marmut
    └── burung-dara/
        ├── jantan/         ← Foto spesimen jantan
        └── betina/         ← Foto spesimen betina
```

---

## Cara Menambahkan Foto

Setiap slot gambar dalam file HTML terlihat seperti ini:

```html
<button class="photo-slot" data-title="Bentuk Tubuh & Sirip"
        data-filename="ikan-mas-morfologi-01.jpg">
  ...placeholder...
</button>
<!-- Untuk mengganti: simpan foto sebagai ../images/ikan-mas/ikan-mas-morfologi-01.jpg
     lalu ganti <button class="photo-slot"> di atas dengan:
     <img src="../images/ikan-mas/ikan-mas-morfologi-01.jpg"
          alt="Bentuk Tubuh & Sirip" class="photo-slot-img"> -->
```

**Langkah-langkah:**

1. **Simpan foto** ke folder `images/[nama-hewan]/` sesuai nama file pada atribut `data-filename`.
2. **Buka file HTML** yang sesuai di editor teks (VS Code, Notepad++, dll).
3. **Cari blok `<button class="photo-slot">`** yang ingin diganti.
4. **Ganti** seluruh tag `<button class="photo-slot">...</button>` dengan:
   ```html
   <img src="../images/[folder]/[nama-file.jpg]"
        alt="[Judul gambar]"
        style="width:100%; aspect-ratio:4/3; object-fit:cover; display:block;">
   ```
5. **Perbarui keterangan** gambar di dalam blok `.label-desc` di bawah slot tersebut sesuai hasil pengamatan Anda.

---

## Cara Menambahkan Keterangan Gambar

Keterangan berada di bawah setiap slot gambar:

```html
<div class="label-block">
  <div class="label-no">GAMBAR 1.1</div>
  <div class="label-title">Bentuk Tubuh & Sirip</div>
  <div class="label-desc">
    Tubuh fusiform dengan lima jenis sirip...
    <span class="placeholder-text">Lengkapi/sesuaikan dengan keterangan hasil pengamatan Anda.</span>
  </div>
</div>
```

Cukup edit teks di dalam `.label-desc` dan hapus `<span class="placeholder-text">...</span>` setelah keterangan diisi.

---

## Membuka Situs

Situs ini adalah file HTML statis — tidak memerlukan server atau instalasi apa pun.

**Cara tercepat:** Buka `index.html` langsung di browser (Chrome, Firefox, Edge, dll).

**Cara terbaik** (agar font Google Fonts dimuat sempurna):
```bash
# Python 3
python3 -m http.server 8080
# Kemudian buka: http://localhost:8080
```

---

## Konvensi Nama File Foto

| Halaman         | Format nama file                          |
|-----------------|-------------------------------------------|
| Ikan Mas        | `ikan-mas-[sistem]-[nomor].jpg`           |
| Katak           | `katak-[sistem]-[nomor].jpg`              |
| Kadal           | `kadal-[sistem]-[nomor].jpg`              |
| Marmut          | `marmut-[sistem]-[nomor].jpg`             |
| Burung Dara ♂   | `burung-dara-jantan-[sistem]-[nomor].jpg` |
| Burung Dara ♀   | `burung-dara-betina-[sistem]-[nomor].jpg` |

Contoh sistem: `morfologi`, `integumen`, `otot`, `rangka`, `pencernaan`, `pernapasan`, `sirkulasi`, `saraf`, `urogenital`

---

*Pendidikan Biologi FMIPA UNJ*
