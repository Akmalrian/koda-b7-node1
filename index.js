const masukkanTanggal = require('./minitask-1.js');
const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan Tanggal = ')
  .then((input) => {
    const hasil = masukkanTanggal(input)
    console.log(`Tanggal = ${hasil}!`);
 // Mengembalikan promise baru untuk pertanyaan berikutnya
  })
  .catch((err) => {
    console.error('Terjadi kesalahan:', err);
  })
  .finally(() => {
    rl.close(); // Pastikan interface ditutup
  });
