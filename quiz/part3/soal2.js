//## Soal 2. Melakukan Looping Menggunakan For
//```js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
//```

for (let i = 0; i < 5; i++){ //patokan loop luar mau berapa kali, bisa diset (i < (n))
    console.log(`LOOPING PERTAMA`);
    for (let j = 0; j > -1; j--){ //loop dalam diset untuk jalan satu kali setiap 1 loop luar, dengan decrement j-- untuk membuat nilai false di loop dalam agar kembali ke loop luar
        console.log(`LOOPING KEDUA`);
    }
}