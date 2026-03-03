const masukkanTanggal = require("./formatTanggal.js")
const moment = require("moment")

console.log("welcome")
const hasil = masukkanTanggal("22-11-2023")
console.log(hasil)

// 1. Impor modul readline bawaan Node.js
const readline = require('readline');

// 2. Buat antarmuka (interface) readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// 3. Gunakan rl.question untuk meminta input
rl.question('Masukkan Tanggal? ', (input) => {
    const hasil = masukkanTanggal(input)
    console.log(`Output : ${hasil}!`);
  
  // 4. Tutup interface setelah selesai
    rl.close();
});
