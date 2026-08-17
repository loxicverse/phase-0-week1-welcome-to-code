/*# Conditional Statement | Part 1

oke kawan-kawan, disini kalian akan belajar yang namanya Conditional Statement, Logical Operator, dan Comparisons Operator.

singkatnya sih disini belajar if else, namun nanti ada soal yang dimana kamu harus belajar cara membaca dokumentasi dan cara belajar mandiri, yaitu soal bertema Switch hehe.

yak Buka aja W3school dan kerjakan soal soal berikut
*/

//## Soal 1:
//```js
// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
/*
Algoritma game sederhana: Proxytia

Mulai

Untuk memulai game diperlukan  2 variabel: nama dan peran.
Variabel harus memiliki isi data. 

langkah awal
conditional statement (if else) digunakan untuk mengecek isi data dari variabel nama dan peran menggunakan === "" apakah ada atau kosong
Jika nama === "" artinya belum diisi (nama kosong), maka game akan terhenti dan muncul peringatan 'nama wajib diisi'
dan jika nama sudah diisi (minimal nama.length >= 1) dan peran === "" artinya belum diisi (peran kosong), maka game akan kembali terhenti dan
muncul peringatan 'Pilih Peranmu untuk memulai game'
lakukan hal tersebut sampai variabel nama dan peran sudah tidak kosong, baru masuk ke langkah selanjutnya

langkah selanjutnya
Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
conditional statement (if else) digunakan untuk mengeluarkan output (respon) menggunakan peran.toLowerCase() === "(peran yang tersedia)"
Cek apakah string sama persis dengan kata tertentu
ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
Jika peran yang diambil Ksatria, maka respon yang ditampilkan yaitu: halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
jika tidak dan jika peran yang diambil Tabib, maka respon yang ditampilkan yaitu: halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
jika tidak dan jika peran yang diambil Penyihir, maka respon yang ditampilkan yaitu: halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
jika tidak, maka respon yang ditampilkan yaitu: tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada

Selesai

*/




let nama = "Kk", peran = "Penyihir";
//Peran yang tersedia: Ksatria, Tabib, dan Penyihir

//code disini gunakan console.log untuk outputnya


console.log(`Selamat datang di Proxytia`);
console.log("");

if (nama === ""){
    console.log(`Peringatan: Nama wajib diisi`);
} else if (nama.length >= 1 && peran === ""){
    console.log(`Peringatan: Pilih Peranmu untuk memulai game`);
} else if (nama.length >= 1 && peran.toLowerCase() === "ksatria"){
    console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
} else if (nama.length >= 1 && peran.toLowerCase() === "tabib"){
    console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
} else if (nama.length >= 1 && peran.toLowerCase() === "penyihir"){
    console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
} else if (nama.length >= 1 && peran.length >= 1){
    console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
}


console.log("");