// agar bisa input di terminal
const readline = require("readline");

//objek
let produk = {
  nama: "Sepatu Lari",
  brand: "Adidas",
  harga: 400000,
  kategori: "Olahraga",
  stok: 100,
};

console.log("Objek saat ini: ");
console.log(produk);

// interface readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// fungsi input
function updateObject(property, value) {
  if (property in produk) {
    produk[property] = value;
    console.log(`Nilai '${property}' berhasil diupdate menjadi '${value}'`);
  } else {
    console.log(`Property '${property}' tidak ditemukan dalam objek.`);
  }
}

// pertanyaan
rl.question("Masukkan property: ", (property) => {
  rl.question(`Masukkan nilai baru untuk '${property}': `, (value) => {
    updateObject(property, value);
    console.log("Objek setelah diubah: ");
    console.log(produk);
    rl.close();
  });
});
