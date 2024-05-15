// Fungsi untuk menghitung luas persegi
function hitungLuasPersegi(sisi) {
  const luasPersegi = sisi * sisi;
  console.log(`1. Luas Persegi dengan sisi ${sisi} adalah ${luasPersegi}`);
}

hitungLuasPersegi(4);

// Fungsi untuk menghitung luas persegi panjang
function hitungLuasPersegiPanjang(panjang, lebar) {
  const luasPersegiPanjang = panjang * lebar;
  console.log(
    `2. Luas Persegi Panjang dengan panjang ${panjang} dan lebar ${lebar} adalah ${luasPersegiPanjang}`
  );
}

hitungLuasPersegiPanjang(5, 6);

// Fungsi untuk menghitung luas segitiga dan mengembalikan nilai
function hitungLuasSegitiga(alas, tinggi) {
  return (alas * tinggi) / 2;
}

let alasSegitiga = 5;
let tinggiSegitiga = 6;
let luasSegitiga = hitungLuasSegitiga(alasSegitiga, tinggiSegitiga);
console.log(
  `3. Luas Segitiga dengan alas ${alasSegitiga} dan tinggi ${tinggiSegitiga} adalah ${luasSegitiga}`
);

// Fungsi untuk menghitung luas lingkaran dan mengembalikan nilai
function hitungLuasLingkaran(r) {
  const pi = Math.PI;
  return pi * r * r;
}

let jariJari = 7;
let luasLingkaran = hitungLuasLingkaran(jariJari);
console.log(
  `4. Luas Lingkaran dengan jari-jari ${jariJari} adalah ${luasLingkaran}`
);

// Fungsi untuk menghitung luas trapesium dan mengembalikan nilai
function hitungLuasTrapesium(sisiAtas, sisiBawah, tinggiTrapesium) {
  const rumusTrapesium = ((sisiAtas + sisiBawah) / 2) * tinggiTrapesium;
  return rumusTrapesium;
}

let sisiAtasTrapesium = 4;
let sisiBawahTrapesium = 6;
let tinggiTrapesium = 5;
let luasTrapesium = hitungLuasTrapesium(
  sisiAtasTrapesium,
  sisiBawahTrapesium,
  tinggiTrapesium
);
console.log(
  `5. Luas Trapesium dengan sisi atas ${sisiAtasTrapesium}, sisi bawah ${sisiBawahTrapesium}, dan tinggi ${tinggiTrapesium} adalah ${luasTrapesium}`
);
