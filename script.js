const daftarSertifikat = [
    {
        judul: "Bali Digifest V",
        penyelenggara: "Pemprov Bali & Primakara University",
        tahun: "2026",
        gambar: "img/sertifikat-3.png",
        info: "Bali Digifest V adalah festival digital di Bali yang memuat forum diskusi dan seminar seputar ekonomi kreatif dan digital. Saya mengikutinya sebagai peserta untuk menambah wawasan tentang perkembangan ekosistem digital di Bali."
    },
    {
        judul: "Spec-Driven Development dengan Kiro",
        penyelenggara: "Dicoding",
        tahun: "2026",
        gambar: "img/sertifikat-1.png",
        info: "Kelas ini mengajarkan alur Spec-Driven Development: menyusun kebutuhan, desain, dan daftar tugas lebih dulu sebelum kode ditulis, dengan bantuan AI lewat Kiro. Saya belajar membuat spesifikasi yang jelas, menulis prompt yang tepat, dan menjaga kualitas kode saat fitur terus bertambah."
    },
    {
        judul: "Belajar Dasar Cloud dan Gen AI di AWS",
        penyelenggara: "Dicoding",
        tahun: "2026",
        gambar: "img/sertifikat-2.png",
        info: "Kelas ini membahas dasar-dasar cloud computing di AWS: layanan komputasi, infrastruktur global, jaringan, dan keamanan. Saya juga mempelajari pengenalan AI, machine learning, dan generative AI yang disediakan AWS."
    }
];

const folder = document.getElementById("folder");
const daftar = document.getElementById("daftar");
const penampil = document.getElementById("penampil");
const gambar = document.getElementById("gambar-sertifikat");
const judul = document.getElementById("judul-sertifikat");
const info = document.getElementById("info-sertifikat");
const tombolSebelumnya = document.getElementById("tombol-sebelumnya");
const tombolBerikutnya = document.getElementById("tombol-berikutnya");
const tombolTutup = document.getElementById("tombol-tutup");

const fotoProfil = document.querySelector(".foto-profil");
let indeksAktif = 0;

function tampilkan(i) {
    indeksAktif = i;
    const item = daftarSertifikat[i];
    gambar.src = item.gambar;
    gambar.alt = "Sertifikat " + item.judul;
    judul.textContent = item.judul;
    info.textContent = item.info;
    penampil.classList.add("buka");
}

daftarSertifikat.forEach((item, i) => {
    const baris = document.createElement("button");
    baris.className = "baris-sertifikat";
    baris.innerHTML = item.judul + "<span>" + item.penyelenggara + " . " + item.tahun + "</span>";
    baris.addEventListener("click", () => tampilkan(i));
    daftar.appendChild(baris);
});

