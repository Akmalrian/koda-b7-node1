
function formatTanggalManual(inputUser) {

    const parts = inputUser.split('-');
    
    if (parts.length !== 3 || parts[0].length !== 2 || parts[1].length !== 2 || parts[2].length !== 4) {
        return "Format tanggal salah";
    }

    const hari = parseInt(parts[0]);
    const bulan = parseInt(parts[1]) - 1; 
    const tahun = parseInt(parts[2]);

    const dateObj = new Date(tahun, bulan, hari);

    if (dateObj.getFullYear() === tahun && dateObj.getMonth() === bulan && dateObj.getDate() === hari) {

        const d = String(dateObj.getDate());
        const m = String(dateObj.getMonth());
        const y = dateObj.getFullYear();
        return `${d}/${m}/${y}`;
    } else {
        return "Format tanggal salah";
    }
}

module.exports = formatTanggalManual;
