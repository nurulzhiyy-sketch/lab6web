// Mini Project: Form Pendaftaran Workshop
// Fitur: validasi (submit), penghitung karakter + ringkasan live (input),
// info sesi (change), tombol reset (click), pesan error & sukses.

const form = document.getElementById("formWorkshop");
const inputNama = document.getElementById("nama");
const inputEmail = document.getElementById("email");
const selectSesi = document.getElementById("sesi");
const inputCatatan = document.getElementById("catatan");

const errNama = document.getElementById("errNama");
const errEmail = document.getElementById("errEmail");
const errSesi = document.getElementById("errSesi");
const infoSesi = document.getElementById("infoSesi");
const pesanForm = document.getElementById("pesanForm");
const jumlahKarakter = document.getElementById("jumlahKarakter");

const rNama = document.getElementById("rNama");
const rEmail = document.getElementById("rEmail");
const rSesi = document.getElementById("rSesi");
const tombolReset = document.getElementById("tombolReset");

const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ---------- Fungsi bantu ----------
function tampilkanError(input, elemenError, teks) {
  elemenError.textContent = teks;
  input.classList.add("input-salah");
  input.classList.remove("input-benar");
}

function tandaiBenar(input, elemenError) {
  elemenError.textContent = "";
  input.classList.remove("input-salah");
  input.classList.add("input-benar");
}

function bersihkanTanda() {
  [inputNama, inputEmail, selectSesi].forEach(function (el) {
    el.classList.remove("input-salah", "input-benar");
  });
  errNama.textContent = "";
  errEmail.textContent = "";
  errSesi.textContent = "";
}

// ---------- Fungsi 1: validasi (event submit) ----------
function validasiForm() {
  const nama = inputNama.value.trim();
  const email = inputEmail.value.trim();
  const sesi = selectSesi.value;
  let valid = true;

  if (nama === "") {
    tampilkanError(inputNama, errNama, "Nama wajib diisi.");
    valid = false;
  } else if (nama.length < 3) {
    tampilkanError(inputNama, errNama, "Nama minimal 3 karakter.");
    valid = false;
  } else {
    tandaiBenar(inputNama, errNama);
  }

  if (email === "") {
    tampilkanError(inputEmail, errEmail, "Email wajib diisi.");
    valid = false;
  } else if (!polaEmail.test(email)) {
    tampilkanError(inputEmail, errEmail, "Masukkan email yang valid.");
    valid = false;
  } else {
    tandaiBenar(inputEmail, errEmail);
  }

  if (sesi === "") {
    tampilkanError(selectSesi, errSesi, "Pilih salah satu sesi workshop.");
    valid = false;
  } else {
    tandaiBenar(selectSesi, errSesi);
  }

  return valid;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validasiForm()) {
    const nama = inputNama.value.trim();
    const sesi = selectSesi.value;
    pesanForm.textContent = "Pendaftaran berhasil! Terima kasih, " + nama + ". Anda terdaftar di " + sesi + ".";
    pesanForm.className = "pesan sukses";
    resetForm(false);
  } else {
    pesanForm.textContent = "Pendaftaran gagal. Periksa kembali isian yang bertanda merah.";
    pesanForm.className = "pesan gagal";
  }
});

// ---------- Fungsi 2: ringkasan live + penghitung karakter (event input) ----------
function perbaruiRingkasan() {
  rNama.textContent = inputNama.value.trim() || "-";
  rEmail.textContent = inputEmail.value.trim() || "-";
  rSesi.textContent = selectSesi.value || "-";
}

inputNama.addEventListener("input", perbaruiRingkasan);
inputEmail.addEventListener("input", perbaruiRingkasan);

inputCatatan.addEventListener("input", function () {
  jumlahKarakter.textContent = inputCatatan.value.length;
});

// ---------- Fungsi 3: tampilkan sesi terpilih (event change) ----------
selectSesi.addEventListener("change", function () {
  if (selectSesi.value === "") {
    infoSesi.textContent = "";
  } else {
    infoSesi.textContent = "Sesi dipilih: " + selectSesi.value;
    errSesi.textContent = "";
    selectSesi.classList.remove("input-salah");
  }
  perbaruiRingkasan();
});

// ---------- Fungsi 4: reset (event click) ----------
function resetForm(hapusPesan) {
  form.reset();
  bersihkanTanda();
  jumlahKarakter.textContent = "0";
  infoSesi.textContent = "";
  perbaruiRingkasan();
  if (hapusPesan) {
    pesanForm.textContent = "";
    pesanForm.className = "pesan";
  }
}

tombolReset.addEventListener("click", function () {
  resetForm(true);
});

// ---------- Fungsi 5: mode gelap/terang (event click) ----------
const tombolTema = document.getElementById("tombolTema");

function terapkanTema(gelap) {
  document.body.classList.toggle("gelap", gelap);
  tombolTema.textContent = gelap ? "☀️" : "🌙";
}

tombolTema.addEventListener("click", function () {
  const gelap = !document.body.classList.contains("gelap");
  terapkanTema(gelap);
  try {
    localStorage.setItem("temaGelap", gelap ? "1" : "0");
  } catch (e) {
    // penyimpanan tidak tersedia, abaikan
  }
});

try {
  if (localStorage.getItem("temaGelap") === "1") {
    terapkanTema(true);
  }
} catch (e) {
  // abaikan
}
