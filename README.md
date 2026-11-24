# LAPORAN PRAKTIKUM PEMROGRAMAN WEB
## Praktikum 6: JavaScript DOM dan Event Handling

| | |
|---|---|
| Nama | _Anzeni nurul zhiyah_ |
| NIM | _312510104_ |
| Kelas | _I253B_ |
| Mata Kuliah | Pemrograman Web (Pertemuan 10) |

---

## 1. Tujuan Praktikum

1. Memahami DOM sebagai representasi dokumen HTML yang dapat diakses melalui JavaScript.
2. Memilih dan mengubah elemen (teks, atribut, kelas CSS) dengan JavaScript.
3. Menangani event pengguna dengan `addEventListener()`.
4. Membuat validasi form dan halaman interaktif dengan minimal tiga fungsi.

## 2. Struktur File

```
Lab6Web/                                       
├── index.html / style.css / script.js       
├── screenshots/        ## latihan 1-6      ## latihan mini project
└── README.md
```

## 3. Langkah Kerja dan Hasil

### Latihan 1 & 2— Mengubah teks dengan DOM
Memilih elemen dengan `getElementById()` dan mengubah isinya lewat `textContent`.

![Latihan 1 & 2](media/latihan%201%20&%202.png)


### Latihan 3 — Mengubah kelas CSS
`classList.toggle()` menambah atau menghapus kelas `highlight` dan `teks-besar`.

![Latihan 3](media/latihan%203.png)

### Latihan 4 — Event input dan penghitung karakter
Event `input` memperbarui jumlah karakter saat pengguna mengetik.

![Latihan 4](media/latihan%204.png)

### Latihan 5 — Validasi form pendaftaran
Event `submit` dengan `preventDefault()` memeriksa nama, email, dan usia (17–100).

 ![Valid](media/latihan%205.png) |

### Latihan 6 — To-do List
Tugas ditambahkan dengan `createElement()` dan `appendChild()`, lalu ditandai selesai dengan `classList.toggle()`.

![Latihan 6](media/latihan%206.png)

## 4. Mini Project — Pendaftaran Workshop

Fitur interaktif:

| No | Fitur | Event |
|----|-------|-------|
| 1 | Validasi nama (minimal 3 karakter), email, dan pilihan sesi | `submit` |
| 2 | Penghitung karakter dan ringkasan input langsung | `input` |
| 3 | Menampilkan sesi yang dipilih | `change` |
| 4 | Tombol reset | `click` |
| 5 | Pesan error dan pesan sukses di halaman | `submit` |

Tampilan responsif untuk desktop dan mobile.

| Tampilan awal |
|---------------|
| ![Awal](media/mini%20project%20awal.png) | 

| Input valid (sukses) | 
|----------------------|
| ![Sukses](media/mini%20project%20berhasil.png) |



## 5. Kesimpulan

Praktikum ini membuat saya dapat memilih dan mengubah elemen dengan DOM, menangani event dengan `addEventListener()`, serta membuat validasi form. Mini project berjalan sesuai ketentuan dengan lebih dari tiga fungsi interaktif.

## 6. Referensi

1. MDN Web Docs. Introduction to the DOM. https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
2. MDN Web Docs. Event reference. https://developer.mozilla.org/en-US/docs/Web/Events
3. MDN Web Docs. Client-side form validation. https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
