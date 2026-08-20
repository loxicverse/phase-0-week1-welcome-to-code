//Latihan Looping
/*
SOAL : Perulangan Angka Spesial (FizzBuzz Variation)
Buatlah perulangan dari 1 sampai 50 dengan pertambahan counter 1. Di dalam perulangan tersebut, berikan ketentuan sebagai berikut:

Jika angka habis dibagi 3, tampilkan "THREE"

Jika angka habis dibagi 5, tampilkan "FIVE"

Jika angka habis dibagi 3 dan 5 sekaligus, tampilkan "THREEFIVE"

Jika tidak memenuhi semua kondisi di atas, tampilkan angka itu sendiri
*/
/*
for (let i = 0; i < 50; i++){
    if (i % 15 === 0){
        console.log(`${i}, THREEFIVE`);
    } else if (i % 3 === 0){
        console.log(`${i}, THREE`);
    } else if (i % 5 === 0){
        console.log(`${i}, FIVE`);
    } else {
        console.log(`${i}`);
    }
}
*/

//Latihan Jenis Looping Javascript
//For Loop (Jumlah iterasi/pengulangan sudah diketahui)

/*
for (let i = 0; i < 10; i++){ //increment(i++): menambah nilai variabel sebanyak 1
    console.log(i);
}

for (i = 10; i > 0; i--){ //decrement(i--): mengurangi nilai variabel sebanyak 1
    console.log(i);
}
*/

//While Loop(Berjalan selama kondisi bernilai benar tanpa jaminan iterasi/pengulangan minimal)
/*
let sandi = "";
while (sandi !== "1234") {
  sandi = prompt("Masukkan sandi:"); // Ulangi sampai sandi benar
}
*/

//do while loop (Blok kode dijalankan setidaknya sekali sebelum kondisi diperiksa)
/*
let hitungan = 1;

do {
  console.log(`Hitungan ke: ${hitungan}`);
  hitungan++;
} while (hitungan <= 3);

// Output:
// Hitungan ke: 1
// Hitungan ke: 2
// Hitungan ke: 3
*/

//for of loop (Mengiterasi nilai dari objek iterable (array, string, dll))
/*
const buah = ["jambu", "semangka", "apel"];

for (const b of buah){
    console.log(b);
}
*/

//for in loop(Mengiterasi properti enumerable dari objek.)
/*
const mobil = { merek: "Toyota", tahun: 2020 };
for (const key in mobil) {
  console.log(key, ":", mobil[key]); // merek: Toyota, tahun: 2020
}
*/

//Kontrol Loop: Break & Continue
//break: Menghentikan loop sepenuhnya (seperti tombol darurat).
//continue: Melompati iterasi saat ini (seperti melewati langkah yang tidak perlu).

//Break
/*
for (let antrean = 1; antrean <= 5; antrean++) {
  if (antrean === 3) {
    console.log(`Tiket nomor ${antrean} ditemukan! Tutup loket.`);
    break; // Loop berhenti total di sini
  }
  console.log(`Memproses antrean nomor: ${antrean}`);
}

console.log("Selesai.");

*/

//Continue
/*
for (let angka = 1; angka <= 5; angka++) {
  if (angka % 2 === 0) {
    continue; // Lewati sisa perintah di bawahnya, lanjut ke angka berikutnya
  }
  console.log(`Angka ganjil: ${angka}`);
}

console.log("Selesai.");
*/

//Latihan Nested Loop
/*
Latihan Tambahan (Optional):
Modifikasi program untuk menampilkan bukan bilangan prima dari 1 hingga 100.
Hitung jumlah bilangan prima dari 1 hingga 100.
Buat program untuk mengecek apakah sebuah angka yang diinput pengguna adalah bilangan prima.

Buat program untuk menampilkan semua bilangan bukan prima dari 1 hingga 100.
Bilangan bukan prima(komposit) adalah bagian dari bilangan asli yang memiliki lebih dari 2 faktor,
sehingga bilangan komposit dapat dibagi lagi oleh bilangan lain selain angka 1 dan bilangan itu sendiri (contoh: 4, 6, 8, 9, 10, dst.).

*/

//code di sini

for (let i = 1; i <=100; i++){
  for (let j = 2; j <= Math.sqrt(i); j++ ){
    if (i % j === 0){
      console.log(i);
      break;
    }
  }
}

/*cara membaca 
for (let i = 1; i <=100; i++) /loop utama angka yang dicek dari 1 sampai 100
for (let j = 2; j <= Math.sqrt(i); j++ )
  mencari pembagi dari j = 2 sampai Math.sqrt(i) dan jika menemukan satu saja dari faktor angka yang habis membagi i,
  maka secara matematis dijamin 100% bahwa angka tersebut adalah bilangan komposit.
  misal math.sqrt(77) adalah 8.77, Batas pembulatan ke bawah adalah 8, Faktor pembentuk math.sqrt(77) adalah 7 dikali 11.
  angka 7 berada diantara 2 <= j <= math.sqrt(i), dimana math.sqrt(i) adalah 8
  Karena saat loop berjalan dari 2 sampai 8 ia langsung menemukan angka 7,
  program langsung tahu bahwa 77 adalah komposit tanpa perlu mengecek angka 11.

  di loop dalam terdapat if (i % j === 0) yang mengecek apakah i habis di bagi j
  dimana j berada direntang diantara 2 <= j <= math.sqrt(i), saat j sampai angka 7 maka bisa langsung dicek
  untuk i = 77 habis dibagi j = 7, sehingga memenuhi kondisi if di loop dalam
  yang kemudian mengeksekusi console.log(i) dan setelahnya menghentikan loop dalam untuk
  mengecek kembali nilai i di loop luar

  jika nilai i lolos sampai if di loop dalam, maka dipastikan nilai i merupakan bukan prima/komposit
  jika tidak, loop luar terus mencari sampai batas iterasi/perulangan yang ditentukan.

  */