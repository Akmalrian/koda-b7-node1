
function formatTanggalManual(inputUser) {
    // Memecah input DD-MM-YYYY menjadi array [DD, MM, YYYY]
    const parts = inputUser.split('-');
    
    // Validasi dasar: Harus ada 3 bagian dan panjang karakter benar
    if (parts.length !== 3 || parts[0].length !== 2 || parts[1].length !== 2 || parts[2].length !== 4) {
        return "Format tanggal salah";
    }

    const hari = parseInt(parts[0]);
    const bulan = parseInt(parts[1]) - 1; // Bulan di JS dimulai dari 0 (Januari = 0)
    const tahun = parseInt(parts[2]);

    // Membuat objek Date asli JavaScript
    const dateObj = new Date(tahun, bulan, hari);

    // Validasi apakah tanggal tersebut benar-benar ada (contoh: bukan 31 Februari)
    if (dateObj.getFullYear() === tahun && dateObj.getMonth() === bulan && dateObj.getDate() === hari) {
        // Mengembalikan format DD/MM/YYYY
        const d = String(dateObj.getDate());
        const m = String(dateObj.getMonth());
        const y = dateObj.getFullYear();
        return `${d}/${m}/${y}`;
    } else {
        return "Format tanggal salah";
    }
}

module.exports = formatTanggalManual;
